// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptEnvironmentAccountConnectionCommand,
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "./commands/AcceptEnvironmentAccountConnectionCommand";
import {
  CancelComponentDeploymentCommand,
  CancelComponentDeploymentCommandInput,
  CancelComponentDeploymentCommandOutput,
} from "./commands/CancelComponentDeploymentCommand";
import {
  CancelEnvironmentDeploymentCommand,
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "./commands/CancelEnvironmentDeploymentCommand";
import {
  CancelServiceInstanceDeploymentCommand,
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "./commands/CancelServiceInstanceDeploymentCommand";
import {
  CancelServicePipelineDeploymentCommand,
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "./commands/CancelServicePipelineDeploymentCommand";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import {
  CreateEnvironmentAccountConnectionCommand,
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "./commands/CreateEnvironmentAccountConnectionCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentTemplateCommand,
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "./commands/CreateEnvironmentTemplateCommand";
import {
  CreateEnvironmentTemplateVersionCommand,
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "./commands/CreateEnvironmentTemplateVersionCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateServiceTemplateCommand,
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "./commands/CreateServiceTemplateCommand";
import {
  CreateServiceTemplateVersionCommand,
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "./commands/CreateServiceTemplateVersionCommand";
import {
  CreateTemplateSyncConfigCommand,
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
} from "./commands/CreateTemplateSyncConfigCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteEnvironmentAccountConnectionCommand,
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "./commands/DeleteEnvironmentAccountConnectionCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentTemplateCommand,
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "./commands/DeleteEnvironmentTemplateCommand";
import {
  DeleteEnvironmentTemplateVersionCommand,
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "./commands/DeleteEnvironmentTemplateVersionCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteServiceTemplateCommand,
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "./commands/DeleteServiceTemplateCommand";
import {
  DeleteServiceTemplateVersionCommand,
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "./commands/DeleteServiceTemplateVersionCommand";
import {
  DeleteTemplateSyncConfigCommand,
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
} from "./commands/DeleteTemplateSyncConfigCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetEnvironmentAccountConnectionCommand,
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "./commands/GetEnvironmentAccountConnectionCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentTemplateCommand,
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "./commands/GetEnvironmentTemplateCommand";
import {
  GetEnvironmentTemplateVersionCommand,
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "./commands/GetEnvironmentTemplateVersionCommand";
import {
  GetRepositoryCommand,
  GetRepositoryCommandInput,
  GetRepositoryCommandOutput,
} from "./commands/GetRepositoryCommand";
import {
  GetRepositorySyncStatusCommand,
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "./commands/GetRepositorySyncStatusCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  GetServiceInstanceCommand,
  GetServiceInstanceCommandInput,
  GetServiceInstanceCommandOutput,
} from "./commands/GetServiceInstanceCommand";
import {
  GetServiceTemplateCommand,
  GetServiceTemplateCommandInput,
  GetServiceTemplateCommandOutput,
} from "./commands/GetServiceTemplateCommand";
import {
  GetServiceTemplateVersionCommand,
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "./commands/GetServiceTemplateVersionCommand";
import {
  GetTemplateSyncConfigCommand,
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
} from "./commands/GetTemplateSyncConfigCommand";
import {
  GetTemplateSyncStatusCommand,
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
} from "./commands/GetTemplateSyncStatusCommand";
import {
  ListComponentOutputsCommand,
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "./commands/ListComponentOutputsCommand";
import {
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "./commands/ListComponentProvisionedResourcesCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "./commands/ListEnvironmentAccountConnectionsCommand";
import {
  ListEnvironmentOutputsCommand,
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "./commands/ListEnvironmentOutputsCommand";
import {
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "./commands/ListEnvironmentProvisionedResourcesCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "./commands/ListEnvironmentTemplatesCommand";
import {
  ListEnvironmentTemplateVersionsCommand,
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "./commands/ListEnvironmentTemplateVersionsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import {
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "./commands/ListServiceInstanceOutputsCommand";
import {
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "./commands/ListServiceInstanceProvisionedResourcesCommand";
import {
  ListServiceInstancesCommand,
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "./commands/ListServiceInstancesCommand";
import {
  ListServicePipelineOutputsCommand,
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "./commands/ListServicePipelineOutputsCommand";
import {
  ListServicePipelineProvisionedResourcesCommand,
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "./commands/ListServicePipelineProvisionedResourcesCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListServiceTemplatesCommand,
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "./commands/ListServiceTemplatesCommand";
import {
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "./commands/ListServiceTemplateVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyResourceDeploymentStatusChangeCommand,
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
} from "./commands/NotifyResourceDeploymentStatusChangeCommand";
import {
  RejectEnvironmentAccountConnectionCommand,
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "./commands/RejectEnvironmentAccountConnectionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateComponentCommand,
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
} from "./commands/UpdateComponentCommand";
import {
  UpdateEnvironmentAccountConnectionCommand,
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "./commands/UpdateEnvironmentAccountConnectionCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentTemplateCommand,
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "./commands/UpdateEnvironmentTemplateCommand";
import {
  UpdateEnvironmentTemplateVersionCommand,
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "./commands/UpdateEnvironmentTemplateVersionCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateServiceInstanceCommand,
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "./commands/UpdateServiceInstanceCommand";
import {
  UpdateServicePipelineCommand,
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "./commands/UpdateServicePipelineCommand";
import {
  UpdateServiceTemplateCommand,
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "./commands/UpdateServiceTemplateCommand";
import {
  UpdateServiceTemplateVersionCommand,
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "./commands/UpdateServiceTemplateVersionCommand";
import {
  UpdateTemplateSyncConfigCommand,
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
} from "./commands/UpdateTemplateSyncConfigCommand";
import { ProtonClient } from "./ProtonClient";

/**
 * <p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton service.</p>
 *          <p>The documentation for each action shows the Query API request parameters and the XML response.</p>
 *          <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User Guide</a>.</p>
 *          <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure
 *    and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to
 *    automate their application or service deployments.</p>
 *          <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the
 *    listed API operations.</p>
 *          <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are
 *    running on Proton, developers need permissions to the service <i>create</i>, <i>list</i>,
 *     <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and
 *     <i>update</i> API operations.</p>
 *          <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p>
 *          <p>
 *             <b>Ensuring Idempotency</b>
 *          </p>
 *          <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete.
 *    Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might
 *    make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the
 *    operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times.
 *    This means that you might create more resources than you intended.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the
 *    original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the
 *    result might contain updated information, such as the current creation status.</p>
 *          <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
 *          <p>
 *             <b>Idempotent create APIs with a client token</b>
 *          </p>
 *          <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding Amazon Web Services CLI commands
 *    also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an
 *    idempotent API request using one of these actions, specify a client token in the request. We recommend that you <i>don't</i> reuse
 *    the same client token for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically provided
 *    by SDKs.</p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other
 *    than returning the original resource detail data in the response.</p>
 *          <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a
 *     <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created.</p>
 *          <p>If the original resource is deleted and you retry the request, a new resource is created.</p>
 *          <p>Idempotent create APIs with a client token:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent create APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry succeeds
 *    without performing any further actions other than returning the original resource detail data in the response.</p>
 *          <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
 *          <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
 *     <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Idempotent create APIs:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironment</p>
 *             </li>
 *             <li>
 *                <p>CreateService</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p>
 *          <p>If you retry and the resource doesn't exist, the response is empty.</p>
 *          <p>In both cases, the retry succeeds.</p>
 *          <p>Idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Asynchronous idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, if the original request delete operation status is <code>DELETE_IN_PROGRESS</code>, the
 *    retry returns the resource detail data in the response without performing any further actions.</p>
 *          <p>If the original request delete operation is complete, a retry returns an empty response.</p>
 *          <p>Asynchronous idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironment</p>
 *             </li>
 *             <li>
 *                <p>DeleteService</p>
 *             </li>
 *          </ul>
 */
export class Proton extends ProtonClient {
  /**
   * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton
   *       can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptEnvironmentAccountConnectionCommandOutput>;
  public acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public acceptEnvironmentAccountConnection(
    args: AcceptEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: AcceptEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<AcceptEnvironmentAccountConnectionCommandOutput> | void {
    const command = new AcceptEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelComponentDeploymentCommandOutput>;
  public cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    cb: (err: any, data?: CancelComponentDeploymentCommandOutput) => void
  ): void;
  public cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelComponentDeploymentCommandOutput) => void
  ): void;
  public cancelComponentDeployment(
    args: CancelComponentDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelComponentDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CancelComponentDeploymentCommandOutput) => void
  ): Promise<CancelComponentDeploymentCommandOutput> | void {
    const command = new CancelComponentDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton
   *         User guide</i>.</p>
   *          <p>The following list includes potential cancellation scenarios.</p>
   *          <ul>
   *             <li>
   *                <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is
   *             <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p>
   *             </li>
   *          </ul>
   */
  public cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelEnvironmentDeploymentCommandOutput>;
  public cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    cb: (err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void
  ): void;
  public cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void
  ): void;
  public cancelEnvironmentDeployment(
    args: CancelEnvironmentDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CancelEnvironmentDeploymentCommandOutput) => void
  ): Promise<CancelEnvironmentDeploymentCommandOutput> | void {
    const command = new CancelEnvironmentDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the
   *         <i>Proton User guide</i>.</p>
   *          <p>The following list includes potential cancellation scenarios.</p>
   *          <ul>
   *             <li>
   *                <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is
   *             <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p>
   *             </li>
   *          </ul>
   */
  public cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServiceInstanceDeploymentCommandOutput>;
  public cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    cb: (err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void
  ): void;
  public cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void
  ): void;
  public cancelServiceInstanceDeployment(
    args: CancelServiceInstanceDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CancelServiceInstanceDeploymentCommandOutput) => void
  ): Promise<CancelServiceInstanceDeploymentCommandOutput> | void {
    const command = new CancelServiceInstanceDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the
   *         <i>Proton User guide</i>.</p>
   *          <p>The following list includes potential cancellation scenarios.</p>
   *          <ul>
   *             <li>
   *                <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is
   *             <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p>
   *             </li>
   *          </ul>
   */
  public cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServicePipelineDeploymentCommandOutput>;
  public cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    cb: (err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void
  ): void;
  public cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void
  ): void;
  public cancelServicePipelineDeployment(
    args: CancelServicePipelineDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CancelServicePipelineDeploymentCommandOutput) => void
  ): Promise<CancelServicePipelineDeploymentCommandOutput> | void {
    const command = new CancelServicePipelineDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create an Proton component. A component is an infrastructure extension for a service instance.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  public createComponent(
    args: CreateComponentCommandInput,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentCommandOutput) => void
  ): Promise<CreateComponentCommandOutput> | void {
    const command = new CreateComponentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be
   *       shared across services.</p>
   *          <p class="title">
   *             <b>You can provision environments using the following methods:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p>
   *             </li>
   *             <li>
   *                <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC
   *           engine uses to provision resources.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): Promise<CreateEnvironmentCommandOutput> | void {
    const command = new CreateEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment
   *       account from a management account.</p>
   *          <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment
   *         account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User
   *         guide</i>.</p>
   */
  public createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentAccountConnectionCommandOutput>;
  public createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public createEnvironmentAccountConnection(
    args: CreateEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<CreateEnvironmentAccountConnectionCommandOutput> | void {
    const command = new CreateEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p>
   *          <p>You can create an environment template in one of the two following ways:</p>
   *          <ul>
   *             <li>
   *                <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment
   *           infrastructure.</p>
   *             </li>
   *             <li>
   *                <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned
   *           infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment
   *           template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to
   *             <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register
   *             and publish an environment template</a> in the <i>Proton User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  public createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentTemplateCommandOutput>;
  public createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    cb: (err: any, data?: CreateEnvironmentTemplateCommandOutput) => void
  ): void;
  public createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentTemplateCommandOutput) => void
  ): void;
  public createEnvironmentTemplate(
    args: CreateEnvironmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentTemplateCommandOutput) => void
  ): Promise<CreateEnvironmentTemplateCommandOutput> | void {
    const command = new CreateEnvironmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new major or minor version of an environment template. A major version of an environment template is a version that
   *         <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major
   *       version.</p>
   */
  public createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentTemplateVersionCommandOutput>;
  public createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public createEnvironmentTemplateVersion(
    args: CreateEnvironmentTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentTemplateVersionCommandOutput) => void
  ): Promise<CreateEnvironmentTemplateVersionCommandOutput> | void {
    const command = new CreateEnvironmentTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed
   *       provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed
   *       provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and
   *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton
   *         User Guide</i>.</p>
   */
  public createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  public createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): Promise<CreateRepositoryCommandOutput> | void {
    const command = new CreateRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline.
   *       For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  public createService(
    args: CreateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceCommandOutput>;
  public createService(
    args: CreateServiceCommandInput,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceCommandOutput) => void
  ): Promise<CreateServiceCommandOutput> | void {
    const command = new CreateServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline.
   *       Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a
   *       link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more
   *       information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  public createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceTemplateCommandOutput>;
  public createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    cb: (err: any, data?: CreateServiceTemplateCommandOutput) => void
  ): void;
  public createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceTemplateCommandOutput) => void
  ): void;
  public createServiceTemplate(
    args: CreateServiceTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceTemplateCommandOutput) => void
  ): Promise<CreateServiceTemplateCommandOutput> | void {
    const command = new CreateServiceTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward
   *       compatible. A minor version of a service template is a version that's backward compatible within its major version.</p>
   */
  public createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceTemplateVersionCommandOutput>;
  public createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    cb: (err: any, data?: CreateServiceTemplateVersionCommandOutput) => void
  ): void;
  public createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceTemplateVersionCommandOutput) => void
  ): void;
  public createServiceTemplateVersion(
    args: CreateServiceTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceTemplateVersionCommandOutput) => void
  ): Promise<CreateServiceTemplateVersionCommandOutput> | void {
    const command = new CreateServiceTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been
   *       registered with Proton. For more information, see <a>CreateRepository</a>.</p>
   *          <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle
   *       change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User
   *         Guide</i>.</p>
   */
  public createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateSyncConfigCommandOutput>;
  public createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    cb: (err: any, data?: CreateTemplateSyncConfigCommandOutput) => void
  ): void;
  public createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateSyncConfigCommandOutput) => void
  ): void;
  public createTemplateSyncConfig(
    args: CreateTemplateSyncConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTemplateSyncConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateSyncConfigCommandOutput) => void
  ): Promise<CreateTemplateSyncConfigCommandOutput> | void {
    const command = new CreateTemplateSyncConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an Proton component resource.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentCommandOutput) => void
  ): Promise<DeleteComponentCommandOutput> | void {
    const command = new DeleteComponentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an environment.</p>
   */
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): Promise<DeleteEnvironmentCommandOutput> | void {
    const command = new DeleteEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>In an environment account, delete an environment account connection.</p>
   *          <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the
   *       environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're
   *       responsible for cleaning up provisioned resources that remain without an environment connection.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentAccountConnectionCommandOutput>;
  public deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public deleteEnvironmentAccountConnection(
    args: DeleteEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<DeleteEnvironmentAccountConnectionCommandOutput> | void {
    const command = new DeleteEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If no other major or minor versions of an environment template exist, delete the environment template.</p>
   */
  public deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentTemplateCommandOutput>;
  public deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    cb: (err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void
  ): void;
  public deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void
  ): void;
  public deleteEnvironmentTemplate(
    args: DeleteEnvironmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentTemplateCommandOutput) => void
  ): Promise<DeleteEnvironmentTemplateCommandOutput> | void {
    const command = new DeleteEnvironmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the
   *         <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions
   *       of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p>
   *          <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a
   *         <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an
   *       environment template is a version that's backward compatible.</p>
   */
  public deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentTemplateVersionCommandOutput>;
  public deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public deleteEnvironmentTemplateVersion(
    args: DeleteEnvironmentTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentTemplateVersionCommandOutput) => void
  ): Promise<DeleteEnvironmentTemplateVersionCommandOutput> | void {
    const command = new DeleteEnvironmentTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>De-register and unlink your repository.</p>
   */
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): Promise<DeleteRepositoryCommandOutput> | void {
    const command = new DeleteRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a service, with its instances and pipeline.</p>
   *          <note>
   *             <p>You can't delete a service if it has any service instances that have components attached to them.</p>
   *             <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   *          </note>
   */
  public deleteService(
    args: DeleteServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceCommandOutput>;
  public deleteService(
    args: DeleteServiceCommandInput,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceCommandOutput) => void
  ): Promise<DeleteServiceCommandOutput> | void {
    const command = new DeleteServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If no other major or minor versions of the service template exist, delete the service template.</p>
   */
  public deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceTemplateCommandOutput>;
  public deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    cb: (err: any, data?: DeleteServiceTemplateCommandOutput) => void
  ): void;
  public deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceTemplateCommandOutput) => void
  ): void;
  public deleteServiceTemplate(
    args: DeleteServiceTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceTemplateCommandOutput) => void
  ): Promise<DeleteServiceTemplateCommandOutput> | void {
    const command = new DeleteServiceTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code>
   *       version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A
   *       major version of a service template is a version that <i>isn't</i> backwards compatible.</p>
   *          <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the
   *       service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards
   *       compatible.</p>
   */
  public deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceTemplateVersionCommandOutput>;
  public deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void
  ): void;
  public deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void
  ): void;
  public deleteServiceTemplateVersion(
    args: DeleteServiceTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceTemplateVersionCommandOutput) => void
  ): Promise<DeleteServiceTemplateVersionCommandOutput> | void {
    const command = new DeleteServiceTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a template sync configuration.</p>
   */
  public deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateSyncConfigCommandOutput>;
  public deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    cb: (err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void
  ): void;
  public deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void
  ): void;
  public deleteTemplateSyncConfig(
    args: DeleteTemplateSyncConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteTemplateSyncConfigCommandOutput) => void
  ): Promise<DeleteTemplateSyncConfigCommandOutput> | void {
    const command = new DeleteTemplateSyncConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detail data for Proton account-wide settings.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a component.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  public getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  public getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  public getComponent(
    args: GetComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentCommandOutput) => void),
    cb?: (err: any, data?: GetComponentCommandOutput) => void
  ): Promise<GetComponentCommandOutput> | void {
    const command = new GetComponentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for an environment.</p>
   */
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): Promise<GetEnvironmentCommandOutput> | void {
    const command = new GetEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>In an environment account, get the detailed data for an environment account connection.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentAccountConnectionCommandOutput>;
  public getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public getEnvironmentAccountConnection(
    args: GetEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<GetEnvironmentAccountConnectionCommandOutput> | void {
    const command = new GetEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for an environment template.</p>
   */
  public getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentTemplateCommandOutput>;
  public getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    cb: (err: any, data?: GetEnvironmentTemplateCommandOutput) => void
  ): void;
  public getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentTemplateCommandOutput) => void
  ): void;
  public getEnvironmentTemplate(
    args: GetEnvironmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentTemplateCommandOutput) => void
  ): Promise<GetEnvironmentTemplateCommandOutput> | void {
    const command = new GetEnvironmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a major or minor version of an environment template.</p>
   */
  public getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentTemplateVersionCommandOutput>;
  public getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public getEnvironmentTemplateVersion(
    args: GetEnvironmentTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentTemplateVersionCommandOutput) => void
  ): Promise<GetEnvironmentTemplateVersionCommandOutput> | void {
    const command = new GetEnvironmentTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detail data for a linked repository.</p>
   */
  public getRepository(
    args: GetRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryCommandOutput>;
  public getRepository(
    args: GetRepositoryCommandInput,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;
  public getRepository(
    args: GetRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;
  public getRepository(
    args: GetRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryCommandOutput) => void
  ): Promise<GetRepositoryCommandOutput> | void {
    const command = new GetRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p>
   *          <note>
   *             <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource
   *         have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control
   *         (ABAC).</p>
   *             <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User
   *           Guide</i>.</p>
   *          </note>
   */
  public getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositorySyncStatusCommandOutput>;
  public getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;
  public getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;
  public getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositorySyncStatusCommandOutput) => void),
    cb?: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): Promise<GetRepositorySyncStatusCommandOutput> | void {
    const command = new GetRepositorySyncStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a service.</p>
   */
  public getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
  public getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
  public getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  public getService(
    args: GetServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceCommandOutput) => void),
    cb?: (err: any, data?: GetServiceCommandOutput) => void
  ): Promise<GetServiceCommandOutput> | void {
    const command = new GetServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.</p>
   */
  public getServiceInstance(
    args: GetServiceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceInstanceCommandOutput>;
  public getServiceInstance(
    args: GetServiceInstanceCommandInput,
    cb: (err: any, data?: GetServiceInstanceCommandOutput) => void
  ): void;
  public getServiceInstance(
    args: GetServiceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceInstanceCommandOutput) => void
  ): void;
  public getServiceInstance(
    args: GetServiceInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetServiceInstanceCommandOutput) => void
  ): Promise<GetServiceInstanceCommandOutput> | void {
    const command = new GetServiceInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a service template.</p>
   */
  public getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceTemplateCommandOutput>;
  public getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    cb: (err: any, data?: GetServiceTemplateCommandOutput) => void
  ): void;
  public getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceTemplateCommandOutput) => void
  ): void;
  public getServiceTemplate(
    args: GetServiceTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetServiceTemplateCommandOutput) => void
  ): Promise<GetServiceTemplateCommandOutput> | void {
    const command = new GetServiceTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detailed data for a major or minor version of a service template.</p>
   */
  public getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceTemplateVersionCommandOutput>;
  public getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    cb: (err: any, data?: GetServiceTemplateVersionCommandOutput) => void
  ): void;
  public getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceTemplateVersionCommandOutput) => void
  ): void;
  public getServiceTemplateVersion(
    args: GetServiceTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: GetServiceTemplateVersionCommandOutput) => void
  ): Promise<GetServiceTemplateVersionCommandOutput> | void {
    const command = new GetServiceTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get detail data for a template sync configuration.</p>
   */
  public getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSyncConfigCommandOutput>;
  public getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    cb: (err: any, data?: GetTemplateSyncConfigCommandOutput) => void
  ): void;
  public getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSyncConfigCommandOutput) => void
  ): void;
  public getTemplateSyncConfig(
    args: GetTemplateSyncConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateSyncConfigCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateSyncConfigCommandOutput) => void
  ): Promise<GetTemplateSyncConfigCommandOutput> | void {
    const command = new GetTemplateSyncConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the status of a template sync.</p>
   */
  public getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSyncStatusCommandOutput>;
  public getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    cb: (err: any, data?: GetTemplateSyncStatusCommandOutput) => void
  ): void;
  public getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSyncStatusCommandOutput) => void
  ): void;
  public getTemplateSyncStatus(
    args: GetTemplateSyncStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateSyncStatusCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateSyncStatusCommandOutput) => void
  ): Promise<GetTemplateSyncStatusCommandOutput> | void {
    const command = new GetTemplateSyncStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list of component Infrastructure as Code (IaC) outputs.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentOutputsCommandOutput>;
  public listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    cb: (err: any, data?: ListComponentOutputsCommandOutput) => void
  ): void;
  public listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentOutputsCommandOutput) => void
  ): void;
  public listComponentOutputs(
    args: ListComponentOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentOutputsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentOutputsCommandOutput) => void
  ): Promise<ListComponentOutputsCommandOutput> | void {
    const command = new ListComponentOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List provisioned resources for a component with details.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentProvisionedResourcesCommandOutput>;
  public listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void
  ): void;
  public listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void
  ): void;
  public listComponentProvisionedResources(
    args: ListComponentProvisionedResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListComponentProvisionedResourcesCommandOutput) => void
  ): Promise<ListComponentProvisionedResourcesCommandOutput> | void {
    const command = new ListComponentProvisionedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>View a list of environment account connections.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentAccountConnectionsCommandOutput>;
  public listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    cb: (err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void
  ): void;
  public listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void
  ): void;
  public listEnvironmentAccountConnections(
    args: ListEnvironmentAccountConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentAccountConnectionsCommandOutput) => void
  ): Promise<ListEnvironmentAccountConnectionsCommandOutput> | void {
    const command = new ListEnvironmentAccountConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the infrastructure as code outputs for your environment.</p>
   */
  public listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentOutputsCommandOutput>;
  public listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    cb: (err: any, data?: ListEnvironmentOutputsCommandOutput) => void
  ): void;
  public listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentOutputsCommandOutput) => void
  ): void;
  public listEnvironmentOutputs(
    args: ListEnvironmentOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentOutputsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentOutputsCommandOutput) => void
  ): Promise<ListEnvironmentOutputsCommandOutput> | void {
    const command = new ListEnvironmentOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the provisioned resources for your environment.</p>
   */
  public listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentProvisionedResourcesCommandOutput>;
  public listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void
  ): void;
  public listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void
  ): void;
  public listEnvironmentProvisionedResources(
    args: ListEnvironmentProvisionedResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentProvisionedResourcesCommandOutput) => void
  ): Promise<ListEnvironmentProvisionedResourcesCommandOutput> | void {
    const command = new ListEnvironmentProvisionedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List environments with detail data summaries.</p>
   */
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): Promise<ListEnvironmentsCommandOutput> | void {
    const command = new ListEnvironmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List environment templates.</p>
   */
  public listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentTemplatesCommandOutput>;
  public listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    cb: (err: any, data?: ListEnvironmentTemplatesCommandOutput) => void
  ): void;
  public listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentTemplatesCommandOutput) => void
  ): void;
  public listEnvironmentTemplates(
    args: ListEnvironmentTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentTemplatesCommandOutput) => void
  ): Promise<ListEnvironmentTemplatesCommandOutput> | void {
    const command = new ListEnvironmentTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List major or minor versions of an environment template with detail data.</p>
   */
  public listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentTemplateVersionsCommandOutput>;
  public listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    cb: (err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void
  ): void;
  public listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void
  ): void;
  public listEnvironmentTemplateVersions(
    args: ListEnvironmentTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentTemplateVersionsCommandOutput) => void
  ): Promise<ListEnvironmentTemplateVersionsCommandOutput> | void {
    const command = new ListEnvironmentTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List linked repositories with detail data.</p>
   */
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): Promise<ListRepositoriesCommandOutput> | void {
    const command = new ListRepositoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List repository sync definitions with detail data.</p>
   */
  public listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositorySyncDefinitionsCommandOutput>;
  public listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;
  public listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;
  public listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): Promise<ListRepositorySyncDefinitionsCommandOutput> | void {
    const command = new ListRepositorySyncDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list service of instance Infrastructure as Code (IaC) outputs.</p>
   */
  public listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstanceOutputsCommandOutput>;
  public listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    cb: (err: any, data?: ListServiceInstanceOutputsCommandOutput) => void
  ): void;
  public listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstanceOutputsCommandOutput) => void
  ): void;
  public listServiceInstanceOutputs(
    args: ListServiceInstanceOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceInstanceOutputsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceInstanceOutputsCommandOutput) => void
  ): Promise<ListServiceInstanceOutputsCommandOutput> | void {
    const command = new ListServiceInstanceOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List provisioned resources for a service instance with details.</p>
   */
  public listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstanceProvisionedResourcesCommandOutput>;
  public listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void
  ): void;
  public listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void
  ): void;
  public listServiceInstanceProvisionedResources(
    args: ListServiceInstanceProvisionedResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListServiceInstanceProvisionedResourcesCommandOutput) => void
  ): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> | void {
    const command = new ListServiceInstanceProvisionedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.</p>
   */
  public listServiceInstances(
    args: ListServiceInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceInstancesCommandOutput>;
  public listServiceInstances(
    args: ListServiceInstancesCommandInput,
    cb: (err: any, data?: ListServiceInstancesCommandOutput) => void
  ): void;
  public listServiceInstances(
    args: ListServiceInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceInstancesCommandOutput) => void
  ): void;
  public listServiceInstances(
    args: ListServiceInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListServiceInstancesCommandOutput) => void
  ): Promise<ListServiceInstancesCommandOutput> | void {
    const command = new ListServiceInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list of service pipeline Infrastructure as Code (IaC) outputs.</p>
   */
  public listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicePipelineOutputsCommandOutput>;
  public listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    cb: (err: any, data?: ListServicePipelineOutputsCommandOutput) => void
  ): void;
  public listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicePipelineOutputsCommandOutput) => void
  ): void;
  public listServicePipelineOutputs(
    args: ListServicePipelineOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicePipelineOutputsCommandOutput) => void),
    cb?: (err: any, data?: ListServicePipelineOutputsCommandOutput) => void
  ): Promise<ListServicePipelineOutputsCommandOutput> | void {
    const command = new ListServicePipelineOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List provisioned resources for a service and pipeline with details.</p>
   */
  public listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicePipelineProvisionedResourcesCommandOutput>;
  public listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    cb: (err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void
  ): void;
  public listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void
  ): void;
  public listServicePipelineProvisionedResources(
    args: ListServicePipelineProvisionedResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListServicePipelineProvisionedResourcesCommandOutput) => void
  ): Promise<ListServicePipelineProvisionedResourcesCommandOutput> | void {
    const command = new ListServicePipelineProvisionedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List services with summaries of detail data.</p>
   */
  public listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  public listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  public listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicesCommandOutput) => void),
    cb?: (err: any, data?: ListServicesCommandOutput) => void
  ): Promise<ListServicesCommandOutput> | void {
    const command = new ListServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List service templates with detail data.</p>
   */
  public listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceTemplatesCommandOutput>;
  public listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    cb: (err: any, data?: ListServiceTemplatesCommandOutput) => void
  ): void;
  public listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceTemplatesCommandOutput) => void
  ): void;
  public listServiceTemplates(
    args: ListServiceTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListServiceTemplatesCommandOutput) => void
  ): Promise<ListServiceTemplatesCommandOutput> | void {
    const command = new ListServiceTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List major or minor versions of a service template with detail data.</p>
   */
  public listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceTemplateVersionsCommandOutput>;
  public listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    cb: (err: any, data?: ListServiceTemplateVersionsCommandOutput) => void
  ): void;
  public listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceTemplateVersionsCommandOutput) => void
  ): void;
  public listServiceTemplateVersions(
    args: ListServiceTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceTemplateVersionsCommandOutput) => void
  ): Promise<ListServiceTemplateVersionsCommandOutput> | void {
    const command = new ListServiceTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and
   *         tagging</a> in the <i>Proton User Guide</i>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
   */
  public notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyResourceDeploymentStatusChangeCommandOutput>;
  public notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    cb: (err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void
  ): void;
  public notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void
  ): void;
  public notifyResourceDeploymentStatusChange(
    args: NotifyResourceDeploymentStatusChangeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void),
    cb?: (err: any, data?: NotifyResourceDeploymentStatusChangeCommandOutput) => void
  ): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> | void {
    const command = new NotifyResourceDeploymentStatusChangeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>In a management account, reject an environment account connection from another environment account.</p>
   *          <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account
   *       connection.</p>
   *          <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectEnvironmentAccountConnectionCommandOutput>;
  public rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public rejectEnvironmentAccountConnection(
    args: RejectEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: RejectEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<RejectEnvironmentAccountConnectionCommandOutput> | void {
    const command = new RejectEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
   *         <i>Proton User Guide</i>.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update Proton settings that are used for multiple services in the Amazon Web Services account.</p>
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a component.</p>
   *          <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p>
   *          <note>
   *             <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is
   *         <code>IN_PROGRESS</code>.</p>
   *          </note>
   *          <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   */
  public updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  public updateComponent(
    args: UpdateComponentCommandInput,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateComponentCommandOutput) => void
  ): Promise<UpdateComponentCommandOutput> | void {
    const command = new UpdateComponentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update an environment.</p>
   *          <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the
   *         <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p>
   *          <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current
   *       environment account connection was created in. The account connection must also be associated with the current environment.</p>
   *          <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the
   *         <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account
   *       connection if it <i>isn't</i> already associated with an environment connection.</p>
   *          <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update
   *       both.</p>
   *          <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p>
   *          <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the
   *         <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User
   *         Guide</i>.</p>
   *          <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p>
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
   *               <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p>
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
   *             by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p>
   *             </dd>
   *          </dl>
   */
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): Promise<UpdateEnvironmentCommandOutput> | void {
    const command = new UpdateEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>In an environment account, update an environment account connection to use a new IAM role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
   *         connections</a> in the <i>Proton User guide</i>.</p>
   */
  public updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentAccountConnectionCommandOutput>;
  public updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    cb: (err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void
  ): void;
  public updateEnvironmentAccountConnection(
    args: UpdateEnvironmentAccountConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentAccountConnectionCommandOutput) => void
  ): Promise<UpdateEnvironmentAccountConnectionCommandOutput> | void {
    const command = new UpdateEnvironmentAccountConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update an environment template.</p>
   */
  public updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentTemplateCommandOutput>;
  public updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    cb: (err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void
  ): void;
  public updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void
  ): void;
  public updateEnvironmentTemplate(
    args: UpdateEnvironmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentTemplateCommandOutput) => void
  ): Promise<UpdateEnvironmentTemplateCommandOutput> | void {
    const command = new UpdateEnvironmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a major or minor version of an environment template.</p>
   */
  public updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentTemplateVersionCommandOutput>;
  public updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    cb: (err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void
  ): void;
  public updateEnvironmentTemplateVersion(
    args: UpdateEnvironmentTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentTemplateVersionCommandOutput) => void
  ): Promise<UpdateEnvironmentTemplateVersionCommandOutput> | void {
    const command = new UpdateEnvironmentTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Edit a service description or use a spec to add and delete service instances.</p>
   *          <note>
   *             <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p>
   *          </note>
   *          <p>Use the <code>description</code> parameter to modify the description.</p>
   *          <p>Edit the <code>spec</code> parameter to add or delete instances.</p>
   *          <note>
   *             <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p>
   *             <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   *          </note>
   */
  public updateService(
    args: UpdateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceCommandOutput>;
  public updateService(
    args: UpdateServiceCommandInput,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceCommandOutput) => void
  ): Promise<UpdateServiceCommandOutput> | void {
    const command = new UpdateServiceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a service instance.</p>
   *          <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p>
   *          <note>
   *             <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is
   *         <code>IN_PROGRESS</code>.</p>
   *             <p>For more information about components, see
   *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
   *   <i>Proton User Guide</i>.</p>
   *          </note>
   */
  public updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceInstanceCommandOutput>;
  public updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    cb: (err: any, data?: UpdateServiceInstanceCommandOutput) => void
  ): void;
  public updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceInstanceCommandOutput) => void
  ): void;
  public updateServiceInstance(
    args: UpdateServiceInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceInstanceCommandOutput) => void
  ): Promise<UpdateServiceInstanceCommandOutput> | void {
    const command = new UpdateServiceInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the service pipeline.</p>
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
   *             template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p>
   *             </dd>
   *          </dl>
   */
  public updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServicePipelineCommandOutput>;
  public updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    cb: (err: any, data?: UpdateServicePipelineCommandOutput) => void
  ): void;
  public updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServicePipelineCommandOutput) => void
  ): void;
  public updateServicePipeline(
    args: UpdateServicePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServicePipelineCommandOutput) => void),
    cb?: (err: any, data?: UpdateServicePipelineCommandOutput) => void
  ): Promise<UpdateServicePipelineCommandOutput> | void {
    const command = new UpdateServicePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a service template.</p>
   */
  public updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceTemplateCommandOutput>;
  public updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    cb: (err: any, data?: UpdateServiceTemplateCommandOutput) => void
  ): void;
  public updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceTemplateCommandOutput) => void
  ): void;
  public updateServiceTemplate(
    args: UpdateServiceTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceTemplateCommandOutput) => void
  ): Promise<UpdateServiceTemplateCommandOutput> | void {
    const command = new UpdateServiceTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a major or minor version of a service template.</p>
   */
  public updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceTemplateVersionCommandOutput>;
  public updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    cb: (err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void
  ): void;
  public updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void
  ): void;
  public updateServiceTemplateVersion(
    args: UpdateServiceTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceTemplateVersionCommandOutput) => void
  ): Promise<UpdateServiceTemplateVersionCommandOutput> | void {
    const command = new UpdateServiceTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch,
   *       name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information,
   *       see <a>CreateRepository</a>.</p>
   */
  public updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateSyncConfigCommandOutput>;
  public updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    cb: (err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void
  ): void;
  public updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void
  ): void;
  public updateTemplateSyncConfig(
    args: UpdateTemplateSyncConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateSyncConfigCommandOutput) => void
  ): Promise<UpdateTemplateSyncConfigCommandOutput> | void {
    const command = new UpdateTemplateSyncConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
