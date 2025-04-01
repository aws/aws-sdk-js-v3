// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ImagebuilderServiceException as __BaseException } from "./ImagebuilderServiceException";

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
 * <p>Contains settings for the Systems Manager agent on your build instance.</p>
 * @public
 */
export interface SystemsManagerAgent {
  /**
   * <p>Controls whether the Systems Manager agent is removed from your final build image, prior to
   * 			creating the new AMI. If this is set to true, then the agent is removed from the final
   * 			image. If it's set to false, then the agent is left in, so that it is included in the
   * 			new AMI. The default value is false.</p>
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
   * <p>Contains settings for the Systems Manager agent on your build instance.</p>
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
   * 				<code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$</code>:</p>
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
  DISABLED: "DISABLED",
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
 * <p>Image status and the reason for that status.</p>
 * @public
 */
export interface ImageState {
  /**
   * <p>The status of the image.</p>
   * @public
   */
  status?: ImageStatus | undefined;

  /**
   * <p>The reason for the status of the image.</p>
   * @public
   */
  reason?: string | undefined;
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
   * <p>Image status and the reason for that status.</p>
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
 * 			selected to distribute the AMI. To make an AMI public, set the launch permission
 * 			authorized accounts to <code>all</code>. See the examples for making an AMI public at
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2
 * 				ModifyImageAttribute</a>.</p>
 * @public
 */
export interface LaunchPermissionConfiguration {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * <p>The name of the group.</p>
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
   * <p>The name of the output AMI.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the AMI distribution configuration. Minimum and maximum length are
   * 			in characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of an account to which you want to distribute an image.</p>
   * @public
   */
  targetAccountIds?: string[] | undefined;

  /**
   * <p>The tags to apply to AMIs distributed to this Region.</p>
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * <p>The KMS key identifier used to encrypt the distributed image.</p>
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
 * @public
 * @enum
 */
export const BuildType = {
  IMPORT: "IMPORT",
  IMPORT_ISO: "IMPORT_ISO",
  SCHEDULED: "SCHEDULED",
  USER_INITIATED: "USER_INITIATED",
} as const;

/**
 * @public
 */
export type BuildType = (typeof BuildType)[keyof typeof BuildType];

/**
 * <p>You have exceeded the permitted request rate for the specific operation.</p>
 * @public
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
   * <p>The Amazon Resource Name (ARN) of the image that you want to cancel creation
   * 			for.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The ARN of the image whose creation this request canceled.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 * @public
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
 * @public
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
 * <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 * @public
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
 * <p>You have requested an action that that the service doesn't support.</p>
 * @public
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
 * @public
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
 * <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 * @public
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
 * @public
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
 */
export interface CancelLifecycleExecutionRequest {
  /**
   * <p>Identifies the specific runtime instance of the image lifecycle to cancel.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The unique identifier for the image lifecycle runtime instance that was canceled.</p>
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
 * @public
 * @enum
 */
export const Platform = {
  LINUX: "Linux",
  MACOS: "macOS",
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
export const ProductCodeType = {
  MARKETPLACE: "marketplace",
} as const;

/**
 * @public
 */
export type ProductCodeType = (typeof ProductCodeType)[keyof typeof ProductCodeType];

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
 * @public
 * @enum
 */
export const ComponentStatus = {
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type ComponentStatus = (typeof ComponentStatus)[keyof typeof ComponentStatus];

/**
 * <p>A group of fields that describe the current status of components.</p>
 * @public
 */
export interface ComponentState {
  /**
   * <p>The current state of the component.</p>
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
   * <p>The owner of the component.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>Component data contains the YAML document content for the component.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The KMS key identifier used to encrypt the component.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The encryption status of the component.</p>
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
 * <p>Configuration details of the component.</p>
 * @public
 */
export interface ComponentConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  componentArn: string | undefined;

  /**
   * <p>A group of parameter settings that Image Builder uses to configure the component for a specific
   * 			recipe.</p>
   * @public
   */
  parameters?: ComponentParameter[] | undefined;
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
   * <p>The owner of the component.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The change description for the current version of the component.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The original creation date of the component.</p>
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
 * <p>The defining characteristics of a specific version of an Amazon Web Services TOE component.</p>
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
   * <p>he operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image
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
   * <p>The owner of the component.</p>
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
 * <p>A container encapsulates the runtime environment for an application.</p>
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
   * <p>The name of the container repository where the output container image is stored.
   * 			This name is prefixed by the repository location. For example,
   * 			<code><repository location url>/repository_name</code>.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Container distribution settings for encryption, licensing, and sharing in a specific
 * 			Region.</p>
 * @public
 */
export interface ContainerDistributionConfiguration {
  /**
   * <p>The description of the container distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags that are attached to the container distribution configuration.</p>
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
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Use to configure device encryption.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>Use to configure delete on termination of the associated device.</p>
   * @public
   */
  deleteOnTermination?: boolean | undefined;

  /**
   * <p>Use to configure device IOPS.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>Use to configure the KMS key to use when encrypting the device.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The snapshot that defines the device contents.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>Use to override the device's volume size.</p>
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * <p>Use to override the device's volume type.</p>
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
   * <p>Use to manage Amazon EBS-specific configuration for this mapping.</p>
   * @public
   */
  ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * <p>Use to manage instance ephemeral devices.</p>
   * @public
   */
  virtualName?: string | undefined;

  /**
   * <p>Use to remove a mapping from the base image.</p>
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
   * <p>The AMI ID to use as the base image for a container build and test instance. If not
   * 			specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>Defines the block devices to attach for building an instance from this Image Builder
   * 			AMI.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;
}

/**
 * <p>A container recipe.</p>
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
   * <p>The system platform for the container, such as Windows or Linux.</p>
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
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Build and test components that are included in the container recipe.
   * 			Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
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
   * <p>Dockerfiles are text documents that are used to build Docker containers, and ensure
   * 			that they contain all of the elements required by the application running inside. The
   * 			template data consists of contextual variables where Image Builder places build information or
   * 			scripts, based on your container image recipe.</p>
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * <p>Identifies which KMS key is used to encrypt the container image for distribution to
   * 			the target Region.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A flag that indicates if the target container is encrypted.</p>
   * @public
   */
  encrypted?: boolean | undefined;

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
 * <p>A summary of a container recipe</p>
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
   * <p>The system platform for the container, such as Windows or Linux.</p>
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
   * <p>The name of the component.</p>
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
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
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
   * 				(<code>s3://bucket/key</code>), and the requester must have permission to access the
   * 			S3 bucket it points to. If you use Amazon S3, you can specify component content up to your
   * 			service quota.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the component
   * 				<code>data</code> property. You cannot specify both properties.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The ID of the KMS key that is used to encrypt this component.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags that apply to the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
}

/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message
 * 			for details.</p>
 * @public
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
 * @public
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
 * <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 * @public
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
   * <p>The type of container to create.</p>
   * @public
   */
  containerType: ContainerType | undefined;

  /**
   * <p>The name of the container recipe.</p>
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
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
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
   * <p>Components for build and test that are included in the container recipe.
   * 			Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   * @public
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>A group of options that can be used to configure an instance for building and testing
   * 			container images.</p>
   * @public
   */
  instanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * <p>The Dockerfile template used to build your image as an inline data blob.</p>
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * <p>The Amazon S3 URI for the Dockerfile that will be used to build your container
   * 			image.</p>
   * @public
   */
  dockerfileTemplateUri?: string | undefined;

  /**
   * <p>Specifies the operating system platform when you use a custom base image.</p>
   * @public
   */
  platformOverride?: Platform | undefined;

  /**
   * <p>Specifies the operating system version for the base image.</p>
   * @public
   */
  imageOsVersionOverride?: string | undefined;

  /**
   * <p>The base image for the container recipe.</p>
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
   * <p>The destination repository for the container image.</p>
   * @public
   */
  targetRepository: TargetContainerRepository | undefined;

  /**
   * <p>Identifies which KMS key is used to encrypt the Dockerfile template.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
}

/**
 * <p>The resource that you are trying to create already exists.</p>
 * @public
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
 * <p>Identifies the launch template that the associated Windows AMI uses for launching an
 * 			instance when faster launching is enabled.</p>
 *          <note>
 *             <p>You can specify either the <code>launchTemplateName</code> or the
 * 					<code>launchTemplateId</code>, but not both.</p>
 *          </note>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * <p>The version of the launch template to use for faster launching for a Windows
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
 * <p>Define and configure faster launching for output Windows AMIs.</p>
 * @public
 */
export interface FastLaunchConfiguration {
  /**
   * <p>A Boolean that represents the current state of faster launching for the Windows AMI.
   * 			Set to <code>true</code> to start using Windows faster launching, or <code>false</code>
   * 			to stop using it.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Configuration settings for managing the number of snapshots that are created from
   * 			pre-provisioned instances for the Windows AMI when faster launching is enabled.</p>
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
   * <p>Set the specified Amazon EC2 launch template as the default launch template for the
   * 			specified account.</p>
   * @public
   */
  setDefaultVersion?: boolean | undefined;
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
 * <p>Properties that configure export from your build instance to a compatible file format
 * 			for your VM.</p>
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
   * <p>Configure export settings to deliver disk images created from your image build, using
   * 			a file format that is compatible with your VMs in that Region.</p>
   * @public
   */
  s3ExportConfiguration?: S3ExportConfiguration | undefined;

  /**
   * <p>The Windows faster-launching configurations to use for AMI distribution.</p>
   * @public
   */
  fastLaunchConfigurations?: FastLaunchConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationRequest {
  /**
   * <p>The name of the distribution configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The distributions of the distribution configuration.</p>
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>The tags of the distribution configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
   * <p>The name of the container repository that Amazon Inspector scans to identify findings for your
   * 			container images. The name includes the path for the repository location. If you don’t
   * 			provide this information, Image Builder creates a repository in your account named
   * 				<code>image-builder-image-scanning-repository</code> for vulnerability scans of your
   * 			output container images.</p>
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
   * <p>A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that
   * 			Amazon Inspector runs against the build instance when you create a new image.</p>
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
   * <p>Determines if tests should run after building the image. Image Builder defaults to enable tests
   * 			to run following the image build, before image distribution.</p>
   * @public
   */
  imageTestsEnabled?: boolean | undefined;

  /**
   * <p>The maximum time in minutes that tests are permitted to run.</p>
   *          <note>
   *             <p>The timeout property is not currently active. This value is
   * 				ignored.</p>
   *          </note>
   * @public
   */
  timeoutMinutes?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OnWorkflowFailure = {
  ABORT: "ABORT",
  CONTINUE: "CONTINUE",
} as const;

/**
 * @public
 */
export type OnWorkflowFailure = (typeof OnWorkflowFailure)[keyof typeof OnWorkflowFailure];

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
   * <p>The action to take if the workflow fails.</p>
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
   * 			configured, tested, and assessed.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that defines how images are
   * 			configured and tested.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that defines and
   * 			configures the outputs of your pipeline.</p>
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
   * <p>The image tests configuration of the image.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The tags of the image.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Contains settings for vulnerability scans.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>Contains an array of workflow configuration objects.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;
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
 * <p>A schedule configures when and how often a pipeline will automatically create a new
 * 			image.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The cron expression determines how often EC2 Image Builder evaluates your
   * 				<code>pipelineExecutionStartCondition</code>.</p>
   *          <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use
   * 				cron expressions in EC2 Image Builder</a>.</p>
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * <p>The timezone that applies to the scheduling expression. For example, "Etc/UTC",
   * 			"America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA timezone format</a>. If not specified this defaults to UTC.</p>
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
   *                   <p>For semantic version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPRESSION_MATCH_ONLY</code> – This condition builds a new
   * 					image every time the CRON expression matches the current time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | undefined;
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
   * <p>The name of the image pipeline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the image pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure
   * 			images created by this image pipeline.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure
   * 			images created by this container pipeline.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that will be used
   * 			to build images created by this image pipeline.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that will be used to
   * 			configure and distribute images created by this image pipeline.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>The image test configuration of the image pipeline.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The schedule of the image pipeline.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The status of the image pipeline.</p>
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * <p>The tags of the image pipeline.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Contains settings for vulnerability scans.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>Contains an array of workflow configuration objects.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;
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
   * <p>The name of the image recipe.</p>
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
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
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
   * <p>The components included in the image recipe.</p>
   * @public
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>The base image of the image recipe. The value of the string can be the ARN of the base
   * 			image or an AMI ID. The format for the ARN follows this example:
   * 				<code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>.
   * 			You can provide the specific version that you want to use, or you can use a wildcard in
   * 			all of the fields. If you enter an AMI ID for the string value, you must have access to
   * 			the AMI, and the AMI must be in the same Region in which you are using Image Builder.</p>
   * @public
   */
  parentImage: string | undefined;

  /**
   * <p>The block device mappings of the image recipe.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>The tags of the image recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The working directory used during build and test workflows.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>Specify additional settings and launch scripts for your build instances.</p>
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
}

/**
 * <p>The instance metadata options that apply to the HTTP requests that pipeline builds use
 * 			to launch EC2 build and test instances. For more information about instance metadata
 * 			options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
 * 				<i>
 *                <i>Amazon EC2 User Guide</i>
 *             </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
 * 				<i>
 *                <i>Amazon EC2 Windows Guide</i>
 *             </i> for Windows instances.</p>
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
   *          <p>The default setting is <b>optional</b>.</p>
   * @public
   */
  httpTokens?: string | undefined;

  /**
   * <p>Limit the number of hops that an instance metadata request can traverse to reach its
   * 			destination. The default is one hop. However, if HTTP tokens are required, container
   * 			image builds need a minimum of two hops.</p>
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
   * <p>The S3 bucket in which to store the logs.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 path to the bucket where the logs are stored.</p>
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
 * @public
 * @enum
 */
export const TenancyType = {
  DEDICATED: "dedicated",
  DEFAULT: "default",
  HOST: "host",
} as const;

/**
 * @public
 */
export type TenancyType = (typeof TenancyType)[keyof typeof TenancyType];

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
   * 			applies if <code>tenancy</code> is <code>host</code>. If you specify the host ID, you
   * 			must not specify the resource group ARN. If you specify both, Image Builder returns an error.</p>
   * @public
   */
  hostId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the host resource group in which to launch build and test instances.
   * 			This only applies if <code>tenancy</code> is <code>host</code>. If you specify the resource
   * 			group ARN, you must not specify the host ID. If you specify both, Image Builder returns an error.</p>
   * @public
   */
  hostResourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationRequest {
  /**
   * <p>The name of the infrastructure configuration.</p>
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
   * 			instance types to use for this build. The service will pick one of these instance types
   * 			based on availability.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
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
   * <p>The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
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
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process.
   * 			Tags are formatted as key value pairs.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The instance metadata options that you can set for the HTTP requests that pipeline
   * 			builds use to launch EC2 build and test instances.</p>
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
   * <p>The instance placement settings that define where the instances that are launched
   * 			from your image will run.</p>
   * @public
   */
  placement?: Placement | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
 * @public
 * @enum
 */
export const LifecyclePolicyDetailActionType = {
  DELETE: "DELETE",
  DEPRECATE: "DEPRECATE",
  DISABLE: "DISABLE",
} as const;

/**
 * @public
 */
export type LifecyclePolicyDetailActionType =
  (typeof LifecyclePolicyDetailActionType)[keyof typeof LifecyclePolicyDetailActionType];

/**
 * <p>Contains selection criteria for the lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicyDetailAction {
  /**
   * <p>Specifies the lifecycle action to take.</p>
   * @public
   */
  type: LifecyclePolicyDetailActionType | undefined;

  /**
   * <p>Specifies the resources that the lifecycle policy applies to.</p>
   * @public
   */
  includeResources?: LifecyclePolicyDetailActionIncludeResources | undefined;
}

/**
 * @public
 * @enum
 */
export const LifecyclePolicyTimeUnit = {
  DAYS: "DAYS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  YEARS: "YEARS",
} as const;

/**
 * @public
 */
export type LifecyclePolicyTimeUnit = (typeof LifecyclePolicyTimeUnit)[keyof typeof LifecyclePolicyTimeUnit];

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
   * <p>Defines the unit of time that the lifecycle policy uses to calculate elapsed time
   * 			since the last instance launched from the AMI. For example: days, weeks, months, or years.</p>
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
   * <p>Specifies Amazon Web Services accounts whose resources are excluded from the lifecycle action.</p>
   * @public
   */
  sharedAccounts?: string[] | undefined;

  /**
   * <p>Specifies configuration details for Image Builder to exclude the most recent resources
   * 			from lifecycle actions.</p>
   * @public
   */
  lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched | undefined;

  /**
   * <p>Lists tags that should be excluded from lifecycle actions for the AMIs that have them.</p>
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
 * @public
 * @enum
 */
export const LifecyclePolicyDetailFilterType = {
  AGE: "AGE",
  COUNT: "COUNT",
} as const;

/**
 * @public
 */
export type LifecyclePolicyDetailFilterType =
  (typeof LifecyclePolicyDetailFilterType)[keyof typeof LifecyclePolicyDetailFilterType];

/**
 * <p>Defines filters that the lifecycle policy uses to determine impacted resource.</p>
 * @public
 */
export interface LifecyclePolicyDetailFilter {
  /**
   * <p>Filter resources based on either <code>age</code> or <code>count</code>.</p>
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
 * <p>The configuration details for a lifecycle policy resource.</p>
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
 * <p>Resource selection criteria for the lifecycle policy.</p>
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
 * @enum
 */
export const LifecyclePolicyResourceType = {
  AMI_IMAGE: "AMI_IMAGE",
  CONTAINER_IMAGE: "CONTAINER_IMAGE",
} as const;

/**
 * @public
 */
export type LifecyclePolicyResourceType =
  (typeof LifecyclePolicyResourceType)[keyof typeof LifecyclePolicyResourceType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type LifecyclePolicyStatus = (typeof LifecyclePolicyStatus)[keyof typeof LifecyclePolicyStatus];

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * <p>The name of the  lifecycle policy to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to run lifecycle actions.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The type of Image Builder resource that the lifecycle policy applies to.</p>
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * <p>Configuration details for the lifecycle policy rules.</p>
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Selection criteria for the resources that the lifecycle policy applies to. </p>
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>Tags to apply to the lifecycle policy resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
export interface CreateWorkflowRequest {
  /**
   * <p>The name of the workflow to create.</p>
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
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
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
   * <p>Contains the UTF-8 encoded YAML document content for the workflow.
   * 			Alternatively, you can specify the <code>uri</code> of a YAML document file stored in
   * 			Amazon S3. However, you cannot specify both properties.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL
   * 			(<code>s3://bucket/key</code>), and the requester must have permission to access the
   * 			S3 bucket it points to. If you use Amazon S3, you can specify component content up to your
   * 			service quota.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the component
   * 			<code>data</code> property. You cannot specify both properties.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The ID of the KMS key that is used to encrypt this workflow resource.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Tags that apply to the workflow resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The phase in the image build process for which the workflow resource
   * 			is responsible.</p>
   * @public
   */
  type: WorkflowType | undefined;
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
}

/**
 * <p>Amazon Inspector generates a risk score for each finding. This score helps you to prioritize
 * 			findings, to focus on the most critical findings and the most vulnerable resources. The
 * 			score uses the Common Vulnerability Scoring System (CVSS) format. This format is a
 * 			modification of the base CVSS score that the National Vulnerability Database (NVD)
 * 			provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User
 * 				Guide</i>.</p>
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
   * <p>The source of the finding.</p>
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
   * <p>An object that contains details about an adjustment that Amazon Inspector made to the CVSS score
   * 			for the finding.</p>
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
   * <p>The ARN of the component build version that this request deleted.</p>
   * @public
   */
  componentBuildVersionArn?: string | undefined;
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
 * @public
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
   * <p>The ARN of the Image Builder image resource that this request deleted.</p>
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
   * <p>The ARN of the lifecycle policy that was deleted.</p>
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
   * <p>The ARN of the workflow resource that this request deleted.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;
}

/**
 * <p>A distribution configuration.</p>
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
   * <p>The distribution objects that apply Region-specific settings for the deployment of the
   * 			image to targeted Regions.</p>
   * @public
   */
  distributions?: Distribution[] | undefined;

  /**
   * <p>The maximum duration in minutes for this distribution configuration.</p>
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
   * <p>A list of Regions where the container image is distributed to.</p>
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
   * <p>The Amazon Resource Name (ARN) of the component that you want to get. Regex requires
   * 			the suffix <code>/\d+$</code>.</p>
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
 * <p>At least one of the resources referenced by your request does not exist.</p>
 * @public
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
   * <p>The container recipe policy object that is returned.</p>
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
   * <p>The Amazon Resource Name (ARN) of the image that you want to get.</p>
   * @public
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
   * <p>Specifies which type of image is created by the recipe - an AMI or a container
   * 			image.</p>
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
   * <p>The components that are included in the image recipe. Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * <p>The base image of the image recipe.</p>
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
   * <p>The working directory to be used during build and test workflows.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test
   * 			your image configuration. Instance configuration adds a layer of control over those
   * 			instances. You can define settings and add scripts to run when an instance is launched
   * 			from your AMI.</p>
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;
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
   * <p>The logging configuration of the infrastructure configuration.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The Amazon EC2 key pair of the infrastructure configuration.</p>
   * @public
   */
  keyPair?: string | undefined;

  /**
   * <p>The terminate instance on failure configuration of the infrastructure
   * 			configuration.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
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
   * <p>The tags attached to the resource created by Image Builder.</p>
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
   * <p>The instance placement settings that define where the instances that are launched
   * 			from your image will run.</p>
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
   * <p>The Amazon EC2 AMIs created by this image.</p>
   * @public
   */
  amis?: Ami[] | undefined;

  /**
   * <p>Container images that the pipeline has generated and stored in the output
   * 			repository.</p>
   * @public
   */
  containers?: Container[] | undefined;
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
 * <p>Shows the vulnerability scan status for a specific image, and the reason for that
 * 			status.</p>
 * @public
 */
export interface ImageScanState {
  /**
   * <p>The current state of vulnerability scans for the image.</p>
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
 * <p>An Image Builder image. You must specify exactly one recipe for the image – either a
 * 			container recipe (<code>containerRecipe</code>), which creates a container image, or an
 * 			image recipe (<code>imageRecipe</code>), which creates an AMI.</p>
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
   * <p>The name of the image pipeline that created this image.</p>
   * @public
   */
  sourcePipelineName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
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
   * <p>The image tests that ran when that Image Builder created this image.</p>
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
   * <p>Contains settings for vulnerability scans.</p>
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
   * <p>Contains the build and test workflows that are associated with the image.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;
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
 * <p>Details of an image pipeline.</p>
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
   * <p>The platform of the image pipeline.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
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
   * <p>The status of the image pipeline.</p>
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
   * <p>This is no longer supported, and does not return a value.</p>
   * @public
   */
  dateLastRun?: string | undefined;

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
   * <p>Contains settings for vulnerability scans.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

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
   * <p>The image policy object.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.</p>
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
   * <p>The image recipe policy object.</p>
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
   * <p>Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;
}

/**
 * <p>Contains details for an image resource that was identified for a lifecycle action.</p>
 * @public
 */
export interface LifecycleExecutionResourcesImpactedSummary {
  /**
   * <p>Indicates whether an image resource that was identified for a lifecycle action has
   * 			associated resources that are also impacted.</p>
   * @public
   */
  hasImpactedResources?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const LifecycleExecutionStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type LifecycleExecutionStatus = (typeof LifecycleExecutionStatus)[keyof typeof LifecycleExecutionStatus];

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
   * <p>Contains information about associated resources that are identified for action by
   * 			the runtime instance of the lifecycle policy.</p>
   * @public
   */
  resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary | undefined;

  /**
   * <p>Runtime state that reports if the policy action ran successfully,
   * 			failed, or was skipped.</p>
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
 * <p>The configuration details for a lifecycle policy resource.</p>
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
   * <p>Indicates whether the lifecycle policy resource is enabled.</p>
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
   * <p>The configuration details for a lifecycle policy resource.</p>
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
   * <p>The ARN of the image lifecycle policy resource that was returned.</p>
   * @public
   */
  lifecyclePolicy?: LifecyclePolicy | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketplaceResourceType = {
  COMPONENT_ARTIFACT: "COMPONENT_ARTIFACT",
  COMPONENT_DATA: "COMPONENT_DATA",
} as const;

/**
 * @public
 */
export type MarketplaceResourceType = (typeof MarketplaceResourceType)[keyof typeof MarketplaceResourceType];

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
   * <p>The bucket path that you can specify to download the resource from Amazon S3.</p>
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
   * <p>The obfuscated S3 URL to download the component artifact from.</p>
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
   * <p>The Amazon Resource Name (ARN) of the workflow resource that you want to get.</p>
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
 * @public
 * @enum
 */
export const WorkflowStatus = {
  DEPRECATED: "DEPRECATED",
} as const;

/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * <p>A group of fields that describe the current status of workflow.</p>
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
 * <p>Defines a process that Image Builder uses to build and test images during
 * 			the image creation process.</p>
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
   * <p>Specifies the image creation stage that the workflow applies to. Image Builder
   * 			currently supports build and test workflows.</p>
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
   * <p>The KMS key identifier used to encrypt the workflow resource.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The timestamp when Image Builder created the workflow resource.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags that apply to the workflow resource</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An array of input parameters that that the image workflow uses
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
 * @enum
 */
export const WorkflowExecutionStatus = {
  CANCELLED: "CANCELLED",
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
   * <p>The Amazon Resource Name (ARN) of the image resource build version that the specified
   * 			runtime instance of the workflow created.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The type of workflow that Image Builder ran for the specified runtime instance of the workflow.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The current runtime status for the specified runtime instance of the workflow.</p>
   * @public
   */
  status?: WorkflowExecutionStatus | undefined;

  /**
   * <p>The output message from the specified runtime instance of the workflow, if applicable.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The total number of steps in the specified runtime instance of the workflow that ran.
   * 			This number should equal the sum of the step counts for steps that succeeded, were skipped,
   * 			and failed.</p>
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
   * <p>Test workflows are defined within named runtime groups. The parallel group
   * 			is a named group that contains one or more test workflows.</p>
   * @public
   */
  parallelGroup?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionRequest {
  /**
   * <p>Use the unique identifier for a specific runtime instance of the workflow step to
   * 			get runtime details for that step.</p>
   * @public
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
  CANCELLED: "CANCELLED",
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
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique identifier for the runtime version of the workflow step that you specified
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
   * <p>The Amazon Resource Name (ARN) of the image resource build version that the specified
   * 			runtime instance of the workflow step creates.</p>
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
   * <p>The current status for the specified runtime version of the workflow step.</p>
   * @public
   */
  status?: WorkflowStepExecutionStatus | undefined;

  /**
   * <p>Reports on the rollback status of the specified runtime version of the workflow step,
   * 			if applicable.</p>
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
   * 			the workflow step.</p>
   * @public
   */
  inputs?: string | undefined;

  /**
   * <p>The file names that the specified runtime version of the workflow step created as output.</p>
   * @public
   */
  outputs?: string | undefined;

  /**
   * <p>The timestamp when the specified runtime version of the workflow step started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The timestamp when the specified runtime instance of the workflow step finished.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The action to perform if the workflow step fails.</p>
   * @public
   */
  onFailure?: string | undefined;

  /**
   * <p>The maximum duration in seconds for this step to complete its action.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;
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
   * <p>The name of the component.</p>
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
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
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
   * <p>The data of the component. Used to specify the data inline. Either <code>data</code>
   * 			or <code>uri</code> can be used to specify the data within the component.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The uri of the component. Must be an Amazon S3 URL and the requester must have permission
   * 			to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your
   * 			service quota. Either <code>data</code> or <code>uri</code> can be used to specify the
   * 			data within the component.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The ID of the KMS key that should be used to encrypt this component.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags of the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
 * @public
 */
export interface ImportDiskImageRequest {
  /**
   * <p>The name of the image resource that's created from the import.</p>
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
   * <p>The operating system version for the imported image. Allowed values include
   * 			the following: <code>Microsoft Windows 11</code>.</p>
   * @public
   */
  osVersion: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access
   * 			to perform workflow actions to import an image from a Microsoft ISO file.</p>
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
   * <p>The <code>uri</code> of the ISO disk file that's stored in Amazon S3.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>Tags that are attached to image resources created from the import.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The Amazon Resource Name (ARN) of the output AMI that was created from the ISO disk file.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportVmImageRequest {
  /**
   * <p>The name of the base image that is created by the import process.</p>
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
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
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
   * 			Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in
   * 			the AMI that is created from the VM source as the base image for your recipe.</p>
   * @public
   */
  vmImportTaskId: string | undefined;

  /**
   * <p>Tags that are attached to the import resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The Amazon Resource Name (ARN) of the AMI that was created during the VM import
   * 			process. This AMI is used as the base image for the recipe that imported the VM.</p>
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
 * <p>You have provided an invalid pagination token in your request.</p>
 * @public
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
   * <p>The component version Amazon Resource Name (ARN) whose versions you want to
   * 			list.</p>
   * @public
   */
  componentVersionArn: string | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The list of component summaries for the specified semantic version.</p>
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
 * @enum
 */
export const Ownership = {
  AMAZON: "Amazon",
  AWS_MARKETPLACE: "AWSMarketplace",
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
   * <p>Filters results based on the type of owner for the component. By default, this request
   * 			returns a list of components that your account owns. To see results for other types of
   * 			owners, you can specify components that Amazon manages, third party components, or
   * 			components that other accounts have shared with you.</p>
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
   * <p>Returns the list of components for the specified name.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>Returns container recipes belonging to the specified owner, that have been shared with
   * 			you. You can omit this field to return container recipes belonging to your
   * 			account.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to
   * 			retrieve.</p>
   * @public
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
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>Filter results for the ListImagePackages request by the Image Build Version ARN</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A software package that's installed on top of the base image to create a
 * 			customized image.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The owner defines which image recipes you want to list. By default, this request will
   * 			only show image recipes owned by your account. You can use this field to specify if you
   * 			want to view image recipes owned by yourself, by Amazon, or those image recipes that
   * 			have been shared with you by other customers.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The list of image pipelines.</p>
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
   * <p>The owner defines which images you want to list. By default, this request will only
   * 			show images owned by your account. You can use this field to specify if you want to view
   * 			images owned by yourself, by Amazon, or those images that have been shared with you by
   * 			other customers.</p>
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
   * <p>Requests a list of images with a specific recipe name.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Includes deprecated images in the response list.</p>
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
   * <p>The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2,
   * 			Ubuntu 18, or Microsoft Windows Server 2019.</p>
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
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
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
   * <p>A filter name and value pair that is used to return a more specific list of results
   * 			from a list operation. Filters can be used to match a set of resources by specific
   * 			criteria, such as tags, attributes, or IDs.</p>
   * @public
   */
  filter?: Filter | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>Returns an object that contains severity counts based on the Amazon Resource Name
   * 			(ARN) for a specific image.</p>
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
   * <p>The name of the image scan finding filter. Filter names are case-sensitive.</p>
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
   * @public
   */
  filters?: ImageScanFindingsFilter[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>An object that contains details about an adjustment that Amazon Inspector made to the CVSS score
   * 			for the finding.</p>
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
   * <p>CVSS scores for one or more vulnerabilities that Amazon Inspector identified for a
   * 			package.</p>
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
 * <p>Contains details about a vulnerability scan finding.</p>
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
   * <p>The severity of the finding.</p>
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
   * 			in the finding through a version update.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The infrastructure used when building Amazon EC2 AMIs.</p>
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
   * <p>The tags attached to the image created by Image Builder.</p>
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
   * <p>The instance placement settings that define where the instances that are launched
   * 			from your image will run.</p>
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
   * <p>Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * <p>You can  leave this empty to get a list of Image Builder resources that were identified for lifecycle actions.</p>
   *          <p>To get a list of associated resources that are impacted for an individual resource (the parent), specify
   * 			its Amazon Resource Name (ARN). Associated resources are produced from your image and distributed when you run a build, such as
   * 			AMIs or container images stored in ECR repositories.</p>
   * @public
   */
  parentResourceId?: string | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LifecycleExecutionResourceActionName = {
  AVAILABLE: "AVAILABLE",
  DELETE: "DELETE",
  DEPRECATE: "DEPRECATE",
  DISABLE: "DISABLE",
} as const;

/**
 * @public
 */
export type LifecycleExecutionResourceActionName =
  (typeof LifecycleExecutionResourceActionName)[keyof typeof LifecycleExecutionResourceActionName];

/**
 * <p>The lifecycle policy action that was identified for the impacted resource.</p>
 * @public
 */
export interface LifecycleExecutionResourceAction {
  /**
   * <p>The name of the resource that was identified for a lifecycle policy action.</p>
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
 * @public
 * @enum
 */
export const LifecycleExecutionResourceStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type LifecycleExecutionResourceStatus =
  (typeof LifecycleExecutionResourceStatus)[keyof typeof LifecycleExecutionResourceStatus];

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
   * <p>The runtime state for the lifecycle execution.</p>
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
   * <p>Runtime details for the specified runtime instance of the lifecycle policy.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to get a list of lifecycle runtime instances.</p>
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
   * <p>Streamline results based on one of the following values: <code>Name</code>,
   * 			<code>Status</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy summary resource.</p>
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
 * <p>The specified parameter is invalid. Review the available parameters for the API
 * 			request.</p>
 * @public
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains runtime details for an instance of a workflow that ran for the
 * 			associated image build version.</p>
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
   * <p>The ARN of the workflow resource that ran.</p>
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
   * 			Amazon Web Services account.</p>
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
   * <p>The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions.</p>
   * @public
   */
  workflowVersionArn: string | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The image creation stage that this workflow applies to. Image Builder currently
   * 			supports build and test stage workflows.</p>
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
   * <p>A list that contains metadata for the workflow builds that have run for
   * 			the workflow resource specified in the request.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The total number of steps in the workflow. This should equal the sum of the step
   * 			counts for steps that succeeded, were skipped, and failed.</p>
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
   * <p>Contains an array of runtime details that represents each time a workflow ran for
   * 			the requested image build version.</p>
   * @public
   */
  workflowExecutions?: WorkflowExecutionMetadata[] | undefined;

  /**
   * <p>The resource ARN of the image build version for which you requested a list of
   * 			workflow runtime details.</p>
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
export interface ListWorkflowsRequest {
  /**
   * <p>Used to get a list of workflow build version filtered by the identity of the creator.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Used to streamline search results.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>Specify all or part of the workflow name to streamline results.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>The image creation stage that this workflow applies to. Image Builder currently
   * 			supports build and test stage workflows.</p>
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
   * <p>A list of workflow build versions that match the request criteria.</p>
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
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken
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
   * <p>Input parameters that Image Builder provides for the workflow step.</p>
   * @public
   */
  inputs?: string | undefined;

  /**
   * <p>The file names that the workflow step created as output for this runtime instance of the workflow.</p>
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
   * <p>The build version ARN for the Image Builder workflow resource that defines the steps for
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
   * <p>The image build version resource ARN that's associated with the specified runtime
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
 * <p>The value that you provided for the specified parameter is invalid.</p>
 * @public
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
   * <p>The policy to apply.</p>
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
 * @enum
 */
export const WorkflowStepActionType = {
  RESUME: "RESUME",
  STOP: "STOP",
} as const;

/**
 * @public
 */
export type WorkflowStepActionType = (typeof WorkflowStepActionType)[keyof typeof WorkflowStepActionType];

/**
 * @public
 */
export interface SendWorkflowStepActionRequest {
  /**
   * <p>Uniquely identifies the workflow step that sent the step action.</p>
   * @public
   */
  stepExecutionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version to send action for.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The action for the image creation process to take while a workflow
   * 			<code>WaitForAction</code> step waits for an asynchronous action to complete.</p>
   * @public
   */
  action: WorkflowStepActionType | undefined;

  /**
   * <p>The reason why this action is sent.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The workflow step that sent the step action.</p>
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
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
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
   * <p>Defines criteria for AMIs that are excluded from lifecycle actions.</p>
   * @public
   */
  amis?: LifecyclePolicyDetailExclusionRulesAmis | undefined;
}

/**
 * <p>Specifies if the lifecycle policy should apply actions to selected resources.</p>
 * @public
 */
export interface ResourceStateUpdateIncludeResources {
  /**
   * <p>Specifies whether the lifecycle action should apply to distributed AMIs</p>
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
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * <p>The current state of an impacted resource.</p>
 * @public
 */
export interface ResourceState {
  /**
   * <p>Shows the current lifecycle policy action that was applied to an impacted resource.</p>
   * @public
   */
  status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface StartResourceStateUpdateRequest {
  /**
   * <p>The ARN of the Image Builder resource that is updated. The state update might also
   * 			impact associated resources.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Indicates the lifecycle action to take for this request.</p>
   * @public
   */
  state: ResourceState | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that’s used to update image state.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>A list of image resources to update state for.</p>
   * @public
   */
  includeResources?: ResourceStateUpdateIncludeResources | undefined;

  /**
   * <p>Skip action on the image resource and associated resources if specified
   * 			exclusion rules are met.</p>
   * @public
   */
  exclusionRules?: ResourceStateUpdateExclusionRules | undefined;

  /**
   * <p>The timestamp that indicates when resources are updated by a lifecycle action.</p>
   * @public
   */
  updateAt?: Date | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>Identifies the lifecycle runtime instance that started the resource
   * 			state update.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The requested ARN of the Image Builder resource for the asynchronous update.</p>
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
   * <p>The distributions of the distribution configuration.</p>
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure
   * 			images updated by this image pipeline.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container pipeline to update.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to
   * 			build images that this image pipeline has updated.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to
   * 			configure and distribute images that this image pipeline has updated.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>The image test configuration of the image pipeline.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The schedule of the image pipeline.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The status of the image pipeline.</p>
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Contains settings for vulnerability scans.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>Contains the workflows to run for the pipeline.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;
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
   * 			instance types to use for this build. The service will pick one of these instance types
   * 			based on availability.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
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
   * <p>The subnet ID to place the instance used to customize your Amazon EC2 AMI in.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
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
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event
   * 			notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
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
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * <p>The instance placement settings that define where the instances that are launched
   * 			from your image will run.</p>
   * @public
   */
  placement?: Placement | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to update the
   * 			lifecycle policy.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The type of image resource that the lifecycle policy applies to.</p>
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * <p>The configuration details for a lifecycle policy resource.</p>
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Selection criteria for resources that the lifecycle policy applies to.</p>
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
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
   * <p>The ARN of the image lifecycle policy resource that was updated.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}
