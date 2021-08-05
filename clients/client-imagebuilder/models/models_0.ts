import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains settings for the SSM agent on your build instance.</p>
 */
export interface SystemsManagerAgent {
  /**
   * <p>Controls whether the SSM agent is removed from your final build image, prior to creating
   * 			the new AMI. If this is set to true, then the agent is removed from the final image. If it's
   * 			set to false, then the agent is left in, so that it is included in the new AMI. The default
   * 			value is false.</p>
   */
  uninstallAfterBuild?: boolean;
}

export namespace SystemsManagerAgent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SystemsManagerAgent): any => ({
    ...obj,
  });
}

/**
 * <p>In addition to your infrastruction configuration, these settings provide an extra layer of
 * 			control over your build instances. For instances where Image Builder installs the SSM agent,
 * 			you can choose whether to keep it for the AMI that you create. You can also specify commands
 * 			to run on launch for all of your build instances.</p>
 */
export interface AdditionalInstanceConfiguration {
  /**
   * <p>Contains settings for the SSM agent on your build instance.</p>
   */
  systemsManagerAgent?: SystemsManagerAgent;

  /**
   * <p>Use this property to provide commands or a command script to run when you launch
   * 			your build instance.</p>
   * 		       <note>
   * 			         <p>The userDataOverride property replaces any commands that Image Builder might have added to ensure
   * 				that SSM is installed on your Linux build instance. If you override the user data,
   * 				make sure that you add commands to install SSM, if it is not pre-installed on your
   * 				source image.</p>
   * 		       </note>
   */
  userDataOverride?: string;
}

export namespace AdditionalInstanceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdditionalInstanceConfiguration): any => ({
    ...obj,
  });
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

export namespace ImageState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageState): any => ({
    ...obj,
  });
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

export namespace Ami {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ami): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for a launch permission. The launch permission modification request is sent to the
 * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>
 * 			API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public,
 * 			set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at
 * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.</p>
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
}

export namespace LaunchPermissionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchPermissionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> Define and configure the output AMIs of the pipeline.</p>
 */
export interface AmiDistributionConfiguration {
  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The description of the distribution configuration. Minimum and maximum length are in characters.</p>
   */
  description?: string;

  /**
   * <p>The ID of an account to which you want to distribute an image.</p>
   */
  targetAccountIds?: string[];

  /**
   * <p>The tags to apply to AMIs distributed to this Region.</p>
   */
  amiTags?: { [key: string]: string };

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

export namespace AmiDistributionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmiDistributionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the permitted request rate for the specific operation.</p>
 */
export interface CallRateLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CallRateLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace CallRateLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CallRateLimitExceededException): any => ({
    ...obj,
  });
}

export interface CancelImageCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation you want to cancel.</p>
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export namespace CancelImageCreationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelImageCreationRequest): any => ({
    ...obj,
  });
}

export interface CancelImageCreationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation has been cancelled.</p>
   */
  imageBuildVersionArn?: string;
}

export namespace CancelImageCreationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelImageCreationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or resource on
 * 			behalf of a user that doesn't have permissions to use the action or resource, or specifying an
 * 			invalid resource identifier.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  message?: string;
}

export namespace ClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized to perform the requested operation.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified a client token for an operation using parameter values that differ from
 * 			a previous request that used the same client token.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>You have made a request for an action that is not supported by the service.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the service encounters an unrecoverable exception.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  message?: string;
}

export namespace ServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is unable to process your request at this time.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
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

export namespace ComponentParameterDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentParameterDetail): any => ({
    ...obj,
  });
}

export enum Platform {
  LINUX = "Linux",
  WINDOWS = "Windows",
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
   * <p>The type of the component denotes whether the component is used to build the image or only
   * 			to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the parent image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>Contains parameter details for each of the parameters that are defined for the component.</p>
   */
  parameters?: ComponentParameterDetail[];

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The data of the component.</p>
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
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Component {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Component): any => ({
    ...obj,
  });
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

export namespace ComponentParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentParameter): any => ({
    ...obj,
  });
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
   * <p>A group of parameter settings that are used to configure the component for a specific recipe.</p>
   */
  parameters?: ComponentParameter[];
}

export namespace ComponentConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentConfiguration): any => ({
    ...obj,
  });
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
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the parent image OS version during image recipe
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
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The defining characteristics of a specific version of an Amazon Web Services TOE component.</p>
 */
export interface ComponentVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * 		       <note>
   * 			         <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   * 	           <ol>
   *                <li>
   * 			               <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   * 		             </li>
   *                <li>
   * 			               <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   * 		             </li>
   *                <li>
   * 			               <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   * 		             </li>
   *             </ol>
   * 		       </note>
   */
  arn?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The semantic version of the component.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
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
   * 			available, a prefix match is performed against the parent image OS version during image recipe
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

export namespace ComponentVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComponentVersion): any => ({
    ...obj,
  });
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

export namespace Container {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Container): any => ({
    ...obj,
  });
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

export namespace TargetContainerRepository {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetContainerRepository): any => ({
    ...obj,
  });
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

export namespace ContainerDistributionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDistributionConfiguration): any => ({
    ...obj,
  });
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
}

export namespace EbsInstanceBlockDeviceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInstanceBlockDeviceSpecification): any => ({
    ...obj,
  });
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
   * <p>Use to remove a mapping from the parent image.</p>
   */
  noDevice?: string;
}

export namespace InstanceBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a custom source AMI and block device mapping configurations of an instance
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

export namespace InstanceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A container recipe.</p>
 */
export interface ContainerRecipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
   * 		       <note>
   * 			         <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   * 	           <ol>
   *                <li>
   * 			               <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   * 		             </li>
   *                <li>
   * 			               <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   * 		             </li>
   *                <li>
   * 			               <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   * 		             </li>
   *             </ol>
   * 		       </note>
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
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
   */
  version?: string;

  /**
   * <p>Components for build and test that are included in the container recipe.</p>
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
   * <p>The source image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The working directory for use during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>The destination repository for the container image.</p>
   */
  targetRepository?: TargetContainerRepository;
}

export namespace ContainerRecipe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerRecipe): any => ({
    ...obj,
  });
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
   * <p>The source image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ContainerRecipeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerRecipeSummary): any => ({
    ...obj,
  });
}

export interface CreateComponentRequest {
  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 		       </note>
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
   * <p>The platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p> The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the parent image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

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
  tags?: { [key: string]: string };

  /**
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

export namespace CreateComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentRequest): any => ({
    ...obj,
  });
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

export namespace CreateComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message for
 * 			details.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterCombinationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

/**
 * <p>Your version number is out of bounds or does not follow the required syntax.</p>
 */
export interface InvalidVersionNumberException extends __SmithyException, $MetadataBearer {
  name: "InvalidVersionNumberException";
  $fault: "client";
  message?: string;
}

export namespace InvalidVersionNumberException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidVersionNumberException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the number of permitted resources or operations for this service. For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and quotas</a>.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
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
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 		       </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>Components for build and test that are included in the container recipe.</p>
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
   * <p>Specifies the operating system platform when you use a custom source image.</p>
   */
  platformOverride?: Platform | string;

  /**
   * <p>Specifies the operating system version for the source image.</p>
   */
  imageOsVersionOverride?: string;

  /**
   * <p>The source image for the container recipe.</p>
   */
  parentImage: string | undefined;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: { [key: string]: string };

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

export namespace CreateContainerRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerRecipeRequest): any => ({
    ...obj,
  });
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

export namespace CreateContainerRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerRecipeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource that you are trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
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

export namespace LaunchTemplateConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateConfiguration): any => ({
    ...obj,
  });
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
}

export namespace Distribution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Distribution): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p> The idempotency token of the distribution configuration.</p>
   */
  clientToken?: string;
}

export namespace CreateDistributionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CreateDistributionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Image tests configuration.</p>
 */
export interface ImageTestsConfiguration {
  /**
   * <p>Defines if tests should be executed when building this image.</p>
   */
  imageTestsEnabled?: boolean;

  /**
   * <p>The maximum time in minutes that tests are permitted to run.</p>
   */
  timeoutMinutes?: number;
}

export namespace ImageTestsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageTestsConfiguration): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export namespace CreateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
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

export namespace CreateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageResponse): any => ({
    ...obj,
  });
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
   * 		       <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron
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
   * 			filters on the source image or components in your image recipe, EC2 Image Builder will build a
   * 			new image only when there are new versions of the image or components in your recipe that
   * 			match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it
   * 			will build a new image every time the CRON expression matches the current time. For semantic
   * 			version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API
   * 					Reference</i>.</p>
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;
}

export namespace Schedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export namespace CreateImagePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImagePipelineRequest): any => ({
    ...obj,
  });
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

export namespace CreateImagePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImagePipelineResponse): any => ({
    ...obj,
  });
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
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 		       </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>The components of the image recipe.</p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>The parent image of the image recipe. The value of the string can be the ARN of the parent
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
  tags?: { [key: string]: string };

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

export namespace CreateImageRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRecipeRequest): any => ({
    ...obj,
  });
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

export namespace CreateImageRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRecipeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon S3 logging configuration.</p>
 */
export interface S3Logs {
  /**
   * <p>The Amazon S3 bucket in which to store the logs.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The Amazon S3 path in which to store the logs.</p>
   */
  s3KeyPrefix?: string;
}

export namespace S3Logs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Logs): any => ({
    ...obj,
  });
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

export namespace Logging {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Logging): any => ({
    ...obj,
  });
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
   * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug
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
   * <p>The SNS topic on which to send image build events.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export namespace CreateInfrastructureConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CreateInfrastructureConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component build version to delete.</p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace DeleteComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentRequest): any => ({
    ...obj,
  });
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

export namespace DeleteComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits this
 * 			action. See the error message for more details.</p>
 */
export interface ResourceDependencyException extends __SmithyException, $MetadataBearer {
  name: "ResourceDependencyException";
  $fault: "client";
  message?: string;
}

export namespace ResourceDependencyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDependencyException): any => ({
    ...obj,
  });
}

export interface DeleteContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to delete.</p>
   */
  containerRecipeArn: string | undefined;
}

export namespace DeleteContainerRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerRecipeRequest): any => ({
    ...obj,
  });
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

export namespace DeleteContainerRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerRecipeResponse): any => ({
    ...obj,
  });
}

export interface DeleteDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete.</p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace DeleteDistributionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteDistributionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image to delete.</p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace DeleteImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that was deleted.</p>
   */
  imageBuildVersionArn?: string;
}

export namespace DeleteImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageResponse): any => ({
    ...obj,
  });
}

export interface DeleteImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline to delete.</p>
   */
  imagePipelineArn: string | undefined;
}

export namespace DeleteImagePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImagePipelineRequest): any => ({
    ...obj,
  });
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

export namespace DeleteImagePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImagePipelineResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe to delete.</p>
   */
  imageRecipeArn: string | undefined;
}

export namespace DeleteImageRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageRecipeRequest): any => ({
    ...obj,
  });
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

export namespace DeleteImageRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImageRecipeResponse): any => ({
    ...obj,
  });
}

export interface DeleteInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export namespace DeleteInfrastructureConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteInfrastructureConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DistributionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionConfiguration): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A list of Regions where the container image is distributed to.</p>
   */
  regions?: string[];
}

export namespace DistributionConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionConfigurationSummary): any => ({
    ...obj,
  });
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

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface GetComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires
   * 			"/\d+$" suffix.</p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace GetComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentRequest): any => ({
    ...obj,
  });
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

export namespace GetComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentResponse): any => ({
    ...obj,
  });
}

export interface GetComponentPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.</p>
   */
  componentArn: string | undefined;
}

export namespace GetComponentPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentPolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetComponentPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComponentPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>At least one of the resources referenced by your request does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface GetContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to retrieve.</p>
   */
  containerRecipeArn: string | undefined;
}

export namespace GetContainerRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerRecipeRequest): any => ({
    ...obj,
  });
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

export namespace GetContainerRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerRecipeResponse): any => ({
    ...obj,
  });
}

export interface GetContainerRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe for the policy being requested.</p>
   */
  containerRecipeArn: string | undefined;
}

export namespace GetContainerRecipePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerRecipePolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetContainerRecipePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerRecipePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			retrieve.</p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace GetDistributionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace GetDistributionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that you want to retrieve.</p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace GetImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageRequest): any => ({
    ...obj,
  });
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
   * <p>The components of the image recipe.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * <p>The parent image of the image recipe.</p>
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
  tags?: { [key: string]: string };

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

export namespace ImageRecipe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageRecipe): any => ({
    ...obj,
  });
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
   * <p>The SNS topic Amazon Resource Name (ARN) of the infrastructure configuration.</p>
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
  resourceTags?: { [key: string]: string };

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };
}

export namespace InfrastructureConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InfrastructureConfiguration): any => ({
    ...obj,
  });
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

export namespace OutputResources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputResources): any => ({
    ...obj,
  });
}

/**
 * <p>An Image Builder image. You must specify exactly one recipe for the image – either
 * 			a container recipe (<code>containerRecipe</code>), which creates a container
 * 			image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.</p>
 */
export interface Image {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   * 		       <note>
   * 			         <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   * 	           <ol>
   *                <li>
   * 			               <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   * 		             </li>
   *                <li>
   * 			               <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   * 		             </li>
   *                <li>
   * 			               <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   * 		             </li>
   *             </ol>
   * 		       </note>
   */
  arn?: string;

  /**
   * <p>Specifies whether this is an AMI or container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>The semantic version of the image.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
   */
  version?: string;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p> Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or
   * 			Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>The image recipe used when creating the image.</p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * <p>The recipe that is used to create an Image Builder container image.</p>
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
   * <p>The infrastructure used when creating this image.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p>The distribution configuration used when creating this image.</p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * <p>The image tests configuration used when creating this image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The date on which this image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The output resources produced when creating this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The tags of the image.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
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

export namespace GetImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageResponse): any => ({
    ...obj,
  });
}

export interface GetImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.</p>
   */
  imagePipelineArn: string | undefined;
}

export namespace GetImagePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImagePipelineRequest): any => ({
    ...obj,
  });
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
   * <p>The date on which this image pipeline was last run.</p>
   */
  dateLastRun?: string;

  /**
   * <p>The date on which this image pipeline will next be run.</p>
   */
  dateNextRun?: string;

  /**
   * <p>The tags of this image pipeline.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImagePipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImagePipeline): any => ({
    ...obj,
  });
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

export namespace GetImagePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImagePipelineResponse): any => ({
    ...obj,
  });
}

export interface GetImagePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.</p>
   */
  imageArn: string | undefined;
}

export namespace GetImagePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImagePolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetImagePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImagePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageRecipeRequest): any => ({
    ...obj,
  });
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

export namespace GetImageRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageRecipeResponse): any => ({
    ...obj,
  });
}

export interface GetImageRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageRecipePolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetImageRecipePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImageRecipePolicyResponse): any => ({
    ...obj,
  });
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

export namespace GetInfrastructureConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace GetInfrastructureConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
}

export interface ImportComponentRequest {
  /**
   * <p> The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
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
  tags?: { [key: string]: string };

  /**
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

export namespace ImportComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportComponentRequest): any => ({
    ...obj,
  });
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

export namespace ImportComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have provided an invalid pagination token in your request.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPaginationTokenException): any => ({
    ...obj,
  });
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

export namespace ListComponentBuildVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentBuildVersionsRequest): any => ({
    ...obj,
  });
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

export namespace ListComponentBuildVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentBuildVersionsResponse): any => ({
    ...obj,
  });
}

export enum Ownership {
  AMAZON = "Amazon",
  SELF = "Self",
  SHARED = "Shared",
}

export interface ListComponentsRequest {
  /**
   * <p>The owner defines which components you want to list. By default, this request will only
   * 			show components owned by your account. You can use this field to specify if you want to view
   * 			components owned by yourself, by Amazon, or those components that have been shared with you by
   * 			other customers.</p>
   */
  owner?: Ownership | string;

  /**
   * <p>Use the following filters to streamline results:</p>
   * 		       <ul>
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
   * <p>Returns the list of component build versions for the specified name.</p>
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

export namespace ListComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsRequest): any => ({
    ...obj,
  });
}

export interface ListComponentsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of component semantic versions.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 		       </note>
   */
  componentVersionList?: ComponentVersion[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export namespace ListComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsResponse): any => ({
    ...obj,
  });
}

export interface ListContainerRecipesRequest {
  /**
   * <p>Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.</p>
   */
  owner?: Ownership | string;

  /**
   * <p>Use the following filters to streamline results:</p>
   * 		       <ul>
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

export namespace ListContainerRecipesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContainerRecipesRequest): any => ({
    ...obj,
  });
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

export namespace ListContainerRecipesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContainerRecipesResponse): any => ({
    ...obj,
  });
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

export namespace ListDistributionConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionConfigurationsRequest): any => ({
    ...obj,
  });
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

export namespace ListDistributionConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDistributionConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListImageBuildVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.</p>
   */
  imageVersionArn: string | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   * 		       <ul>
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

export namespace ListImageBuildVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageBuildVersionsRequest): any => ({
    ...obj,
  });
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
   * <p>Specifies whether this is an AMI or container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>The version of the image.</p>
   */
  version?: string;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or
   * 			Microsoft Windows Server 2019.</p>
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
   * <p>The date on which this image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The output resources produced when creating this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The tags of the image.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageSummary): any => ({
    ...obj,
  });
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

export namespace ListImageBuildVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageBuildVersionsResponse): any => ({
    ...obj,
  });
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

export namespace ListImagePackagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePackagesRequest): any => ({
    ...obj,
  });
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

export namespace ImagePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImagePackage): any => ({
    ...obj,
  });
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

export namespace ListImagePackagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePackagesResponse): any => ({
    ...obj,
  });
}

export interface ListImagePipelineImagesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   * 		       <ul>
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

export namespace ListImagePipelineImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePipelineImagesRequest): any => ({
    ...obj,
  });
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

export namespace ListImagePipelineImagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePipelineImagesResponse): any => ({
    ...obj,
  });
}

export interface ListImagePipelinesRequest {
  /**
   * <p>Use the following filters to streamline results:</p>
   * 		       <ul>
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

export namespace ListImagePipelinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePipelinesRequest): any => ({
    ...obj,
  });
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

export namespace ListImagePipelinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagePipelinesResponse): any => ({
    ...obj,
  });
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
   * 		       <ul>
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

export namespace ListImageRecipesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageRecipesRequest): any => ({
    ...obj,
  });
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
   * <p>The parent image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImageRecipeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageRecipeSummary): any => ({
    ...obj,
  });
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

export namespace ListImageRecipesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImageRecipesResponse): any => ({
    ...obj,
  });
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
   * 		       <ul>
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

export namespace ListImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The defining characteristics of a specific version of an Image Builder image.</p>
 */
export interface ImageVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of a specific version of an Image Builder image.</p>
   * 		       <note>
   * 			         <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   * 	           <ol>
   *                <li>
   * 			               <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   * 		             </li>
   *                <li>
   * 			               <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   * 		             </li>
   *                <li>
   * 			               <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   * 		             </li>
   *             </ol>
   * 		       </note>
   */
  arn?: string;

  /**
   * <p>The name of this specific version of an Image Builder image.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether this image is an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>Details for a specific version of an Image Builder image. This version follows the semantic version syntax.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number, and that is not open for updates.</p>
   * 			         <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
   */
  version?: string;

  /**
   * <p>The platform of the image version, for example "Windows" or "Linux".</p>
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
}

export namespace ImageVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageVersion): any => ({
    ...obj,
  });
}

export interface ListImagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of image semantic versions.</p>
   * 		       <note>
   * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   * 			         <p>
   *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
   * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
   * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
   * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
   * 	automatically uses a wildcard for that, if applicable.</p>
   * 		       </note>
   */
  imageVersionList?: ImageVersion[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export namespace ListImagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj,
  });
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

export namespace ListInfrastructureConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInfrastructureConfigurationsRequest): any => ({
    ...obj,
  });
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
  resourceTags?: { [key: string]: string };

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;
}

export namespace InfrastructureConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InfrastructureConfigurationSummary): any => ({
    ...obj,
  });
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

export namespace ListInfrastructureConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInfrastructureConfigurationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 * 			request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The value that you provided for the specified parameter is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
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

export namespace PutComponentPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutComponentPolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutComponentPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutComponentPolicyResponse): any => ({
    ...obj,
  });
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

export namespace PutContainerRecipePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutContainerRecipePolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutContainerRecipePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutContainerRecipePolicyResponse): any => ({
    ...obj,
  });
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

export namespace PutImagePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImagePolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutImagePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImagePolicyResponse): any => ({
    ...obj,
  });
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

export namespace PutImageRecipePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageRecipePolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutImageRecipePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageRecipePolicyResponse): any => ({
    ...obj,
  });
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

export namespace StartImagePipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImagePipelineExecutionRequest): any => ({
    ...obj,
  });
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

export namespace StartImagePipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImagePipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateDistributionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UpdateDistributionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace UpdateImagePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImagePipelineRequest): any => ({
    ...obj,
  });
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

export namespace UpdateImagePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImagePipelineResponse): any => ({
    ...obj,
  });
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
   * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug
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
   * <p>The SNS topic on which to send image build events.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };
}

export namespace UpdateInfrastructureConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UpdateInfrastructureConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
}
