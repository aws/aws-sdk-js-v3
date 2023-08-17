// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { ServiceDiscoveryClient, ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient";

const commands = {
  CreateHttpNamespaceCommand,
  CreatePrivateDnsNamespaceCommand,
  CreatePublicDnsNamespaceCommand,
  CreateServiceCommand,
  DeleteNamespaceCommand,
  DeleteServiceCommand,
  DeregisterInstanceCommand,
  DiscoverInstancesCommand,
  GetInstanceCommand,
  GetInstancesHealthStatusCommand,
  GetNamespaceCommand,
  GetOperationCommand,
  GetServiceCommand,
  ListInstancesCommand,
  ListNamespacesCommand,
  ListOperationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  RegisterInstanceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateHttpNamespaceCommand,
  UpdateInstanceCustomHealthStatusCommand,
  UpdatePrivateDnsNamespaceCommand,
  UpdatePublicDnsNamespaceCommand,
  UpdateServiceCommand,
};

export interface ServiceDiscovery {
  /**
   * @see {@link CreateHttpNamespaceCommand}
   */
  createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHttpNamespaceCommandOutput>;
  createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void
  ): void;
  createHttpNamespace(
    args: CreateHttpNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateDnsNamespaceCommand}
   */
  createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateDnsNamespaceCommandOutput>;
  createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublicDnsNamespaceCommand}
   */
  createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicDnsNamespaceCommandOutput>;
  createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void
  ): void;
  createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterInstanceCommand}
   */
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceCommandOutput>;
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DiscoverInstancesCommand}
   */
  discoverInstances(
    args: DiscoverInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverInstancesCommandOutput>;
  discoverInstances(
    args: DiscoverInstancesCommandInput,
    cb: (err: any, data?: DiscoverInstancesCommandOutput) => void
  ): void;
  discoverInstances(
    args: DiscoverInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceCommand}
   */
  getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
  getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
  getInstance(
    args: GetInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstancesHealthStatusCommand}
   */
  getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstancesHealthStatusCommandOutput>;
  getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void
  ): void;
  getInstancesHealthStatus(
    args: GetInstancesHealthStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamespaceCommand}
   */
  getNamespace(args: GetNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<GetNamespaceCommandOutput>;
  getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
  getNamespace(
    args: GetNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationCommand}
   */
  getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
  getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
  getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
  getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOperationsCommand}
   */
  listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
  listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterInstanceCommand}
   */
  registerInstance(
    args: RegisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceCommandOutput>;
  registerInstance(
    args: RegisterInstanceCommandInput,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  registerInstance(
    args: RegisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHttpNamespaceCommand}
   */
  updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHttpNamespaceCommandOutput>;
  updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    cb: (err: any, data?: UpdateHttpNamespaceCommandOutput) => void
  ): void;
  updateHttpNamespace(
    args: UpdateHttpNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHttpNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceCustomHealthStatusCommand}
   */
  updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCustomHealthStatusCommandOutput>;
  updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void
  ): void;
  updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrivateDnsNamespaceCommand}
   */
  updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrivateDnsNamespaceCommandOutput>;
  updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    cb: (err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void
  ): void;
  updatePrivateDnsNamespace(
    args: UpdatePrivateDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrivateDnsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublicDnsNamespaceCommand}
   */
  updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicDnsNamespaceCommandOutput>;
  updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    cb: (err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void
  ): void;
  updatePublicDnsNamespace(
    args: UpdatePublicDnsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicDnsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
  updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Cloud Map</fullname>
 *          <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your
 *    microservice applications run in. When an instance becomes available, you can call the Cloud Map
 *    API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map
 *    automatically creates DNS records and an optional health check. Clients that submit public or
 *    private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 *    eight healthy records. </p>
 */
export class ServiceDiscovery extends ServiceDiscoveryClient implements ServiceDiscovery {}
createAggregatedClient(commands, ServiceDiscovery);
