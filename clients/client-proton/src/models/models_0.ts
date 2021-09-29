import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AcceptEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;
}

export namespace AcceptEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export enum EnvironmentAccountConnectionStatus {
  CONNECTED = "CONNECTED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>The environment account connection detail data.</p>
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
}

export namespace EnvironmentAccountConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentAccountConnection): any => ({
    ...obj,
  });
}

export interface AcceptEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export namespace AcceptEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>There <i>isn't</i> sufficient access for performing this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The request failed to register with the service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The requested resource <i>wasn't</i> found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The AWS Proton pipeline service role data.</p>
 */
export interface AccountSettings {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Proton pipeline service role.</p>
   */
  pipelineServiceRoleArn?: string;
}

export namespace AccountSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsInput {}

export namespace GetAccountSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsInput): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsOutput {
  /**
   * <p>The AWS Proton pipeline service role detail data that's returned by AWS Proton.</p>
   */
  accountSettings?: AccountSettings;
}

export namespace GetAccountSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsOutput): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Proton pipeline service role.</p>
   */
  pipelineServiceRoleArn?: string;
}

export namespace UpdateAccountSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsInput): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsOutput {
  /**
   * <p>The AWS Proton pipeline service role detail data that's returned by AWS Proton.</p>
   */
  accountSettings: AccountSettings | undefined;
}

export namespace UpdateAccountSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsOutput): any => ({
    ...obj,
  });
}

export interface CancelEnvironmentDeploymentInput {
  /**
   * <p>The name of the environment with the deployment to cancel.</p>
   */
  environmentName: string | undefined;
}

export namespace CancelEnvironmentDeploymentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelEnvironmentDeploymentInput): any => ({
    ...obj,
  });
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

export enum Provisioning {
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
}

/**
 * <p>The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.</p>
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
   * <p>The ID of the major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the environment template.</p>
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
   * <p>The Amazon Resource Name (ARN) of the AWS Proton service role that allows AWS Proton to make calls to other services on your
   *             behalf.</p>
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
}

export namespace Environment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface CancelEnvironmentDeploymentOutput {
  /**
   * <p>The environment summary data that's returned by AWS Proton.</p>
   */
  environment: Environment | undefined;
}

export namespace CancelEnvironmentDeploymentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelEnvironmentDeploymentOutput): any => ({
    ...obj,
    ...(obj.environment && { environment: Environment.filterSensitiveLog(obj.environment) }),
  });
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

export namespace CancelServiceInstanceDeploymentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelServiceInstanceDeploymentInput): any => ({
    ...obj,
  });
}

/**
 * <p>The service instance detail data.</p>
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
   * <p>The ID of the major version of the service template that was used to create the service instance.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the service template that was used to create the service instance.</p>
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

  /**
   * <p>The service spec that was used to create the service instance.</p>
   */
  spec?: string;
}

export namespace ServiceInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceInstance): any => ({
    ...obj,
    ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface CancelServiceInstanceDeploymentOutput {
  /**
   * <p>The service instance summary data that's returned by AWS Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export namespace CancelServiceInstanceDeploymentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelServiceInstanceDeploymentOutput): any => ({
    ...obj,
    ...(obj.serviceInstance && { serviceInstance: ServiceInstance.filterSensitiveLog(obj.serviceInstance) }),
  });
}

export interface CancelServicePipelineDeploymentInput {
  /**
   * <p>The name of the service with the service pipeline deployment to cancel.</p>
   */
  serviceName: string | undefined;
}

export namespace CancelServicePipelineDeploymentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelServicePipelineDeploymentInput): any => ({
    ...obj,
  });
}

/**
 * <p>The service pipeline detail data.</p>
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
   * <p>The ID of the major version of the service template that was used to create the service pipeline.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the service template that was used to create the service pipeline.</p>
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

export namespace ServicePipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServicePipeline): any => ({
    ...obj,
    ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface CancelServicePipelineDeploymentOutput {
  /**
   * <p>The service pipeline detail data that's returned by AWS Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

export namespace CancelServicePipelineDeploymentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelServicePipelineDeploymentOutput): any => ({
    ...obj,
    ...(obj.pipeline && { pipeline: ServicePipeline.filterSensitiveLog(obj.pipeline) }),
  });
}

export interface CreateEnvironmentAccountConnectionInput {
  /**
   * <p>When included, if two identicial requests are made with the same client token, AWS Proton returns the environment account connection that
   *             the first request created.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton
   *             environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM
   *             role to provision environment infrastructure resources in the associated environment account.</p>
   */
  managementAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision
   *             infrastructure resources in the associated environment account.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the AWS Proton environment that's created in the associated management account.</p>
   */
  environmentName: string | undefined;
}

export namespace CreateEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export namespace CreateEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-limits.html">AWS Proton
 *                 Quotas</a> in the <i>AWS Proton Administrator Guide</i>.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
    ...(obj.message && { message: SENSITIVE_STRING }),
  });
}

export interface DeleteEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to delete.</p>
   */
  id: string | undefined;
}

export namespace DeleteEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection?: EnvironmentAccountConnection;
}

export namespace DeleteEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection.</p>
   */
  id: string | undefined;
}

export namespace GetEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export namespace GetEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
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
   * <p>A token to indicate the location of the next environment account connection in the array of environment account connections, after the
   *             list of environment account connections that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment account connections to list.</p>
   */
  maxResults?: number;
}

export namespace ListEnvironmentAccountConnectionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentAccountConnectionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the environment account connection detail data.</p>
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
}

export namespace EnvironmentAccountConnectionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentAccountConnectionSummary): any => ({
    ...obj,
  });
}

export interface ListEnvironmentAccountConnectionsOutput {
  /**
   * <p>An array of environment account connections with details that's returned by AWS Proton. </p>
   */
  environmentAccountConnections: EnvironmentAccountConnectionSummary[] | undefined;

  /**
   * <p>A token to indicate the location of the next environment account connection in the array of environment account connections, after the
   *             current requested list of environment account connections.</p>
   */
  nextToken?: string;
}

export namespace ListEnvironmentAccountConnectionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentAccountConnectionsOutput): any => ({
    ...obj,
  });
}

export interface RejectEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to reject.</p>
   */
  id: string | undefined;
}

export namespace RejectEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export interface RejectEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment connection account detail data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export namespace RejectEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentAccountConnectionInput {
  /**
   * <p>The ID of the environment account connection to update.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that is associated with the environment account connection to update.</p>
   */
  roleArn: string | undefined;
}

export namespace UpdateEnvironmentAccountConnectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentAccountConnectionInput): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentAccountConnectionOutput {
  /**
   * <p>The environment account connection detail data that's returned by AWS Proton.</p>
   */
  environmentAccountConnection: EnvironmentAccountConnection | undefined;
}

export namespace UpdateEnvironmentAccountConnectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentAccountConnectionOutput): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentInput {
  /**
   * <p>The name of the environment.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the environment template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-templates.html">Environment Templates</a> in the <i>AWS Proton Administrator
   *                 Guide</i>.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The ID of the major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the environment template.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>A description of the environment that's being created and deployed.</p>
   */
  description?: string;

  /**
   * <p>A link to a YAML formatted spec file that provides inputs as defined in the environment template bundle schema file. For more
   *             information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html">Environments</a> in the
   *                 <i>AWS Proton Administrator Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Proton service role that allows AWS Proton to make calls to other services on your behalf. You
   *             must include either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * <p>The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an
   *             environment account. You must include either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code>
   *             parameter and value. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
   */
  environmentAccountConnectionId?: string;

  /**
   * <p>Create tags for your environment. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace CreateEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by AWS Proton.</p>
   */
  environment: Environment | undefined;
}

export namespace CreateEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentOutput): any => ({
    ...obj,
    ...(obj.environment && { environment: Environment.filterSensitiveLog(obj.environment) }),
  });
}

export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the environment to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by AWS Proton.</p>
   */
  environment?: Environment;
}

export namespace DeleteEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentOutput): any => ({
    ...obj,
    ...(obj.environment && { environment: Environment.filterSensitiveLog(obj.environment) }),
  });
}

export interface GetEnvironmentInput {
  /**
   * <p>The name of the environment that you want to get the detail data for.</p>
   */
  name: string | undefined;
}

export namespace GetEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentInput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by AWS Proton.</p>
   */
  environment: Environment | undefined;
}

export namespace GetEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
    ...obj,
    ...(obj.environment && { environment: Environment.filterSensitiveLog(obj.environment) }),
  });
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

export namespace EnvironmentTemplateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentTemplateFilter): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsInput {
  /**
   * <p>A token to indicate the location of the next environment in the array of environments, after the list of environments that was
   *             previously requested.</p>
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

export namespace ListEnvironmentsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the environment detail data.</p>
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
   * <p>The ID of the major version of the environment template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the environment template.</p>
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
   * <p>The Amazon Resource Name (ARN) of the AWS Proton service role that allows AWS Proton to make calls to other services on your
   *             behalf.</p>
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
}

export namespace EnvironmentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentSummary): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  });
}

export interface ListEnvironmentsOutput {
  /**
   * <p>A token to indicate the location of the next environment in the array of environments, after the current requested list of
   *             environments.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment detail data summaries.</p>
   */
  environments: EnvironmentSummary[] | undefined;
}

export namespace ListEnvironmentsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
    ...obj,
    ...(obj.environments && {
      environments: obj.environments.map((item) => EnvironmentSummary.filterSensitiveLog(item)),
    }),
  });
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
   * <p>The ID of the major version of the environment to update.</p>
   */
  templateMajorVersion?: string;

  /**
   * <p>The ID of the minor version of the environment to update.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Proton service role that allows AWS Proton to make API calls to other services your
   *             behalf.</p>
   */
  protonServiceRoleArn?: string;

  /**
   * <p>There are four modes for updating an environment as described in the following. The <code>deploymentType</code> field defines the
   *             mode.</p>
   *         <dl>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>NONE</code>
   *                </p>
   *                     <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                     <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are
   *                         updated. <i>Don’t</i> include minor or major version parameters when you use this
   *                         <code>deployment-type</code>.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current
   *                         major version in use, by default. You can also specify a different minor version of the current major version in use.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of
   *                         the current template, by default. You can also specify a different major version that is higher than the major version in use
   *                         and a minor version (optional).</p>
   *                 </dd>
   *          </dl>
   */
  deploymentType: DeploymentUpdateType | string | undefined;

  /**
   * <p>The ID of the environment account connection.</p>
   *         <p>You can only update to a new environment account connection if it was created in the same environment account that the current
   *             environment account connection was created in and is associated with the current environment.</p>
   */
  environmentAccountConnectionId?: string;
}

export namespace UpdateEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentOutput {
  /**
   * <p>The environment detail data that's returned by AWS Proton.</p>
   */
  environment: Environment | undefined;
}

export namespace UpdateEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
    ...obj,
    ...(obj.environment && { environment: Environment.filterSensitiveLog(obj.environment) }),
  });
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
   * <p>A customer provided encryption key that AWS Proton uses to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;

  /**
   * <p>Create tags for your environment template. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace CreateEnvironmentTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentTemplateInput): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
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

export namespace EnvironmentTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentTemplate): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by AWS Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

export namespace CreateEnvironmentTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentTemplateOutput): any => ({
    ...obj,
    ...(obj.environmentTemplate && {
      environmentTemplate: EnvironmentTemplate.filterSensitiveLog(obj.environmentTemplate),
    }),
  });
}

export interface DeleteEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteEnvironmentTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentTemplateInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by AWS Proton.</p>
   */
  environmentTemplate?: EnvironmentTemplate;
}

export namespace DeleteEnvironmentTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentTemplateOutput): any => ({
    ...obj,
    ...(obj.environmentTemplate && {
      environmentTemplate: EnvironmentTemplate.filterSensitiveLog(obj.environmentTemplate),
    }),
  });
}

export interface GetEnvironmentTemplateInput {
  /**
   * <p>The name of the environment template that you want to get the detail data for.</p>
   */
  name: string | undefined;
}

export namespace GetEnvironmentTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentTemplateInput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by AWS Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

export namespace GetEnvironmentTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentTemplateOutput): any => ({
    ...obj,
    ...(obj.environmentTemplate && {
      environmentTemplate: EnvironmentTemplate.filterSensitiveLog(obj.environmentTemplate),
    }),
  });
}

export interface ListEnvironmentTemplatesInput {
  /**
   * <p>A token to indicate the location of the next environment template in the array of environment templates, after the list of environment
   *             templates that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment templates to list.</p>
   */
  maxResults?: number;
}

export namespace ListEnvironmentTemplatesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentTemplatesInput): any => ({
    ...obj,
  });
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
   * <p>The ID of the recommended version of the environment template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>When included, indicates that the environment template is for customer provisioned and managed infrastructure.</p>
   */
  provisioning?: Provisioning | string;
}

export namespace EnvironmentTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentTemplateSummary): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface ListEnvironmentTemplatesOutput {
  /**
   * <p>A token to indicate the location of the next environment template in the array of environment templates, after the current requested
   *             list of environment templates.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of environment templates with detail data.</p>
   */
  templates: EnvironmentTemplateSummary[] | undefined;
}

export namespace ListEnvironmentTemplatesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentTemplatesOutput): any => ({
    ...obj,
    ...(obj.templates && {
      templates: obj.templates.map((item) => EnvironmentTemplateSummary.filterSensitiveLog(item)),
    }),
  });
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

export namespace UpdateEnvironmentTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentTemplateInput): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentTemplateOutput {
  /**
   * <p>The environment template detail data that's returned by AWS Proton.</p>
   */
  environmentTemplate: EnvironmentTemplate | undefined;
}

export namespace UpdateEnvironmentTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentTemplateOutput): any => ({
    ...obj,
    ...(obj.environmentTemplate && {
      environmentTemplate: EnvironmentTemplate.filterSensitiveLog(obj.environmentTemplate),
    }),
  });
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

export namespace S3ObjectSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ObjectSource): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateVersionSourceInput): any => {
    if (obj.s3 !== undefined) return { s3: S3ObjectSource.filterSensitiveLog(obj.s3) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface CreateEnvironmentTemplateVersionInput {
  /**
   * <p>When included, if two identicial requests are made with the same client token, AWS Proton returns the environment template version that
   *             the first request created.</p>
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
   * <p>To create a new minor version of the environment template, include a <code>majorVersion</code>.</p>
   *         <p>To create a new major and minor version of the environment template, <i>exclude</i>
   *             <code>majorVersion</code>.</p>
   */
  majorVersion?: string;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of an template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>Create tags for a new version of an environment template.</p>
   */
  tags?: Tag[];
}

export namespace CreateEnvironmentTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentTemplateVersionInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.source && { source: TemplateVersionSourceInput.filterSensitiveLog(obj.source) }),
  });
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
   * <p>The ID of the latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The ID of the recommended minor version of the environment template.</p>
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

export namespace EnvironmentTemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentTemplateVersion): any => ({
    ...obj,
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.schema && { schema: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template detail data that's returned by AWS Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export namespace CreateEnvironmentTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.environmentTemplateVersion && {
      environmentTemplateVersion: EnvironmentTemplateVersion.filterSensitiveLog(obj.environmentTemplateVersion),
    }),
  });
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

export namespace DeleteEnvironmentTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentTemplateVersionInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template version detail data that's returned by AWS Proton.</p>
   */
  environmentTemplateVersion?: EnvironmentTemplateVersion;
}

export namespace DeleteEnvironmentTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.environmentTemplateVersion && {
      environmentTemplateVersion: EnvironmentTemplateVersion.filterSensitiveLog(obj.environmentTemplateVersion),
    }),
  });
}

export interface GetEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To view environment template major version detail data, include <code>majorVersion</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To view environment template minor version detail data, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

export namespace GetEnvironmentTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentTemplateVersionInput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template version detail data that's returned by AWS Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export namespace GetEnvironmentTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.environmentTemplateVersion && {
      environmentTemplateVersion: EnvironmentTemplateVersion.filterSensitiveLog(obj.environmentTemplateVersion),
    }),
  });
}

export interface ListEnvironmentTemplateVersionsInput {
  /**
   * <p>A token to indicate the location of the next major or minor version in the array of major or minor versions of an environment template,
   *             after the list of major or minor versions that was previously requested.</p>
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
   * <p>To view a list of minor of versions under a major version of an environment template, include <code>majorVersion</code>.</p>
   *         <p>To view a list of major versions of an environment template, <i>exclude</i>
   *             <code>majorVersion</code>.</p>
   */
  majorVersion?: string;
}

export namespace ListEnvironmentTemplateVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentTemplateVersionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the version of an environment template detail data.</p>
 */
export interface EnvironmentTemplateVersionSummary {
  /**
   * <p>The name of the version of an environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The ID of the latest major version that's associated with the version of an environment template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The ID of the version of an environment template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The ID of the recommended minor version of the environment template.</p>
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

export namespace EnvironmentTemplateVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentTemplateVersionSummary): any => ({
    ...obj,
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface ListEnvironmentTemplateVersionsOutput {
  /**
   * <p>A token to indicate the location of the next major or minor version in the array of major or minor versions of an environment template,
   *             after the list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of major or minor versions of an environment template detail data.</p>
   */
  templateVersions: EnvironmentTemplateVersionSummary[] | undefined;
}

export namespace ListEnvironmentTemplateVersionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentTemplateVersionsOutput): any => ({
    ...obj,
    ...(obj.templateVersions && {
      templateVersions: obj.templateVersions.map((item) => EnvironmentTemplateVersionSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateEnvironmentTemplateVersionInput {
  /**
   * <p>The name of the environment template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of an environment template, include <code>majorVersion</code>.</p>
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

export namespace UpdateEnvironmentTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentTemplateVersionInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentTemplateVersionOutput {
  /**
   * <p>The environment template version detail data that's returned by AWS Proton.</p>
   */
  environmentTemplateVersion: EnvironmentTemplateVersion | undefined;
}

export namespace UpdateEnvironmentTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.environmentTemplateVersion && {
      environmentTemplateVersion: EnvironmentTemplateVersion.filterSensitiveLog(obj.environmentTemplateVersion),
    }),
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for the listed tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A token to indicate the location of the next resource tag in the array of resource tags, after the list of resource tags that was
   *             previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of tags to list.</p>
   */
  maxResults?: number;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>An array of resource tags with detail data.</p>
   */
  tags: Tag[] | undefined;

  /**
   * <p>A token to indicate the location of the next resource tag in the array of resource tags, after the current requested list of resource
   *             tags.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

export interface GetServiceInstanceInput {
  /**
   * <p>The name of a service instance that you want to get the detail data for.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName: string | undefined;
}

export namespace GetServiceInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceInstanceInput): any => ({
    ...obj,
  });
}

export interface GetServiceInstanceOutput {
  /**
   * <p>The service instance detail data that's returned by AWS Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export namespace GetServiceInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceInstanceOutput): any => ({
    ...obj,
    ...(obj.serviceInstance && { serviceInstance: ServiceInstance.filterSensitiveLog(obj.serviceInstance) }),
  });
}

export interface ListServiceInstancesInput {
  /**
   * <p>The name of the service that the service instance belongs to.</p>
   */
  serviceName?: string;

  /**
   * <p>A token to indicate the location of the next service in the array of service instances, after the list of service instances that was
   *             previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of service instances to list.</p>
   */
  maxResults?: number;
}

export namespace ListServiceInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceInstancesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the service instance detail data.</p>
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
   * <p>The ID of the major version of a service template.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of a service template.</p>
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

export namespace ServiceInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceInstanceSummary): any => ({
    ...obj,
    ...(obj.deploymentStatusMessage && { deploymentStatusMessage: SENSITIVE_STRING }),
  });
}

export interface ListServiceInstancesOutput {
  /**
   * <p>A token to indicate the location of the next service instance in the array of service instances, after the current requested list of
   *             service instances.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service instances with summaries of detail data.</p>
   */
  serviceInstances: ServiceInstanceSummary[] | undefined;
}

export namespace ListServiceInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceInstancesOutput): any => ({
    ...obj,
    ...(obj.serviceInstances && {
      serviceInstances: obj.serviceInstances.map((item) => ServiceInstanceSummary.filterSensitiveLog(item)),
    }),
  });
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
   * <p>The deployment type.</p>
   *         <p>There are four modes for updating a service instance as described in the following. The <code>deploymentType</code> field defines the
   *             mode.</p>
   *         <dl>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>NONE</code>
   *                </p>
   *                     <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are
   *                         updated. <i>Don’t</i> include minor or major version parameters when you use this
   *                         <code>deployment-type</code>.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the
   *                         current major version in use, by default. You can also specify a different minor version of the current major version in
   *                         use.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version
   *                         of the current template, by default. You can also specify a different major version that is higher than the major version in
   *                         use and a minor version (optional).</p>
   *                 </dd>
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

export namespace UpdateServiceInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceInstanceInput): any => ({
    ...obj,
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface UpdateServiceInstanceOutput {
  /**
   * <p>The service instance summary data returned by AWS Proton.</p>
   */
  serviceInstance: ServiceInstance | undefined;
}

export namespace UpdateServiceInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceInstanceOutput): any => ({
    ...obj,
    ...(obj.serviceInstance && { serviceInstance: ServiceInstance.filterSensitiveLog(obj.serviceInstance) }),
  });
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
   *         <p>There are four modes for updating a service pipeline as described in the following. The <code>deploymentType</code> field defines the
   *             mode.</p>
   *         <dl>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>NONE</code>
   *                </p>
   *                     <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>CURRENT_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are
   *                         updated. <i>Don’t</i> include minor or major version parameters when you use this
   *                         <code>deployment-type</code>.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MINOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the
   *                         current major version in use, by default. You can also specify a different minor version of the current major version in
   *                         use.</p>
   *                 </dd>
   *             <dt/>
   *             <dd>
   *                     <p>
   *                   <code>MAJOR_VERSION</code>
   *                </p>
   *                     <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version
   *                         of the current template, by default. You can also specify a different major version that is higher than the major version in
   *                         use and a minor version (optional).</p>
   *                 </dd>
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

export namespace UpdateServicePipelineInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServicePipelineInput): any => ({
    ...obj,
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface UpdateServicePipelineOutput {
  /**
   * <p>The pipeline details returned by AWS Proton.</p>
   */
  pipeline: ServicePipeline | undefined;
}

export namespace UpdateServicePipelineOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServicePipelineOutput): any => ({
    ...obj,
    ...(obj.pipeline && { pipeline: ServicePipeline.filterSensitiveLog(obj.pipeline) }),
  });
}

export interface CreateServiceInput {
  /**
   * <p>The service name.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the AWS Proton service.</p>
   */
  description?: string;

  /**
   * <p>The name of the service template that's used to create the service.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The ID of the major version of the service template that was used to create the service.</p>
   */
  templateMajorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of the service template that was used to create the service.</p>
   */
  templateMinorVersion?: string;

  /**
   * <p>A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format. Don’t
   *             include pipeline inputs in the spec if your service template <i>doesn’t</i> include a service pipeline. For more
   *             information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-create-svc.html.html">Create a service</a> in the
   *                 <i>AWS Proton Administrator Guide</i> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ug-svc-create.html">Create a service</a> in the <i>AWS Proton User Guide</i>.</p>
   */
  spec: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/setting-up-for-service.html#setting-up-vcontrol">Set up repository connection</a> in the
   *                 <i>AWS Proton Administrator Guide</i> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/proton-setup.html#setup-repo-connection">Setting up with AWS Proton</a> in the <i>AWS Proton
   *                 User Guide</i>. <i>Don't</i> include this parameter if your service template <i>doesn't</i> include
   *             a service pipeline.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * <p>The ID of the code repository. <i>Don't</i> include this parameter if your service template <i>doesn't</i>
   *             include a service pipeline.</p>
   */
  repositoryId?: string;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in AWS Proton. <i>Don't</i> include this
   *             parameter if your service template <i>doesn't</i> include a service pipeline.</p>
   */
  branchName?: string;

  /**
   * <p>Create tags for your service. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace CreateServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
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
 * <p>The service detail data.</p>
 */
export interface Service {
  /**
   * <p>The name of the service.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of a service.</p>
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
   * <p>The Amazon Resource Name (ARN) of the repository connection. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/setting-up-for-service.html#setting-up-vcontrol">Set up a repository connection</a> in the
   *                 <i>AWS Proton Administrator Guide</i> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/proton-setup.html#setup-repo-connection">Setting up with AWS Proton</a> in the <i>AWS Proton
   *                 User Guide</i>.</p>
   */
  repositoryConnectionArn?: string;

  /**
   * <p>The ID of the code repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The name of the code repository branch that holds the code that's deployed in AWS Proton.</p>
   */
  branchName?: string;
}

export namespace Service {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
    ...(obj.pipeline && { pipeline: ServicePipeline.filterSensitiveLog(obj.pipeline) }),
  });
}

export interface CreateServiceOutput {
  /**
   * <p>The service detail data that's returned by AWS Proton.</p>
   */
  service: Service | undefined;
}

export namespace CreateServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceOutput): any => ({
    ...obj,
    ...(obj.service && { service: Service.filterSensitiveLog(obj.service) }),
  });
}

export interface DeleteServiceInput {
  /**
   * <p>The name of the service to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceInput): any => ({
    ...obj,
  });
}

export interface DeleteServiceOutput {
  /**
   * <p>The service detail data that's returned by AWS Proton.</p>
   */
  service?: Service;
}

export namespace DeleteServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceOutput): any => ({
    ...obj,
    ...(obj.service && { service: Service.filterSensitiveLog(obj.service) }),
  });
}

export interface GetServiceInput {
  /**
   * <p>The name of the service that you want to get the detail data for.</p>
   */
  name: string | undefined;
}

export namespace GetServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceInput): any => ({
    ...obj,
  });
}

export interface GetServiceOutput {
  /**
   * <p>The service detail data that's returned by AWS Proton.</p>
   */
  service?: Service;
}

export namespace GetServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceOutput): any => ({
    ...obj,
    ...(obj.service && { service: Service.filterSensitiveLog(obj.service) }),
  });
}

export interface ListServicesInput {
  /**
   * <p>A token to indicate the location of the next service in the array of services, after the list of services that was previously
   *             requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of services to list.</p>
   */
  maxResults?: number;
}

export namespace ListServicesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the service detail data.</p>
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

export namespace ServiceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSummary): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
  });
}

export interface ListServicesOutput {
  /**
   * <p>A token to indicate the location of the next service in the array of services, after the current requested list of services.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of services with summaries of detail data.</p>
   */
  services: ServiceSummary[] | undefined;
}

export namespace ListServicesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesOutput): any => ({
    ...obj,
    ...(obj.services && { services: obj.services.map((item) => ServiceSummary.filterSensitiveLog(item)) }),
  });
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
   * <p>Lists the service instances to add and the existing service instances to remain. Omit the existing service instances to delete from the
   *             list. <i>Don't</i> include edits to the existing service instances or pipeline. For more information, see <i>Edit a
   *                 service</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-svc-update.html">AWS Proton Administrator
   *                 Guide</a> or the <a href="https://docs.aws.amazon.com/proton/latest/userguide/ug-svc-update.html">AWS Proton User Guide</a>.</p>
   */
  spec?: string;
}

export namespace UpdateServiceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.spec && { spec: SENSITIVE_STRING }),
  });
}

export interface UpdateServiceOutput {
  /**
   * <p>The service detail data that's returned by AWS Proton.</p>
   */
  service: Service | undefined;
}

export namespace UpdateServiceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceOutput): any => ({
    ...obj,
    ...(obj.service && { service: Service.filterSensitiveLog(obj.service) }),
  });
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
   * <p>AWS Proton includes a service pipeline for your service by default. When included, this parameter indicates that an AWS Proton service
   *             pipeline <i>won't</i> be included for your service. Once specified, this parameter <i>can't</i> be changed.
   *             For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-template-bundles.html">Service template
   *                 bundles</a> in the <i>AWS Proton Administrator Guide</i>.</p>
   */
  pipelineProvisioning?: Provisioning | string;

  /**
   * <p>Create tags for your service template. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace CreateServiceTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceTemplateInput): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

/**
 * <p>The service template detail data.</p>
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
   * <p>The ID of the recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>The customer provided service template encryption key that's used to encrypt data.</p>
   */
  encryptionKey?: string;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template. Otherwise, a service
   *             pipeline <i>isn't</i> included in the service template.</p>
   */
  pipelineProvisioning?: Provisioning | string;
}

export namespace ServiceTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTemplate): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface CreateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by AWS Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

export namespace CreateServiceTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceTemplateOutput): any => ({
    ...obj,
    ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplate.filterSensitiveLog(obj.serviceTemplate) }),
  });
}

export interface DeleteServiceTemplateInput {
  /**
   * <p>The name of the service template to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteServiceTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceTemplateInput): any => ({
    ...obj,
  });
}

export interface DeleteServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by AWS Proton.</p>
   */
  serviceTemplate?: ServiceTemplate;
}

export namespace DeleteServiceTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceTemplateOutput): any => ({
    ...obj,
    ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplate.filterSensitiveLog(obj.serviceTemplate) }),
  });
}

export interface GetServiceTemplateInput {
  /**
   * <p>The name of the service template that you want to get detail data for.</p>
   */
  name: string | undefined;
}

export namespace GetServiceTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceTemplateInput): any => ({
    ...obj,
  });
}

export interface GetServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by AWS Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

export namespace GetServiceTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceTemplateOutput): any => ({
    ...obj,
    ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplate.filterSensitiveLog(obj.serviceTemplate) }),
  });
}

export interface ListServiceTemplatesInput {
  /**
   * <p>A token to indicate the location of the next service template in the array of service templates, after the list of service templates
   *             previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of service templates to list.</p>
   */
  maxResults?: number;
}

export namespace ListServiceTemplatesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceTemplatesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The service template summary data.</p>
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
   * <p>The ID of the recommended version of the service template.</p>
   */
  recommendedVersion?: string;

  /**
   * <p>If <code>pipelineProvisioning</code> is <code>true</code>, a service pipeline is included in the service template, otherwise a service
   *             pipeline <i>isn't</i> included in the service template.</p>
   */
  pipelineProvisioning?: Provisioning | string;
}

export namespace ServiceTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTemplateSummary): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface ListServiceTemplatesOutput {
  /**
   * <p>A token to indicate the location of the next service template in the array of service templates, after the current requested list of
   *             service templates.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of service templates with detail data.</p>
   */
  templates: ServiceTemplateSummary[] | undefined;
}

export namespace ListServiceTemplatesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceTemplatesOutput): any => ({
    ...obj,
    ...(obj.templates && { templates: obj.templates.map((item) => ServiceTemplateSummary.filterSensitiveLog(item)) }),
  });
}

export interface UpdateServiceTemplateInput {
  /**
   * <p>The name of the service template to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the service template to update as displayed in the developer interface.</p>
   */
  displayName?: string;

  /**
   * <p>A description of the service template update.</p>
   */
  description?: string;
}

export namespace UpdateServiceTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceTemplateInput): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateServiceTemplateOutput {
  /**
   * <p>The service template detail data that's returned by AWS Proton.</p>
   */
  serviceTemplate: ServiceTemplate | undefined;
}

export namespace UpdateServiceTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceTemplateOutput): any => ({
    ...obj,
    ...(obj.serviceTemplate && { serviceTemplate: ServiceTemplate.filterSensitiveLog(obj.serviceTemplate) }),
  });
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

export namespace CompatibleEnvironmentTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompatibleEnvironmentTemplateInput): any => ({
    ...obj,
  });
}

export interface CreateServiceTemplateVersionInput {
  /**
   * <p>When included, if two identicial requests are made with the same client token, AWS Proton returns the service template version that the
   *             first request created.</p>
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
   * <p>To create a new minor version of the service template, include a <code>majorVersion</code>.</p>
   *         <p>To create a new major and minor version of the service template, <i>exclude</i>
   *             <code>majorVersion</code>.</p>
   */
  majorVersion?: string;

  /**
   * <p>An object that includes the template bundle S3 bucket path and name for the new version of a service template.</p>
   */
  source: TemplateVersionSourceInput | undefined;

  /**
   * <p>An array of compatible environment template objects for the new version of a service template.</p>
   */
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[] | undefined;

  /**
   * <p>Create tags for a new version of a service template.</p>
   */
  tags?: Tag[];
}

export namespace CreateServiceTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceTemplateVersionInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.source && { source: TemplateVersionSourceInput.filterSensitiveLog(obj.source) }),
  });
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

export namespace CompatibleEnvironmentTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompatibleEnvironmentTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The version of a service template detail data.</p>
 */
export interface ServiceTemplateVersion {
  /**
   * <p>The name of the version of a service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The ID of the latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The ID of the recommended minor version of the service template.</p>
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
}

export namespace ServiceTemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTemplateVersion): any => ({
    ...obj,
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.schema && { schema: SENSITIVE_STRING }),
  });
}

export interface CreateServiceTemplateVersionOutput {
  /**
   * <p>The service template version summary of detail data that's returned by AWS Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export namespace CreateServiceTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.serviceTemplateVersion && {
      serviceTemplateVersion: ServiceTemplateVersion.filterSensitiveLog(obj.serviceTemplateVersion),
    }),
  });
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

export namespace DeleteServiceTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceTemplateVersionInput): any => ({
    ...obj,
  });
}

export interface DeleteServiceTemplateVersionOutput {
  /**
   * <p>The service template version detail data that's returned by AWS Proton.</p>
   */
  serviceTemplateVersion?: ServiceTemplateVersion;
}

export namespace DeleteServiceTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.serviceTemplateVersion && {
      serviceTemplateVersion: ServiceTemplateVersion.filterSensitiveLog(obj.serviceTemplateVersion),
    }),
  });
}

export interface GetServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To view service template major version detail data, include <code>majorVersion</code>.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>To view service template minor version detail data, include <code>minorVersion</code>.</p>
   */
  minorVersion: string | undefined;
}

export namespace GetServiceTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceTemplateVersionInput): any => ({
    ...obj,
  });
}

export interface GetServiceTemplateVersionOutput {
  /**
   * <p>The service template version detail data that's returned by AWS Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export namespace GetServiceTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.serviceTemplateVersion && {
      serviceTemplateVersion: ServiceTemplateVersion.filterSensitiveLog(obj.serviceTemplateVersion),
    }),
  });
}

export interface ListServiceTemplateVersionsInput {
  /**
   * <p>A token to indicate the location of the next major or minor version in the array of major or minor versions of a service template, after
   *             the list of major or minor versions that was previously requested.</p>
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
   * <p>To view a list of minor of versions under a major version of a service template, include <code>majorVersion</code>.</p>
   *         <p>To view a list of major versions of a service template, <i>exclude</i>
   *             <code>majorVersion</code>.</p>
   */
  majorVersion?: string;
}

export namespace ListServiceTemplateVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceTemplateVersionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the service template version detail data.</p>
 */
export interface ServiceTemplateVersionSummary {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The ID of the latest major version that's associated with the version of a service template.</p>
   */
  majorVersion: string | undefined;

  /**
   * <p>The ID of the minor version of a service template.</p>
   */
  minorVersion: string | undefined;

  /**
   * <p>The ID of the recommended minor version of the service template.</p>
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

export namespace ServiceTemplateVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTemplateVersionSummary): any => ({
    ...obj,
    ...(obj.statusMessage && { statusMessage: SENSITIVE_STRING }),
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface ListServiceTemplateVersionsOutput {
  /**
   * <p>A token to indicate the location of the next major or minor version in the array of major or minor versions of a service template, after
   *             the list of major or minor versions that was previously requested.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of major or minor versions of a service template with detail data.</p>
   */
  templateVersions: ServiceTemplateVersionSummary[] | undefined;
}

export namespace ListServiceTemplateVersionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServiceTemplateVersionsOutput): any => ({
    ...obj,
    ...(obj.templateVersions && {
      templateVersions: obj.templateVersions.map((item) => ServiceTemplateVersionSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateServiceTemplateVersionInput {
  /**
   * <p>The name of the service template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>To update a major version of a service template, include <code>majorVersion</code>.</p>
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
   * <p>An array of compatible environment names for a service template major or minor version to update.</p>
   */
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];
}

export namespace UpdateServiceTemplateVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceTemplateVersionInput): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateServiceTemplateVersionOutput {
  /**
   * <p>The service template version detail data that's returned by AWS Proton.</p>
   */
  serviceTemplateVersion: ServiceTemplateVersion | undefined;
}

export namespace UpdateServiceTemplateVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceTemplateVersionOutput): any => ({
    ...obj,
    ...(obj.serviceTemplateVersion && {
      serviceTemplateVersion: ServiceTemplateVersion.filterSensitiveLog(obj.serviceTemplateVersion),
    }),
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the resource tag is applied to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of resource tags to apply to a resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tag is to be removed from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of tag keys indicating the resource tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}
