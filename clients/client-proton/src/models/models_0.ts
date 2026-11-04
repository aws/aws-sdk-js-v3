// smithy-typescript generated code
import type {
  BlockerStatus,
  BlockerType,
  ComponentDeploymentUpdateType,
  DeploymentStatus,
  DeploymentTargetResourceType,
  DeploymentUpdateType,
  EnvironmentAccountConnectionRequesterAccountType,
  EnvironmentAccountConnectionStatus,
  ListServiceInstancesFilterBy,
  ListServiceInstancesSortBy,
  ProvisionedResourceEngine,
  Provisioning,
  RepositoryProvider,
  RepositorySyncStatus,
  ResourceDeploymentStatus,
  ResourceSyncStatus,
  ServiceStatus,
  ServiceTemplateSupportedComponentSourceType,
  SortOrder,
  SyncType,
  TemplateType,
  TemplateVersionStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionInput {
  /**
   * The ID of the environment account connection.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Detailed data of an Proton environment account connection resource.
 *
 * @public
 */
export interface EnvironmentAccountConnection {
  /**
   * The ID of the environment account connection.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment account connection.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the management account that's connected to the environment account connection.
   *
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * The environment account that's connected to the environment account connection.
   *
   * @public
   */
  environmentAccountId: string | undefined;

  /**
   * The IAM service role that's associated with the environment account connection.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the environment that's associated with the environment account connection.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The time when the environment account connection request was made.
   *
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * The time when the environment account connection was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The status of the environment account connection.
   *
   * @public
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
   *
   * The environment account connection must have a `componentRoleArn` to allow directly defined components to be associated with any environments running in the account.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionOutput {
  /**
   * The environment account connection data that's returned by Proton.
   *
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * Detail data for a linked repository branch.
 *
 * @public
 */
export interface RepositoryBranch {
  /**
   * The Amazon Resource Name (ARN) of the linked repository.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;
}

/**
 * Proton settings that are used for multiple services in the Amazon Web Services account.
 *
 * @public
 */
export interface AccountSettings {
  /**
   * The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.
   *
   * @public
   */
  pipelineServiceRoleArn?: string | undefined;

  /**
   * The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.
   *
   * @public
   */
  pipelineProvisioningRepository?: RepositoryBranch | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based provisioning.
   *
   * @public
   */
  pipelineCodebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsInput {}

/**
 * @public
 */
export interface GetAccountSettingsOutput {
  /**
   * The Proton pipeline service role detail data that's returned by Proton.
   *
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * Detail input data for a linked repository branch.
 *
 * @public
 */
export interface RepositoryBranchInput {
  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.
   *
   * To remove a previously configured ARN, specify an empty string.
   *
   * @public
   */
  pipelineServiceRoleArn?: string | undefined;

  /**
   * A linked repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.
   *
   * To remove a previously configured repository, set `deletePipelineProvisioningRepository` to `true`, and don't set `pipelineProvisioningRepository`.
   *
   * @public
   */
  pipelineProvisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * Set to `true` to remove a configured pipeline repository from the account settings. Don't set this field if you are updating the configured pipeline repository.
   *
   * @public
   */
  deletePipelineProvisioningRepository?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Proton assumes this role for CodeBuild-based provisioning.
   *
   * @public
   */
  pipelineCodebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * The Proton pipeline service role and repository data shared across the Amazon Web Services account.
   *
   * @public
   */
  accountSettings: AccountSettings | undefined;
}

/**
 * @public
 */
export interface CancelComponentDeploymentInput {
  /**
   * The name of the component with the deployment to cancel.
   *
   * @public
   */
  componentName: string | undefined;
}

/**
 * Detailed data of an Proton component resource.
 *
 * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @public
 */
export interface Component {
  /**
   * The name of the component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the Proton environment that this component is associated with.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service that `serviceInstanceName` is associated with. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The time when the component was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the component was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The time when a deployment of the component was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt?: Date | undefined;

  /**
   * The time when the component was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt?: Date | undefined;

  /**
   * The component deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * The message associated with the component deployment status.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * The last token the client requested.
   *
   * @public
   */
  lastClientRequestToken?: string | undefined;

  /**
   * The ID of the last attempted deployment of this component.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this component.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelComponentDeploymentOutput {
  /**
   * The detailed data of the component with the deployment that is being canceled.
   *
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentInput {
  /**
   * The name of the environment with the deployment to cancel.
   *
   * @public
   */
  environmentName: string | undefined;
}

/**
 * Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.
 *
 * @public
 */
export interface Environment {
  /**
   * The name of the environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time when the environment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when a deployment of the environment was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * The time when the environment was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the environment template.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the environment template.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The environment deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * An environment deployment status message.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.
   *
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * The ID of the environment account connection that's used to provision infrastructure resources in an environment account.
   *
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * The ID of the environment account that the environment infrastructure resources are provisioned in.
   *
   * @public
   */
  environmentAccountId?: string | undefined;

  /**
   * The environment spec.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
   *
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see [CreateRepository](https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html).
   *
   * @public
   */
  provisioningRepository?: RepositoryBranch | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.
   *
   * The environment must have a `componentRoleArn` to allow directly defined components to be associated with the environment.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;

  /**
   * The ID of the last attempted deployment of this environment.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this environment.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentOutput {
  /**
   * The environment summary data that's returned by Proton.
   *
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentInput {
  /**
   * The name of the service instance with the deployment to cancel.
   *
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * The name of the service with the service instance deployment to cancel.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * Detailed data of an Proton service instance resource.
 *
 * @public
 */
export interface ServiceInstance {
  /**
   * The name of the service instance.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the service instance was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when a deployment of the service instance was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * The time when the service instance was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * The name of the service that the service instance belongs to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the environment that the service instance was deployed into.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service template that was used to create the service instance.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the service template that was used to create the service instance.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the service template that was used to create the service instance.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The service instance deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * The message associated with the service instance deployment status.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The service spec that was used to create the service instance.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The last client request token received.
   *
   * @public
   */
  lastClientRequestToken?: string | undefined;

  /**
   * The ID of the last attempted deployment of this service instance.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this service instance.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentOutput {
  /**
   * The service instance summary data that's returned by Proton.
   *
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentInput {
  /**
   * The name of the service with the service pipeline deployment to cancel.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * Detailed data of an Proton service instance pipeline resource.
 *
 * @public
 */
export interface ServicePipeline {
  /**
   * The Amazon Resource Name (ARN) of the service pipeline.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the service pipeline was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when a deployment of the service pipeline was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * The time when the service pipeline was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * The name of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The deployment status of the service pipeline.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * A service pipeline deployment status message.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The service spec that was used to create the service pipeline.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The ID of the last attempted deployment of this service pipeline.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this service pipeline.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentOutput {
  /**
   * The service pipeline detail data that's returned by Proton.
   *
   * @public
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface ListComponentOutputsInput {
  /**
   * The name of the component whose outputs you want.
   *
   * @public
   */
  componentName: string | undefined;

  /**
   * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the deployment whose outputs you want.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * An infrastructure as code defined resource output.
 *
 * @public
 */
export interface Output {
  /**
   * The output key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The output value.
   *
   * @public
   */
  valueString?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentOutputsOutput {
  /**
   * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of component Infrastructure as Code (IaC) outputs.
   *
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesInput {
  /**
   * The name of the component whose provisioned resources you want.
   *
   * @public
   */
  componentName: string | undefined;

  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Detail data for a provisioned resource.
 *
 * @public
 */
export interface ProvisionedResource {
  /**
   * The provisioned resource name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The provisioned resource identifier.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The resource provisioning engine. At this time, `CLOUDFORMATION` can be used for Amazon Web Services-managed provisioning, and `TERRAFORM` can be used for self-managed provisioning.
   *
   * For more information, see [Self-managed provisioning](https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self) in the *Proton User Guide*.
   *
   * @public
   */
  provisioningEngine?: ProvisionedResourceEngine | undefined;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesOutput {
  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of provisioned resources for a component.
   *
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * A description of a resource tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the resource tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the resource tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentInput {
  /**
   * The customer-provided name of the component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional customer-provided description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the service that `serviceInstanceName` is associated with. If you don't specify this, the component isn't attached to any service instance. Specify both `serviceInstanceName` and `serviceName` or neither of them.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service instance. Specify both `serviceInstanceName` and `serviceName` or neither of them.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify `serviceInstanceName` and `serviceName`.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.
   *
   * > **Note:** Components support a single IaC file, even if you use Terraform as your template language.
   *
   * @public
   */
  templateFile: string | undefined;

  /**
   * A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom component provisions.
   *
   * @public
   */
  manifest: string | undefined;

  /**
   * The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service instance.
   *
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The client token for the created component.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentOutput {
  /**
   * The detailed data of the created component.
   *
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface DeleteComponentInput {
  /**
   * The name of the component to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentOutput {
  /**
   * The detailed data of the component being deleted.
   *
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * The name of the component that you want to get the detailed data for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * The detailed data of the requested component.
   *
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * A token that indicates the location of the next component in the array of components, after the list of components that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of an environment for result list filtering. Proton returns components associated with the environment or attached to service instances running in it.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The name of a service for result list filtering. Proton returns components attached to service instances of the service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of a service instance for result list filtering. Proton returns the component attached to the service instance, if any.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The maximum number of components to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of an Proton component resource.
 *
 * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @public
 */
export interface ComponentSummary {
  /**
   * The name of the component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the Proton environment that this component is associated with.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service that `serviceInstanceName` is associated with. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The time when the component was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the component was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The time when a deployment of the component was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt?: Date | undefined;

  /**
   * The time when the component was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt?: Date | undefined;

  /**
   * The component deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * The message associated with the component deployment status.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The ID of the last attempted deployment of this component.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this component.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * A token that indicates the location of the next component in the array of components, after the current requested list of components.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of components with summary data.
   *
   * @public
   */
  components: ComponentSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateComponentInput {
  /**
   * The name of the component to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The deployment type. It defines the mode for updating a component, as follows:
   *
   * - **`NONE`
   *
   *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated. You can only specify `description` in this mode.
   *
   * - **`CURRENT_VERSION`
   *
   *   In this mode, the component is deployed and updated with the new `serviceSpec`, `templateSource`, and/or `type` that you provide. Only requested parameters are updated.
   *
   * @public****
   */
  deploymentType: ComponentDeploymentUpdateType | undefined;

  /**
   * An optional customer-provided description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the service that `serviceInstanceName` is associated with. Don't specify to keep the component's current service instance attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both `serviceInstanceName` and `serviceName` or for neither of them.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance that you want to attach this component to. Don't specify to keep the component's current service instance attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both `serviceInstanceName` and `serviceName` or for neither of them.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The service spec that you want the component to use to access service inputs. Set this only when the component is attached to a service instance.
   *
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.
   *
   * > **Note:** Components support a single IaC file, even if you use Terraform as your template language.
   *
   * @public
   */
  templateFile?: string | undefined;

  /**
   * The client token for the updated component.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComponentOutput {
  /**
   * The detailed data of the updated component.
   *
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * The ID of the deployment to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * The detailed data about the current state of the component.
 *
 * @public
 */
export interface ComponentState {
  /**
   * The name of the service that `serviceInstanceName` is associated with. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.
   *
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * The template file used.
   *
   * @public
   */
  templateFile?: string | undefined;
}

/**
 * The detailed data about the current state of the environment.
 *
 * @public
 */
export interface EnvironmentState {
  /**
   * The environment spec that was used to create the environment.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The name of the environment template that was used to create the environment.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the environment template that was used to create the environment.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the environment template that was used to create the environment.
   *
   * @public
   */
  templateMinorVersion: string | undefined;
}

/**
 * The detailed data about the current state of this service instance.
 *
 * @public
 */
export interface ServiceInstanceState {
  /**
   * The service spec that was used to create the service instance.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * The name of the service template that was used to create the service instance.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The IDs for the last successful components deployed for this service instance.
   *
   * @public
   */
  lastSuccessfulComponentDeploymentIds?: string[] | undefined;

  /**
   * The ID for the last successful environment deployed for this service instance.
   *
   * @public
   */
  lastSuccessfulEnvironmentDeploymentId?: string | undefined;

  /**
   * The ID for the last successful service pipeline deployed for this service instance.
   *
   * @public
   */
  lastSuccessfulServicePipelineDeploymentId?: string | undefined;
}

/**
 * The detailed data about the current state of the service pipeline.
 *
 * @public
 */
export interface ServicePipelineState {
  /**
   * The service spec that was used to create the service pipeline.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The name of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the service template that was used to create the service pipeline.
   *
   * @public
   */
  templateMinorVersion: string | undefined;
}

/**
 * The detailed data about the current state of the deployment.
 *
 * @public
 */
export type DeploymentState =
  | DeploymentState.ComponentMember
  | DeploymentState.EnvironmentMember
  | DeploymentState.ServiceInstanceMember
  | DeploymentState.ServicePipelineMember
  | DeploymentState.$UnknownMember;

/**
 * @public
 */
export namespace DeploymentState {
  /**
   * The state of the service instance associated with the deployment.
   *
   * @public
   */
  export interface ServiceInstanceMember {
    serviceInstance: ServiceInstanceState;
    environment?: never;
    servicePipeline?: never;
    component?: never;
    $unknown?: never;
  }

  /**
   * The state of the environment associated with the deployment.
   *
   * @public
   */
  export interface EnvironmentMember {
    serviceInstance?: never;
    environment: EnvironmentState;
    servicePipeline?: never;
    component?: never;
    $unknown?: never;
  }

  /**
   * The state of the service pipeline associated with the deployment.
   *
   * @public
   */
  export interface ServicePipelineMember {
    serviceInstance?: never;
    environment?: never;
    servicePipeline: ServicePipelineState;
    component?: never;
    $unknown?: never;
  }

  /**
   * The state of the component associated with the deployment.
   *
   * @public
   */
  export interface ComponentMember {
    serviceInstance?: never;
    environment?: never;
    servicePipeline?: never;
    component: ComponentState;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serviceInstance?: never;
    environment?: never;
    servicePipeline?: never;
    component?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serviceInstance: (value: ServiceInstanceState) => T;
    environment: (value: EnvironmentState) => T;
    servicePipeline: (value: ServicePipelineState) => T;
    component: (value: ComponentState) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The detailed information about a deployment.
 *
 * @public
 */
export interface Deployment {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target of the deployment.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The date and time the depoyment target was created.
   *
   * @public
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * The resource type of the deployment target. It can be an environment, service, service instance, or component.
   *
   * @public
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * The name of the environment associated with this deployment.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service in this deployment.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the deployment's service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The name of the component associated with this deployment.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The status of the deployment.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * The deployment status message.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The date and time the deployment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the deployment was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The date and time the deployment was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The ID of the last attempted deployment.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;

  /**
   * The initial state of the target resource at the time of the deployment.
   *
   * @public
   */
  initialState?: DeploymentState | undefined;

  /**
   * The target state of the target resource at the time of the deployment.
   *
   * @public
   */
  targetState?: DeploymentState | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentOutput {
  /**
   * The detailed data of the deployment being deleted.
   *
   * @public
   */
  deployment?: Deployment | undefined;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * The ID of the deployment that you want to get the detailed data for.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of a environment that you want to get the detailed data for.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The name of the service associated with the given deployment ID.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance associated with the given deployment ID. `serviceName` must be specified to identify the service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The name of a component that you want to get the detailed data for.
   *
   * @public
   */
  componentName?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * The detailed data of the requested deployment.
   *
   * @public
   */
  deployment?: Deployment | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * A token that indicates the location of the next deployment in the array of deployment, after the list of deployment that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of an environment for result list filtering. Proton returns deployments associated with the environment.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The name of a service for result list filtering. Proton returns deployments associated with service instances of the service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of a service instance for result list filtering. Proton returns the deployments associated with the service instance.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The name of a component for result list filtering. Proton returns deployments associated with that component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The maximum number of deployments to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of the deployment.
 *
 * @public
 */
export interface DeploymentSummary {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target of the deployment.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The date and time the target resource was created.
   *
   * @public
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * The resource type of the deployment target. It can be an environment, service, service instance, or component.
   *
   * @public
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * The date and time the deployment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the deployment was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The date and time the deployment was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The name of the environment associated with the deployment.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service associated with the deployment.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the service instance associated with the deployment.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The name of the component associated with the deployment.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The ID of the last attempted deployment.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;

  /**
   * The current status of the deployment.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * A token that indicates the location of the next deployment in the array of deployment, after the current requested list of deployment.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of deployment with summary data.
   *
   * @public
   */
  deployments: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionInput {
  /**
   * When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first request created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
   *
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure resources in the associated environment account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The name of the Proton environment that's created in the associated management account.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
   *
   * You must specify `componentRoleArn` to allow directly defined components to be associated with any environments running in this account.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionOutput {
  /**
   * The environment account connection detail data that's returned by Proton.
   *
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionInput {
  /**
   * The ID of the environment account connection to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionOutput {
  /**
   * The detailed data of the environment account connection being deleted.
   *
   * @public
   */
  environmentAccountConnection?: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionInput {
  /**
   * The ID of the environment account connection that you want to get the detailed data for.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionOutput {
  /**
   * The detailed data of the requested environment account connection.
   *
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentAccountConnectionsInput {
  /**
   * The type of account making the `ListEnvironmentAccountConnections` request.
   *
   * @public
   */
  requestedBy: EnvironmentAccountConnectionRequesterAccountType | undefined;

  /**
   * The environment name that's associated with each listed environment account connection.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The status details for each listed environment account connection.
   *
   * @public
   */
  statuses?: EnvironmentAccountConnectionStatus[] | undefined;

  /**
   * A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of environment account connections that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environment account connections to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of an Proton environment account connection resource.
 *
 * @public
 */
export interface EnvironmentAccountConnectionSummary {
  /**
   * The ID of the environment account connection.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment account connection.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the management account that's connected to the environment account connection.
   *
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * The ID of the environment account that's connected to the environment account connection.
   *
   * @public
   */
  environmentAccountId: string | undefined;

  /**
   * The IAM service role that's associated with the environment account connection.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the environment that's associated with the environment account connection.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The time when the environment account connection request was made.
   *
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * The time when the environment account connection was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The status of the environment account connection.
   *
   * @public
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
   *
   * The environment account connection must have a `componentRoleArn` to allow directly defined components to be associated with any environments running in the account.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentAccountConnectionsOutput {
  /**
   * An array of environment account connections with details that's returned by Proton.
   *
   * @public
   */
  environmentAccountConnections: EnvironmentAccountConnectionSummary[] | undefined;

  /**
   * A token that indicates the location of the next environment account connection in the array of environment account connections, after the current requested list of environment account connections.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionInput {
  /**
   * The ID of the environment account connection to reject.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionOutput {
  /**
   * The environment connection account detail data that's returned by Proton.
   *
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionInput {
  /**
   * The ID of the environment account connection to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
   *
   * The environment account connection must have a `componentRoleArn` to allow directly defined components to be associated with any environments running in the account.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionOutput {
  /**
   * The environment account connection detail data that's returned by Proton.
   *
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsInput {
  /**
   * The environment name.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the deployment whose outputs you want.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsOutput {
  /**
   * A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of environment outputs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of environment outputs with detail data.
   *
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesInput {
  /**
   * The environment name.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of environment provisioned resources that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesOutput {
  /**
   * A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested list of environment provisioned resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of environment provisioned resources.
   *
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * The name of the environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the environment template. For more information, see [Environment Templates](https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html) in the *Proton User Guide*.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the environment template.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the environment template.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * A description of the environment that's being created and deployed.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see [Environments](https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html) in the *Proton User Guide*.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.
   *
   * To use Amazon Web Services-managed provisioning for the environment, specify either the `environmentAccountConnectionId` or `protonServiceRoleArn` parameter and omit the `provisioningRepository` parameter.
   *
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment account. For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
   *
   * To use Amazon Web Services-managed provisioning for the environment, specify either the `environmentAccountConnectionId` or `protonServiceRoleArn` parameter and omit the `provisioningRepository` parameter.
   *
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.
   *
   * To use self-managed provisioning for the environment, specify this parameter and omit the `environmentAccountConnectionId` and `protonServiceRoleArn` parameters.
   *
   * @public
   */
  provisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.
   *
   * You must specify `componentRoleArn` to allow directly defined components to be associated with this environment.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.
   *
   * To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the `environmentAccountConnectionId` or `codebuildRoleArn` parameter.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * The environment detail data that's returned by Proton.
   *
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * The name of the environment to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentOutput {
  /**
   * The detailed data of the environment being deleted.
   *
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * The name of the environment that you want to get the detailed data for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * The detailed data of the requested environment.
   *
   * @public
   */
  environment: Environment | undefined;
}

/**
 * A search filter for environment templates.
 *
 * @public
 */
export interface EnvironmentTemplateFilter {
  /**
   * Include `templateName` to filter search for a template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * Include `majorVersion` to filter search for a major version.
   *
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environments to list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of the versions of the environment template.
   *
   * @public
   */
  environmentTemplates?: EnvironmentTemplateFilter[] | undefined;
}

/**
 * Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.
 *
 * @public
 */
export interface EnvironmentSummary {
  /**
   * The name of the environment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time when the environment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when a deployment of the environment was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * The time when the environment was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the environment template.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the environment template.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The environment deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * An environment deployment status message.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.
   *
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * The ID of the environment account connection that the environment is associated with.
   *
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * The ID of the environment account that the environment infrastructure resources are provisioned in.
   *
   * @public
   */
  environmentAccountId?: string | undefined;

  /**
   * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
   *
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.
   *
   * The environment must have a `componentRoleArn` to allow directly defined components to be associated with the environment.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The ID of the last attempted deployment of this environment.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this environment.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of environment detail data summaries.
   *
   * @public
   */
  environments: EnvironmentSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * The name of the environment to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the environment update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The formatted specification that defines the update.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The major version of the environment to update.
   *
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * The minor version of the environment to update.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.
   *
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * There are four modes for updating an environment. The `deploymentType` field defines the mode.
   *
   * - **`NONE`
   *
   *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated.
   *
   * - **`CURRENT_VERSION`
   *
   *   In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. *Don’t* include major or minor version parameters when you use this `deployment-type`.
   *
   * - **`MINOR_VERSION`
   *
   *   In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.
   *
   * - **`MAJOR_VERSION`
   *
   *   In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).
   *
   * @public********
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * The ID of the environment account connection.
   *
   * You can only update to a new environment account connection if it was created in the same environment account that the current environment account connection was created in and is associated with the current environment.
   *
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.
   *
   * @public
   */
  provisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It determines the scope of infrastructure that a component can provision.
   *
   * The environment must have a `componentRoleArn` to allow directly defined components to be associated with the environment.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your behalf.
   *
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * The environment detail data that's returned by Proton.
   *
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateInput {
  /**
   * The name of the environment template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The environment template name as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A customer provided encryption key that Proton uses to encrypt data.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
   *
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The environment template data.
 *
 * @public
 */
export interface EnvironmentTemplate {
  /**
   * The name of the environment template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the environment template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the environment template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The name of the environment template as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the recommended version of the environment template.
   *
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * The customer provided encryption key for the environment template.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
   *
   * @public
   */
  provisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateOutput {
  /**
   * The environment template detail data that's returned by Proton.
   *
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateInput {
  /**
   * The name of the environment template to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateOutput {
  /**
   * The detailed data of the environment template being deleted.
   *
   * @public
   */
  environmentTemplate?: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateInput {
  /**
   * The name of the environment template that you want to get the detailed data for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateOutput {
  /**
   * The detailed data of the requested environment template.
   *
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesInput {
  /**
   * A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environment templates to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The environment template data.
 *
 * @public
 */
export interface EnvironmentTemplateSummary {
  /**
   * The name of the environment template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the environment template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the environment template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The name of the environment template as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The recommended version of the environment template.
   *
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
   *
   * @public
   */
  provisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesOutput {
  /**
   * A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of environment templates.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of environment templates with detail data.
   *
   * @public
   */
  templates: EnvironmentTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateInput {
  /**
   * The name of the environment template to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the environment template to update as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the environment template update.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateOutput {
  /**
   * The environment template detail data that's returned by Proton.
   *
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * Template bundle S3 bucket data.
 *
 * @public
 */
export interface S3ObjectSource {
  /**
   * The name of the S3 bucket that contains a template bundle.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The path to the S3 bucket that contains a template bundle.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * Template version source data.
 *
 * @public
 */
export type TemplateVersionSourceInput =
  | TemplateVersionSourceInput.S3Member
  | TemplateVersionSourceInput.$UnknownMember;

/**
 * @public
 */
export namespace TemplateVersionSourceInput {
  /**
   * An S3 source object that includes the template bundle S3 path and name for a template minor version.
   *
   * @public
   */
  export interface S3Member {
    s3: S3ObjectSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3ObjectSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateVersionInput {
  /**
   * When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first request created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the new version of an environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * To create a new minor version of the environment template, include `major Version`.
   *
   * To create a new major and minor version of the environment template, exclude `major Version`.
   *
   * @public
   */
  majorVersion?: string | undefined;

  /**
   * An object that includes the template bundle S3 bucket path and name for the new version of an template.
   *
   * @public
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The environment template version data.
 *
 * @public
 */
export interface EnvironmentTemplateVersion {
  /**
   * The name of the version of an environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The latest major version that's associated with the version of an environment template.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The minor version of an environment template.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * The recommended minor version of the environment template.
   *
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * The status of the version of an environment template.
   *
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * The status message of the version of an environment template.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A description of the minor version of an environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the version of an environment template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the version of an environment template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the version of an environment template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The schema of the version of an environment template.
   *
   * @public
   */
  schema?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateVersionOutput {
  /**
   * The environment template detail data that's returned by Proton.
   *
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionInput {
  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The environment template major version to delete.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The environment template minor version to delete.
   *
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionOutput {
  /**
   * The detailed data of the environment template version being deleted.
   *
   * @public
   */
  environmentTemplateVersion?: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionInput {
  /**
   * The name of the environment template a version of which you want to get detailed data for.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To get environment template major version detail data, include `major Version`.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * To get environment template minor version detail data, include `minorVersion`.
   *
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionOutput {
  /**
   * The detailed data of the requested environment template version.
   *
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsInput {
  /**
   * A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of major or minor versions of an environment template to list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To view a list of minor of versions under a major version of an environment template, include `major Version`.
   *
   * To view a list of major versions of an environment template, *exclude* `major Version`.
   *
   * @public
   */
  majorVersion?: string | undefined;
}

/**
 * A summary of the version of an environment template detail data.
 *
 * @public
 */
export interface EnvironmentTemplateVersionSummary {
  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The latest major version that's associated with the version of an environment template.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The version of an environment template.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * The recommended minor version of the environment template.
   *
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * The status of the version of an environment template.
   *
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * The status message of the version of an environment template.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A description of the version of an environment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the version of an environment template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the version of an environment template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the version of an environment template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsOutput {
  /**
   * A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of major or minor versions of an environment template detail data.
   *
   * @public
   */
  templateVersions: EnvironmentTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionInput {
  /**
   * The name of the environment template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To update a major version of an environment template, include `major Version`.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * To update a minor version of an environment template, include `minorVersion`.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * A description of environment template version to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the environment template minor version to update.
   *
   * @public
   */
  status?: TemplateVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionOutput {
  /**
   * The environment template version detail data that's returned by Proton.
   *
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusInput {
  /**
   * The repository name.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The repository sync type.
   *
   * @public
   */
  syncType: SyncType | undefined;
}

/**
 * Repository sync event detail data for a sync attempt.
 *
 * @public
 */
export interface RepositorySyncEvent {
  /**
   * The type of event.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The external ID of the sync event.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The time that the sync event occurred.
   *
   * @public
   */
  time: Date | undefined;

  /**
   * Event detail for a repository sync attempt.
   *
   * @public
   */
  event: string | undefined;
}

/**
 * Detail data for a repository sync attempt activated by a push to a repository.
 *
 * @public
 */
export interface RepositorySyncAttempt {
  /**
   * The time when the sync attempt started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The sync attempt status.
   *
   * @public
   */
  status: RepositorySyncStatus | undefined;

  /**
   * Detail data for sync attempt events.
   *
   * @public
   */
  events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * The repository sync status detail data that's returned by Proton.
   *
   * @public
   */
  latestSync?: RepositorySyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetResourcesSummaryInput {}

/**
 * Summary counts of each Proton resource types.
 *
 * @public
 */
export interface ResourceCountsSummary {
  /**
   * The total number of resources of this type in the Amazon Web Services account.
   *
   * @public
   */
  total: number | undefined;

  /**
   * The number of resources of this type in the Amazon Web Services account that failed to deploy.
   *
   * @public
   */
  failed?: number | undefined;

  /**
   * The number of resources of this type in the Amazon Web Services account that are up-to-date with their template.
   *
   * @public
   */
  upToDate?: number | undefined;

  /**
   * The number of resources of this type in the Amazon Web Services account that need a major template version update.
   *
   * @public
   */
  behindMajor?: number | undefined;

  /**
   * The number of resources of this type in the Amazon Web Services account that need a minor template version update.
   *
   * @public
   */
  behindMinor?: number | undefined;
}

/**
 * Summary counts of each Proton resource type.
 *
 * @public
 */
export interface CountsSummary {
  /**
   * The total number of components in the Amazon Web Services account.
   *
   * The semantics of the `components` field are different from the semantics of results for other infrastructure-provisioning resources. That's because at this time components don't have associated templates, therefore they don't have the concept of staleness. The `components` object will only contain `total` and `failed` members.
   *
   * @public
   */
  components?: ResourceCountsSummary | undefined;

  /**
   * The staleness counts for Proton environments in the Amazon Web Services account. The `environments` object will only contain `total` members.
   *
   * @public
   */
  environments?: ResourceCountsSummary | undefined;

  /**
   * The total number of environment templates in the Amazon Web Services account. The `environmentTemplates` object will only contain `total` members.
   *
   * @public
   */
  environmentTemplates?: ResourceCountsSummary | undefined;

  /**
   * The staleness counts for Proton service instances in the Amazon Web Services account.
   *
   * @public
   */
  serviceInstances?: ResourceCountsSummary | undefined;

  /**
   * The staleness counts for Proton services in the Amazon Web Services account.
   *
   * @public
   */
  services?: ResourceCountsSummary | undefined;

  /**
   * The total number of service templates in the Amazon Web Services account. The `serviceTemplates` object will only contain `total` members.
   *
   * @public
   */
  serviceTemplates?: ResourceCountsSummary | undefined;

  /**
   * The staleness counts for Proton pipelines in the Amazon Web Services account.
   *
   * @public
   */
  pipelines?: ResourceCountsSummary | undefined;
}

/**
 * @public
 */
export interface GetResourcesSummaryOutput {
  /**
   * Summary counts of each Proton resource type.
   *
   * @public
   */
  counts: CountsSummary | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusInput {
  /**
   * The name of the service that the service instance belongs to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the service instance that you want the sync status input for.
   *
   * @public
   */
  serviceInstanceName: string | undefined;
}

/**
 * Revision detail data for a commit and push that activates a sync attempt
 *
 * @public
 */
export interface Revision {
  /**
   * The repository name.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The secure hash algorithm (SHA) hash for the revision.
   *
   * @public
   */
  sha: string | undefined;

  /**
   * The repository directory changed by a commit and push that activated the sync attempt.
   *
   * @public
   */
  directory: string | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;
}

/**
 * Detail data for a resource sync event.
 *
 * @public
 */
export interface ResourceSyncEvent {
  /**
   * The type of event.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The external ID for the event.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The time when the event occurred.
   *
   * @public
   */
  time: Date | undefined;

  /**
   * A resource sync event.
   *
   * @public
   */
  event: string | undefined;
}

/**
 * Detail data for a resource sync attempt activated by a push to a repository.
 *
 * @public
 */
export interface ResourceSyncAttempt {
  /**
   * Detail data for the initial repository commit, path and push.
   *
   * @public
   */
  initialRevision: Revision | undefined;

  /**
   * Detail data for the target revision.
   *
   * @public
   */
  targetRevision: Revision | undefined;

  /**
   * The resource that is synced to.
   *
   * @public
   */
  target: string | undefined;

  /**
   * The time when the sync attempt started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The status of the sync attempt.
   *
   * @public
   */
  status: ResourceSyncStatus | undefined;

  /**
   * An array of events with detail data.
   *
   * @public
   */
  events: ResourceSyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusOutput {
  /**
   * The detailed data of the latest sync with the service instance.
   *
   * @public
   */
  latestSync?: ResourceSyncAttempt | undefined;

  /**
   * The detailed data of the latest successful sync with the service instance.
   *
   * @public
   */
  latestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * The service instance sync desired state that's returned by Proton
   *
   * @public
   */
  desiredState?: Revision | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncStatusInput {
  /**
   * The template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The template type.
   *
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * The template major version.
   *
   * @public
   */
  templateVersion: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncStatusOutput {
  /**
   * The details of the last sync that's returned by Proton.
   *
   * @public
   */
  latestSync?: ResourceSyncAttempt | undefined;

  /**
   * The details of the last successful sync that's returned by Proton.
   *
   * @public
   */
  latestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * The template sync desired state that's returned by Proton.
   *
   * @public
   */
  desiredState?: Revision | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * The repository name.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The sync type. The only supported value is `TEMPLATE_SYNC`.
   *
   * @public
   */
  syncType: SyncType | undefined;

  /**
   * A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository sync definitions previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A repository sync definition.
 *
 * @public
 */
export interface RepositorySyncDefinition {
  /**
   * The resource that is synced to.
   *
   * @public
   */
  target: string | undefined;

  /**
   * The resource that is synced from.
   *
   * @public
   */
  parent: string | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The directory in the repository.
   *
   * @public
   */
  directory: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested list of repository sync definitions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of repository sync definitions.
   *
   * @public
   */
  syncDefinitions: RepositorySyncDefinition[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for the listed tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of tags to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A list of resource tags with detail data.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource tags.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyResourceDeploymentStatusChangeInput {
  /**
   * The provisioned resource Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The status of your provisioned resource.
   *
   * @public
   */
  status?: ResourceDeploymentStatus | undefined;

  /**
   * The provisioned resource state change detail data that's returned by Proton.
   *
   * @public
   */
  outputs?: Output[] | undefined;

  /**
   * The deployment ID for your provisioned resource.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The deployment status message for your provisioned resource.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface NotifyResourceDeploymentStatusChangeOutput {}

/**
 * @public
 */
export interface CreateRepositoryInput {
  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name (for example, `myrepos/myrepo`).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see [Setting up for Proton](https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html) in the *Proton User Guide*.
   *
   * @public
   */
  connectionArn: string | undefined;

  /**
   * The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Detailed data of a linked repository—a repository that has been registered with Proton.
 *
 * @public
 */
export interface Repository {
  /**
   * The Amazon Resource Name (ARN) of the linked repository.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account.
   *
   * @public
   */
  connectionArn: string | undefined;

  /**
   * Your customer Amazon Web Services KMS encryption key.
   *
   * @public
   */
  encryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryOutput {
  /**
   * The repository link's detail data that's returned by Proton.
   *
   * @public
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryInput {
  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryOutput {
  /**
   * The deleted repository link's detail data that's returned by Proton.
   *
   * @public
   */
  repository?: Repository | undefined;
}

/**
 * @public
 */
export interface GetRepositoryInput {
  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name, for example `myrepos/myrepo`.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryOutput {
  /**
   * The repository link's detail data that's returned by Proton.
   *
   * @public
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repositories to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of a linked repository—a repository that has been registered with Proton.
 *
 * @public
 */
export interface RepositorySummary {
  /**
   * The Amazon Resource Name (ARN) of the linked repository.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the of your connection that connects Proton to your repository.
   *
   * @public
   */
  connectionArn: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of repository links.
   *
   * @public
   */
  repositories: RepositorySummary[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsInput {
  /**
   * The name of the service instance whose outputs you want.
   *
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * The name of the service that `serviceInstanceName` is associated to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the deployment whose outputs you want.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsOutput {
  /**
   * A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of service instance Infrastructure as Code (IaC) outputs.
   *
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesInput {
  /**
   * The name of the service that `serviceInstanceName` is associated to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the service instance whose provisioned resources you want.
   *
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesOutput {
  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of provisioned resources for a service instance.
   *
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceInstanceInput {
  /**
   * The name of the service instance to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the service the service instance is added to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The spec for the service instance you want to create.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * To create a new major and minor version of the service template, *exclude* `major Version`.
   *
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * To create a new minor version of the service template, include a `major Version`.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton service instance. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The client token of the service instance to create.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceInstanceOutput {
  /**
   * The detailed data of the service instance being created.
   *
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceInput {
  /**
   * The name of a service instance that you want to get the detailed data for.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the service that you want the service instance input for.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceOutput {
  /**
   * The detailed data of the requested service instance.
   *
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * A filtering criterion to scope down the result list of the ListServiceInstances action.
 *
 * @public
 */
export interface ListServiceInstancesFilter {
  /**
   * The name of a filtering criterion.
   *
   * @public
   */
  key?: ListServiceInstancesFilterBy | undefined;

  /**
   * A value to filter by.
   *
   * With the date/time keys (`*At\{Before,After\}`), the value is a valid [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339.html) string with no UTC offset and with an optional fractional precision (for example, `1985-04-12T23:20:50.52Z`).
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstancesInput {
  /**
   * The name of the service that the service instance belongs to.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * A token that indicates the location of the next service in the array of service instances, after the list of service instances that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of service instances to list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of filtering criteria that scope down the result list. By default, all service instances in the Amazon Web Services account are returned.
   *
   * @public
   */
  filters?: ListServiceInstancesFilter[] | undefined;

  /**
   * The field that the result list is sorted by.
   *
   * When you choose to sort by `serviceName`, service instances within each service are sorted by service instance name.
   *
   * Default: `serviceName`
   *
   * @public
   */
  sortBy?: ListServiceInstancesSortBy | undefined;

  /**
   * Result list sort order.
   *
   * Default: `ASCENDING`
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Summary data of an Proton service instance resource.
 *
 * @public
 */
export interface ServiceInstanceSummary {
  /**
   * The name of the service instance.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the service instance was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when a deployment of the service was last attempted.
   *
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * The time when the service was last deployed successfully.
   *
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * The name of the service that the service instance belongs to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the environment that the service instance was deployed into.
   *
   * @public
   */
  environmentName: string | undefined;

  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The service instance template major version.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The service instance template minor version.
   *
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * The service instance deployment status.
   *
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * A service instance deployment status message.
   *
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * The ID of the last attempted deployment of this service instance.
   *
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * The ID of the last successful deployment of this service instance.
   *
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstancesOutput {
  /**
   * A token that indicates the location of the next service instance in the array of service instances, after the current requested list of service instances.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of service instances with summary data.
   *
   * @public
   */
  serviceInstances: ServiceInstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInstanceInput {
  /**
   * The name of the service instance to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the service that the service instance belongs to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The deployment type. It defines the mode for updating a service instance, as follows:
   *
   * - **`NONE`
   *
   *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated.
   *
   * - **`CURRENT_VERSION`
   *
   *   In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. *Don’t* include major or minor version parameters when you use this deployment type.
   *
   * - **`MINOR_VERSION`
   *
   *   In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.
   *
   * - **`MAJOR_VERSION`
   *
   *   In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.
   *
   * @public********
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * The formatted specification that defines the service instance update.
   *
   * @public
   */
  spec?: string | undefined;

  /**
   * The major version of the service template to update.
   *
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * The minor version of the service template to update.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * The client token of the service instance to update.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInstanceOutput {
  /**
   * The service instance summary data that's returned by Proton.
   *
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsInput {
  /**
   * The name of the service whose pipeline's outputs you want.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the deployment you want the outputs for.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsOutput {
  /**
   * A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of service pipeline Infrastructure as Code (IaC) outputs.
   *
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesInput {
  /**
   * The name of the service whose pipeline's provisioned resources you want.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesOutput {
  /**
   * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of provisioned resources for a service and pipeline.
   *
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateServicePipelineInput {
  /**
   * The name of the service to that the pipeline is associated with.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The spec for the service pipeline to update.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * The deployment type.
   *
   * There are four modes for updating a service pipeline. The `deploymentType` field defines the mode.
   *
   * - **`NONE`
   *
   *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated.
   *
   * - **`CURRENT_VERSION`
   *
   *   In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. *Don’t* include major or minor version parameters when you use this `deployment-type`.
   *
   * - **`MINOR_VERSION`
   *
   *   In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.
   *
   * - **`MAJOR_VERSION`
   *
   *   In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.
   *
   * @public********
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * The major version of the service template that was used to create the service that the pipeline is associated with.
   *
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * The minor version of the service template that was used to create the service that the pipeline is associated with.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServicePipelineOutput {
  /**
   * The pipeline details that are returned by Proton.
   *
   * @public
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface CreateServiceInput {
  /**
   * The service name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the Proton service.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the service template that's used to create the service.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the service template that was used to create the service.
   *
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * The minor version of the service template that was used to create the service.
   *
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format. *Don’t* include pipeline inputs in the spec if your service template *doesn’t* include a service pipeline. For more information, see [Create a service](https://docs.aws.amazon.com/proton/latest/userguide/ag-create-svc.html) in the *Proton User Guide*.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the repository connection. For more information, see [Setting up an AWS CodeStar connection](https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol) in the *Proton User Guide*. *Don't* include this parameter if your service template *doesn't* include a service pipeline.
   *
   * @public
   */
  repositoryConnectionArn?: string | undefined;

  /**
   * The ID of the code repository. *Don't* include this parameter if your service template *doesn't* include a service pipeline.
   *
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * The name of the code repository branch that holds the code that's deployed in Proton. *Don't* include this parameter if your service template *doesn't* include a service pipeline.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton service. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Detailed data of an Proton service resource.
 *
 * @public
 */
export interface Service {
  /**
   * The name of the service.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the service.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The time when the service was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the service was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The status of the service.
   *
   * @public
   */
  status: ServiceStatus | undefined;

  /**
   * A service status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The formatted specification that defines the service.
   *
   * @public
   */
  spec: string | undefined;

  /**
   * The service pipeline detail data.
   *
   * @public
   */
  pipeline?: ServicePipeline | undefined;

  /**
   * The Amazon Resource Name (ARN) of the repository connection. For more information, see [Setting up an AWS CodeStar connection](https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol) in the *Proton User Guide*.
   *
   * @public
   */
  repositoryConnectionArn?: string | undefined;

  /**
   * The ID of the source code repository.
   *
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * The name of the code repository branch that holds the code that's deployed in Proton.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceOutput {
  /**
   * The service detail data that's returned by Proton.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface DeleteServiceInput {
  /**
   * The name of the service to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceOutput {
  /**
   * The detailed data of the service being deleted.
   *
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceInput {
  /**
   * The name of the service that you want to get the detailed data for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceOutput {
  /**
   * The detailed data of the requested service.
   *
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * A token that indicates the location of the next service in the array of services, after the list of services that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of services to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of an Proton service resource.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * The name of the service.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the service.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The time when the service was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the service was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The status of the service.
   *
   * @public
   */
  status: ServiceStatus | undefined;

  /**
   * A service status message.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * A token that indicates the location of the next service in the array of services, after the current requested list of services.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of services with summaries of detail data.
   *
   * @public
   */
  services: ServiceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInput {
  /**
   * The name of the service to edit.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The edited service description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Lists the service instances to add and the existing service instances to remain. Omit the existing service instances to delete from the list. *Don't* include edits to the existing service instances or pipeline. For more information, see [Edit a service](https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-update.html) in the *Proton User Guide*.
   *
   * @public
   */
  spec?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceOutput {
  /**
   * The service detail data that's returned by Proton.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryInput {
  /**
   * The name of the service that you want to get the service sync blocker summary for. If given only the service name, all instances are blocked.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the service instance that you want to get the service sync blocker summary for. If given bothe the instance name and the service name, only the instance is blocked.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;
}

/**
 * Detailed data of the context of the sync blocker.
 *
 * @public
 */
export interface SyncBlockerContext {
  /**
   * The key for the sync blocker context.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the sync blocker context.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Detailed data of the sync blocker.
 *
 * @public
 */
export interface SyncBlocker {
  /**
   * The ID of the sync blocker.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the sync blocker.
   *
   * @public
   */
  type: BlockerType | undefined;

  /**
   * The status of the sync blocker.
   *
   * @public
   */
  status: BlockerStatus | undefined;

  /**
   * The reason why the sync blocker was created.
   *
   * @public
   */
  createdReason: string | undefined;

  /**
   * The time when the sync blocker was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The contexts for the sync blocker.
   *
   * @public
   */
  contexts?: SyncBlockerContext[] | undefined;

  /**
   * The reason the sync blocker was resolved.
   *
   * @public
   */
  resolvedReason?: string | undefined;

  /**
   * The time the sync blocker was resolved.
   *
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * If a service instance is manually updated, Proton wants to prevent accidentally overriding a manual change.
 *
 * A blocker is created because of the manual update or deletion of a service instance. The summary describes the blocker as being active or resolved.
 *
 * @public
 */
export interface ServiceSyncBlockerSummary {
  /**
   * The name of the service that you want to get the sync blocker summary for. If given a service instance name and a service name, it will return the blockers only applying to the instance that is blocked.
   *
   * If given only a service name, it will return the blockers that apply to all of the instances. In order to get the blockers for a single instance, you will need to make two distinct calls, one to get the sync blocker summary for the service and the other to get the sync blocker for the service instance.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the service instance that you want sync your service configuration with.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The latest active blockers for the synced service.
   *
   * @public
   */
  latestBlockers?: SyncBlocker[] | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryOutput {
  /**
   * The detailed data of the requested service sync blocker summary.
   *
   * @public
   */
  serviceSyncBlockerSummary?: ServiceSyncBlockerSummary | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerInput {
  /**
   * The ID of the service sync blocker.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The reason the service sync blocker was resolved.
   *
   * @public
   */
  resolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerOutput {
  /**
   * The name of the service that you want to update the service sync blocker for.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the service instance that you want to update the service sync blocker for.
   *
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * The detailed data on the service sync blocker that was updated.
   *
   * @public
   */
  serviceSyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigInput {
  /**
   * The name of the service the Proton Ops file is for.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The provider type for your repository.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The repository name.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository branch for your Proton Ops file.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The path to the Proton Ops file.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * Detailed data of the service sync configuration.
 *
 * @public
 */
export interface ServiceSyncConfig {
  /**
   * The name of the service that the service instance is added to.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the repository provider that holds the repository Proton will sync with.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The name of the code repository that holds the service code Proton will sync with.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the code repository branch that holds the service code Proton will sync with.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The file path to the service sync configuration file.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigOutput {
  /**
   * The detailed data of the Proton Ops file.
   *
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigInput {
  /**
   * The name of the service that you want to delete the service sync configuration for.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigOutput {
  /**
   * The detailed data for the service sync config.
   *
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncConfigInput {
  /**
   * The name of the service that you want to get the service sync configuration for.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncConfigOutput {
  /**
   * The detailed data of the requested service sync configuration.
   *
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigInput {
  /**
   * The name of the service the Proton Ops file is for.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the repository provider where the Proton Ops file is found.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The name of the repository where the Proton Ops file is found.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the code repository branch where the Proton Ops file is found.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * The path to the Proton Ops file.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigOutput {
  /**
   * The detailed data of the Proton Ops file.
   *
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateInput {
  /**
   * The name of the service template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the service template as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A customer provided encryption key that's used to encrypt data.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * By default, Proton provides a service pipeline for your service. When this parameter is included, it indicates that an Proton service pipeline *isn't* provided for your service. After it's included, it *can't* be changed. For more information, see [Template bundles](https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles) in the *Proton User Guide*.
   *
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Detailed data of an Proton service template resource.
 *
 * @public
 */
export interface ServiceTemplate {
  /**
   * The name of the service template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the service template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the service template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The service template name as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The recommended version of the service template.
   *
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * The customer provided service template encryption key that's used to encrypt data.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * If `pipelineProvisioning` is `true`, a service pipeline is included in the service template. Otherwise, a service pipeline *isn't* included in the service template.
   *
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateOutput {
  /**
   * The service template detail data that's returned by Proton.
   *
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateInput {
  /**
   * The name of the service template to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateOutput {
  /**
   * The detailed data of the service template being deleted.
   *
   * @public
   */
  serviceTemplate?: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateInput {
  /**
   * The name of the service template that you want to get detailed data for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateOutput {
  /**
   * The detailed data of the requested service template.
   *
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplatesInput {
  /**
   * A token that indicates the location of the next service template in the array of service templates, after the list of service templates previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of service templates to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary data of an Proton service template resource.
 *
 * @public
 */
export interface ServiceTemplateSummary {
  /**
   * The name of the service template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the service template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the service template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * The service template name as displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The recommended version of the service template.
   *
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * If `pipelineProvisioning` is `true`, a service pipeline is included in the service template, otherwise a service pipeline *isn't* included in the service template.
   *
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplatesOutput {
  /**
   * A token that indicates the location of the next service template in the array of service templates, after the current requested list of service templates.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of service templates with detail data.
   *
   * @public
   */
  templates: ServiceTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateInput {
  /**
   * The name of the service template to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the service template to update that's displayed in the developer interface.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the service template update.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateOutput {
  /**
   * The service template detail data that's returned by Proton.
   *
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * Compatible environment template data.
 *
 * @public
 */
export interface CompatibleEnvironmentTemplateInput {
  /**
   * The compatible environment template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the compatible environment template.
   *
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateVersionInput {
  /**
   * When included, if two identical requests are made with the same client token, Proton returns the service template version that the first request created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the new version of a service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * To create a new minor version of the service template, include a `major Version`.
   *
   * To create a new major and minor version of the service template, *exclude* `major Version`.
   *
   * @public
   */
  majorVersion?: string | undefined;

  /**
   * An object that includes the template bundle S3 bucket path and name for the new version of a service template.
   *
   * @public
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * An array of environment template objects that are compatible with the new service template version. A service instance based on this service template version can run in environments based on compatible templates.
   *
   * @public
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * An optional list of metadata items that you can associate with the Proton service template version. A tag is a key-value pair.
   *
   * For more information, see [Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *Proton User Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * Compatible environment template data.
 *
 * @public
 */
export interface CompatibleEnvironmentTemplate {
  /**
   * The compatible environment template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The major version of the compatible environment template.
   *
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * Detailed data of an Proton service template version resource.
 *
 * @public
 */
export interface ServiceTemplateVersion {
  /**
   * The name of the version of a service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The latest major version that's associated with the version of a service template.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The minor version of a service template.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * The recommended minor version of the service template.
   *
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * The service template version status.
   *
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * A service template version status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A description of the version of a service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the version of a service template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the version of a service template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the version of a service template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * An array of compatible environment template names for the major version of a service template.
   *
   * @public
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[] | undefined;

  /**
   * The schema of the version of a service template.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateVersionOutput {
  /**
   * The service template version summary of detail data that's returned by Proton.
   *
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionInput {
  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The service template major version to delete.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The service template minor version to delete.
   *
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionOutput {
  /**
   * The detailed data of the service template version being deleted.
   *
   * @public
   */
  serviceTemplateVersion?: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionInput {
  /**
   * The name of the service template a version of which you want to get detailed data for.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To get service template major version detail data, include `major Version`.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * To get service template minor version detail data, include `minorVersion`.
   *
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionOutput {
  /**
   * The detailed data of the requested service template version.
   *
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsInput {
  /**
   * A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the list of major or minor versions that was previously requested.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of major or minor versions of a service template to list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To view a list of minor of versions under a major version of a service template, include `major Version`.
   *
   * To view a list of major versions of a service template, *exclude* `major Version`.
   *
   * @public
   */
  majorVersion?: string | undefined;
}

/**
 * Summary data of an Proton service template version resource.
 *
 * @public
 */
export interface ServiceTemplateVersionSummary {
  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The latest major version that's associated with the version of a service template.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * The minor version of a service template.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * The recommended minor version of the service template.
   *
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * The service template minor version status.
   *
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * A service template minor version status message.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A description of the version of a service template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the version of a service template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the version of a service template was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the version of a service template was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsOutput {
  /**
   * A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the current requested list of service major or minor versions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of major or minor versions of a service template with detail data.
   *
   * @public
   */
  templateVersions: ServiceTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionInput {
  /**
   * The name of the service template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * To update a major version of a service template, include `major Version`.
   *
   * @public
   */
  majorVersion: string | undefined;

  /**
   * To update a minor version of a service template, include `minorVersion`.
   *
   * @public
   */
  minorVersion: string | undefined;

  /**
   * A description of a service template version to update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the service template minor version to update.
   *
   * @public
   */
  status?: TemplateVersionStatus | undefined;

  /**
   * An array of environment template objects that are compatible with this service template version. A service instance based on this service template version can run in environments based on compatible templates.
   *
   * @public
   */
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version.
   *
   * > **Note:** A change to `supportedComponentSources` doesn't impact existing component attachments to instances based on this template version. A change only affects later associations.
   *
   * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
   *
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionOutput {
  /**
   * The service template version detail data that's returned by Proton.
   *
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of customer tags to apply to the Proton resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface CreateTemplateSyncConfigInput {
  /**
   * The name of your registered template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The type of the registered template.
   *
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * The provider type for your repository.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The repository name (for example, `myrepos/myrepo`).
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository branch for your template.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this repository directory.
   *
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * The detail data for a template sync configuration.
 *
 * @public
 */
export interface TemplateSyncConfig {
  /**
   * The template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The template type.
   *
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The repository name (for example, `myrepos/myrepo`).
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository branch.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * A subdirectory path to your template bundle version.
   *
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSyncConfigOutput {
  /**
   * The template sync configuration detail data that's returned by Proton.
   *
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigInput {
  /**
   * The template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The template type.
   *
   * @public
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigOutput {
  /**
   * The template sync configuration detail data that's returned by Proton.
   *
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigInput {
  /**
   * The template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The template type.
   *
   * @public
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigOutput {
  /**
   * The template sync configuration detail data that's returned by Proton.
   *
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigInput {
  /**
   * The synced template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The synced template type.
   *
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * The repository provider.
   *
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * The repository name (for example, `myrepos/myrepo`).
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The repository branch for your template.
   *
   * @public
   */
  branch: string | undefined;

  /**
   * A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.
   *
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigOutput {
  /**
   * The template sync configuration detail data that's returned by Proton.
   *
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove customer tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of customer tag keys that indicate the customer tags to be removed from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
