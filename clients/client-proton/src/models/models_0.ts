// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ProtonServiceException as __BaseException } from "./ProtonServiceException";

export interface AcceptEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;
}

export enum EnvironmentAccountConnectionStatus {
  CONNECTED = "CONNECTED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>Detailed data of an Proton environment account connection resource.</p>
 */
export interface EnvironmentAccountConnection {
  /**
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   */
  managementAccountId: string | undefined;

  /**
   * <p>The environment account that's connected to the environment account connection.</p>
   */
  environmentAccountId: string | undefined;

  /**
   * <p>The IAM service role that's associated with the environment account connection.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the environment that's associated with the environment account connection.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The time when the environment account connection request was made.</p>
   */
  requestedAt: Date | undefined;

  /**
   * <p>The time when the environment account connection was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the environment account connection.</p>
   */
  status: EnvironmentAccountConnectionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

export interface AcceptEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * <p>There <i>isn't</i> sufficient access for performing this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The request failed to register with the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The requested resource <i>wasn't</i> found.</p>
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export enum RepositoryProvider {
  BITBUCKET = "BITBUCKET",
  GITHUB = "GITHUB",
  GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE",
}

/**
 * <p>Detail data for a linked repository branch.</p>
 */
export interface RepositoryBranch {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

/**
 * <p>Proton settings that are used for multiple services in the Amazon Web Services account.</p>
 */
export interface AccountSettings {
  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by
   *       customer-owned automation for self-managed provisioning.</p>
   */
  pipelineServiceRoleArn?: string;

  /**
   * <p>The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include
   *       pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   */
  pipelineProvisioningRepository?: RepositoryBranch;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *       provisioning.</p>
   */
  pipelineCodebuildRoleArn?: string;
}

export interface GetAccountSettingsInput {}

export interface GetAccountSettingsOutput {
  /**
   * <p>The Proton pipeline service role detail data that's returned by Proton.</p>
   */
  accountSettings?: AccountSettings;
}

/**
 * <p>Detail input data for a linked repository branch.</p>
 */
export interface RepositoryBranchInput {
  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

export interface UpdateAccountSettingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by
   *       customer-owned automation for self-managed provisioning.</p>
   *          <p>To remove a previously configured ARN, specify an empty string.</p>
   */
  pipelineServiceRoleArn?: string;

  /**
   * <p>A linked repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that include
   *       pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To remove a previously configured repository, set <code>deletePipelineProvisioningRepository</code> to <code>true</code>, and don't set
   *       <code>pipelineProvisioningRepository</code>.</p>
   */
  pipelineProvisioningRepository?: RepositoryBranchInput;

  /**
   * <p>Set to <code>true</code> to remove a configured pipeline repository from the account settings. Don't set this field if you are updating the configured
   *       pipeline repository.</p>
   */
  deletePipelineProvisioningRepository?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *       provisioning.</p>
   */
  pipelineCodebuildRoleArn?: string;
}

export interface UpdateAccountSettingsOutput {
  /**
   * <p>The Proton pipeline service role and repository data shared across the Amazon Web Services account.</p>
   */
  accountSettings: AccountSettings | undefined;
}

export interface CancelComponentDeploymentInput {
  /**
   * <p>The name of the component with the deployment to cancel.</p>
   */
  componentName: string | undefined;
}

export enum DeploymentStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Detailed data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 */
export interface Component {
  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the component.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the Proton environment that this component is associated with.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   */
  serviceName?: string;

  /**
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * <p>The time when the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the component was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The time when a deployment of the component was last attempted.</p>
   */
  lastDeploymentAttemptedAt?: Date;

  /**
   * <p>The time when the component was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt?: Date;

  /**
   * <p>The component deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>The message associated with the component deployment status.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * <p>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</p>
   */
  serviceSpec?: string;
}

export interface CancelComponentDeploymentOutput {
  /**
   * <p>The detailed data of the component with the deployment that is being canceled.</p>
   */
  component: Component | undefined;
}

export interface CancelEnvironmentDeploymentInput {
  /**
   * <p>The name of the environment with the deployment to cancel.</p>
   */
  environmentName: string | undefined;
}

export enum Provisioning {
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
}

/**
 * <p>Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 */
export interface Environment {
  /**
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * <p>The time when the environment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the environment was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the environment was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The environment deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>An environment deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * <p>The ID of the environment account connection that's used to provision infrastructure resources in an environment account.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   */
  environmentAccountId?: string;

  /**
   * <p>The environment spec.</p>
   */
  spec?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   */
  provisioningRepository?: RepositoryBranch;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   */
  codebuildRoleArn?: string;
}

export interface CancelEnvironmentDeploymentOutput {
  /**
   * <p>The environment summary data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

export interface CancelServiceInstanceDeploymentInput {
  /**
   * <p>The name of the service instance with the deployment to cancel.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>The name of the service with the service instance deployment to cancel.</p>
   */
  serviceName: string | undefined;
}

/**
 * <p>Detailed data of an Proton service instance resource.</p>
 */
export interface ServiceInstance {
  /**
   * <p>The name of the service instance.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the service instance was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service instance was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service instance was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the environment that the service instance was deployed into.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service template that was used to create the service instance.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service instance.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service instance.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The service instance deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>The message associated with the service instance deployment status.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * <p>The service spec that was used to create the service instance.</p>
   */
  spec?: string;
}

export interface CancelServiceInstanceDeploymentOutput {
  /**
   * <p>The service instance summary data that's returned by Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export interface CancelServicePipelineDeploymentInput {
  /**
   * <p>The name of the service with the service pipeline deployment to cancel.</p>
   */
  serviceName: string | undefined;
}

/**
 * <p>Detailed data of an Proton service instance pipeline resource.</p>
 */
export interface ServicePipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the service pipeline.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the service pipeline was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service pipeline was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service pipeline was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service template that was used to create the service pipeline.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service pipeline.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service pipeline.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The deployment status of the service pipeline.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>A service pipeline deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * <p>The service spec that was used to create the service pipeline.</p>
   */
  spec?: string;
}

export interface CancelServicePipelineDeploymentOutput {
  /**
   * <p>The service pipeline detail data that's returned by Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

export interface ListComponentOutputsInput {
  /**
   * <p>The name of the component whose outputs you want.</p>
   */
  componentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;
}

/**
 * <p>An infrastructure as code defined resource output.</p>
 */
export interface Output {
  /**
   * <p>The output key.</p>
   */
  key?: string;

  /**
   * <p>The output value.</p>
   */
  valueString?: string;
}

export interface ListComponentOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of component Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

export interface ListComponentProvisionedResourcesInput {
  /**
   * <p>The name of the component whose provisioned resources you want.</p>
   */
  componentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources
   *       that was previously requested.</p>
   */
  nextToken?: string;
}

export enum ProvisionedResourceEngine {
  CLOUDFORMATION = "CLOUDFORMATION",
  TERRAFORM = "TERRAFORM",
}

/**
 * <p>Detail data for a provisioned resource.</p>
 */
export interface ProvisionedResource {
  /**
   * <p>The provisioned resource name.</p>
   */
  name?: string;

  /**
   * <p>The provisioned resource identifier.</p>
   */
  identifier?: string;

  /**
   * <p>The resource provisioning engine. At this time, <code>CLOUDFORMATION</code> can be used for Amazon Web Services-managed provisioning, and <code>TERRAFORM</code> can
   *       be used for self-managed provisioning.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
   */
  provisioningEngine?: ProvisionedResourceEngine | string;
}

export interface ListComponentProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of
   *       provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of provisioned resources for a component.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * <p>A description of a resource tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the resource tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the resource tag.</p>
   */
  value: string | undefined;
}

export interface CreateComponentInput {
  /**
   * <p>The customer-provided name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>An optional customer-provided description of the component.</p>
   */
  description?: string;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. If you don't specify this, the component isn't attached to any
   *       service instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   */
  serviceName?: string;

  /**
   * <p>The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service
   *       instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   */
  serviceInstanceName?: string;

  /**
   * <p>The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify
   *         <code>serviceInstanceName</code> and <code>serviceName</code>.</p>
   */
  environmentName?: string;

  /**
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   */
  templateFile: string | undefined;

  /**
   * <p>A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom
   *       component provisions.</p>
   */
  manifest: string | undefined;

  /**
   * <p>The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service
   *       instance.</p>
   */
  serviceSpec?: string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

export interface CreateComponentOutput {
  /**
   * <p>The detailed data of the created component.</p>
   */
  component: Component | undefined;
}

/**
 * <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
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

export interface DeleteComponentInput {
  /**
   * <p>The name of the component to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteComponentOutput {
  /**
   * <p>The detailed data of the component being deleted.</p>
   */
  component?: Component;
}

export interface GetComponentInput {
  /**
   * <p>The name of the component that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

export interface GetComponentOutput {
  /**
   * <p>The detailed data of the requested component.</p>
   */
  component?: Component;
}

export interface ListComponentsInput {
  /**
   * <p>A token that indicates the location of the next component in the array of components, after the list of components that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of an environment for result list filtering. Proton returns components associated with the environment or attached to service instances
   *       running in it.</p>
   */
  environmentName?: string;

  /**
   * <p>The name of a service for result list filtering. Proton returns components attached to service instances of the service.</p>
   */
  serviceName?: string;

  /**
   * <p>The name of a service instance for result list filtering. Proton returns the component attached to the service instance, if any.</p>
   */
  serviceInstanceName?: string;

  /**
   * <p>The maximum number of components to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 */
export interface ComponentSummary {
  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the Proton environment that this component is associated with.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   */
  serviceName?: string;

  /**
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * <p>The time when the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the component was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The time when a deployment of the component was last attempted.</p>
   */
  lastDeploymentAttemptedAt?: Date;

  /**
   * <p>The time when the component was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt?: Date;

  /**
   * <p>The component deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>The message associated with the component deployment status.</p>
   */
  deploymentStatusMessage?: string;
}

export interface ListComponentsOutput {
  /**
   * <p>A token that indicates the location of the next component in the array of components, after the current requested list of components.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of components with summary data.</p>
   */
  components: ComponentSummary[] | undefined;
}

export enum ComponentDeploymentUpdateType {
  CURRENT_VERSION = "CURRENT_VERSION",
  NONE = "NONE",
}

export interface UpdateComponentInput {
  /**
   * <p>The name of the component to update.</p>
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
   */
  deploymentType: ComponentDeploymentUpdateType | string | undefined;

  /**
   * <p>An optional customer-provided description of the component.</p>
   */
  description?: string;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Don't specify to keep the component's current service instance
   *       attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   */
  serviceName?: string;

  /**
   * <p>The name of the service instance that you want to attach this component to. Don't specify to keep the component's current service instance attachment.
   *       Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   */
  serviceInstanceName?: string;

  /**
   * <p>The service spec that you want the component to use to access service inputs. Set this only when the component is attached to a service
   *       instance.</p>
   */
  serviceSpec?: string;

  /**
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   */
  templateFile?: string;
}

export interface UpdateComponentOutput {
  /**
   * <p>The detailed data of the updated component.</p>
   */
  component: Component | undefined;
}

export interface CreateEnvironmentAccountConnectionInput {
  /**
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first
   *       request created.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this
   *       account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment
   *       infrastructure resources in the associated environment account.</p>
   */
  managementAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure
   *       resources in the associated environment account.</p>
   */
  roleArn?: string;

  /**
   * <p>The name of the Proton environment that's created in the associated management account.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with any environments running in this
   *       account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

export interface CreateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export interface DeleteEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to delete.</p>
   */
  id: string | undefined;
}

export interface DeleteEnvironmentAccountConnectionOutput {
  /**
   * <p>The detailed data of the environment account connection being deleted.</p>
   */
  environmentAccountConnection?: EnvironmentAccountConnection;
}

export interface GetEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection that you want to get the detailed data for.</p>
   */
  id: string | undefined;
}

export interface GetEnvironmentAccountConnectionOutput {
  /**
   * <p>The detailed data of the requested environment account connection.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export enum EnvironmentAccountConnectionRequesterAccountType {
  ENVIRONMENT_ACCOUNT = "ENVIRONMENT_ACCOUNT",
  MANAGEMENT_ACCOUNT = "MANAGEMENT_ACCOUNT",
}

export interface ListEnvironmentAccountConnectionsInput {
  /**
   * <p>The type of account making the <code>ListEnvironmentAccountConnections</code> request.</p>
   */
  requestedBy: EnvironmentAccountConnectionRequesterAccountType | string | undefined;

  /**
   * <p>The environment name that's associated with each listed environment account connection.</p>
   */
  environmentName?: string;

  /**
   * <p>The status details for each listed environment account connection.</p>
   */
  statuses?: (EnvironmentAccountConnectionStatus | string)[];

  /**
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of
   *       environment account connections that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment account connections to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary data of an Proton environment account connection resource.</p>
 */
export interface EnvironmentAccountConnectionSummary {
  /**
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   */
  managementAccountId: string | undefined;

  /**
   * <p>The ID of the environment account that's connected to the environment account connection.</p>
   */
  environmentAccountId: string | undefined;

  /**
   * <p>The IAM service role that's associated with the environment account connection.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the environment that's associated with the environment account connection.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The time when the environment account connection request was made.</p>
   */
  requestedAt: Date | undefined;

  /**
   * <p>The time when the environment account connection was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the environment account connection.</p>
   */
  status: EnvironmentAccountConnectionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;
}

export interface ListEnvironmentAccountConnectionsOutput {
  /**
   * <p>An array of environment account connections with details that's returned by Proton. </p>
   */
  environmentAccountConnections: EnvironmentAccountConnectionSummary[] | undefined;

  /**
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the current
   *       requested list of environment account connections.</p>
   */
  nextToken?: string;
}

export interface RejectEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to reject.</p>
   */
  id: string | undefined;
}

export interface RejectEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment connection account detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export interface UpdateEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to update.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated
   *       environment account. It determines the scope of infrastructure that a component can provision in the account.</p>
   *          <p>The environment account connection must have a <code>componentRoleArn</code> to allow directly defined components to be associated with any
   *       environments running in the account.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

export interface UpdateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export interface ListEnvironmentOutputsInput {
  /**
   * <p>The environment name.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was
   *       previously requested.</p>
   */
  nextToken?: string;
}

export interface ListEnvironmentOutputsOutput {
  /**
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of
   *       environment outputs.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment outputs with detail data.</p>
   */
  outputs: Output[] | undefined;
}

export interface ListEnvironmentProvisionedResourcesInput {
  /**
   * <p>The environment name.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of
   *       environment provisioned resources that was previously requested.</p>
   */
  nextToken?: string;
}

export interface ListEnvironmentProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested
   *       list of environment provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment provisioned resources.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

export interface CreateEnvironmentInput {
  /**
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the environment template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>A description of the environment that's being created and deployed.</p>
   */
  description?: string;

  /**
   * <p>A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> in the <i>Proton User
   *       Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * <p>The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment
   *       account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To use self-managed provisioning for the environment, specify this parameter and omit the <code>environmentAccountConnectionId</code> and
   *         <code>protonServiceRoleArn</code> parameters.</p>
   */
  provisioningRepository?: RepositoryBranchInput;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with this environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   *          <p>To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the
   *       <code>environmentAccountConnectionId</code> or <code>codebuildRoleArn</code> parameter.</p>
   */
  codebuildRoleArn?: string;
}

export interface CreateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the environment to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteEnvironmentOutput {
  /**
   * <p>The detailed data of the environment being deleted.</p>
   */
  environment?: Environment;
}

export interface GetEnvironmentInput {
  /**
   * <p>The name of the environment that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

export interface GetEnvironmentOutput {
  /**
   * <p>The detailed data of the requested environment.</p>
   */
  environment: Environment | undefined;
}

/**
 * <p>A search filter for environment templates.</p>
 */
export interface EnvironmentTemplateFilter {
  /**
   * <p>Include <code>templateName</code> to filter search for a template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>Include <code>majorVersion</code> to filter search for a major version.</p>
   */
  majorVersion: string | undefined;
}

export interface ListEnvironmentsInput {
  /**
   * <p>A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environments to list.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of the versions of the environment template.</p>
   */
  environmentTemplates?: EnvironmentTemplateFilter[];
}

/**
 * <p>Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * <p>The time when the environment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the environment was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the environment was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The environment deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>An environment deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * <p>The ID of the environment account connection that the environment is associated with.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   */
  environmentAccountId?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;
}

export interface ListEnvironmentsOutput {
  /**
   * <p>A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment detail data summaries.</p>
   */
  environments: EnvironmentSummary[] | undefined;
}

export enum DeploymentUpdateType {
  CURRENT_VERSION = "CURRENT_VERSION",
  MAJOR_VERSION = "MAJOR_VERSION",
  MINOR_VERSION = "MINOR_VERSION",
  NONE = "NONE",
}

export interface UpdateEnvironmentInput {
  /**
   * <p>The name of the environment to update.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the environment update.</p>
   */
  description?: string;

  /**
   * <p>The formatted specification that defines the update.</p>
   */
  spec?: string;

  /**
   * <p>The major version of the environment to update.</p>
   */
  templateMajorVersion?: string;

  /**
   * <p>The minor version of the environment to update.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.</p>
   */
  protonServiceRoleArn?: string;

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
   */
  deploymentType: DeploymentUpdateType | string | undefined;

  /**
   * <p>The ID of the environment account connection.</p>
   *          <p>You can only update to a new environment account connection if it was created in the same environment account that the current environment account
   *       connection was created in and is associated with the current environment.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   */
  provisioningRepository?: RepositoryBranchInput;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   */
  codebuildRoleArn?: string;
}

export interface UpdateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

export interface CreateEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * <p>The environment template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * <p>A customer provided encryption key that Proton uses to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * <p>The environment template data.</p>
 */
export interface EnvironmentTemplate {
  /**
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The name of the environment template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * <p>The ID of the recommended version of the environment template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>The customer provided encryption key for the environment template.</p>
   */
  encryptionKey?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;
}

export interface CreateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

export interface DeleteEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteEnvironmentTemplateOutput {
  /**
   * <p>The detailed data of the environment template being deleted.</p>
   */
  environmentTemplate?: EnvironmentTemplate;
}

export interface GetEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

export interface GetEnvironmentTemplateOutput {
  /**
   * <p>The detailed data of the requested environment template.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

export interface ListEnvironmentTemplatesInput {
  /**
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates
   *       that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment templates to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>The environment template data.</p>
 */
export interface EnvironmentTemplateSummary {
  /**
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The name of the environment template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * <p>The recommended version of the environment template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;
}

export interface ListEnvironmentTemplatesOutput {
  /**
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of
   *       environment templates.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment templates with detail data.</p>
   */
  templates: EnvironmentTemplateSummary[] | undefined;
}

export interface UpdateEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the environment template to update as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the environment template update.</p>
   */
  description?: string;
}

export interface UpdateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * <p>Template bundle S3 bucket data.</p>
 */
export interface S3ObjectSource {
  /**
   * <p>The name of the S3 bucket that contains a template bundle.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The path to the S3 bucket that contains a template bundle.</p>
   */
  key: string | undefined;
}

/**
 * <p>Template version source data.</p>
 */
export type TemplateVersionSourceInput =
  | TemplateVersionSourceInput.S3Member
  | TemplateVersionSourceInput.$UnknownMember;

export namespace TemplateVersionSourceInput {
  /**
   * <p>An S3 source object that includes the template bundle S3 path and name for a template minor version.</p>
   */
  export interface S3Member {
    s3: S3ObjectSource;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: S3ObjectSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TemplateVersionSourceInput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface CreateEnvironmentTemplateVersionInput {
  /**
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first
   *       request created.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>A description of the new version of an environment template.</p>
   */
  description?: string;

  /**
   * <p>To create a new minor version of the environment template, include <code>major Version</code>.</p>
   *          <p>To create a new major and minor version of the environment template, exclude <code>major Version</code>.</p>
   */
  majorVersion?: string;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of an template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

export enum TemplateVersionStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  REGISTRATION_FAILED = "REGISTRATION_FAILED",
  REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS",
}

/**
 * <p>The environment template version data.</p>
 */
export interface EnvironmentTemplateVersion {
  /**
   * <p>The name of the version of an environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the environment template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * <p>The status of the version of an environment template.</p>
   */
  status: TemplateVersionStatus | string | undefined;

  /**
   * <p>The status message of the version of an environment template.</p>
   */
  statusMessage?: string;

  /**
   * <p>A description of the minor version of an environment template.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of an environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of an environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The schema of the version of an environment template.</p>
   */
  schema?: string;
}

export interface CreateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export interface DeleteEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The environment template major version to delete.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The environment template minor version to delete.</p>
   */
  minorVersion: string | undefined;
}

export interface DeleteEnvironmentTemplateVersionOutput {
  /**
   * <p>The detailed data of the environment template version being deleted.</p>
   */
  environmentTemplateVersion?: EnvironmentTemplateVersion;
}

export interface GetEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template a version of which you want to get detailed data for.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To get environment template major version detail data, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To get environment template minor version detail data, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

export interface GetEnvironmentTemplateVersionOutput {
  /**
   * <p>The detailed data of the requested environment template version.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export interface ListEnvironmentTemplateVersionsInput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of major or minor versions of an environment template to list.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To view a list of minor of versions under a major version of an environment template, include <code>major Version</code>.</p>
   *          <p>To view a list of major versions of an environment template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;
}

/**
 * <p>A summary of the version of an environment template detail data.</p>
 */
export interface EnvironmentTemplateVersionSummary {
  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the environment template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * <p>The status of the version of an environment template.</p>
   */
  status: TemplateVersionStatus | string | undefined;

  /**
   * <p>The status message of the version of an environment template.</p>
   */
  statusMessage?: string;

  /**
   * <p>A description of the version of an environment template.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of an environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of an environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;
}

export interface ListEnvironmentTemplateVersionsOutput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of major or minor versions of an environment template detail data.</p>
   */
  templateVersions: EnvironmentTemplateVersionSummary[] | undefined;
}

export interface UpdateEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of an environment template, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To update a minor version of an environment template, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>A description of environment template version to update.</p>
   */
  description?: string;

  /**
   * <p>The status of the environment template minor version to update.</p>
   */
  status?: TemplateVersionStatus | string;
}

export interface UpdateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template version detail data that's returned by Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export enum SyncType {
  TEMPLATE_SYNC = "TEMPLATE_SYNC",
}

export interface GetRepositorySyncStatusInput {
  /**
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * <p>The repository sync type.</p>
   */
  syncType: SyncType | string | undefined;
}

/**
 * <p>Repository sync event detail data for a sync attempt.</p>
 */
export interface RepositorySyncEvent {
  /**
   * <p>The type of event.</p>
   */
  type: string | undefined;

  /**
   * <p>The external ID of the sync event.</p>
   */
  externalId?: string;

  /**
   * <p>The time that the sync event occurred.</p>
   */
  time: Date | undefined;

  /**
   * <p>Event detail for a repository sync attempt.</p>
   */
  event: string | undefined;
}

export enum RepositorySyncStatus {
  /**
   *     The repository sync attempt has failed.
   *
   */
  FAILED = "FAILED",
  /**
   *    A repository sync attempt has been created and will begin soon.
   *
   */
  INITIATED = "INITIATED",
  /**
   *     A repository sync attempt has started and work is being done to reconcile the branch.
   *
   */
  IN_PROGRESS = "IN_PROGRESS",
  /**
   *     The repository sync attempt didn't execute and was queued.
   *
   */
  QUEUED = "QUEUED",
  /**
   *     The repository sync attempt has completed successfully.
   *
   */
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Detail data for a repository sync attempt activated by a push to a repository.</p>
 */
export interface RepositorySyncAttempt {
  /**
   * <p>The time when the sync attempt started.</p>
   */
  startedAt: Date | undefined;

  /**
   * <p>The sync attempt status.</p>
   */
  status: RepositorySyncStatus | string | undefined;

  /**
   * <p>Detail data for sync attempt events.</p>
   */
  events: RepositorySyncEvent[] | undefined;
}

export interface GetRepositorySyncStatusOutput {
  /**
   * <p>The repository sync status detail data that's returned by Proton.</p>
   */
  latestSync?: RepositorySyncAttempt;
}

export enum TemplateType {
  ENVIRONMENT = "ENVIRONMENT",
  SERVICE = "SERVICE",
}

export interface GetTemplateSyncStatusInput {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   */
  templateType: TemplateType | string | undefined;

  /**
   * <p>The template major version.</p>
   */
  templateVersion: string | undefined;
}

/**
 * <p>Revision detail data for a commit and push that activates a sync attempt</p>
 */
export interface Revision {
  /**
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The secure hash algorithm (SHA) hash for the revision.</p>
   */
  sha: string | undefined;

  /**
   * <p>The repository directory changed by a commit and push that activated the sync attempt.</p>
   */
  directory: string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

/**
 * <p>Detail data for a resource sync event.</p>
 */
export interface ResourceSyncEvent {
  /**
   * <p>The type of event.</p>
   */
  type: string | undefined;

  /**
   * <p>The external ID for the event.</p>
   */
  externalId?: string;

  /**
   * <p>The time when the event occurred.</p>
   */
  time: Date | undefined;

  /**
   * <p>A resource sync event.</p>
   */
  event: string | undefined;
}

export enum ResourceSyncStatus {
  /**
   *     Syncing has failed.
   *
   */
  FAILED = "FAILED",
  /**
   *    A sync attempt has been created and will begin soon.
   *
   */
  INITIATED = "INITIATED",
  /**
   *     Syncing has started and work is being done to reconcile state.
   *
   */
  IN_PROGRESS = "IN_PROGRESS",
  /**
   *     Syncing has completed successfully.
   *
   */
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Detail data for a resource sync attempt activated by a push to a repository.</p>
 */
export interface ResourceSyncAttempt {
  /**
   * <p>Detail data for the initial repository commit, path and push.</p>
   */
  initialRevision: Revision | undefined;

  /**
   * <p>Detail data for the target revision.</p>
   */
  targetRevision: Revision | undefined;

  /**
   * <p>The resource that is synced to.</p>
   */
  target: string | undefined;

  /**
   * <p>The time when the sync attempt started.</p>
   */
  startedAt: Date | undefined;

  /**
   * <p>The status of the sync attempt.</p>
   */
  status: ResourceSyncStatus | string | undefined;

  /**
   * <p>An array of events with detail data.</p>
   */
  events: ResourceSyncEvent[] | undefined;
}

export interface GetTemplateSyncStatusOutput {
  /**
   * <p>The details of the last sync that's returned by Proton.</p>
   */
  latestSync?: ResourceSyncAttempt;

  /**
   * <p>The details of the last successful sync that's returned by Proton.</p>
   */
  latestSuccessfulSync?: ResourceSyncAttempt;

  /**
   * <p>The template sync desired state that's returned by Proton.</p>
   */
  desiredState?: Revision;
}

export interface ListRepositorySyncDefinitionsInput {
  /**
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The sync type. The only supported value is <code>TEMPLATE_SYNC</code>.</p>
   */
  syncType: SyncType | string | undefined;

  /**
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository
   *       sync definitions previously requested.</p>
   */
  nextToken?: string;
}

/**
 * <p>A repository sync definition.</p>
 */
export interface RepositorySyncDefinition {
  /**
   * <p>The resource that is synced to.</p>
   */
  target: string | undefined;

  /**
   * <p>The resource that is synced from.</p>
   */
  parent: string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * <p>The directory in the repository.</p>
   */
  directory: string | undefined;
}

export interface ListRepositorySyncDefinitionsOutput {
  /**
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested
   *       list of repository sync definitions.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of repository sync definitions.</p>
   */
  syncDefinitions: RepositorySyncDefinition[] | undefined;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for the listed tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of tags to list.</p>
   */
  maxResults?: number;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>A list of resource tags with detail data.</p>
   */
  tags: Tag[] | undefined;

  /**
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource tags.</p>
   */
  nextToken?: string;
}

export enum ResourceDeploymentStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

export interface NotifyResourceDeploymentStatusChangeInput {
  /**
   * <p>The provisioned resource Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The status of your provisioned resource.</p>
   */
  status?: ResourceDeploymentStatus | string;

  /**
   * <p>The provisioned resource state change detail data that's returned by Proton.</p>
   */
  outputs?: Output[];

  /**
   * <p>The deployment ID for your provisioned resource.</p>
   */
  deploymentId?: string;

  /**
   * <p>The deployment status message for your provisioned resource.</p>
   */
  statusMessage?: string;
}

export interface NotifyResourceDeploymentStatusChangeOutput {}

export interface CreateRepositoryInput {
  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html">Setting up for Proton</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  connectionArn: string | undefined;

  /**
   * <p>The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.</p>
   */
  encryptionKey?: string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * <p>Detailed data of a linked repository—a repository that has been registered with Proton.</p>
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account.</p>
   */
  connectionArn: string | undefined;

  /**
   * <p>Your customer Amazon Web Services KMS encryption key.</p>
   */
  encryptionKey?: string;
}

export interface CreateRepositoryOutput {
  /**
   * <p>The repository link's detail data that's returned by Proton.</p>
   */
  repository: Repository | undefined;
}

export interface DeleteRepositoryInput {
  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name.</p>
   */
  name: string | undefined;
}

export interface DeleteRepositoryOutput {
  /**
   * <p>The deleted repository link's detail data that's returned by Proton.</p>
   */
  repository?: Repository;
}

export interface GetRepositoryInput {
  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name, for example <code>myrepos/myrepo</code>.</p>
   */
  name: string | undefined;
}

export interface GetRepositoryOutput {
  /**
   * <p>The repository link's detail data that's returned by Proton.</p>
   */
  repository: Repository | undefined;
}

export interface ListRepositoriesInput {
  /**
   * <p>A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repositories to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary data of a linked repository—a repository that has been registered with Proton.</p>
 */
export interface RepositorySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name.</p>
   */
  name: string | undefined;
}

export interface ListRepositoriesOutput {
  /**
   * <p>A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories. </p>
   */
  nextToken?: string;

  /**
   * <p>An array of repository links.</p>
   */
  repositories: RepositorySummary[] | undefined;
}

export interface ListServiceInstanceOutputsInput {
  /**
   * <p>The name of the service instance whose outputs you want.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;
}

export interface ListServiceInstanceOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service instance Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

export interface ListServiceInstanceProvisionedResourcesInput {
  /**
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the service instance whose provisioned resources you want.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources
   *       that was previously requested.</p>
   */
  nextToken?: string;
}

export interface ListServiceInstanceProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of
   *       provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of provisioned resources for a service instance.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

export interface GetServiceInstanceInput {
  /**
   * <p>The name of a service instance that you want to get the detailed data for.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;
}

export interface GetServiceInstanceOutput {
  /**
   * <p>The detailed data of the requested service instance.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export enum ListServiceInstancesFilterBy {
  CREATED_AT_AFTER = "createdAtAfter",
  CREATED_AT_BEFORE = "createdAtBefore",
  DEPLOYED_TEMPLATE_VERSION_STATUS = "deployedTemplateVersionStatus",
  DEPLOYMENT_STATUS = "deploymentStatus",
  ENVIRONMENT_NAME = "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT_AFTER = "lastDeploymentAttemptedAtAfter",
  LAST_DEPLOYMENT_ATTEMPTED_AT_BEFORE = "lastDeploymentAttemptedAtBefore",
  NAME = "name",
  SERVICE_NAME = "serviceName",
  TEMPLATE_NAME = "templateName",
}

/**
 * <p>A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.</p>
 */
export interface ListServiceInstancesFilter {
  /**
   * <p>The name of a filtering criterion.</p>
   */
  key?: ListServiceInstancesFilterBy | string;

  /**
   * <p>A value to filter by.</p>
   *          <p>With the date/time keys (<code>*At{Before,After}</code>), the value is a valid <a href="https://datatracker.ietf.org/doc/html/rfc3339.html">RFC
   *         3339</a> string with no UTC offset and with an optional fractional precision (for example, <code>1985-04-12T23:20:50.52Z</code>).</p>
   */
  value?: string;
}

export enum ListServiceInstancesSortBy {
  CREATED_AT = "createdAt",
  DEPLOYMENT_STATUS = "deploymentStatus",
  ENVIRONMENT_NAME = "environmentName",
  LAST_DEPLOYMENT_ATTEMPTED_AT = "lastDeploymentAttemptedAt",
  NAME = "name",
  SERVICE_NAME = "serviceName",
  TEMPLATE_NAME = "templateName",
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListServiceInstancesInput {
  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName?: string;

  /**
   * <p>A token that indicates the location of the next service in the array of service instances, after the list of service instances that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of service instances to list.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of filtering criteria that scope down the result list. By default, all service instances in the Amazon Web Services account are returned.</p>
   */
  filters?: ListServiceInstancesFilter[];

  /**
   * <p>The field that the result list is sorted by.</p>
   *          <p>When you choose to sort by <code>serviceName</code>, service instances within each service are sorted by service instance name.</p>
   *          <p>Default: <code>serviceName</code>
   *          </p>
   */
  sortBy?: ListServiceInstancesSortBy | string;

  /**
   * <p>Result list sort order.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  sortOrder?: SortOrder | string;
}

/**
 * <p>Summary data of an Proton service instance resource.</p>
 */
export interface ServiceInstanceSummary {
  /**
   * <p>The name of the service instance.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the service instance was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when a deployment of the service was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * <p>The time when the service was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the environment that the service instance was deployed into.</p>
   */
  environmentName: string | undefined;

  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The service instance template major version.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The service instance template minor version.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * <p>The service instance deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | string | undefined;

  /**
   * <p>A service instance deployment status message.</p>
   */
  deploymentStatusMessage?: string;
}

export interface ListServiceInstancesOutput {
  /**
   * <p>A token that indicates the location of the next service instance in the array of service instances, after the current requested list of service
   *       instances.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service instances with summary data.</p>
   */
  serviceInstances: ServiceInstanceSummary[] | undefined;
}

export interface UpdateServiceInstanceInput {
  /**
   * <p>The name of the service instance to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The deployment type. It defines the mode for updating a service instance, as follows:</p>
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
   *                <p>In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated.
   *               <i>Don’t</i> include major or minor version parameters when you use this deployment type.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version
   *             in use, by default. You can also specify a different minor version of the current major version in use.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current
   *             template, by default. You can specify a different major version that's higher than the major version in use and a minor version.</p>
   *             </dd>
   *          </dl>
   */
  deploymentType: DeploymentUpdateType | string | undefined;

  /**
   * <p>The formatted specification that defines the service instance update.</p>
   */
  spec?: string;

  /**
   * <p>The major version of the service template to update.</p>
   */
  templateMajorVersion?: string;

  /**
   * <p>The minor version of the service template to update.</p>
   */
  templateMinorVersion?: string;
}

export interface UpdateServiceInstanceOutput {
  /**
   * <p>The service instance summary data that's returned by Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export interface ListServicePipelineOutputsInput {
  /**
   * <p>The name of the service whose pipeline's outputs you want.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;
}

export interface ListServicePipelineOutputsOutput {
  /**
   * <p>A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service pipeline Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

export interface ListServicePipelineProvisionedResourcesInput {
  /**
   * <p>The name of the service whose pipeline's provisioned resources you want.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources
   *       that was previously requested.</p>
   */
  nextToken?: string;
}

export interface ListServicePipelineProvisionedResourcesOutput {
  /**
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of
   *       provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of provisioned resources for a service and pipeline.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

export interface UpdateServicePipelineInput {
  /**
   * <p>The name of the service to that the pipeline is associated with.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The spec for the service pipeline to update.</p>
   */
  spec: string | undefined;

  /**
   * <p>The deployment type.</p>
   *          <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p>
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
   *                <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated.
   *               <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version
   *             in use, by default. You can specify a different minor version of the current major version in use.</p>
   *             </dd>
   *             <dt/>
   *             <dd>
   *                <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current
   *             template, by default. You can specify a different major version that's higher than the major version in use and a minor version.</p>
   *             </dd>
   *          </dl>
   */
  deploymentType: DeploymentUpdateType | string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service that the pipeline is associated with.</p>
   */
  templateMajorVersion?: string;

  /**
   * <p>The minor version of the service template that was used to create the service that the pipeline is associated with.</p>
   */
  templateMinorVersion?: string;
}

export interface UpdateServicePipelineOutput {
  /**
   * <p>The pipeline details that are returned by Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

export interface CreateServiceInput {
  /**
   * <p>The service name.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the Proton service.</p>
   */
  description?: string;

  /**
   * <p>The name of the service template that's used to create the service.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the service template that was used to create the service.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The minor version of the service template that was used to create the service.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format.
   *         <i>Don’t</i> include pipeline inputs in the spec if your service template <i>doesn’t</i> include a service pipeline. For
   *       more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-create-svc.html">Create a service</a> in the <i>Proton
   *         User Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an AWS CodeStar connection</a> in the <i>Proton User
   *         Guide</i>. <i>Don't</i> include this parameter if your service template <i>doesn't</i> include a service
   *       pipeline.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * <p>The ID of the code repository. <i>Don't</i> include this parameter if your service template <i>doesn't</i> include a
   *       service pipeline.</p>
   */
  repositoryId?: string;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in Proton. <i>Don't</i> include this parameter if your
   *       service template <i>doesn't</i> include a service pipeline.</p>
   */
  branchName?: string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

export enum ServiceStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_FAILED_CLEANUP_COMPLETE = "CREATE_FAILED_CLEANUP_COMPLETE",
  CREATE_FAILED_CLEANUP_FAILED = "CREATE_FAILED_CLEANUP_FAILED",
  CREATE_FAILED_CLEANUP_IN_PROGRESS = "CREATE_FAILED_CLEANUP_IN_PROGRESS",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE_CLEANUP_FAILED = "UPDATE_COMPLETE_CLEANUP_FAILED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_FAILED_CLEANUP_COMPLETE = "UPDATE_FAILED_CLEANUP_COMPLETE",
  UPDATE_FAILED_CLEANUP_FAILED = "UPDATE_FAILED_CLEANUP_FAILED",
  UPDATE_FAILED_CLEANUP_IN_PROGRESS = "UPDATE_FAILED_CLEANUP_IN_PROGRESS",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Detailed data of an Proton service resource.</p>
 */
export interface Service {
  /**
   * <p>The name of the service.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the service.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The time when the service was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the service.</p>
   */
  status: ServiceStatus | string | undefined;

  /**
   * <p>A service status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>The formatted specification that defines the service.</p>
   */
  spec: string | undefined;

  /**
   * <p>The service pipeline detail data.</p>
   */
  pipeline?: ServicePipeline;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an AWS CodeStar connection</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * <p>The ID of the source code repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in Proton.</p>
   */
  branchName?: string;
}

export interface CreateServiceOutput {
  /**
   * <p>The service detail data that's returned by Proton.</p>
   */
  service: Service | undefined;
}

export interface DeleteServiceInput {
  /**
   * <p>The name of the service to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteServiceOutput {
  /**
   * <p>The detailed data of the service being deleted.</p>
   */
  service?: Service;
}

export interface GetServiceInput {
  /**
   * <p>The name of the service that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

export interface GetServiceOutput {
  /**
   * <p>The detailed data of the requested service.</p>
   */
  service?: Service;
}

export interface ListServicesInput {
  /**
   * <p>A token that indicates the location of the next service in the array of services, after the list of services that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of services to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary data of an Proton service resource.</p>
 */
export interface ServiceSummary {
  /**
   * <p>The name of the service.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the service.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The time when the service was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The status of the service.</p>
   */
  status: ServiceStatus | string | undefined;

  /**
   * <p>A service status message.</p>
   */
  statusMessage?: string;
}

export interface ListServicesOutput {
  /**
   * <p>A token that indicates the location of the next service in the array of services, after the current requested list of services.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of services with summaries of detail data.</p>
   */
  services: ServiceSummary[] | undefined;
}

export interface UpdateServiceInput {
  /**
   * <p>The name of the service to edit.</p>
   */
  name: string | undefined;

  /**
   * <p>The edited service description.</p>
   */
  description?: string;

  /**
   * <p>Lists the service instances to add and the existing service instances to remain. Omit the existing service instances to delete from the list.
   *         <i>Don't</i> include edits to the existing service instances or pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-update.html">Edit a service</a> in the <i>Proton User Guide</i>.</p>
   */
  spec?: string;
}

export interface UpdateServiceOutput {
  /**
   * <p>The service detail data that's returned by Proton.</p>
   */
  service: Service | undefined;
}

export interface CreateServiceTemplateInput {
  /**
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * <p>A customer provided encryption key that's used to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * <p>By default, Proton provides a service pipeline for your service. When this parameter is included, it indicates that an Proton service pipeline
   *         <i>isn't</i> provided for your service. After it's included, it <i>can't</i> be changed. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a> in the <i>Proton
   *         User Guide</i>.</p>
   */
  pipelineProvisioning?: Provisioning | string;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * <p>Detailed data of an Proton service template resource.</p>
 */
export interface ServiceTemplate {
  /**
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The service template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * <p>The recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>The customer provided service template encryption key that's used to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template. Otherwise, a service pipeline
   *         <i>isn't</i> included in the service template.</p>
   */
  pipelineProvisioning?: Provisioning | string;
}

export interface CreateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

export interface DeleteServiceTemplateInput {
  /**
   * <p>The name of the service template to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteServiceTemplateOutput {
  /**
   * <p>The detailed data of the service template being deleted.</p>
   */
  serviceTemplate?: ServiceTemplate;
}

export interface GetServiceTemplateInput {
  /**
   * <p>The name of the service template that you want to get detailed data for.</p>
   */
  name: string | undefined;
}

export interface GetServiceTemplateOutput {
  /**
   * <p>The detailed data of the requested service template.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

export interface ListServiceTemplatesInput {
  /**
   * <p>A token that indicates the location of the next service template in the array of service templates, after the list of service templates previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of service templates to list.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary data of an Proton service template resource.</p>
 */
export interface ServiceTemplateSummary {
  /**
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>The service template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * <p>The recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template, otherwise a service pipeline
   *         <i>isn't</i> included in the service template.</p>
   */
  pipelineProvisioning?: Provisioning | string;
}

export interface ListServiceTemplatesOutput {
  /**
   * <p>A token that indicates the location of the next service template in the array of service templates, after the current requested list of service
   *       templates.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service templates with detail data.</p>
   */
  templates: ServiceTemplateSummary[] | undefined;
}

export interface UpdateServiceTemplateInput {
  /**
   * <p>The name of the service template to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service template to update that's displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the service template update.</p>
   */
  description?: string;
}

export interface UpdateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * <p>Compatible environment template data.</p>
 */
export interface CompatibleEnvironmentTemplateInput {
  /**
   * <p>The compatible environment template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the compatible environment template.</p>
   */
  majorVersion: string | undefined;
}

export enum ServiceTemplateSupportedComponentSourceType {
  DIRECTLY_DEFINED = "DIRECTLY_DEFINED",
}

export interface CreateServiceTemplateVersionInput {
  /**
   * <p>When included, if two identical requests are made with the same client token, Proton returns the service template version that the first request
   *       created.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>A description of the new version of a service template.</p>
   */
  description?: string;

  /**
   * <p>To create a new minor version of the service template, include a <code>major Version</code>.</p>
   *          <p>To create a new major and minor version of the service template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of a service template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>An array of environment template objects that are compatible with the new service template version. A service instance based on this service template
   *       version can run in environments based on compatible templates.</p>
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * <p>An optional list of metadata items that you can associate with the Proton service template version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template
   *       version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  supportedComponentSources?: (ServiceTemplateSupportedComponentSourceType | string)[];
}

/**
 * <p>Compatible environment template data.</p>
 */
export interface CompatibleEnvironmentTemplate {
  /**
   * <p>The compatible environment template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The major version of the compatible environment template.</p>
   */
  majorVersion: string | undefined;
}

/**
 * <p>Detailed data of an Proton service template version resource.</p>
 */
export interface ServiceTemplateVersion {
  /**
   * <p>The name of the version of a service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the service template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * <p>The service template version status.</p>
   */
  status: TemplateVersionStatus | string | undefined;

  /**
   * <p>A service template version status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>A description of the version of a service template.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of a service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of a service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>An array of compatible environment template names for the major version of a service template.</p>
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[] | undefined;

  /**
   * <p>The schema of the version of a service template.</p>
   */
  schema?: string;

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template
   *       version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  supportedComponentSources?: (ServiceTemplateSupportedComponentSourceType | string)[];
}

export interface CreateServiceTemplateVersionOutput {
  /**
   * <p>The service template version summary of detail data that's returned by Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export interface DeleteServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The service template major version to delete.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The service template minor version to delete.</p>
   */
  minorVersion: string | undefined;
}

export interface DeleteServiceTemplateVersionOutput {
  /**
   * <p>The detailed data of the service template version being deleted.</p>
   */
  serviceTemplateVersion?: ServiceTemplateVersion;
}

export interface GetServiceTemplateVersionInput {
  /**
   * <p>The name of the service template a version of which you want to get detailed data for.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To get service template major version detail data, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To get service template minor version detail data, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

export interface GetServiceTemplateVersionOutput {
  /**
   * <p>The detailed data of the requested service template version.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export interface ListServiceTemplateVersionsInput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the list
   *       of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of major or minor versions of a service template to list.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To view a list of minor of versions under a major version of a service template, include <code>major Version</code>.</p>
   *          <p>To view a list of major versions of a service template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;
}

/**
 * <p>Summary data of an Proton service template version resource.</p>
 */
export interface ServiceTemplateVersionSummary {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The recommended minor version of the service template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * <p>The service template minor version status.</p>
   */
  status: TemplateVersionStatus | string | undefined;

  /**
   * <p>A service template minor version status message.</p>
   */
  statusMessage?: string;

  /**
   * <p>A description of the version of a service template.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when the version of a service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version of a service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;
}

export interface ListServiceTemplateVersionsOutput {
  /**
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the
   *       current requested list of service major or minor versions.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of major or minor versions of a service template with detail data.</p>
   */
  templateVersions: ServiceTemplateVersionSummary[] | undefined;
}

export interface UpdateServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of a service template, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To update a minor version of a service template, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>A description of a service template version to update.</p>
   */
  description?: string;

  /**
   * <p>The status of the service template minor version to update.</p>
   */
  status?: TemplateVersionStatus | string;

  /**
   * <p>An array of environment template objects that are compatible with this service template version. A service instance based on this service template
   *       version can run in environments based on compatible templates.</p>
   */
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];

  /**
   * <p>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template
   *       version.</p>
   *          <note>
   *             <p>A change to <code>supportedComponentSources</code> doesn't impact existing component attachments to instances based on this template version. A
   *         change only affects later associations.</p>
   *          </note>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  supportedComponentSources?: (ServiceTemplateSupportedComponentSourceType | string)[];
}

export interface UpdateServiceTemplateVersionOutput {
  /**
   * <p>The service template version detail data that's returned by Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of customer tags to apply to the Proton resource.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceOutput {}

export interface CreateTemplateSyncConfigInput {
  /**
   * <p>The name of your registered template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The type of the registered template.</p>
   */
  templateType: TemplateType | string | undefined;

  /**
   * <p>The provider type for your repository.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch for your template.</p>
   */
  branch: string | undefined;

  /**
   * <p>A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this repository
   *       directory.</p>
   */
  subdirectory?: string;
}

/**
 * <p>The detail data for a template sync configuration.</p>
 */
export interface TemplateSyncConfig {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   */
  templateType: TemplateType | string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * <p>A subdirectory path to your template bundle version.</p>
   */
  subdirectory?: string;
}

export interface CreateTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

export interface DeleteTemplateSyncConfigInput {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   */
  templateType: TemplateType | string | undefined;
}

export interface DeleteTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

export interface GetTemplateSyncConfigInput {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The template type.</p>
   */
  templateType: TemplateType | string | undefined;
}

export interface GetTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

export interface UpdateTemplateSyncConfigInput {
  /**
   * <p>The synced template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The synced template type.</p>
   */
  templateType: TemplateType | string | undefined;

  /**
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | string | undefined;

  /**
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The repository branch for your template.</p>
   */
  branch: string | undefined;

  /**
   * <p>A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.</p>
   */
  subdirectory?: string;
}

export interface UpdateTemplateSyncConfigOutput {
  /**
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove customer tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of customer tag keys that indicate the customer tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

/**
 * @internal
 */
export const AcceptEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: AcceptEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentAccountConnectionFilterSensitiveLog = (obj: EnvironmentAccountConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: AcceptEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryBranchFilterSensitiveLog = (obj: RepositoryBranch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountSettingsFilterSensitiveLog = (obj: AccountSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountSettingsInputFilterSensitiveLog = (obj: GetAccountSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountSettingsOutputFilterSensitiveLog = (obj: GetAccountSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryBranchInputFilterSensitiveLog = (obj: RepositoryBranchInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsInputFilterSensitiveLog = (obj: UpdateAccountSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsOutputFilterSensitiveLog = (obj: UpdateAccountSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelComponentDeploymentInputFilterSensitiveLog = (obj: CancelComponentDeploymentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentFilterSensitiveLog = (obj: Component): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  ...(obj.serviceSpec && { serviceSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelComponentDeploymentOutputFilterSensitiveLog = (obj: CancelComponentDeploymentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
});

/**
 * @internal
 */
export const CancelEnvironmentDeploymentInputFilterSensitiveLog = (obj: CancelEnvironmentDeploymentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelEnvironmentDeploymentOutputFilterSensitiveLog = (obj: CancelEnvironmentDeploymentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const CancelServiceInstanceDeploymentInputFilterSensitiveLog = (
  obj: CancelServiceInstanceDeploymentInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceInstanceFilterSensitiveLog = (obj: ServiceInstance): any => ({
  ...obj,
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelServiceInstanceDeploymentOutputFilterSensitiveLog = (
  obj: CancelServiceInstanceDeploymentOutput
): any => ({
  ...obj,
  ...(obj.serviceInstance && { serviceInstance: ServiceInstanceFilterSensitiveLog(obj.serviceInstance) }),
});

/**
 * @internal
 */
export const CancelServicePipelineDeploymentInputFilterSensitiveLog = (
  obj: CancelServicePipelineDeploymentInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServicePipelineFilterSensitiveLog = (obj: ServicePipeline): any => ({
  ...obj,
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelServicePipelineDeploymentOutputFilterSensitiveLog = (
  obj: CancelServicePipelineDeploymentOutput
): any => ({
  ...obj,
  ...(obj.pipeline && { pipeline: ServicePipelineFilterSensitiveLog(obj.pipeline) }),
});

/**
 * @internal
 */
export const ListComponentOutputsInputFilterSensitiveLog = (obj: ListComponentOutputsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFilterSensitiveLog = (obj: Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentOutputsOutputFilterSensitiveLog = (obj: ListComponentOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListComponentProvisionedResourcesInputFilterSensitiveLog = (
  obj: ListComponentProvisionedResourcesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedResourceFilterSensitiveLog = (obj: ProvisionedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentProvisionedResourcesOutputFilterSensitiveLog = (
  obj: ListComponentProvisionedResourcesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentInputFilterSensitiveLog = (obj: CreateComponentInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.templateFile && { templateFile: SENSITIVE_STRING }),
  ...(obj.manifest && { manifest: SENSITIVE_STRING }),
  ...(obj.serviceSpec && { serviceSpec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateComponentOutputFilterSensitiveLog = (obj: CreateComponentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
});

/**
 * @internal
 */
export const DeleteComponentInputFilterSensitiveLog = (obj: DeleteComponentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComponentOutputFilterSensitiveLog = (obj: DeleteComponentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
});

/**
 * @internal
 */
export const GetComponentInputFilterSensitiveLog = (obj: GetComponentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentOutputFilterSensitiveLog = (obj: GetComponentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
});

/**
 * @internal
 */
export const ListComponentsInputFilterSensitiveLog = (obj: ListComponentsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentSummaryFilterSensitiveLog = (obj: ComponentSummary): any => ({
  ...obj,
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListComponentsOutputFilterSensitiveLog = (obj: ListComponentsOutput): any => ({
  ...obj,
  ...(obj.components && { components: obj.components.map((item) => ComponentSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateComponentInputFilterSensitiveLog = (obj: UpdateComponentInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.serviceSpec && { serviceSpec: SENSITIVE_STRING }),
  ...(obj.templateFile && { templateFile: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateComponentOutputFilterSensitiveLog = (obj: UpdateComponentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
});

/**
 * @internal
 */
export const CreateEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: CreateEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: CreateEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: DeleteEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: DeleteEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: GetEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: GetEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentAccountConnectionsInputFilterSensitiveLog = (
  obj: ListEnvironmentAccountConnectionsInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentAccountConnectionSummaryFilterSensitiveLog = (
  obj: EnvironmentAccountConnectionSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentAccountConnectionsOutputFilterSensitiveLog = (
  obj: ListEnvironmentAccountConnectionsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: RejectEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: RejectEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentAccountConnectionInputFilterSensitiveLog = (
  obj: UpdateEnvironmentAccountConnectionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentAccountConnectionOutputFilterSensitiveLog = (
  obj: UpdateEnvironmentAccountConnectionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentOutputsInputFilterSensitiveLog = (obj: ListEnvironmentOutputsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentOutputsOutputFilterSensitiveLog = (obj: ListEnvironmentOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentProvisionedResourcesInputFilterSensitiveLog = (
  obj: ListEnvironmentProvisionedResourcesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentProvisionedResourcesOutputFilterSensitiveLog = (
  obj: ListEnvironmentProvisionedResourcesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEnvironmentInputFilterSensitiveLog = (obj: CreateEnvironmentInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentOutputFilterSensitiveLog = (obj: CreateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const DeleteEnvironmentInputFilterSensitiveLog = (obj: DeleteEnvironmentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentOutputFilterSensitiveLog = (obj: DeleteEnvironmentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const GetEnvironmentInputFilterSensitiveLog = (obj: GetEnvironmentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const EnvironmentTemplateFilterFilterSensitiveLog = (obj: EnvironmentTemplateFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentsInputFilterSensitiveLog = (obj: ListEnvironmentsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentsOutputFilterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
  ...obj,
  ...(obj.environments && { environments: obj.environments.map((item) => EnvironmentSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentInputFilterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentOutputFilterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const CreateEnvironmentTemplateInputFilterSensitiveLog = (obj: CreateEnvironmentTemplateInput): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentTemplateFilterSensitiveLog = (obj: EnvironmentTemplate): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentTemplateOutputFilterSensitiveLog = (obj: CreateEnvironmentTemplateOutput): any => ({
  ...obj,
  ...(obj.environmentTemplate && {
    environmentTemplate: EnvironmentTemplateFilterSensitiveLog(obj.environmentTemplate),
  }),
});

/**
 * @internal
 */
export const DeleteEnvironmentTemplateInputFilterSensitiveLog = (obj: DeleteEnvironmentTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentTemplateOutputFilterSensitiveLog = (obj: DeleteEnvironmentTemplateOutput): any => ({
  ...obj,
  ...(obj.environmentTemplate && {
    environmentTemplate: EnvironmentTemplateFilterSensitiveLog(obj.environmentTemplate),
  }),
});

/**
 * @internal
 */
export const GetEnvironmentTemplateInputFilterSensitiveLog = (obj: GetEnvironmentTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentTemplateOutputFilterSensitiveLog = (obj: GetEnvironmentTemplateOutput): any => ({
  ...obj,
  ...(obj.environmentTemplate && {
    environmentTemplate: EnvironmentTemplateFilterSensitiveLog(obj.environmentTemplate),
  }),
});

/**
 * @internal
 */
export const ListEnvironmentTemplatesInputFilterSensitiveLog = (obj: ListEnvironmentTemplatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentTemplateSummaryFilterSensitiveLog = (obj: EnvironmentTemplateSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentTemplatesOutputFilterSensitiveLog = (obj: ListEnvironmentTemplatesOutput): any => ({
  ...obj,
  ...(obj.templates && { templates: obj.templates.map((item) => EnvironmentTemplateSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentTemplateInputFilterSensitiveLog = (obj: UpdateEnvironmentTemplateInput): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentTemplateOutputFilterSensitiveLog = (obj: UpdateEnvironmentTemplateOutput): any => ({
  ...obj,
  ...(obj.environmentTemplate && {
    environmentTemplate: EnvironmentTemplateFilterSensitiveLog(obj.environmentTemplate),
  }),
});

/**
 * @internal
 */
export const S3ObjectSourceFilterSensitiveLog = (obj: S3ObjectSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateVersionSourceInputFilterSensitiveLog = (obj: TemplateVersionSourceInput): any => {
  if (obj.s3 !== undefined) return { s3: S3ObjectSourceFilterSensitiveLog(obj.s3) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateEnvironmentTemplateVersionInputFilterSensitiveLog = (
  obj: CreateEnvironmentTemplateVersionInput
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.source && { source: TemplateVersionSourceInputFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const EnvironmentTemplateVersionFilterSensitiveLog = (obj: EnvironmentTemplateVersion): any => ({
  ...obj,
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.schema && { schema: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentTemplateVersionOutputFilterSensitiveLog = (
  obj: CreateEnvironmentTemplateVersionOutput
): any => ({
  ...obj,
  ...(obj.environmentTemplateVersion && {
    environmentTemplateVersion: EnvironmentTemplateVersionFilterSensitiveLog(obj.environmentTemplateVersion),
  }),
});

/**
 * @internal
 */
export const DeleteEnvironmentTemplateVersionInputFilterSensitiveLog = (
  obj: DeleteEnvironmentTemplateVersionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentTemplateVersionOutputFilterSensitiveLog = (
  obj: DeleteEnvironmentTemplateVersionOutput
): any => ({
  ...obj,
  ...(obj.environmentTemplateVersion && {
    environmentTemplateVersion: EnvironmentTemplateVersionFilterSensitiveLog(obj.environmentTemplateVersion),
  }),
});

/**
 * @internal
 */
export const GetEnvironmentTemplateVersionInputFilterSensitiveLog = (obj: GetEnvironmentTemplateVersionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentTemplateVersionOutputFilterSensitiveLog = (
  obj: GetEnvironmentTemplateVersionOutput
): any => ({
  ...obj,
  ...(obj.environmentTemplateVersion && {
    environmentTemplateVersion: EnvironmentTemplateVersionFilterSensitiveLog(obj.environmentTemplateVersion),
  }),
});

/**
 * @internal
 */
export const ListEnvironmentTemplateVersionsInputFilterSensitiveLog = (
  obj: ListEnvironmentTemplateVersionsInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentTemplateVersionSummaryFilterSensitiveLog = (obj: EnvironmentTemplateVersionSummary): any => ({
  ...obj,
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEnvironmentTemplateVersionsOutputFilterSensitiveLog = (
  obj: ListEnvironmentTemplateVersionsOutput
): any => ({
  ...obj,
  ...(obj.templateVersions && {
    templateVersions: obj.templateVersions.map((item) => EnvironmentTemplateVersionSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateEnvironmentTemplateVersionInputFilterSensitiveLog = (
  obj: UpdateEnvironmentTemplateVersionInput
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentTemplateVersionOutputFilterSensitiveLog = (
  obj: UpdateEnvironmentTemplateVersionOutput
): any => ({
  ...obj,
  ...(obj.environmentTemplateVersion && {
    environmentTemplateVersion: EnvironmentTemplateVersionFilterSensitiveLog(obj.environmentTemplateVersion),
  }),
});

/**
 * @internal
 */
export const GetRepositorySyncStatusInputFilterSensitiveLog = (obj: GetRepositorySyncStatusInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositorySyncEventFilterSensitiveLog = (obj: RepositorySyncEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositorySyncAttemptFilterSensitiveLog = (obj: RepositorySyncAttempt): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositorySyncStatusOutputFilterSensitiveLog = (obj: GetRepositorySyncStatusOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateSyncStatusInputFilterSensitiveLog = (obj: GetTemplateSyncStatusInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevisionFilterSensitiveLog = (obj: Revision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSyncEventFilterSensitiveLog = (obj: ResourceSyncEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSyncAttemptFilterSensitiveLog = (obj: ResourceSyncAttempt): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateSyncStatusOutputFilterSensitiveLog = (obj: GetTemplateSyncStatusOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositorySyncDefinitionsInputFilterSensitiveLog = (obj: ListRepositorySyncDefinitionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositorySyncDefinitionFilterSensitiveLog = (obj: RepositorySyncDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositorySyncDefinitionsOutputFilterSensitiveLog = (
  obj: ListRepositorySyncDefinitionsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyResourceDeploymentStatusChangeInputFilterSensitiveLog = (
  obj: NotifyResourceDeploymentStatusChangeInput
): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NotifyResourceDeploymentStatusChangeOutputFilterSensitiveLog = (
  obj: NotifyResourceDeploymentStatusChangeOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryInputFilterSensitiveLog = (obj: CreateRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryFilterSensitiveLog = (obj: Repository): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryOutputFilterSensitiveLog = (obj: CreateRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryInputFilterSensitiveLog = (obj: DeleteRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryOutputFilterSensitiveLog = (obj: DeleteRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryInputFilterSensitiveLog = (obj: GetRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryOutputFilterSensitiveLog = (obj: GetRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesInputFilterSensitiveLog = (obj: ListRepositoriesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositorySummaryFilterSensitiveLog = (obj: RepositorySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesOutputFilterSensitiveLog = (obj: ListRepositoriesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceInstanceOutputsInputFilterSensitiveLog = (obj: ListServiceInstanceOutputsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceInstanceOutputsOutputFilterSensitiveLog = (obj: ListServiceInstanceOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServiceInstanceProvisionedResourcesInputFilterSensitiveLog = (
  obj: ListServiceInstanceProvisionedResourcesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceInstanceProvisionedResourcesOutputFilterSensitiveLog = (
  obj: ListServiceInstanceProvisionedResourcesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceInstanceInputFilterSensitiveLog = (obj: GetServiceInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceInstanceOutputFilterSensitiveLog = (obj: GetServiceInstanceOutput): any => ({
  ...obj,
  ...(obj.serviceInstance && { serviceInstance: ServiceInstanceFilterSensitiveLog(obj.serviceInstance) }),
});

/**
 * @internal
 */
export const ListServiceInstancesFilterFilterSensitiveLog = (obj: ListServiceInstancesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceInstancesInputFilterSensitiveLog = (obj: ListServiceInstancesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceInstanceSummaryFilterSensitiveLog = (obj: ServiceInstanceSummary): any => ({
  ...obj,
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServiceInstancesOutputFilterSensitiveLog = (obj: ListServiceInstancesOutput): any => ({
  ...obj,
  ...(obj.serviceInstances && {
    serviceInstances: obj.serviceInstances.map((item) => ServiceInstanceSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateServiceInstanceInputFilterSensitiveLog = (obj: UpdateServiceInstanceInput): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServiceInstanceOutputFilterSensitiveLog = (obj: UpdateServiceInstanceOutput): any => ({
  ...obj,
  ...(obj.serviceInstance && { serviceInstance: ServiceInstanceFilterSensitiveLog(obj.serviceInstance) }),
});

/**
 * @internal
 */
export const ListServicePipelineOutputsInputFilterSensitiveLog = (obj: ListServicePipelineOutputsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServicePipelineOutputsOutputFilterSensitiveLog = (obj: ListServicePipelineOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServicePipelineProvisionedResourcesInputFilterSensitiveLog = (
  obj: ListServicePipelineProvisionedResourcesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServicePipelineProvisionedResourcesOutputFilterSensitiveLog = (
  obj: ListServicePipelineProvisionedResourcesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServicePipelineInputFilterSensitiveLog = (obj: UpdateServicePipelineInput): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServicePipelineOutputFilterSensitiveLog = (obj: UpdateServicePipelineOutput): any => ({
  ...obj,
  ...(obj.pipeline && { pipeline: ServicePipelineFilterSensitiveLog(obj.pipeline) }),
});

/**
 * @internal
 */
export const CreateServiceInputFilterSensitiveLog = (obj: CreateServiceInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
  ...(obj.pipeline && { pipeline: ServicePipelineFilterSensitiveLog(obj.pipeline) }),
});

/**
 * @internal
 */
export const CreateServiceOutputFilterSensitiveLog = (obj: CreateServiceOutput): any => ({
  ...obj,
  ...(obj.service && { service: ServiceFilterSensitiveLog(obj.service) }),
});

/**
 * @internal
 */
export const DeleteServiceInputFilterSensitiveLog = (obj: DeleteServiceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceOutputFilterSensitiveLog = (obj: DeleteServiceOutput): any => ({
  ...obj,
  ...(obj.service && { service: ServiceFilterSensitiveLog(obj.service) }),
});

/**
 * @internal
 */
export const GetServiceInputFilterSensitiveLog = (obj: GetServiceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceOutputFilterSensitiveLog = (obj: GetServiceOutput): any => ({
  ...obj,
  ...(obj.service && { service: ServiceFilterSensitiveLog(obj.service) }),
});

/**
 * @internal
 */
export const ListServicesInputFilterSensitiveLog = (obj: ListServicesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceSummaryFilterSensitiveLog = (obj: ServiceSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServicesOutputFilterSensitiveLog = (obj: ListServicesOutput): any => ({
  ...obj,
  ...(obj.services && { services: obj.services.map((item) => ServiceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateServiceInputFilterSensitiveLog = (obj: UpdateServiceInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServiceOutputFilterSensitiveLog = (obj: UpdateServiceOutput): any => ({
  ...obj,
  ...(obj.service && { service: ServiceFilterSensitiveLog(obj.service) }),
});

/**
 * @internal
 */
export const CreateServiceTemplateInputFilterSensitiveLog = (obj: CreateServiceTemplateInput): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServiceTemplateFilterSensitiveLog = (obj: ServiceTemplate): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceTemplateOutputFilterSensitiveLog = (obj: CreateServiceTemplateOutput): any => ({
  ...obj,
  ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplateFilterSensitiveLog(obj.serviceTemplate) }),
});

/**
 * @internal
 */
export const DeleteServiceTemplateInputFilterSensitiveLog = (obj: DeleteServiceTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceTemplateOutputFilterSensitiveLog = (obj: DeleteServiceTemplateOutput): any => ({
  ...obj,
  ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplateFilterSensitiveLog(obj.serviceTemplate) }),
});

/**
 * @internal
 */
export const GetServiceTemplateInputFilterSensitiveLog = (obj: GetServiceTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceTemplateOutputFilterSensitiveLog = (obj: GetServiceTemplateOutput): any => ({
  ...obj,
  ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplateFilterSensitiveLog(obj.serviceTemplate) }),
});

/**
 * @internal
 */
export const ListServiceTemplatesInputFilterSensitiveLog = (obj: ListServiceTemplatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceTemplateSummaryFilterSensitiveLog = (obj: ServiceTemplateSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServiceTemplatesOutputFilterSensitiveLog = (obj: ListServiceTemplatesOutput): any => ({
  ...obj,
  ...(obj.templates && { templates: obj.templates.map((item) => ServiceTemplateSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateServiceTemplateInputFilterSensitiveLog = (obj: UpdateServiceTemplateInput): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServiceTemplateOutputFilterSensitiveLog = (obj: UpdateServiceTemplateOutput): any => ({
  ...obj,
  ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplateFilterSensitiveLog(obj.serviceTemplate) }),
});

/**
 * @internal
 */
export const CompatibleEnvironmentTemplateInputFilterSensitiveLog = (obj: CompatibleEnvironmentTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateServiceTemplateVersionInputFilterSensitiveLog = (obj: CreateServiceTemplateVersionInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.source && { source: TemplateVersionSourceInputFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const CompatibleEnvironmentTemplateFilterSensitiveLog = (obj: CompatibleEnvironmentTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceTemplateVersionFilterSensitiveLog = (obj: ServiceTemplateVersion): any => ({
  ...obj,
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.schema && { schema: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceTemplateVersionOutputFilterSensitiveLog = (obj: CreateServiceTemplateVersionOutput): any => ({
  ...obj,
  ...(obj.serviceTemplateVersion && {
    serviceTemplateVersion: ServiceTemplateVersionFilterSensitiveLog(obj.serviceTemplateVersion),
  }),
});

/**
 * @internal
 */
export const DeleteServiceTemplateVersionInputFilterSensitiveLog = (obj: DeleteServiceTemplateVersionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceTemplateVersionOutputFilterSensitiveLog = (obj: DeleteServiceTemplateVersionOutput): any => ({
  ...obj,
  ...(obj.serviceTemplateVersion && {
    serviceTemplateVersion: ServiceTemplateVersionFilterSensitiveLog(obj.serviceTemplateVersion),
  }),
});

/**
 * @internal
 */
export const GetServiceTemplateVersionInputFilterSensitiveLog = (obj: GetServiceTemplateVersionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceTemplateVersionOutputFilterSensitiveLog = (obj: GetServiceTemplateVersionOutput): any => ({
  ...obj,
  ...(obj.serviceTemplateVersion && {
    serviceTemplateVersion: ServiceTemplateVersionFilterSensitiveLog(obj.serviceTemplateVersion),
  }),
});

/**
 * @internal
 */
export const ListServiceTemplateVersionsInputFilterSensitiveLog = (obj: ListServiceTemplateVersionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceTemplateVersionSummaryFilterSensitiveLog = (obj: ServiceTemplateVersionSummary): any => ({
  ...obj,
  ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServiceTemplateVersionsOutputFilterSensitiveLog = (obj: ListServiceTemplateVersionsOutput): any => ({
  ...obj,
  ...(obj.templateVersions && {
    templateVersions: obj.templateVersions.map((item) => ServiceTemplateVersionSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateServiceTemplateVersionInputFilterSensitiveLog = (obj: UpdateServiceTemplateVersionInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateServiceTemplateVersionOutputFilterSensitiveLog = (obj: UpdateServiceTemplateVersionOutput): any => ({
  ...obj,
  ...(obj.serviceTemplateVersion && {
    serviceTemplateVersion: ServiceTemplateVersionFilterSensitiveLog(obj.serviceTemplateVersion),
  }),
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateSyncConfigInputFilterSensitiveLog = (obj: CreateTemplateSyncConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSyncConfigFilterSensitiveLog = (obj: TemplateSyncConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTemplateSyncConfigOutputFilterSensitiveLog = (obj: CreateTemplateSyncConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateSyncConfigInputFilterSensitiveLog = (obj: DeleteTemplateSyncConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTemplateSyncConfigOutputFilterSensitiveLog = (obj: DeleteTemplateSyncConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateSyncConfigInputFilterSensitiveLog = (obj: GetTemplateSyncConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateSyncConfigOutputFilterSensitiveLog = (obj: GetTemplateSyncConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTemplateSyncConfigInputFilterSensitiveLog = (obj: UpdateTemplateSyncConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTemplateSyncConfigOutputFilterSensitiveLog = (obj: UpdateTemplateSyncConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});
