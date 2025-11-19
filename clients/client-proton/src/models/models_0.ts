// smithy-typescript generated code
/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentAccountConnectionStatus = {
  CONNECTED: "CONNECTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type EnvironmentAccountConnectionStatus =
  (typeof EnvironmentAccountConnectionStatus)[keyof typeof EnvironmentAccountConnectionStatus];

/**
 * <p>Detailed data of an Proton environment account connection resource.</p>
 * @public
 */
export interface EnvironmentAccountConnection {
  /**
   * <p>The ID of the environment account connection.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * <p>The environment account that's connected to the environment account connection.</p>
   * @public
   */
  environmentAccountId: string | undefined;

  /**
   * <p>The IAM service role that's associated with the environment account connection.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the environment that's associated with the environment account connection.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The time when the environment account connection request was made.</p>
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * <p>The time when the environment account connection was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the environment account connection.</p>
   * @public
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection data that's returned by Proton.</p>
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 * @enum
 */
export const RepositoryProvider = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
} as const;

/**
 * @public
 */
export type RepositoryProvider = (typeof RepositoryProvider)[keyof typeof RepositoryProvider];

/**
 * <p>Detail data for a linked repository branch.</p>
 * @public
 */
export interface RepositoryBranch {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;
}

/**
 * <p>Proton settings that are used for multiple services in the Amazon Web Services account.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by
   *       customer-owned automation for self-managed provisioning.</p>
   * @public
   */
  pipelineServiceRoleArn?: string | undefined;

  /**
   * <p>The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include
   *       pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   * @public
   */
  pipelineProvisioningRepository?: RepositoryBranch | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *       provisioning.</p>
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
   * <p>The Proton pipeline service role detail data that's returned by Proton.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * <p>Detail input data for a linked repository branch.</p>
 * @public
 */
export interface RepositoryBranchInput {
  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed
   *    provisioning, and by customer-owned automation for self-managed provisioning.</p>
   *          <p>To remove a previously configured ARN, specify an empty string.</p>
   * @public
   */
  pipelineServiceRoleArn?: string | undefined;

  /**
   * <p>A linked repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that
   *    include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To remove a previously configured repository, set <code>deletePipelineProvisioningRepository</code> to <code>true</code>, and don't set
   *     <code>pipelineProvisioningRepository</code>.</p>
   * @public
   */
  pipelineProvisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * <p>Set to <code>true</code> to remove a configured pipeline repository from the account settings. Don't set this field if you are updating the
   *    configured pipeline repository.</p>
   * @public
   */
  deletePipelineProvisioningRepository?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *    provisioning.</p>
   * @public
   */
  pipelineCodebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * <p>The Proton pipeline service role and repository data shared across the Amazon Web Services account.</p>
   * @public
   */
  accountSettings: AccountSettings | undefined;
}

/**
 * @public
 */
export interface CancelComponentDeploymentInput {
  /**
   * <p>The name of the component with the deployment to cancel.</p>
   * @public
   */
  componentName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * <p>Detailed data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @public
 */
export interface Component {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the Proton environment that this component is associated with.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The time when the component was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the component was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The time when a deployment of the component was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt?: Date | undefined;

  /**
   * <p>The time when the component was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt?: Date | undefined;

  /**
   * <p>The component deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>The message associated with the component deployment status.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * <p>The last token the client requested.</p>
   * @public
   */
  lastClientRequestToken?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this component.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this component.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelComponentDeploymentOutput {
  /**
   * <p>The detailed data of the component with the deployment that is being canceled.</p>
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentInput {
  /**
   * <p>The name of the environment with the deployment to cancel.</p>
   * @public
   */
  environmentName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Provisioning = {
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type Provisioning = (typeof Provisioning)[keyof typeof Provisioning];

/**
 * <p>Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time when the environment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the environment was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the environment was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The environment deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>An environment deployment status message.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * <p>The ID of the environment account connection that's used to provision infrastructure resources in an environment account.</p>
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   * @public
   */
  environmentAccountId?: string | undefined;

  /**
   * <p>The environment spec.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed
   *    provisioning. A linked repository is a repository that has been registered with Proton. For more information, see
   *     <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html">CreateRepository</a>.</p>
   * @public
   */
  provisioningRepository?: RepositoryBranch | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this environment.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this environment.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentOutput {
  /**
   * <p>The environment summary data that's returned by Proton.</p>
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentInput {
  /**
   * <p>The name of the service instance with the deployment to cancel.</p>
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>The name of the service with the service instance deployment to cancel.</p>
   * @public
   */
  serviceName: string | undefined;
}

/**
 * <p>Detailed data of an Proton service instance resource.</p>
 * @public
 */
export interface ServiceInstance {
  /**
   * <p>The name of the service instance.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the service instance was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service instance was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service instance was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the environment that the service instance was deployed into.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service template that was used to create the service instance.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service
   *       instance.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service
   *       instance.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The service instance deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>The message associated with the service instance deployment status.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The service spec that was used to create the service instance.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The last client request token received.</p>
   * @public
   */
  lastClientRequestToken?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this service instance.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this service instance.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentOutput {
  /**
   * <p>The service instance summary data that's returned by Proton.</p>
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentInput {
  /**
   * <p>The name of the service with the service pipeline deployment to cancel.</p>
   * @public
   */
  serviceName: string | undefined;
}

/**
 * <p>Detailed data of an Proton service instance pipeline resource.</p>
 * @public
 */
export interface ServicePipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the service pipeline.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the service pipeline was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service pipeline was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service pipeline was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service template that was used to create the service pipeline.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The deployment status of the service pipeline.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>A service pipeline deployment status message.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The service spec that was used to create the service pipeline.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this service pipeline.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this service pipeline.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentOutput {
  /**
   * <p>The service pipeline detail data that's returned by Proton.</p>
   * @public
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface ListComponentOutputsInput {
  /**
   * <p>The name of the component whose outputs you want.</p>
   * @public
   */
  componentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the deployment whose outputs you want.</p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * <p>An infrastructure as code defined resource output.</p>
 * @public
 */
export interface Output {
  /**
   * <p>The output key.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The output value.</p>
   * @public
   */
  valueString?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of component Infrastructure as Code (IaC) outputs.</p>
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesInput {
  /**
   * <p>The name of the component whose provisioned resources you want.</p>
   * @public
   */
  componentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources
   *       that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedResourceEngine = {
  CLOUDFORMATION: "CLOUDFORMATION",
  TERRAFORM: "TERRAFORM",
} as const;

/**
 * @public
 */
export type ProvisionedResourceEngine = (typeof ProvisionedResourceEngine)[keyof typeof ProvisionedResourceEngine];

/**
 * <p>Detail data for a provisioned resource.</p>
 * @public
 */
export interface ProvisionedResource {
  /**
   * <p>The provisioned resource name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The provisioned resource identifier.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The resource provisioning engine. At this time, <code>CLOUDFORMATION</code> can be used for Amazon Web Services-managed provisioning, and <code>TERRAFORM</code> can
   *       be used for self-managed provisioning.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
   * @public
   */
  provisioningEngine?: ProvisionedResourceEngine | undefined;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of
   *       provisioned resources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of provisioned resources for a component.</p>
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * <p>A description of a resource tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the resource tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the resource tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentInput {
  /**
   * <p>The customer-provided name of the component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional customer-provided description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. If you don't specify this, the component isn't attached to any
   *       service instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service
   *       instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify
   *         <code>serviceInstanceName</code> and <code>serviceName</code>.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   * @public
   */
  templateFile: string | undefined;

  /**
   * <p>A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom
   *       component provisions.</p>
   * @public
   */
  manifest: string | undefined;

  /**
   * <p>The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service
   *       instance.</p>
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The client token for the created component.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentOutput {
  /**
   * <p>The detailed data of the created component.</p>
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface DeleteComponentInput {
  /**
   * <p>The name of the component to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentOutput {
  /**
   * <p>The detailed data of the component being deleted.</p>
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * <p>The name of the component that you want to get the detailed data for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * <p>The detailed data of the requested component.</p>
   * @public
   */
  component?: Component | undefined;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * <p>A token that indicates the location of the next component in the array of components, after the list of components that was previously
   *       requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of an environment for result list filtering. Proton returns components associated with the environment or attached to service instances
   *       running in it.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The name of a service for result list filtering. Proton returns components attached to service instances of the service.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of a service instance for result list filtering. Proton returns the component attached to the service instance, if any.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The maximum number of components to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @public
 */
export interface ComponentSummary {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the Proton environment that this component is associated with.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The time when the component was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the component was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The time when a deployment of the component was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt?: Date | undefined;

  /**
   * <p>The time when the component was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt?: Date | undefined;

  /**
   * <p>The component deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>The message associated with the component deployment status.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this component.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this component.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * <p>A token that indicates the location of the next component in the array of components, after the current requested list of components.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of components with summary data.</p>
   * @public
   */
  components: ComponentSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ComponentDeploymentUpdateType = {
  CURRENT_VERSION: "CURRENT_VERSION",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ComponentDeploymentUpdateType =
  (typeof ComponentDeploymentUpdateType)[keyof typeof ComponentDeploymentUpdateType];

/**
 * @public
 */
export interface UpdateComponentInput {
  /**
   * <p>The name of the component to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The deployment type. It defines the mode for updating a component, as follows:</p>
   *          <dl>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>NONE</code>
   *                </p>
   *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated. You can only specify
   *               <code>description</code> in this mode.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                <p>In this mode, the component is deployed and updated with the new <code>serviceSpec</code>, <code>templateSource</code>, and/or <code>type</code>
   *             that you provide. Only requested parameters are updated.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  deploymentType: ComponentDeploymentUpdateType | undefined;

  /**
   * <p>An optional customer-provided description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Don't specify to keep the component's current service instance
   *       attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance that you want to attach this component to. Don't specify to keep the component's current service instance attachment.
   *       Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The service spec that you want the component to use to access service inputs. Set this only when the component is attached to a service
   *       instance.</p>
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   * @public
   */
  templateFile?: string | undefined;

  /**
   * <p>The client token for the updated component.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComponentOutput {
  /**
   * <p>The detailed data of the updated component.</p>
   * @public
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * <p>The ID of the deployment to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>The detailed data about the current state of the component.</p>
 * @public
 */
export interface ComponentState {
  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</p>
   * @public
   */
  serviceSpec?: string | undefined;

  /**
   * <p>The template file used.</p>
   * @public
   */
  templateFile?: string | undefined;
}

/**
 * <p>The detailed data about the current state of the environment.</p>
 * @public
 */
export interface EnvironmentState {
  /**
   * <p>The environment spec that was used to create the environment.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The name of the environment template that was used to create the environment.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template that was used to create the environment.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template that was used to create the environment.</p>
   * @public
   */
  templateMinorVersion: string | undefined;
}

/**
 * <p>The detailed data about the current state of this service instance.</p>
 * @public
 */
export interface ServiceInstanceState {
  /**
   * <p>The service spec that was used to create the service instance.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>The name of the service template that was used to create the service instance.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The IDs for the last successful components deployed for this service instance.</p>
   * @public
   */
  lastSuccessfulComponentDeploymentIds?: string[] | undefined;

  /**
   * <p>The ID for the last successful environment deployed for this service instance.</p>
   * @public
   */
  lastSuccessfulEnvironmentDeploymentId?: string | undefined;

  /**
   * <p>The ID for the last successful service pipeline deployed for this service instance.</p>
   * @public
   */
  lastSuccessfulServicePipelineDeploymentId?: string | undefined;
}

/**
 * <p>The detailed data about the current state of the service pipeline.</p>
 * @public
 */
export interface ServicePipelineState {
  /**
   * <p>The service spec that was used to create the service pipeline.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The name of the service template that was used to create the service pipeline.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   * @public
   */
  templateMinorVersion: string | undefined;
}

/**
 * <p>The detailed data about the current state of the deployment.</p>
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
   * <p>The state of the service instance associated with the deployment.</p>
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
   * <p>The state of the environment associated with the deployment.</p>
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
   * <p>The state of the service pipeline associated with the deployment.</p>
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
   * <p>The state of the component associated with the deployment.</p>
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
 * @public
 * @enum
 */
export const DeploymentTargetResourceType = {
  COMPONENT: "COMPONENT",
  ENVIRONMENT: "ENVIRONMENT",
  SERVICE_INSTANCE: "SERVICE_INSTANCE",
  SERVICE_PIPELINE: "SERVICE_PIPELINE",
} as const;

/**
 * @public
 */
export type DeploymentTargetResourceType =
  (typeof DeploymentTargetResourceType)[keyof typeof DeploymentTargetResourceType];

/**
 * <p>The detailed information about a deployment.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of the deployment.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>The date and time the depoyment target was created.</p>
   * @public
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * <p>The resource type of the deployment target. It can be an environment, service, service instance, or component.</p>
   * @public
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * <p>The name of the environment associated with this deployment.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service in this deployment.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the deployment's service instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The name of the component associated with this deployment.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>The deployment status message.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The date and time the deployment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the deployment was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The date and time the deployment was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The ID of the last attempted deployment.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;

  /**
   * <p>The initial state of the target resource at the time of the deployment.</p>
   * @public
   */
  initialState?: DeploymentState | undefined;

  /**
   * <p>The target state of the target resource at the time of the deployment.</p>
   * @public
   */
  targetState?: DeploymentState | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentOutput {
  /**
   * <p>The detailed data of the deployment being deleted.</p>
   * @public
   */
  deployment?: Deployment | undefined;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * <p>The ID of the deployment that you want to get the detailed data for.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of a environment that you want to get the detailed data for.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The name of the service associated with the given deployment ID.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance associated with the given deployment ID. <code>serviceName</code> must be specified to identify the service
   *    instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The name of a component that you want to get the detailed data for.</p>
   * @public
   */
  componentName?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * <p>The detailed data of the requested deployment.</p>
   * @public
   */
  deployment?: Deployment | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * <p>A token that indicates the location of the next deployment in the array of deployment, after the list of deployment that was previously
   *    requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of an environment for result list filtering. Proton returns deployments associated with the environment.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The name of a service for result list filtering. Proton returns deployments associated with service instances of the service.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of a service instance for result list filtering. Proton returns the deployments associated with the service instance.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The name of a component for result list filtering. Proton returns deployments associated with that component.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>The maximum number of deployments to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of the deployment.</p>
 * @public
 */
export interface DeploymentSummary {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of the deployment.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>The date and time the target resource was created.</p>
   * @public
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * <p>The resource type of the deployment target. It can be an environment, service, service instance, or component.</p>
   * @public
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * <p>The date and time the deployment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the deployment was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The date and time the deployment was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The name of the environment associated with the deployment.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service associated with the deployment.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>The name of the service instance associated with the deployment.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The name of the component associated with the deployment.</p>
   * @public
   */
  componentName?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;

  /**
   * <p>The current status of the deployment.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * <p>A token that indicates the location of the next deployment in the array of deployment, after the current requested list of deployment.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of deployment with summary data.</p>
   * @public
   */
  deployments: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionInput {
  /**
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first
   *       request created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this
   *       account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment
   *       infrastructure resources in the associated environment account.</p>
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure
   *       resources in the associated environment account.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The name of the Proton environment that's created in the associated management account.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in this
   *       account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by Proton.</p>
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionOutput {
  /**
   * <p>The detailed data of the environment account connection being deleted.</p>
   * @public
   */
  environmentAccountConnection?: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection that you want to get the detailed data for.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionOutput {
  /**
   * <p>The detailed data of the requested environment account connection.</p>
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentAccountConnectionRequesterAccountType = {
  ENVIRONMENT_ACCOUNT: "ENVIRONMENT_ACCOUNT",
  MANAGEMENT_ACCOUNT: "MANAGEMENT_ACCOUNT",
} as const;

/**
 * @public
 */
export type EnvironmentAccountConnectionRequesterAccountType =
  (typeof EnvironmentAccountConnectionRequesterAccountType)[keyof typeof EnvironmentAccountConnectionRequesterAccountType];

/**
 * @public
 */
export interface ListEnvironmentAccountConnectionsInput {
  /**
   * <p>The type of account making the <code>ListEnvironmentAccountConnections</code> request.</p>
   * @public
   */
  requestedBy: EnvironmentAccountConnectionRequesterAccountType | undefined;

  /**
   * <p>The environment name that's associated with each listed environment account connection.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The status details for each listed environment account connection.</p>
   * @public
   */
  statuses?: EnvironmentAccountConnectionStatus[] | undefined;

  /**
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of
   *       environment account connections that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of environment account connections to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of an Proton environment account connection resource.</p>
 * @public
 */
export interface EnvironmentAccountConnectionSummary {
  /**
   * <p>The ID of the environment account connection.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   * @public
   */
  managementAccountId: string | undefined;

  /**
   * <p>The ID of the environment account that's connected to the environment account connection.</p>
   * @public
   */
  environmentAccountId: string | undefined;

  /**
   * <p>The IAM service role that's associated with the environment account connection.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the environment that's associated with the environment account connection.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The time when the environment account connection request was made.</p>
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * <p>The time when the environment account connection was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the environment account connection.</p>
   * @public
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentAccountConnectionsOutput {
  /**
   * <p>An array of environment account connections with details that's returned by Proton. </p>
   * @public
   */
  environmentAccountConnections: EnvironmentAccountConnectionSummary[] | undefined;

  /**
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the current
   *       requested list of environment account connections.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to reject.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment connection account detail data that's returned by Proton.</p>
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by Proton.</p>
   * @public
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsInput {
  /**
   * <p>The environment name.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was
   *       previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the deployment whose outputs you want.</p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsOutput {
  /**
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of
   *       environment outputs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of environment outputs with detail data.</p>
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesInput {
  /**
   * <p>The environment name.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of
   *       environment provisioned resources that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested
   *       list of environment provisioned resources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of environment provisioned resources.</p>
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the environment template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * <p>A description of the environment that's being created and deployed.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> in the <i>Proton User
   *       Guide</i>.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * <p>The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment
   *       account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To use self-managed provisioning for the environment, specify this parameter and omit the <code>environmentAccountConnectionId</code> and
   *         <code>protonServiceRoleArn</code> parameters.</p>
   * @public
   */
  provisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with this environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   *          <p>To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the
   *       <code>environmentAccountConnectionId</code> or <code>codebuildRoleArn</code> parameter.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by Proton.</p>
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the environment to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentOutput {
  /**
   * <p>The detailed data of the environment being deleted.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * <p>The name of the environment that you want to get the detailed data for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * <p>The detailed data of the requested environment.</p>
   * @public
   */
  environment: Environment | undefined;
}

/**
 * <p>A search filter for environment templates.</p>
 * @public
 */
export interface EnvironmentTemplateFilter {
  /**
   * <p>Include <code>templateName</code> to filter search for a template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>Include <code>majorVersion</code> to filter search for a major version.</p>
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * <p>A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously
   *       requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of environments to list.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of the versions of the environment template.</p>
   * @public
   */
  environmentTemplates?: EnvironmentTemplateFilter[] | undefined;
}

/**
 * <p>Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time when the environment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the environment was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the environment was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The environment deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>An environment deployment status message.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * <p>The ID of the environment account connection that the environment is associated with.</p>
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   * @public
   */
  environmentAccountId?: string | undefined;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this environment.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this environment.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * <p>A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of environment detail data summaries.</p>
   * @public
   */
  environments: EnvironmentSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentUpdateType = {
  CURRENT_VERSION: "CURRENT_VERSION",
  MAJOR_VERSION: "MAJOR_VERSION",
  MINOR_VERSION: "MINOR_VERSION",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type DeploymentUpdateType = (typeof DeploymentUpdateType)[keyof typeof DeploymentUpdateType];

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * <p>The name of the environment to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the environment update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The formatted specification that defines the update.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The major version of the environment to update.</p>
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * <p>The minor version of the environment to update.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.</p>
   * @public
   */
  protonServiceRoleArn?: string | undefined;

  /**
   * <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p>
   *          <dl>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>NONE</code>
   *                </p>
   *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated.
   *               <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in
   *             use, by default. You can also specify a different minor version of the current major version in use.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template,
   *             by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).</p>
   *             </dd>
   *          </dl>
   * @public
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * <p>The ID of the environment account connection.</p>
   *          <p>You can only update to a new environment account connection if it was created in the same environment account that the current environment account
   *       connection was created in and is associated with the current environment.</p>
   * @public
   */
  environmentAccountConnectionId?: string | undefined;

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   * @public
   */
  provisioningRepository?: RepositoryBranchInput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  componentRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   * @public
   */
  codebuildRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by Proton.</p>
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The environment template name as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A customer provided encryption key that Proton uses to encrypt data.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   * @public
   */
  provisioning?: Provisioning | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The environment template data.</p>
 * @public
 */
export interface EnvironmentTemplate {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the environment template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the environment template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The name of the environment template as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the recommended version of the environment template.</p>
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * <p>The customer provided encryption key for the environment template.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   * @public
   */
  provisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateOutput {
  /**
   * <p>The detailed data of the environment template being deleted.</p>
   * @public
   */
  environmentTemplate?: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template that you want to get the detailed data for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateOutput {
  /**
   * <p>The detailed data of the requested environment template.</p>
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesInput {
  /**
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates
   *       that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of environment templates to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The environment template data.</p>
 * @public
 */
export interface EnvironmentTemplateSummary {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the environment template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the environment template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The name of the environment template as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The recommended version of the environment template.</p>
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   * @public
   */
  provisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesOutput {
  /**
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of
   *       environment templates.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of environment templates with detail data.</p>
   * @public
   */
  templates: EnvironmentTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the environment template to update as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the environment template update.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   * @public
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * <p>Template bundle S3 bucket data.</p>
 * @public
 */
export interface S3ObjectSource {
  /**
   * <p>The name of the S3 bucket that contains a template bundle.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The path to the S3 bucket that contains a template bundle.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * <p>Template version source data.</p>
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
   * <p>An S3 source object that includes the template bundle S3 path and name for a template minor version.</p>
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
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first
   *       request created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the new version of an environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>To create a new minor version of the environment template, include <code>major Version</code>.</p>
   *          <p>To create a new major and minor version of the environment template, exclude <code>major Version</code>.</p>
   * @public
   */
  majorVersion?: string | undefined;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of an template.</p>
   * @public
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateVersionStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
  REGISTRATION_IN_PROGRESS: "REGISTRATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TemplateVersionStatus = (typeof TemplateVersionStatus)[keyof typeof TemplateVersionStatus];

/**
 * <p>The environment template version data.</p>
 * @public
 */
export interface EnvironmentTemplateVersion {
  /**
   * <p>The name of the version of an environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of an environment template.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of an environment template.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the environment template.</p>
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * <p>The status of the version of an environment template.</p>
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * <p>The status message of the version of an environment template.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>A description of the minor version of an environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of an environment template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of an environment template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The schema of the version of an environment template.</p>
   * @public
   */
  schema?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The environment template major version to delete.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The environment template minor version to delete.</p>
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionOutput {
  /**
   * <p>The detailed data of the environment template version being deleted.</p>
   * @public
   */
  environmentTemplateVersion?: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template a version of which you want to get detailed data for.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To get environment template major version detail data, include <code>major Version</code>.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>To get environment template minor version detail data, include <code>minorVersion</code>.</p>
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionOutput {
  /**
   * <p>The detailed data of the requested environment template version.</p>
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsInput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of major or minor versions of an environment template to list.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To view a list of minor of versions under a major version of an environment template, include <code>major Version</code>.</p>
   *          <p>To view a list of major versions of an environment template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   * @public
   */
  majorVersion?: string | undefined;
}

/**
 * <p>A summary of the version of an environment template detail data.</p>
 * @public
 */
export interface EnvironmentTemplateVersionSummary {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of an environment template.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The version of an environment template.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the environment template.</p>
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * <p>The status of the version of an environment template.</p>
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * <p>The status message of the version of an environment template.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>A description of the version of an environment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of an environment template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of an environment template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsOutput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of major or minor versions of an environment template detail data.</p>
   * @public
   */
  templateVersions: EnvironmentTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of an environment template, include <code>major Version</code>.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>To update a minor version of an environment template, include <code>minorVersion</code>.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>A description of environment template version to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the environment template minor version to update.</p>
   * @public
   */
  status?: TemplateVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template version detail data that's returned by Proton.</p>
   * @public
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncType = {
  /**
   *     Syncs services and service instances to Proton.
   *
   */
  SERVICE_SYNC: "SERVICE_SYNC",
  /**
   *     Syncs environment and service templates to Proton.
   *
   */
  TEMPLATE_SYNC: "TEMPLATE_SYNC",
} as const;

/**
 * @public
 */
export type SyncType = (typeof SyncType)[keyof typeof SyncType];

/**
 * @public
 */
export interface GetRepositorySyncStatusInput {
  /**
   * <p>The repository name.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>The repository sync type.</p>
   * @public
   */
  syncType: SyncType | undefined;
}

/**
 * <p>Repository sync event detail data for a sync attempt.</p>
 * @public
 */
export interface RepositorySyncEvent {
  /**
   * <p>The type of event.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The external ID of the sync event.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The time that the sync event occurred.</p>
   * @public
   */
  time: Date | undefined;

  /**
   * <p>Event detail for a repository sync attempt.</p>
   * @public
   */
  event: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RepositorySyncStatus = {
  /**
   *     The repository sync attempt has failed.
   *
   */
  FAILED: "FAILED",
  /**
   *    A repository sync attempt has been created and will begin soon.
   *
   */
  INITIATED: "INITIATED",
  /**
   *     A repository sync attempt has started and work is being done to reconcile the branch.
   *
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   *     The repository sync attempt didn't execute and was queued.
   *
   */
  QUEUED: "QUEUED",
  /**
   *     The repository sync attempt has completed successfully.
   *
   */
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type RepositorySyncStatus = (typeof RepositorySyncStatus)[keyof typeof RepositorySyncStatus];

/**
 * <p>Detail data for a repository sync attempt activated by a push to a repository.</p>
 * @public
 */
export interface RepositorySyncAttempt {
  /**
   * <p>The time when the sync attempt started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The sync attempt status.</p>
   * @public
   */
  status: RepositorySyncStatus | undefined;

  /**
   * <p>Detail data for sync attempt events.</p>
   * @public
   */
  events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * <p>The repository sync status detail data that's returned by Proton.</p>
   * @public
   */
  latestSync?: RepositorySyncAttempt | undefined;
}

/**
 * @public
 */
export interface GetResourcesSummaryInput {}

/**
 * <p>Summary counts of each Proton resource types.</p>
 * @public
 */
export interface ResourceCountsSummary {
  /**
   * <p>The total number of resources of this type in the Amazon Web Services account.</p>
   * @public
   */
  total: number | undefined;

  /**
   * <p>The number of resources of this type in the Amazon Web Services account that failed to deploy.</p>
   * @public
   */
  failed?: number | undefined;

  /**
   * <p>The number of resources of this type in the Amazon Web Services account that are up-to-date with their template.</p>
   * @public
   */
  upToDate?: number | undefined;

  /**
   * <p>The number of resources of this type in the Amazon Web Services account that need a major template version update.</p>
   * @public
   */
  behindMajor?: number | undefined;

  /**
   * <p>The number of resources of this type in the Amazon Web Services account that need a minor template version update.</p>
   * @public
   */
  behindMinor?: number | undefined;
}

/**
 * <p>Summary counts of each Proton resource type.</p>
 * @public
 */
export interface CountsSummary {
  /**
   * <p>The total number of components in the Amazon Web Services account.</p>
   *          <p>The semantics of the <code>components</code> field are different from the semantics of results for other
   *    infrastructure-provisioning resources. That's because at this time components don't have associated templates,
   *    therefore they don't have the concept of staleness. The <code>components</code> object will only contain
   *     <code>total</code> and <code>failed</code> members.</p>
   * @public
   */
  components?: ResourceCountsSummary | undefined;

  /**
   * <p>The staleness counts for Proton environments in the Amazon Web Services account. The <code>environments</code> object will only
   *    contain <code>total</code> members.</p>
   * @public
   */
  environments?: ResourceCountsSummary | undefined;

  /**
   * <p>The total number of environment templates in the Amazon Web Services account. The <code>environmentTemplates</code> object
   *    will only contain <code>total</code> members.</p>
   * @public
   */
  environmentTemplates?: ResourceCountsSummary | undefined;

  /**
   * <p>The staleness counts for Proton service instances in the Amazon Web Services account.</p>
   * @public
   */
  serviceInstances?: ResourceCountsSummary | undefined;

  /**
   * <p>The staleness counts for Proton services in the Amazon Web Services account.</p>
   * @public
   */
  services?: ResourceCountsSummary | undefined;

  /**
   * <p>The total number of service templates in the Amazon Web Services account. The <code>serviceTemplates</code> object will only
   *    contain <code>total</code> members.</p>
   * @public
   */
  serviceTemplates?: ResourceCountsSummary | undefined;

  /**
   * <p>The staleness counts for Proton pipelines in the Amazon Web Services account.</p>
   * @public
   */
  pipelines?: ResourceCountsSummary | undefined;
}

/**
 * @public
 */
export interface GetResourcesSummaryOutput {
  /**
   * <p>Summary counts of each Proton resource type.</p>
   * @public
   */
  counts: CountsSummary | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusInput {
  /**
   * <p>The name of the service that the service instance belongs to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance that you want the sync status input for.</p>
   * @public
   */
  serviceInstanceName: string | undefined;
}

/**
 * <p>Revision detail data for a commit and push that activates a sync attempt</p>
 * @public
 */
export interface Revision {
  /**
   * <p>The repository name.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The secure hash algorithm (SHA) hash for the revision.</p>
   * @public
   */
  sha: string | undefined;

  /**
   * <p>The repository directory changed by a commit and push that activated the sync attempt.</p>
   * @public
   */
  directory: string | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;
}

/**
 * <p>Detail data for a resource sync event.</p>
 * @public
 */
export interface ResourceSyncEvent {
  /**
   * <p>The type of event.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The external ID for the event.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The time when the event occurred.</p>
   * @public
   */
  time: Date | undefined;

  /**
   * <p>A resource sync event.</p>
   * @public
   */
  event: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceSyncStatus = {
  /**
   *     Syncing has failed.
   *
   */
  FAILED: "FAILED",
  /**
   *    A sync attempt has been created and will begin soon.
   *
   */
  INITIATED: "INITIATED",
  /**
   *     Syncing has started and work is being done to reconcile state.
   *
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   *     Syncing has completed successfully.
   *
   */
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ResourceSyncStatus = (typeof ResourceSyncStatus)[keyof typeof ResourceSyncStatus];

/**
 * <p>Detail data for a resource sync attempt activated by a push to a repository.</p>
 * @public
 */
export interface ResourceSyncAttempt {
  /**
   * <p>Detail data for the initial repository commit, path and push.</p>
   * @public
   */
  initialRevision: Revision | undefined;

  /**
   * <p>Detail data for the target revision.</p>
   * @public
   */
  targetRevision: Revision | undefined;

  /**
   * <p>The resource that is synced to.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>The time when the sync attempt started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The status of the sync attempt.</p>
   * @public
   */
  status: ResourceSyncStatus | undefined;

  /**
   * <p>An array of events with detail data.</p>
   * @public
   */
  events: ResourceSyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusOutput {
  /**
   * <p>The detailed data of the latest sync with the service instance.</p>
   * @public
   */
  latestSync?: ResourceSyncAttempt | undefined;

  /**
   * <p>The detailed data of the latest successful sync with the service instance.</p>
   * @public
   */
  latestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * <p>The service instance sync desired state that's returned by Proton</p>
   * @public
   */
  desiredState?: Revision | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateType = {
  ENVIRONMENT: "ENVIRONMENT",
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 */
export interface GetTemplateSyncStatusInput {
  /**
   * <p>The template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * <p>The template major version.</p>
   * @public
   */
  templateVersion: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncStatusOutput {
  /**
   * <p>The details of the last sync that's returned by Proton.</p>
   * @public
   */
  latestSync?: ResourceSyncAttempt | undefined;

  /**
   * <p>The details of the last successful sync that's returned by Proton.</p>
   * @public
   */
  latestSuccessfulSync?: ResourceSyncAttempt | undefined;

  /**
   * <p>The template sync desired state that's returned by Proton.</p>
   * @public
   */
  desiredState?: Revision | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * <p>The repository name.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The sync type. The only supported value is <code>TEMPLATE_SYNC</code>.</p>
   * @public
   */
  syncType: SyncType | undefined;

  /**
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository
   *       sync definitions previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A repository sync definition.</p>
 * @public
 */
export interface RepositorySyncDefinition {
  /**
   * <p>The resource that is synced to.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>The resource that is synced from.</p>
   * @public
   */
  parent: string | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>The directory in the repository.</p>
   * @public
   */
  directory: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested
   *       list of repository sync definitions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of repository sync definitions.</p>
   * @public
   */
  syncDefinitions: RepositorySyncDefinition[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for the listed tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was
   *    previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of tags to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of resource tags with detail data.</p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource
   *    tags.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceDeploymentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ResourceDeploymentStatus = (typeof ResourceDeploymentStatus)[keyof typeof ResourceDeploymentStatus];

/**
 * @public
 */
export interface NotifyResourceDeploymentStatusChangeInput {
  /**
   * <p>The provisioned resource Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The status of your provisioned resource.</p>
   * @public
   */
  status?: ResourceDeploymentStatus | undefined;

  /**
   * <p>The provisioned resource state change detail data that's returned by Proton.</p>
   * @public
   */
  outputs?: Output[] | undefined;

  /**
   * <p>The deployment ID for your provisioned resource.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The deployment status message for your provisioned resource.</p>
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
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html">Setting up for Proton</a> in the <i>Proton User
   *         Guide</i>.</p>
   * @public
   */
  connectionArn: string | undefined;

  /**
   * <p>The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Detailed data of a linked repository—a repository that has been registered with Proton.</p>
 * @public
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account.</p>
   * @public
   */
  connectionArn: string | undefined;

  /**
   * <p>Your customer Amazon Web Services KMS encryption key.</p>
   * @public
   */
  encryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryOutput {
  /**
   * <p>The repository link's detail data that's returned by Proton.</p>
   * @public
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryInput {
  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryOutput {
  /**
   * <p>The deleted repository link's detail data that's returned by Proton.</p>
   * @public
   */
  repository?: Repository | undefined;
}

/**
 * @public
 */
export interface GetRepositoryInput {
  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name, for example <code>myrepos/myrepo</code>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryOutput {
  /**
   * <p>The repository link's detail data that's returned by Proton.</p>
   * @public
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * <p>A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of repositories to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of a linked repository—a repository that has been registered with Proton.</p>
 * @public
 */
export interface RepositorySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  provider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the of your connection that connects Proton to your repository.</p>
   * @public
   */
  connectionArn: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * <p>A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of repository links.</p>
   * @public
   */
  repositories: RepositorySummary[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsInput {
  /**
   * <p>The name of the service instance whose outputs you want.</p>
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       list of outputs that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the deployment whose outputs you want.</p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       current requested list of outputs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of service instance Infrastructure as Code (IaC) outputs.</p>
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesInput {
  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance whose provisioned resources you want.</p>
   * @public
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the list of provisioned resources that was previously
   *       requested.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the current requested list of provisioned resources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of provisioned resources for a service instance.</p>
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceInstanceInput {
  /**
   * <p>The name of the service instance to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the service the service instance is added to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The spec for the service instance you want to create.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>To create a new major and minor version of the service template,
   *         <i>exclude</i>
   *             <code>major Version</code>.</p>
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * <p>To create a new minor version of the service template, include a <code>major
   *         Version</code>.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service instance.
   *       A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The client token of the service instance to create.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceInstanceOutput {
  /**
   * <p>The detailed data of the service instance being created.</p>
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceInput {
  /**
   * <p>The name of a service instance that you want to get the detailed data for.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the service that you want the service instance input for.</p>
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceOutput {
  /**
   * <p>The detailed data of the requested service instance.</p>
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 * @enum
 */
export const ListServiceInstancesFilterBy = {
  CREATED_AT_AFTER: "createdAtAfter",
  CREATED_AT_BEFORE: "createdAtBefore",
  DEPLOYED_TEMPLATE_VERSION_STATUS: "deployedTemplateVersionStatus",
  DEPLOYMENT_STATUS: "deploymentStatus",
  ENVIRONMENT_NAME: "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT_AFTER: "lastDeploymentAttemptedAtAfter",
  LAST_DEPLOYMENT_ATTEMPTED_AT_BEFORE: "lastDeploymentAttemptedAtBefore",
  NAME: "name",
  SERVICE_NAME: "serviceName",
  TEMPLATE_NAME: "templateName",
} as const;

/**
 * @public
 */
export type ListServiceInstancesFilterBy =
  (typeof ListServiceInstancesFilterBy)[keyof typeof ListServiceInstancesFilterBy];

/**
 * <p>A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.</p>
 * @public
 */
export interface ListServiceInstancesFilter {
  /**
   * <p>The name of a filtering criterion.</p>
   * @public
   */
  key?: ListServiceInstancesFilterBy | undefined;

  /**
   * <p>A value to filter by.</p>
   *          <p>With the date/time keys (<code>*At\{Before,After\}</code>), the value is a valid <a href="https://datatracker.ietf.org/doc/html/rfc3339.html">RFC 3339</a> string with no UTC
   *       offset and with an optional fractional precision (for example,
   *         <code>1985-04-12T23:20:50.52Z</code>).</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListServiceInstancesSortBy = {
  CREATED_AT: "createdAt",
  DEPLOYMENT_STATUS: "deploymentStatus",
  ENVIRONMENT_NAME: "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT: "lastDeploymentAttemptedAt",
  NAME: "name",
  SERVICE_NAME: "serviceName",
  TEMPLATE_NAME: "templateName",
} as const;

/**
 * @public
 */
export type ListServiceInstancesSortBy = (typeof ListServiceInstancesSortBy)[keyof typeof ListServiceInstancesSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListServiceInstancesInput {
  /**
   * <p>The name of the service that the service instance belongs to.</p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p>A token that indicates the location of the next service in the array of service instances,
   *       after the list of service instances that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service instances to list.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of filtering criteria that scope down the result list. By default, all service
   *       instances in the Amazon Web Services account are returned.</p>
   * @public
   */
  filters?: ListServiceInstancesFilter[] | undefined;

  /**
   * <p>The field that the result list is sorted by.</p>
   *          <p>When you choose to sort by <code>serviceName</code>, service instances within each service
   *       are sorted by service instance name.</p>
   *          <p>Default: <code>serviceName</code>
   *          </p>
   * @public
   */
  sortBy?: ListServiceInstancesSortBy | undefined;

  /**
   * <p>Result list sort order.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Summary data of an Proton service instance resource.</p>
 * @public
 */
export interface ServiceInstanceSummary {
  /**
   * <p>The name of the service instance.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the service instance was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service was last attempted.</p>
   * @public
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service was last deployed successfully.</p>
   * @public
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the environment that the service instance was deployed into.</p>
   * @public
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The service instance template major version.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The service instance template minor version.</p>
   * @public
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The service instance deployment status.</p>
   * @public
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * <p>A service instance deployment status message.</p>
   * @public
   */
  deploymentStatusMessage?: string | undefined;

  /**
   * <p>The ID of the last attempted deployment of this service instance.</p>
   * @public
   */
  lastAttemptedDeploymentId?: string | undefined;

  /**
   * <p>The ID of the last successful deployment of this service instance.</p>
   * @public
   */
  lastSucceededDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceInstancesOutput {
  /**
   * <p>A token that indicates the location of the next service instance in the array of service
   *       instances, after the current requested list of service instances.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of service instances with summary data.</p>
   * @public
   */
  serviceInstances: ServiceInstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInstanceInput {
  /**
   * <p>The name of the service instance to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The deployment type. It defines the mode for updating a service instance, as
   *       follows:</p>
   *          <dl>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>NONE</code>
   *                </p>
   *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested
   *             metadata parameters are updated.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                <p>In this mode, the service instance is deployed and updated with the new spec that
   *             you provide. Only requested parameters are updated. <i>Don’t</i> include
   *             major or minor version parameters when you use this deployment type.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service instance is deployed and updated with the published,
   *             recommended (latest) minor version of the current major version in use, by default. You
   *             can also specify a different minor version of the current major version in use.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service instance is deployed and updated with the published,
   *             recommended (latest) major and minor version of the current template, by default. You
   *             can specify a different major version that's higher than the major version in use and a
   *             minor version.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * <p>The formatted specification that defines the service instance update.</p>
   * @public
   */
  spec?: string | undefined;

  /**
   * <p>The major version of the service template to update.</p>
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * <p>The minor version of the service template to update.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * <p>The client token of the service instance to update.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInstanceOutput {
  /**
   * <p>The service instance summary data that's returned by Proton.</p>
   * @public
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsInput {
  /**
   * <p>The name of the service whose pipeline's outputs you want.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       list of outputs that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the deployment you want the outputs for.</p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       current requested list of outputs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of service pipeline Infrastructure as Code (IaC) outputs.</p>
   * @public
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesInput {
  /**
   * <p>The name of the service whose pipeline's provisioned resources you want.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the list of provisioned resources that was previously
   *       requested.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the current requested list of provisioned resources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of provisioned resources for a service and pipeline.</p>
   * @public
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateServicePipelineInput {
  /**
   * <p>The name of the service to that the pipeline is associated with.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The spec for the service pipeline to update.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>The deployment type.</p>
   *          <p>There are four modes for updating a service pipeline. The <code>deploymentType</code>
   *       field defines the mode.</p>
   *          <dl>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>NONE</code>
   *                </p>
   *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested
   *             metadata parameters are updated.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                <p>In this mode, the service pipeline is deployed and updated with the new spec that
   *             you provide. Only requested parameters are updated. <i>Don’t</i> include
   *             major or minor version parameters when you use this <code>deployment-type</code>.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service pipeline is deployed and updated with the published,
   *             recommended (latest) minor version of the current major version in use, by default. You
   *             can specify a different minor version of the current major version in use.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service pipeline is deployed and updated with the published,
   *             recommended (latest) major and minor version of the current template, by default. You
   *             can specify a different major version that's higher than the major version in use and a
   *             minor version.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * <p>The major version of the service template that was used to create the service that the
   *       pipeline is associated with.</p>
   * @public
   */
  templateMajorVersion?: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service that the
   *       pipeline is associated with.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServicePipelineOutput {
  /**
   * <p>The pipeline details that are returned by Proton.</p>
   * @public
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface CreateServiceInput {
  /**
   * <p>The service name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the Proton service.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the service template that's used to create the service.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service.</p>
   * @public
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service.</p>
   * @public
   */
  templateMinorVersion?: string | undefined;

  /**
   * <p>A link to a spec file that provides inputs as defined in the service template bundle
   *       schema file. The spec file is in YAML format. <i>Don’t</i> include pipeline
   *       inputs in the spec if your service template <i>doesn’t</i> include a service
   *       pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-create-svc.html">Create a service</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see
   *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an
   *         AWS CodeStar connection</a> in the <i>Proton User Guide</i>.
   *         <i>Don't</i> include this parameter if your service template
   *         <i>doesn't</i> include a service pipeline.</p>
   * @public
   */
  repositoryConnectionArn?: string | undefined;

  /**
   * <p>The ID of the code repository. <i>Don't</i> include this parameter if your
   *       service template <i>doesn't</i> include a service pipeline.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in Proton.
   *         <i>Don't</i> include this parameter if your service template
   *         <i>doesn't</i> include a service pipeline.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service. A tag is
   *       a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_FAILED_CLEANUP_COMPLETE: "CREATE_FAILED_CLEANUP_COMPLETE",
  CREATE_FAILED_CLEANUP_FAILED: "CREATE_FAILED_CLEANUP_FAILED",
  CREATE_FAILED_CLEANUP_IN_PROGRESS: "CREATE_FAILED_CLEANUP_IN_PROGRESS",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE_CLEANUP_FAILED: "UPDATE_COMPLETE_CLEANUP_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_FAILED_CLEANUP_COMPLETE: "UPDATE_FAILED_CLEANUP_COMPLETE",
  UPDATE_FAILED_CLEANUP_FAILED: "UPDATE_FAILED_CLEANUP_FAILED",
  UPDATE_FAILED_CLEANUP_IN_PROGRESS: "UPDATE_FAILED_CLEANUP_IN_PROGRESS",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * <p>Detailed data of an Proton service resource.</p>
 * @public
 */
export interface Service {
  /**
   * <p>The name of the service.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the service.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The time when the service was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the service.</p>
   * @public
   */
  status: ServiceStatus | undefined;

  /**
   * <p>A service status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The formatted specification that defines the service.</p>
   * @public
   */
  spec: string | undefined;

  /**
   * <p>The service pipeline detail data.</p>
   * @public
   */
  pipeline?: ServicePipeline | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see
   *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an
   *         AWS CodeStar connection</a> in the <i>Proton User Guide</i>.</p>
   * @public
   */
  repositoryConnectionArn?: string | undefined;

  /**
   * <p>The ID of the source code repository.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in
   *       Proton.</p>
   * @public
   */
  branchName?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceOutput {
  /**
   * <p>The service detail data that's returned by Proton.</p>
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface DeleteServiceInput {
  /**
   * <p>The name of the service to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceOutput {
  /**
   * <p>The detailed data of the service being deleted.</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceInput {
  /**
   * <p>The name of the service that you want to get the detailed data for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceOutput {
  /**
   * <p>The detailed data of the requested service.</p>
   * @public
   */
  service?: Service | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * <p>A token that indicates the location of the next service in the array of services, after
   *       the list of services that was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of services to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of an Proton service resource.</p>
 * @public
 */
export interface ServiceSummary {
  /**
   * <p>The name of the service.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the service.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The time when the service was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the service.</p>
   * @public
   */
  status: ServiceStatus | undefined;

  /**
   * <p>A service status message.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * <p>A token that indicates the location of the next service in the array of services, after
   *       the current requested list of services.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of services with summaries of detail data.</p>
   * @public
   */
  services: ServiceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInput {
  /**
   * <p>The name of the service to edit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The edited service description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Lists the service instances to add and the existing service instances to remain. Omit the
   *       existing service instances to delete from the list. <i>Don't</i> include edits
   *       to the existing service instances or pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-update.html">Edit a service</a>
   *       in the <i>Proton User Guide</i>.</p>
   * @public
   */
  spec?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceOutput {
  /**
   * <p>The service detail data that's returned by Proton.</p>
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryInput {
  /**
   * <p>The name of the service that you want to get the service sync blocker summary for. If
   *       given only the service name, all instances are blocked.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance that you want to get the service sync blocker summary
   *       for. If given bothe the instance name and the service name, only the instance is
   *       blocked.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;
}

/**
 * <p>Detailed data of the context of the sync blocker.</p>
 * @public
 */
export interface SyncBlockerContext {
  /**
   * <p>The key for the sync blocker context.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the sync blocker context.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BlockerStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type BlockerStatus = (typeof BlockerStatus)[keyof typeof BlockerStatus];

/**
 * @public
 * @enum
 */
export const BlockerType = {
  AUTOMATED: "AUTOMATED",
} as const;

/**
 * @public
 */
export type BlockerType = (typeof BlockerType)[keyof typeof BlockerType];

/**
 * <p>Detailed data of the sync blocker.</p>
 * @public
 */
export interface SyncBlocker {
  /**
   * <p>The ID of the sync blocker.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the sync blocker.</p>
   * @public
   */
  type: BlockerType | undefined;

  /**
   * <p>The status of the sync blocker.</p>
   * @public
   */
  status: BlockerStatus | undefined;

  /**
   * <p>The reason why the sync blocker was created.</p>
   * @public
   */
  createdReason: string | undefined;

  /**
   * <p>The time when the sync blocker was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The contexts for the sync blocker.</p>
   * @public
   */
  contexts?: SyncBlockerContext[] | undefined;

  /**
   * <p>The reason the sync blocker was resolved.</p>
   * @public
   */
  resolvedReason?: string | undefined;

  /**
   * <p>The time the sync blocker was resolved.</p>
   * @public
   */
  resolvedAt?: Date | undefined;
}

/**
 * <p>If a service instance is manually updated, Proton wants to prevent accidentally overriding
 *       a manual change.</p>
 *          <p>A blocker is created because of the manual update or deletion of a service instance. The
 *       summary describes the blocker as being active or resolved.</p>
 * @public
 */
export interface ServiceSyncBlockerSummary {
  /**
   * <p>The name of the service that you want to get the sync blocker summary for. If given a
   *       service instance name and a service name, it will return the blockers only applying to the
   *       instance that is blocked.</p>
   *          <p>If given only a service name, it will return the blockers that apply to all of the
   *       instances. In order to get the blockers for a single instance, you will need to make two
   *       distinct calls, one to get the sync blocker summary for the service and the other to get the
   *       sync blocker for the service instance.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance that you want sync your service configuration
   *       with.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The latest active blockers for the synced service.</p>
   * @public
   */
  latestBlockers?: SyncBlocker[] | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryOutput {
  /**
   * <p>The detailed data of the requested service sync blocker summary.</p>
   * @public
   */
  serviceSyncBlockerSummary?: ServiceSyncBlockerSummary | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerInput {
  /**
   * <p>The ID of the service sync blocker.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The reason the service sync blocker was resolved.</p>
   * @public
   */
  resolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerOutput {
  /**
   * <p>The name of the service that you want to update the service sync blocker for.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance that you want to update the service sync blocker
   *       for.</p>
   * @public
   */
  serviceInstanceName?: string | undefined;

  /**
   * <p>The detailed data on the service sync blocker that was updated.</p>
   * @public
   */
  serviceSyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigInput {
  /**
   * <p>The name of the service the Proton Ops file is for.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The provider type for your repository.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The repository name.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch for your Proton Ops file.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>The path to the Proton Ops file.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * <p>Detailed data of the service sync configuration.</p>
 * @public
 */
export interface ServiceSyncConfig {
  /**
   * <p>The name of the service that the service instance is added to.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the repository provider that holds the repository Proton will sync
   *       with.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The name of the code repository that holds the service code Proton will sync
   *       with.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the code repository branch that holds the service code Proton will sync
   *       with.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>The file path to the service sync configuration file.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigOutput {
  /**
   * <p>The detailed data of the Proton Ops file.</p>
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigInput {
  /**
   * <p>The name of the service that you want to delete the service sync configuration for.</p>
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigOutput {
  /**
   * <p>The detailed data for the service sync config.</p>
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncConfigInput {
  /**
   * <p>The name of the service that you want to get the service sync configuration for.</p>
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncConfigOutput {
  /**
   * <p>The detailed data of the requested service sync configuration.</p>
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigInput {
  /**
   * <p>The name of the service the Proton Ops file is for.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the repository provider where the Proton Ops file is found.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The name of the repository where the Proton Ops file is found.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the code repository branch where the Proton Ops file is found.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>The path to the Proton Ops file.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigOutput {
  /**
   * <p>The detailed data of the Proton Ops file.</p>
   * @public
   */
  serviceSyncConfig?: ServiceSyncConfig | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateInput {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the service template as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A customer provided encryption key that's used to encrypt data.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>By default, Proton provides a service pipeline for your service. When this parameter is
   *       included, it indicates that an Proton service pipeline <i>isn't</i> provided
   *       for your service. After it's included, it <i>can't</i> be changed. For more
   *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template
   *         bundles</a> in the <i>Proton User Guide</i>.</p>
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service template.
   *       A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Detailed data of an Proton service template resource.</p>
 * @public
 */
export interface ServiceTemplate {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the service template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The service template name as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The recommended version of the service template.</p>
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * <p>The customer provided service template encryption key that's used to encrypt data.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included
   *       in the service template. Otherwise, a service pipeline <i>isn't</i> included in
   *       the service template.</p>
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by Proton.</p>
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateInput {
  /**
   * <p>The name of the service template to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateOutput {
  /**
   * <p>The detailed data of the service template being deleted.</p>
   * @public
   */
  serviceTemplate?: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateInput {
  /**
   * <p>The name of the service template that you want to get detailed data for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateOutput {
  /**
   * <p>The detailed data of the requested service template.</p>
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplatesInput {
  /**
   * <p>A token that indicates the location of the next service template in the array of service
   *       templates, after the list of service templates previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of service templates to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary data of an Proton service template resource.</p>
 * @public
 */
export interface ServiceTemplateSummary {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the service template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The service template name as displayed in the developer interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The recommended version of the service template.</p>
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included
   *       in the service template, otherwise a service pipeline <i>isn't</i> included in
   *       the service template.</p>
   * @public
   */
  pipelineProvisioning?: Provisioning | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplatesOutput {
  /**
   * <p>A token that indicates the location of the next service template in the array of service
   *       templates, after the current requested list of service templates.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of service templates with detail data.</p>
   * @public
   */
  templates: ServiceTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateInput {
  /**
   * <p>The name of the service template to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the service template to update that's displayed in the developer
   *       interface.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the service template update.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by Proton.</p>
   * @public
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * <p>Compatible environment template data.</p>
 * @public
 */
export interface CompatibleEnvironmentTemplateInput {
  /**
   * <p>The compatible environment template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the compatible environment template.</p>
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceTemplateSupportedComponentSourceType = {
  DIRECTLY_DEFINED: "DIRECTLY_DEFINED",
} as const;

/**
 * @public
 */
export type ServiceTemplateSupportedComponentSourceType =
  (typeof ServiceTemplateSupportedComponentSourceType)[keyof typeof ServiceTemplateSupportedComponentSourceType];

/**
 * @public
 */
export interface CreateServiceTemplateVersionInput {
  /**
   * <p>When included, if two identical requests are made with the same client token, Proton
   *       returns the service template version that the first request created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the new version of a service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>To create a new minor version of the service template, include a <code>major
   *         Version</code>.</p>
   *          <p>To create a new major and minor version of the service template,
   *         <i>exclude</i>
   *             <code>major Version</code>.</p>
   * @public
   */
  majorVersion?: string | undefined;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of
   *       a service template.</p>
   * @public
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>An array of environment template objects that are compatible with the new service template
   *       version. A service instance based on this service template version can run in environments
   *       based on compatible templates.</p>
   * @public
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service template
   *       version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached
   *       to service instances based on this service template version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * <p>Compatible environment template data.</p>
 * @public
 */
export interface CompatibleEnvironmentTemplate {
  /**
   * <p>The compatible environment template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the compatible environment template.</p>
   * @public
   */
  majorVersion: string | undefined;
}

/**
 * <p>Detailed data of an Proton service template version resource.</p>
 * @public
 */
export interface ServiceTemplateVersion {
  /**
   * <p>The name of the version of a service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of a service template.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of a service template.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the service template.</p>
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * <p>The service template version status.</p>
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * <p>A service template version status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>A description of the version of a service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of a service template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of a service template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>An array of compatible environment template names for the major version of a service
   *       template.</p>
   * @public
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[] | undefined;

  /**
   * <p>The schema of the version of a service template.</p>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached
   *       to service instances based on this service template version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceTemplateVersionOutput {
  /**
   * <p>The service template version summary of detail data that's returned by Proton.</p>
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The service template major version to delete.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The service template minor version to delete.</p>
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionOutput {
  /**
   * <p>The detailed data of the service template version being deleted.</p>
   * @public
   */
  serviceTemplateVersion?: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionInput {
  /**
   * <p>The name of the service template a version of which you want to get detailed data
   *       for.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To get service template major version detail data, include <code>major
   *       Version</code>.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>To get service template minor version detail data, include
   *       <code>minorVersion</code>.</p>
   * @public
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionOutput {
  /**
   * <p>The detailed data of the requested service template version.</p>
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsInput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of
   *       major or minor versions of a service template, after the list of major or minor versions that
   *       was previously requested.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of major or minor versions of a service template to list.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To view a list of minor of versions under a major version of a service template, include
   *         <code>major Version</code>.</p>
   *          <p>To view a list of major versions of a service template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   * @public
   */
  majorVersion?: string | undefined;
}

/**
 * <p>Summary data of an Proton service template version resource.</p>
 * @public
 */
export interface ServiceTemplateVersionSummary {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of a service template.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of a service template.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the service template.</p>
   * @public
   */
  recommendedMinorVersion?: string | undefined;

  /**
   * <p>The service template minor version status.</p>
   * @public
   */
  status: TemplateVersionStatus | undefined;

  /**
   * <p>A service template minor version status message.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>A description of the version of a service template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of a service template was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of a service template was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsOutput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of
   *       major or minor versions of a service template, after the current requested list of service
   *       major or minor versions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of major or minor versions of a service template with detail data.</p>
   * @public
   */
  templateVersions: ServiceTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of a service template, include <code>major
   *       Version</code>.</p>
   * @public
   */
  majorVersion: string | undefined;

  /**
   * <p>To update a minor version of a service template, include <code>minorVersion</code>.</p>
   * @public
   */
  minorVersion: string | undefined;

  /**
   * <p>A description of a service template version to update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the service template minor version to update.</p>
   * @public
   */
  status?: TemplateVersionStatus | undefined;

  /**
   * <p>An array of environment template objects that are compatible with this service template
   *       version. A service instance based on this service template version can run in environments
   *       based on compatible templates.</p>
   * @public
   */
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached
   *       to service instances based on this service template version.</p>
   *          <note>
   *             <p>A change to <code>supportedComponentSources</code> doesn't impact existing component
   *         attachments to instances based on this template version. A change only affects later
   *         associations.</p>
   *          </note>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   * @public
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionOutput {
  /**
   * <p>The service template version detail data that's returned by Proton.</p>
   * @public
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of customer tags to apply to the Proton resource.</p>
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
   * <p>The name of your registered template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The type of the registered template.</p>
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * <p>The provider type for your repository.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch for your template.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this
   *    repository directory.</p>
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * <p>The detail data for a template sync configuration.</p>
 * @public
 */
export interface TemplateSyncConfig {
  /**
   * <p>The template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>A subdirectory path to your template bundle version.</p>
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigInput {
  /**
   * <p>The template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   * @public
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigInput {
  /**
   * <p>The template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   * @public
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigInput {
  /**
   * <p>The synced template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The synced template type.</p>
   * @public
   */
  templateType: TemplateType | undefined;

  /**
   * <p>The repository provider.</p>
   * @public
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch for your template.</p>
   * @public
   */
  branch: string | undefined;

  /**
   * <p>A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.</p>
   * @public
   */
  subdirectory?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   * @public
   */
  templateSyncConfig?: TemplateSyncConfig | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove customer tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of customer tag keys that indicate the customer tags to be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
