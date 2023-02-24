// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateHttpNamespaceCommand,
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
} from "./commands/CreateHttpNamespaceCommand";
import {
  CreatePrivateDnsNamespaceCommand,
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
} from "./commands/CreatePrivateDnsNamespaceCommand";
import {
  CreatePublicDnsNamespaceCommand,
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
} from "./commands/CreatePublicDnsNamespaceCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeregisterInstanceCommand,
  DeregisterInstanceCommandInput,
  DeregisterInstanceCommandOutput,
} from "./commands/DeregisterInstanceCommand";
import {
  DiscoverInstancesCommand,
  DiscoverInstancesCommandInput,
  DiscoverInstancesCommandOutput,
} from "./commands/DiscoverInstancesCommand";
import { GetInstanceCommand, GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import {
  GetInstancesHealthStatusCommand,
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "./commands/GetInstancesHealthStatusCommand";
import {
  GetNamespaceCommand,
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
} from "./commands/GetNamespaceCommand";
import {
  GetOperationCommand,
  GetOperationCommandInput,
  GetOperationCommandOutput,
} from "./commands/GetOperationCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
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
  RegisterInstanceCommand,
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
} from "./commands/RegisterInstanceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateHttpNamespaceCommand,
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
} from "./commands/UpdateHttpNamespaceCommand";
import {
  UpdateInstanceCustomHealthStatusCommand,
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
} from "./commands/UpdateInstanceCustomHealthStatusCommand";
import {
  UpdatePrivateDnsNamespaceCommand,
  UpdatePrivateDnsNamespaceCommandInput,
  UpdatePrivateDnsNamespaceCommandOutput,
} from "./commands/UpdatePrivateDnsNamespaceCommand";
import {
  UpdatePublicDnsNamespaceCommand,
  UpdatePublicDnsNamespaceCommandInput,
  UpdatePublicDnsNamespaceCommandOutput,
} from "./commands/UpdatePublicDnsNamespaceCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import { ServiceDiscoveryClient } from "./ServiceDiscoveryClient";

/**
 * <fullname>Cloud Map</fullname>
 *          <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your
 *    microservice applications run in. When an instance becomes available, you can call the Cloud Map
 *    API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map
 *    automatically creates DNS records and an optional health check. Clients that submit public or
 *    private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 *    eight healthy records. </p>
 */
export class ServiceDiscovery extends ServiceDiscoveryClient {
  /**
   * <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be
   *    discovered using a <code>DiscoverInstances</code> request but can't be discovered using
   *    DNS.</p>
   *          <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
   *     <i>Cloud Map Developer Guide</i>.</p>
   */
  public createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHttpNamespaceCommandOutput>;
  public createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void
  ): void;
  public createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void
  ): void;
  public createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHttpNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreateHttpNamespaceCommandOutput) => void
  ): Promise<CreateHttpNamespaceCommandOutput> | void {
    const command = new CreateHttpNamespaceCommand(args);
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
   * <p>Creates a private namespace based on DNS, which is visible only inside a specified Amazon
   *    VPC. The namespace defines your service naming scheme. For example, if you name your namespace
   *     <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for
   *    the service is <code>backend.example.com</code>. Service instances that are registered using a
   *    private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or
   *    using DNS. For the current quota on the number of namespaces that you can create using the same
   *     Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
   *     <i>Cloud Map Developer Guide</i>.</p>
   */
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateDnsNamespaceCommandOutput>;
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void
  ): Promise<CreatePrivateDnsNamespaceCommandOutput> | void {
    const command = new CreatePrivateDnsNamespaceCommand(args);
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
   * <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace
   *    defines your service naming scheme. For example, if you name your namespace
   *     <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for
   *    the service is <code>backend.example.com</code>. You can discover instances that were registered
   *    with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using
   *    DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
   *     <i>Cloud Map Developer Guide</i>.</p>
   *
   *          <important>
   *             <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p>
   *          </important>
   */
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicDnsNamespaceCommandOutput>;
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void
  ): void;
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void
  ): void;
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void
  ): Promise<CreatePublicDnsNamespaceCommandOutput> | void {
    const command = new CreatePublicDnsNamespaceCommand(args);
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
   * <p>Creates a service. This action defines the configuration for the following entities:</p>
   *          <ul>
   *             <li>
   *                <p>For public and private DNS namespaces, one of the following combinations of DNS records in
   *      Amazon Route 53:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>A</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AAAA</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>A</code> and <code>AAAA</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>SRV</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CNAME</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Optionally, a health check</p>
   *             </li>
   *          </ul>
   *          <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and
   *    Cloud Map uses the values in the configuration to create the specified entities.</p>
   *          <p>For the current quota on the number of instances that you can register using the same
   *    namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
   *     <i>Cloud Map Developer Guide</i>.</p>
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
   * <p>Deletes a namespace from the current account. If the namespace still contains one or more
   *    services, the request fails.</p>
   */
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): Promise<DeleteNamespaceCommandOutput> | void {
    const command = new DeleteNamespaceCommand(args);
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
   * <p>Deletes a specified service. If the service still contains one or more registered instances,
   *    the request fails.</p>
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
   * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the
   *    specified instance.</p>
   */
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceCommandOutput>;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): Promise<DeregisterInstanceCommandOutput> | void {
    const command = new DeregisterInstanceCommand(args);
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
   * <p>Discovers registered instances for a specified namespace and service. You can use
   *     <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and
   *    private DNS namespaces, you can also use DNS queries to discover instances.</p>
   */
  public discoverInstances(
    args: DiscoverInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverInstancesCommandOutput>;
  public discoverInstances(
    args: DiscoverInstancesCommandInput,
    cb: (err: any, data?: DiscoverInstancesCommandOutput) => void
  ): void;
  public discoverInstances(
    args: DiscoverInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverInstancesCommandOutput) => void
  ): void;
  public discoverInstances(
    args: DiscoverInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DiscoverInstancesCommandOutput) => void),
    cb?: (err: any, data?: DiscoverInstancesCommandOutput) => void
  ): Promise<DiscoverInstancesCommandOutput> | void {
    const command = new DiscoverInstancesCommand(args);
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
   * <p>Gets information about a specified instance.</p>
   */
  public getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
  public getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
  public getInstance(
    args: GetInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;
  public getInstance(
    args: GetInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceCommandOutput) => void
  ): Promise<GetInstanceCommandOutput> | void {
    const command = new GetInstanceCommand(args);
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
   * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or
   *     <code>Unknown</code>) of one or more instances that are associated with a specified
   *    service.</p>
   *          <note>
   *             <p>There's a brief delay between when you register an instance and when the health status for
   *     the instance is available. </p>
   *          </note>
   */
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstancesHealthStatusCommandOutput>;
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void
  ): void;
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void
  ): void;
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstancesHealthStatusCommandOutput) => void),
    cb?: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void
  ): Promise<GetInstancesHealthStatusCommandOutput> | void {
    const command = new GetInstancesHealthStatusCommand(args);
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
   * <p>Gets information about a namespace.</p>
   */
  public getNamespace(
    args: GetNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamespaceCommandOutput>;
  public getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
  public getNamespace(
    args: GetNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;
  public getNamespace(
    args: GetNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNamespaceCommandOutput) => void),
    cb?: (err: any, data?: GetNamespaceCommandOutput) => void
  ): Promise<GetNamespaceCommandOutput> | void {
    const command = new GetNamespaceCommand(args);
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
   * <p>Gets information about any operation that returns an operation ID in the response, such as a
   *     <code>CreateService</code> request.</p>
   *          <note>
   *             <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p>
   *          </note>
   */
  public getOperation(
    args: GetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationCommandOutput>;
  public getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
  public getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;
  public getOperation(
    args: GetOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOperationCommandOutput) => void),
    cb?: (err: any, data?: GetOperationCommandOutput) => void
  ): Promise<GetOperationCommandOutput> | void {
    const command = new GetOperationCommand(args);
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
   * <p>Gets the settings for a specified service.</p>
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
   * <p>Lists summary information about the instances that you registered by using a specified
   *    service.</p>
   */
  public listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  public listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListInstancesCommandOutput) => void
  ): Promise<ListInstancesCommandOutput> | void {
    const command = new ListInstancesCommand(args);
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
   * <p>Lists summary information about the namespaces that were created by the current Amazon Web Services account.</p>
   */
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNamespacesCommandOutput) => void),
    cb?: (err: any, data?: ListNamespacesCommandOutput) => void
  ): Promise<ListNamespacesCommandOutput> | void {
    const command = new ListNamespacesCommand(args);
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
   * <p>Lists operations that match the criteria that you specify.</p>
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
   * <p>Lists summary information for all the services that are associated with one or more
   *    specified namespaces.</p>
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
   * <p>Lists tags for the specified resource.</p>
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
   * <p>Creates or updates one or more records and, optionally, creates a health check based on the
   *    settings in a specified service. When you submit a <code>RegisterInstance</code> request, the
   *    following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>For each DNS record that you define in the service that's specified by
   *       <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated
   *      with the corresponding namespace.</p>
   *             </li>
   *             <li>
   *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on
   *      the settings in the health check configuration.</p>
   *             </li>
   *             <li>
   *                <p>The health check, if any, is associated with each of the new or updated records.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>One <code>RegisterInstance</code> request must complete before you can submit another
   *     request and specify the same service ID and instance ID.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
   *          <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable
   *    value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>If the health check is healthy</b>: returns all the
   *      records</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>If the health check is unhealthy</b>: returns the applicable
   *      value for the last healthy instance</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>If you didn't specify a health check configuration</b>:
   *      returns all the records</p>
   *             </li>
   *          </ul>
   *          <p>For the current quota on the number of instances that you can register using the same
   *    namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
   *     <i>Cloud Map Developer Guide</i>.</p>
   */
  public registerInstance(
    args: RegisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceCommandOutput>;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterInstanceCommandOutput) => void),
    cb?: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): Promise<RegisterInstanceCommandOutput> | void {
    const command = new RegisterInstanceCommand(args);
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
   * <p>Adds one or more tags to the specified resource.</p>
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
   * <p>Removes one or more tags from the specified resource.</p>
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
   * <p>Updates an HTTP
   *    namespace.</p>
   */
  public updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHttpNamespaceCommandOutput>;
  public updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    cb: (err: any, data?: UpdateHttpNamespaceCommandOutput) => void
  ): void;
  public updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHttpNamespaceCommandOutput) => void
  ): void;
  public updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHttpNamespaceCommandOutput) => void),
    cb?: (err: any, data?: UpdateHttpNamespaceCommandOutput) => void
  ): Promise<UpdateHttpNamespaceCommandOutput> | void {
    const command = new UpdateHttpNamespaceCommand(args);
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
   * <p>Submits a request to change the health status of a custom health check to healthy or
   *    unhealthy.</p>
   *          <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for
   *    custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create
   *    a service. You can't use it to change the status for Route 53 health checks, which you define using
   *     <code>HealthCheckConfig</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
   */
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCustomHealthStatusCommandOutput>;
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void
  ): void;
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void
  ): void;
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void
  ): Promise<UpdateInstanceCustomHealthStatusCommandOutput> | void {
    const command = new UpdateInstanceCustomHealthStatusCommand(args);
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
   * <p>Updates a private DNS
   *    namespace.</p>
   */
  public updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrivateDnsNamespaceCommandOutput>;
  public updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    cb: (err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  public updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  public updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void
  ): Promise<UpdatePrivateDnsNamespaceCommandOutput> | void {
    const command = new UpdatePrivateDnsNamespaceCommand(args);
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
   * <p>Updates a public DNS
   *    namespace.</p>
   */
  public updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicDnsNamespaceCommandOutput>;
  public updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    cb: (err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void
  ): void;
  public updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void
  ): void;
  public updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void
  ): Promise<UpdatePublicDnsNamespaceCommandOutput> | void {
    const command = new UpdatePublicDnsNamespaceCommand(args);
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
   * <p>Submits a request to perform the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
   *             </li>
   *             <li>
   *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
   *                <note>
   *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code>
   *       configuration.</p>
   *                </note>
   *             </li>
   *          </ul>
   *          <p>For public and private DNS namespaces, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code>
   *      configurations from an <code>UpdateService</code> request, the configurations are deleted from
   *      the service.</p>
   *             </li>
   *             <li>
   *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an
   *       <code>UpdateService</code> request, the configuration isn't deleted from the service.</p>
   *             </li>
   *          </ul>
   *          <p>When you update settings for a service, Cloud Map also updates the corresponding settings
   *    in all the records and health checks that were created by using the specified service.</p>
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
