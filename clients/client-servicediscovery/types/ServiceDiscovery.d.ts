import { ServiceDiscoveryClient } from "./ServiceDiscoveryClient";
import { CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput } from "./commands/CreateHttpNamespaceCommand";
import { CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput } from "./commands/CreatePrivateDnsNamespaceCommand";
import { CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput } from "./commands/CreatePublicDnsNamespaceCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand";
import { DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput } from "./commands/DiscoverInstancesCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import { GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput } from "./commands/GetInstancesHealthStatusCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand";
import { UpdateInstanceCustomHealthStatusCommandInput, UpdateInstanceCustomHealthStatusCommandOutput } from "./commands/UpdateInstanceCustomHealthStatusCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in.
 * 			When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map.
 * 			For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check.
 * 			Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 * 			eight healthy records. </p>
 */
export declare class ServiceDiscovery extends ServiceDiscoveryClient {
    /**
     * <p>Creates an HTTP namespace. Service instances that you register using an HTTP namespace can be discovered using a
     * 			<code>DiscoverInstances</code> request but can't be discovered using DNS. </p>
     * 		       <p>For the current limit on the number of namespaces that you can create using the same AWS account, see
     * 			<a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the
     * 			<i>AWS Cloud Map Developer Guide</i>.</p>
     */
    createHttpNamespace(args: CreateHttpNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<CreateHttpNamespaceCommandOutput>;
    createHttpNamespace(args: CreateHttpNamespaceCommandInput, cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void): void;
    createHttpNamespace(args: CreateHttpNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHttpNamespaceCommandOutput) => void): void;
    /**
     * <p>Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC. The namespace defines
     * 			your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>,
     * 			the resulting DNS name for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can
     * 			create using the same AWS account, see
     * 			<a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the
     * 			<i>AWS Cloud Map Developer Guide</i>.</p>
     */
    createPrivateDnsNamespace(args: CreatePrivateDnsNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<CreatePrivateDnsNamespaceCommandOutput>;
    createPrivateDnsNamespace(args: CreatePrivateDnsNamespaceCommandInput, cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void): void;
    createPrivateDnsNamespace(args: CreatePrivateDnsNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePrivateDnsNamespaceCommandOutput) => void): void;
    /**
     * <p>Creates a public namespace based on DNS, which will be visible on the internet. The namespace defines your service naming scheme.
     * 			For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name
     * 			for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can
     * 			create using the same AWS account, see
     * 			<a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the
     * 			<i>AWS Cloud Map Developer Guide</i>.</p>
     */
    createPublicDnsNamespace(args: CreatePublicDnsNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<CreatePublicDnsNamespaceCommandOutput>;
    createPublicDnsNamespace(args: CreatePublicDnsNamespaceCommandInput, cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void): void;
    createPublicDnsNamespace(args: CreatePublicDnsNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePublicDnsNamespaceCommandOutput) => void): void;
    /**
     * <p>Creates a service, which defines the configuration for the following entities:</p>
     * 		       <ul>
     *             <li>
     *                <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p>
     * 				           <ul>
     *                   <li>
     *                      <p>A</p>
     *                   </li>
     *                   <li>
     *                      <p>AAAA</p>
     *                   </li>
     *                   <li>
     *                      <p>A and AAAA</p>
     *                   </li>
     *                   <li>
     *                      <p>SRV</p>
     *                   </li>
     *                   <li>
     *                      <p>CNAME</p>
     *                   </li>
     *                </ul>
     * 			         </li>
     *             <li>
     *                <p>Optionally, a health check</p>
     *             </li>
     *          </ul>
     * 		       <p>After you create the service, you can submit a <a>RegisterInstance</a> request, and AWS Cloud Map uses the values in the configuration
     * 			to create the specified entities.</p>
     * 		       <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see
     * 			<a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the
     * 			<i>AWS Cloud Map Developer Guide</i>.</p>
     */
    createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
    createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
    createService(args: CreateServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
    /**
     * <p>Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.</p>
     */
    deleteNamespace(args: DeleteNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNamespaceCommandOutput>;
    deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    deleteNamespace(args: DeleteNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    /**
     * <p>Deletes a specified service. If the service still contains one or more registered instances, the request fails.</p>
     */
    deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
    deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
    deleteService(args: DeleteServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
    /**
     * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that AWS Cloud Map created for the specified instance.</p>
     */
    deregisterInstance(args: DeregisterInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterInstanceCommandOutput>;
    deregisterInstance(args: DeregisterInstanceCommandInput, cb: (err: any, data?: DeregisterInstanceCommandOutput) => void): void;
    deregisterInstance(args: DeregisterInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterInstanceCommandOutput) => void): void;
    /**
     * <p>Discovers registered instances for a specified namespace and service.</p>
     */
    discoverInstances(args: DiscoverInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DiscoverInstancesCommandOutput>;
    discoverInstances(args: DiscoverInstancesCommandInput, cb: (err: any, data?: DiscoverInstancesCommandOutput) => void): void;
    discoverInstances(args: DiscoverInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DiscoverInstancesCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified instance.</p>
     */
    getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
    getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    getInstance(args: GetInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    /**
     * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances
     * 			that are associated with a specified service.</p>
     * 		       <note>
     *             <p>There is a brief delay between when you register an instance and when the health status for the instance is available. </p>
     *          </note>
     */
    getInstancesHealthStatus(args: GetInstancesHealthStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancesHealthStatusCommandOutput>;
    getInstancesHealthStatus(args: GetInstancesHealthStatusCommandInput, cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void): void;
    getInstancesHealthStatus(args: GetInstancesHealthStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstancesHealthStatusCommandOutput) => void): void;
    /**
     * <p>Gets information about a namespace.</p>
     */
    getNamespace(args: GetNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<GetNamespaceCommandOutput>;
    getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
    getNamespace(args: GetNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
    /**
     * <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p>
     *
     * 			      <note>
     * 				        <p>To get a list of operations that match specified criteria, see <a>ListOperations</a>.</p>
     * 			      </note>
     */
    getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
    getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    getOperation(args: GetOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    /**
     * <p>Gets the settings for a specified service.</p>
     */
    getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
    getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
    getService(args: GetServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
    /**
     * <p>Lists summary information about the instances that you registered by using a specified service.</p>
     */
    listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
    listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    listInstances(args: ListInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    /**
     * <p>Lists summary information about the namespaces that were created by the current AWS account.</p>
     */
    listNamespaces(args: ListNamespacesCommandInput, options?: __HttpHandlerOptions): Promise<ListNamespacesCommandOutput>;
    listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
    listNamespaces(args: ListNamespacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
    /**
     * <p>Lists operations that match the criteria that you specify.</p>
     */
    listOperations(args: ListOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListOperationsCommandOutput>;
    listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
    listOperations(args: ListOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
    /**
     * <p>Lists summary information for all the services that are associated with one or more specified namespaces.</p>
     */
    listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
    listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    listServices(args: ListServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    /**
     * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service.
     * 			When you submit a <code>RegisterInstance</code> request, the following occurs:</p>
     * 		       <ul>
     *             <li>
     *                <p>For each DNS record that you define in the service that is specified by <code>ServiceId</code>,
     * 				a record is created or updated in the hosted zone that is associated with the corresponding namespace.</p>
     *             </li>
     *             <li>
     *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings
     * 				in the health check configuration.</p>
     *             </li>
     *             <li>
     *                <p>The health check, if any, is associated with each of the new or updated records.</p>
     *             </li>
     *          </ul>
     * 		       <important>
     *             <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the
     * 			same service ID and instance ID.</p>
     *          </important>
     * 		       <p>For more information, see <a>CreateService</a>.</p>
     * 		       <p>When AWS Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <b>If the health check is healthy</b>: returns all the records</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>If the health check is unhealthy</b>: returns the applicable value for the
     * 				last healthy instance</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>If you didn't specify a health check configuration</b>: returns all the
     * 				records</p>
     *             </li>
     *          </ul>
     * 		       <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see
     * 			<a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the
     * 			<i>AWS Cloud Map Developer Guide</i>.</p>
     */
    registerInstance(args: RegisterInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterInstanceCommandOutput>;
    registerInstance(args: RegisterInstanceCommandInput, cb: (err: any, data?: RegisterInstanceCommandOutput) => void): void;
    registerInstance(args: RegisterInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterInstanceCommandOutput) => void): void;
    /**
     * <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p>
     * 		       <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using
     * 			<code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define
     * 			using <code>HealthCheckConfig</code>.</p>
     * 		       <p>For more information, see <a>HealthCheckCustomConfig</a>.</p>
     */
    updateInstanceCustomHealthStatus(args: UpdateInstanceCustomHealthStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceCustomHealthStatusCommandOutput>;
    updateInstanceCustomHealthStatus(args: UpdateInstanceCustomHealthStatusCommandInput, cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void): void;
    updateInstanceCustomHealthStatus(args: UpdateInstanceCustomHealthStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceCustomHealthStatusCommandOutput) => void): void;
    /**
     * <p>Submits a request to perform the following operations:</p>
     * 		       <ul>
     *             <li>
     *                <p>Add or delete <code>DnsRecords</code> configurations</p>
     *             </li>
     *             <li>
     *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
     *             </li>
     *             <li>
     *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
     *             </li>
     *          </ul>
     *
     * 		       <p>For public and private DNS namespaces, you must specify all <code>DnsRecords</code> configurations (and, optionally,
     * 			<code>HealthCheckConfig</code>) that you want to appear in the updated service. Any current configurations that don't appear
     * 			in an <code>UpdateService</code> request are deleted.</p>
     * 		       <p>When you update the TTL setting for a service, AWS Cloud Map also updates the corresponding settings in all the records and
     * 			health checks that were created by using the specified service.</p>
     */
    updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
    updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
    updateService(args: UpdateServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
}
