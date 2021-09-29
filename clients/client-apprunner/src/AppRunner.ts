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
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
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
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
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
  DescribeServiceCommand,
  DescribeServiceCommandInput,
  DescribeServiceCommandOutput,
} from "./commands/DescribeServiceCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS App Runner</fullname>
 *
 *
 *
 *          <p>AWS App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the AWS cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure AWS resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">AWS App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">AWS App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">AWS App Runner
 *         endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 */
export class AppRunner extends AppRunnerClient {
  /**
   * <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p>
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
   * <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource
   *       when you create App Runner services that require non-default auto scaling settings. You can share an
   *       auto scaling configuration across multiple services.</p>
   *          <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different
   *         <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling
   *       configuration or a specific revision.</p>
   *          <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is
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
   * <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
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
   * <p>Create an AWS App Runner service. After the service is created, the action also automatically starts a deployment.</p>
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
   * <p>Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
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
   * <p>Delete an AWS App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the
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
   * <p>Delete an AWS App Runner service.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
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
   * <p>Return a full description of an AWS App Runner automatic scaling configuration resource.</p>
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
   * <p>Return a description of custom domain names that are associated with an AWS App Runner service.</p>
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
   * <p>Return a full description of an AWS App Runner service.</p>
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
   * <p>Disassociate a custom domain name from an AWS App Runner service.</p>
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
   * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
   *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
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
   * <p>Returns a list of AWS App Runner connections that are associated with your AWS account.</p>
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
   * <p>Return a list of operations that occurred on an AWS App Runner service.</p>
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
   * <p>Returns a list of running AWS App Runner services in your AWS account.</p>
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
   * <p>List tags that are associated with for an AWS App Runner resource. The response contains a list of tag key-value pairs.</p>
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
   * <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
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
   * <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p>
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
   * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner
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
   * <p>Update an AWS App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto
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
}
