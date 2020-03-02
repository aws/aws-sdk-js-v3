import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> Details of an EC2 AMI. </p>
 */
export interface Ami {
  __type?: "Ami";
  /**
   * <p> The description of the EC2 AMI. </p>
   */
  description?: string;

  /**
   * <p> The AMI ID of the EC2 AMI. </p>
   */
  image?: string;

  /**
   * <p> The name of the EC2 AMI. </p>
   */
  name?: string;

  /**
   * <p> The region of the EC2 AMI. </p>
   */
  region?: string;

  /**
   * <p> Image state shows the images status and the reason for that status. </p>
   */
  state?: ImageState;
}

export namespace Ami {
  export function isa(o: any): o is Ami {
    return __isa(o, "Ami");
  }
}

/**
 * <p> Define and configure the outputs AMIs of the pipeline. </p>
 */
export interface AmiDistributionConfiguration {
  __type?: "AmiDistributionConfiguration";
  /**
   * <p> The tags to apply to AMIs distributed to this region. </p>
   */
  amiTags?: { [key: string]: string };

  /**
   * <p> The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p> Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances. </p>
   */
  launchPermission?: LaunchPermissionConfiguration;

  /**
   * <p> The name of the distribution configuration. </p>
   */
  name?: string;
}

export namespace AmiDistributionConfiguration {
  export function isa(o: any): o is AmiDistributionConfiguration {
    return __isa(o, "AmiDistributionConfiguration");
  }
}

/**
 * <p>You have exceeded the permitted request rate for the specific operation.</p>
 */
export interface CallRateLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CallRateLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace CallRateLimitExceededException {
  export function isa(o: any): o is CallRateLimitExceededException {
    return __isa(o, "CallRateLimitExceededException");
  }
}

export interface CancelImageCreationRequest {
  __type?: "CancelImageCreationRequest";
  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation you wish to cancel.</p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace CancelImageCreationRequest {
  export function isa(o: any): o is CancelImageCreationRequest {
    return __isa(o, "CancelImageCreationRequest");
  }
}

export interface CancelImageCreationResponse {
  __type?: "CancelImageCreationResponse";
  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation has been cancelled.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;
}

export namespace CancelImageCreationResponse {
  export function isa(o: any): o is CancelImageCreationResponse {
    return __isa(o, "CancelImageCreationResponse");
  }
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
  export function isa(o: any): o is ClientException {
    return __isa(o, "ClientException");
  }
}

/**
 * <p>A detailed view of a component.</p>
 */
export interface Component {
  __type?: "Component";
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The data of the component.</p>
   */
  data?: string;

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The encryption status of the component.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The KMS key identifier used to encrypt the component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The version of the component.</p>
   */
  version?: string;
}

export namespace Component {
  export function isa(o: any): o is Component {
    return __isa(o, "Component");
  }
}

/**
 * <p> Configuration details of the component. </p>
 */
export interface ComponentConfiguration {
  __type?: "ComponentConfiguration";
  /**
   * <p> The Amazon Resource Name (ARN) of the component. </p>
   */
  componentArn: string | undefined;
}

export namespace ComponentConfiguration {
  export function isa(o: any): o is ComponentConfiguration {
    return __isa(o, "ComponentConfiguration");
  }
}

export enum ComponentFormat {
  SHELL = "SHELL"
}

/**
 * <p>A high level summary of a component.</p>
 */
export interface ComponentSummary {
  __type?: "ComponentSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

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
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags associated with the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The version of the component.</p>
   */
  version?: string;
}

export namespace ComponentSummary {
  export function isa(o: any): o is ComponentSummary {
    return __isa(o, "ComponentSummary");
  }
}

export enum ComponentType {
  BUILD = "BUILD",
  TEST = "TEST"
}

/**
 * <p>A high level overview of a component semantic version.</p>
 */
export interface ComponentVersion {
  __type?: "ComponentVersion";
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

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
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The semantic version of the component.</p>
   */
  version?: string;
}

export namespace ComponentVersion {
  export function isa(o: any): o is ComponentVersion {
    return __isa(o, "ComponentVersion");
  }
}

export interface CreateComponentRequest {
  __type?: "CreateComponentRequest";
  /**
   * <p>CThe change description of the component. Describes what change has been made in this version. In other words what makes this version different from other versions of this component.</p>
   */
  changeDescription?: string;

  /**
   * <p>CThe idempotency token of the component.</p>
   */
  clientToken?: string;

  /**
   * <p>CThe data of the component.</p>
   */
  data?: string;

  /**
   * <p>CThe description of the component. Describes the contents of the component.</p>
   */
  description?: string;

  /**
   * <p>The ID of the KMS key that should be used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>CThe platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>The semantic version of the component. This version to follow the semantic version syntax. i.e. major.minor.patch. This could be versioned like software 2.0.1 or date like 2019.12.01.</p>
   */
  semanticVersion: string | undefined;

  /**
   * <p>CThe tags of the component.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>CThe uri of the component.</p>
   */
  uri?: string;
}

export namespace CreateComponentRequest {
  export function isa(o: any): o is CreateComponentRequest {
    return __isa(o, "CreateComponentRequest");
  }
}

export interface CreateComponentResponse {
  __type?: "CreateComponentResponse";
  /**
   * <p>CThe idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>CThe Amazon Resource Name (ARN) of the component that was created by this request.</p>
   */
  componentBuildVersionArn?: string;

  /**
   * <p>CThe request ID that uniquely identifies this request.</p>
   */
  requestId?: string;
}

export namespace CreateComponentResponse {
  export function isa(o: any): o is CreateComponentResponse {
    return __isa(o, "CreateComponentResponse");
  }
}

export interface CreateDistributionConfigurationRequest {
  __type?: "CreateDistributionConfigurationRequest";
  /**
   * <p> The idempotency token of the distribution configuration. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p> The distributions of the distribution configuration. </p>
   */
  distributions: Array<Distribution> | undefined;

  /**
   * <p> The name of the distribution configuration. </p>
   */
  name: string | undefined;

  /**
   * <p> The tags of the distribution configuration. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateDistributionConfigurationRequest {
  export function isa(o: any): o is CreateDistributionConfigurationRequest {
    return __isa(o, "CreateDistributionConfigurationRequest");
  }
}

export interface CreateDistributionConfigurationResponse {
  __type?: "CreateDistributionConfigurationResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that was created by this request. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace CreateDistributionConfigurationResponse {
  export function isa(o: any): o is CreateDistributionConfigurationResponse {
    return __isa(o, "CreateDistributionConfigurationResponse");
  }
}

export interface CreateImagePipelineRequest {
  __type?: "CreateImagePipelineRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the image pipeline. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline. </p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p> The image test configuration of the image pipeline. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The name of the image pipeline. </p>
   */
  name: string | undefined;

  /**
   * <p> The schedule of the image pipeline. </p>
   */
  schedule?: Schedule;

  /**
   * <p> The status of the image pipeline. </p>
   */
  status?: PipelineStatus | string;

  /**
   * <p> The tags of the image pipeline. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateImagePipelineRequest {
  export function isa(o: any): o is CreateImagePipelineRequest {
    return __isa(o, "CreateImagePipelineRequest");
  }
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
  export function isa(o: any): o is CreateImagePipelineResponse {
    return __isa(o, "CreateImagePipelineResponse");
  }
}

export interface CreateImageRecipeRequest {
  __type?: "CreateImageRecipeRequest";
  /**
   * <p> The block device mappings of the image recipe. </p>
   */
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;

  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The components of the image recipe. </p>
   */
  components: Array<ComponentConfiguration> | undefined;

  /**
   * <p> The description of the image recipe. </p>
   */
  description?: string;

  /**
   * <p> The name of the image recipe. </p>
   */
  name: string | undefined;

  /**
   * <p> The parent image of the image recipe. </p>
   */
  parentImage: string | undefined;

  /**
   * <p> The semantic version of the image recipe. </p>
   */
  semanticVersion: string | undefined;

  /**
   * <p> The tags of the image recipe. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateImageRecipeRequest {
  export function isa(o: any): o is CreateImageRecipeRequest {
    return __isa(o, "CreateImageRecipeRequest");
  }
}

export interface CreateImageRecipeResponse {
  __type?: "CreateImageRecipeResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that was created by this request. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace CreateImageRecipeResponse {
  export function isa(o: any): o is CreateImageRecipeResponse {
    return __isa(o, "CreateImageRecipeResponse");
  }
}

export interface CreateImageRequest {
  __type?: "CreateImageRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested and assessed. </p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p> The image tests configuration of the image. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The tags of the image. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateImageRequest {
  export function isa(o: any): o is CreateImageRequest {
    return __isa(o, "CreateImageRequest");
  }
}

export interface CreateImageResponse {
  __type?: "CreateImageResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image that was created by this request. </p>
   */
  imageBuildVersionArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace CreateImageResponse {
  export function isa(o: any): o is CreateImageResponse {
    return __isa(o, "CreateImageResponse");
  }
}

export interface CreateInfrastructureConfigurationRequest {
  __type?: "CreateInfrastructureConfigurationRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the infrastructure configuration. </p>
   */
  description?: string;

  /**
   * <p> The instance profile to associate with the instance used to customize your EC2 AMI. </p>
   */
  instanceProfileName: string | undefined;

  /**
   * <p> The instance types of the infrastructure configuration. You may specify one or more instance types to use for this build, the service will pick one of these instance types based on availability. </p>
   */
  instanceTypes?: Array<string>;

  /**
   * <p> The key pair of the infrastructure configuration. This can be used to log onto and debug the instance used to create your image. </p>
   */
  keyPair?: string;

  /**
   * <p> The logging configuration of the infrastructure configuration. </p>
   */
  logging?: Logging;

  /**
   * <p> The name of the infrastructure configuration. </p>
   */
  name: string | undefined;

  /**
   * <p> The security group IDs to associate with the instance used to customize your EC2 AMI. </p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p> The SNS topic on which to send image build events. </p>
   */
  snsTopicArn?: string;

  /**
   * <p> The subnet ID to place the instance used to customize your EC2 AMI in. </p>
   */
  subnetId?: string;

  /**
   * <p> The tags of the infrastructure configuration. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The terminate instance on failure setting of the infrastructure configuration. Set to false if you wish for Image Builder to retain the instance used to configure your AMI in the event that the build or test phase of your workflow failed. </p>
   */
  terminateInstanceOnFailure?: boolean;
}

export namespace CreateInfrastructureConfigurationRequest {
  export function isa(o: any): o is CreateInfrastructureConfigurationRequest {
    return __isa(o, "CreateInfrastructureConfigurationRequest");
  }
}

export interface CreateInfrastructureConfigurationResponse {
  __type?: "CreateInfrastructureConfigurationResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that was created by this request. </p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace CreateInfrastructureConfigurationResponse {
  export function isa(o: any): o is CreateInfrastructureConfigurationResponse {
    return __isa(o, "CreateInfrastructureConfigurationResponse");
  }
}

export interface DeleteComponentRequest {
  __type?: "DeleteComponentRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the component build version to delete. </p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace DeleteComponentRequest {
  export function isa(o: any): o is DeleteComponentRequest {
    return __isa(o, "DeleteComponentRequest");
  }
}

export interface DeleteComponentResponse {
  __type?: "DeleteComponentResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the component build version that was deleted. </p>
   */
  componentBuildVersionArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteComponentResponse {
  export function isa(o: any): o is DeleteComponentResponse {
    return __isa(o, "DeleteComponentResponse");
  }
}

export interface DeleteDistributionConfigurationRequest {
  __type?: "DeleteDistributionConfigurationRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration to delete. </p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace DeleteDistributionConfigurationRequest {
  export function isa(o: any): o is DeleteDistributionConfigurationRequest {
    return __isa(o, "DeleteDistributionConfigurationRequest");
  }
}

export interface DeleteDistributionConfigurationResponse {
  __type?: "DeleteDistributionConfigurationResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that was deleted. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteDistributionConfigurationResponse {
  export function isa(o: any): o is DeleteDistributionConfigurationResponse {
    return __isa(o, "DeleteDistributionConfigurationResponse");
  }
}

export interface DeleteImagePipelineRequest {
  __type?: "DeleteImagePipelineRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline to delete. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace DeleteImagePipelineRequest {
  export function isa(o: any): o is DeleteImagePipelineRequest {
    return __isa(o, "DeleteImagePipelineRequest");
  }
}

export interface DeleteImagePipelineResponse {
  __type?: "DeleteImagePipelineResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that was deleted. </p>
   */
  imagePipelineArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteImagePipelineResponse {
  export function isa(o: any): o is DeleteImagePipelineResponse {
    return __isa(o, "DeleteImagePipelineResponse");
  }
}

export interface DeleteImageRecipeRequest {
  __type?: "DeleteImageRecipeRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe to delete. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace DeleteImageRecipeRequest {
  export function isa(o: any): o is DeleteImageRecipeRequest {
    return __isa(o, "DeleteImageRecipeRequest");
  }
}

export interface DeleteImageRecipeResponse {
  __type?: "DeleteImageRecipeResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that was deleted. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteImageRecipeResponse {
  export function isa(o: any): o is DeleteImageRecipeResponse {
    return __isa(o, "DeleteImageRecipeResponse");
  }
}

export interface DeleteImageRequest {
  __type?: "DeleteImageRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image to delete. </p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace DeleteImageRequest {
  export function isa(o: any): o is DeleteImageRequest {
    return __isa(o, "DeleteImageRequest");
  }
}

export interface DeleteImageResponse {
  __type?: "DeleteImageResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the image that was deleted. </p>
   */
  imageBuildVersionArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteImageResponse {
  export function isa(o: any): o is DeleteImageResponse {
    return __isa(o, "DeleteImageResponse");
  }
}

export interface DeleteInfrastructureConfigurationRequest {
  __type?: "DeleteInfrastructureConfigurationRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration to delete. </p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export namespace DeleteInfrastructureConfigurationRequest {
  export function isa(o: any): o is DeleteInfrastructureConfigurationRequest {
    return __isa(o, "DeleteInfrastructureConfigurationRequest");
  }
}

export interface DeleteInfrastructureConfigurationResponse {
  __type?: "DeleteInfrastructureConfigurationResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted. </p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace DeleteInfrastructureConfigurationResponse {
  export function isa(o: any): o is DeleteInfrastructureConfigurationResponse {
    return __isa(o, "DeleteInfrastructureConfigurationResponse");
  }
}

/**
 * <p> </p>
 */
export interface Distribution {
  __type?: "Distribution";
  /**
   * <p> </p>
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  /**
   * <p> </p>
   */
  licenseConfigurationArns?: Array<string>;

  /**
   * <p> </p>
   */
  region: string | undefined;
}

export namespace Distribution {
  export function isa(o: any): o is Distribution {
    return __isa(o, "Distribution");
  }
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfiguration {
  __type?: "DistributionConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which this distribution configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The distributions of the distribution configuration.</p>
   */
  distributions?: Array<Distribution>;

  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The tags of the distribution configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The maximum duration in minutes for this distribution configuration.</p>
   */
  timeoutMinutes: number | undefined;
}

export namespace DistributionConfiguration {
  export function isa(o: any): o is DistributionConfiguration {
    return __isa(o, "DistributionConfiguration");
  }
}

/**
 * <p>A high level overview a distribution configuration.</p>
 */
export interface DistributionConfigurationSummary {
  __type?: "DistributionConfigurationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which the distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the distribution configuration was updated.</p>
   */
  dateUpdated?: string;

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
  export function isa(o: any): o is DistributionConfigurationSummary {
    return __isa(o, "DistributionConfigurationSummary");
  }
}

/**
 * <p>EBS specific block device mapping specifications.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  __type?: "EbsInstanceBlockDeviceSpecification";
  /**
   * <p>Use to configure delete on termination of the associated device.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * <p>Use to configure device encryption.</p>
   */
  encrypted?: boolean;

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
  export function isa(o: any): o is EbsInstanceBlockDeviceSpecification {
    return __isa(o, "EbsInstanceBlockDeviceSpecification");
  }
}

export enum EbsVolumeType {
  gp2 = "gp2",
  io1 = "io1",
  sc1 = "sc1",
  st1 = "st1",
  standard = "standard"
}

/**
 * <p> </p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p> </p>
   */
  name?: string;

  /**
   * <p> </p>
   */
  values?: Array<string>;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
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
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

export interface GetComponentPolicyRequest {
  __type?: "GetComponentPolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the component whose policy you wish to retrieve. </p>
   */
  componentArn: string | undefined;
}

export namespace GetComponentPolicyRequest {
  export function isa(o: any): o is GetComponentPolicyRequest {
    return __isa(o, "GetComponentPolicyRequest");
  }
}

export interface GetComponentPolicyResponse {
  __type?: "GetComponentPolicyResponse";
  /**
   * <p> The component policy. </p>
   */
  policy?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetComponentPolicyResponse {
  export function isa(o: any): o is GetComponentPolicyResponse {
    return __isa(o, "GetComponentPolicyResponse");
  }
}

export interface GetComponentRequest {
  __type?: "GetComponentRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the component that you wish to retrieve. </p>
   */
  componentBuildVersionArn: string | undefined;
}

export namespace GetComponentRequest {
  export function isa(o: any): o is GetComponentRequest {
    return __isa(o, "GetComponentRequest");
  }
}

export interface GetComponentResponse {
  __type?: "GetComponentResponse";
  /**
   * <p> The component object associated with the specified ARN. </p>
   */
  component?: Component;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetComponentResponse {
  export function isa(o: any): o is GetComponentResponse {
    return __isa(o, "GetComponentResponse");
  }
}

export interface GetDistributionConfigurationRequest {
  __type?: "GetDistributionConfigurationRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that you wish to retrieve. </p>
   */
  distributionConfigurationArn: string | undefined;
}

export namespace GetDistributionConfigurationRequest {
  export function isa(o: any): o is GetDistributionConfigurationRequest {
    return __isa(o, "GetDistributionConfigurationRequest");
  }
}

export interface GetDistributionConfigurationResponse {
  __type?: "GetDistributionConfigurationResponse";
  /**
   * <p> The distribution configuration object. </p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetDistributionConfigurationResponse {
  export function isa(o: any): o is GetDistributionConfigurationResponse {
    return __isa(o, "GetDistributionConfigurationResponse");
  }
}

export interface GetImagePipelineRequest {
  __type?: "GetImagePipelineRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that you wish to retrieve. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace GetImagePipelineRequest {
  export function isa(o: any): o is GetImagePipelineRequest {
    return __isa(o, "GetImagePipelineRequest");
  }
}

export interface GetImagePipelineResponse {
  __type?: "GetImagePipelineResponse";
  /**
   * <p> The image pipeline object. </p>
   */
  imagePipeline?: ImagePipeline;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImagePipelineResponse {
  export function isa(o: any): o is GetImagePipelineResponse {
    return __isa(o, "GetImagePipelineResponse");
  }
}

export interface GetImagePolicyRequest {
  __type?: "GetImagePolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image whose policy you wish to retrieve. </p>
   */
  imageArn: string | undefined;
}

export namespace GetImagePolicyRequest {
  export function isa(o: any): o is GetImagePolicyRequest {
    return __isa(o, "GetImagePolicyRequest");
  }
}

export interface GetImagePolicyResponse {
  __type?: "GetImagePolicyResponse";
  /**
   * <p> The image policy object. </p>
   */
  policy?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImagePolicyResponse {
  export function isa(o: any): o is GetImagePolicyResponse {
    return __isa(o, "GetImagePolicyResponse");
  }
}

export interface GetImageRecipePolicyRequest {
  __type?: "GetImageRecipePolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe whose policy you wish to retrieve. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipePolicyRequest {
  export function isa(o: any): o is GetImageRecipePolicyRequest {
    return __isa(o, "GetImageRecipePolicyRequest");
  }
}

export interface GetImageRecipePolicyResponse {
  __type?: "GetImageRecipePolicyResponse";
  /**
   * <p> The image recipe policy object. </p>
   */
  policy?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImageRecipePolicyResponse {
  export function isa(o: any): o is GetImageRecipePolicyResponse {
    return __isa(o, "GetImageRecipePolicyResponse");
  }
}

export interface GetImageRecipeRequest {
  __type?: "GetImageRecipeRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that you wish to retrieve. </p>
   */
  imageRecipeArn: string | undefined;
}

export namespace GetImageRecipeRequest {
  export function isa(o: any): o is GetImageRecipeRequest {
    return __isa(o, "GetImageRecipeRequest");
  }
}

export interface GetImageRecipeResponse {
  __type?: "GetImageRecipeResponse";
  /**
   * <p> The image recipe object. </p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImageRecipeResponse {
  export function isa(o: any): o is GetImageRecipeResponse {
    return __isa(o, "GetImageRecipeResponse");
  }
}

export interface GetImageRequest {
  __type?: "GetImageRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image that you wish to retrieve. </p>
   */
  imageBuildVersionArn: string | undefined;
}

export namespace GetImageRequest {
  export function isa(o: any): o is GetImageRequest {
    return __isa(o, "GetImageRequest");
  }
}

export interface GetImageResponse {
  __type?: "GetImageResponse";
  /**
   * <p> The image object. </p>
   */
  image?: Image;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetImageResponse {
  export function isa(o: any): o is GetImageResponse {
    return __isa(o, "GetImageResponse");
  }
}

/**
 * <p> GetInfrastructureConfiguration request object. </p>
 */
export interface GetInfrastructureConfigurationRequest {
  __type?: "GetInfrastructureConfigurationRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that you wish to retrieve. </p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export namespace GetInfrastructureConfigurationRequest {
  export function isa(o: any): o is GetInfrastructureConfigurationRequest {
    return __isa(o, "GetInfrastructureConfigurationRequest");
  }
}

/**
 * <p> GetInfrastructureConfiguration response object. </p>
 */
export interface GetInfrastructureConfigurationResponse {
  __type?: "GetInfrastructureConfigurationResponse";
  /**
   * <p> The infrastructure configuration object. </p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace GetInfrastructureConfigurationResponse {
  export function isa(o: any): o is GetInfrastructureConfigurationResponse {
    return __isa(o, "GetInfrastructureConfigurationResponse");
  }
}

/**
 * <p>You have specified an client token for an operation using parameter values that differ from a previous request that used the same client token.</p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  export function isa(o: any): o is IdempotentParameterMismatchException {
    return __isa(o, "IdempotentParameterMismatchException");
  }
}

/**
 * <p>An image build version.</p>
 */
export interface Image {
  __type?: "Image";
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The distribution configuration used when creating this image.</p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * <p>The image recipe used when creating the image.</p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * <p>The image tests configuration used when creating this image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The infrastructure used when creating this image.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>The output resources produced when creating this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
   */
  sourcePipelineArn?: string;

  /**
   * <p>The name of the image pipeline that created this image.</p>
   */
  sourcePipelineName?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>The tags of the image.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The semantic version of the image.</p>
   */
  version?: string;
}

export namespace Image {
  export function isa(o: any): o is Image {
    return __isa(o, "Image");
  }
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
   * <p>The date on which this image pipeline was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which this image pipeline was last run.</p>
   */
  dateLastRun?: string;

  /**
   * <p>The date on which this image pipeline will next be run.</p>
   */
  dateNextRun?: string;

  /**
   * <p>The date on which this image pipeline was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The image tests configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastruction configuration associated with this image pipeline.</p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p>The name of the image pipeline.</p>
   */
  name?: string;

  /**
   * <p>The platform of the image pipeline.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * <p>The tags of this image pipeline.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImagePipeline {
  export function isa(o: any): o is ImagePipeline {
    return __isa(o, "ImagePipeline");
  }
}

/**
 * <p>An image recipe.</p>
 */
export interface ImageRecipe {
  __type?: "ImageRecipe";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>The block device mappings to apply when creating images from this recipe.</p>
   */
  blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;

  /**
   * <p>The components of the image recipe.</p>
   */
  components?: Array<ComponentConfiguration>;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The description of the image recipe.</p>
   */
  description?: string;

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The parent image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the image recipe.</p>
   */
  version?: string;
}

export namespace ImageRecipe {
  export function isa(o: any): o is ImageRecipe {
    return __isa(o, "ImageRecipe");
  }
}

/**
 * <p>A summary of an image recipe.</p>
 */
export interface ImageRecipeSummary {
  __type?: "ImageRecipeSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The parent image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImageRecipeSummary {
  export function isa(o: any): o is ImageRecipeSummary {
    return __isa(o, "ImageRecipeSummary");
  }
}

/**
 * <p> Image state shows the images status and the reason for that status. </p>
 */
export interface ImageState {
  __type?: "ImageState";
  /**
   * <p> The reason for the image's status. </p>
   */
  reason?: string;

  /**
   * <p> The status of the image. </p>
   */
  status?: ImageStatus | string;
}

export namespace ImageState {
  export function isa(o: any): o is ImageState {
    return __isa(o, "ImageState");
  }
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
  TESTING = "TESTING"
}

/**
 * <p>An image summary.</p>
 */
export interface ImageSummary {
  __type?: "ImageSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;

  /**
   * <p>The date on which this image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>The output resources produced when creating this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The owner of the image.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the image.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>The tags of the image.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the image.</p>
   */
  version?: string;
}

export namespace ImageSummary {
  export function isa(o: any): o is ImageSummary {
    return __isa(o, "ImageSummary");
  }
}

/**
 * <p>Image tests configuration.</p>
 */
export interface ImageTestsConfiguration {
  __type?: "ImageTestsConfiguration";
  /**
   * <p>Defines if tests should be executed when building this image.</p>
   */
  imageTestsEnabled?: boolean;

  /**
   * <p>The maximum time in minutes that tests are permitted to run for.</p>
   */
  timeoutMinutes?: number;
}

export namespace ImageTestsConfiguration {
  export function isa(o: any): o is ImageTestsConfiguration {
    return __isa(o, "ImageTestsConfiguration");
  }
}

/**
 * <p>An image semantic version.</p>
 */
export interface ImageVersion {
  __type?: "ImageVersion";
  /**
   * <p>The Amazon Resource Name (ARN) of the image semantic verion.</p>
   */
  arn?: string;

  /**
   * <p>The date at which this image semantic version was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The name of the image semantic version.</p>
   */
  name?: string;

  /**
   * <p>The owner of the image semantic version.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the image semantic version.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The semantic version of the image semantic version.</p>
   */
  version?: string;
}

export namespace ImageVersion {
  export function isa(o: any): o is ImageVersion {
    return __isa(o, "ImageVersion");
  }
}

export interface ImportComponentRequest {
  __type?: "ImportComponentRequest";
  /**
   * <p> The change description of the component. Describes what change has been made in this version. In other words what makes this version different from other versions of this component. </p>
   */
  changeDescription?: string;

  /**
   * <p> The idempotency token of the component. </p>
   */
  clientToken?: string;

  /**
   * <p> The data of the component. </p>
   */
  data?: string;

  /**
   * <p> The description of the component. Describes the contents of the component. </p>
   */
  description?: string;

  /**
   * <p> The format of the resource that you wish to import as a component. </p>
   */
  format: ComponentFormat | string | undefined;

  /**
   * <p> The ID of the KMS key that should be used to encrypt this component. </p>
   */
  kmsKeyId?: string;

  /**
   * <p> The name of the component. </p>
   */
  name: string | undefined;

  /**
   * <p> The platform of the component. </p>
   */
  platform: Platform | string | undefined;

  /**
   * <p> The semantic version of the component. This version to follow the semantic version syntax. i.e. major.minor.patch. This could be versioned like software 2.0.1 or date like 2019.12.01. </p>
   */
  semanticVersion: string | undefined;

  /**
   * <p> The tags of the component. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p> The type of the component denotes whether the component is used to build the image or only to test it. </p>
   */
  type: ComponentType | string | undefined;

  /**
   * <p> The uri of the component. </p>
   */
  uri?: string;
}

export namespace ImportComponentRequest {
  export function isa(o: any): o is ImportComponentRequest {
    return __isa(o, "ImportComponentRequest");
  }
}

export interface ImportComponentResponse {
  __type?: "ImportComponentResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the imported component. </p>
   */
  componentBuildVersionArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ImportComponentResponse {
  export function isa(o: any): o is ImportComponentResponse {
    return __isa(o, "ImportComponentResponse");
  }
}

/**
 * <p>Details of the infrastructure configuration.</p>
 */
export interface InfrastructureConfiguration {
  __type?: "InfrastructureConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastruction configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The description of the infrastruction configuration.</p>
   */
  description?: string;

  /**
   * <p>The instance profile of the infrastruction configuration.</p>
   */
  instanceProfileName?: string;

  /**
   * <p>The instance types of the infrastruction configuration.</p>
   */
  instanceTypes?: Array<string>;

  /**
   * <p>The EC2 key pair of the infrastruction configuration.</p>
   */
  keyPair?: string;

  /**
   * <p>The logging configuration of the infrastruction configuration.</p>
   */
  logging?: Logging;

  /**
   * <p>The name of the infrastruction configuration.</p>
   */
  name?: string;

  /**
   * <p>The security group IDs of the infrastruction configuration.</p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p>The SNS Topic Amazon Resource Name (ARN) of the infrastruction configuration.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The subnet ID of the infrastruction configuration.</p>
   */
  subnetId?: string;

  /**
   * <p>The tags of the infrastruction configuration.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The terminate instance on failure configuration of the infrastruction configuration.</p>
   */
  terminateInstanceOnFailure?: boolean;
}

export namespace InfrastructureConfiguration {
  export function isa(o: any): o is InfrastructureConfiguration {
    return __isa(o, "InfrastructureConfiguration");
  }
}

/**
 * <p>The infrastructure used when building EC2 AMIs.</p>
 */
export interface InfrastructureConfigurationSummary {
  __type?: "InfrastructureConfigurationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: { [key: string]: string };
}

export namespace InfrastructureConfigurationSummary {
  export function isa(o: any): o is InfrastructureConfigurationSummary {
    return __isa(o, "InfrastructureConfigurationSummary");
  }
}

/**
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 */
export interface InstanceBlockDeviceMapping {
  __type?: "InstanceBlockDeviceMapping";
  /**
   * <p>The device to which these mappings apply.</p>
   */
  deviceName?: string;

  /**
   * <p>Use to manage EBS specific configuration for this mapping.</p>
   */
  ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * <p>Use to remove a mapping from the parent image.</p>
   */
  noDevice?: string;

  /**
   * <p>Use to manage instance ephemeral devices.</p>
   */
  virtualName?: string;
}

export namespace InstanceBlockDeviceMapping {
  export function isa(o: any): o is InstanceBlockDeviceMapping {
    return __isa(o, "InstanceBlockDeviceMapping");
  }
}

/**
 * <p>You have provided an invalid pagination token in your request.</p>
 */
export interface InvalidPaginationTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationTokenException {
  export function isa(o: any): o is InvalidPaginationTokenException {
    return __isa(o, "InvalidPaginationTokenException");
  }
}

/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message for details.</p>
 */
export interface InvalidParameterCombinationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterCombinationException {
  export function isa(o: any): o is InvalidParameterCombinationException {
    return __isa(o, "InvalidParameterCombinationException");
  }
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The value that you provided for the specified parameter is invalid.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  export function isa(o: any): o is InvalidParameterValueException {
    return __isa(o, "InvalidParameterValueException");
  }
}

/**
 * <p>You have made a request for an action that is not supported by the service.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>Your version number is out of bounds or does not follow the required syntax.</p>
 */
export interface InvalidVersionNumberException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidVersionNumberException";
  $fault: "client";
  message?: string;
}

export namespace InvalidVersionNumberException {
  export function isa(o: any): o is InvalidVersionNumberException {
    return __isa(o, "InvalidVersionNumberException");
  }
}

/**
 * <p> </p>
 */
export interface LaunchPermissionConfiguration {
  __type?: "LaunchPermissionConfiguration";
  /**
   * <p> </p>
   */
  userGroups?: Array<string>;

  /**
   * <p> </p>
   */
  userIds?: Array<string>;
}

export namespace LaunchPermissionConfiguration {
  export function isa(o: any): o is LaunchPermissionConfiguration {
    return __isa(o, "LaunchPermissionConfiguration");
  }
}

export interface ListComponentBuildVersionsRequest {
  __type?: "ListComponentBuildVersionsRequest";
  /**
   * <p> The component version arn whose versions you wish to list. </p>
   */
  componentVersionArn: string | undefined;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListComponentBuildVersionsRequest {
  export function isa(o: any): o is ListComponentBuildVersionsRequest {
    return __isa(o, "ListComponentBuildVersionsRequest");
  }
}

export interface ListComponentBuildVersionsResponse {
  __type?: "ListComponentBuildVersionsResponse";
  /**
   * <p> The list of component summaries for the specified semantic version. </p>
   */
  componentSummaryList?: Array<ComponentSummary>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListComponentBuildVersionsResponse {
  export function isa(o: any): o is ListComponentBuildVersionsResponse {
    return __isa(o, "ListComponentBuildVersionsResponse");
  }
}

export interface ListComponentsRequest {
  __type?: "ListComponentsRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p> The owner defines whose components you wish to list. By default this request will only show components owned by your account. You may use this field to specify if you wish to view components owned by yourself, Amazon, or those components that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;
}

export namespace ListComponentsRequest {
  export function isa(o: any): o is ListComponentsRequest {
    return __isa(o, "ListComponentsRequest");
  }
}

export interface ListComponentsResponse {
  __type?: "ListComponentsResponse";
  /**
   * <p> The list of component semantic versions. </p>
   */
  componentVersionList?: Array<ComponentVersion>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListComponentsResponse {
  export function isa(o: any): o is ListComponentsResponse {
    return __isa(o, "ListComponentsResponse");
  }
}

export interface ListDistributionConfigurationsRequest {
  __type?: "ListDistributionConfigurationsRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListDistributionConfigurationsRequest {
  export function isa(o: any): o is ListDistributionConfigurationsRequest {
    return __isa(o, "ListDistributionConfigurationsRequest");
  }
}

export interface ListDistributionConfigurationsResponse {
  __type?: "ListDistributionConfigurationsResponse";
  /**
   * <p> The list of distributions. </p>
   */
  distributionConfigurationSummaryList?: Array<
    DistributionConfigurationSummary
  >;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListDistributionConfigurationsResponse {
  export function isa(o: any): o is ListDistributionConfigurationsResponse {
    return __isa(o, "ListDistributionConfigurationsResponse");
  }
}

export interface ListImageBuildVersionsRequest {
  __type?: "ListImageBuildVersionsRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The Amazon Resource Name (ARN) of the image whose build versions you wish to retrieve. </p>
   */
  imageVersionArn: string | undefined;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListImageBuildVersionsRequest {
  export function isa(o: any): o is ListImageBuildVersionsRequest {
    return __isa(o, "ListImageBuildVersionsRequest");
  }
}

export interface ListImageBuildVersionsResponse {
  __type?: "ListImageBuildVersionsResponse";
  /**
   * <p> The list of image build versions. </p>
   */
  imageSummaryList?: Array<ImageSummary>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImageBuildVersionsResponse {
  export function isa(o: any): o is ListImageBuildVersionsResponse {
    return __isa(o, "ListImageBuildVersionsResponse");
  }
}

export interface ListImagePipelineImagesRequest {
  __type?: "ListImagePipelineImagesRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline whose images you wish to view. </p>
   */
  imagePipelineArn?: string;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListImagePipelineImagesRequest {
  export function isa(o: any): o is ListImagePipelineImagesRequest {
    return __isa(o, "ListImagePipelineImagesRequest");
  }
}

export interface ListImagePipelineImagesResponse {
  __type?: "ListImagePipelineImagesResponse";
  /**
   * <p> The list of images built by this pipeline. </p>
   */
  imageSummaryList?: Array<ImageSummary>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImagePipelineImagesResponse {
  export function isa(o: any): o is ListImagePipelineImagesResponse {
    return __isa(o, "ListImagePipelineImagesResponse");
  }
}

export interface ListImagePipelinesRequest {
  __type?: "ListImagePipelinesRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListImagePipelinesRequest {
  export function isa(o: any): o is ListImagePipelinesRequest {
    return __isa(o, "ListImagePipelinesRequest");
  }
}

export interface ListImagePipelinesResponse {
  __type?: "ListImagePipelinesResponse";
  /**
   * <p> The list of image pipelines. </p>
   */
  imagePipelineList?: Array<ImagePipeline>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImagePipelinesResponse {
  export function isa(o: any): o is ListImagePipelinesResponse {
    return __isa(o, "ListImagePipelinesResponse");
  }
}

export interface ListImageRecipesRequest {
  __type?: "ListImageRecipesRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p> The owner defines whose image recipes you wish to list. By default this request will only show image recipes owned by your account. You may use this field to specify if you wish to view image recipes owned by yourself, Amazon, or those image recipes that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;
}

export namespace ListImageRecipesRequest {
  export function isa(o: any): o is ListImageRecipesRequest {
    return __isa(o, "ListImageRecipesRequest");
  }
}

export interface ListImageRecipesResponse {
  __type?: "ListImageRecipesResponse";
  /**
   * <p> The list of image pipelines. </p>
   */
  imageRecipeSummaryList?: Array<ImageRecipeSummary>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImageRecipesResponse {
  export function isa(o: any): o is ListImageRecipesResponse {
    return __isa(o, "ListImageRecipesResponse");
  }
}

export interface ListImagesRequest {
  __type?: "ListImagesRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;

  /**
   * <p> The owner defines whose images you wish to list. By default this request will only show images owned by your account. You may use this field to specify if you wish to view images owned by yourself, Amazon, or those images that have been shared with you by other customers. </p>
   */
  owner?: Ownership | string;
}

export namespace ListImagesRequest {
  export function isa(o: any): o is ListImagesRequest {
    return __isa(o, "ListImagesRequest");
  }
}

export interface ListImagesResponse {
  __type?: "ListImagesResponse";
  /**
   * <p> The list of image semantic versions. </p>
   */
  imageVersionList?: Array<ImageVersion>;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object. </p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListImagesResponse {
  export function isa(o: any): o is ListImagesResponse {
    return __isa(o, "ListImagesResponse");
  }
}

export interface ListInfrastructureConfigurationsRequest {
  __type?: "ListInfrastructureConfigurationsRequest";
  /**
   * <p> </p>
   */
  filters?: Array<Filter>;

  /**
   * <p> The maximum items to return in a request. </p>
   */
  maxResults?: number;

  /**
   * <p> A token to specify where to start paginating. This is the NextToken from a previously truncated response. </p>
   */
  nextToken?: string;
}

export namespace ListInfrastructureConfigurationsRequest {
  export function isa(o: any): o is ListInfrastructureConfigurationsRequest {
    return __isa(o, "ListInfrastructureConfigurationsRequest");
  }
}

export interface ListInfrastructureConfigurationsResponse {
  __type?: "ListInfrastructureConfigurationsResponse";
  /**
   * <p> The list of infrastructure configurations. </p>
   */
  infrastructureConfigurationSummaryList?: Array<
    InfrastructureConfigurationSummary
  >;

  /**
   * <p> The next token used for paginated responses. When this is not empty then there are additional elements that the service that not include in this request. Use this token with the next request to retrieve additional object.</p>
   */
  nextToken?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace ListInfrastructureConfigurationsResponse {
  export function isa(o: any): o is ListInfrastructureConfigurationsResponse {
    return __isa(o, "ListInfrastructureConfigurationsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the resource whose tags you wish to retrieve. </p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p> The tags for the specified resource. </p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p> Logging configuration defines where Image Builder uploads your logs to.</p>
 */
export interface Logging {
  __type?: "Logging";
  /**
   * <p>The S3 logging configuration.</p>
   */
  s3Logs?: S3Logs;
}

export namespace Logging {
  export function isa(o: any): o is Logging {
    return __isa(o, "Logging");
  }
}

/**
 * <p> The resources produced by this image. </p>
 */
export interface OutputResources {
  __type?: "OutputResources";
  /**
   * <p> The EC2 AMIs created by this image. </p>
   */
  amis?: Array<Ami>;
}

export namespace OutputResources {
  export function isa(o: any): o is OutputResources {
    return __isa(o, "OutputResources");
  }
}

export enum Ownership {
  Amazon = "Amazon",
  Self = "Self",
  Shared = "Shared"
}

export enum PipelineExecutionStartCondition {
  EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
  EXPRESSION_MATCH_ONLY = "EXPRESSION_MATCH_ONLY"
}

export enum PipelineStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Platform {
  Linux = "Linux",
  Windows = "Windows"
}

export interface PutComponentPolicyRequest {
  __type?: "PutComponentPolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the component that this policy should be applied to. </p>
   */
  componentArn: string | undefined;

  /**
   * <p> The policy to apply. </p>
   */
  policy: string | undefined;
}

export namespace PutComponentPolicyRequest {
  export function isa(o: any): o is PutComponentPolicyRequest {
    return __isa(o, "PutComponentPolicyRequest");
  }
}

export interface PutComponentPolicyResponse {
  __type?: "PutComponentPolicyResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the component that this policy was applied to. </p>
   */
  componentArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace PutComponentPolicyResponse {
  export function isa(o: any): o is PutComponentPolicyResponse {
    return __isa(o, "PutComponentPolicyResponse");
  }
}

export interface PutImagePolicyRequest {
  __type?: "PutImagePolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image that this policy should be applied to. </p>
   */
  imageArn: string | undefined;

  /**
   * <p> The policy to apply. </p>
   */
  policy: string | undefined;
}

export namespace PutImagePolicyRequest {
  export function isa(o: any): o is PutImagePolicyRequest {
    return __isa(o, "PutImagePolicyRequest");
  }
}

export interface PutImagePolicyResponse {
  __type?: "PutImagePolicyResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the image that this policy was applied to. </p>
   */
  imageArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace PutImagePolicyResponse {
  export function isa(o: any): o is PutImagePolicyResponse {
    return __isa(o, "PutImagePolicyResponse");
  }
}

export interface PutImageRecipePolicyRequest {
  __type?: "PutImageRecipePolicyRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to. </p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p> The policy to apply. </p>
   */
  policy: string | undefined;
}

export namespace PutImageRecipePolicyRequest {
  export function isa(o: any): o is PutImageRecipePolicyRequest {
    return __isa(o, "PutImageRecipePolicyRequest");
  }
}

export interface PutImageRecipePolicyResponse {
  __type?: "PutImageRecipePolicyResponse";
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that this policy was applied to. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace PutImageRecipePolicyResponse {
  export function isa(o: any): o is PutImageRecipePolicyResponse {
    return __isa(o, "PutImageRecipePolicyResponse");
  }
}

/**
 * <p>The resource that you are trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that is prohibitting this action. See the error message for more details.</p>
 */
export interface ResourceDependencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDependencyException";
  $fault: "client";
  message?: string;
}

export namespace ResourceDependencyException {
  export function isa(o: any): o is ResourceDependencyException {
    return __isa(o, "ResourceDependencyException");
  }
}

/**
 * <p>The resource that you are trying to operate on is currently in use. Review the message details, and retry later.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>At least one of the resources referenced by your request does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>S3 Logging configuration.</p>
 */
export interface S3Logs {
  __type?: "S3Logs";
  /**
   * <p>The S3 bucket in which to store the logs.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The S3 path in which to store the logs.</p>
   */
  s3KeyPrefix?: string;
}

export namespace S3Logs {
  export function isa(o: any): o is S3Logs {
    return __isa(o, "S3Logs");
  }
}

/**
 * <p> A schedule configures how often and when a pipeline will automatically create a new image. </p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p> The condition configures when the pipeline should trigger a new image build. </p>
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;

  /**
   * <p> The expression determines how often a pipeline starts the creation of new images. </p>
   */
  scheduleExpression?: string;
}

export namespace Schedule {
  export function isa(o: any): o is Schedule {
    return __isa(o, "Schedule");
  }
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
  export function isa(o: any): o is ServiceException {
    return __isa(o, "ServiceException");
  }
}

/**
 * <p>The service is unable to process your request at this time.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

export interface StartImagePipelineExecutionRequest {
  __type?: "StartImagePipelineExecutionRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that you wish to manually invoke. </p>
   */
  imagePipelineArn: string | undefined;
}

export namespace StartImagePipelineExecutionRequest {
  export function isa(o: any): o is StartImagePipelineExecutionRequest {
    return __isa(o, "StartImagePipelineExecutionRequest");
  }
}

export interface StartImagePipelineExecutionResponse {
  __type?: "StartImagePipelineExecutionResponse";
  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image that was created by this request.</p>
   */
  imageBuildVersionArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace StartImagePipelineExecutionResponse {
  export function isa(o: any): o is StartImagePipelineExecutionResponse {
    return __isa(o, "StartImagePipelineExecutionResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you wish to tag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tags to apply to the resource. </p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you wish to untag. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> The tag keys to remove from the resource. </p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateDistributionConfigurationRequest {
  __type?: "UpdateDistributionConfigurationRequest";
  /**
   * <p> The idempotency token of the distribution configuration. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the distribution configuration. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that you wish to update. </p>
   */
  distributionConfigurationArn: string | undefined;

  /**
   * <p> The distributions of the distribution configuration. </p>
   */
  distributions?: Array<Distribution>;
}

export namespace UpdateDistributionConfigurationRequest {
  export function isa(o: any): o is UpdateDistributionConfigurationRequest {
    return __isa(o, "UpdateDistributionConfigurationRequest");
  }
}

export interface UpdateDistributionConfigurationResponse {
  __type?: "UpdateDistributionConfigurationResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that was updated by this request. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace UpdateDistributionConfigurationResponse {
  export function isa(o: any): o is UpdateDistributionConfigurationResponse {
    return __isa(o, "UpdateDistributionConfigurationResponse");
  }
}

export interface UpdateImagePipelineRequest {
  __type?: "UpdateImagePipelineRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the image pipeline. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline. </p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that you wish to update. </p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline. </p>
   */
  imageRecipeArn?: string;

  /**
   * <p> The image test configuration of the image pipeline. </p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline. </p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p> The schedule of the image pipeline. </p>
   */
  schedule?: Schedule;

  /**
   * <p> The status of the image pipeline. </p>
   */
  status?: PipelineStatus | string;
}

export namespace UpdateImagePipelineRequest {
  export function isa(o: any): o is UpdateImagePipelineRequest {
    return __isa(o, "UpdateImagePipelineRequest");
  }
}

export interface UpdateImagePipelineResponse {
  __type?: "UpdateImagePipelineResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that was updated by this request. </p>
   */
  imagePipelineArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace UpdateImagePipelineResponse {
  export function isa(o: any): o is UpdateImagePipelineResponse {
    return __isa(o, "UpdateImagePipelineResponse");
  }
}

export interface UpdateInfrastructureConfigurationRequest {
  __type?: "UpdateInfrastructureConfigurationRequest";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The description of the infrastructure configuration. </p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that you wish to update. </p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The instance profile to associate with the instance used to customize your EC2 AMI. </p>
   */
  instanceProfileName?: string;

  /**
   * <p> The instance types of the infrastructure configuration. You may specify one or more instance types to use for this build, the service will pick one of these instance types based on availability. </p>
   */
  instanceTypes?: Array<string>;

  /**
   * <p> The key pair of the infrastructure configuration. This can be used to log onto and debug the instance used to create your image. </p>
   */
  keyPair?: string;

  /**
   * <p> The logging configuration of the infrastructure configuration. </p>
   */
  logging?: Logging;

  /**
   * <p> The security group IDs to associate with the instance used to customize your EC2 AMI. </p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p> The SNS topic on which to send image build events. </p>
   */
  snsTopicArn?: string;

  /**
   * <p> The subnet ID to place the instance used to customize your EC2 AMI in. </p>
   */
  subnetId?: string;

  /**
   * <p> The terminate instance on failure setting of the infrastructure configuration. Set to false if you wish for Image Builder to retain the instance used to configure your AMI in the event that the build or test phase of your workflow failed. </p>
   */
  terminateInstanceOnFailure?: boolean;
}

export namespace UpdateInfrastructureConfigurationRequest {
  export function isa(o: any): o is UpdateInfrastructureConfigurationRequest {
    return __isa(o, "UpdateInfrastructureConfigurationRequest");
  }
}

export interface UpdateInfrastructureConfigurationResponse {
  __type?: "UpdateInfrastructureConfigurationResponse";
  /**
   * <p> The idempotency token used to make this request idempotent. </p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by this request. </p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p> The request ID that uniquely identifies this request. </p>
   */
  requestId?: string;
}

export namespace UpdateInfrastructureConfigurationResponse {
  export function isa(o: any): o is UpdateInfrastructureConfigurationResponse {
    return __isa(o, "UpdateInfrastructureConfigurationResponse");
  }
}
