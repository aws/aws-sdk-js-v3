import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface Application {
  __type?: "Application";
  /**
   * <p>The description of the application.</p>
   */
  Description?: string;

  /**
   * <p>The application ID.</p>
   */
  Id?: string;

  /**
   * <p>The application name.</p>
   */
  Name?: string;
}

export namespace Application {
  export function isa(o: any): o is Application {
    return __isa(o, "Application");
  }
}

export interface Applications {
  __type?: "Applications";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Application>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace Applications {
  export function isa(o: any): o is Applications {
    return __isa(o, "Applications");
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

export interface Configuration {
  __type?: "Configuration";
  /**
   * <p>The configuration version.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content?: Uint8Array;

  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}

export namespace Configuration {
  export function isa(o: any): o is Configuration {
    return __isa(o, "Configuration");
  }
}

export interface ConfigurationProfile {
  __type?: "ConfigurationProfile";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The configuration profile description.</p>
   */
  Description?: string;

  /**
   * <p>The configuration profile ID.</p>
   */
  Id?: string;

  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Array<Validator>;
}

export namespace ConfigurationProfile {
  export function isa(o: any): o is ConfigurationProfile {
    return __isa(o, "ConfigurationProfile");
  }
}

/**
 * <p>A summary of a configuration profile.</p>
 */
export interface ConfigurationProfileSummary {
  __type?: "ConfigurationProfileSummary";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the configuration profile.</p>
   */
  Id?: string;

  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>The types of validators in the configuration profile.</p>
   */
  ValidatorTypes?: Array<ValidatorType | string>;
}

export namespace ConfigurationProfileSummary {
  export function isa(o: any): o is ConfigurationProfileSummary {
    return __isa(o, "ConfigurationProfileSummary");
  }
}

export interface ConfigurationProfiles {
  __type?: "ConfigurationProfiles";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<ConfigurationProfileSummary>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace ConfigurationProfiles {
  export function isa(o: any): o is ConfigurationProfiles {
    return __isa(o, "ConfigurationProfiles");
  }
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
  /**
   * <p>A description of the application.</p>
   */
  Description?: string;

  /**
   * <p>A name for the application.</p>
   */
  Name: string | undefined;

  /**
   * <p>Metadata to assign to the application. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateApplicationRequest {
  export function isa(o: any): o is CreateApplicationRequest {
    return __isa(o, "CreateApplicationRequest");
  }
}

export interface CreateConfigurationProfileRequest {
  __type?: "CreateConfigurationProfileRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * <p>A URI to locate the configuration. You can specify either a Systems Manager (SSM) document or an SSM Parameter Store parameter. For an SSM document, specify either the document name in the format <code>ssm-document://<Document name></code> or the Amazon Resource Name (ARN). For a parameter, specify either the parameter name in the format <code>ssm-parameter://<Parameter name></code> or the ARN.</p>
   */
  LocationUri: string | undefined;

  /**
   * <p>A name for the configuration profile.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn: string | undefined;

  /**
   * <p>Metadata to assign to the configuration profile. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Array<Validator>;
}

export namespace CreateConfigurationProfileRequest {
  export function isa(o: any): o is CreateConfigurationProfileRequest {
    return __isa(o, "CreateConfigurationProfileRequest");
  }
}

export interface CreateDeploymentStrategyRequest {
  __type?: "CreateDeploymentStrategyRequest";
  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes: number | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor: number | undefined;

  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>A name for the deployment strategy.</p>
   */
  Name: string | undefined;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo: ReplicateTo | string | undefined;

  /**
   * <p>Metadata to assign to the deployment strategy. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDeploymentStrategyRequest {
  export function isa(o: any): o is CreateDeploymentStrategyRequest {
    return __isa(o, "CreateDeploymentStrategyRequest");
  }
}

export interface CreateEnvironmentRequest {
  __type?: "CreateEnvironmentRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Array<Monitor>;

  /**
   * <p>A name for the environment.</p>
   */
  Name: string | undefined;

  /**
   * <p>Metadata to assign to the environment. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateEnvironmentRequest {
  export function isa(o: any): o is CreateEnvironmentRequest {
    return __isa(o, "CreateEnvironmentRequest");
  }
}

export interface DeleteApplicationRequest {
  __type?: "DeleteApplicationRequest";
  /**
   * <p>The ID of the application to delete.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApplicationRequest {
  export function isa(o: any): o is DeleteApplicationRequest {
    return __isa(o, "DeleteApplicationRequest");
  }
}

export interface DeleteConfigurationProfileRequest {
  __type?: "DeleteConfigurationProfileRequest";
  /**
   * <p>The application ID that includes the configuration profile you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile you want to delete.</p>
   */
  ConfigurationProfileId: string | undefined;
}

export namespace DeleteConfigurationProfileRequest {
  export function isa(o: any): o is DeleteConfigurationProfileRequest {
    return __isa(o, "DeleteConfigurationProfileRequest");
  }
}

export interface DeleteDeploymentStrategyRequest {
  __type?: "DeleteDeploymentStrategyRequest";
  /**
   * <p>The ID of the deployment strategy you want to delete.</p>
   */
  DeploymentStrategyId: string | undefined;
}

export namespace DeleteDeploymentStrategyRequest {
  export function isa(o: any): o is DeleteDeploymentStrategyRequest {
    return __isa(o, "DeleteDeploymentStrategyRequest");
  }
}

export interface DeleteEnvironmentRequest {
  __type?: "DeleteEnvironmentRequest";
  /**
   * <p>The application ID that includes the environment you want to delete.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment you want to delete.</p>
   */
  EnvironmentId: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  export function isa(o: any): o is DeleteEnvironmentRequest {
    return __isa(o, "DeleteEnvironmentRequest");
  }
}

export interface Deployment {
  __type?: "Deployment";
  /**
   * <p>The ID of the application that was deployed.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The time the deployment completed. </p>
   */
  CompletedAt?: Date;

  /**
   * <p>Information about the source location of the configuration.</p>
   */
  ConfigurationLocationUri?: string;

  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>The ID of the configuration profile that was deployed.</p>
   */
  ConfigurationProfileId?: string;

  /**
   * <p>The configuration version that was deployed.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * <p>The ID of the deployment strategy that was deployed.</p>
   */
  DeploymentStrategyId?: string;

  /**
   * <p>The description of the deployment.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the environment that was deployed.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The amount of time AppConfig monitored for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>The time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;
}

export namespace Deployment {
  export function isa(o: any): o is Deployment {
    return __isa(o, "Deployment");
  }
}

export enum DeploymentState {
  BAKING = "BAKING",
  COMPLETE = "COMPLETE",
  DEPLOYING = "DEPLOYING",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
  VALIDATING = "VALIDATING"
}

export interface DeploymentStrategies {
  __type?: "DeploymentStrategies";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<DeploymentStrategy>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace DeploymentStrategies {
  export function isa(o: any): o is DeploymentStrategies {
    return __isa(o, "DeploymentStrategies");
  }
}

export interface DeploymentStrategy {
  __type?: "DeploymentStrategy";
  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time AppConfig monitored for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets that received a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The deployment strategy ID.</p>
   */
  Id?: string;

  /**
   * <p>The name of the deployment strategy.</p>
   */
  Name?: string;

  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo | string;
}

export namespace DeploymentStrategy {
  export function isa(o: any): o is DeploymentStrategy {
    return __isa(o, "DeploymentStrategy");
  }
}

/**
 * <p>Information about the deployment.</p>
 */
export interface DeploymentSummary {
  __type?: "DeploymentSummary";
  /**
   * <p>Time the deployment completed.</p>
   */
  CompletedAt?: Date;

  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>The version of the configuration.</p>
   */
  ConfigurationVersion?: string;

  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;

  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType | string;

  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>Time the deployment started.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;
}

export namespace DeploymentSummary {
  export function isa(o: any): o is DeploymentSummary {
    return __isa(o, "DeploymentSummary");
  }
}

export interface Deployments {
  __type?: "Deployments";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<DeploymentSummary>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace Deployments {
  export function isa(o: any): o is Deployments {
    return __isa(o, "Deployments");
  }
}

export interface Environment {
  __type?: "Environment";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>The environment ID.</p>
   */
  Id?: string;

  /**
   * <p>Amazon CloudWatch alarms monitored during the deployment.</p>
   */
  Monitors?: Array<Monitor>;

  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>The state of the environment. An environment can be in one of the following states:
   *             <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or
   *             <code>ROLLED_BACK</code>
   *          </p>
   */
  State?: EnvironmentState | string;
}

export namespace Environment {
  export function isa(o: any): o is Environment {
    return __isa(o, "Environment");
  }
}

export enum EnvironmentState {
  DEPLOYING = "DEPLOYING",
  READY_FOR_DEPLOYMENT = "READY_FOR_DEPLOYMENT",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK"
}

export interface Environments {
  __type?: "Environments";
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Array<Environment>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace Environments {
  export function isa(o: any): o is Environments {
    return __isa(o, "Environments");
  }
}

export interface GetApplicationRequest {
  __type?: "GetApplicationRequest";
  /**
   * <p>The ID of the application you want to get.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApplicationRequest {
  export function isa(o: any): o is GetApplicationRequest {
    return __isa(o, "GetApplicationRequest");
  }
}

export interface GetConfigurationProfileRequest {
  __type?: "GetConfigurationProfileRequest";
  /**
   * <p>The ID of the application that includes the configuration profile you want to
   *          get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile you want to get.</p>
   */
  ConfigurationProfileId: string | undefined;
}

export namespace GetConfigurationProfileRequest {
  export function isa(o: any): o is GetConfigurationProfileRequest {
    return __isa(o, "GetConfigurationProfileRequest");
  }
}

export interface GetConfigurationRequest {
  __type?: "GetConfigurationRequest";
  /**
   * <p>The application to get.</p>
   */
  Application: string | undefined;

  /**
   * <p>The configuration version returned in the most recent GetConfiguration response.</p>
   */
  ClientConfigurationVersion?: string;

  /**
   * <p>A unique ID to identify the client for the configuration. This ID enables AppConfig to deploy
   *          the configuration in intervals, as defined in the deployment strategy.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The configuration to get.</p>
   */
  Configuration: string | undefined;

  /**
   * <p>The environment to get.</p>
   */
  Environment: string | undefined;
}

export namespace GetConfigurationRequest {
  export function isa(o: any): o is GetConfigurationRequest {
    return __isa(o, "GetConfigurationRequest");
  }
}

export interface GetDeploymentRequest {
  __type?: "GetDeploymentRequest";
  /**
   * <p>The ID of the application that includes the deployment you want to get. </p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;

  /**
   * <p>The ID of the environment that includes the deployment you want to get. </p>
   */
  EnvironmentId: string | undefined;
}

export namespace GetDeploymentRequest {
  export function isa(o: any): o is GetDeploymentRequest {
    return __isa(o, "GetDeploymentRequest");
  }
}

export interface GetDeploymentStrategyRequest {
  __type?: "GetDeploymentStrategyRequest";
  /**
   * <p>The ID of the deployment strategy to get.</p>
   */
  DeploymentStrategyId: string | undefined;
}

export namespace GetDeploymentStrategyRequest {
  export function isa(o: any): o is GetDeploymentStrategyRequest {
    return __isa(o, "GetDeploymentStrategyRequest");
  }
}

export interface GetEnvironmentRequest {
  __type?: "GetEnvironmentRequest";
  /**
   * <p>The ID of the application that includes the environment you want to get.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the environment you wnat to get.</p>
   */
  EnvironmentId: string | undefined;
}

export namespace GetEnvironmentRequest {
  export function isa(o: any): o is GetEnvironmentRequest {
    return __isa(o, "GetEnvironmentRequest");
  }
}

export enum GrowthType {
  LINEAR = "LINEAR"
}

/**
 * <p>There was an internal failure in the AppConfig service.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListApplicationsRequest {
  __type?: "ListApplicationsRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsRequest {
  export function isa(o: any): o is ListApplicationsRequest {
    return __isa(o, "ListApplicationsRequest");
  }
}

export interface ListConfigurationProfilesRequest {
  __type?: "ListConfigurationProfilesRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationProfilesRequest {
  export function isa(o: any): o is ListConfigurationProfilesRequest {
    return __isa(o, "ListConfigurationProfilesRequest");
  }
}

export interface ListDeploymentStrategiesRequest {
  __type?: "ListDeploymentStrategiesRequest";
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDeploymentStrategiesRequest {
  export function isa(o: any): o is ListDeploymentStrategiesRequest {
    return __isa(o, "ListDeploymentStrategiesRequest");
  }
}

export interface ListDeploymentsRequest {
  __type?: "ListDeploymentsRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDeploymentsRequest {
  export function isa(o: any): o is ListDeploymentsRequest {
    return __isa(o, "ListDeploymentsRequest");
  }
}

export interface ListEnvironmentsRequest {
  __type?: "ListEnvironmentsRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEnvironmentsRequest {
  export function isa(o: any): o is ListEnvironmentsRequest {
    return __isa(o, "ListEnvironmentsRequest");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
 */
export interface Monitor {
  __type?: "Monitor";
  /**
   * <p>ARN of the Amazon CloudWatch alarm.</p>
   */
  AlarmArn?: string;

  /**
   * <p>ARN of an IAM role for AppConfig to monitor <code>AlarmArn</code>.</p>
   */
  AlarmRoleArn?: string;
}

export namespace Monitor {
  export function isa(o: any): o is Monitor {
    return __isa(o, "Monitor");
  }
}

export enum ReplicateTo {
  NONE = "NONE",
  SSM_DOCUMENT = "SSM_DOCUMENT"
}

/**
 * <p>The requested resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export interface ResourceTags {
  __type?: "ResourceTags";
  /**
   * <p>Metadata to assign to AppConfig resources. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ResourceTags {
  export function isa(o: any): o is ResourceTags {
    return __isa(o, "ResourceTags");
  }
}

export interface StartDeploymentRequest {
  __type?: "StartDeploymentRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The configuration version to deploy.</p>
   */
  ConfigurationVersion: string | undefined;

  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>A description of the deployment.</p>
   */
  Description?: string;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>Metadata to assign to the deployment. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace StartDeploymentRequest {
  export function isa(o: any): o is StartDeploymentRequest {
    return __isa(o, "StartDeploymentRequest");
  }
}

export interface StopDeploymentRequest {
  __type?: "StopDeploymentRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;
}

export namespace StopDeploymentRequest {
  export function isa(o: any): o is StopDeploymentRequest {
    return __isa(o, "StopDeploymentRequest");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be
   *          up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to
   *          256 characters.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource for which to remove tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to delete.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UpdateApplicationRequest {
  __type?: "UpdateApplicationRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A description of the application.</p>
   */
  Description?: string;

  /**
   * <p>The name of the application.</p>
   */
  Name?: string;
}

export namespace UpdateApplicationRequest {
  export function isa(o: any): o is UpdateApplicationRequest {
    return __isa(o, "UpdateApplicationRequest");
  }
}

export interface UpdateConfigurationProfileRequest {
  __type?: "UpdateConfigurationProfileRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the configuration profile.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;

  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn?: string;

  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Array<Validator>;
}

export namespace UpdateConfigurationProfileRequest {
  export function isa(o: any): o is UpdateConfigurationProfileRequest {
    return __isa(o, "UpdateConfigurationProfileRequest");
  }
}

export interface UpdateDeploymentStrategyRequest {
  __type?: "UpdateDeploymentStrategyRequest";
  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes?: number;

  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;

  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;

  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;

  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType | string;
}

export namespace UpdateDeploymentStrategyRequest {
  export function isa(o: any): o is UpdateDeploymentStrategyRequest {
    return __isa(o, "UpdateDeploymentStrategyRequest");
  }
}

export interface UpdateEnvironmentRequest {
  __type?: "UpdateEnvironmentRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;

  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Array<Monitor>;

  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;
}

export namespace UpdateEnvironmentRequest {
  export function isa(o: any): o is UpdateEnvironmentRequest {
    return __isa(o, "UpdateEnvironmentRequest");
  }
}

export interface ValidateConfigurationRequest {
  __type?: "ValidateConfigurationRequest";
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;

  /**
   * <p>The version of the configuration to validate.</p>
   */
  ConfigurationVersion: string | undefined;
}

export namespace ValidateConfigurationRequest {
  export function isa(o: any): o is ValidateConfigurationRequest {
    return __isa(o, "ValidateConfigurationRequest");
  }
}

/**
 * <p>A validator provides a syntactic or semantic check to ensure the configuration you want
 *          to deploy functions as intended. To validate your application configuration data, you
 *          provide a schema or a Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 */
export interface Validator {
  __type?: "Validator";
  /**
   * <p>Either the JSON Schema content or an AWS Lambda function name.</p>
   */
  Content: string | undefined;

  /**
   * <p>AppConfig supports validators of type <code>JSON_SCHEMA</code> and <code>LAMBDA</code>
   *          </p>
   */
  Type: ValidatorType | string | undefined;
}

export namespace Validator {
  export function isa(o: any): o is Validator {
    return __isa(o, "Validator");
  }
}

export enum ValidatorType {
  JSON_SCHEMA = "JSON_SCHEMA",
  LAMBDA = "LAMBDA"
}
