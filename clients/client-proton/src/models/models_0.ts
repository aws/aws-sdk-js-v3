// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ProtonServiceException as __BaseException } from "./ProtonServiceException";

/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>The ID of the environment account connection.</p>
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
 * @public
 * <p>Detailed data of an Proton environment account connection resource.</p>
 */
export interface EnvironmentAccountConnection {
  /**
   * @public
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   */
  managementAccountId: string | undefined;

  /**
   * @public
   * <p>The environment account that's connected to the environment account connection.</p>
   */
  environmentAccountId: string | undefined;

  /**
   * @public
   * <p>The IAM service role that's associated with the environment account connection.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The name of the environment that's associated with the environment account connection.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The time when the environment account connection request was made.</p>
   */
  requestedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment account connection was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the environment account connection.</p>
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

/**
 * @public
 */
export interface AcceptEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The environment account connection data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>Detail data for a linked repository branch.</p>
 */
export interface RepositoryBranch {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

/**
 * @public
 * <p>Proton settings that are used for multiple services in the Amazon Web Services account.</p>
 */
export interface AccountSettings {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by
   *       customer-owned automation for self-managed provisioning.</p>
   */
  pipelineServiceRoleArn?: string;

  /**
   * @public
   * <p>The linked repository for pipeline provisioning. Required if you have environments configured for self-managed provisioning with services that include
   *       pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   */
  pipelineProvisioningRepository?: RepositoryBranch;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role that Proton uses for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *       provisioning.</p>
   */
  pipelineCodebuildRoleArn?: string;
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
   * @public
   * <p>The Proton pipeline service role detail data that's returned by Proton.</p>
   */
  accountSettings?: AccountSettings;
}

/**
 * @public
 * <p>Detail input data for a linked repository branch.</p>
 */
export interface RepositoryBranchInput {
  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed
   *    provisioning, and by customer-owned automation for self-managed provisioning.</p>
   *          <p>To remove a previously configured ARN, specify an empty string.</p>
   */
  pipelineServiceRoleArn?: string;

  /**
   * @public
   * <p>A linked repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that
   *    include pipelines. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To remove a previously configured repository, set <code>deletePipelineProvisioningRepository</code> to <code>true</code>, and don't set
   *     <code>pipelineProvisioningRepository</code>.</p>
   */
  pipelineProvisioningRepository?: RepositoryBranchInput;

  /**
   * @public
   * <p>Set to <code>true</code> to remove a configured pipeline repository from the account settings. Don't set this field if you are updating the
   *    configured pipeline repository.</p>
   */
  deletePipelineProvisioningRepository?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Proton assumes this role for CodeBuild-based
   *    provisioning.</p>
   */
  pipelineCodebuildRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * @public
   * <p>The Proton pipeline service role and repository data shared across the Amazon Web Services account.</p>
   */
  accountSettings: AccountSettings | undefined;
}

/**
 * @public
 */
export interface CancelComponentDeploymentInput {
  /**
   * @public
   * <p>The name of the component with the deployment to cancel.</p>
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
 * @public
 * <p>Detailed data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 */
export interface Component {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the Proton environment that this component is associated with.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The time when the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the component was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the component was last attempted.</p>
   */
  lastDeploymentAttemptedAt?: Date;

  /**
   * @public
   * <p>The time when the component was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt?: Date;

  /**
   * @public
   * <p>The component deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>The message associated with the component deployment status.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</p>
   */
  serviceSpec?: string;

  /**
   * @public
   * <p>The last token the client requested.</p>
   */
  lastClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this component.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this component.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface CancelComponentDeploymentOutput {
  /**
   * @public
   * <p>The detailed data of the component with the deployment that is being canceled.</p>
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentInput {
  /**
   * @public
   * <p>The name of the environment with the deployment to cancel.</p>
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
 * @public
 * <p>Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 */
export interface Environment {
  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time when the environment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the environment was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The environment deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>An environment deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * @public
   * <p>The ID of the environment account connection that's used to provision infrastructure resources in an environment account.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * @public
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   */
  environmentAccountId?: string;

  /**
   * @public
   * <p>The environment spec.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning;

  /**
   * @public
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed
   *    provisioning. A linked repository is a repository that has been registered with Proton. For more information, see
   *     <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html">CreateRepository</a>.</p>
   */
  provisioningRepository?: RepositoryBranch;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   */
  codebuildRoleArn?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this environment.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this environment.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface CancelEnvironmentDeploymentOutput {
  /**
   * @public
   * <p>The environment summary data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentInput {
  /**
   * @public
   * <p>The name of the service instance with the deployment to cancel.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * @public
   * <p>The name of the service with the service instance deployment to cancel.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 * <p>Detailed data of an Proton service instance resource.</p>
 */
export interface ServiceInstance {
  /**
   * @public
   * <p>The name of the service instance.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the service instance was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the service instance was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service instance was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * @public
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the environment that the service instance was deployed into.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service template that was used to create the service instance.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service
   *       instance.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service
   *       instance.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The service instance deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>The message associated with the service instance deployment status.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The service spec that was used to create the service instance.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The last client request token received.</p>
   */
  lastClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this service instance.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this service instance.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface CancelServiceInstanceDeploymentOutput {
  /**
   * @public
   * <p>The service instance summary data that's returned by Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentInput {
  /**
   * @public
   * <p>The name of the service with the service pipeline deployment to cancel.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 * <p>Detailed data of an Proton service instance pipeline resource.</p>
 */
export interface ServicePipeline {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service pipeline.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the service pipeline was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the service pipeline was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service pipeline was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * @public
   * <p>The name of the service template that was used to create the service pipeline.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The deployment status of the service pipeline.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>A service pipeline deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The service spec that was used to create the service pipeline.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this service pipeline.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this service pipeline.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface CancelServicePipelineDeploymentOutput {
  /**
   * @public
   * <p>The service pipeline detail data that's returned by Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface ListComponentOutputsInput {
  /**
   * @public
   * <p>The name of the component whose outputs you want.</p>
   */
  componentName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the deployment whose outputs you want.</p>
   */
  deploymentId?: string;
}

/**
 * @public
 * <p>An infrastructure as code defined resource output.</p>
 */
export interface Output {
  /**
   * @public
   * <p>The output key.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The output value.</p>
   */
  valueString?: string;
}

/**
 * @public
 */
export interface ListComponentOutputsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of component Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesInput {
  /**
   * @public
   * <p>The name of the component whose provisioned resources you want.</p>
   */
  componentName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources
   *       that was previously requested.</p>
   */
  nextToken?: string;
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
 * @public
 * <p>Detail data for a provisioned resource.</p>
 */
export interface ProvisionedResource {
  /**
   * @public
   * <p>The provisioned resource name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The provisioned resource identifier.</p>
   */
  identifier?: string;

  /**
   * @public
   * <p>The resource provisioning engine. At this time, <code>CLOUDFORMATION</code> can be used for Amazon Web Services-managed provisioning, and <code>TERRAFORM</code> can
   *       be used for self-managed provisioning.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
   */
  provisioningEngine?: ProvisionedResourceEngine;
}

/**
 * @public
 */
export interface ListComponentProvisionedResourcesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of
   *       provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of provisioned resources for a component.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 * <p>A description of a resource tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the resource tag.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of the resource tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentInput {
  /**
   * @public
   * <p>The customer-provided name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An optional customer-provided description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. If you don't specify this, the component isn't attached to any
   *       service instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service
   *       instance. Specify both <code>serviceInstanceName</code> and <code>serviceName</code> or neither of them.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify
   *         <code>serviceInstanceName</code> and <code>serviceName</code>.</p>
   */
  environmentName?: string;

  /**
   * @public
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   */
  templateFile: string | undefined;

  /**
   * @public
   * <p>A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom
   *       component provisions.</p>
   */
  manifest: string | undefined;

  /**
   * @public
   * <p>The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service
   *       instance.</p>
   */
  serviceSpec?: string;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The client token for the created component.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateComponentOutput {
  /**
   * @public
   * <p>The detailed data of the created component.</p>
   */
  component: Component | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteComponentInput {
  /**
   * @public
   * <p>The name of the component to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentOutput {
  /**
   * @public
   * <p>The detailed data of the component being deleted.</p>
   */
  component?: Component;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * @public
   * <p>The name of the component that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * @public
   * <p>The detailed data of the requested component.</p>
   */
  component?: Component;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * @public
   * <p>A token that indicates the location of the next component in the array of components, after the list of components that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The name of an environment for result list filtering. Proton returns components associated with the environment or attached to service instances
   *       running in it.</p>
   */
  environmentName?: string;

  /**
   * @public
   * <p>The name of a service for result list filtering. Proton returns components attached to service instances of the service.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of a service instance for result list filtering. Proton returns the component attached to the service instance, if any.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The maximum number of components to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 */
export interface ComponentSummary {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the Proton environment that this component is associated with.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The time when the component was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the component was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the component was last attempted.</p>
   */
  lastDeploymentAttemptedAt?: Date;

  /**
   * @public
   * <p>The time when the component was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt?: Date;

  /**
   * @public
   * <p>The component deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>The message associated with the component deployment status.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this component.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this component.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next component in the array of components, after the current requested list of components.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of components with summary data.</p>
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
   * @public
   * <p>The name of the component to update.</p>
   */
  name: string | undefined;

  /**
   * @public
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
  deploymentType: ComponentDeploymentUpdateType | undefined;

  /**
   * @public
   * <p>An optional customer-provided description of the component.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Don't specify to keep the component's current service instance
   *       attachment. Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance that you want to attach this component to. Don't specify to keep the component's current service instance attachment.
   *       Specify an empty string to detach the component from the service instance it's attached to. Specify non-empty values for both
   *         <code>serviceInstanceName</code> and <code>serviceName</code> or for neither of them.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The service spec that you want the component to use to access service inputs. Set this only when the component is attached to a service
   *       instance.</p>
   */
  serviceSpec?: string;

  /**
   * @public
   * <p>A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions.</p>
   *          <note>
   *             <p>Components support a single IaC file, even if you use Terraform as your template language.</p>
   *          </note>
   */
  templateFile?: string;

  /**
   * @public
   * <p>The client token for the updated component.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateComponentOutput {
  /**
   * @public
   * <p>The detailed data of the updated component.</p>
   */
  component: Component | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * @public
   * <p>The ID of the deployment to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>The detailed data about the current state of the component.</p>
 */
export interface ComponentState {
  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated with. Provided when a component is attached to a service instance.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</p>
   */
  serviceSpec?: string;

  /**
   * @public
   * <p>The template file used.</p>
   */
  templateFile?: string;
}

/**
 * @public
 * <p>The detailed data about the current state of the environment.</p>
 */
export interface EnvironmentState {
  /**
   * @public
   * <p>The environment spec that was used to create the environment.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The name of the environment template that was used to create the environment.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the environment template that was used to create the environment.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the environment template that was used to create the environment.</p>
   */
  templateMinorVersion: string | undefined;
}

/**
 * @public
 * <p>The detailed data about the current state of this service instance.</p>
 */
export interface ServiceInstanceState {
  /**
   * @public
   * <p>The service spec that was used to create the service instance.</p>
   */
  spec: string | undefined;

  /**
   * @public
   * <p>The name of the service template that was used to create the service instance.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The IDs for the last successful components deployed for this service instance.</p>
   */
  lastSuccessfulComponentDeploymentIds?: string[];

  /**
   * @public
   * <p>The ID for the last successful environment deployed for this service instance.</p>
   */
  lastSuccessfulEnvironmentDeploymentId?: string;

  /**
   * @public
   * <p>The ID for the last successful service pipeline deployed for this service instance.</p>
   */
  lastSuccessfulServicePipelineDeploymentId?: string;
}

/**
 * @public
 * <p>The detailed data about the current state of the service pipeline.</p>
 */
export interface ServicePipelineState {
  /**
   * @public
   * <p>The service spec that was used to create the service pipeline.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The name of the service template that was used to create the service pipeline.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service
   *       pipeline.</p>
   */
  templateMinorVersion: string | undefined;
}

/**
 * @public
 * <p>The detailed data about the current state of the deployment.</p>
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
   * @public
   * <p>The state of the service instance associated with the deployment.</p>
   */
  export interface ServiceInstanceMember {
    serviceInstance: ServiceInstanceState;
    environment?: never;
    servicePipeline?: never;
    component?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The state of the environment associated with the deployment.</p>
   */
  export interface EnvironmentMember {
    serviceInstance?: never;
    environment: EnvironmentState;
    servicePipeline?: never;
    component?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The state of the service pipeline associated with the deployment.</p>
   */
  export interface ServicePipelineMember {
    serviceInstance?: never;
    environment?: never;
    servicePipeline: ServicePipelineState;
    component?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The state of the component associated with the deployment.</p>
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

  export interface Visitor<T> {
    serviceInstance: (value: ServiceInstanceState) => T;
    environment: (value: EnvironmentState) => T;
    servicePipeline: (value: ServicePipelineState) => T;
    component: (value: ComponentState) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DeploymentState, visitor: Visitor<T>): T => {
    if (value.serviceInstance !== undefined) return visitor.serviceInstance(value.serviceInstance);
    if (value.environment !== undefined) return visitor.environment(value.environment);
    if (value.servicePipeline !== undefined) return visitor.servicePipeline(value.servicePipeline);
    if (value.component !== undefined) return visitor.component(value.component);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * <p>The detailed information about a deployment.</p>
 */
export interface Deployment {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target of the deployment.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>The date and time the depoyment target was created.</p>
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * @public
   * <p>The resource type of the deployment target. It can be an environment, service, service instance, or component.</p>
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * @public
   * <p>The name of the environment associated with this deployment.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service in this deployment.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the deployment's service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The name of the component associated with this deployment.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>The deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The date and time the deployment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the deployment was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the deployment was completed.</p>
   */
  completedAt?: Date;

  /**
   * @public
   * <p>The ID of the last attempted deployment.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment.</p>
   */
  lastSucceededDeploymentId?: string;

  /**
   * @public
   * <p>The initial state of the target resource at the time of the deployment.</p>
   */
  initialState?: DeploymentState;

  /**
   * @public
   * <p>The target state of the target resource at the time of the deployment.</p>
   */
  targetState?: DeploymentState;
}

/**
 * @public
 */
export interface DeleteDeploymentOutput {
  /**
   * @public
   * <p>The detailed data of the deployment being deleted.</p>
   */
  deployment?: Deployment;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * @public
   * <p>The ID of the deployment that you want to get the detailed data for.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of a environment that you want to get the detailed data for.</p>
   */
  environmentName?: string;

  /**
   * @public
   * <p>The name of the service associated with the given deployment ID.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance associated with the given deployment ID. <code>serviceName</code> must be specified to identify the service
   *    instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The name of a component that you want to get the detailed data for.</p>
   */
  componentName?: string;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * @public
   * <p>The detailed data of the requested deployment.</p>
   */
  deployment?: Deployment;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * @public
   * <p>A token that indicates the location of the next deployment in the array of deployment, after the list of deployment that was previously
   *    requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The name of an environment for result list filtering. Proton returns deployments associated with the environment.</p>
   */
  environmentName?: string;

  /**
   * @public
   * <p>The name of a service for result list filtering. Proton returns deployments associated with service instances of the service.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of a service instance for result list filtering. Proton returns the deployments associated with the service instance.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The name of a component for result list filtering. Proton returns deployments associated with that component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The maximum number of deployments to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of the deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target of the deployment.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>The date and time the target resource was created.</p>
   */
  targetResourceCreatedAt: Date | undefined;

  /**
   * @public
   * <p>The resource type of the deployment target. It can be an environment, service, service instance, or component.</p>
   */
  targetResourceType: DeploymentTargetResourceType | undefined;

  /**
   * @public
   * <p>The date and time the deployment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the deployment was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the deployment was completed.</p>
   */
  completedAt?: Date;

  /**
   * @public
   * <p>The name of the environment associated with the deployment.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service associated with the deployment.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>The name of the service instance associated with the deployment.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The name of the component associated with the deployment.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment.</p>
   */
  lastSucceededDeploymentId?: string;

  /**
   * @public
   * <p>The current status of the deployment.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next deployment in the array of deployment, after the current requested list of deployment.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of deployment with summary data.</p>
   */
  deployments: DeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first
   *       request created.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this
   *       account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment
   *       infrastructure resources in the associated environment account.</p>
   */
  managementAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure
   *       resources in the associated environment account.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The name of the Proton environment that's created in the associated management account.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The environment account connection detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>The ID of the environment account connection to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The detailed data of the environment account connection being deleted.</p>
   */
  environmentAccountConnection?: EnvironmentAccountConnection;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>The ID of the environment account connection that you want to get the detailed data for.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The detailed data of the requested environment account connection.</p>
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
   * @public
   * <p>The type of account making the <code>ListEnvironmentAccountConnections</code> request.</p>
   */
  requestedBy: EnvironmentAccountConnectionRequesterAccountType | undefined;

  /**
   * @public
   * <p>The environment name that's associated with each listed environment account connection.</p>
   */
  environmentName?: string;

  /**
   * @public
   * <p>The status details for each listed environment account connection.</p>
   */
  statuses?: EnvironmentAccountConnectionStatus[];

  /**
   * @public
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of
   *       environment account connections that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of environment account connections to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of an Proton environment account connection resource.</p>
 */
export interface EnvironmentAccountConnectionSummary {
  /**
   * @public
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment account connection.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The ID of the management account that's connected to the environment account connection.</p>
   */
  managementAccountId: string | undefined;

  /**
   * @public
   * <p>The ID of the environment account that's connected to the environment account connection.</p>
   */
  environmentAccountId: string | undefined;

  /**
   * @public
   * <p>The IAM service role that's associated with the environment account connection.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The name of the environment that's associated with the environment account connection.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The time when the environment account connection request was made.</p>
   */
  requestedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment account connection was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the environment account connection.</p>
   */
  status: EnvironmentAccountConnectionStatus | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface ListEnvironmentAccountConnectionsOutput {
  /**
   * @public
   * <p>An array of environment account connections with details that's returned by Proton. </p>
   */
  environmentAccountConnections: EnvironmentAccountConnectionSummary[] | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next environment account connection in the array of environment account connections, after the current
   *       requested list of environment account connections.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>The ID of the environment account connection to reject.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface RejectEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The environment connection account detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionInput {
  /**
   * @public
   * <p>The ID of the environment account connection to update.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.</p>
   */
  roleArn?: string;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources
   *       using CodeBuild-based provisioning in the associated environment account.</p>
   */
  codebuildRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentAccountConnectionOutput {
  /**
   * @public
   * <p>The environment account connection detail data that's returned by Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsInput {
  /**
   * @public
   * <p>The environment name.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was
   *       previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the deployment whose outputs you want.</p>
   */
  deploymentId?: string;
}

/**
 * @public
 */
export interface ListEnvironmentOutputsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of
   *       environment outputs.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of environment outputs with detail data.</p>
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesInput {
  /**
   * @public
   * <p>The environment name.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of
   *       environment provisioned resources that was previously requested.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentProvisionedResourcesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested
   *       list of environment provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of environment provisioned resources.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the environment template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion?: string;

  /**
   * @public
   * <p>A description of the environment that's being created and deployed.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> in the <i>Proton User
   *       Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * @public
   * <p>The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment
   *       account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   *          <p>To use Amazon Web Services-managed provisioning for the environment, specify either the <code>environmentAccountConnectionId</code> or
   *         <code>protonServiceRoleArn</code> parameter and omit the <code>provisioningRepository</code> parameter.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>To use self-managed provisioning for the environment, specify this parameter and omit the <code>environmentAccountConnectionId</code> and
   *         <code>protonServiceRoleArn</code> parameters.</p>
   */
  provisioningRepository?: RepositoryBranchInput;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>You must specify <code>componentRoleArn</code> to allow directly defined components to be associated with this environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   *          <p>To use CodeBuild-based provisioning for the environment or for any service instance running in the environment, specify either the
   *       <code>environmentAccountConnectionId</code> or <code>codebuildRoleArn</code> parameter.</p>
   */
  codebuildRoleArn?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * @public
   * <p>The environment detail data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * @public
   * <p>The name of the environment to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentOutput {
  /**
   * @public
   * <p>The detailed data of the environment being deleted.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * @public
   * <p>The name of the environment that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * @public
   * <p>The detailed data of the requested environment.</p>
   */
  environment: Environment | undefined;
}

/**
 * @public
 * <p>A search filter for environment templates.</p>
 */
export interface EnvironmentTemplateFilter {
  /**
   * @public
   * <p>Include <code>templateName</code> to filter search for a template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>Include <code>majorVersion</code> to filter search for a major version.</p>
   */
  majorVersion: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously
   *       requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of environments to list.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>An array of the versions of the environment template.</p>
   */
  environmentTemplates?: EnvironmentTemplateFilter[];
}

/**
 * @public
 * <p>Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.</p>
 */
export interface EnvironmentSummary {
  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time when the environment was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the environment was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the environment template.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The environment deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>An environment deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * @public
   * <p>The ID of the environment account connection that the environment is associated with.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * @public
   * <p>The ID of the environment account that the environment infrastructure resources are provisioned in.</p>
   */
  environmentAccountId?: string;

  /**
   * @public
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this environment.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this environment.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of environment detail data summaries.</p>
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
   * @public
   * <p>The name of the environment to update.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the environment update.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The formatted specification that defines the update.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The major version of the environment to update.</p>
   */
  templateMajorVersion?: string;

  /**
   * @public
   * <p>The minor version of the environment to update.</p>
   */
  templateMinorVersion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * @public
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
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * @public
   * <p>The ID of the environment account connection.</p>
   *          <p>You can only update to a new environment account connection if it was created in the same environment account that the current environment account
   *       connection was created in and is associated with the current environment.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * @public
   * <p>The linked repository that you use to host your rendered infrastructure templates for self-managed provisioning. A linked repository is a repository
   *       that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   */
  provisioningRepository?: RepositoryBranchInput;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in this environment. It
   *       determines the scope of infrastructure that a component can provision.</p>
   *          <p>The environment must have a <code>componentRoleArn</code> to allow directly defined components to be associated with the environment.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  componentRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM service role that allows Proton to provision infrastructure using CodeBuild-based provisioning on your
   *       behalf.</p>
   */
  codebuildRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * @public
   * <p>The environment detail data that's returned by Proton.</p>
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateInput {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The environment template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A customer provided encryption key that Proton uses to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The environment template data.</p>
 */
export interface EnvironmentTemplate {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The name of the environment template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the recommended version of the environment template.</p>
   */
  recommendedVersion?: string;

  /**
   * @public
   * <p>The customer provided encryption key for the environment template.</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateOutput {
  /**
   * @public
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateInput {
  /**
   * @public
   * <p>The name of the environment template to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateOutput {
  /**
   * @public
   * <p>The detailed data of the environment template being deleted.</p>
   */
  environmentTemplate?: EnvironmentTemplate;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateInput {
  /**
   * @public
   * <p>The name of the environment template that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateOutput {
  /**
   * @public
   * <p>The detailed data of the requested environment template.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesInput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates
   *       that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of environment templates to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The environment template data.</p>
 */
export interface EnvironmentTemplateSummary {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The name of the environment template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The recommended version of the environment template.</p>
   */
  recommendedVersion?: string;

  /**
   * @public
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning;
}

/**
 * @public
 */
export interface ListEnvironmentTemplatesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of
   *       environment templates.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of environment templates with detail data.</p>
   */
  templates: EnvironmentTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateInput {
  /**
   * @public
   * <p>The name of the environment template to update.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the environment template to update as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the environment template update.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateOutput {
  /**
   * @public
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

/**
 * @public
 * <p>Template bundle S3 bucket data.</p>
 */
export interface S3ObjectSource {
  /**
   * @public
   * <p>The name of the S3 bucket that contains a template bundle.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>The path to the S3 bucket that contains a template bundle.</p>
   */
  key: string | undefined;
}

/**
 * @public
 * <p>Template version source data.</p>
 */
export type TemplateVersionSourceInput =
  | TemplateVersionSourceInput.S3Member
  | TemplateVersionSourceInput.$UnknownMember;

/**
 * @public
 */
export namespace TemplateVersionSourceInput {
  /**
   * @public
   * <p>An S3 source object that includes the template bundle S3 path and name for a template minor version.</p>
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

  export interface Visitor<T> {
    s3: (value: S3ObjectSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TemplateVersionSourceInput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateVersionInput {
  /**
   * @public
   * <p>When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first
   *       request created.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>A description of the new version of an environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>To create a new minor version of the environment template, include <code>major Version</code>.</p>
   *          <p>To create a new major and minor version of the environment template, exclude <code>major Version</code>.</p>
   */
  majorVersion?: string;

  /**
   * @public
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of an template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
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
 * @public
 * <p>The environment template version data.</p>
 */
export interface EnvironmentTemplateVersion {
  /**
   * @public
   * <p>The name of the version of an environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>The recommended minor version of the environment template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * @public
   * <p>The status of the version of an environment template.</p>
   */
  status: TemplateVersionStatus | undefined;

  /**
   * @public
   * <p>The status message of the version of an environment template.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>A description of the minor version of an environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the version of an environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the version of an environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The schema of the version of an environment template.</p>
   */
  schema?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentTemplateVersionOutput {
  /**
   * @public
   * <p>The environment template detail data that's returned by Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionInput {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The environment template major version to delete.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The environment template minor version to delete.</p>
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentTemplateVersionOutput {
  /**
   * @public
   * <p>The detailed data of the environment template version being deleted.</p>
   */
  environmentTemplateVersion?: EnvironmentTemplateVersion;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionInput {
  /**
   * @public
   * <p>The name of the environment template a version of which you want to get detailed data for.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To get environment template major version detail data, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>To get environment template minor version detail data, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentTemplateVersionOutput {
  /**
   * @public
   * <p>The detailed data of the requested environment template version.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsInput {
  /**
   * @public
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of major or minor versions of an environment template to list.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To view a list of minor of versions under a major version of an environment template, include <code>major Version</code>.</p>
   *          <p>To view a list of major versions of an environment template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;
}

/**
 * @public
 * <p>A summary of the version of an environment template detail data.</p>
 */
export interface EnvironmentTemplateVersionSummary {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>The recommended minor version of the environment template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * @public
   * <p>The status of the version of an environment template.</p>
   */
  status: TemplateVersionStatus | undefined;

  /**
   * @public
   * <p>The status message of the version of an environment template.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>A description of the version of an environment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the version of an environment template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the version of an environment template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the version of an environment template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentTemplateVersionsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the
   *       list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of major or minor versions of an environment template detail data.</p>
   */
  templateVersions: EnvironmentTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionInput {
  /**
   * @public
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To update a major version of an environment template, include <code>major Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>To update a minor version of an environment template, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>A description of environment template version to update.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the environment template minor version to update.</p>
   */
  status?: TemplateVersionStatus;
}

/**
 * @public
 */
export interface UpdateEnvironmentTemplateVersionOutput {
  /**
   * @public
   * <p>The environment template version detail data that's returned by Proton.</p>
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
   * @public
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>The repository sync type.</p>
   */
  syncType: SyncType | undefined;
}

/**
 * @public
 * <p>Repository sync event detail data for a sync attempt.</p>
 */
export interface RepositorySyncEvent {
  /**
   * @public
   * <p>The type of event.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The external ID of the sync event.</p>
   */
  externalId?: string;

  /**
   * @public
   * <p>The time that the sync event occurred.</p>
   */
  time: Date | undefined;

  /**
   * @public
   * <p>Event detail for a repository sync attempt.</p>
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
 * @public
 * <p>Detail data for a repository sync attempt activated by a push to a repository.</p>
 */
export interface RepositorySyncAttempt {
  /**
   * @public
   * <p>The time when the sync attempt started.</p>
   */
  startedAt: Date | undefined;

  /**
   * @public
   * <p>The sync attempt status.</p>
   */
  status: RepositorySyncStatus | undefined;

  /**
   * @public
   * <p>Detail data for sync attempt events.</p>
   */
  events: RepositorySyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetRepositorySyncStatusOutput {
  /**
   * @public
   * <p>The repository sync status detail data that's returned by Proton.</p>
   */
  latestSync?: RepositorySyncAttempt;
}

/**
 * @public
 */
export interface GetResourcesSummaryInput {}

/**
 * @public
 * <p>Summary counts of each Proton resource types.</p>
 */
export interface ResourceCountsSummary {
  /**
   * @public
   * <p>The total number of resources of this type in the Amazon Web Services account.</p>
   */
  total: number | undefined;

  /**
   * @public
   * <p>The number of resources of this type in the Amazon Web Services account that failed to deploy.</p>
   */
  failed?: number;

  /**
   * @public
   * <p>The number of resources of this type in the Amazon Web Services account that are up-to-date with their template.</p>
   */
  upToDate?: number;

  /**
   * @public
   * <p>The number of resources of this type in the Amazon Web Services account that need a major template version update.</p>
   */
  behindMajor?: number;

  /**
   * @public
   * <p>The number of resources of this type in the Amazon Web Services account that need a minor template version update.</p>
   */
  behindMinor?: number;
}

/**
 * @public
 * <p>Summary counts of each Proton resource type.</p>
 */
export interface CountsSummary {
  /**
   * @public
   * <p>The total number of components in the Amazon Web Services account.</p>
   *          <p>The semantics of the <code>components</code> field are different from the semantics of results for other
   *    infrastructure-provisioning resources. That's because at this time components don't have associated templates,
   *    therefore they don't have the concept of staleness. The <code>components</code> object will only contain
   *     <code>total</code> and <code>failed</code> members.</p>
   */
  components?: ResourceCountsSummary;

  /**
   * @public
   * <p>The staleness counts for Proton environments in the Amazon Web Services account. The <code>environments</code> object will only
   *    contain <code>total</code> members.</p>
   */
  environments?: ResourceCountsSummary;

  /**
   * @public
   * <p>The total number of environment templates in the Amazon Web Services account. The <code>environmentTemplates</code> object
   *    will only contain <code>total</code> members.</p>
   */
  environmentTemplates?: ResourceCountsSummary;

  /**
   * @public
   * <p>The staleness counts for Proton service instances in the Amazon Web Services account.</p>
   */
  serviceInstances?: ResourceCountsSummary;

  /**
   * @public
   * <p>The staleness counts for Proton services in the Amazon Web Services account.</p>
   */
  services?: ResourceCountsSummary;

  /**
   * @public
   * <p>The total number of service templates in the Amazon Web Services account. The <code>serviceTemplates</code> object will only
   *    contain <code>total</code> members.</p>
   */
  serviceTemplates?: ResourceCountsSummary;

  /**
   * @public
   * <p>The staleness counts for Proton pipelines in the Amazon Web Services account.</p>
   */
  pipelines?: ResourceCountsSummary;
}

/**
 * @public
 */
export interface GetResourcesSummaryOutput {
  /**
   * @public
   * <p>Summary counts of each Proton resource type.</p>
   */
  counts: CountsSummary | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusInput {
  /**
   * @public
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the service instance that you want the sync status input for.</p>
   */
  serviceInstanceName: string | undefined;
}

/**
 * @public
 * <p>Revision detail data for a commit and push that activates a sync attempt</p>
 */
export interface Revision {
  /**
   * @public
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The secure hash algorithm (SHA) hash for the revision.</p>
   */
  sha: string | undefined;

  /**
   * @public
   * <p>The repository directory changed by a commit and push that activated the sync attempt.</p>
   */
  directory: string | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;
}

/**
 * @public
 * <p>Detail data for a resource sync event.</p>
 */
export interface ResourceSyncEvent {
  /**
   * @public
   * <p>The type of event.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The external ID for the event.</p>
   */
  externalId?: string;

  /**
   * @public
   * <p>The time when the event occurred.</p>
   */
  time: Date | undefined;

  /**
   * @public
   * <p>A resource sync event.</p>
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
 * @public
 * <p>Detail data for a resource sync attempt activated by a push to a repository.</p>
 */
export interface ResourceSyncAttempt {
  /**
   * @public
   * <p>Detail data for the initial repository commit, path and push.</p>
   */
  initialRevision: Revision | undefined;

  /**
   * @public
   * <p>Detail data for the target revision.</p>
   */
  targetRevision: Revision | undefined;

  /**
   * @public
   * <p>The resource that is synced to.</p>
   */
  target: string | undefined;

  /**
   * @public
   * <p>The time when the sync attempt started.</p>
   */
  startedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the sync attempt.</p>
   */
  status: ResourceSyncStatus | undefined;

  /**
   * @public
   * <p>An array of events with detail data.</p>
   */
  events: ResourceSyncEvent[] | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceSyncStatusOutput {
  /**
   * @public
   * <p>The detailed data of the latest sync with the service instance.</p>
   */
  latestSync?: ResourceSyncAttempt;

  /**
   * @public
   * <p>The detailed data of the latest successful sync with the service instance.</p>
   */
  latestSuccessfulSync?: ResourceSyncAttempt;

  /**
   * @public
   * <p>The service instance sync desired state that's returned by Proton</p>
   */
  desiredState?: Revision;
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
   * @public
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The template type.</p>
   */
  templateType: TemplateType | undefined;

  /**
   * @public
   * <p>The template major version.</p>
   */
  templateVersion: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncStatusOutput {
  /**
   * @public
   * <p>The details of the last sync that's returned by Proton.</p>
   */
  latestSync?: ResourceSyncAttempt;

  /**
   * @public
   * <p>The details of the last successful sync that's returned by Proton.</p>
   */
  latestSuccessfulSync?: ResourceSyncAttempt;

  /**
   * @public
   * <p>The template sync desired state that's returned by Proton.</p>
   */
  desiredState?: Revision;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsInput {
  /**
   * @public
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The sync type. The only supported value is <code>TEMPLATE_SYNC</code>.</p>
   */
  syncType: SyncType | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository
   *       sync definitions previously requested.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A repository sync definition.</p>
 */
export interface RepositorySyncDefinition {
  /**
   * @public
   * <p>The resource that is synced to.</p>
   */
  target: string | undefined;

  /**
   * @public
   * <p>The resource that is synced from.</p>
   */
  parent: string | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>The directory in the repository.</p>
   */
  directory: string | undefined;
}

/**
 * @public
 */
export interface ListRepositorySyncDefinitionsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested
   *       list of repository sync definitions.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of repository sync definitions.</p>
   */
  syncDefinitions: RepositorySyncDefinition[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for the listed tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was
   *    previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of tags to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>A list of resource tags with detail data.</p>
   */
  tags: Tag[] | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource
   *    tags.</p>
   */
  nextToken?: string;
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
   * @public
   * <p>The provisioned resource Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The status of your provisioned resource.</p>
   */
  status?: ResourceDeploymentStatus;

  /**
   * @public
   * <p>The provisioned resource state change detail data that's returned by Proton.</p>
   */
  outputs?: Output[];

  /**
   * @public
   * <p>The deployment ID for your provisioned resource.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The deployment status message for your provisioned resource.</p>
   */
  statusMessage?: string;
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
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html">Setting up for Proton</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  connectionArn: string | undefined;

  /**
   * @public
   * <p>The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Detailed data of a linked repository—a repository that has been registered with Proton.</p>
 */
export interface Repository {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account.</p>
   */
  connectionArn: string | undefined;

  /**
   * @public
   * <p>Your customer Amazon Web Services KMS encryption key.</p>
   */
  encryptionKey?: string;
}

/**
 * @public
 */
export interface CreateRepositoryOutput {
  /**
   * @public
   * <p>The repository link's detail data that's returned by Proton.</p>
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryInput {
  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryOutput {
  /**
   * @public
   * <p>The deleted repository link's detail data that's returned by Proton.</p>
   */
  repository?: Repository;
}

/**
 * @public
 */
export interface GetRepositoryInput {
  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name, for example <code>myrepos/myrepo</code>.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryOutput {
  /**
   * @public
   * <p>The repository link's detail data that's returned by Proton.</p>
   */
  repository: Repository | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * @public
   * <p>A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of repositories to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of a linked repository—a repository that has been registered with Proton.</p>
 */
export interface RepositorySummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the linked repository.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  provider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the of your connection that connects Proton to your repository.</p>
   */
  connectionArn: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of repository links.</p>
   */
  repositories: RepositorySummary[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsInput {
  /**
   * @public
   * <p>The name of the service instance whose outputs you want.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       list of outputs that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the deployment whose outputs you want.</p>
   */
  deploymentId?: string;
}

/**
 * @public
 */
export interface ListServiceInstanceOutputsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       current requested list of outputs.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of service instance Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesInput {
  /**
   * @public
   * <p>The name of the service that <code>serviceInstanceName</code> is associated to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the service instance whose provisioned resources you want.</p>
   */
  serviceInstanceName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the list of provisioned resources that was previously
   *       requested.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServiceInstanceProvisionedResourcesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the current requested list of provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of provisioned resources for a service instance.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceInstanceInput {
  /**
   * @public
   * <p>The name of the service instance to create.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the service the service instance is added to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The spec for the service instance you want to create.</p>
   */
  spec: string | undefined;

  /**
   * @public
   * <p>To create a new major and minor version of the service template,
   *         <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  templateMajorVersion?: string;

  /**
   * @public
   * <p>To create a new minor version of the service template, include a <code>major
   *         Version</code>.</p>
   */
  templateMinorVersion?: string;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton service instance.
   *       A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The client token of the service instance to create.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateServiceInstanceOutput {
  /**
   * @public
   * <p>The detailed data of the service instance being created.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceInput {
  /**
   * @public
   * <p>The name of a service instance that you want to get the detailed data for.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the service that you want the service instance input for.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceInstanceOutput {
  /**
   * @public
   * <p>The detailed data of the requested service instance.</p>
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
 * @public
 * <p>A filtering criterion to scope down the result list of the <a>ListServiceInstances</a> action.</p>
 */
export interface ListServiceInstancesFilter {
  /**
   * @public
   * <p>The name of a filtering criterion.</p>
   */
  key?: ListServiceInstancesFilterBy;

  /**
   * @public
   * <p>A value to filter by.</p>
   *          <p>With the date/time keys (<code>*At\{Before,After\}</code>), the value is a valid <a href="https://datatracker.ietf.org/doc/html/rfc3339.html">RFC 3339</a> string with no UTC
   *       offset and with an optional fractional precision (for example,
   *         <code>1985-04-12T23:20:50.52Z</code>).</p>
   */
  value?: string;
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
   * @public
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName?: string;

  /**
   * @public
   * <p>A token that indicates the location of the next service in the array of service instances,
   *       after the list of service instances that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of service instances to list.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>An array of filtering criteria that scope down the result list. By default, all service
   *       instances in the Amazon Web Services account are returned.</p>
   */
  filters?: ListServiceInstancesFilter[];

  /**
   * @public
   * <p>The field that the result list is sorted by.</p>
   *          <p>When you choose to sort by <code>serviceName</code>, service instances within each service
   *       are sorted by service instance name.</p>
   *          <p>Default: <code>serviceName</code>
   *          </p>
   */
  sortBy?: ListServiceInstancesSortBy;

  /**
   * @public
   * <p>Result list sort order.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  sortOrder?: SortOrder;
}

/**
 * @public
 * <p>Summary data of an Proton service instance resource.</p>
 */
export interface ServiceInstanceSummary {
  /**
   * @public
   * <p>The name of the service instance.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the service instance was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when a deployment of the service was last attempted.</p>
   */
  lastDeploymentAttemptedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service was last deployed successfully.</p>
   */
  lastDeploymentSucceededAt: Date | undefined;

  /**
   * @public
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the environment that the service instance was deployed into.</p>
   */
  environmentName: string | undefined;

  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The service instance template major version.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The service instance template minor version.</p>
   */
  templateMinorVersion: string | undefined;

  /**
   * @public
   * <p>The service instance deployment status.</p>
   */
  deploymentStatus: DeploymentStatus | undefined;

  /**
   * @public
   * <p>A service instance deployment status message.</p>
   */
  deploymentStatusMessage?: string;

  /**
   * @public
   * <p>The ID of the last attempted deployment of this service instance.</p>
   */
  lastAttemptedDeploymentId?: string;

  /**
   * @public
   * <p>The ID of the last successful deployment of this service instance.</p>
   */
  lastSucceededDeploymentId?: string;
}

/**
 * @public
 */
export interface ListServiceInstancesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next service instance in the array of service
   *       instances, after the current requested list of service instances.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of service instances with summary data.</p>
   */
  serviceInstances: ServiceInstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInstanceInput {
  /**
   * @public
   * <p>The name of the service instance to update.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
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
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * @public
   * <p>The formatted specification that defines the service instance update.</p>
   */
  spec?: string;

  /**
   * @public
   * <p>The major version of the service template to update.</p>
   */
  templateMajorVersion?: string;

  /**
   * @public
   * <p>The minor version of the service template to update.</p>
   */
  templateMinorVersion?: string;

  /**
   * @public
   * <p>The client token of the service instance to update.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateServiceInstanceOutput {
  /**
   * @public
   * <p>The service instance summary data that's returned by Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsInput {
  /**
   * @public
   * <p>The name of the service whose pipeline's outputs you want.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       list of outputs that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the deployment you want the outputs for.</p>
   */
  deploymentId?: string;
}

/**
 * @public
 */
export interface ListServicePipelineOutputsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next output in the array of outputs, after the
   *       current requested list of outputs.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of service pipeline Infrastructure as Code (IaC) outputs.</p>
   */
  outputs: Output[] | undefined;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesInput {
  /**
   * @public
   * <p>The name of the service whose pipeline's provisioned resources you want.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the list of provisioned resources that was previously
   *       requested.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListServicePipelineProvisionedResourcesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next provisioned resource in the array of
   *       provisioned resources, after the current requested list of provisioned resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of provisioned resources for a service and pipeline.</p>
   */
  provisionedResources: ProvisionedResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateServicePipelineInput {
  /**
   * @public
   * <p>The name of the service to that the pipeline is associated with.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The spec for the service pipeline to update.</p>
   */
  spec: string | undefined;

  /**
   * @public
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
   */
  deploymentType: DeploymentUpdateType | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service that the
   *       pipeline is associated with.</p>
   */
  templateMajorVersion?: string;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service that the
   *       pipeline is associated with.</p>
   */
  templateMinorVersion?: string;
}

/**
 * @public
 */
export interface UpdateServicePipelineOutput {
  /**
   * @public
   * <p>The pipeline details that are returned by Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

/**
 * @public
 */
export interface CreateServiceInput {
  /**
   * @public
   * <p>The service name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the Proton service.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the service template that's used to create the service.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the service template that was used to create the service.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of the service template that was used to create the service.</p>
   */
  templateMinorVersion?: string;

  /**
   * @public
   * <p>A link to a spec file that provides inputs as defined in the service template bundle
   *       schema file. The spec file is in YAML format. <i>Don’t</i> include pipeline
   *       inputs in the spec if your service template <i>doesn’t</i> include a service
   *       pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-create-svc.html">Create a service</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see
   *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an
   *         AWS CodeStar connection</a> in the <i>Proton User Guide</i>.
   *         <i>Don't</i> include this parameter if your service template
   *         <i>doesn't</i> include a service pipeline.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * @public
   * <p>The ID of the code repository. <i>Don't</i> include this parameter if your
   *       service template <i>doesn't</i> include a service pipeline.</p>
   */
  repositoryId?: string;

  /**
   * @public
   * <p>The name of the code repository branch that holds the code that's deployed in Proton.
   *         <i>Don't</i> include this parameter if your service template
   *         <i>doesn't</i> include a service pipeline.</p>
   */
  branchName?: string;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton service. A tag is
   *       a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
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
 * @public
 * <p>Detailed data of an Proton service resource.</p>
 */
export interface Service {
  /**
   * @public
   * <p>The name of the service.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the service.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The time when the service was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the service.</p>
   */
  status: ServiceStatus | undefined;

  /**
   * @public
   * <p>A service status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The formatted specification that defines the service.</p>
   */
  spec: string | undefined;

  /**
   * @public
   * <p>The service pipeline detail data.</p>
   */
  pipeline?: ServicePipeline;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see
   *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/setting-up-for-service.html#setting-up-vcontrol">Setting up an
   *         AWS CodeStar connection</a> in the <i>Proton User Guide</i>.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * @public
   * <p>The ID of the source code repository.</p>
   */
  repositoryId?: string;

  /**
   * @public
   * <p>The name of the code repository branch that holds the code that's deployed in
   *       Proton.</p>
   */
  branchName?: string;
}

/**
 * @public
 */
export interface CreateServiceOutput {
  /**
   * @public
   * <p>The service detail data that's returned by Proton.</p>
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface DeleteServiceInput {
  /**
   * @public
   * <p>The name of the service to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceOutput {
  /**
   * @public
   * <p>The detailed data of the service being deleted.</p>
   */
  service?: Service;
}

/**
 * @public
 */
export interface GetServiceInput {
  /**
   * @public
   * <p>The name of the service that you want to get the detailed data for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceOutput {
  /**
   * @public
   * <p>The detailed data of the requested service.</p>
   */
  service?: Service;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * @public
   * <p>A token that indicates the location of the next service in the array of services, after
   *       the list of services that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of services to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of an Proton service resource.</p>
 */
export interface ServiceSummary {
  /**
   * @public
   * <p>The name of the service.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the service.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The time when the service was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the service.</p>
   */
  status: ServiceStatus | undefined;

  /**
   * @public
   * <p>A service status message.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next service in the array of services, after
   *       the current requested list of services.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of services with summaries of detail data.</p>
   */
  services: ServiceSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceInput {
  /**
   * @public
   * <p>The name of the service to edit.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The edited service description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Lists the service instances to add and the existing service instances to remain. Omit the
   *       existing service instances to delete from the list. <i>Don't</i> include edits
   *       to the existing service instances or pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-update.html">Edit a service</a>
   *       in the <i>Proton User Guide</i>.</p>
   */
  spec?: string;
}

/**
 * @public
 */
export interface UpdateServiceOutput {
  /**
   * @public
   * <p>The service detail data that's returned by Proton.</p>
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryInput {
  /**
   * @public
   * <p>The name of the service that you want to get the service sync blocker summary for. If
   *       given only the service name, all instances are blocked.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the service instance that you want to get the service sync blocker summary
   *       for. If given bothe the instance name and the service name, only the instance is
   *       blocked.</p>
   */
  serviceInstanceName?: string;
}

/**
 * @public
 * <p>Detailed data of the context of the sync blocker.</p>
 */
export interface SyncBlockerContext {
  /**
   * @public
   * <p>The key for the sync blocker context.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of the sync blocker context.</p>
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
 * @public
 * <p>Detailed data of the sync blocker.</p>
 */
export interface SyncBlocker {
  /**
   * @public
   * <p>The ID of the sync blocker.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The type of the sync blocker.</p>
   */
  type: BlockerType | undefined;

  /**
   * @public
   * <p>The status of the sync blocker.</p>
   */
  status: BlockerStatus | undefined;

  /**
   * @public
   * <p>The reason why the sync blocker was created.</p>
   */
  createdReason: string | undefined;

  /**
   * @public
   * <p>The time when the sync blocker was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The contexts for the sync blocker.</p>
   */
  contexts?: SyncBlockerContext[];

  /**
   * @public
   * <p>The reason the sync blocker was resolved.</p>
   */
  resolvedReason?: string;

  /**
   * @public
   * <p>The time the sync blocker was resolved.</p>
   */
  resolvedAt?: Date;
}

/**
 * @public
 * <p>If a service instance is manually updated, Proton wants to prevent accidentally overriding
 *       a manual change.</p>
 *          <p>A blocker is created because of the manual update or deletion of a service instance. The
 *       summary describes the blocker as being active or resolved.</p>
 */
export interface ServiceSyncBlockerSummary {
  /**
   * @public
   * <p>The name of the service that you want to get the sync blocker summary for. If given a
   *       service instance name and a service name, it will return the blockers only applying to the
   *       instance that is blocked.</p>
   *          <p>If given only a service name, it will return the blockers that apply to all of the
   *       instances. In order to get the blockers for a single instance, you will need to make two
   *       distinct calls, one to get the sync blocker summary for the service and the other to get the
   *       sync blocker for the service instance.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the service instance that you want sync your service configuration
   *       with.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The latest active blockers for the synced service.</p>
   */
  latestBlockers?: SyncBlocker[];
}

/**
 * @public
 */
export interface GetServiceSyncBlockerSummaryOutput {
  /**
   * @public
   * <p>The detailed data of the requested service sync blocker summary.</p>
   */
  serviceSyncBlockerSummary?: ServiceSyncBlockerSummary;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerInput {
  /**
   * @public
   * <p>The ID of the service sync blocker.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The reason the service sync blocker was resolved.</p>
   */
  resolvedReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncBlockerOutput {
  /**
   * @public
   * <p>The name of the service that you want to update the service sync blocker for.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the service instance that you want to update the service sync blocker
   *       for.</p>
   */
  serviceInstanceName?: string;

  /**
   * @public
   * <p>The detailed data on the service sync blocker that was updated.</p>
   */
  serviceSyncBlocker: SyncBlocker | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigInput {
  /**
   * @public
   * <p>The name of the service the Proton Ops file is for.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The provider type for your repository.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository branch for your Proton Ops file.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>The path to the Proton Ops file.</p>
   */
  filePath: string | undefined;
}

/**
 * @public
 * <p>Detailed data of the service sync configuration.</p>
 */
export interface ServiceSyncConfig {
  /**
   * @public
   * <p>The name of the service that the service instance is added to.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the repository provider that holds the repository Proton will sync
   *       with.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The name of the code repository that holds the service code Proton will sync
   *       with.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the code repository branch that holds the service code Proton will sync
   *       with.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>The file path to the service sync configuration file.</p>
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceSyncConfigOutput {
  /**
   * @public
   * <p>The detailed data of the Proton Ops file.</p>
   */
  serviceSyncConfig?: ServiceSyncConfig;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigInput {
  /**
   * @public
   * <p>The name of the service that you want to delete the service sync configuration for.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSyncConfigOutput {
  /**
   * @public
   * <p>The detailed data for the service sync config.</p>
   */
  serviceSyncConfig?: ServiceSyncConfig;
}

/**
 * @public
 */
export interface GetServiceSyncConfigInput {
  /**
   * @public
   * <p>The name of the service that you want to get the service sync configuration for.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSyncConfigOutput {
  /**
   * @public
   * <p>The detailed data of the requested service sync configuration.</p>
   */
  serviceSyncConfig?: ServiceSyncConfig;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigInput {
  /**
   * @public
   * <p>The name of the service the Proton Ops file is for.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the repository provider where the Proton Ops file is found.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The name of the repository where the Proton Ops file is found.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the code repository branch where the Proton Ops file is found.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>The path to the Proton Ops file.</p>
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSyncConfigOutput {
  /**
   * @public
   * <p>The detailed data of the Proton Ops file.</p>
   */
  serviceSyncConfig?: ServiceSyncConfig;
}

/**
 * @public
 */
export interface CreateServiceTemplateInput {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the service template as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A customer provided encryption key that's used to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>By default, Proton provides a service pipeline for your service. When this parameter is
   *       included, it indicates that an Proton service pipeline <i>isn't</i> provided
   *       for your service. After it's included, it <i>can't</i> be changed. For more
   *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template
   *         bundles</a> in the <i>Proton User Guide</i>.</p>
   */
  pipelineProvisioning?: Provisioning;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton service template.
   *       A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Detailed data of an Proton service template resource.</p>
 */
export interface ServiceTemplate {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The service template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * @public
   * <p>The customer provided service template encryption key that's used to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included
   *       in the service template. Otherwise, a service pipeline <i>isn't</i> included in
   *       the service template.</p>
   */
  pipelineProvisioning?: Provisioning;
}

/**
 * @public
 */
export interface CreateServiceTemplateOutput {
  /**
   * @public
   * <p>The service template detail data that's returned by Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateInput {
  /**
   * @public
   * <p>The name of the service template to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateOutput {
  /**
   * @public
   * <p>The detailed data of the service template being deleted.</p>
   */
  serviceTemplate?: ServiceTemplate;
}

/**
 * @public
 */
export interface GetServiceTemplateInput {
  /**
   * @public
   * <p>The name of the service template that you want to get detailed data for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateOutput {
  /**
   * @public
   * <p>The detailed data of the requested service template.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplatesInput {
  /**
   * @public
   * <p>A token that indicates the location of the next service template in the array of service
   *       templates, after the list of service templates previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of service templates to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary data of an Proton service template resource.</p>
 */
export interface ServiceTemplateSummary {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The service template name as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * @public
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included
   *       in the service template, otherwise a service pipeline <i>isn't</i> included in
   *       the service template.</p>
   */
  pipelineProvisioning?: Provisioning;
}

/**
 * @public
 */
export interface ListServiceTemplatesOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next service template in the array of service
   *       templates, after the current requested list of service templates.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of service templates with detail data.</p>
   */
  templates: ServiceTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateInput {
  /**
   * @public
   * <p>The name of the service template to update.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the service template to update that's displayed in the developer
   *       interface.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>A description of the service template update.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateServiceTemplateOutput {
  /**
   * @public
   * <p>The service template detail data that's returned by Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

/**
 * @public
 * <p>Compatible environment template data.</p>
 */
export interface CompatibleEnvironmentTemplateInput {
  /**
   * @public
   * <p>The compatible environment template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the compatible environment template.</p>
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
   * @public
   * <p>When included, if two identical requests are made with the same client token, Proton
   *       returns the service template version that the first request created.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>A description of the new version of a service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>To create a new minor version of the service template, include a <code>major
   *         Version</code>.</p>
   *          <p>To create a new major and minor version of the service template,
   *         <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;

  /**
   * @public
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of
   *       a service template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * @public
   * <p>An array of environment template objects that are compatible with the new service template
   *       version. A service instance based on this service template version can run in environments
   *       based on compatible templates.</p>
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the Proton service template
   *       version. A tag is a key-value pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of supported component sources. Components with supported sources can be attached
   *       to service instances based on this service template version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[];
}

/**
 * @public
 * <p>Compatible environment template data.</p>
 */
export interface CompatibleEnvironmentTemplate {
  /**
   * @public
   * <p>The compatible environment template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The major version of the compatible environment template.</p>
   */
  majorVersion: string | undefined;
}

/**
 * @public
 * <p>Detailed data of an Proton service template version resource.</p>
 */
export interface ServiceTemplateVersion {
  /**
   * @public
   * <p>The name of the version of a service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>The recommended minor version of the service template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * @public
   * <p>The service template version status.</p>
   */
  status: TemplateVersionStatus | undefined;

  /**
   * @public
   * <p>A service template version status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>A description of the version of a service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the version of a service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the version of a service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>An array of compatible environment template names for the major version of a service
   *       template.</p>
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplate[] | undefined;

  /**
   * @public
   * <p>The schema of the version of a service template.</p>
   */
  schema?: string;

  /**
   * @public
   * <p>An array of supported component sources. Components with supported sources can be attached
   *       to service instances based on this service template version.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[];
}

/**
 * @public
 */
export interface CreateServiceTemplateVersionOutput {
  /**
   * @public
   * <p>The service template version summary of detail data that's returned by Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionInput {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The service template major version to delete.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The service template minor version to delete.</p>
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceTemplateVersionOutput {
  /**
   * @public
   * <p>The detailed data of the service template version being deleted.</p>
   */
  serviceTemplateVersion?: ServiceTemplateVersion;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionInput {
  /**
   * @public
   * <p>The name of the service template a version of which you want to get detailed data
   *       for.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To get service template major version detail data, include <code>major
   *       Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>To get service template minor version detail data, include
   *       <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

/**
 * @public
 */
export interface GetServiceTemplateVersionOutput {
  /**
   * @public
   * <p>The detailed data of the requested service template version.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsInput {
  /**
   * @public
   * <p>A token that indicates the location of the next major or minor version in the array of
   *       major or minor versions of a service template, after the list of major or minor versions that
   *       was previously requested.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of major or minor versions of a service template to list.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To view a list of minor of versions under a major version of a service template, include
   *         <code>major Version</code>.</p>
   *          <p>To view a list of major versions of a service template, <i>exclude</i>
   *             <code>major Version</code>.</p>
   */
  majorVersion?: string;
}

/**
 * @public
 * <p>Summary data of an Proton service template version resource.</p>
 */
export interface ServiceTemplateVersionSummary {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>The minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>The recommended minor version of the service template.</p>
   */
  recommendedMinorVersion?: string;

  /**
   * @public
   * <p>The service template minor version status.</p>
   */
  status: TemplateVersionStatus | undefined;

  /**
   * @public
   * <p>A service template minor version status message.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>A description of the version of a service template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the version of a service template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time when the version of a service template was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time when the version of a service template was last modified.</p>
   */
  lastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceTemplateVersionsOutput {
  /**
   * @public
   * <p>A token that indicates the location of the next major or minor version in the array of
   *       major or minor versions of a service template, after the current requested list of service
   *       major or minor versions.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of major or minor versions of a service template with detail data.</p>
   */
  templateVersions: ServiceTemplateVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionInput {
  /**
   * @public
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>To update a major version of a service template, include <code>major
   *       Version</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * @public
   * <p>To update a minor version of a service template, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;

  /**
   * @public
   * <p>A description of a service template version to update.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the service template minor version to update.</p>
   */
  status?: TemplateVersionStatus;

  /**
   * @public
   * <p>An array of environment template objects that are compatible with this service template
   *       version. A service instance based on this service template version can run in environments
   *       based on compatible templates.</p>
   */
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];

  /**
   * @public
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
   */
  supportedComponentSources?: ServiceTemplateSupportedComponentSourceType[];
}

/**
 * @public
 */
export interface UpdateServiceTemplateVersionOutput {
  /**
   * @public
   * <p>The service template version detail data that's returned by Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of customer tags to apply to the Proton resource.</p>
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
   * @public
   * <p>The name of your registered template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The type of the registered template.</p>
   */
  templateType: TemplateType | undefined;

  /**
   * @public
   * <p>The provider type for your repository.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository branch for your template.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this
   *    repository directory.</p>
   */
  subdirectory?: string;
}

/**
 * @public
 * <p>The detail data for a template sync configuration.</p>
 */
export interface TemplateSyncConfig {
  /**
   * @public
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The template type.</p>
   */
  templateType: TemplateType | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository branch.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>A subdirectory path to your template bundle version.</p>
   */
  subdirectory?: string;
}

/**
 * @public
 */
export interface CreateTemplateSyncConfigOutput {
  /**
   * @public
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigInput {
  /**
   * @public
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The template type.</p>
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateSyncConfigOutput {
  /**
   * @public
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigInput {
  /**
   * @public
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The template type.</p>
   */
  templateType: TemplateType | undefined;
}

/**
 * @public
 */
export interface GetTemplateSyncConfigOutput {
  /**
   * @public
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigInput {
  /**
   * @public
   * <p>The synced template name.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The synced template type.</p>
   */
  templateType: TemplateType | undefined;

  /**
   * @public
   * <p>The repository provider.</p>
   */
  repositoryProvider: RepositoryProvider | undefined;

  /**
   * @public
   * <p>The repository name (for example, <code>myrepos/myrepo</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The repository branch for your template.</p>
   */
  branch: string | undefined;

  /**
   * @public
   * <p>A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.</p>
   */
  subdirectory?: string;
}

/**
 * @public
 */
export interface UpdateTemplateSyncConfigOutput {
  /**
   * @public
   * <p>The template sync configuration detail data that's returned by Proton.</p>
   */
  templateSyncConfig?: TemplateSyncConfig;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to remove customer tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of customer tag keys that indicate the customer tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

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
export const DeleteComponentOutputFilterSensitiveLog = (obj: DeleteComponentOutput): any => ({
  ...obj,
  ...(obj.component && { component: ComponentFilterSensitiveLog(obj.component) }),
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
export const ComponentStateFilterSensitiveLog = (obj: ComponentState): any => ({
  ...obj,
  ...(obj.serviceSpec && { serviceSpec: SENSITIVE_STRING }),
  ...(obj.templateFile && { templateFile: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentStateFilterSensitiveLog = (obj: EnvironmentState): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServiceInstanceStateFilterSensitiveLog = (obj: ServiceInstanceState): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServicePipelineStateFilterSensitiveLog = (obj: ServicePipelineState): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeploymentStateFilterSensitiveLog = (obj: DeploymentState): any => {
  if (obj.serviceInstance !== undefined)
    return { serviceInstance: ServiceInstanceStateFilterSensitiveLog(obj.serviceInstance) };
  if (obj.environment !== undefined) return { environment: EnvironmentStateFilterSensitiveLog(obj.environment) };
  if (obj.servicePipeline !== undefined)
    return { servicePipeline: ServicePipelineStateFilterSensitiveLog(obj.servicePipeline) };
  if (obj.component !== undefined) return { component: ComponentStateFilterSensitiveLog(obj.component) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const DeploymentFilterSensitiveLog = (obj: Deployment): any => ({
  ...obj,
  ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  ...(obj.initialState && { initialState: DeploymentStateFilterSensitiveLog(obj.initialState) }),
  ...(obj.targetState && { targetState: DeploymentStateFilterSensitiveLog(obj.targetState) }),
});

/**
 * @internal
 */
export const DeleteDeploymentOutputFilterSensitiveLog = (obj: DeleteDeploymentOutput): any => ({
  ...obj,
  ...(obj.deployment && { deployment: DeploymentFilterSensitiveLog(obj.deployment) }),
});

/**
 * @internal
 */
export const GetDeploymentOutputFilterSensitiveLog = (obj: GetDeploymentOutput): any => ({
  ...obj,
  ...(obj.deployment && { deployment: DeploymentFilterSensitiveLog(obj.deployment) }),
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
export const DeleteEnvironmentOutputFilterSensitiveLog = (obj: DeleteEnvironmentOutput): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
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
export const DeleteEnvironmentTemplateOutputFilterSensitiveLog = (obj: DeleteEnvironmentTemplateOutput): any => ({
  ...obj,
  ...(obj.environmentTemplate && {
    environmentTemplate: EnvironmentTemplateFilterSensitiveLog(obj.environmentTemplate),
  }),
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
export const CreateEnvironmentTemplateVersionInputFilterSensitiveLog = (
  obj: CreateEnvironmentTemplateVersionInput
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.source && { source: obj.source }),
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
export const ListServiceInstanceOutputsOutputFilterSensitiveLog = (obj: ListServiceInstanceOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceInstanceInputFilterSensitiveLog = (obj: CreateServiceInstanceInput): any => ({
  ...obj,
  ...(obj.spec && { spec: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceInstanceOutputFilterSensitiveLog = (obj: CreateServiceInstanceOutput): any => ({
  ...obj,
  ...(obj.serviceInstance && { serviceInstance: ServiceInstanceFilterSensitiveLog(obj.serviceInstance) }),
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
export const ListServicePipelineOutputsOutputFilterSensitiveLog = (obj: ListServicePipelineOutputsOutput): any => ({
  ...obj,
  ...(obj.outputs && { outputs: SENSITIVE_STRING }),
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
export const DeleteServiceOutputFilterSensitiveLog = (obj: DeleteServiceOutput): any => ({
  ...obj,
  ...(obj.service && { service: ServiceFilterSensitiveLog(obj.service) }),
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
export const DeleteServiceTemplateOutputFilterSensitiveLog = (obj: DeleteServiceTemplateOutput): any => ({
  ...obj,
  ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplateFilterSensitiveLog(obj.serviceTemplate) }),
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
export const CreateServiceTemplateVersionInputFilterSensitiveLog = (obj: CreateServiceTemplateVersionInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.source && { source: obj.source }),
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
export const DeleteServiceTemplateVersionOutputFilterSensitiveLog = (obj: DeleteServiceTemplateVersionOutput): any => ({
  ...obj,
  ...(obj.serviceTemplateVersion && {
    serviceTemplateVersion: ServiceTemplateVersionFilterSensitiveLog(obj.serviceTemplateVersion),
  }),
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
