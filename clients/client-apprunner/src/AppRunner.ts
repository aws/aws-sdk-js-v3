// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppRunnerClient } from "./AppRunnerClient";
import {
  AssociateCustomDomainCommand,
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "./commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommand,
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "./commands/CreateAutoScalingConfigurationCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateObservabilityConfigurationCommand,
  CreateObservabilityConfigurationCommandInput,
  CreateObservabilityConfigurationCommandOutput,
} from "./commands/CreateObservabilityConfigurationCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateVpcConnectorCommand,
  CreateVpcConnectorCommandInput,
  CreateVpcConnectorCommandOutput,
} from "./commands/CreateVpcConnectorCommand";
import {
  CreateVpcIngressConnectionCommand,
  CreateVpcIngressConnectionCommandInput,
  CreateVpcIngressConnectionCommandOutput,
} from "./commands/CreateVpcIngressConnectionCommand";
import {
  DeleteAutoScalingConfigurationCommand,
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "./commands/DeleteAutoScalingConfigurationCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteObservabilityConfigurationCommand,
  DeleteObservabilityConfigurationCommandInput,
  DeleteObservabilityConfigurationCommandOutput,
} from "./commands/DeleteObservabilityConfigurationCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteVpcConnectorCommand,
  DeleteVpcConnectorCommandInput,
  DeleteVpcConnectorCommandOutput,
} from "./commands/DeleteVpcConnectorCommand";
import {
  DeleteVpcIngressConnectionCommand,
  DeleteVpcIngressConnectionCommandInput,
  DeleteVpcIngressConnectionCommandOutput,
} from "./commands/DeleteVpcIngressConnectionCommand";
import {
  DescribeAutoScalingConfigurationCommand,
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "./commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommand,
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "./commands/DescribeCustomDomainsCommand";
import {
  DescribeObservabilityConfigurationCommand,
  DescribeObservabilityConfigurationCommandInput,
  DescribeObservabilityConfigurationCommandOutput,
} from "./commands/DescribeObservabilityConfigurationCommand";
import {
  DescribeServiceCommand,
  DescribeServiceCommandInput,
  DescribeServiceCommandOutput,
} from "./commands/DescribeServiceCommand";
import {
  DescribeVpcConnectorCommand,
  DescribeVpcConnectorCommandInput,
  DescribeVpcConnectorCommandOutput,
} from "./commands/DescribeVpcConnectorCommand";
import {
  DescribeVpcIngressConnectionCommand,
  DescribeVpcIngressConnectionCommandInput,
  DescribeVpcIngressConnectionCommandOutput,
} from "./commands/DescribeVpcIngressConnectionCommand";
import {
  DisassociateCustomDomainCommand,
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "./commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "./commands/ListAutoScalingConfigurationsCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListObservabilityConfigurationsCommand,
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
} from "./commands/ListObservabilityConfigurationsCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVpcConnectorsCommand,
  ListVpcConnectorsCommandInput,
  ListVpcConnectorsCommandOutput,
} from "./commands/ListVpcConnectorsCommand";
import {
  ListVpcIngressConnectionsCommand,
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "./commands/ListVpcIngressConnectionsCommand";
import {
  PauseServiceCommand,
  PauseServiceCommandInput,
  PauseServiceCommandOutput,
} from "./commands/PauseServiceCommand";
import {
  ResumeServiceCommand,
  ResumeServiceCommandInput,
  ResumeServiceCommandOutput,
} from "./commands/ResumeServiceCommand";
import {
  StartDeploymentCommand,
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
} from "./commands/StartDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateVpcIngressConnectionCommand,
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
} from "./commands/UpdateVpcIngressConnectionCommand";

/**
 * <fullname>App Runner</fullname>
 *
 *
 *
 *          <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure Amazon Web Services resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner
 *         endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export class AppRunner extends AppRunnerClient {
  /**
   * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p>
   *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
   *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
   *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
   *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
   */
  public associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCustomDomainCommandOutput>;
  public associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;
  public associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;
  public associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateCustomDomainCommandOutput) => void),
    cb?: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): Promise<AssociateCustomDomainCommandOutput> | void {
    const command = new AssociateCustomDomainCommand(args);
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
   * <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require
   *       non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p>
   *          <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call
   *       returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource,
   *       the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific
   *       revision.</p>
   *          <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is
   *       a higher minimal cost.</p>
   *          <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
   */
  public createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoScalingConfigurationCommandOutput>;
  public createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;
  public createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;
  public createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): Promise<CreateAutoScalingConfigurationCommandOutput> | void {
    const command = new CreateAutoScalingConfigurationCommand(args);
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
   * <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
   *       certain third-party providers. You can share a connection across multiple services.</p>
   *          <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you
   *       can use the connection.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
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
   * <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable
   *       non-default observability features. You can share an observability configuration across multiple services.</p>
   *          <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The
   *       call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration
   *       resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a
   *       specific revision.</p>
   *          <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional
   *       parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature
   *       parameter, App Runner doesn't enable the feature.</p>
   */
  public createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateObservabilityConfigurationCommandOutput>;
  public createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    cb: (err: any, data?: CreateObservabilityConfigurationCommandOutput) => void
  ): void;
  public createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateObservabilityConfigurationCommandOutput) => void
  ): void;
  public createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateObservabilityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateObservabilityConfigurationCommandOutput) => void
  ): Promise<CreateObservabilityConfigurationCommandOutput> | void {
    const command = new CreateObservabilityConfigurationCommand(args);
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
   * <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
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
   * <p>Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud
   *         (Amazon VPC).</p>
   */
  public createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcConnectorCommandOutput>;
  public createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    cb: (err: any, data?: CreateVpcConnectorCommandOutput) => void
  ): void;
  public createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcConnectorCommandOutput) => void
  ): void;
  public createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcConnectorCommandOutput) => void
  ): Promise<CreateVpcConnectorCommandOutput> | void {
    const command = new CreateVpcConnectorCommand(args);
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
   * <p>Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.</p>
   */
  public createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcIngressConnectionCommandOutput>;
  public createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    cb: (err: any, data?: CreateVpcIngressConnectionCommandOutput) => void
  ): void;
  public createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcIngressConnectionCommandOutput) => void
  ): void;
  public createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcIngressConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcIngressConnectionCommandOutput) => void
  ): Promise<CreateVpcIngressConnectionCommandOutput> | void {
    const command = new CreateVpcIngressConnectionCommand(args);
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
   * <p>Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
   *       configuration that's used by one or more App Runner services.</p>
   */
  public deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoScalingConfigurationCommandOutput>;
  public deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;
  public deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;
  public deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): Promise<DeleteAutoScalingConfigurationCommandOutput> | void {
    const command = new DeleteAutoScalingConfigurationCommand(args);
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
   * <p>Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the
   *         <code>DeleteConnection</code> action fails.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
   *       configuration that's used by one or more App Runner services.</p>
   */
  public deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObservabilityConfigurationCommandOutput>;
  public deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    cb: (err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void
  ): void;
  public deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void
  ): void;
  public deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void
  ): Promise<DeleteObservabilityConfigurationCommandOutput> | void {
    const command = new DeleteObservabilityConfigurationCommand(args);
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
   * <p>Delete an App Runner service.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   *          <note>
   *             <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete.
   *       </p>
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
   * <p>Delete an App Runner VPC connector resource. You can't delete a
   *       connector that's used by one or more App Runner services.</p>
   */
  public deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcConnectorCommandOutput>;
  public deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    cb: (err: any, data?: DeleteVpcConnectorCommandOutput) => void
  ): void;
  public deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcConnectorCommandOutput) => void
  ): void;
  public deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcConnectorCommandOutput) => void
  ): Promise<DeleteVpcConnectorCommandOutput> | void {
    const command = new DeleteVpcConnectorCommand(args);
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
   * <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_CREATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_UPDATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_DELETION</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcIngressConnectionCommandOutput>;
  public deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void
  ): void;
  public deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void
  ): void;
  public deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void
  ): Promise<DeleteVpcIngressConnectionCommandOutput> | void {
    const command = new DeleteVpcIngressConnectionCommand(args);
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
   * <p>Return a full description of an App Runner automatic scaling configuration resource.</p>
   */
  public describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingConfigurationCommandOutput>;
  public describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;
  public describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;
  public describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): Promise<DescribeAutoScalingConfigurationCommandOutput> | void {
    const command = new DescribeAutoScalingConfigurationCommand(args);
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
   * <p>Return a description of custom domain names that are associated with an App Runner service.</p>
   */
  public describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomDomainsCommandOutput>;
  public describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;
  public describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;
  public describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomDomainsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): Promise<DescribeCustomDomainsCommandOutput> | void {
    const command = new DescribeCustomDomainsCommand(args);
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
   * <p>Return a full description of an App Runner observability configuration resource.</p>
   */
  public describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObservabilityConfigurationCommandOutput>;
  public describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    cb: (err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void
  ): void;
  public describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void
  ): void;
  public describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void
  ): Promise<DescribeObservabilityConfigurationCommandOutput> | void {
    const command = new DescribeObservabilityConfigurationCommand(args);
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
   * <p>Return a full description of an App Runner service.</p>
   */
  public describeService(
    args: DescribeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceCommandOutput>;
  public describeService(
    args: DescribeServiceCommandInput,
    cb: (err: any, data?: DescribeServiceCommandOutput) => void
  ): void;
  public describeService(
    args: DescribeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceCommandOutput) => void
  ): void;
  public describeService(
    args: DescribeServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceCommandOutput) => void
  ): Promise<DescribeServiceCommandOutput> | void {
    const command = new DescribeServiceCommand(args);
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
   * <p>Return a description of an App Runner VPC connector resource.</p>
   */
  public describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcConnectorCommandOutput>;
  public describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    cb: (err: any, data?: DescribeVpcConnectorCommandOutput) => void
  ): void;
  public describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcConnectorCommandOutput) => void
  ): void;
  public describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcConnectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcConnectorCommandOutput) => void
  ): Promise<DescribeVpcConnectorCommandOutput> | void {
    const command = new DescribeVpcConnectorCommand(args);
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
   * <p>Return a full description of an App Runner VPC Ingress Connection resource.</p>
   */
  public describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcIngressConnectionCommandOutput>;
  public describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    cb: (err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void
  ): void;
  public describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void
  ): void;
  public describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void
  ): Promise<DescribeVpcIngressConnectionCommandOutput> | void {
    const command = new DescribeVpcIngressConnectionCommand(args);
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
   * <p>Disassociate a custom domain name from an App Runner service.</p>
   *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
   *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
   *       30 days after a domain is disassociated from your service.</p>
   */
  public disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCustomDomainCommandOutput>;
  public disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;
  public disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;
  public disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateCustomDomainCommandOutput) => void),
    cb?: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): Promise<DisassociateCustomDomainCommandOutput> | void {
    const command = new DisassociateCustomDomainCommand(args);
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
   * <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific
   *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
   *       name.</p>
   *          <p>To retrieve a full description of a particular configuration revision, call  and provide one of
   *       the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
   */
  public listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoScalingConfigurationsCommandOutput>;
  public listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;
  public listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;
  public listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): Promise<ListAutoScalingConfigurationsCommandOutput> | void {
    const command = new ListAutoScalingConfigurationsCommand(args);
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
   * <p>Returns a list of App Runner connections that are associated with your Amazon Web Services account.</p>
   */
  public listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  public listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectionsCommandOutput) => void
  ): Promise<ListConnectionsCommandOutput> | void {
    const command = new ListConnectionsCommand(args);
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
   * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific
   *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
   *       name.</p>
   *          <p>To retrieve a full description of a particular configuration revision, call  and provide one
   *       of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
   */
  public listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObservabilityConfigurationsCommandOutput>;
  public listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    cb: (err: any, data?: ListObservabilityConfigurationsCommandOutput) => void
  ): void;
  public listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObservabilityConfigurationsCommandOutput) => void
  ): void;
  public listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObservabilityConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListObservabilityConfigurationsCommandOutput) => void
  ): Promise<ListObservabilityConfigurationsCommandOutput> | void {
    const command = new ListObservabilityConfigurationsCommand(args);
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
   * <p>Return a list of operations that occurred on an App Runner service.</p>
   *          <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the
   *       last started operation.</p>
   */
  public listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  public listOperations(
    args: ListOperationsCommandInput,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListOperationsCommandOutput) => void
  ): Promise<ListOperationsCommandOutput> | void {
    const command = new ListOperationsCommand(args);
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
   * <p>Returns a list of running App Runner services in your Amazon Web Services account.</p>
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
   * <p>List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.</p>
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
   * <p>Returns a list of App Runner VPC connectors in your Amazon Web Services account.</p>
   */
  public listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcConnectorsCommandOutput>;
  public listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    cb: (err: any, data?: ListVpcConnectorsCommandOutput) => void
  ): void;
  public listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcConnectorsCommandOutput) => void
  ): void;
  public listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListVpcConnectorsCommandOutput) => void
  ): Promise<ListVpcConnectorsCommandOutput> | void {
    const command = new ListVpcConnectorsCommand(args);
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
   * <p>Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.</p>
   */
  public listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcIngressConnectionsCommandOutput>;
  public listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    cb: (err: any, data?: ListVpcIngressConnectionsCommandOutput) => void
  ): void;
  public listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcIngressConnectionsCommandOutput) => void
  ): void;
  public listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcIngressConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListVpcIngressConnectionsCommandOutput) => void
  ): Promise<ListVpcIngressConnectionsCommandOutput> | void {
    const command = new ListVpcIngressConnectionsCommand(args);
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
   * <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
   *       removed).</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  public pauseService(
    args: PauseServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseServiceCommandOutput>;
  public pauseService(args: PauseServiceCommandInput, cb: (err: any, data?: PauseServiceCommandOutput) => void): void;
  public pauseService(
    args: PauseServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseServiceCommandOutput) => void
  ): void;
  public pauseService(
    args: PauseServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PauseServiceCommandOutput) => void),
    cb?: (err: any, data?: PauseServiceCommandOutput) => void
  ): Promise<PauseServiceCommandOutput> | void {
    const command = new PauseServiceCommand(args);
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
   * <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  public resumeService(
    args: ResumeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeServiceCommandOutput>;
  public resumeService(
    args: ResumeServiceCommandInput,
    cb: (err: any, data?: ResumeServiceCommandOutput) => void
  ): void;
  public resumeService(
    args: ResumeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeServiceCommandOutput) => void
  ): void;
  public resumeService(
    args: ResumeServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeServiceCommandOutput) => void),
    cb?: (err: any, data?: ResumeServiceCommandOutput) => void
  ): Promise<ResumeServiceCommandOutput> | void {
    const command = new ResumeServiceCommand(args);
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
   * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner
   *       service.</p>
   *          <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker
   *       image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  public startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  public startDeployment(
    args: StartDeploymentCommandInput,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StartDeploymentCommandOutput) => void
  ): Promise<StartDeploymentCommandOutput> | void {
    const command = new StartDeploymentCommand(args);
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
   * <p>Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.</p>
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
   * <p>Remove tags from an App Runner resource.</p>
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
   * <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto
   *       scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service.
   *       These can be set only when you create the service.</p>
   *          <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
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
   * <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           AVAILABLE
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           FAILED_CREATION
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           FAILED_UPDATE
   *         </p>
   *             </li>
   *          </ul>
   */
  public updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcIngressConnectionCommandOutput>;
  public updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    cb: (err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void
  ): void;
  public updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void
  ): void;
  public updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void
  ): Promise<UpdateVpcIngressConnectionCommandOutput> | void {
    const command = new UpdateVpcIngressConnectionCommand(args);
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
