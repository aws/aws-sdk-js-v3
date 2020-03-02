import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CreateHttpNamespaceRequest {
  __type?: "CreateHttpNamespaceRequest";
  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateHttpNamespace</code> requests to be retried
   * 			without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The name that you want to assign to this namespace.</p>
   */
  Name: string | undefined;
}

export namespace CreateHttpNamespaceRequest {
  export function isa(o: any): o is CreateHttpNamespaceRequest {
    return __isa(o, "CreateHttpNamespaceRequest");
  }
}

export interface CreateHttpNamespaceResponse {
  __type?: "CreateHttpNamespaceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreateHttpNamespaceResponse {
  export function isa(o: any): o is CreateHttpNamespaceResponse {
    return __isa(o, "CreateHttpNamespaceResponse");
  }
}

export interface CreatePrivateDnsNamespaceRequest {
  __type?: "CreatePrivateDnsNamespaceRequest";
  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreatePrivateDnsNamespace</code> requests to be retried
   * 			without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The name that you want to assign to this namespace. When you create a private DNS namespace, AWS Cloud Map automatically creates an
   * 			Amazon Route 53 private hosted zone that has the same name as the namespace.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Amazon VPC that you want to associate the namespace with.</p>
   */
  Vpc: string | undefined;
}

export namespace CreatePrivateDnsNamespaceRequest {
  export function isa(o: any): o is CreatePrivateDnsNamespaceRequest {
    return __isa(o, "CreatePrivateDnsNamespaceRequest");
  }
}

export interface CreatePrivateDnsNamespaceResponse {
  __type?: "CreatePrivateDnsNamespaceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreatePrivateDnsNamespaceResponse {
  export function isa(o: any): o is CreatePrivateDnsNamespaceResponse {
    return __isa(o, "CreatePrivateDnsNamespaceResponse");
  }
}

export interface CreatePublicDnsNamespaceRequest {
  __type?: "CreatePublicDnsNamespaceRequest";
  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreatePublicDnsNamespace</code> requests to be retried
   * 			without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The name that you want to assign to this namespace.</p>
   */
  Name: string | undefined;
}

export namespace CreatePublicDnsNamespaceRequest {
  export function isa(o: any): o is CreatePublicDnsNamespaceRequest {
    return __isa(o, "CreatePublicDnsNamespaceRequest");
  }
}

export interface CreatePublicDnsNamespaceResponse {
  __type?: "CreatePublicDnsNamespaceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreatePublicDnsNamespaceResponse {
  export function isa(o: any): o is CreatePublicDnsNamespaceResponse {
    return __isa(o, "CreatePublicDnsNamespaceResponse");
  }
}

export interface CreateServiceRequest {
  __type?: "CreateServiceRequest";
  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateService</code> requests to be retried
   * 			without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 records that you want AWS Cloud Map to create when you register an instance. </p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional Route 53 health check.
   * 			If you specify settings for a health check, AWS Cloud Map associates the health check with all the Route 53 DNS records that you specify
   * 			in <code>DnsConfig</code>.</p>
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   * 		       <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/cloud-map/pricing/">AWS Cloud Map Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p>
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The name that you want to assign to the service.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the namespace that you want to use to create the service.</p>
   */
  NamespaceId?: string;
}

export namespace CreateServiceRequest {
  export function isa(o: any): o is CreateServiceRequest {
    return __isa(o, "CreateServiceRequest");
  }
}

export interface CreateServiceResponse {
  __type?: "CreateServiceResponse";
  /**
   * <p>A complex type that contains information about the new service.</p>
   */
  Service?: Service;
}

export namespace CreateServiceResponse {
  export function isa(o: any): o is CreateServiceResponse {
    return __isa(o, "CreateServiceResponse");
  }
}

/**
 * <p>The health check for the instance that is specified by <code>ServiceId</code> and <code>InstanceId</code> is not a custom health check. </p>
 */
export interface CustomHealthNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomHealthNotFound";
  $fault: "client";
  Message?: string;
}

export namespace CustomHealthNotFound {
  export function isa(o: any): o is CustomHealthNotFound {
    return __isa(o, "CustomHealthNotFound");
  }
}

export enum CustomHealthStatus {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY"
}

export interface DeleteNamespaceRequest {
  __type?: "DeleteNamespaceRequest";
  /**
   * <p>The ID of the namespace that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteNamespaceRequest {
  export function isa(o: any): o is DeleteNamespaceRequest {
    return __isa(o, "DeleteNamespaceRequest");
  }
}

export interface DeleteNamespaceResponse {
  __type?: "DeleteNamespaceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace DeleteNamespaceResponse {
  export function isa(o: any): o is DeleteNamespaceResponse {
    return __isa(o, "DeleteNamespaceResponse");
  }
}

export interface DeleteServiceRequest {
  __type?: "DeleteServiceRequest";
  /**
   * <p>The ID of the service that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteServiceRequest {
  export function isa(o: any): o is DeleteServiceRequest {
    return __isa(o, "DeleteServiceRequest");
  }
}

export interface DeleteServiceResponse {
  __type?: "DeleteServiceResponse";
}

export namespace DeleteServiceResponse {
  export function isa(o: any): o is DeleteServiceResponse {
    return __isa(o, "DeleteServiceResponse");
  }
}

export interface DeregisterInstanceRequest {
  __type?: "DeregisterInstanceRequest";
  /**
   * <p>The value that you specified for <code>Id</code> in the <a>RegisterInstance</a> request.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;
}

export namespace DeregisterInstanceRequest {
  export function isa(o: any): o is DeregisterInstanceRequest {
    return __isa(o, "DeregisterInstanceRequest");
  }
}

export interface DeregisterInstanceResponse {
  __type?: "DeregisterInstanceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. For more information, see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace DeregisterInstanceResponse {
  export function isa(o: any): o is DeregisterInstanceResponse {
    return __isa(o, "DeregisterInstanceResponse");
  }
}

export interface DiscoverInstancesRequest {
  __type?: "DiscoverInstancesRequest";
  /**
   * <p>The health status of the instances that you want to discover.</p>
   */
  HealthStatus?: HealthStatusFilter | string;

  /**
   * <p>The maximum number of instances that you want Cloud Map to return in the response to a <code>DiscoverInstances</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the namespace that you specified when you registered the instance.</p>
   */
  NamespaceName: string | undefined;

  /**
   * <p>A string map that contains attributes with values that you can use to filter instances by any custom attribute that you
   * 			specified when you registered the instance. Only instances that match all the specified key/value pairs will be returned.</p>
   */
  QueryParameters?: { [key: string]: string };

  /**
   * <p>The name of the service that you specified when you registered the instance.</p>
   */
  ServiceName: string | undefined;
}

export namespace DiscoverInstancesRequest {
  export function isa(o: any): o is DiscoverInstancesRequest {
    return __isa(o, "DiscoverInstancesRequest");
  }
}

export interface DiscoverInstancesResponse {
  __type?: "DiscoverInstancesResponse";
  /**
   * <p>A complex type that contains one <code>HttpInstanceSummary</code> for each registered instance.</p>
   */
  Instances?: Array<HttpInstanceSummary>;
}

export namespace DiscoverInstancesResponse {
  export function isa(o: any): o is DiscoverInstancesResponse {
    return __isa(o, "DiscoverInstancesResponse");
  }
}

/**
 * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
 */
export interface DnsConfig {
  __type?: "DnsConfig";
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 DNS record that you want AWS Cloud Map to create
   * 			when you register an instance.</p>
   */
  DnsRecords: Array<DnsRecord> | undefined;

  /**
   * <p>The ID of the namespace to use for DNS configuration.</p>
   */
  NamespaceId?: string;

  /**
   * <p>The routing policy that you want to apply to all Route 53 DNS records that AWS Cloud Map creates when you register an instance and
   * 			specify this service.</p>
   *
   * 			      <note>
   * 				        <p>If you want to use this service to register instances that create alias records, specify <code>WEIGHTED</code>
   * 					for the routing policy.</p>
   * 			      </note>
   *
   * 		       <p>You can specify the following values:</p>
   *
   * 		       <p>
   *             <b>MULTIVALUE</b>
   *          </p>
   * 		       <p>If you define a health check for the service and the health check is healthy, Route 53 returns the applicable value for up to eight instances.</p>
   * 		       <p>For example, suppose the service includes configurations for one A record and a health check, and you use the service to register 10 instances.
   * 			Route 53 responds to DNS queries with IP addresses for up to eight healthy instances. If fewer than eight instances are healthy, Route 53 responds to
   * 			every DNS query with the IP addresses for all of the healthy instances.</p>
   * 		       <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the values for up to eight instances.</p>
   * 		       <p>For more information about the multivalue routing policy, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue">Multivalue Answer Routing</a> in the
   * 			<i>Route 53 Developer Guide</i>.</p>
   *
   * 		       <p>
   *             <b>WEIGHTED</b>
   *          </p>
   * 		       <p>Route 53 returns the applicable value from one randomly selected instance from among the instances that you registered using the same service.
   * 			Currently, all records have the same weight, so you can't route more or less traffic to any instances.</p>
   * 		       <p>For example, suppose the service includes configurations for one A record and a health check, and you use the service to register 10 instances.
   * 			Route 53 responds to DNS queries with the IP address for one randomly selected instance from among the healthy instances. If no instances are healthy,
   * 			Route 53 responds to DNS queries as if all of the instances were healthy.</p>
   * 		       <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the applicable value for one
   * 			randomly selected instance.</p>
   * 		       <p>For more information about the weighted routing policy, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted">Weighted Routing</a> in the
   * 			<i>Route 53 Developer Guide</i>.</p>
   */
  RoutingPolicy?: RoutingPolicy | string;
}

export namespace DnsConfig {
  export function isa(o: any): o is DnsConfig {
    return __isa(o, "DnsConfig");
  }
}

/**
 * <p>A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you
 * 			register an instance.</p>
 */
export interface DnsConfigChange {
  __type?: "DnsConfigChange";
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 record that you want AWS Cloud Map to create
   * 			when you register an instance.</p>
   */
  DnsRecords: Array<DnsRecord> | undefined;
}

export namespace DnsConfigChange {
  export function isa(o: any): o is DnsConfigChange {
    return __isa(o, "DnsConfigChange");
  }
}

/**
 * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
 */
export interface DnsProperties {
  __type?: "DnsProperties";
  /**
   * <p>The ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
   */
  HostedZoneId?: string;
}

export namespace DnsProperties {
  export function isa(o: any): o is DnsProperties {
    return __isa(o, "DnsProperties");
  }
}

/**
 * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
 */
export interface DnsRecord {
  __type?: "DnsRecord";
  /**
   * <p>The amount of time, in seconds, that you want DNS resolvers to cache the settings for this record.</p>
   * 		       <note>
   *             <p>Alias records don't include a TTL because Route 53 uses the TTL for the AWS resource that an alias record
   * 			routes traffic to. If you include the <code>AWS_ALIAS_DNS_NAME</code> attribute when you submit a <a>RegisterInstance</a> request,
   * 			the <code>TTL</code> value is ignored. Always specify a TTL for the service; you can use a service to register instances that create either
   * 			alias or non-alias records.</p>
   *          </note>
   */
  TTL: number | undefined;

  /**
   * <p>The type of the resource, which indicates the type of value that Route 53 returns in response to DNS queries.</p>
   * 		       <p>Note the following:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <b>A, AAAA, and SRV records:</b> You can specify settings for a maximum of one A, one AAAA,
   * 					and one SRV record. You can specify them in any combination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CNAME records:</b> If you specify <code>CNAME</code> for <code>Type</code>,
   * 					you can't define any other records. This is a limitation of DNS: you can't create a CNAME record and any other type of record
   * 					that has the same name as a CNAME record.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Alias records:</b> If you want AWS Cloud Map to create a Route 53 alias record
   * 					when you register an instance, specify <code>A</code> or <code>AAAA</code> for <code>Type</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>All records:</b> You specify settings other than <code>TTL</code> and <code>Type</code>
   * 					when you register an instance.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>The following values are supported:</p>
   *
   * 		       <p>
   *             <b>A</b>
   *          </p>
   * 		       <p>Route 53 returns the IP address of the resource in IPv4 format, such as 192.0.2.44.</p>
   *
   * 		       <p>
   *             <b>AAAA</b>
   *          </p>
   * 		       <p>Route 53 returns the IP address of the resource in IPv6 format, such as 2001:0db8:85a3:0000:0000:abcd:0001:2345.</p>
   *
   * 		       <p>
   *             <b>CNAME</b>
   *          </p>
   * 		       <p>Route 53 returns the domain name of the resource, such as www.example.com. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>You specify the domain name that you want to route traffic to when you register an instance. For more information,
   * 				see <a>RegisterInstanceRequest$Attributes</a>.</p>
   *             </li>
   *             <li>
   *                <p>You must specify <code>WEIGHTED</code> for the value of <code>RoutingPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>You can't specify both <code>CNAME</code> for <code>Type</code> and settings for <code>HealthCheckConfig</code>.
   * 				If you do, the request will fail with an <code>InvalidInput</code> error.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>SRV</b>
   *          </p>
   * 		       <p>Route 53 returns the value for an SRV record. The value for an SRV record uses the following values:</p>
   * 		       <p>
   *             <code>priority weight port service-hostname</code>
   *          </p>
   * 		       <p>Note the following about the values:</p>
   * 			      <ul>
   *             <li>
   *                <p>The values of <code>priority</code> and <code>weight</code> are both set to <code>1</code> and can't be changed. </p>
   *             </li>
   *             <li>
   *                <p>The value of <code>port</code> comes from the value that you specify for the <code>AWS_INSTANCE_PORT</code> attribute
   * 					when you submit a <a>RegisterInstance</a> request. </p>
   *             </li>
   *             <li>
   *                <p>The value of <code>service-hostname</code> is a concatenation of the following values:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>The value that you specify for <code>InstanceId</code> when you register an instance.</p>
   *                   </li>
   *                   <li>
   *                      <p>The name of the service.</p>
   *                   </li>
   *                   <li>
   *                      <p>The name of the namespace. </p>
   *                   </li>
   *                </ul>
   * 					          <p>For example, if the value of <code>InstanceId</code> is <code>test</code>, the name of the service is <code>backend</code>, and the
   * 						name of the namespace is <code>example.com</code>, the value of <code>service-hostname</code> is:</p>
   * 					          <p>
   *                   <code>test.backend.example.com</code>
   *                </p>
   * 				        </li>
   *          </ul>
   * 		       <p>If you specify settings for an SRV record and if you specify values for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both
   * 			in the <code>RegisterInstance</code> request, AWS Cloud Map automatically creates <code>A</code> and/or <code>AAAA</code> records that have the same name
   * 			as the value of <code>service-hostname</code> in the SRV record. You can ignore these records.</p>
   */
  Type: RecordType | string | undefined;
}

export namespace DnsRecord {
  export function isa(o: any): o is DnsRecord {
    return __isa(o, "DnsRecord");
  }
}

/**
 * <p>The operation is already in progress.</p>
 */
export interface DuplicateRequest extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequest";
  $fault: "client";
  /**
   * <p>The ID of the operation that is already in progress.</p>
   */
  DuplicateOperationId?: string;

  Message?: string;
}

export namespace DuplicateRequest {
  export function isa(o: any): o is DuplicateRequest {
    return __isa(o, "DuplicateRequest");
  }
}

export enum FilterCondition {
  BETWEEN = "BETWEEN",
  EQ = "EQ",
  IN = "IN"
}

export interface GetInstanceRequest {
  __type?: "GetInstanceRequest";
  /**
   * <p>The ID of the instance that you want to get information about.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;
}

export namespace GetInstanceRequest {
  export function isa(o: any): o is GetInstanceRequest {
    return __isa(o, "GetInstanceRequest");
  }
}

export interface GetInstanceResponse {
  __type?: "GetInstanceResponse";
  /**
   * <p>A complex type that contains information about a specified instance.</p>
   */
  Instance?: Instance;
}

export namespace GetInstanceResponse {
  export function isa(o: any): o is GetInstanceResponse {
    return __isa(o, "GetInstanceResponse");
  }
}

export interface GetInstancesHealthStatusRequest {
  __type?: "GetInstancesHealthStatusRequest";
  /**
   * <p>An array that contains the IDs of all the instances that you want to get the health status for.</p>
   * 		       <p>If you omit <code>Instances</code>, AWS Cloud Map returns the health status for all the instances that are associated with the
   * 			specified service.</p>
   * 		       <note>
   *             <p>To get the IDs for the instances that you've registered by using a specified service, submit a
   * 			<a>ListInstances</a> request.</p>
   *          </note>
   */
  Instances?: Array<string>;

  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a <code>GetInstancesHealthStatus</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>GetInstancesHealthStatus</code> request, omit this value.</p>
   * 		       <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request
   * 			to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;
}

export namespace GetInstancesHealthStatusRequest {
  export function isa(o: any): o is GetInstancesHealthStatusRequest {
    return __isa(o, "GetInstancesHealthStatusRequest");
  }
}

export interface GetInstancesHealthStatusResponse {
  __type?: "GetInstancesHealthStatusResponse";
  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>GetInstancesHealthStatus</code> request
   * 			to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A complex type that contains the IDs and the health status of the instances that you specified in the
   * 			<code>GetInstancesHealthStatus</code> request.</p>
   */
  Status?: { [key: string]: HealthStatus | string };
}

export namespace GetInstancesHealthStatusResponse {
  export function isa(o: any): o is GetInstancesHealthStatusResponse {
    return __isa(o, "GetInstancesHealthStatusResponse");
  }
}

export interface GetNamespaceRequest {
  __type?: "GetNamespaceRequest";
  /**
   * <p>The ID of the namespace that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetNamespaceRequest {
  export function isa(o: any): o is GetNamespaceRequest {
    return __isa(o, "GetNamespaceRequest");
  }
}

export interface GetNamespaceResponse {
  __type?: "GetNamespaceResponse";
  /**
   * <p>A complex type that contains information about the specified namespace.</p>
   */
  Namespace?: Namespace;
}

export namespace GetNamespaceResponse {
  export function isa(o: any): o is GetNamespaceResponse {
    return __isa(o, "GetNamespaceResponse");
  }
}

export interface GetOperationRequest {
  __type?: "GetOperationRequest";
  /**
   * <p>The ID of the operation that you want to get more information about.</p>
   */
  OperationId: string | undefined;
}

export namespace GetOperationRequest {
  export function isa(o: any): o is GetOperationRequest {
    return __isa(o, "GetOperationRequest");
  }
}

export interface GetOperationResponse {
  __type?: "GetOperationResponse";
  /**
   * <p>A complex type that contains information about the operation.</p>
   */
  Operation?: Operation;
}

export namespace GetOperationResponse {
  export function isa(o: any): o is GetOperationResponse {
    return __isa(o, "GetOperationResponse");
  }
}

export interface GetServiceRequest {
  __type?: "GetServiceRequest";
  /**
   * <p>The ID of the service that you want to get settings for.</p>
   */
  Id: string | undefined;
}

export namespace GetServiceRequest {
  export function isa(o: any): o is GetServiceRequest {
    return __isa(o, "GetServiceRequest");
  }
}

export interface GetServiceResponse {
  __type?: "GetServiceResponse";
  /**
   * <p>A complex type that contains information about the service.</p>
   */
  Service?: Service;
}

export namespace GetServiceResponse {
  export function isa(o: any): o is GetServiceResponse {
    return __isa(o, "GetServiceResponse");
  }
}

/**
 * <p>
 *             <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you
 * 			specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in
 * 			<code>DnsConfig</code>.</p>
 * 		       <important>
 *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
 * 			<code>HealthCheckConfig</code> but not both.</p>
 *          </important>
 *
 * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
 * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *
 * 		       <p>Note the following about configuring health checks.</p>
 *
 * 		       <p>
 *             <b>A and AAAA records</b>
 *          </p>
 * 		       <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check
 * 			that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy,
 * 			Route 53 considers both the A and AAAA records to be unhealthy. </p>
 *
 * 		       <p>
 *             <b>CNAME records</b>
 *          </p>
 * 		       <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for
 * 			the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p>
 *
 * 		       <p>
 *             <b>Request interval</b>
 *          </p>
 * 		       <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average,
 * 			your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another,
 * 			so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p>
 *
 * 		       <p>
 *             <b>Health checking regions</b>
 *          </p>
 * 		       <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
 *
 * 		       <p>
 *             <b>Alias records</b>
 *          </p>
 * 		       <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record.
 * 			Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records.
 * 				When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
 * 				such as an ELB load balancer. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
 * 			         </li>
 *             <li>
 *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates
 * 				an alias record, Route 53 doesn't create the health check.</p>
 *             </li>
 *          </ul>
 *
 * 		       <p>
 *             <b>Charges for health checks</b>
 *          </p>
 * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
 * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 */
export interface HealthCheckConfig {
  __type?: "HealthCheckConfig";
  /**
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint
   * 			from unhealthy to healthy or vice versa. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines
   * 				Whether an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.</p>
   */
  FailureThreshold?: number;

  /**
   * <p>The path that you want Route 53 to request when performing health checks. The path can be any value for which your endpoint
   * 			will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, such as the file <code>/docs/route53-health-check.html</code>.
   * 			Route 53 automatically adds the DNS name for the service. If you don't specify a value for <code>ResourcePath</code>,
   * 			the default value is <code>/</code>.</p>
   * 			      <p>If you specify <code>TCP</code> for <code>Type</code>, you must <i>not</i> specify a value for
   * 				<code>ResourcePath</code>.</p>
   */
  ResourcePath?: string;

  /**
   * <p>The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy.</p>
   *
   * 		       <important>
   *             <p>You can't change the value of <code>Type</code> after you create a health check.</p>
   *          </important>
   *
   * 		       <p>You can create the following types of health checks:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an
   * 				HTTP request and waits for an HTTP status code of 200 or greater and less than 400.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an
   * 				HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.</p>
   * 				           <important>
   * 					             <p>If you specify HTTPS for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p>
   * 				           </important>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <b>TCP</b>: Route 53 tries to establish a TCP connection.</p>
   * 				           <p>If you specify <code>TCP</code> for <code>Type</code>, don't specify a value for <code>ResourcePath</code>.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines
   * 				Whether an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.</p>
   */
  Type: HealthCheckType | string | undefined;
}

export namespace HealthCheckConfig {
  export function isa(o: any): o is HealthCheckConfig {
    return __isa(o, "HealthCheckConfig");
  }
}

/**
 * <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you
 * 			use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p>
 * 			      <ul>
 *             <li>
 *                <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available
 * 					over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources
 * 					in a VPC, the health checker must also be in the VPC.)</p>
 *             </li>
 *             <li>
 *                <p>You want to use a third-party health checker regardless of where your resources are.</p>
 *             </li>
 *          </ul>
 *
 * 		       <important>
 *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
 * 			<code>HealthCheckConfig</code> but not both.</p>
 *          </important>
 *
 * 		       <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map
 * 			doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent
 * 			<code>UpdateInstanceCustomHealthStatus</code> request.</p>
 *
 * 		       <p>Here's how custom health checks work:</p>
 * 		       <ol>
 *             <li>
 *                <p>You create a service and specify a value for <code>FailureThreshold</code>. </p>
 * 				           <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application
 * 					sends an <a>UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the
 * 					corresponding resource.</p>
 * 			         </li>
 *             <li>
 *                <p>You register an instance.</p>
 *             </li>
 *             <li>
 *                <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p>
 * 				           <note>
 *                   <p>AWS Cloud Map doesn't check the health of the resource directly. </p>
 *                </note>
 * 			         </li>
 *             <li>
 *                <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p>
 *             </li>
 *             <li>
 *                <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p>
 *             </li>
 *             <li>
 *                <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p>
 *             </li>
 *             <li>
 *                <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy,
 * 				AWS Cloud Map stops routing traffic to the resource.</p>
 *             </li>
 *          </ol>
 *
 * 		       <p>Note the following about configuring custom health checks.</p>
 */
export interface HealthCheckCustomConfig {
  __type?: "HealthCheckCustomConfig";
  /**
   * <p>The number of 30-second intervals that you want Cloud Map to wait after receiving an <code>UpdateInstanceCustomHealthStatus</code> request
   * 			before it changes the health status of a service instance. For example, suppose you specify a value of <code>2</code> for <code>FailureTheshold</code>,
   * 			and then your application sends an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map waits for approximately 60 seconds (2 x 30)
   * 			before changing the status of the service instance based on that request.</p>
   * 		       <p>Sending a second or subsequent <code>UpdateInstanceCustomHealthStatus</code> request with the same value before
   * 			<code>FailureThreshold x 30</code> seconds has passed doesn't accelerate the change. Cloud Map still waits
   * 			<code>FailureThreshold x 30</code> seconds after the first request to make the change.</p>
   */
  FailureThreshold?: number;
}

export namespace HealthCheckCustomConfig {
  export function isa(o: any): o is HealthCheckCustomConfig {
    return __isa(o, "HealthCheckCustomConfig");
  }
}

export enum HealthCheckType {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP"
}

export enum HealthStatus {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN"
}

export enum HealthStatusFilter {
  ALL = "ALL",
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY"
}

/**
 * <p>In a response to a <a>DiscoverInstance</a> request, <code>HttpInstanceSummary</code> contains information
 * 			about one instance that matches the values that you specified in the request.</p>
 */
export interface HttpInstanceSummary {
  __type?: "HttpInstanceSummary";
  /**
   * <p>If you included any attributes when you registered the instance, the values of those attributes.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>If you configured health checking in the service, the current health status of the service instance.</p>
   */
  HealthStatus?: HealthStatus | string;

  /**
   * <p>The ID of an instance that matches the values that you specified in the request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the namespace that you specified when you registered the instance.</p>
   */
  NamespaceName?: string;

  /**
   * <p>The name of the service that you specified when you registered the instance.</p>
   */
  ServiceName?: string;
}

export namespace HttpInstanceSummary {
  export function isa(o: any): o is HttpInstanceSummary {
    return __isa(o, "HttpInstanceSummary");
  }
}

/**
 * <p>A complex type that contains the name of an HTTP namespace.</p>
 */
export interface HttpProperties {
  __type?: "HttpProperties";
  /**
   * <p>The name of an HTTP namespace.</p>
   */
  HttpName?: string;
}

export namespace HttpProperties {
  export function isa(o: any): o is HttpProperties {
    return __isa(o, "HttpProperties");
  }
}

/**
 * <p>A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request.</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>A string map that contains the following information for the service that you specify in <code>ServiceId</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>The attributes that apply to the records that are defined in the service. </p>
   *             </li>
   *             <li>
   *                <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>Supported attribute keys include the following:</p>
   *
   * 		       <p>
   *             <b>AWS_ALIAS_DNS_NAME</b>
   *          </p>
   * 		       <p>
   *             <b></b>
   *          </p>
   * 		       <p>If you want AWS Cloud Map to create a Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name
   * 			that is associated with the load balancer. For information about how to get the DNS name, see "DNSName" in the topic
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html">AliasTarget</a>.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>The configuration for the service that is specified by <code>ServiceId</code> must include settings for an A record,
   * 				an AAAA record, or both.</p>
   *             </li>
   *             <li>
   *                <p>In the service that is specified by <code>ServiceId</code>, the value of <code>RoutingPolicy</code> must be
   * 				<code>WEIGHTED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code> settings,
   * 				AWS Cloud Map will create the health check, but it won't associate the health check with the alias record.</p>
   *             </li>
   *             <li>
   *                <p>Auto naming currently doesn't support creating alias records that route traffic to AWS resources other than
   * 				ELB load balancers.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the
   * 				<code>AWS_INSTANCE</code> attributes.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_CNAME</b>
   *          </p>
   * 		       <p>If the service configuration includes a CNAME record, the domain name that you want Route 53 to return in response to
   * 			DNS queries, for example, <code>example.com</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an CNAME record.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_IPV4</b>
   *          </p>
   * 		       <p>If the service configuration includes an A record, the IPv4 address that you want Route 53 to return in response to DNS queries,
   * 			for example, <code>192.0.2.44</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an A record.
   * 			If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>,
   * 			or both.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_IPV6</b>
   *          </p>
   * 		       <p>If the service configuration includes an AAAA record, the IPv6 address that you want Route 53 to return in response to DNS queries,
   * 			for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an AAAA record.
   * 			If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>,
   * 			or both.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_PORT</b>
   *          </p>
   * 		       <p>If the service includes an SRV record, the value that you want Route 53 to return for the port.</p>
   * 		       <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to send requests to. </p>
   * 		       <p>This value is required if you specified settings for an SRV record when you created the service.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be retried
   * 			without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string every time you submit a
   * 			<code>RegisterInstance</code> request if you're registering additional instances for the same namespace and service.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>An identifier that you want to associate with the instance. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes settings for an SRV record, the value of <code>InstanceId</code>
   * 				is automatically included as part of the value for the SRV record. For more information, see <a>DnsRecord$Type</a>.</p>
   *             </li>
   *             <li>
   *                <p>You can use this value to update an existing instance.</p>
   *             </li>
   *             <li>
   *                <p>To register a new instance, you must specify a value that is unique among instances that you register
   * 				by using the same service. </p>
   *             </li>
   *             <li>
   *                <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, AWS Cloud Map updates the existing DNS records.
   * 				If there's also an existing health check, AWS Cloud Map deletes the old health check and creates a new one. </p>
   * 				           <note>
   *                   <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a <code>ListHealthChecks</code>
   * 				request, for example.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  Id: string | undefined;
}

export namespace Instance {
  export function isa(o: any): o is Instance {
    return __isa(o, "Instance");
  }
}

/**
 * <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
 */
export interface InstanceNotFound extends __SmithyException, $MetadataBearer {
  name: "InstanceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace InstanceNotFound {
  export function isa(o: any): o is InstanceNotFound {
    return __isa(o, "InstanceNotFound");
  }
}

/**
 * <p>A complex type that contains information about the instances that you registered by using a specified service.</p>
 */
export interface InstanceSummary {
  __type?: "InstanceSummary";
  /**
   * <p>A string map that contains the following information:</p>
   * 		       <ul>
   *             <li>
   *                <p>The attributes that are associate with the instance. </p>
   *             </li>
   *             <li>
   *                <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>Supported attribute keys include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ALIAS_DNS_NAME</code>: For an alias record that routes traffic to an Elastic Load Balancing load balancer,
   * 				the DNS name that is associated with the load balancer. </p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>AWS_INSTANCE_CNAME</code>: For a CNAME record, the domain name that Route 53 returns in response to DNS queries,
   * 				for example, <code>example.com</code>.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>AWS_INSTANCE_IPV4</code>: For an A record, the IPv4 address that Route 53 returns in response to DNS queries,
   * 				for example, <code>192.0.2.44</code>.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>AWS_INSTANCE_IPV6</code>: For an AAAA record, the IPv6 address that Route 53 returns in response to DNS queries,
   * 				for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>AWS_INSTANCE_PORT</code>: For an SRV record, the value that Route 53 returns for the port.
   * 				In addition, if the service includes <code>HealthCheckConfig</code>, the port on the endpoint that Route 53 sends requests to.</p>
   * 			         </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The ID for an instance that you created by using a specified service.</p>
   */
  Id?: string;
}

export namespace InstanceSummary {
  export function isa(o: any): o is InstanceSummary {
    return __isa(o, "InstanceSummary");
  }
}

/**
 * <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range,
 * 			or a string value might exceed length constraints.</p>
 */
export interface InvalidInput extends __SmithyException, $MetadataBearer {
  name: "InvalidInput";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInput {
  export function isa(o: any): o is InvalidInput {
    return __isa(o, "InvalidInput");
  }
}

export interface ListInstancesRequest {
  __type?: "ListInstancesRequest";
  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a <code>ListInstances</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListInstances</code> request, omit this value.</p>
   * 		       <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>ListInstances</code> request
   * 			to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the service that you want to list instances for.</p>
   */
  ServiceId: string | undefined;
}

export namespace ListInstancesRequest {
  export function isa(o: any): o is ListInstancesRequest {
    return __isa(o, "ListInstancesRequest");
  }
}

export interface ListInstancesResponse {
  __type?: "ListInstancesResponse";
  /**
   * <p>Summary information about the instances that are associated with the specified service.</p>
   */
  Instances?: Array<InstanceSummary>;

  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>ListInstances</code> request
   * 			to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListInstancesResponse {
  export function isa(o: any): o is ListInstancesResponse {
    return __isa(o, "ListInstancesResponse");
  }
}

export interface ListNamespacesRequest {
  __type?: "ListNamespacesRequest";
  /**
   * <p>A complex type that contains specifications for the namespaces that you want to list.</p>
   * 		       <p>If you specify more than one filter, a namespace must match all filters to be returned by <code>ListNamespaces</code>.</p>
   */
  Filters?: Array<NamespaceFilter>;

  /**
   * <p>The maximum number of namespaces that you want AWS Cloud Map to return in the response to a <code>ListNamespaces</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 namespaces.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListNamespaces</code> request, omit this value.</p>
   * 		       <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's possible that
   * 			no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListNamespacesRequest {
  export function isa(o: any): o is ListNamespacesRequest {
    return __isa(o, "ListNamespacesRequest");
  }
}

export interface ListNamespacesResponse {
  __type?: "ListNamespacesResponse";
  /**
   * <p>An array that contains one <code>NamespaceSummary</code> object for each namespace that matches the specified filter criteria.</p>
   */
  Namespaces?: Array<NamespaceSummary>;

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's possible that
   * 			no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListNamespacesResponse {
  export function isa(o: any): o is ListNamespacesResponse {
    return __isa(o, "ListNamespacesResponse");
  }
}

export interface ListOperationsRequest {
  __type?: "ListOperationsRequest";
  /**
   * <p>A complex type that contains specifications for the operations that you want to list, for example, operations that you started
   * 			between a specified start date and end date.</p>
   * 		       <p>If you specify more than one filter, an operation must match all filters to be returned by <code>ListOperations</code>.</p>
   */
  Filters?: Array<OperationFilter>;

  /**
   * <p>The maximum number of items that you want AWS Cloud Map to return in the response to a <code>ListOperations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 operations.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListOperations</code> request, omit this value.</p>
   * 		       <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's possible that
   * 			no operations in the first <code>MaxResults</code> operations matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> operations do contain operations that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListOperationsRequest {
  export function isa(o: any): o is ListOperationsRequest {
    return __isa(o, "ListOperationsRequest");
  }
}

export interface ListOperationsResponse {
  __type?: "ListOperationsResponse";
  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's possible that
   * 			no operations in the first <code>MaxResults</code> operations matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> operations do contain operations that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>Summary information about the operations that match the specified criteria.</p>
   */
  Operations?: Array<OperationSummary>;
}

export namespace ListOperationsResponse {
  export function isa(o: any): o is ListOperationsResponse {
    return __isa(o, "ListOperationsResponse");
  }
}

export interface ListServicesRequest {
  __type?: "ListServicesRequest";
  /**
   * <p>A complex type that contains specifications for the namespaces that you want to list services for. </p>
   * 		       <p>If you specify more than one filter, an operation must match all filters to be returned by <code>ListServices</code>.</p>
   */
  Filters?: Array<ServiceFilter>;

  /**
   * <p>The maximum number of services that you want AWS Cloud Map to return in the response to a <code>ListServices</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 services.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListServices</code> request, omit this value.</p>
   * 		       <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's possible that
   * 			no services in the first <code>MaxResults</code> services matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> services do contain services that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListServicesRequest {
  export function isa(o: any): o is ListServicesRequest {
    return __isa(o, "ListServicesRequest");
  }
}

export interface ListServicesResponse {
  __type?: "ListServicesResponse";
  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the next group of results.
   * 			Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   * 		       <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's possible that
   * 			no services in the first <code>MaxResults</code> services matched the specified criteria but that subsequent groups of
   * 			<code>MaxResults</code> services do contain services that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>An array that contains one <code>ServiceSummary</code> object for each service that matches the specified filter criteria.</p>
   */
  Services?: Array<ServiceSummary>;
}

export namespace ListServicesResponse {
  export function isa(o: any): o is ListServicesResponse {
    return __isa(o, "ListServicesResponse");
  }
}

/**
 * <p>A complex type that contains information about a specified namespace.</p>
 */
export interface Namespace {
  __type?: "Namespace";
  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code>
   * 			is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing an operation twice. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The description that you specify for the namespace when you create it.</p>
   */
  Description?: string;

  /**
   * <p>The ID of a namespace.</p>
   */
  Id?: string;

  /**
   * <p>The name of the namespace, such as <code>example.com</code>.</p>
   */
  Name?: string;

  /**
   * <p>A complex type that contains information that's specific to the type of the namespace.</p>
   */
  Properties?: NamespaceProperties;

  /**
   * <p>The number of services that are associated with the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>The type of the namespace. Valid values are <code>DNS_PUBLIC</code> and <code>DNS_PRIVATE</code>.</p>
   */
  Type?: NamespaceType | string;
}

export namespace Namespace {
  export function isa(o: any): o is Namespace {
    return __isa(o, "Namespace");
  }
}

/**
 * <p>The namespace that you're trying to create already exists.</p>
 */
export interface NamespaceAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "NamespaceAlreadyExists";
  $fault: "client";
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the namespace.</p>
   */
  CreatorRequestId?: string;

  Message?: string;
  /**
   * <p>The ID of the existing namespace.</p>
   */
  NamespaceId?: string;
}

export namespace NamespaceAlreadyExists {
  export function isa(o: any): o is NamespaceAlreadyExists {
    return __isa(o, "NamespaceAlreadyExists");
  }
}

/**
 * <p>A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.</p>
 */
export interface NamespaceFilter {
  __type?: "NamespaceFilter";
  /**
   * <p>The operator that you want to use to determine whether <code>ListNamespaces</code> returns a namespace. Valid values
   * 			for <code>condition</code> include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can choose to list only
   * 				public namespaces or private namespaces, but not both. <code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code> for the condition, you can choose to list public namespaces,
   * 				private namespaces, or both. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Not applicable</p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;

  /**
   * <p>Specify <code>TYPE</code>.</p>
   */
  Name: NamespaceFilterName | string | undefined;

  /**
   * <p>If you specify <code>EQ</code> for <code>Condition</code>, specify either <code>DNS_PUBLIC</code> or <code>DNS_PRIVATE</code>.</p>
   * 		       <p>If you specify <code>IN</code> for <code>Condition</code>, you can specify <code>DNS_PUBLIC</code>, <code>DNS_PRIVATE</code>,
   * 			or both.</p>
   */
  Values: Array<string> | undefined;
}

export namespace NamespaceFilter {
  export function isa(o: any): o is NamespaceFilter {
    return __isa(o, "NamespaceFilter");
  }
}

export enum NamespaceFilterName {
  TYPE = "TYPE"
}

/**
 * <p>No namespace exists with the specified ID.</p>
 */
export interface NamespaceNotFound extends __SmithyException, $MetadataBearer {
  name: "NamespaceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace NamespaceNotFound {
  export function isa(o: any): o is NamespaceNotFound {
    return __isa(o, "NamespaceNotFound");
  }
}

/**
 * <p>A complex type that contains information that is specific to the namespace type.</p>
 */
export interface NamespaceProperties {
  __type?: "NamespaceProperties";
  /**
   * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
   */
  DnsProperties?: DnsProperties;

  /**
   * <p>A complex type that contains the name of an HTTP namespace.</p>
   */
  HttpProperties?: HttpProperties;
}

export namespace NamespaceProperties {
  export function isa(o: any): o is NamespaceProperties {
    return __isa(o, "NamespaceProperties");
  }
}

/**
 * <p>A complex type that contains information about a namespace.</p>
 */
export interface NamespaceSummary {
  __type?: "NamespaceSummary";
  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the namespace was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the namespace.</p>
   */
  Id?: string;

  /**
   * <p>The name of the namespace. When you create a namespace, AWS Cloud Map automatically creates a Route 53 hosted zone
   * 			that has the same name as the namespace.</p>
   */
  Name?: string;

  /**
   * <p>A complex type that contains information that is specific to the namespace type.</p>
   */
  Properties?: NamespaceProperties;

  /**
   * <p>The number of services that were created using the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>The type of the namespace, either public or private.</p>
   */
  Type?: NamespaceType | string;
}

export namespace NamespaceSummary {
  export function isa(o: any): o is NamespaceSummary {
    return __isa(o, "NamespaceSummary");
  }
}

export enum NamespaceType {
  DNS_PRIVATE = "DNS_PRIVATE",
  DNS_PUBLIC = "DNS_PUBLIC",
  HTTP = "HTTP"
}

/**
 * <p>A complex type that contains information about a specified operation.</p>
 */
export interface Operation {
  __type?: "Operation";
  /**
   * <p>The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code>
   * 			is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The code associated with <code>ErrorMessage</code>. Values for <code>ErrorCode</code> include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANNOT_CREATE_HOSTED_ZONE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED_TOKEN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOSTED_ZONE_NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_FAILURE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_CHANGE_BATCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLED_REQUEST</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ErrorCode?: string;

  /**
   * <p>If the value of <code>Status</code> is <code>FAIL</code>, the reason that the operation failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The ID of the operation that you want to get information about.</p>
   */
  Id?: string;

  /**
   * <p>The status of the operation. Values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>SUBMITTED</b>: This is the initial state immediately after you submit a request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b>: AWS Cloud Map is performing the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCESS</b>: The operation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAIL</b>: The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: OperationStatus | string;

  /**
   * <p>The name of the target entity that is associated with the operation:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>NAMESPACE</b>: The namespace ID is returned in the <code>ResourceId</code> property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SERVICE</b>: The service ID is returned in the <code>ResourceId</code> property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INSTANCE</b>: The instance ID is returned in the <code>ResourceId</code> property.</p>
   *             </li>
   *          </ul>
   */
  Targets?: { [key: string]: string };

  /**
   * <p>The name of the operation that is associated with the specified ID.</p>
   */
  Type?: OperationType | string;

  /**
   * <p>The date and time that the value of <code>Status</code> changed to the current value, in Unix date/time format and
   * 			Coordinated Universal Time (UTC). The value of <code>UpdateDate</code> is accurate to milliseconds. For example, the value
   * 			<code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  UpdateDate?: Date;
}

export namespace Operation {
  export function isa(o: any): o is Operation {
    return __isa(o, "Operation");
  }
}

/**
 * <p>A complex type that lets you select the operations that you want to list.</p>
 */
export interface OperationFilter {
  __type?: "OperationFilter";
  /**
   * <p>The operator that you want to use to determine whether an operation matches the specified value. Valid values for condition include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can specify only one value.
   * 				<code>EQ</code> is supported for <code>NAMESPACE_ID</code>, <code>SERVICE_ID</code>, <code>STATUS</code>, and <code>TYPE</code>.
   * 				<code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code> for the condition, you can specify a list of one or more values.
   * 				<code>IN</code> is supported for <code>STATUS</code> and <code>TYPE</code>. An operation must match one of the specified values
   * 				to be returned in the response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC).
   * 				The start date must be the first value. <code>BETWEEN</code> is supported for <code>UPDATE_DATE</code>. </p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;

  /**
   * <p>Specify the operations that you want to get:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>NAMESPACE_ID</b>: Gets operations related to specified namespaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SERVICE_ID</b>: Gets operations related to specified services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>STATUS</b>: Gets operations based on the status of the operations:
   * 				<code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TYPE</b>: Gets specified types of operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_DATE</b>: Gets operations that changed status during a specified
   * 				date/time range. </p>
   *             </li>
   *          </ul>
   */
  Name: OperationFilterName | string | undefined;

  /**
   * <p>Specify values that are applicable to the value that you specify for <code>Name</code>: </p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>NAMESPACE_ID</b>: Specify one namespace ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SERVICE_ID</b>: Specify one service ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>STATUS</b>: Specify one or more statuses:
   * 				<code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TYPE</b>: Specify one or more of the following types:
   * 				<code>CREATE_NAMESPACE</code>, <code>DELETE_NAMESPACE</code>, <code>UPDATE_SERVICE</code>, <code>REGISTER_INSTANCE</code>, or
   * 				<code>DEREGISTER_INSTANCE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_DATE</b>: Specify a start date and an end date in Unix date/time format and
   * 				Coordinated Universal Time (UTC). The start date must be the first value.</p>
   *             </li>
   *          </ul>
   */
  Values: Array<string> | undefined;
}

export namespace OperationFilter {
  export function isa(o: any): o is OperationFilter {
    return __isa(o, "OperationFilter");
  }
}

export enum OperationFilterName {
  NAMESPACE_ID = "NAMESPACE_ID",
  SERVICE_ID = "SERVICE_ID",
  STATUS = "STATUS",
  TYPE = "TYPE",
  UPDATE_DATE = "UPDATE_DATE"
}

/**
 * <p>No operation exists with the specified ID.</p>
 */
export interface OperationNotFound extends __SmithyException, $MetadataBearer {
  name: "OperationNotFound";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotFound {
  export function isa(o: any): o is OperationNotFound {
    return __isa(o, "OperationNotFound");
  }
}

export enum OperationStatus {
  FAIL = "FAIL",
  PENDING = "PENDING",
  SUBMITTED = "SUBMITTED",
  SUCCESS = "SUCCESS"
}

/**
 * <p>A complex type that contains information about an operation that matches the criteria that you specified in a
 * 			<a>ListOperations</a> request.</p>
 */
export interface OperationSummary {
  __type?: "OperationSummary";
  /**
   * <p>The ID for an operation.</p>
   */
  Id?: string;

  /**
   * <p>The status of the operation. Values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>SUBMITTED</b>: This is the initial state immediately after you submit a request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b>: AWS Cloud Map is performing the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUCCESS</b>: The operation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAIL</b>: The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: OperationStatus | string;
}

export namespace OperationSummary {
  export function isa(o: any): o is OperationSummary {
    return __isa(o, "OperationSummary");
  }
}

export enum OperationTargetType {
  INSTANCE = "INSTANCE",
  NAMESPACE = "NAMESPACE",
  SERVICE = "SERVICE"
}

export enum OperationType {
  CREATE_NAMESPACE = "CREATE_NAMESPACE",
  DELETE_NAMESPACE = "DELETE_NAMESPACE",
  DEREGISTER_INSTANCE = "DEREGISTER_INSTANCE",
  REGISTER_INSTANCE = "REGISTER_INSTANCE",
  UPDATE_SERVICE = "UPDATE_SERVICE"
}

export enum RecordType {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  SRV = "SRV"
}

export interface RegisterInstanceRequest {
  __type?: "RegisterInstanceRequest";
  /**
   * <p>A string map that contains the following information for the service that you specify in <code>ServiceId</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>The attributes that apply to the records that are defined in the service. </p>
   *             </li>
   *             <li>
   *                <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>Supported attribute keys include the following:</p>
   *
   * 		       <p>
   *             <b>AWS_ALIAS_DNS_NAME</b>
   *          </p>
   * 		       <p>
   *             <b></b>
   *          </p>
   * 		       <p>If you want AWS Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name
   * 			that is associated with the load balancer. For information about how to get the DNS name, see "DNSName" in the topic
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html">AliasTarget</a> in the
   * 			<i>Route 53 API Reference</i>.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>The configuration for the service that is specified by <code>ServiceId</code> must include settings for an A record,
   * 				an AAAA record, or both.</p>
   *             </li>
   *             <li>
   *                <p>In the service that is specified by <code>ServiceId</code>, the value of <code>RoutingPolicy</code> must be
   * 				<code>WEIGHTED</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code> settings,
   * 				AWS Cloud Map will create the Route 53 health check, but it won't associate the health check with the alias record.</p>
   *             </li>
   *             <li>
   *                <p>Auto naming currently doesn't support creating alias records that route traffic to AWS resources other than
   * 				ELB load balancers.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the
   * 				<code>AWS_INSTANCE</code> attributes.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>AWS_INIT_HEALTH_STATUS</b>
   *          </p>
   * 		       <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use <code>AWS_INIT_HEALTH_STATUS</code>
   * 			to specify the initial status of the custom health check, <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value
   * 			for <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_CNAME</b>
   *          </p>
   * 		       <p>If the service configuration includes a CNAME record, the domain name that you want Route 53 to return in response to
   * 			DNS queries, for example, <code>example.com</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an CNAME record.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_IPV4</b>
   *          </p>
   * 		       <p>If the service configuration includes an A record, the IPv4 address that you want Route 53 to return in response to DNS queries,
   * 			for example, <code>192.0.2.44</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an A record.
   * 			If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>,
   * 			or both.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_IPV6</b>
   *          </p>
   * 		       <p>If the service configuration includes an AAAA record, the IPv6 address that you want Route 53 to return in response to DNS queries,
   * 			for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   * 		       <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an AAAA record.
   * 			If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>,
   * 			or both.</p>
   *
   * 		       <p>
   *             <b>AWS_INSTANCE_PORT</b>
   *          </p>
   * 		       <p>If the service includes an SRV record, the value that you want Route 53 to return for the port.</p>
   * 		       <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to send requests to. </p>
   * 		       <p>This value is required if you specified settings for an SRV record when you created the service.</p>
   *
   * 		       <p>
   *             <b>Custom attributes</b>
   *          </p>
   * 		       <p>You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name is 255 characters, and the
   * 			maximum length of the attribute value is 1,024 characters. </p>
   */
  Attributes: { [key: string]: string } | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be retried
   * 			without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string every time you submit a
   * 			<code>RegisterInstance</code> request if you're registering additional instances for the same namespace and service.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>An identifier that you want to associate with the instance. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes settings for an SRV record, the value of <code>InstanceId</code>
   * 				is automatically included as part of the value for the SRV record. For more information, see <a>DnsRecord$Type</a>.</p>
   *             </li>
   *             <li>
   *                <p>You can use this value to update an existing instance.</p>
   *             </li>
   *             <li>
   *                <p>To register a new instance, you must specify a value that is unique among instances that you register
   * 				by using the same service. </p>
   *             </li>
   *             <li>
   *                <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, AWS Cloud Map updates the existing DNS records,
   * 				if any. If there's also an existing health check, AWS Cloud Map deletes the old health check and creates a new one. </p>
   * 				           <note>
   *                   <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a <code>ListHealthChecks</code>
   * 					request, for example.</p>
   *                </note>
   * 			         </li>
   *          </ul>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the service that you want to use for settings for the instance.</p>
   */
  ServiceId: string | undefined;
}

export namespace RegisterInstanceRequest {
  export function isa(o: any): o is RegisterInstanceRequest {
    return __isa(o, "RegisterInstanceRequest");
  }
}

export interface RegisterInstanceResponse {
  __type?: "RegisterInstanceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace RegisterInstanceResponse {
  export function isa(o: any): o is RegisterInstanceResponse {
    return __isa(o, "RegisterInstanceResponse");
  }
}

/**
 * <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that
 * 			contains any instances.</p>
 */
export interface ResourceInUse extends __SmithyException, $MetadataBearer {
  name: "ResourceInUse";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUse {
  export function isa(o: any): o is ResourceInUse {
    return __isa(o, "ResourceInUse");
  }
}

/**
 * <p>The resource can't be created because you've reached the limit on the number of resources.</p>
 */
export interface ResourceLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceeded {
  export function isa(o: any): o is ResourceLimitExceeded {
    return __isa(o, "ResourceLimitExceeded");
  }
}

export enum RoutingPolicy {
  MULTIVALUE = "MULTIVALUE",
  WEIGHTED = "WEIGHTED"
}

/**
 * <p>A complex type that contains information about the specified service.</p>
 */
export interface Service {
  __type?: "Service";
  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code>
   * 			is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of
   * 			executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The description of the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you
   * 			specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in
   * 			<code>DnsConfig</code>.</p>
   * 		       <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p>
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously associated with the service
   * 			but that have been deleted are not included in the count.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the namespace that was used to create the service.</p>
   */
  NamespaceId?: string;
}

export namespace Service {
  export function isa(o: any): o is Service {
    return __isa(o, "Service");
  }
}

/**
 * <p>The service can't be created because a service with the same name already exists.</p>
 */
export interface ServiceAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceAlreadyExists";
  $fault: "client";
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the service.</p>
   */
  CreatorRequestId?: string;

  Message?: string;
  /**
   * <p>The ID of the existing service.</p>
   */
  ServiceId?: string;
}

export namespace ServiceAlreadyExists {
  export function isa(o: any): o is ServiceAlreadyExists {
    return __isa(o, "ServiceAlreadyExists");
  }
}

/**
 * <p>A complex type that contains changes to an existing service.</p>
 */
export interface ServiceChange {
  __type?: "ServiceChange";
  /**
   * <p>A description for the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig: DnsConfigChange | undefined;

  /**
   * <p>
   *             <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you
   * 			specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in
   * 			<code>DnsConfig</code>.</p>
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *
   * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   *
   * 		       <p>Note the following about configuring health checks.</p>
   *
   * 		       <p>
   *             <b>A and AAAA records</b>
   *          </p>
   * 		       <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check
   * 			that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy,
   * 			Route 53 considers both the A and AAAA records to be unhealthy. </p>
   *
   * 		       <p>
   *             <b>CNAME records</b>
   *          </p>
   * 		       <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for
   * 			the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p>
   *
   * 		       <p>
   *             <b>Request interval</b>
   *          </p>
   * 		       <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average,
   * 			your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another,
   * 			so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p>
   *
   * 		       <p>
   *             <b>Health checking regions</b>
   *          </p>
   * 		       <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
   *
   * 		       <p>
   *             <b>Alias records</b>
   *          </p>
   * 		       <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record.
   * 			Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records.
   * 				When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
   * 				such as an ELB load balancer. For more information, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
   * 			         </li>
   *             <li>
   *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates
   * 				an alias record, Route 53 doesn't create the health check.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Charges for health checks</b>
   *          </p>
   * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;
}

export namespace ServiceChange {
  export function isa(o: any): o is ServiceChange {
    return __isa(o, "ServiceChange");
  }
}

/**
 * <p>A complex type that lets you specify the namespaces that you want to list services for.</p>
 */
export interface ServiceFilter {
  __type?: "ServiceFilter";
  /**
   * <p>The operator that you want to use to determine whether a service is returned by <code>ListServices</code>.
   * 			Valid values for <code>Condition</code> include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code>, specify one namespace ID for <code>Values</code>.
   * 				<code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code>, specify a list of the IDs for the namespaces that you want
   * 				<code>ListServices</code> to return a list of services for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Not applicable.</p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;

  /**
   * <p>Specify <code>NAMESPACE_ID</code>.</p>
   */
  Name: ServiceFilterName | string | undefined;

  /**
   * <p>The values that are applicable to the value that you specify for <code>Condition</code> to filter the list of services.</p>
   */
  Values: Array<string> | undefined;
}

export namespace ServiceFilter {
  export function isa(o: any): o is ServiceFilter {
    return __isa(o, "ServiceFilter");
  }
}

export enum ServiceFilterName {
  NAMESPACE_ID = "NAMESPACE_ID"
}

/**
 * <p>No service exists with the specified ID.</p>
 */
export interface ServiceNotFound extends __SmithyException, $MetadataBearer {
  name: "ServiceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ServiceNotFound {
  export function isa(o: any): o is ServiceNotFound {
    return __isa(o, "ServiceNotFound");
  }
}

/**
 * <p>A complex type that contains information about a specified service.</p>
 */
export interface ServiceSummary {
  __type?: "ServiceSummary";
  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the service was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The description that you specify when you create the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you
   * 			specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in
   * 			<code>DnsConfig</code>.</p>
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *
   * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   *
   * 		       <p>Note the following about configuring health checks.</p>
   *
   * 		       <p>
   *             <b>A and AAAA records</b>
   *          </p>
   * 		       <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check
   * 			that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy,
   * 			Route 53 considers both the A and AAAA records to be unhealthy. </p>
   *
   * 		       <p>
   *             <b>CNAME records</b>
   *          </p>
   * 		       <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for
   * 			the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p>
   *
   * 		       <p>
   *             <b>Request interval</b>
   *          </p>
   * 		       <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average,
   * 			your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another,
   * 			so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p>
   *
   * 		       <p>
   *             <b>Health checking regions</b>
   *          </p>
   * 		       <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
   *
   * 		       <p>
   *             <b>Alias records</b>
   *          </p>
   * 		       <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record.
   * 			Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records.
   * 				When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
   * 				such as an ELB load balancer. For more information, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
   * 			         </li>
   *             <li>
   *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates
   * 				an alias record, Route 53 doesn't create the health check.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Charges for health checks</b>
   *          </p>
   * 		       <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   * 			health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you
   * 			use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p>
   * 			      <ul>
   *             <li>
   *                <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available
   * 					over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources
   * 					in a VPC, the health checker must also be in the VPC.)</p>
   *             </li>
   *             <li>
   *                <p>You want to use a third-party health checker regardless of where your resources are.</p>
   *             </li>
   *          </ul>
   *
   * 		       <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   * 			<code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *
   * 		       <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. Cloud Map
   * 			doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent
   * 			<code>UpdateInstanceCustomHealthStatus</code> request.</p>
   *
   * 		       <p>Here's how custom health checks work:</p>
   * 		       <ol>
   *             <li>
   *                <p>You create a service and specify a value for <code>FailureThreshold</code>. </p>
   * 				           <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application
   * 					sends an <a>UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the
   * 					corresponding resource.</p>
   * 			         </li>
   *             <li>
   *                <p>You register an instance.</p>
   *             </li>
   *             <li>
   *                <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p>
   * 				           <note>
   *                   <p>AWS Cloud Map doesn't check the health of the resource directly. </p>
   *                </note>
   * 			         </li>
   *             <li>
   *                <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p>
   *             </li>
   *             <li>
   *                <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p>
   *             </li>
   *             <li>
   *                <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p>
   *             </li>
   *             <li>
   *                <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy,
   * 				AWS Cloud Map stops routing traffic to the resource.</p>
   *             </li>
   *          </ol>
   *
   * 		       <p>Note the following about configuring custom health checks.</p>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously associated with the service
   * 			but that have been deleted are not included in the count.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;
}

export namespace ServiceSummary {
  export function isa(o: any): o is ServiceSummary {
    return __isa(o, "ServiceSummary");
  }
}

export interface UpdateInstanceCustomHealthStatusRequest {
  __type?: "UpdateInstanceCustomHealthStatusRequest";
  /**
   * <p>The ID of the instance that you want to change the health status for.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the service that includes the configuration for the custom health check that you want to change the status for.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The new status of the instance, <code>HEALTHY</code> or <code>UNHEALTHY</code>.</p>
   */
  Status: CustomHealthStatus | string | undefined;
}

export namespace UpdateInstanceCustomHealthStatusRequest {
  export function isa(o: any): o is UpdateInstanceCustomHealthStatusRequest {
    return __isa(o, "UpdateInstanceCustomHealthStatusRequest");
  }
}

export interface UpdateServiceRequest {
  __type?: "UpdateServiceRequest";
  /**
   * <p>The ID of the service that you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A complex type that contains the new settings for the service.</p>
   */
  Service: ServiceChange | undefined;
}

export namespace UpdateServiceRequest {
  export function isa(o: any): o is UpdateServiceRequest {
    return __isa(o, "UpdateServiceRequest");
  }
}

export interface UpdateServiceResponse {
  __type?: "UpdateServiceResponse";
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation,
   * 			see <a>GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace UpdateServiceResponse {
  export function isa(o: any): o is UpdateServiceResponse {
    return __isa(o, "UpdateServiceResponse");
  }
}
