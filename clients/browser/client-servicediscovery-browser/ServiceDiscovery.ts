import { ServiceDiscoveryClient } from "./ServiceDiscoveryClient";
import { CreateHttpNamespaceInput } from "./types/CreateHttpNamespaceInput";
import { CreateHttpNamespaceOutput } from "./types/CreateHttpNamespaceOutput";
import { CreatePrivateDnsNamespaceInput } from "./types/CreatePrivateDnsNamespaceInput";
import { CreatePrivateDnsNamespaceOutput } from "./types/CreatePrivateDnsNamespaceOutput";
import { CreatePublicDnsNamespaceInput } from "./types/CreatePublicDnsNamespaceInput";
import { CreatePublicDnsNamespaceOutput } from "./types/CreatePublicDnsNamespaceOutput";
import { CreateServiceInput } from "./types/CreateServiceInput";
import { CreateServiceOutput } from "./types/CreateServiceOutput";
import { CustomHealthNotFound } from "./types/CustomHealthNotFound";
import { DeleteNamespaceInput } from "./types/DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "./types/DeleteNamespaceOutput";
import { DeleteServiceInput } from "./types/DeleteServiceInput";
import { DeleteServiceOutput } from "./types/DeleteServiceOutput";
import { DeregisterInstanceInput } from "./types/DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "./types/DeregisterInstanceOutput";
import { DiscoverInstancesInput } from "./types/DiscoverInstancesInput";
import { DiscoverInstancesOutput } from "./types/DiscoverInstancesOutput";
import { DuplicateRequest } from "./types/DuplicateRequest";
import { GetInstanceInput } from "./types/GetInstanceInput";
import { GetInstanceOutput } from "./types/GetInstanceOutput";
import { GetInstancesHealthStatusInput } from "./types/GetInstancesHealthStatusInput";
import { GetInstancesHealthStatusOutput } from "./types/GetInstancesHealthStatusOutput";
import { GetNamespaceInput } from "./types/GetNamespaceInput";
import { GetNamespaceOutput } from "./types/GetNamespaceOutput";
import { GetOperationInput } from "./types/GetOperationInput";
import { GetOperationOutput } from "./types/GetOperationOutput";
import { GetServiceInput } from "./types/GetServiceInput";
import { GetServiceOutput } from "./types/GetServiceOutput";
import { InstanceNotFound } from "./types/InstanceNotFound";
import { InvalidInput } from "./types/InvalidInput";
import { ListInstancesInput } from "./types/ListInstancesInput";
import { ListInstancesOutput } from "./types/ListInstancesOutput";
import { ListNamespacesInput } from "./types/ListNamespacesInput";
import { ListNamespacesOutput } from "./types/ListNamespacesOutput";
import { ListOperationsInput } from "./types/ListOperationsInput";
import { ListOperationsOutput } from "./types/ListOperationsOutput";
import { ListServicesInput } from "./types/ListServicesInput";
import { ListServicesOutput } from "./types/ListServicesOutput";
import { NamespaceAlreadyExists } from "./types/NamespaceAlreadyExists";
import { NamespaceNotFound } from "./types/NamespaceNotFound";
import { OperationNotFound } from "./types/OperationNotFound";
import { RegisterInstanceInput } from "./types/RegisterInstanceInput";
import { RegisterInstanceOutput } from "./types/RegisterInstanceOutput";
import { ResourceInUse } from "./types/ResourceInUse";
import { ResourceLimitExceeded } from "./types/ResourceLimitExceeded";
import { ServiceAlreadyExists } from "./types/ServiceAlreadyExists";
import { ServiceNotFound } from "./types/ServiceNotFound";
import { UpdateInstanceCustomHealthStatusInput } from "./types/UpdateInstanceCustomHealthStatusInput";
import { UpdateInstanceCustomHealthStatusOutput } from "./types/UpdateInstanceCustomHealthStatusOutput";
import { UpdateServiceInput } from "./types/UpdateServiceInput";
import { UpdateServiceOutput } from "./types/UpdateServiceOutput";
import { CreateHttpNamespaceCommand } from "./commands/CreateHttpNamespaceCommand";
import { CreatePrivateDnsNamespaceCommand } from "./commands/CreatePrivateDnsNamespaceCommand";
import { CreatePublicDnsNamespaceCommand } from "./commands/CreatePublicDnsNamespaceCommand";
import { CreateServiceCommand } from "./commands/CreateServiceCommand";
import { DeleteNamespaceCommand } from "./commands/DeleteNamespaceCommand";
import { DeleteServiceCommand } from "./commands/DeleteServiceCommand";
import { DeregisterInstanceCommand } from "./commands/DeregisterInstanceCommand";
import { DiscoverInstancesCommand } from "./commands/DiscoverInstancesCommand";
import { GetInstanceCommand } from "./commands/GetInstanceCommand";
import { GetInstancesHealthStatusCommand } from "./commands/GetInstancesHealthStatusCommand";
import { GetNamespaceCommand } from "./commands/GetNamespaceCommand";
import { GetOperationCommand } from "./commands/GetOperationCommand";
import { GetServiceCommand } from "./commands/GetServiceCommand";
import { ListInstancesCommand } from "./commands/ListInstancesCommand";
import { ListNamespacesCommand } from "./commands/ListNamespacesCommand";
import { ListOperationsCommand } from "./commands/ListOperationsCommand";
import { ListServicesCommand } from "./commands/ListServicesCommand";
import { RegisterInstanceCommand } from "./commands/RegisterInstanceCommand";
import { UpdateInstanceCustomHealthStatusCommand } from "./commands/UpdateInstanceCustomHealthStatusCommand";
import { UpdateServiceCommand } from "./commands/UpdateServiceCommand";

export class ServiceDiscovery extends ServiceDiscoveryClient {
  /**
   * <p>Creates an HTTP namespace. Service instances that you register using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS. </p> <p>For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="http://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {NamespaceAlreadyExists} <p>The namespace that you're trying to create already exists.</p>
   *   - {ResourceLimitExceeded} <p>The resource can't be created because you've reached the limit on the number of resources.</p>
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHttpNamespace(
    args: CreateHttpNamespaceInput
  ): Promise<CreateHttpNamespaceOutput>;
  public createHttpNamespace(
    args: CreateHttpNamespaceInput,
    cb: (err: any, data?: CreateHttpNamespaceOutput) => void
  ): void;
  public createHttpNamespace(
    args: CreateHttpNamespaceInput,
    cb?: (err: any, data?: CreateHttpNamespaceOutput) => void
  ): Promise<CreateHttpNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHttpNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="http://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {NamespaceAlreadyExists} <p>The namespace that you're trying to create already exists.</p>
   *   - {ResourceLimitExceeded} <p>The resource can't be created because you've reached the limit on the number of resources.</p>
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceInput
  ): Promise<CreatePrivateDnsNamespaceOutput>;
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceInput,
    cb: (err: any, data?: CreatePrivateDnsNamespaceOutput) => void
  ): void;
  public createPrivateDnsNamespace(
    args: CreatePrivateDnsNamespaceInput,
    cb?: (err: any, data?: CreatePrivateDnsNamespaceOutput) => void
  ): Promise<CreatePrivateDnsNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePrivateDnsNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a public namespace based on DNS, which will be visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="http://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {NamespaceAlreadyExists} <p>The namespace that you're trying to create already exists.</p>
   *   - {ResourceLimitExceeded} <p>The resource can't be created because you've reached the limit on the number of resources.</p>
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceInput
  ): Promise<CreatePublicDnsNamespaceOutput>;
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceInput,
    cb: (err: any, data?: CreatePublicDnsNamespaceOutput) => void
  ): void;
  public createPublicDnsNamespace(
    args: CreatePublicDnsNamespaceInput,
    cb?: (err: any, data?: CreatePublicDnsNamespaceOutput) => void
  ): Promise<CreatePublicDnsNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePublicDnsNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a service, which defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p>A</p> </li> <li> <p>AAAA</p> </li> <li> <p>A and AAAA</p> </li> <li> <p>SRV</p> </li> <li> <p>CNAME</p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a>RegisterInstance</a> request, and AWS Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see <a href="http://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ResourceLimitExceeded} <p>The resource can't be created because you've reached the limit on the number of resources.</p>
   *   - {NamespaceNotFound} <p>No namespace exists with the specified ID.</p>
   *   - {ServiceAlreadyExists} <p>The service can't be created because a service with the same name already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createService(args: CreateServiceInput): Promise<CreateServiceOutput>;
  public createService(
    args: CreateServiceInput,
    cb: (err: any, data?: CreateServiceOutput) => void
  ): void;
  public createService(
    args: CreateServiceInput,
    cb?: (err: any, data?: CreateServiceOutput) => void
  ): Promise<CreateServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {NamespaceNotFound} <p>No namespace exists with the specified ID.</p>
   *   - {ResourceInUse} <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.</p>
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNamespace(
    args: DeleteNamespaceInput
  ): Promise<DeleteNamespaceOutput>;
  public deleteNamespace(
    args: DeleteNamespaceInput,
    cb: (err: any, data?: DeleteNamespaceOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceInput,
    cb?: (err: any, data?: DeleteNamespaceOutput) => void
  ): Promise<DeleteNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified service. If the service still contains one or more registered instances, the request fails.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {ResourceInUse} <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteService(args: DeleteServiceInput): Promise<DeleteServiceOutput>;
  public deleteService(
    args: DeleteServiceInput,
    cb: (err: any, data?: DeleteServiceOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceInput,
    cb?: (err: any, data?: DeleteServiceOutput) => void
  ): Promise<DeleteServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that AWS Cloud Map created for the specified instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {InstanceNotFound} <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
   *   - {ResourceInUse} <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterInstance(
    args: DeregisterInstanceInput
  ): Promise<DeregisterInstanceOutput>;
  public deregisterInstance(
    args: DeregisterInstanceInput,
    cb: (err: any, data?: DeregisterInstanceOutput) => void
  ): void;
  public deregisterInstance(
    args: DeregisterInstanceInput,
    cb?: (err: any, data?: DeregisterInstanceOutput) => void
  ): Promise<DeregisterInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Discovers registered instances for a specified namespace and service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {NamespaceNotFound} <p>No namespace exists with the specified ID.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public discoverInstances(
    args: DiscoverInstancesInput
  ): Promise<DiscoverInstancesOutput>;
  public discoverInstances(
    args: DiscoverInstancesInput,
    cb: (err: any, data?: DiscoverInstancesOutput) => void
  ): void;
  public discoverInstances(
    args: DiscoverInstancesInput,
    cb?: (err: any, data?: DiscoverInstancesOutput) => void
  ): Promise<DiscoverInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DiscoverInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNotFound} <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstance(args: GetInstanceInput): Promise<GetInstanceOutput>;
  public getInstance(
    args: GetInstanceInput,
    cb: (err: any, data?: GetInstanceOutput) => void
  ): void;
  public getInstance(
    args: GetInstanceInput,
    cb?: (err: any, data?: GetInstanceOutput) => void
  ): Promise<GetInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There is a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNotFound} <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusInput
  ): Promise<GetInstancesHealthStatusOutput>;
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusInput,
    cb: (err: any, data?: GetInstancesHealthStatusOutput) => void
  ): void;
  public getInstancesHealthStatus(
    args: GetInstancesHealthStatusInput,
    cb?: (err: any, data?: GetInstancesHealthStatusOutput) => void
  ): Promise<GetInstancesHealthStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstancesHealthStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a namespace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {NamespaceNotFound} <p>No namespace exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNamespace(args: GetNamespaceInput): Promise<GetNamespaceOutput>;
  public getNamespace(
    args: GetNamespaceInput,
    cb: (err: any, data?: GetNamespaceOutput) => void
  ): void;
  public getNamespace(
    args: GetNamespaceInput,
    cb?: (err: any, data?: GetNamespaceOutput) => void
  ): Promise<GetNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a>ListOperations</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {OperationNotFound} <p>No operation exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOperation(args: GetOperationInput): Promise<GetOperationOutput>;
  public getOperation(
    args: GetOperationInput,
    cb: (err: any, data?: GetOperationOutput) => void
  ): void;
  public getOperation(
    args: GetOperationInput,
    cb?: (err: any, data?: GetOperationOutput) => void
  ): Promise<GetOperationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOperationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the settings for a specified service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getService(args: GetServiceInput): Promise<GetServiceOutput>;
  public getService(
    args: GetServiceInput,
    cb: (err: any, data?: GetServiceOutput) => void
  ): void;
  public getService(
    args: GetServiceInput,
    cb?: (err: any, data?: GetServiceOutput) => void
  ): Promise<GetServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists summary information about the instances that you registered by using a specified service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstances(args: ListInstancesInput): Promise<ListInstancesOutput>;
  public listInstances(
    args: ListInstancesInput,
    cb: (err: any, data?: ListInstancesOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesInput,
    cb?: (err: any, data?: ListInstancesOutput) => void
  ): Promise<ListInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists summary information about the namespaces that were created by the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNamespaces(
    args: ListNamespacesInput
  ): Promise<ListNamespacesOutput>;
  public listNamespaces(
    args: ListNamespacesInput,
    cb: (err: any, data?: ListNamespacesOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesInput,
    cb?: (err: any, data?: ListNamespacesOutput) => void
  ): Promise<ListNamespacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNamespacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists operations that match the criteria that you specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOperations(
    args: ListOperationsInput
  ): Promise<ListOperationsOutput>;
  public listOperations(
    args: ListOperationsInput,
    cb: (err: any, data?: ListOperationsOutput) => void
  ): void;
  public listOperations(
    args: ListOperationsInput,
    cb?: (err: any, data?: ListOperationsOutput) => void
  ): Promise<ListOperationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOperationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists summary information for all the services that are associated with one or more specified namespaces.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServices(args: ListServicesInput): Promise<ListServicesOutput>;
  public listServices(
    args: ListServicesInput,
    cb: (err: any, data?: ListServicesOutput) => void
  ): void;
  public listServices(
    args: ListServicesInput,
    cb?: (err: any, data?: ListServicesOutput) => void
  ): Promise<ListServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that is specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that is associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a>CreateService</a>.</p> <p>When AWS Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see <a href="http://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ResourceInUse} <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.</p>
   *   - {ResourceLimitExceeded} <p>The resource can't be created because you've reached the limit on the number of resources.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerInstance(
    args: RegisterInstanceInput
  ): Promise<RegisterInstanceOutput>;
  public registerInstance(
    args: RegisterInstanceInput,
    cb: (err: any, data?: RegisterInstanceOutput) => void
  ): void;
  public registerInstance(
    args: RegisterInstanceInput,
    cb?: (err: any, data?: RegisterInstanceOutput) => void
  ): Promise<RegisterInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a>HealthCheckCustomConfig</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InstanceNotFound} <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {CustomHealthNotFound} <p>The health check for the instance that is specified by <code>ServiceId</code> and <code>InstanceId</code> is not a custom health check. </p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusInput
  ): Promise<UpdateInstanceCustomHealthStatusOutput>;
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusInput,
    cb: (err: any, data?: UpdateInstanceCustomHealthStatusOutput) => void
  ): void;
  public updateInstanceCustomHealthStatus(
    args: UpdateInstanceCustomHealthStatusInput,
    cb?: (err: any, data?: UpdateInstanceCustomHealthStatusOutput) => void
  ): Promise<UpdateInstanceCustomHealthStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateInstanceCustomHealthStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Add or delete <code>DnsRecords</code> configurations</p> </li> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> </li> </ul> <p>For public and private DNS namespaces, you must specify all <code>DnsRecords</code> configurations (and, optionally, <code>HealthCheckConfig</code>) that you want to appear in the updated service. Any current configurations that don't appear in an <code>UpdateService</code> request are deleted.</p> <p>When you update the TTL setting for a service, AWS Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateRequest} <p>The operation is already in progress.</p>
   *   - {InvalidInput} <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
   *   - {ServiceNotFound} <p>No service exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateService(args: UpdateServiceInput): Promise<UpdateServiceOutput>;
  public updateService(
    args: UpdateServiceInput,
    cb: (err: any, data?: UpdateServiceOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceInput,
    cb?: (err: any, data?: UpdateServiceOutput) => void
  ): Promise<UpdateServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
