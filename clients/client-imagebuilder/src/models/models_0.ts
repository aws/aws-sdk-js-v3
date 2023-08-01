// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ImagebuilderServiceException as __BaseException } from "./ImagebuilderServiceException";

/**
 * @public
 * <p>Includes counts by severity level for medium severity and higher level findings, plus a total
 * 			for all of the findings for the specified filter.</p>
 */
export interface SeverityCounts {
  /**
   * @public
   * <p>The total number of findings across all severity levels for the specified filter.</p>
   */
  all?: number;

  /**
   * @public
   * <p>The number of critical severity findings for the specified filter.</p>
   */
  critical?: number;

  /**
   * @public
   * <p>The number of high severity findings for the specified filter.</p>
   */
  high?: number;

  /**
   * @public
   * <p>The number of medium severity findings for the specified filter.</p>
   */
  medium?: number;
}

/**
 * @public
 * <p>Contains counts of vulnerability findings from image scans that run when you create
 * 			new Image Builder images, or build new versions of existing images. The vulnerability counts are
 * 			grouped by severity level. The counts are aggregated across resources to create the
 * 			final tally for the account that owns them.</p>
 */
export interface AccountAggregation {
  /**
   * @public
   * <p>Identifies the account that owns the aggregated resource findings.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>Contains settings for the Systems Manager agent on your build instance.</p>
 */
export interface SystemsManagerAgent {
  /**
   * @public
   * <p>Controls whether the Systems Manager agent is removed from your final build image, prior to
   * 			creating the new AMI. If this is set to true, then the agent is removed from the final
   * 			image. If it's set to false, then the agent is left in, so that it is included in the
   * 			new AMI. The default value is false.</p>
   */
  uninstallAfterBuild?: boolean;
}

/**
 * @public
 * <p>In addition to your infrastructure configuration, these settings provide an extra
 * 			layer of control over your build instances. You can also specify commands to run on
 * 			launch for all of your build instances.</p>
 *          <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base
 * 			image includes the Systems Manager agent, then the AMI that you create will also include the
 * 			agent. For Linux instances, if the base image does not already include the Systems Manager agent,
 * 			Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can
 * 			choose whether to keep it for the AMI that you create.</p>
 */
export interface AdditionalInstanceConfiguration {
  /**
   * @public
   * <p>Contains settings for the Systems Manager agent on your build instance.</p>
   */
  systemsManagerAgent?: SystemsManagerAgent;

  /**
   * @public
   * <p>Use this property to provide commands or a command script to run when you launch your
   * 			build instance.</p>
   *          <p>The userDataOverride property replaces any commands that Image Builder might have added to
   * 			ensure that Systems Manager is installed on your Linux build instance. If you override the user
   * 			data, make sure that you add commands to install Systems Manager, if it is not pre-installed on
   * 			your base image.</p>
   *          <note>
   *             <p>The user data is always base 64 encoded. For example, the following commands are
   * 				encoded as
   * 				<code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$</code>:</p>
   *             <p>
   *                <i>#!/bin/bash</i>
   *             </p>
   *             <p>mkdir -p /var/bb/</p>
   *             <p>touch /var</p>
   *          </note>
   */
  userDataOverride?: string;
}

/**
 * @public
 * @enum
 */
export const ImageStatus = {
  AVAILABLE: "AVAILABLE",
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  DISTRIBUTING: "DISTRIBUTING",
  FAILED: "FAILED",
  INTEGRATING: "INTEGRATING",
  PENDING: "PENDING",
  TESTING: "TESTING",
} as const;

/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 * <p>Image status and the reason for that status.</p>
 */
export interface ImageState {
  /**
   * @public
   * <p>The status of the image.</p>
   */
  status?: ImageStatus | string;

  /**
   * @public
   * <p>The reason for the status of the image.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Details of an Amazon EC2 AMI.</p>
 */
export interface Ami {
  /**
   * @public
   * <p>The Amazon Web Services Region of the Amazon EC2 AMI.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The AMI ID of the Amazon EC2 AMI.</p>
   */
  image?: string;

  /**
   * @public
   * <p>The name of the Amazon EC2 AMI.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Image status and the reason for that status.</p>
   */
  state?: ImageState;

  /**
   * @public
   * <p>The account ID of the owner of the AMI.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>Describes the configuration for a launch permission. The launch permission
 * 			modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2
 * 				ModifyImageAttribute</a> API on behalf of the user for each Region they have
 * 			selected to distribute the AMI. To make an AMI public, set the launch permission
 * 			authorized accounts to <code>all</code>. See the examples for making an AMI public at
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2
 * 				ModifyImageAttribute</a>.</p>
 */
export interface LaunchPermissionConfiguration {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  userIds?: string[];

  /**
   * @public
   * <p>The name of the group.</p>
   */
  userGroups?: string[];

  /**
   * @public
   * <p>The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more
   * 			information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What is
   * 				Organizations?</a>.</p>
   */
  organizationArns?: string[];

  /**
   * @public
   * <p>The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
   * 			For more information about key concepts for Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html">Organizations
   * 				terminology and concepts</a>.</p>
   */
  organizationalUnitArns?: string[];
}

/**
 * @public
 * <p>Define and configure the output AMIs of the pipeline.</p>
 */
export interface AmiDistributionConfiguration {
  /**
   * @public
   * <p>The name of the output AMI.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the AMI distribution configuration. Minimum and maximum length are
   * 			in characters.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of an account to which you want to distribute an image.</p>
   */
  targetAccountIds?: string[];

  /**
   * @public
   * <p>The tags to apply to AMIs distributed to this Region.</p>
   */
  amiTags?: Record<string, string>;

  /**
   * @public
   * <p>The KMS key identifier used to encrypt the distributed image.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to
   * 			launch instances.</p>
   */
  launchPermission?: LaunchPermissionConfiguration;
}

/**
 * @public
 * @enum
 */
export const BuildType = {
  IMPORT: "IMPORT",
  SCHEDULED: "SCHEDULED",
  USER_INITIATED: "USER_INITIATED",
} as const;

/**
 * @public
 */
export type BuildType = (typeof BuildType)[keyof typeof BuildType];

/**
 * @public
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

/**
 * @public
 */
export interface CancelImageCreationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that you want to cancel creation
   * 			for.</p>
   */
  imageBuildVersionArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CancelImageCreationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token that was used for this request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ARN of the image whose creation this request canceled.</p>
   */
  imageBuildVersionArn?: string;
}

/**
 * @public
 * <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
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
 * @public
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
 * @public
 * <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
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
 * @public
 * <p>You have requested an action that that the service doesn't support.</p>
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
 * @public
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
 * @public
 * <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
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
 * @public
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
 * @public
 * <p>Defines a parameter that is used to provide configuration details for the
 * 			component.</p>
 */
export interface ComponentParameterDetail {
  /**
   * @public
   * <p>The name of this input parameter.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of input this parameter provides. The currently supported value is
   * 			"string".</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The default value of this parameter if no input is provided.</p>
   */
  defaultValue?: string[];

  /**
   * @public
   * <p>Describes this parameter.</p>
   */
  description?: string;
}

/**
 * @public
 * @enum
 */
export const Platform = {
  LINUX: "Linux",
  WINDOWS: "Windows",
} as const;

/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const ComponentStatus = {
  DEPRECATED: "DEPRECATED",
} as const;

/**
 * @public
 */
export type ComponentStatus = (typeof ComponentStatus)[keyof typeof ComponentStatus];

/**
 * @public
 * <p>A group of fields that describe the current status of components that are no longer
 * 			active.</p>
 */
export interface ComponentState {
  /**
   * @public
   * <p>The current state of the component.</p>
   */
  status?: ComponentStatus | string;

  /**
   * @public
   * <p>Describes how or why the component changed state.</p>
   */
  reason?: string;
}

/**
 * @public
 * @enum
 */
export const ComponentType = {
  BUILD: "BUILD",
  TEST: "TEST",
} as const;

/**
 * @public
 */
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];

/**
 * @public
 * <p>A detailed view of a component.</p>
 */
export interface Component {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * @public
   * <p>The component type specifies whether Image Builder uses the component to build the image or
   * 			only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * @public
   * <p>The operating system platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, Image Builder performs a prefix match against the base image OS version during image
   * 			recipe creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * @public
   * <p>Describes the current status of the component. This is used for components that are no
   * 			longer active.</p>
   */
  state?: ComponentState;

  /**
   * @public
   * <p>Contains parameter details for each of the parameters that the component document
   * 			defined for the component.</p>
   */
  parameters?: ComponentParameterDetail[];

  /**
   * @public
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>Component data contains the YAML document content for the component.</p>
   */
  data?: string;

  /**
   * @public
   * <p>The KMS key identifier used to encrypt the component.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The encryption status of the component.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The date that Image Builder created the component.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   */
  publisher?: string;

  /**
   * @public
   * <p>Indicates whether component source is hidden from view in the console, and from
   * 			component detail results for API, CLI, or SDK operations.</p>
   */
  obfuscate?: boolean;
}

/**
 * @public
 * <p>Contains a key/value pair that sets the named component parameter.</p>
 */
export interface ComponentParameter {
  /**
   * @public
   * <p>The name of the component parameter to set.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Sets the value for the named component parameter.</p>
   */
  value: string[] | undefined;
}

/**
 * @public
 * <p>Configuration details of the component.</p>
 */
export interface ComponentConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  componentArn: string | undefined;

  /**
   * @public
   * <p>A group of parameter settings that Image Builder uses to configure the component for a specific
   * 			recipe.</p>
   */
  parameters?: ComponentParameter[];
}

/**
 * @public
 * @enum
 */
export const ComponentFormat = {
  SHELL: "SHELL",
} as const;

/**
 * @public
 */
export type ComponentFormat = (typeof ComponentFormat)[keyof typeof ComponentFormat];

/**
 * @public
 * <p>A high-level summary of a component.</p>
 */
export interface ComponentSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The operating system platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The operating system (OS) version that the component supports. If the OS information
   * 			is available, Image Builder performs a prefix match against the base image OS version during
   * 			image recipe creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * @public
   * <p>Describes the current status of the component.</p>
   */
  state?: ComponentState;

  /**
   * @public
   * <p>The component type specifies whether Image Builder uses the component to build the image or
   * 			only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * @public
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The change description for the current version of the component.</p>
   */
  changeDescription?: string;

  /**
   * @public
   * <p>The original creation date of the component.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   */
  publisher?: string;

  /**
   * @public
   * <p>Indicates whether component source is hidden from view in the console,
   * 			and from component detail results for API, CLI, or SDK operations.</p>
   */
  obfuscate?: boolean;
}

/**
 * @public
 * <p>The defining characteristics of a specific version of an Amazon Web Services TOE component.</p>
 */
export interface ComponentVersion {
  /**
   * @public
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
   * @public
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * @public
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
   * @public
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>he operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image
   * 			recipe creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * @public
   * <p>The type of the component denotes whether the component is used to build the image or
   * 			only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * @public
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;
}

/**
 * @public
 * <p>A container encapsulates the runtime environment for an application.</p>
 */
export interface Container {
  /**
   * @public
   * <p>Containers and container images are Region-specific. This is the Region context for
   * 			the container.</p>
   */
  region?: string;

  /**
   * @public
   * <p>A list of URIs for containers created in the context Region.</p>
   */
  imageUris?: string[];
}

/**
 * @public
 * @enum
 */
export const ContainerRepositoryService = {
  ECR: "ECR",
} as const;

/**
 * @public
 */
export type ContainerRepositoryService = (typeof ContainerRepositoryService)[keyof typeof ContainerRepositoryService];

/**
 * @public
 * <p>The container repository where the output container image is stored.</p>
 */
export interface TargetContainerRepository {
  /**
   * @public
   * <p>Specifies the service in which this image was registered.</p>
   */
  service: ContainerRepositoryService | string | undefined;

  /**
   * @public
   * <p>The name of the container repository where the output container image is stored. This
   * 			name is prefixed by the repository location.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 * <p>Container distribution settings for encryption, licensing, and sharing in a specific
 * 			Region.</p>
 */
export interface ContainerDistributionConfiguration {
  /**
   * @public
   * <p>The description of the container distribution configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Tags that are attached to the container distribution configuration.</p>
   */
  containerTags?: string[];

  /**
   * @public
   * <p>The destination repository for the container distribution configuration.</p>
   */
  targetRepository: TargetContainerRepository | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerType = {
  DOCKER: "DOCKER",
} as const;

/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * @public
 * @enum
 */
export const EbsVolumeType = {
  GP2: "gp2",
  GP3: "gp3",
  IO1: "io1",
  IO2: "io2",
  SC1: "sc1",
  ST1: "st1",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type EbsVolumeType = (typeof EbsVolumeType)[keyof typeof EbsVolumeType];

/**
 * @public
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * @public
   * <p>Use to configure device encryption.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>Use to configure delete on termination of the associated device.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * @public
   * <p>Use to configure device IOPS.</p>
   */
  iops?: number;

  /**
   * @public
   * <p>Use to configure the KMS key to use when encrypting the device.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The snapshot that defines the device contents.</p>
   */
  snapshotId?: string;

  /**
   * @public
   * <p>Use to override the device's volume size.</p>
   */
  volumeSize?: number;

  /**
   * @public
   * <p>Use to override the device's volume type.</p>
   */
  volumeType?: EbsVolumeType | string;

  /**
   * @public
   * <p>
   *             <b>For GP3 volumes only</b> – The throughput in MiB/s
   * 			that the volume supports.</p>
   */
  throughput?: number;
}

/**
 * @public
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * @public
   * <p>The device to which these mappings apply.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>Use to manage Amazon EBS-specific configuration for this mapping.</p>
   */
  ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * @public
   * <p>Use to manage instance ephemeral devices.</p>
   */
  virtualName?: string;

  /**
   * @public
   * <p>Use to remove a mapping from the base image.</p>
   */
  noDevice?: string;
}

/**
 * @public
 * <p>Defines a custom base AMI and block device mapping configurations of an instance used
 * 			for building and testing container images.</p>
 */
export interface InstanceConfiguration {
  /**
   * @public
   * <p>The AMI ID to use as the base image for a container build and test instance. If not
   * 			specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.</p>
   */
  image?: string;

  /**
   * @public
   * <p>Defines the block devices to attach for building an instance from this Image Builder
   * 			AMI.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
}

/**
 * @public
 * <p>A container recipe.</p>
 */
export interface ContainerRecipe {
  /**
   * @public
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
   * @public
   * <p>Specifies the type of container, such as Docker.</p>
   */
  containerType?: ContainerType | string;

  /**
   * @public
   * <p>The name of the container recipe.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the container recipe.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The system platform for the container, such as Windows or Linux.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The owner of the container recipe.</p>
   */
  owner?: string;

  /**
   * @public
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
   * @public
   * <p>Build and test components that are included in the container recipe.
   * 			Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * @public
   * <p>A group of options that can be used to configure an instance for building and testing
   * 			container images.</p>
   */
  instanceConfiguration?: InstanceConfiguration;

  /**
   * @public
   * <p>Dockerfiles are text documents that are used to build Docker containers, and ensure
   * 			that they contain all of the elements required by the application running inside. The
   * 			template data consists of contextual variables where Image Builder places build information or
   * 			scripts, based on your container image recipe.</p>
   */
  dockerfileTemplateData?: string;

  /**
   * @public
   * <p>Identifies which KMS key is used to encrypt the container image for distribution to
   * 			the target Region.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A flag that indicates if the target container is encrypted.</p>
   */
  encrypted?: boolean;

  /**
   * @public
   * <p>The base image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * @public
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The working directory for use during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * @public
   * <p>The destination repository for the container image.</p>
   */
  targetRepository?: TargetContainerRepository;
}

/**
 * @public
 * <p>A summary of a container recipe</p>
 */
export interface ContainerRecipeSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Specifies the type of container, such as "Docker".</p>
   */
  containerType?: ContainerType | string;

  /**
   * @public
   * <p>The name of the container recipe.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The system platform for the container, such as Windows or Linux.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The owner of the container recipe.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The base image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * @public
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The semantic version of the component. This version follows the semantic version
   * 			syntax.</p>
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
   * @public
   * <p>Describes the contents of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The change description of the component. Describes what change has been made in this
   * 			version, or what makes this version different from other versions of this
   * 			component.</p>
   */
  changeDescription?: string;

  /**
   * @public
   * <p>The operating system platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * @public
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image
   * 			recipe creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * @public
   * <p>Component <code>data</code> contains inline YAML document content for the component.
   * 			Alternatively, you can specify the <code>uri</code> of a YAML document file stored in
   * 			Amazon S3. However, you cannot specify both properties.</p>
   */
  data?: string;

  /**
   * @public
   * <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL
   * 				(<code>s3://bucket/key</code>), and the requester must have permission to access the
   * 			S3 bucket it points to. If you use Amazon S3, you can specify component content up to your
   * 			service quota.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the component
   * 				<code>data</code> property. You cannot specify both properties.</p>
   */
  uri?: string;

  /**
   * @public
   * <p>The ID of the KMS key that is used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component that this request created.</p>
   */
  componentBuildVersionArn?: string;
}

/**
 * @public
 * <p>You have specified two or more mutually exclusive parameters. Review the error message
 * 			for details.</p>
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
 * @public
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
 * @public
 * <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
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

/**
 * @public
 */
export interface CreateContainerRecipeRequest {
  /**
   * @public
   * <p>The type of container to create.</p>
   */
  containerType: ContainerType | string | undefined;

  /**
   * @public
   * <p>The name of the container recipe.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the container recipe.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The semantic version of the container recipe. This version follows the semantic
   * 			version syntax.</p>
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
   * @public
   * <p>Components for build and test that are included in the container recipe.
   * 			Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * @public
   * <p>A group of options that can be used to configure an instance for building and testing
   * 			container images.</p>
   */
  instanceConfiguration?: InstanceConfiguration;

  /**
   * @public
   * <p>The Dockerfile template used to build your image as an inline data blob.</p>
   */
  dockerfileTemplateData?: string;

  /**
   * @public
   * <p>The Amazon S3 URI for the Dockerfile that will be used to build your container
   * 			image.</p>
   */
  dockerfileTemplateUri?: string;

  /**
   * @public
   * <p>Specifies the operating system platform when you use a custom base image.</p>
   */
  platformOverride?: Platform | string;

  /**
   * @public
   * <p>Specifies the operating system version for the base image.</p>
   */
  imageOsVersionOverride?: string;

  /**
   * @public
   * <p>The base image for the container recipe.</p>
   */
  parentImage: string | undefined;

  /**
   * @public
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The working directory for use during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * @public
   * <p>The destination repository for the container image.</p>
   */
  targetRepository: TargetContainerRepository | undefined;

  /**
   * @public
   * <p>Identifies which KMS key is used to encrypt the container image.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The client token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateContainerRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The client token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Returns the Amazon Resource Name (ARN) of the container recipe that the request
   * 			created.</p>
   */
  containerRecipeArn?: string;
}

/**
 * @public
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
 * @public
 * <p>Identifies the launch template that the associated Windows AMI uses for launching an
 * 			instance when faster launching is enabled.</p>
 *          <note>
 *             <p>You can specify either the <code>launchTemplateName</code> or the
 * 					<code>launchTemplateId</code>, but not both.</p>
 *          </note>
 */
export interface FastLaunchLaunchTemplateSpecification {
  /**
   * @public
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   */
  launchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   */
  launchTemplateName?: string;

  /**
   * @public
   * <p>The version of the launch template to use for faster launching for a Windows
   * 			AMI.</p>
   */
  launchTemplateVersion?: string;
}

/**
 * @public
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a
 * 			fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfiguration {
  /**
   * @public
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled
   * 			Windows AMI.</p>
   */
  targetResourceCount?: number;
}

/**
 * @public
 * <p>Define and configure faster launching for output Windows AMIs.</p>
 */
export interface FastLaunchConfiguration {
  /**
   * @public
   * <p>A Boolean that represents the current state of faster launching for the Windows AMI.
   * 			Set to <code>true</code> to start using Windows faster launching, or <code>false</code>
   * 			to stop using it.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>Configuration settings for managing the number of snapshots that are created from
   * 			pre-provisioned instances for the Windows AMI when faster launching is enabled.</p>
   */
  snapshotConfiguration?: FastLaunchSnapshotConfiguration;

  /**
   * @public
   * <p>The maximum number of parallel instances that are launched for creating
   * 			resources.</p>
   */
  maxParallelLaunches?: number;

  /**
   * @public
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it launches
   * 			Windows instances to create pre-provisioned snapshots.</p>
   */
  launchTemplate?: FastLaunchLaunchTemplateSpecification;

  /**
   * @public
   * <p>The owner account ID for the fast-launch enabled Windows AMI.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>Identifies an Amazon EC2 launch template to use for a specific account.</p>
 */
export interface LaunchTemplateConfiguration {
  /**
   * @public
   * <p>Identifies the Amazon EC2 launch template to use.</p>
   */
  launchTemplateId: string | undefined;

  /**
   * @public
   * <p>The account ID that this configuration applies to.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>Set the specified Amazon EC2 launch template as the default launch template for the
   * 			specified account.</p>
   */
  setDefaultVersion?: boolean;
}

/**
 * @public
 * @enum
 */
export const DiskImageFormat = {
  RAW: "RAW",
  VHD: "VHD",
  VMDK: "VMDK",
} as const;

/**
 * @public
 */
export type DiskImageFormat = (typeof DiskImageFormat)[keyof typeof DiskImageFormat];

/**
 * @public
 * <p>Properties that configure export from your build instance to a compatible file format
 * 			for your VM.</p>
 */
export interface S3ExportConfiguration {
  /**
   * @public
   * <p>The name of the role that grants VM Import/Export permission to export images to your
   * 			S3 bucket.</p>
   */
  roleName: string | undefined;

  /**
   * @public
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
   */
  diskImageFormat: DiskImageFormat | string | undefined;

  /**
   * @public
   * <p>The S3 bucket in which to store the output disk images for your VM.</p>
   */
  s3Bucket: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 path for the bucket where the output disk images for your VM are
   * 			stored.</p>
   */
  s3Prefix?: string;
}

/**
 * @public
 * <p>Defines the settings for a specific Region.</p>
 */
export interface Distribution {
  /**
   * @public
   * <p>The target Region.</p>
   */
  region: string | undefined;

  /**
   * @public
   * <p>The specific AMI settings; for example, launch permissions or AMI tags.</p>
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  /**
   * @public
   * <p>Container distribution settings for encryption, licensing, and sharing in a specific
   * 			Region.</p>
   */
  containerDistributionConfiguration?: ContainerDistributionConfiguration;

  /**
   * @public
   * <p>The License Manager Configuration to associate with the AMI in the specified
   * 			Region.</p>
   */
  licenseConfigurationArns?: string[];

  /**
   * @public
   * <p>A group of launchTemplateConfiguration settings that apply to image distribution for
   * 			specified accounts.</p>
   */
  launchTemplateConfigurations?: LaunchTemplateConfiguration[];

  /**
   * @public
   * <p>Configure export settings to deliver disk images created from your image build, using
   * 			a file format that is compatible with your VMs in that Region.</p>
   */
  s3ExportConfiguration?: S3ExportConfiguration;

  /**
   * @public
   * <p>The Windows faster-launching configurations to use for AMI distribution.</p>
   */
  fastLaunchConfigurations?: FastLaunchConfiguration[];
}

/**
 * @public
 */
export interface CreateDistributionConfigurationRequest {
  /**
   * @public
   * <p>The name of the distribution configuration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The distributions of the distribution configuration.</p>
   */
  distributions: Distribution[] | undefined;

  /**
   * @public
   * <p>The tags of the distribution configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token of the distribution configuration.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was created by
   * 			this request.</p>
   */
  distributionConfigurationArn?: string;
}

/**
 * @public
 * <p>Settings that Image Builder uses to configure the ECR repository and the output container
 * 			images that Amazon Inspector scans.</p>
 */
export interface EcrConfiguration {
  /**
   * @public
   * <p>The name of the container repository that Amazon Inspector scans to identify findings for your
   * 			container images. The name includes the path for the repository location. If you don’t
   * 			provide this information, Image Builder creates a repository in your account named
   * 				<code>image-builder-image-scanning-repository</code> for vulnerability scans of your
   * 			output container images.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>Tags for Image Builder to apply to the output container image that &INS; scans. Tags can
   * 			help you identify and manage your scanned images.</p>
   */
  containerTags?: string[];
}

/**
 * @public
 * <p>Contains settings for Image Builder image resource and container image scans.</p>
 */
export interface ImageScanningConfiguration {
  /**
   * @public
   * <p>A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that
   * 			Amazon Inspector runs against the build instance when you create a new image.</p>
   */
  imageScanningEnabled?: boolean;

  /**
   * @public
   * <p>Contains Amazon ECR settings for vulnerability scans.</p>
   */
  ecrConfiguration?: EcrConfiguration;
}

/**
 * @public
 * <p>Configure image tests for your pipeline build. Tests run after building the image, to
 * 			verify that the AMI or container image is valid before distributing it.</p>
 */
export interface ImageTestsConfiguration {
  /**
   * @public
   * <p>Determines if tests should run after building the image. Image Builder defaults to enable tests
   * 			to run following the image build, before image distribution.</p>
   */
  imageTestsEnabled?: boolean;

  /**
   * @public
   * <p>The maximum time in minutes that tests are permitted to run.</p>
   *          <note>
   *             <p>The timeoutMinutes attribute is not currently active. This value is
   * 				ignored.</p>
   *          </note>
   */
  timeoutMinutes?: number;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that defines how images are
   * 			configured, tested, and assessed.</p>
   */
  imageRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that defines how images are
   * 			configured and tested.</p>
   */
  containerRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that defines and
   * 			configures the outputs of your pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that defines the
   * 			environment in which your image will be built and tested.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The image tests configuration of the image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @public
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * @public
   * <p>The tags of the image.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Contains settings for vulnerability scans.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface CreateImageResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that this request created.</p>
   */
  imageBuildVersionArn?: string;
}

/**
 * @public
 * @enum
 */
export const PipelineExecutionStartCondition = {
  EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
  EXPRESSION_MATCH_ONLY: "EXPRESSION_MATCH_ONLY",
} as const;

/**
 * @public
 */
export type PipelineExecutionStartCondition =
  (typeof PipelineExecutionStartCondition)[keyof typeof PipelineExecutionStartCondition];

/**
 * @public
 * <p>A schedule configures how often and when a pipeline will automatically create a new
 * 			image.</p>
 */
export interface Schedule {
  /**
   * @public
   * <p>The cron expression determines how often EC2 Image Builder evaluates your
   * 				<code>pipelineExecutionStartCondition</code>.</p>
   *          <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use
   * 				cron expressions in EC2 Image Builder</a>.</p>
   */
  scheduleExpression?: string;

  /**
   * @public
   * <p>The timezone that applies to the scheduling expression. For example, "Etc/UTC",
   * 			"America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA timezone format</a>. If not specified this defaults to UTC.</p>
   */
  timezone?: string;

  /**
   * @public
   * <p>The condition configures when the pipeline should trigger a new image build. When the
   * 				<code>pipelineExecutionStartCondition</code> is set to
   * 				<code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic
   * 			version filters on the base image or components in your image recipe, EC2 Image Builder will
   * 			build a new image only when there are new versions of the image or components in your
   * 			recipe that match the semantic version filter. When it is set to
   * 				<code>EXPRESSION_MATCH_ONLY</code>, it will build a new image every time the CRON
   * 			expression matches the current time. For semantic version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API Reference</i>.</p>
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;
}

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 */
export interface CreateImagePipelineRequest {
  /**
   * @public
   * <p>The name of the image pipeline.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure
   * 			images created by this image pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure
   * 			images created by this container pipeline.</p>
   */
  containerRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that will be used
   * 			to build images created by this image pipeline.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that will be used to
   * 			configure and distribute images created by this image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * @public
   * <p>The image test configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @public
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * @public
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * @public
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * @public
   * <p>The tags of the image pipeline.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Contains settings for vulnerability scans.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface CreateImagePipelineResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was created by this
   * 			request.</p>
   */
  imagePipelineArn?: string;
}

/**
 * @public
 */
export interface CreateImageRecipeRequest {
  /**
   * @public
   * <p>The name of the image recipe.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the image recipe.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The semantic version of the image recipe. This version follows the semantic version
   * 			syntax.</p>
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
   * @public
   * <p>The components included in the image recipe.</p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * @public
   * <p>The base image of the image recipe. The value of the string can be the ARN of the base
   * 			image or an AMI ID. The format for the ARN follows this example:
   * 				<code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>.
   * 			You can provide the specific version that you want to use, or you can use a wildcard in
   * 			all of the fields. If you enter an AMI ID for the string value, you must have access to
   * 			the AMI, and the AMI must be in the same Region in which you are using Image Builder.</p>
   */
  parentImage: string | undefined;

  /**
   * @public
   * <p>The block device mappings of the image recipe.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @public
   * <p>The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The working directory used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * @public
   * <p>Specify additional settings and launch scripts for your build instances.</p>
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateImageRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that was created by this
   * 			request.</p>
   */
  imageRecipeArn?: string;
}

/**
 * @public
 * <p>The instance metadata options that apply to the HTTP requests that pipeline builds use
 * 			to launch EC2 build and test instances. For more information about instance metadata
 * 			options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
 * 				<i>
 *                <i>Amazon EC2 User Guide</i>
 *             </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
 * 				<i>
 *                <i>Amazon EC2 Windows Guide</i>
 *             </i> for Windows instances.</p>
 */
export interface InstanceMetadataOptions {
  /**
   * @public
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
   *          <p>The default setting is <b>optional</b>.</p>
   */
  httpTokens?: string;

  /**
   * @public
   * <p>Limit the number of hops that an instance metadata request can traverse to reach its
   * 			destination. The default is one hop. However, if HTTP tokens are required, container
   * 			image builds need a minimum of two hops.</p>
   */
  httpPutResponseHopLimit?: number;
}

/**
 * @public
 * <p>Amazon S3 logging configuration.</p>
 */
export interface S3Logs {
  /**
   * @public
   * <p>The S3 bucket in which to store the logs.</p>
   */
  s3BucketName?: string;

  /**
   * @public
   * <p>The Amazon S3 path to the bucket where the logs are stored.</p>
   */
  s3KeyPrefix?: string;
}

/**
 * @public
 * <p>Logging configuration defines where Image Builder uploads your logs.</p>
 */
export interface Logging {
  /**
   * @public
   * <p>The Amazon S3 logging configuration.</p>
   */
  s3Logs?: S3Logs;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationRequest {
  /**
   * @public
   * <p>The name of the infrastructure configuration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. The service will pick one of these instance types
   * 			based on availability.</p>
   */
  instanceTypes?: string[];

  /**
   * @public
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   */
  instanceProfileName: string | undefined;

  /**
   * @public
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and
   * 			debug the instance used to create your image.</p>
   */
  keyPair?: string;

  /**
   * @public
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * @public
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The instance metadata options that you can set for the HTTP requests that pipeline
   * 			builds use to launch EC2 build and test instances.</p>
   */
  instanceMetadataOptions?: InstanceMetadataOptions;

  /**
   * @public
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was created by
   * 			this request.</p>
   */
  infrastructureConfigurationArn?: string;
}

/**
 * @public
 * <p>Amazon Inspector generates a risk score for each finding. This score helps you to prioritize
 * 			findings, to focus on the most critical findings and the most vulnerable resources. The
 * 			score uses the Common Vulnerability Scoring System (CVSS) format. This format is a
 * 			modification of the base CVSS score that the National Vulnerability Database (NVD)
 * 			provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User
 * 				Guide</i>.</p>
 */
export interface CvssScore {
  /**
   * @public
   * <p>The CVSS base score.</p>
   */
  baseScore?: number;

  /**
   * @public
   * <p>The vector string of the CVSS score.</p>
   */
  scoringVector?: string;

  /**
   * @public
   * <p>The CVSS version that generated the score.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The source of the CVSS score.</p>
   */
  source?: string;
}

/**
 * @public
 * <p>Details about an adjustment that Amazon Inspector made to the CVSS score for a finding.</p>
 */
export interface CvssScoreAdjustment {
  /**
   * @public
   * <p>The metric that Amazon Inspector used to adjust the CVSS score.</p>
   */
  metric?: string;

  /**
   * @public
   * <p>The reason for the CVSS score adjustment.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Details about the source of the score, and the factors that determined the adjustments
 * 			to create the final score.</p>
 */
export interface CvssScoreDetails {
  /**
   * @public
   * <p>The source for the CVSS score.</p>
   */
  scoreSource?: string;

  /**
   * @public
   * <p>The source of the finding.</p>
   */
  cvssSource?: string;

  /**
   * @public
   * <p>The CVSS version that generated the score.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The CVSS score.</p>
   */
  score?: number;

  /**
   * @public
   * <p>A vector that measures the severity of the vulnerability.</p>
   */
  scoringVector?: string;

  /**
   * @public
   * <p>An object that contains details about an adjustment that Amazon Inspector made to the CVSS score
   * 			for the finding.</p>
   */
  adjustments?: CvssScoreAdjustment[];
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component build version to delete.</p>
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The ARN of the component build version that this request deleted.</p>
   */
  componentBuildVersionArn?: string;
}

/**
 * @public
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
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

/**
 * @public
 */
export interface DeleteContainerRecipeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe to delete.</p>
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that was deleted.</p>
   */
  containerRecipeArn?: string;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete.</p>
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was
   * 			deleted.</p>
   */
  distributionConfigurationArn?: string;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource to delete.</p>
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The ARN of the Image Builder image resource that this request deleted.</p>
   */
  imageBuildVersionArn?: string;
}

/**
 * @public
 */
export interface DeleteImagePipelineRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline to delete.</p>
   */
  imagePipelineArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePipelineResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was deleted.</p>
   */
  imagePipelineArn?: string;
}

/**
 * @public
 */
export interface DeleteImageRecipeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe to delete.</p>
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that was deleted.</p>
   */
  imageRecipeArn?: string;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</p>
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was
   * 			deleted.</p>
   */
  infrastructureConfigurationArn?: string;
}

/**
 * @public
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The distribution objects that apply Region-specific settings for the deployment of the
   * 			image to targeted Regions.</p>
   */
  distributions?: Distribution[];

  /**
   * @public
   * <p>The maximum duration in minutes for this distribution configuration.</p>
   */
  timeoutMinutes: number | undefined;

  /**
   * @public
   * <p>The date on which this distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The date on which this distribution configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * @public
   * <p>The tags of the distribution configuration.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A high-level overview of a distribution configuration.</p>
 */
export interface DistributionConfigurationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date on which the distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The date on which the distribution configuration was updated.</p>
   */
  dateUpdated?: string;

  /**
   * @public
   * <p>The tags associated with the distribution configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of Regions where the container image is distributed to.</p>
   */
  regions?: string[];
}

/**
 * @public
 * <p>A filter name and value pair that is used to return a more specific list of results
 * 			from a list operation. Filters can be used to match a set of resources by specific
 * 			criteria, such as tags, attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  values?: string[];
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component that you want to get. Regex requires
   * 			the suffix <code>/\d+$</code>.</p>
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The component object associated with the specified ARN.</p>
   */
  component?: Component;
}

/**
 * @public
 */
export interface GetComponentPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component whose policy you want to
   * 			retrieve.</p>
   */
  componentArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentPolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The component policy.</p>
   */
  policy?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface GetContainerRecipeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe to retrieve.</p>
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The container recipe object that is returned.</p>
   */
  containerRecipe?: ContainerRecipe;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe for the policy being
   * 			requested.</p>
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The container recipe policy object that is returned.</p>
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetDistributionConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			retrieve.</p>
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The distribution configuration object.</p>
   */
  distributionConfiguration?: DistributionConfiguration;
}

/**
 * @public
 */
export interface GetImageRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that you want to get.</p>
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageType = {
  AMI: "AMI",
  DOCKER: "DOCKER",
} as const;

/**
 * @public
 */
export type ImageType = (typeof ImageType)[keyof typeof ImageType];

/**
 * @public
 * <p>An image recipe.</p>
 */
export interface ImageRecipe {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Specifies which type of image is created by the recipe - an AMI or a container
   * 			image.</p>
   */
  type?: ImageType | string;

  /**
   * @public
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the image recipe.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The version of the image recipe.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The components that are included in the image recipe. Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * @public
   * <p>The base image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * @public
   * <p>The block device mappings to apply when creating images from this recipe.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @public
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The working directory to be used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * @public
   * <p>Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test
   * 			your image configuration. Instance configuration adds a layer of control over those
   * 			instances. You can define settings and add scripts to run when an instance is launched
   * 			from your AMI.</p>
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
}

/**
 * @public
 * @enum
 */
export const ImageSource = {
  AMAZON_MANAGED: "AMAZON_MANAGED",
  AWS_MARKETPLACE: "AWS_MARKETPLACE",
  CUSTOM: "CUSTOM",
  IMPORTED: "IMPORTED",
} as const;

/**
 * @public
 */
export type ImageSource = (typeof ImageSource)[keyof typeof ImageSource];

/**
 * @public
 * <p>Details of the infrastructure configuration.</p>
 */
export interface InfrastructureConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];

  /**
   * @public
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;

  /**
   * @public
   * <p>The security group IDs of the infrastructure configuration.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The subnet ID of the infrastructure configuration.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>The Amazon EC2 key pair of the infrastructure configuration.</p>
   */
  keyPair?: string;

  /**
   * @public
   * <p>The terminate instance on failure configuration of the infrastructure
   * 			configuration.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * @public
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * @public
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The instance metadata option settings for the infrastructure configuration.</p>
   */
  instanceMetadataOptions?: InstanceMetadataOptions;

  /**
   * @public
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The resources produced by this image.</p>
 */
export interface OutputResources {
  /**
   * @public
   * <p>The Amazon EC2 AMIs created by this image.</p>
   */
  amis?: Ami[];

  /**
   * @public
   * <p>Container images that the pipeline has generated and stored in the output
   * 			repository.</p>
   */
  containers?: Container[];
}

/**
 * @public
 * @enum
 */
export const ImageScanStatus = {
  ABANDONED: "ABANDONED",
  COLLECTING: "COLLECTING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SCANNING: "SCANNING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type ImageScanStatus = (typeof ImageScanStatus)[keyof typeof ImageScanStatus];

/**
 * @public
 * <p>Shows the vulnerability scan status for a specific image, and the reason for that
 * 			status.</p>
 */
export interface ImageScanState {
  /**
   * @public
   * <p>The current state of vulnerability scans for the image.</p>
   */
  status?: ImageScanStatus | string;

  /**
   * @public
   * <p>The reason for the scan status for the image.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>An Image Builder image. You must specify exactly one recipe for the image – either a
 * 			container recipe (<code>containerRecipe</code>), which creates a container image, or an
 * 			image recipe (<code>imageRecipe</code>), which creates an AMI.</p>
 */
export interface Image {
  /**
   * @public
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
   * @public
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * @public
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
   * @public
   * <p>The image operating system platform, such as Linux or Windows.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>Indicates whether Image Builder collects additional information about the image, such as
   * 			the operating system (OS) version and package list.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * @public
   * <p>The operating system version for instances that launch from this image. For example,
   * 			Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * @public
   * <p>For images that distribute an AMI, this is the image recipe that Image Builder used to
   * 			create the image. For container images, this is empty.</p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * @public
   * <p>For container images, this is the container recipe that Image Builder used to create the
   * 			image. For images that distribute an AMI, this is empty.</p>
   */
  containerRecipe?: ContainerRecipe;

  /**
   * @public
   * <p>The name of the image pipeline that created this image.</p>
   */
  sourcePipelineName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
   */
  sourcePipelineArn?: string;

  /**
   * @public
   * <p>The infrastructure that Image Builder used to create this image.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * @public
   * <p>The distribution configuration that Image Builder used to create this image.</p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * @public
   * <p>The image tests that ran when that Image Builder created this image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @public
   * <p>The date on which Image Builder created this image.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The output resources that Image Builder produces for this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * @public
   * <p>The tags that apply to this image.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * @public
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;

  /**
   * @public
   * <p>Contains information about the current state of scans for this image.</p>
   */
  scanState?: ImageScanState;

  /**
   * @public
   * <p>Contains settings for vulnerability scans.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface GetImageResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image object.</p>
   */
  image?: Image;
}

/**
 * @public
 */
export interface GetImagePipelineRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.</p>
   */
  imagePipelineArn: string | undefined;
}

/**
 * @public
 * <p>Details of an image pipeline.</p>
 */
export interface ImagePipeline {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the image pipeline.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The platform of the image pipeline.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image
   * 			pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used for this
   * 			pipeline.</p>
   */
  containerRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration associated with
   * 			this image pipeline.</p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this
   * 			image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * @public
   * <p>The image tests configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @public
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * @public
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * @public
   * <p>The date on which this image pipeline was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The date on which this image pipeline was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * @public
   * <p>This is no longer supported, and does not return a value.</p>
   */
  dateLastRun?: string;

  /**
   * @public
   * <p>The next date when the pipeline is scheduled to run.</p>
   */
  dateNextRun?: string;

  /**
   * @public
   * <p>The tags of this image pipeline.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Contains settings for vulnerability scans.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface GetImagePipelineResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image pipeline object.</p>
   */
  imagePipeline?: ImagePipeline;
}

/**
 * @public
 */
export interface GetImagePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.</p>
   */
  imageArn: string | undefined;
}

/**
 * @public
 */
export interface GetImagePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image policy object.</p>
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetImageRecipeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image recipe object.</p>
   */
  imageRecipe?: ImageRecipe;
}

/**
 * @public
 */
export interface GetImageRecipePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to
   * 			retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image recipe policy object.</p>
   */
  policy?: string;
}

/**
 * @public
 * <p>GetInfrastructureConfiguration request object.</p>
 */
export interface GetInfrastructureConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			retrieve.</p>
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * @public
 * <p>GetInfrastructureConfiguration response object.</p>
 */
export interface GetInfrastructureConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The infrastructure configuration object.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;
}

/**
 * @public
 */
export interface GetWorkflowExecutionRequest {
  /**
   * @public
   * <p>Use the unique identifier for a runtime instance of the workflow to get
   * 			runtime details.</p>
   */
  workflowExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowExecutionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  ROLLBACK_COMPLETED: "ROLLBACK_COMPLETED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type WorkflowExecutionStatus = (typeof WorkflowExecutionStatus)[keyof typeof WorkflowExecutionStatus];

/**
 * @public
 * @enum
 */
export const WorkflowType = {
  BUILD: "BUILD",
  DISTRIBUTION: "DISTRIBUTION",
  TEST: "TEST",
} as const;

/**
 * @public
 */
export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];

/**
 * @public
 */
export interface GetWorkflowExecutionResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource
   * 			that defines the specified runtime instance of the workflow.</p>
   */
  workflowBuildVersionArn?: string;

  /**
   * @public
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   */
  workflowExecutionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image resource build version that the specified
   * 			runtime instance of the workflow created.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>The type of workflow that Image Builder ran for the specified runtime instance of the workflow.</p>
   */
  type?: WorkflowType | string;

  /**
   * @public
   * <p>The current runtime status for the specified runtime instance of the workflow.</p>
   */
  status?: WorkflowExecutionStatus | string;

  /**
   * @public
   * <p>The output message from the specified runtime instance of the workflow, if applicable.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The total number of steps in the specified runtime instance of the workflow that ran.
   * 			This number should equal the sum of the step counts for steps that succeeded, were skipped,
   * 			and failed.</p>
   */
  totalStepCount?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps that ran successfully in the specified runtime
   * 			instance of the workflow.</p>
   */
  totalStepsSucceeded?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps that failed in the specified runtime instance
   * 			of the workflow.</p>
   */
  totalStepsFailed?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps that were skipped in the specified runtime
   * 			instance of the workflow.</p>
   */
  totalStepsSkipped?: number;

  /**
   * @public
   * <p>The timestamp when the specified runtime instance of the workflow started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>The timestamp when the specified runtime instance of the workflow finished.</p>
   */
  endTime?: string;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionRequest {
  /**
   * @public
   * <p>Use the unique identifier for a specific runtime instance of the workflow step to
   * 			get runtime details for that step.</p>
   */
  stepExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowStepExecutionRollbackStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type WorkflowStepExecutionRollbackStatus =
  (typeof WorkflowStepExecutionRollbackStatus)[keyof typeof WorkflowStepExecutionRollbackStatus];

/**
 * @public
 * @enum
 */
export const WorkflowStepExecutionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type WorkflowStepExecutionStatus =
  (typeof WorkflowStepExecutionStatus)[keyof typeof WorkflowStepExecutionStatus];

/**
 * @public
 */
export interface GetWorkflowStepExecutionResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The unique identifier for the runtime version of the workflow step that you specified
   * 			in the request.</p>
   */
  stepExecutionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource
   * 			that defines this workflow step.</p>
   */
  workflowBuildVersionArn?: string;

  /**
   * @public
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   */
  workflowExecutionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image resource build version that the specified
   * 			runtime instance of the workflow step creates.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>The name of the specified runtime instance of the workflow step.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Describes the specified workflow step.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the action that the specified step performs.</p>
   */
  action?: string;

  /**
   * @public
   * <p>The current status for the specified runtime version of the workflow step.</p>
   */
  status?: WorkflowStepExecutionStatus | string;

  /**
   * @public
   * <p>Reports on the rollback status of the specified runtime version of the workflow step,
   * 			if applicable.</p>
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | string;

  /**
   * @public
   * <p>The output message from the specified runtime instance of the workflow step, if applicable.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Input parameters that Image Builder provided for the specified runtime instance of
   * 			the workflow step.</p>
   */
  inputs?: string;

  /**
   * @public
   * <p>The file names that the specified runtime version of the workflow step created as output.</p>
   */
  outputs?: string;

  /**
   * @public
   * <p>The timestamp when the specified runtime version of the workflow step started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>The timestamp when the specified runtime instance of the workflow step finished.</p>
   */
  endTime?: string;

  /**
   * @public
   * <p>The action to perform if the workflow step fails.</p>
   */
  onFailure?: string;

  /**
   * @public
   * <p>The maximum duration in seconds for this step to complete its action.</p>
   */
  timeoutSeconds?: number;
}

/**
 * @public
 * <p>Contains vulnerability counts for a specific image.</p>
 */
export interface ImageAggregation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the image for this aggregation.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified image.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 */
export interface ImportComponentRequest {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The semantic version of the component. This version follows the semantic version
   * 			syntax.</p>
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
   * @public
   * <p>The description of the component. Describes the contents of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The change description of the component. This description indicates the change that
   * 			has been made in this version, or what makes this version different from other versions
   * 			of this component.</p>
   */
  changeDescription?: string;

  /**
   * @public
   * <p>The type of the component denotes whether the component is used to build the image, or
   * 			only to test it.</p>
   */
  type: ComponentType | string | undefined;

  /**
   * @public
   * <p>The format of the resource that you want to import as a component.</p>
   */
  format: ComponentFormat | string | undefined;

  /**
   * @public
   * <p>The platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * @public
   * <p>The data of the component. Used to specify the data inline. Either <code>data</code>
   * 			or <code>uri</code> can be used to specify the data within the component.</p>
   */
  data?: string;

  /**
   * @public
   * <p>The uri of the component. Must be an Amazon S3 URL and the requester must have permission
   * 			to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your
   * 			service quota. Either <code>data</code> or <code>uri</code> can be used to specify the
   * 			data within the component.</p>
   */
  uri?: string;

  /**
   * @public
   * <p>The ID of the KMS key that should be used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The tags of the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface ImportComponentResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the imported component.</p>
   */
  componentBuildVersionArn?: string;
}

/**
 * @public
 */
export interface ImportVmImageRequest {
  /**
   * @public
   * <p>The name of the base image that is created by the import process.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The semantic version to attach to the base image that was created during the import
   * 			process. This version follows the semantic version syntax.</p>
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
   * @public
   * <p>The description for the base image that is created by the import process.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The operating system platform for the imported VM.</p>
   */
  platform: Platform | string | undefined;

  /**
   * @public
   * <p>The operating system version for the imported VM.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the
   * 			Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in
   * 			the AMI that is created from the VM source as the base image for your recipe.</p>
   */
  vmImportTaskId: string | undefined;

  /**
   * @public
   * <p>Tags that are attached to the import resources.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface ImportVmImageResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AMI that was created during the VM import
   * 			process. This AMI is used as the base image for the recipe that imported the VM.</p>
   */
  imageArn?: string;

  /**
   * @public
   * <p>The idempotency token that was used for this request.</p>
   */
  clientToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListComponentBuildVersionsRequest {
  /**
   * @public
   * <p>The component version Amazon Resource Name (ARN) whose versions you want to
   * 			list.</p>
   */
  componentVersionArn: string | undefined;

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentBuildVersionsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of component summaries for the specified semantic version.</p>
   */
  componentSummaryList?: ComponentSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const Ownership = {
  AMAZON: "Amazon",
  SELF: "Self",
  SHARED: "Shared",
  THIRDPARTY: "ThirdParty",
} as const;

/**
 * @public
 */
export type Ownership = (typeof Ownership)[keyof typeof Ownership];

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * @public
   * <p>Filters results based on the type of owner for the component. By default, this request
   * 			returns a list of components that your account owns. To see results for other types of
   * 			owners, you can specify components that Amazon manages, third party components, or
   * 			components that other accounts have shared with you.</p>
   */
  owner?: Ownership | string;

  /**
   * @public
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
   * @public
   * <p>Returns the list of components for the specified name.</p>
   */
  byName?: boolean;

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of component semantic versions.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *          </note>
   */
  componentVersionList?: ComponentVersion[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListContainerRecipesRequest {
  /**
   * @public
   * <p>Returns container recipes belonging to the specified owner, that have been shared with
   * 			you. You can omit this field to return container recipes belonging to your
   * 			account.</p>
   */
  owner?: Ownership | string;

  /**
   * @public
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
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListContainerRecipesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of container recipes returned for the request.</p>
   */
  containerRecipeSummaryList?: ContainerRecipeSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsRequest {
  /**
   * @public
   * <p>You can filter on <code>name</code> to streamline results.</p>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of distributions.</p>
   */
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImageBuildVersionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to
   * 			retrieve.</p>
   */
  imageVersionArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An image summary.</p>
 */
export interface ImageSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * @public
   * <p>The version of the image.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The image operating system platform, such as Linux or Windows.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The operating system version of the instances that launch from this image. For
   * 			example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * @public
   * <p>The owner of the image.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The date on which Image Builder created this image.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The output resources that Image Builder produced when it created this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * @public
   * <p>The tags that apply to this image.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * @public
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;
}

/**
 * @public
 */
export interface ListImageBuildVersionsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of image build versions.</p>
   */
  imageSummaryList?: ImageSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagePackagesRequest {
  /**
   * @public
   * <p>Filter results for the ListImagePackages request by the Image Build Version ARN</p>
   */
  imageBuildVersionArn: string | undefined;

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents a package installed on an Image Builder image.</p>
 */
export interface ImagePackage {
  /**
   * @public
   * <p>The name of the package as reported to the operating system package manager.</p>
   */
  packageName?: string;

  /**
   * @public
   * <p>The version of the package as reported to the operating system package manager.</p>
   */
  packageVersion?: string;
}

/**
 * @public
 */
export interface ListImagePackagesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of Image Packages returned in the response.</p>
   */
  imagePackageList?: ImagePackage[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagePipelineImagesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to
   * 			view.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagePipelineImagesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of images built by this pipeline.</p>
   */
  imageSummaryList?: ImageSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagePipelinesRequest {
  /**
   * @public
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
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagePipelinesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of image pipelines.</p>
   */
  imagePipelineList?: ImagePipeline[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImageRecipesRequest {
  /**
   * @public
   * <p>The owner defines which image recipes you want to list. By default, this request will
   * 			only show image recipes owned by your account. You can use this field to specify if you
   * 			want to view image recipes owned by yourself, by Amazon, or those image recipes that
   * 			have been shared with you by other customers.</p>
   */
  owner?: Ownership | string;

  /**
   * @public
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
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of an image recipe.</p>
 */
export interface ImageRecipeSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The base image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * @public
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListImageRecipesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of image pipelines.</p>
   */
  imageRecipeSummaryList?: ImageRecipeSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * @public
   * <p>The owner defines which images you want to list. By default, this request will only
   * 			show images owned by your account. You can use this field to specify if you want to view
   * 			images owned by yourself, by Amazon, or those images that have been shared with you by
   * 			other customers.</p>
   */
  owner?: Ownership | string;

  /**
   * @public
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
   * @public
   * <p>Requests a list of images with a specific recipe name.</p>
   */
  byName?: boolean;

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Includes deprecated images in the response list.</p>
   */
  includeDeprecated?: boolean;
}

/**
 * @public
 * <p>The defining characteristics of a specific version of an Image Builder image.</p>
 */
export interface ImageVersion {
  /**
   * @public
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
   * @public
   * <p>The name of this specific version of an Image Builder image.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * @public
   * <p>Details for a specific version of an Image Builder image. This version follows the semantic
   * 			version syntax.</p>
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
   * @public
   * <p>The operating system platform of the image version, for example "Windows" or
   * 			"Linux".</p>
   */
  platform?: Platform | string;

  /**
   * @public
   * <p>The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2,
   * 			Ubuntu 18, or Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The owner of the image version.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The date on which this specific version of the Image Builder image was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * @public
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
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
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsRequest {
  /**
   * @public
   * <p>A filter name and value pair that is used to return a more specific list of results
   * 			from a list operation. Filters can be used to match a set of resources by specific
   * 			criteria, such as tags, attributes, or IDs.</p>
   */
  filter?: Filter;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains vulnerability counts for a specific image pipeline.</p>
 */
export interface ImagePipelineAggregation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the image pipeline for this
   * 			aggregation.</p>
   */
  imagePipelineArn?: string;

  /**
   * @public
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified image pipeline.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>Includes counts of image and pipeline resource findings by vulnerability.</p>
 */
export interface VulnerabilityIdAggregation {
  /**
   * @public
   * <p>The vulnerability Id for this set of counts.</p>
   */
  vulnerabilityId?: string;

  /**
   * @public
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified vulnerability.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>This returns exactly one type of aggregation, based on the filter that Image Builder applies in
 * 			its API action.</p>
 */
export interface ImageScanFindingAggregation {
  /**
   * @public
   * <p>Returns an object that contains severity counts based on an account ID.</p>
   */
  accountAggregation?: AccountAggregation;

  /**
   * @public
   * <p>Returns an object that contains severity counts based on the Amazon Resource Name
   * 			(ARN) for a specific image.</p>
   */
  imageAggregation?: ImageAggregation;

  /**
   * @public
   * <p>Returns an object that contains severity counts based on an image pipeline ARN.</p>
   */
  imagePipelineAggregation?: ImagePipelineAggregation;

  /**
   * @public
   * <p>Returns an object that contains severity counts based on vulnerability ID.</p>
   */
  vulnerabilityIdAggregation?: VulnerabilityIdAggregation;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
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
   */
  aggregationType?: string;

  /**
   * @public
   * <p>An array of image scan finding aggregations that match the filter criteria.</p>
   */
  responses?: ImageScanFindingAggregation[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A name value pair that Image Builder applies to streamline results from the
 * 			vulnerability scan findings list action.</p>
 */
export interface ImageScanFindingsFilter {
  /**
   * @public
   * <p>The name of the image scan finding filter. Filter names are case-sensitive.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  values?: string[];
}

/**
 * @public
 */
export interface ListImageScanFindingsRequest {
  /**
   * @public
   * <p>An array of name value pairs that you can use to filter your results. You can use the
   * 			following filters to streamline results:</p>
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
   *             <li>
   *                <p>
   *                   <code>severity</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you don't request a filter, then all findings in your account are listed.</p>
   */
  filters?: ImageScanFindingsFilter[];

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the factors that influenced the score that Amazon Inspector assigned for a
 * 			finding.</p>
 */
export interface InspectorScoreDetails {
  /**
   * @public
   * <p>An object that contains details about an adjustment that Amazon Inspector made to the CVSS score
   * 			for the finding.</p>
   */
  adjustedCvss?: CvssScoreDetails;
}

/**
 * @public
 * <p>Information about a vulnerable package that Amazon Inspector identifies in a finding.</p>
 */
export interface VulnerablePackage {
  /**
   * @public
   * <p>The name of the vulnerable package.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the vulnerable package.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The source layer hash of the vulnerable package.</p>
   */
  sourceLayerHash?: string;

  /**
   * @public
   * <p>The epoch of the vulnerable package.</p>
   */
  epoch?: number;

  /**
   * @public
   * <p>The release of the vulnerable package.</p>
   */
  release?: string;

  /**
   * @public
   * <p>The architecture of the vulnerable package.</p>
   */
  arch?: string;

  /**
   * @public
   * <p>The package manager of the vulnerable package.</p>
   */
  packageManager?: string;

  /**
   * @public
   * <p>The file path of the vulnerable package.</p>
   */
  filePath?: string;

  /**
   * @public
   * <p>The version of the package that contains the vulnerability fix.</p>
   */
  fixedInVersion?: string;

  /**
   * @public
   * <p>The code to run in your environment to update packages with a fix available.</p>
   */
  remediation?: string;
}

/**
 * @public
 * <p>Information about package vulnerability findings.</p>
 */
export interface PackageVulnerabilityDetails {
  /**
   * @public
   * <p>A unique identifier for this vulnerability.</p>
   */
  vulnerabilityId: string | undefined;

  /**
   * @public
   * <p>The packages that this vulnerability impacts.</p>
   */
  vulnerablePackages?: VulnerablePackage[];

  /**
   * @public
   * <p>The source of the vulnerability information.</p>
   */
  source?: string;

  /**
   * @public
   * <p>CVSS scores for one or more vulnerabilities that Amazon Inspector identified for a
   * 			package.</p>
   */
  cvss?: CvssScore[];

  /**
   * @public
   * <p>Vulnerabilities that are often related to the findings for the package.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>A link to the source of the vulnerability information.</p>
   */
  sourceUrl?: string;

  /**
   * @public
   * <p>The severity that the vendor assigned to this vulnerability type.</p>
   */
  vendorSeverity?: string;

  /**
   * @public
   * <p>The date and time when this vulnerability was first added to the vendor's
   * 			database.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * @public
   * <p>The date and time when the vendor last updated this vulnerability in their
   * 			database.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * @public
   * <p>Links to web pages that contain details about the vulnerabilities that Amazon Inspector
   * 			identified for the package.</p>
   */
  referenceUrls?: string[];
}

/**
 * @public
 * <p>Details about the recommended course of action to remediate the finding.</p>
 */
export interface RemediationRecommendation {
  /**
   * @public
   * <p>The recommended course of action to remediate the finding.</p>
   */
  text?: string;

  /**
   * @public
   * <p>A link to more information about the recommended remediation for this
   * 			vulnerability.</p>
   */
  url?: string;
}

/**
 * @public
 * <p>Information about how to remediate a finding.</p>
 */
export interface Remediation {
  /**
   * @public
   * <p>An object that contains information about the recommended course of action to
   * 			remediate the finding.</p>
   */
  recommendation?: RemediationRecommendation;
}

/**
 * @public
 * <p>Contains details about a vulnerability scan finding.</p>
 */
export interface ImageScanFinding {
  /**
   * @public
   * <p>The Amazon Web Services account ID that's associated with the finding.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image build version that's associated with the
   * 			finding.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that's associated with the
   * 			finding.</p>
   */
  imagePipelineArn?: string;

  /**
   * @public
   * <p>The type of the finding. Image Builder looks for findings of the type
   * 				<code>PACKAGE_VULNERABILITY</code> that apply to output images, and excludes other
   * 			types.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The title of the finding.</p>
   */
  title?: string;

  /**
   * @public
   * <p>An object that contains the details about how to remediate the finding.</p>
   */
  remediation?: Remediation;

  /**
   * @public
   * <p>The severity of the finding.</p>
   */
  severity?: string;

  /**
   * @public
   * <p>The date and time when the finding was first observed.</p>
   */
  firstObservedAt?: Date;

  /**
   * @public
   * <p>The timestamp when the finding was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The score that Amazon Inspector assigned for the finding.</p>
   */
  inspectorScore?: number;

  /**
   * @public
   * <p>An object that contains details of the Amazon Inspector score.</p>
   */
  inspectorScoreDetails?: InspectorScoreDetails;

  /**
   * @public
   * <p>An object that contains the details of a package vulnerability finding.</p>
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;

  /**
   * @public
   * <p>Details about whether a fix is available for any of the packages that are identified
   * 			in the finding through a version update.</p>
   */
  fixAvailable?: string;
}

/**
 * @public
 */
export interface ListImageScanFindingsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The image scan findings for your account that meet your request filter
   * 			criteria.</p>
   */
  findings?: ImageScanFinding[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsRequest {
  /**
   * @public
   * <p>You can filter on <code>name</code> to streamline results.</p>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The infrastructure used when building Amazon EC2 AMIs.</p>
 */
export interface InfrastructureConfigurationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * @public
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * @public
   * <p>The tags attached to the image created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];

  /**
   * @public
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The list of infrastructure configurations.</p>
   */
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsRequest {
  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>List all workflow runtime instances for the specified image build version
   * 			resource ARN.</p>
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * @public
 * <p>Metadata that includes details and status from this runtime instance of the workflow.</p>
 */
export interface WorkflowExecutionMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the workflow resource build version that ran.</p>
   */
  workflowBuildVersionArn?: string;

  /**
   * @public
   * <p>Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a
   * 			workflow.</p>
   */
  workflowExecutionId?: string;

  /**
   * @public
   * <p>Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow.</p>
   */
  type?: WorkflowType | string;

  /**
   * @public
   * <p>The current runtime status for this workflow.</p>
   */
  status?: WorkflowExecutionStatus | string;

  /**
   * @public
   * <p>The runtime output message from the workflow, if applicable.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The total number of steps in the workflow. This should equal the sum of the step
   * 			counts for steps that succeeded, were skipped, and failed.</p>
   */
  totalStepCount?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps in the workflow that ran successfully.</p>
   */
  totalStepsSucceeded?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps in the workflow that failed.</p>
   */
  totalStepsFailed?: number;

  /**
   * @public
   * <p>A runtime count for the number of steps in the workflow that were skipped.</p>
   */
  totalStepsSkipped?: number;

  /**
   * @public
   * <p>The timestamp when the runtime instance of this workflow started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>The timestamp when this runtime instance of the workflow finished.</p>
   */
  endTime?: string;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>Contains an array of runtime details that represents each time a workflow ran for
   * 			the requested image build version.</p>
   */
  workflowExecutions?: WorkflowExecutionMetadata[];

  /**
   * @public
   * <p>The resource ARN of the image build version for which you requested a list of
   * 			workflow runtime details.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>The output message from the list action, if applicable.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsRequest {
  /**
   * @public
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start paginating. This is the NextToken
   * 	from a previously truncated response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   */
  workflowExecutionId: string | undefined;
}

/**
 * @public
 * <p>Runtime details and status for the workflow step.</p>
 */
export interface WorkflowStepMetadata {
  /**
   * @public
   * <p>A unique identifier for the workflow step, assigned at runtime.</p>
   */
  stepExecutionId?: string;

  /**
   * @public
   * <p>The name of the workflow step.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Description of the workflow step.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The step action name.</p>
   */
  action?: string;

  /**
   * @public
   * <p>Runtime status for the workflow step.</p>
   */
  status?: WorkflowStepExecutionStatus | string;

  /**
   * @public
   * <p>Reports on the rollback status of the step, if applicable.</p>
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | string;

  /**
   * @public
   * <p>Detailed output message that the workflow step provides at runtime.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Input parameters that Image Builder provides for the workflow step.</p>
   */
  inputs?: string;

  /**
   * @public
   * <p>The file names that the workflow step created as output for this runtime instance of the workflow.</p>
   */
  outputs?: string;

  /**
   * @public
   * <p>The timestamp when the workflow step started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>The timestamp when the workflow step finished.</p>
   */
  endTime?: string;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>Contains an array of runtime details that represents each step in this runtime
   * 			instance of the workflow.</p>
   */
  steps?: WorkflowStepMetadata[];

  /**
   * @public
   * <p>The build version ARN for the Image Builder workflow resource that defines the steps for
   * 			this runtime instance of the workflow.</p>
   */
  workflowBuildVersionArn?: string;

  /**
   * @public
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   */
  workflowExecutionId?: string;

  /**
   * @public
   * <p>The image build version resource ARN that's associated with the specified runtime
   * 			instance of the workflow.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * @public
   * <p>The output message from the list action, if applicable.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service has'ot included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface PutComponentPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component that this policy should be applied
   * 			to.</p>
   */
  componentArn: string | undefined;

  /**
   * @public
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutComponentPolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component that this policy was applied
   * 			to.</p>
   */
  componentArn?: string;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy should be
   * 			applied to.</p>
   */
  containerRecipeArn: string | undefined;

  /**
   * @public
   * <p>The policy to apply to the container recipe.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy was applied
   * 			to.</p>
   */
  containerRecipeArn?: string;
}

/**
 * @public
 */
export interface PutImagePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that this policy should be applied
   * 			to.</p>
   */
  imageArn: string | undefined;

  /**
   * @public
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImagePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that this policy was applied to.</p>
   */
  imageArn?: string;
}

/**
 * @public
 */
export interface PutImageRecipePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy should be applied
   * 			to.</p>
   */
  imageRecipeArn: string | undefined;

  /**
   * @public
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImageRecipePolicyResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy was applied
   * 			to.</p>
   */
  imageRecipeArn?: string;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to manually
   * 			invoke.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image that was created by this request.</p>
   */
  imageBuildVersionArn?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove from the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			update.</p>
   */
  distributionConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The distributions of the distribution configuration.</p>
   */
  distributions: Distribution[] | undefined;

  /**
   * @public
   * <p>The idempotency token of the distribution configuration.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDistributionConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was updated by
   * 			this request.</p>
   */
  distributionConfigurationArn?: string;
}

/**
 * @public
 */
export interface UpdateImagePipelineRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to update.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * @public
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure
   * 			images updated by this image pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container pipeline to update.</p>
   */
  containerRecipeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to
   * 			build images that this image pipeline has updated.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to
   * 			configure and distribute images that this image pipeline has updated.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * @public
   * <p>The image test configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * @public
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * @public
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * @public
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Contains settings for vulnerability scans.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface UpdateImagePipelineResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was updated by this
   * 			request.</p>
   */
  imagePipelineArn?: string;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			update.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. The service will pick one of these instance types
   * 			based on availability.</p>
   */
  instanceTypes?: string[];

  /**
   * @public
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   */
  instanceProfileName: string | undefined;

  /**
   * @public
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The subnet ID to place the instance used to customize your Amazon EC2 AMI in.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and
   * 			debug the instance used to create your image.</p>
   */
  keyPair?: string;

  /**
   * @public
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The instance metadata options that you can set for the HTTP requests that pipeline
   * 			builds use to launch EC2 build and test instances. For more information about instance
   * 			metadata options, see one of the following links:</p>
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
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationResponse {
  /**
   * @public
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by
   * 			this request.</p>
   */
  infrastructureConfigurationArn?: string;
}
