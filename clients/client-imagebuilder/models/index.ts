import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> Details of an EC2 AMI. </p>
 */
export interface Ami {
  __type?: "Ami";
  /**
   * <p>The description of the EC2 AMI. </p>
   */
  description?: string;

  /**
   * <p>The AMI ID of the EC2 AMI. </p>
   */
  image?: string;

  /**
   * <p> Image state shows the image status and the reason for that status. </p>
   */
  state?: ImageState;

  /**
   * <p>The name of the EC2 AMI. </p>
   */
  name?: string;

  /**
   * <p>The AWS Region of the EC2 AMI. </p>
   */
  region?: string;
}

export namespace Ami {
  export const filterSensitiveLog = (obj: Ami): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Ami => __isa(o, "Ami");
}

/**
 * <p> Define and configure the output AMIs of the pipeline. </p>
 */
export interface AmiDistributionConfiguration {
  __type?: "AmiDistributionConfiguration";
  /**
   * <p>The tags to apply to AMIs distributed to this Region. </p>
   */
  amiTags?: { [key: string]: string };

  /**
   * <p>The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p>The name of the distribution configuration. </p>
   */
  name?: string;

  /**
   * <p> Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances. </p>
   */
  launchPermission?: LaunchPermissionConfiguration;

  /**
   * <p> The KMS key identifier used to encrypt the distributed image. </p>
   */
  kmsKeyId?: string;
}

export namespace AmiDistributionConfiguration {
  export const filterSensitiveLog = (obj: AmiDistributionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AmiDistributionConfiguration => __isa(o, "AmiDistributionConfiguration");
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
  export const filterSensitiveLog = (obj: CallRateLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CallRateLimitExceededException => __isa(o, "CallRateLimitExceededException");
}

export interface CancelImageCreationRequest {
  __type?: "CancelImageCreationRequest";
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
  export const filterSensitiveLog = (obj: CancelImageCreationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelImageCreationRequest => __isa(o, "CancelImageCreationRequest");
}

export interface CancelImageCreationResponse {
  __type?: "CancelImageCreationResponse";
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
  export const filterSensitiveLog = (obj: CancelImageCreationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelImageCreationResponse => __isa(o, "CancelImageCreationResponse");
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an invalid resource identifier.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  message?: string;
}

export namespace ClientException {
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClientException => __isa(o, "ClientException");
}

/**
 * <p>A detailed view of a component.</p>
 */
export interface Component {
  __type?: "Component";
  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation. </p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The KMS key identifier used to encrypt the component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The encryption status of the component.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The data of the component.</p>
   */
  data?: string;
}

export namespace Component {
  export const filterSensitiveLog = (obj: Component): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Component => __isa(o, "Component");
}

/**
 * <p> Configuration details of the component. </p>
 */
export interface ComponentConfiguration {
  __type?: "ComponentConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) of the component. </p>
   */
  componentArn: string | undefined;
}

export namespace ComponentConfiguration {
  export const filterSensitiveLog = (obj: ComponentConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComponentConfiguration => __isa(o, "ComponentConfiguration");
}

export enum ComponentFormat {
  SHELL = "SHELL",
}

/**
 * <p>A high-level summary of a component.</p>
 */
export interface ComponentSummary {
  __type?: "ComponentSummary";
  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation. </p>
   */
  supportedOsVersions?: string[];
}

export namespace ComponentSummary {
  export const filterSensitiveLog = (obj: ComponentSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComponentSummary => __isa(o, "ComponentSummary");
}

export enum ComponentType {
  BUILD = "BUILD",
  TEST = "TEST",
}

/**
 * <p>A high-level overview of a component semantic version.</p>
 */
export interface ComponentVersion {
  __type?: "ComponentVersion";
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p> The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation. </p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>The semantic version of the component.</p>
   */
  version?: string;

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;
}

export namespace ComponentVersion {
  export const filterSensitiveLog = (obj: ComponentVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ComponentVersion => __isa(o, "ComponentVersion");
}

export interface CreateComponentRequest {
  __type?: "CreateComponentRequest";
  /**
   * <p>The tags of the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation. </p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).</p>
   */
  semanticVersion: string | undefined;

  /**
   * <p>The ID of the KMS key that should be used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.</p>
   */
  uri?: string;

  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.</p>
   */
  data?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;

  /**
   * <p>The description of the component. Describes the contents of the component.</p>
   */
  description?: string;
}

export namespace CreateComponentRequest {
  export const filterSensitiveLog = (obj: CreateComponentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateComponentRequest => __isa(o, "CreateComponentRequest");
}

export interface CreateComponentResponse {
  __type?: "CreateComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the component that was created by this request.</p>
   */
  componentBuildVersionArn?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;
}

export namespace CreateComponentResponse {
  export const filterSensitiveLog = (obj: CreateComponentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateComponentResponse => __isa(o, "CreateComponentResponse");
}

export interface CreateDistributionConfigurationRequest {
  __type?: "CreateDistributionConfigurationRequest";
  /**
   * <p> The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p> The idempotency token of the distribution configuration. </p>
   */
  clientToken?: string;

  /**
   * <p> The name of the distribution configuration. </p>
   */
  name: string | undefined;

  /**
   * <p> The tags of the distribution configuration. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The distributions of the distribution configuration. </p>
   */
  distributions: Distribution[] | undefined;
}

export namespace CreateDistributionConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateDistributionConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDistributionConfigurationRequest =>
    __isa(o, "CreateDistributionConfigurationRequest");
}

export interface CreateDistributionConfigurationResponse {
  __type?: "CreateDistributionConfigurationResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that was created by this request. </p>
   */
  distributionConfigurationArn?: string;
}

export namespace CreateDistributionConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateDistributionConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDistributionConfigurationResponse =>
    __isa(o, "CreateDistributionConfigurationResponse");
}

export interface CreateImagePipelineRequest {
  __type?: "CreateImagePipelineRequest";
  /**
   * <p> The tags of the image pipeline. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline. </p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p> The status of the image pipeline. </p>
   */
  status?: PipelineStatus | string;

  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The schedule of the image pipeline. </p>
   */
  schedule?: Schedule;

  /**
   * <p> The image test configuration of the image pipeline. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. </p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The name of the image pipeline. </p>
   */
  name: string | undefined;

  /**
   * <p> The description of the image pipeline. </p>
   */
  description?: string;
}

export namespace CreateImagePipelineRequest {
  export const filterSensitiveLog = (obj: CreateImagePipelineRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImagePipelineRequest => __isa(o, "CreateImagePipelineRequest");
}

export interface CreateImagePipelineResponse {
  __type?: "CreateImagePipelineResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that was created by this request. </p>
   */
  imagePipelineArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace CreateImagePipelineResponse {
  export const filterSensitiveLog = (obj: CreateImagePipelineResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImagePipelineResponse => __isa(o, "CreateImagePipelineResponse");
}

export interface CreateImageRecipeRequest {
  __type?: "CreateImageRecipeRequest";
  /**
   * <p>The components of the image recipe. </p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The working directory to be used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>The block device mappings of the image recipe. </p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/2019.x.x</code>. The ARN ends with <code>/20xx.x.x</code>, which communicates to EC2 Image Builder that you want to use the latest AMI created in 20xx (year). You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder. </p>
   */
  parentImage: string | undefined;

  /**
   * <p> The name of the image recipe. </p>
   */
  name: string | undefined;

  /**
   * <p> The description of the image recipe. </p>
   */
  description?: string;

  /**
   * <p> The tags of the image recipe. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The semantic version of the image recipe. </p>
   */
  semanticVersion: string | undefined;
}

export namespace CreateImageRecipeRequest {
  export const filterSensitiveLog = (obj: CreateImageRecipeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImageRecipeRequest => __isa(o, "CreateImageRecipeRequest");
}

export interface CreateImageRecipeResponse {
  __type?: "CreateImageRecipeResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was created by this request. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;
}

export namespace CreateImageRecipeResponse {
  export const filterSensitiveLog = (obj: CreateImageRecipeResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImageRecipeResponse => __isa(o, "CreateImageRecipeResponse");
}

export interface CreateImageRequest {
  __type?: "CreateImageRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. </p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p> The tags of the image. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The image tests configuration of the image. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. </p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;
}

export namespace CreateImageRequest {
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImageRequest => __isa(o, "CreateImageRequest");
}

export interface CreateImageResponse {
  __type?: "CreateImageResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image that was created by this request. </p>
   */
  imageBuildVersionArn?: string;
}

export namespace CreateImageResponse {
  export const filterSensitiveLog = (obj: CreateImageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateImageResponse => __isa(o, "CreateImageResponse");
}

export interface CreateInfrastructureConfigurationRequest {
  __type?: "CreateInfrastructureConfigurationRequest";
  /**
   * <p>The subnet ID in which to place the instance used to customize your EC2 AMI. </p>
   */
  subnetId?: string;

  /**
   * <p>The description of the infrastructure configuration. </p>
   */
  description?: string;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The tags of the infrastructure configuration. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. </p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The SNS topic on which to send image build events. </p>
   */
  snsTopicArn?: string;

  /**
   * <p>The security group IDs to associate with the instance used to customize your EC2 AMI. </p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The instance profile to associate with the instance used to customize your EC2 AMI. </p>
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image. </p>
   */
  keyPair?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration. </p>
   */
  logging?: Logging;

  /**
   * <p>The name of the infrastructure configuration. </p>
   */
  name: string | undefined;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. </p>
   */
  instanceTypes?: string[];
}

export namespace CreateInfrastructureConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInfrastructureConfigurationRequest =>
    __isa(o, "CreateInfrastructureConfigurationRequest");
}

export interface CreateInfrastructureConfigurationResponse {
  __type?: "CreateInfrastructureConfigurationResponse";
  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was created by this request. </p>
   */
  infrastructureConfigurationArn?: string;
}

export namespace CreateInfrastructureConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInfrastructureConfigurationResponse =>
    __isa(o, "CreateInfrastructureConfigurationResponse");
}

export interface DeleteComponentRequest {
  __type?: "DeleteComponentRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the component build version to delete. </p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace DeleteComponentRequest {
  export const filterSensitiveLog = (obj: DeleteComponentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteComponentRequest => __isa(o, "DeleteComponentRequest");
}

export interface DeleteComponentResponse {
  __type?: "DeleteComponentResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component build version that was deleted. </p>
   */
  componentBuildVersionArn?: string;
}

export namespace DeleteComponentResponse {
  export const filterSensitiveLog = (obj: DeleteComponentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteComponentResponse => __isa(o, "DeleteComponentResponse");
}

export interface DeleteDistributionConfigurationRequest {
  __type?: "DeleteDistributionConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete. </p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace DeleteDistributionConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteDistributionConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDistributionConfigurationRequest =>
    __isa(o, "DeleteDistributionConfigurationRequest");
}

export interface DeleteDistributionConfigurationResponse {
  __type?: "DeleteDistributionConfigurationResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was deleted. </p>
   */
  distributionConfigurationArn?: string;
}

export namespace DeleteDistributionConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteDistributionConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDistributionConfigurationResponse =>
    __isa(o, "DeleteDistributionConfigurationResponse");
}

export interface DeleteImagePipelineRequest {
  __type?: "DeleteImagePipelineRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline to delete. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace DeleteImagePipelineRequest {
  export const filterSensitiveLog = (obj: DeleteImagePipelineRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImagePipelineRequest => __isa(o, "DeleteImagePipelineRequest");
}

export interface DeleteImagePipelineResponse {
  __type?: "DeleteImagePipelineResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was deleted. </p>
   */
  imagePipelineArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteImagePipelineResponse {
  export const filterSensitiveLog = (obj: DeleteImagePipelineResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImagePipelineResponse => __isa(o, "DeleteImagePipelineResponse");
}

export interface DeleteImageRecipeRequest {
  __type?: "DeleteImageRecipeRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe to delete. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace DeleteImageRecipeRequest {
  export const filterSensitiveLog = (obj: DeleteImageRecipeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImageRecipeRequest => __isa(o, "DeleteImageRecipeRequest");
}

export interface DeleteImageRecipeResponse {
  __type?: "DeleteImageRecipeResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was deleted. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteImageRecipeResponse {
  export const filterSensitiveLog = (obj: DeleteImageRecipeResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImageRecipeResponse => __isa(o, "DeleteImageRecipeResponse");
}

export interface DeleteImageRequest {
  __type?: "DeleteImageRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image to delete. </p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace DeleteImageRequest {
  export const filterSensitiveLog = (obj: DeleteImageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImageRequest => __isa(o, "DeleteImageRequest");
}

export interface DeleteImageResponse {
  __type?: "DeleteImageResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that was deleted. </p>
   */
  imageBuildVersionArn?: string;
}

export namespace DeleteImageResponse {
  export const filterSensitiveLog = (obj: DeleteImageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteImageResponse => __isa(o, "DeleteImageResponse");
}

export interface DeleteInfrastructureConfigurationRequest {
  __type?: "DeleteInfrastructureConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete. </p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export namespace DeleteInfrastructureConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInfrastructureConfigurationRequest =>
    __isa(o, "DeleteInfrastructureConfigurationRequest");
}

export interface DeleteInfrastructureConfigurationResponse {
  __type?: "DeleteInfrastructureConfigurationResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted. </p>
   */
  infrastructureConfigurationArn?: string;
}

export namespace DeleteInfrastructureConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInfrastructureConfigurationResponse =>
    __isa(o, "DeleteInfrastructureConfigurationResponse");
}

/**
 * <p> Defines the settings for a specific Region. </p>
 */
export interface Distribution {
  __type?: "Distribution";
  /**
   * <p>The specific AMI settings (for example, launch permissions, AMI tags). </p>
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  /**
   * <p>The License Manager Configuration to associate with the AMI in the specified Region.</p>
   */
  licenseConfigurationArns?: string[];

  /**
   * <p>The target Region. </p>
   */
  region: string | undefined;
}

export namespace Distribution {
  export const filterSensitiveLog = (obj: Distribution): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Distribution => __isa(o, "Distribution");
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfiguration {
  __type?: "DistributionConfiguration";
  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The maximum duration in minutes for this distribution configuration.</p>
   */
  timeoutMinutes: number | undefined;

  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this distribution configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The tags of the distribution configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The distributions of the distribution configuration.</p>
   */
  distributions?: Distribution[];

  /**
   * <p>The date on which this distribution configuration was created.</p>
   */
  dateCreated?: string;
}

export namespace DistributionConfiguration {
  export const filterSensitiveLog = (obj: DistributionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DistributionConfiguration => __isa(o, "DistributionConfiguration");
}

/**
 * <p>A high-level overview of a distribution configuration.</p>
 */
export interface DistributionConfigurationSummary {
  __type?: "DistributionConfigurationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which the distribution configuration was updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The date on which the distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The tags associated with the distribution configuration.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DistributionConfigurationSummary {
  export const filterSensitiveLog = (obj: DistributionConfigurationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DistributionConfigurationSummary => __isa(o, "DistributionConfigurationSummary");
}

/**
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  __type?: "EbsInstanceBlockDeviceSpecification";
  /**
   * <p>Use to configure delete on termination of the associated device.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * <p>Use to override the device's volume type.</p>
   */
  volumeType?: EbsVolumeType | string;

  /**
   * <p>Use to configure the KMS key to use when encrypting the device.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>Use to configure device IOPS.</p>
   */
  iops?: number;

  /**
   * <p>The snapshot that defines the device contents.</p>
   */
  snapshotId?: string;

  /**
   * <p>Use to configure device encryption.</p>
   */
  encrypted?: boolean;

  /**
   * <p>Use to override the device's volume size.</p>
   */
  volumeSize?: number;
}

export namespace EbsInstanceBlockDeviceSpecification {
  export const filterSensitiveLog = (obj: EbsInstanceBlockDeviceSpecification): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EbsInstanceBlockDeviceSpecification =>
    __isa(o, "EbsInstanceBlockDeviceSpecification");
}

export enum EbsVolumeType {
  gp2 = "gp2",
  io1 = "io1",
  sc1 = "sc1",
  st1 = "st1",
  standard = "standard",
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. </p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter. Filter names are case-sensitive. </p>
   */
  name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive. </p>
   */
  values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export interface GetComponentPolicyRequest {
  __type?: "GetComponentPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the component whose policy you want to retrieve. </p>
   */
  componentArn: string | undefined;
}

export namespace GetComponentPolicyRequest {
  export const filterSensitiveLog = (obj: GetComponentPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetComponentPolicyRequest => __isa(o, "GetComponentPolicyRequest");
}

export interface GetComponentPolicyResponse {
  __type?: "GetComponentPolicyResponse";
  /**
   * <p>The component policy. </p>
   */
  policy?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetComponentPolicyResponse {
  export const filterSensitiveLog = (obj: GetComponentPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetComponentPolicyResponse => __isa(o, "GetComponentPolicyResponse");
}

export interface GetComponentRequest {
  __type?: "GetComponentRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires "/\d+$" suffix.</p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace GetComponentRequest {
  export const filterSensitiveLog = (obj: GetComponentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetComponentRequest => __isa(o, "GetComponentRequest");
}

export interface GetComponentResponse {
  __type?: "GetComponentResponse";
  /**
   * <p>The component object associated with the specified ARN. </p>
   */
  component?: Component;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetComponentResponse {
  export const filterSensitiveLog = (obj: GetComponentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetComponentResponse => __isa(o, "GetComponentResponse");
}

export interface GetDistributionConfigurationRequest {
  __type?: "GetDistributionConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve. </p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace GetDistributionConfigurationRequest {
  export const filterSensitiveLog = (obj: GetDistributionConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionConfigurationRequest =>
    __isa(o, "GetDistributionConfigurationRequest");
}

export interface GetDistributionConfigurationResponse {
  __type?: "GetDistributionConfigurationResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The distribution configuration object. </p>
   */
  distributionConfiguration?: DistributionConfiguration;
}

export namespace GetDistributionConfigurationResponse {
  export const filterSensitiveLog = (obj: GetDistributionConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionConfigurationResponse =>
    __isa(o, "GetDistributionConfigurationResponse");
}

export interface GetImagePipelineRequest {
  __type?: "GetImagePipelineRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace GetImagePipelineRequest {
  export const filterSensitiveLog = (obj: GetImagePipelineRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImagePipelineRequest => __isa(o, "GetImagePipelineRequest");
}

export interface GetImagePipelineResponse {
  __type?: "GetImagePipelineResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The image pipeline object. </p>
   */
  imagePipeline?: ImagePipeline;
}

export namespace GetImagePipelineResponse {
  export const filterSensitiveLog = (obj: GetImagePipelineResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImagePipelineResponse => __isa(o, "GetImagePipelineResponse");
}

export interface GetImagePolicyRequest {
  __type?: "GetImagePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve. </p>
   */
  imageArn: string | undefined;
}

export namespace GetImagePolicyRequest {
  export const filterSensitiveLog = (obj: GetImagePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImagePolicyRequest => __isa(o, "GetImagePolicyRequest");
}

export interface GetImagePolicyResponse {
  __type?: "GetImagePolicyResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The image policy object. </p>
   */
  policy?: string;
}

export namespace GetImagePolicyResponse {
  export const filterSensitiveLog = (obj: GetImagePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImagePolicyResponse => __isa(o, "GetImagePolicyResponse");
}

export interface GetImageRecipePolicyRequest {
  __type?: "GetImageRecipePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipePolicyRequest {
  export const filterSensitiveLog = (obj: GetImageRecipePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageRecipePolicyRequest => __isa(o, "GetImageRecipePolicyRequest");
}

export interface GetImageRecipePolicyResponse {
  __type?: "GetImageRecipePolicyResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The image recipe policy object. </p>
   */
  policy?: string;
}

export namespace GetImageRecipePolicyResponse {
  export const filterSensitiveLog = (obj: GetImageRecipePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageRecipePolicyResponse => __isa(o, "GetImageRecipePolicyResponse");
}

export interface GetImageRecipeRequest {
  __type?: "GetImageRecipeRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipeRequest {
  export const filterSensitiveLog = (obj: GetImageRecipeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageRecipeRequest => __isa(o, "GetImageRecipeRequest");
}

export interface GetImageRecipeResponse {
  __type?: "GetImageRecipeResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The image recipe object. </p>
   */
  imageRecipe?: ImageRecipe;
}

export namespace GetImageRecipeResponse {
  export const filterSensitiveLog = (obj: GetImageRecipeResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageRecipeResponse => __isa(o, "GetImageRecipeResponse");
}

export interface GetImageRequest {
  __type?: "GetImageRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image that you want to retrieve. </p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace GetImageRequest {
  export const filterSensitiveLog = (obj: GetImageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageRequest => __isa(o, "GetImageRequest");
}

export interface GetImageResponse {
  __type?: "GetImageResponse";
  /**
   * <p>The image object. </p>
   */
  image?: Image;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImageResponse {
  export const filterSensitiveLog = (obj: GetImageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetImageResponse => __isa(o, "GetImageResponse");
}

/**
 * <p> GetInfrastructureConfiguration request object. </p>
 */
export interface GetInfrastructureConfigurationRequest {
  __type?: "GetInfrastructureConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve. </p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export namespace GetInfrastructureConfigurationRequest {
  export const filterSensitiveLog = (obj: GetInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInfrastructureConfigurationRequest =>
    __isa(o, "GetInfrastructureConfigurationRequest");
}

/**
 * <p>GetInfrastructureConfiguration response object. </p>
 */
export interface GetInfrastructureConfigurationResponse {
  __type?: "GetInfrastructureConfigurationResponse";
  /**
   * <p>The infrastructure configuration object. </p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetInfrastructureConfigurationResponse {
  export const filterSensitiveLog = (obj: GetInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInfrastructureConfigurationResponse =>
    __isa(o, "GetInfrastructureConfigurationResponse");
}

/**
 * <p>You have specified a client token for an operation using parameter values that differ from a previous request that used the same client token.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IdempotentParameterMismatchException =>
    __isa(o, "IdempotentParameterMismatchException");
}

/**
 * <p>An image build version.</p>
 */
export interface Image {
  __type?: "Image";
  /**
   * <p>The distribution configuration used when creating this image.</p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * <p>The name of the image pipeline that created this image.</p>
   */
  sourcePipelineName?: string;

  /**
   * <p>The output resources produced when creating this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
   */
  sourcePipelineArn?: string;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags of the image.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The semantic version of the image.</p>
   */
  version?: string;

  /**
   * <p>The image tests configuration used when creating this image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The infrastructure used when creating this image.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p>The image recipe used when creating the image.</p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * <p>The date on which this image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019. </p>
   */
  osVersion?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p> Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. </p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;
}

export namespace Image {
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Image => __isa(o, "Image");
}

/**
 * <p>Details of an image pipeline.</p>
 */
export interface ImagePipeline {
  __type?: "ImagePipeline";
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline.</p>
   */
  arn?: string;

  /**
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * <p> Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. </p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The tags of this image pipeline.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The date on which this image pipeline was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The image tests configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The platform of the image pipeline.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The date on which this image pipeline was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The name of the image pipeline.</p>
   */
  name?: string;

  /**
   * <p>The date on which this image pipeline will next be run.</p>
   */
  dateNextRun?: string;

  /**
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * <p>The date on which this image pipeline was last run.</p>
   */
  dateLastRun?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.</p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.</p>
   */
  imageRecipeArn?: string;
}

export namespace ImagePipeline {
  export const filterSensitiveLog = (obj: ImagePipeline): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImagePipeline => __isa(o, "ImagePipeline");
}

/**
 * <p>An image recipe.</p>
 */
export interface ImageRecipe {
  __type?: "ImageRecipe";
  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The block device mappings to apply when creating images from this recipe.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The working directory to be used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>The components of the image recipe.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * <p>The description of the image recipe.</p>
   */
  description?: string;

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The parent image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the image recipe.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;
}

export namespace ImageRecipe {
  export const filterSensitiveLog = (obj: ImageRecipe): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageRecipe => __isa(o, "ImageRecipe");
}

/**
 * <p>A summary of an image recipe.</p>
 */
export interface ImageRecipeSummary {
  __type?: "ImageRecipeSummary";
  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The parent image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;
}

export namespace ImageRecipeSummary {
  export const filterSensitiveLog = (obj: ImageRecipeSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageRecipeSummary => __isa(o, "ImageRecipeSummary");
}

/**
 * <p> Image state shows the image status and the reason for that status. </p>
 */
export interface ImageState {
  __type?: "ImageState";
  /**
   * <p>The status of the image. </p>
   */
  status?: ImageStatus | string;

  /**
   * <p>The reason for the image's status. </p>
   */
  reason?: string;
}

export namespace ImageState {
  export const filterSensitiveLog = (obj: ImageState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageState => __isa(o, "ImageState");
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
 * <p>An image summary.</p>
 */
export interface ImageSummary {
  __type?: "ImageSummary";
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

  /**
   * <p>The owner of the image.</p>
   */
  owner?: string;

  /**
   * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019. </p>
   */
  osVersion?: string;

  /**
   * <p>The version of the image.</p>
   */
  version?: string;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;
}

export namespace ImageSummary {
  export const filterSensitiveLog = (obj: ImageSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageSummary => __isa(o, "ImageSummary");
}

/**
 * <p>Image tests configuration.</p>
 */
export interface ImageTestsConfiguration {
  __type?: "ImageTestsConfiguration";
  /**
   * <p>The maximum time in minutes that tests are permitted to run.</p>
   */
  timeoutMinutes?: number;

  /**
   * <p>Defines if tests should be executed when building this image.</p>
   */
  imageTestsEnabled?: boolean;
}

export namespace ImageTestsConfiguration {
  export const filterSensitiveLog = (obj: ImageTestsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageTestsConfiguration => __isa(o, "ImageTestsConfiguration");
}

/**
 * <p>An image semantic version.</p>
 */
export interface ImageVersion {
  __type?: "ImageVersion";
  /**
   * <p>The platform of the image semantic version.</p>
   */
  platform?: Platform | string;

  /**
   * <p> The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019. </p>
   */
  osVersion?: string;

  /**
   * <p>The name of the image semantic version.</p>
   */
  name?: string;

  /**
   * <p>The semantic version of the image semantic version.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image semantic version.</p>
   */
  arn?: string;

  /**
   * <p>The owner of the image semantic version.</p>
   */
  owner?: string;

  /**
   * <p>The date at which this image semantic version was created.</p>
   */
  dateCreated?: string;
}

export namespace ImageVersion {
  export const filterSensitiveLog = (obj: ImageVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImageVersion => __isa(o, "ImageVersion");
}

export interface ImportComponentRequest {
  __type?: "ImportComponentRequest";
  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).</p>
   */
  semanticVersion: string | undefined;

  /**
   * <p> The name of the component. </p>
   */
  name: string | undefined;

  /**
   * <p>The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. </p>
   */
  uri?: string;

  /**
   * <p>The platform of the component. </p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it. </p>
   */
  type: ComponentType | string | undefined;

  /**
   * <p>The description of the component. Describes the contents of the component. </p>
   */
  description?: string;

  /**
   * <p>The tags of the component. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The idempotency token of the component. </p>
   */
  clientToken?: string;

  /**
   * <p>The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component. </p>
   */
  changeDescription?: string;

  /**
   * <p>The ID of the KMS key that should be used to encrypt this component. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>The format of the resource that you want to import as a component. </p>
   */
  format: ComponentFormat | string | undefined;

  /**
   * <p>The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.</p>
   */
  data?: string;
}

export namespace ImportComponentRequest {
  export const filterSensitiveLog = (obj: ImportComponentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportComponentRequest => __isa(o, "ImportComponentRequest");
}

export interface ImportComponentResponse {
  __type?: "ImportComponentResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported component. </p>
   */
  componentBuildVersionArn?: string;
}

export namespace ImportComponentResponse {
  export const filterSensitiveLog = (obj: ImportComponentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportComponentResponse => __isa(o, "ImportComponentResponse");
}

/**
 * <p>Details of the infrastructure configuration.</p>
 */
export interface InfrastructureConfiguration {
  __type?: "InfrastructureConfiguration";
  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The security group IDs of the infrastructure configuration.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The terminate instance on failure configuration of the infrastructure configuration.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The subnet ID of the infrastructure configuration.</p>
   */
  subnetId?: string;

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;

  /**
   * <p>The EC2 key pair of the infrastructure configuration.</p>
   */
  keyPair?: string;

  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * <p>The SNS topic Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];
}

export namespace InfrastructureConfiguration {
  export const filterSensitiveLog = (obj: InfrastructureConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InfrastructureConfiguration => __isa(o, "InfrastructureConfiguration");
}

/**
 * <p>The infrastructure used when building EC2 AMIs.</p>
 */
export interface InfrastructureConfigurationSummary {
  __type?: "InfrastructureConfigurationSummary";
  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * <p>The tags attached to the image created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;
}

export namespace InfrastructureConfigurationSummary {
  export const filterSensitiveLog = (obj: InfrastructureConfigurationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InfrastructureConfigurationSummary =>
    __isa(o, "InfrastructureConfigurationSummary");
}

/**
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 */
export interface InstanceBlockDeviceMapping {
  __type?: "InstanceBlockDeviceMapping";
  /**
   * <p>Use to remove a mapping from the parent image.</p>
   */
  noDevice?: string;

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
}

export namespace InstanceBlockDeviceMapping {
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceBlockDeviceMapping => __isa(o, "InstanceBlockDeviceMapping");
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
  export const filterSensitiveLog = (obj: InvalidPaginationTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidPaginationTokenException => __isa(o, "InvalidPaginationTokenException");
}

/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message for details.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterCombinationException {
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterCombinationException =>
    __isa(o, "InvalidParameterCombinationException");
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterException => __isa(o, "InvalidParameterException");
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
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterValueException => __isa(o, "InvalidParameterValueException");
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
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
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
  export const filterSensitiveLog = (obj: InvalidVersionNumberException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidVersionNumberException => __isa(o, "InvalidVersionNumberException");
}

/**
 * <p>Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a>. </p>
 */
export interface LaunchPermissionConfiguration {
  __type?: "LaunchPermissionConfiguration";
  /**
   * <p>The name of the group. </p>
   */
  userGroups?: string[];

  /**
   * <p>The AWS account ID. </p>
   */
  userIds?: string[];
}

export namespace LaunchPermissionConfiguration {
  export const filterSensitiveLog = (obj: LaunchPermissionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LaunchPermissionConfiguration => __isa(o, "LaunchPermissionConfiguration");
}

export interface ListComponentBuildVersionsRequest {
  __type?: "ListComponentBuildVersionsRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The component version Amazon Resource Name (ARN) whose versions you want to list. </p>
   */
  componentVersionArn: string | undefined;
}

export namespace ListComponentBuildVersionsRequest {
  export const filterSensitiveLog = (obj: ListComponentBuildVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListComponentBuildVersionsRequest => __isa(o, "ListComponentBuildVersionsRequest");
}

export interface ListComponentBuildVersionsResponse {
  __type?: "ListComponentBuildVersionsResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of component summaries for the specified semantic version. </p>
   */
  componentSummaryList?: ComponentSummary[];
}

export namespace ListComponentBuildVersionsResponse {
  export const filterSensitiveLog = (obj: ListComponentBuildVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListComponentBuildVersionsResponse =>
    __isa(o, "ListComponentBuildVersionsResponse");
}

export interface ListComponentsRequest {
  __type?: "ListComponentsRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];
}

export namespace ListComponentsRequest {
  export const filterSensitiveLog = (obj: ListComponentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListComponentsRequest => __isa(o, "ListComponentsRequest");
}

export interface ListComponentsResponse {
  __type?: "ListComponentsResponse";
  /**
   * <p>The list of component semantic versions. </p>
   */
  componentVersionList?: ComponentVersion[];

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;
}

export namespace ListComponentsResponse {
  export const filterSensitiveLog = (obj: ListComponentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListComponentsResponse => __isa(o, "ListComponentsResponse");
}

export interface ListDistributionConfigurationsRequest {
  __type?: "ListDistributionConfigurationsRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The filters. </p> <ul> <li> <p> <code>name</code> - The name of this distribution configuration.</p> </li> </ul>
   */
  filters?: Filter[];
}

export namespace ListDistributionConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListDistributionConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDistributionConfigurationsRequest =>
    __isa(o, "ListDistributionConfigurationsRequest");
}

export interface ListDistributionConfigurationsResponse {
  __type?: "ListDistributionConfigurationsResponse";
  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of distributions. </p>
   */
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListDistributionConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListDistributionConfigurationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDistributionConfigurationsResponse =>
    __isa(o, "ListDistributionConfigurationsResponse");
}

export interface ListImageBuildVersionsRequest {
  __type?: "ListImageBuildVersionsRequest";
  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve. </p>
   */
  imageVersionArn: string | undefined;

  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;
}

export namespace ListImageBuildVersionsRequest {
  export const filterSensitiveLog = (obj: ListImageBuildVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImageBuildVersionsRequest => __isa(o, "ListImageBuildVersionsRequest");
}

export interface ListImageBuildVersionsResponse {
  __type?: "ListImageBuildVersionsResponse";
  /**
   * <p>The list of image build versions. </p>
   */
  imageSummaryList?: ImageSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImageBuildVersionsResponse {
  export const filterSensitiveLog = (obj: ListImageBuildVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImageBuildVersionsResponse => __isa(o, "ListImageBuildVersionsResponse");
}

export interface ListImagePipelineImagesRequest {
  __type?: "ListImagePipelineImagesRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to view. </p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListImagePipelineImagesRequest {
  export const filterSensitiveLog = (obj: ListImagePipelineImagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagePipelineImagesRequest => __isa(o, "ListImagePipelineImagesRequest");
}

export interface ListImagePipelineImagesResponse {
  __type?: "ListImagePipelineImagesResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of images built by this pipeline. </p>
   */
  imageSummaryList?: ImageSummary[];
}

export namespace ListImagePipelineImagesResponse {
  export const filterSensitiveLog = (obj: ListImagePipelineImagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagePipelineImagesResponse => __isa(o, "ListImagePipelineImagesResponse");
}

export interface ListImagePipelinesRequest {
  __type?: "ListImagePipelinesRequest";
  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;
}

export namespace ListImagePipelinesRequest {
  export const filterSensitiveLog = (obj: ListImagePipelinesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagePipelinesRequest => __isa(o, "ListImagePipelinesRequest");
}

export interface ListImagePipelinesResponse {
  __type?: "ListImagePipelinesResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of image pipelines. </p>
   */
  imagePipelineList?: ImagePipeline[];
}

export namespace ListImagePipelinesResponse {
  export const filterSensitiveLog = (obj: ListImagePipelinesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagePipelinesResponse => __isa(o, "ListImagePipelinesResponse");
}

export interface ListImageRecipesRequest {
  __type?: "ListImageRecipesRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListImageRecipesRequest {
  export const filterSensitiveLog = (obj: ListImageRecipesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImageRecipesRequest => __isa(o, "ListImageRecipesRequest");
}

export interface ListImageRecipesResponse {
  __type?: "ListImageRecipesResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of image pipelines. </p>
   */
  imageRecipeSummaryList?: ImageRecipeSummary[];
}

export namespace ListImageRecipesResponse {
  export const filterSensitiveLog = (obj: ListImageRecipesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImageRecipesResponse => __isa(o, "ListImageRecipesResponse");
}

export interface ListImagesRequest {
  __type?: "ListImagesRequest";
  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];
}

export namespace ListImagesRequest {
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagesRequest => __isa(o, "ListImagesRequest");
}

export interface ListImagesResponse {
  __type?: "ListImagesResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The list of image semantic versions. </p>
   */
  imageVersionList?: ImageVersion[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects. </p>
   */
  nextToken?: string;
}

export namespace ListImagesResponse {
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListImagesResponse => __isa(o, "ListImagesResponse");
}

export interface ListInfrastructureConfigurationsRequest {
  __type?: "ListInfrastructureConfigurationsRequest";
  /**
   * <p>The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p>The filters. </p>
   */
  filters?: Filter[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListInfrastructureConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListInfrastructureConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInfrastructureConfigurationsRequest =>
    __isa(o, "ListInfrastructureConfigurationsRequest");
}

export interface ListInfrastructureConfigurationsResponse {
  __type?: "ListInfrastructureConfigurationsResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The list of infrastructure configurations. </p>
   */
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional elements that the service has not included in this request. Use this token with the next request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export namespace ListInfrastructureConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListInfrastructureConfigurationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInfrastructureConfigurationsResponse =>
    __isa(o, "ListInfrastructureConfigurationsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve. </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags for the specified resource. </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Logging configuration defines where Image Builder uploads your logs.</p>
 */
export interface Logging {
  __type?: "Logging";
  /**
   * <p>The Amazon S3 logging configuration.</p>
   */
  s3Logs?: S3Logs;
}

export namespace Logging {
  export const filterSensitiveLog = (obj: Logging): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Logging => __isa(o, "Logging");
}

/**
 * <p>The resources produced by this image. </p>
 */
export interface OutputResources {
  __type?: "OutputResources";
  /**
   * <p>The EC2 AMIs created by this image. </p>
   */
  amis?: Ami[];
}

export namespace OutputResources {
  export const filterSensitiveLog = (obj: OutputResources): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OutputResources => __isa(o, "OutputResources");
}

export enum Ownership {
  Amazon = "Amazon",
  Self = "Self",
  Shared = "Shared",
}

export enum PipelineExecutionStartCondition {
  EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
  EXPRESSION_MATCH_ONLY = "EXPRESSION_MATCH_ONLY",
}

export enum PipelineStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Platform {
  Linux = "Linux",
  Windows = "Windows",
}

export interface PutComponentPolicyRequest {
  __type?: "PutComponentPolicyRequest";
  /**
   * <p>The policy to apply. </p>
   */
  policy: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy should be applied to. </p>
   */
  componentArn: string | undefined;
}

export namespace PutComponentPolicyRequest {
  export const filterSensitiveLog = (obj: PutComponentPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutComponentPolicyRequest => __isa(o, "PutComponentPolicyRequest");
}

export interface PutComponentPolicyResponse {
  __type?: "PutComponentPolicyResponse";
  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy was applied to. </p>
   */
  componentArn?: string;
}

export namespace PutComponentPolicyResponse {
  export const filterSensitiveLog = (obj: PutComponentPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutComponentPolicyResponse => __isa(o, "PutComponentPolicyResponse");
}

export interface PutImagePolicyRequest {
  __type?: "PutImagePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy should be applied to. </p>
   */
  imageArn: string | undefined;

  /**
   * <p>The policy to apply. </p>
   */
  policy: string | undefined;
}

export namespace PutImagePolicyRequest {
  export const filterSensitiveLog = (obj: PutImagePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutImagePolicyRequest => __isa(o, "PutImagePolicyRequest");
}

export interface PutImagePolicyResponse {
  __type?: "PutImagePolicyResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy was applied to. </p>
   */
  imageArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace PutImagePolicyResponse {
  export const filterSensitiveLog = (obj: PutImagePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutImagePolicyResponse => __isa(o, "PutImagePolicyResponse");
}

export interface PutImageRecipePolicyRequest {
  __type?: "PutImageRecipePolicyRequest";
  /**
   * <p>The policy to apply. </p>
   */
  policy: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace PutImageRecipePolicyRequest {
  export const filterSensitiveLog = (obj: PutImageRecipePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutImageRecipePolicyRequest => __isa(o, "PutImageRecipePolicyRequest");
}

export interface PutImageRecipePolicyResponse {
  __type?: "PutImageRecipePolicyResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy was applied to. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace PutImageRecipePolicyResponse {
  export const filterSensitiveLog = (obj: PutImageRecipePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutImageRecipePolicyResponse => __isa(o, "PutImageRecipePolicyResponse");
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
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException => __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits this action. See the error message for more details.</p>
 */
export interface ResourceDependencyException extends __SmithyException, $MetadataBearer {
  name: "ResourceDependencyException";
  $fault: "client";
  message?: string;
}

export namespace ResourceDependencyException {
  export const filterSensitiveLog = (obj: ResourceDependencyException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceDependencyException => __isa(o, "ResourceDependencyException");
}

/**
 * <p>The resource that you are trying to operate on is currently in use. Review the message details and retry later.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceInUseException => __isa(o, "ResourceInUseException");
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Amazon S3 logging configuration.</p>
 */
export interface S3Logs {
  __type?: "S3Logs";
  /**
   * <p>The Amazon S3 path in which to store the logs.</p>
   */
  s3KeyPrefix?: string;

  /**
   * <p>The Amazon S3 bucket in which to store the logs.</p>
   */
  s3BucketName?: string;
}

export namespace S3Logs {
  export const filterSensitiveLog = (obj: S3Logs): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Logs => __isa(o, "S3Logs");
}

/**
 * <p>A schedule configures how often and when a pipeline will automatically create a new image. </p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p>The expression determines how often EC2 Image Builder evaluates your <code>pipelineExecutionStartCondition</code>.</p>
   */
  scheduleExpression?: string;

  /**
   * <p>The condition configures when the pipeline should trigger a new image build. When the <code>pipelineExecutionStartCondition</code> is set to <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, EC2 Image Builder will build a new image only when there are known changes pending. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it will build a new image every time the CRON expression matches the current time.</p>
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Schedule => __isa(o, "Schedule");
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
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceException => __isa(o, "ServiceException");
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
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
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
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export interface StartImagePipelineExecutionRequest {
  __type?: "StartImagePipelineExecutionRequest";
  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace StartImagePipelineExecutionRequest {
  export const filterSensitiveLog = (obj: StartImagePipelineExecutionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartImagePipelineExecutionRequest =>
    __isa(o, "StartImagePipelineExecutionRequest");
}

export interface StartImagePipelineExecutionResponse {
  __type?: "StartImagePipelineExecutionResponse";
  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that was created by this request.</p>
   */
  imageBuildVersionArn?: string;
}

export namespace StartImagePipelineExecutionResponse {
  export const filterSensitiveLog = (obj: StartImagePipelineExecutionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartImagePipelineExecutionResponse =>
    __isa(o, "StartImagePipelineExecutionResponse");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to apply to the resource. </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The tag keys to remove from the resource. </p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag. </p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateDistributionConfigurationRequest {
  __type?: "UpdateDistributionConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to update. </p>
   */
  distributionConfigurationArn: string | undefined;

  /**
   * <p>The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p>The distributions of the distribution configuration. </p>
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>The idempotency token of the distribution configuration. </p>
   */
  clientToken?: string;
}

export namespace UpdateDistributionConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateDistributionConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionConfigurationRequest =>
    __isa(o, "UpdateDistributionConfigurationRequest");
}

export interface UpdateDistributionConfigurationResponse {
  __type?: "UpdateDistributionConfigurationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was updated by this request. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;
}

export namespace UpdateDistributionConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateDistributionConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionConfigurationResponse =>
    __isa(o, "UpdateDistributionConfigurationResponse");
}

export interface UpdateImagePipelineRequest {
  __type?: "UpdateImagePipelineRequest";
  /**
   * <p>The description of the image pipeline. </p>
   */
  description?: string;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The status of the image pipeline. </p>
   */
  status?: PipelineStatus | string;

  /**
   * <p>The image test configuration of the image pipeline. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. </p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to update. </p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>The schedule of the image pipeline. </p>
   */
  schedule?: Schedule;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace UpdateImagePipelineRequest {
  export const filterSensitiveLog = (obj: UpdateImagePipelineRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateImagePipelineRequest => __isa(o, "UpdateImagePipelineRequest");
}

export interface UpdateImagePipelineResponse {
  __type?: "UpdateImagePipelineResponse";
  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was updated by this request. </p>
   */
  imagePipelineArn?: string;
}

export namespace UpdateImagePipelineResponse {
  export const filterSensitiveLog = (obj: UpdateImagePipelineResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateImagePipelineResponse => __isa(o, "UpdateImagePipelineResponse");
}

export interface UpdateInfrastructureConfigurationRequest {
  __type?: "UpdateInfrastructureConfigurationRequest";
  /**
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. </p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The subnet ID to place the instance used to customize your EC2 AMI in. </p>
   */
  subnetId?: string;

  /**
   * <p>The description of the infrastructure configuration. </p>
   */
  description?: string;

  /**
   * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image. </p>
   */
  keyPair?: string;

  /**
   * <p>The instance profile to associate with the instance used to customize your EC2 AMI. </p>
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration. </p>
   */
  logging?: Logging;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. </p>
   */
  instanceTypes?: string[];

  /**
   * <p>The SNS topic on which to send image build events. </p>
   */
  snsTopicArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your EC2 AMI. </p>
   */
  securityGroupIds?: string[];
}

export namespace UpdateInfrastructureConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateInfrastructureConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInfrastructureConfigurationRequest =>
    __isa(o, "UpdateInfrastructureConfigurationRequest");
}

export interface UpdateInfrastructureConfigurationResponse {
  __type?: "UpdateInfrastructureConfigurationResponse";
  /**
   * <p>The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by this request. </p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace UpdateInfrastructureConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateInfrastructureConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInfrastructureConfigurationResponse =>
    __isa(o, "UpdateInfrastructureConfigurationResponse");
}
