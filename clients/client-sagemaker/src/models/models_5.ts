// smithy-typescript generated code
import type {
  BooleanOperator,
  CrossAccountFilterOption,
  ResourceType,
  SearchSortOrder,
  WorkforceIpAddressType,
} from "./enums";
import type { CfnUpdateTemplateProvider, Tag } from "./models_0";
import type { NotebookInstanceLifecycleHook, UserSettings } from "./models_1";
import type {
  MemberDefinition,
  NotificationConfiguration,
  OidcConfig,
  ParallelismConfiguration,
  PartnerAppConfig,
  PartnerAppMaintenanceConfig,
  PipelineDefinitionS3Location,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  SourceIpConfig,
  SpaceSettings,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkerAccessConfiguration,
  WorkforceVpcConfigRequest,
} from "./models_2";
import type { Filter, Workforce, Workteam } from "./models_3";
import type {
  NestedFilters,
  ProfilerConfigForUpdate,
  RemoteDebugConfigForUpdate,
  ResourceConfigForUpdate,
  VisibilityConditions,
} from "./models_4";

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.</p>
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.</p>
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigOutput {}

/**
 * @public
 */
export interface UpdatePartnerAppRequest {
  /**
   * <p>The ARN of the SageMaker Partner AI App to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Maintenance configuration settings for the SageMaker Partner AI App.</p>
   * @public
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig | undefined;

  /**
   * <p>Indicates the instance type and size of the cluster attached to the SageMaker Partner AI App.</p>
   * @public
   */
  Tier?: string | undefined;

  /**
   * <p>Configuration settings for the SageMaker Partner AI App.</p>
   * @public
   */
  ApplicationConfig?: PartnerAppConfig | undefined;

  /**
   * <p>When set to <code>TRUE</code>, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.</p>
   * @public
   */
  EnableIamSessionBasedIdentity?: boolean | undefined;

  /**
   * <p>When set to <code>TRUE</code>, the SageMaker Partner AI App is automatically upgraded to the latest minor version during the next scheduled maintenance window, if one is available.</p>
   * @public
   */
  EnableAutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The semantic version to upgrade the SageMaker Partner AI App to. Must be the same semantic version returned in the <code>AvailableUpgrade</code> field from <code>DescribePartnerApp</code>. Version skipping and downgrades are not supported.</p>
   * @public
   */
  AppVersion?: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAppResponse {
  /**
   * <p>The ARN of the SageMaker Partner AI App that was updated.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location.</p>
   * @public
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location | undefined;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>If specified, it applies to all executions of this pipeline by default.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The ID of the pipeline version.</p>
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration of the parent pipeline for this specific run.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * <p>The pipeline version ID to update.</p>
   * @public
   */
  PipelineVersionId: number | undefined;

  /**
   * <p>The display name of the pipeline version.</p>
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * <p>The description of the pipeline version.</p>
   * @public
   */
  PipelineVersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The ID of the pipeline version.</p>
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * <p>Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>. </p>
 * @public
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * <p>The ID of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[] | undefined;
}

/**
 * <p> Contains configuration details for updating an existing template provider in the project. </p>
 * @public
 */
export interface UpdateTemplateProvider {
  /**
   * <p> The CloudFormation template provider configuration to update. </p>
   * @public
   */
  CfnTemplateProvider?: CfnUpdateTemplateProvider | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The description for the project.</p>
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>. </p>
   * @public
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>. In addition, the project must have tag update constraints set in order to include this parameter in the request. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html">Amazon Web Services Service Catalog Tag Update Constraints</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p> The template providers to update in the project. </p>
   * @public
   */
  TemplateProvidersToUpdate?: UpdateTemplateProvider[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * <p>The name of the space that appears in the Amazon SageMaker Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   * @public
   */
  SpaceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfigForUpdate | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.</p>
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[] | undefined;

  /**
   * <p>The training job <code>ResourceConfig</code> to update warm pool retention length.</p>
   * @public
   */
  ResourceConfig?: ResourceConfigForUpdate | undefined;

  /**
   * <p>Configuration for remote debugging while the training job is running. You can update the remote debugging configuration when the <code>SecondaryStatus</code> of the job is <code>Downloading</code> or <code>Training</code>.To learn more about the remote debugging functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging</a>.</p>
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfigForUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialRequest {
  /**
   * <p>The name of the trial to update.</p>
   * @public
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The new status of the component.</p>
   * @public
   */
  Status?: TrialComponentStatus | undefined;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * <p>The hyperparameters to remove from the component.</p>
   * @public
   */
  ParametersToRemove?: string[] | undefined;

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>The input artifacts to remove from the component.</p>
   * @public
   */
  InputArtifactsToRemove?: string[] | undefined;

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>The output artifacts to remove from the component.</p>
   * @public
   */
  OutputArtifactsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce name by using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html">ListWorkforces</a> operation.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to access tasks assigned to this workforce.</p> <p>Maximum: Ten CIDR values</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP) configuration for a workforce made using your own IdP.</p>
   * @public
   */
  OidcConfig?: OidcConfig | undefined;

  /**
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest | undefined;

  /**
   * <p>Use this parameter to specify whether you want <code>IPv4</code> only or <code>dualstack</code> (<code>IPv4</code> and <code>IPv6</code>) to support your labeling workforce.</p>
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   * @public
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify the workers that make up the work team. </p> <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input for both of these parameters in a single request.</p> <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito <i>user groups</i> within the user pool used to create a workforce. All of the <code>CognitoMemberDefinition</code> objects that make up the member definition must have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon Cognito user group to an existing worker pool, see <a href="">Adding groups to a User Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User Pools</a>.</p> <p>For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in <code>OidcMemberDefinition</code> by listing those groups in <code>Groups</code>. Be aware that user groups that are already in the work team must also be listed in <code>Groups</code> when you make this request to remain on the work team. If you do not include these user groups, they will no longer be associated with the work team you update. </p>
   * @public
   */
  MemberDefinitions?: MemberDefinition[] | undefined;

  /**
   * <p>An updated description for the work team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul>
 * @public
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A list of nested filter objects.</p>
   * @public
   */
  NestedFilters?: NestedFilters[] | undefined;

  /**
   * <p>A list of search expression objects.</p>
   * @public
   */
  SubExpressions?: SearchExpression[] | undefined;

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every conditional statement in all lists to be satisfied for the entire search expression to be true, specify <code>And</code>. If only a single conditional statement needs to be true for the entire search expression to be true, specify <code>Or</code>. The default value is <code>And</code>.</p>
   * @public
   */
  Operator?: BooleanOperator | undefined;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * <p>The name of the SageMaker resource to search for.</p>
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive <code>SubExpressions</code>, <code>NestedFilters</code>, and <code>Filters</code> that can be included in a <code>SearchExpression</code> object is 50.</p>
   * @public
   */
  SearchExpression?: SearchExpression | undefined;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The default is <code>LastModifiedTime</code>.</p>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or <code>Descending</code>. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SearchSortOrder | undefined;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified <code>SearchExpression</code>, the response includes a <code>NextToken</code>. The <code>NextToken</code> can be passed to the next <code>SearchRequest</code> to continue retrieving results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A cross account filter option. When the value is <code>"CrossAccount"</code> the search results will only include resources made discoverable to you from other accounts. When the value is <code>"SameAccount"</code> or <code>null</code> the search results will only include resources from your account. Default is <code>null</code>. For more information on searching for resources made discoverable to your account, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html"> Search discoverable resources</a> in the SageMaker Developer Guide. The maximum number of <code>ResourceCatalog</code>s viewable is 1000. </p>
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | undefined;

  /**
   * <p> Limits the results of your search request to the resources that you can access. </p>
   * @public
   */
  VisibilityConditions?: VisibilityConditions[] | undefined;
}
