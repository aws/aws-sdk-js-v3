// smithy-typescript generated code
import type {
  CustomHealthStatus,
  FilterCondition,
  HealthCheckType,
  HealthStatus,
  HealthStatusFilter,
  NamespaceFilterName,
  NamespaceType,
  OperationFilterName,
  OperationStatus,
  OperationTargetType,
  OperationType,
  RecordType,
  RoutingPolicy,
  ServiceFilterName,
  ServiceType,
  ServiceTypeOption,
} from "./enums";

/**
 * A custom key-value pair that's associated with a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key identifier, or name, of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateHttpNamespaceRequest {
  /**
   * The name that you want to assign to this namespace.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `CreateHttpNamespace` requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string (for example, a date/time stamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A description for the namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHttpNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Start of Authority (SOA) properties for a public or private DNS namespace.
 *
 * @public
 */
export interface SOA {
  /**
   * The time to live (TTL) for purposes of negative caching.
   *
   * @public
   */
  TTL: number | undefined;
}

/**
 * DNS properties for the private DNS namespace.
 *
 * @public
 */
export interface PrivateDnsPropertiesMutable {
  /**
   * Fields for the Start of Authority (SOA) record for the hosted zone for the private DNS namespace.
   *
   * @public
   */
  SOA: SOA | undefined;
}

/**
 * DNS properties for the private DNS namespace.
 *
 * @public
 */
export interface PrivateDnsNamespaceProperties {
  /**
   * DNS properties for the private DNS namespace.
   *
   * @public
   */
  DnsProperties: PrivateDnsPropertiesMutable | undefined;
}

/**
 * @public
 */
export interface CreatePrivateDnsNamespaceRequest {
  /**
   * The name that you want to assign to this namespace. When you create a private DNS namespace, Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `CreatePrivateDnsNamespace` requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A description for the namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the Amazon VPC that you want to associate the namespace with.
   *
   * @public
   */
  Vpc: string | undefined;

  /**
   * The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Properties for the private DNS namespace.
   *
   * @public
   */
  Properties?: PrivateDnsNamespaceProperties | undefined;
}

/**
 * @public
 */
export interface CreatePrivateDnsNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * DNS properties for the public DNS namespace.
 *
 * @public
 */
export interface PublicDnsPropertiesMutable {
  /**
   * Start of Authority (SOA) record for the hosted zone for the public DNS namespace.
   *
   * @public
   */
  SOA: SOA | undefined;
}

/**
 * DNS properties for the public DNS namespace.
 *
 * @public
 */
export interface PublicDnsNamespaceProperties {
  /**
   * DNS properties for the public DNS namespace.
   *
   * @public
   */
  DnsProperties: PublicDnsPropertiesMutable | undefined;
}

/**
 * @public
 */
export interface CreatePublicDnsNamespaceRequest {
  /**
   * The name that you want to assign to this namespace.
   *
   * > **Note:** Do not include sensitive information in the name. The name is publicly available using DNS queries.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `CreatePublicDnsNamespace` requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A description for the namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to add to the namespace. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Properties for the public DNS namespace.
   *
   * @public
   */
  Properties?: PublicDnsNamespaceProperties | undefined;
}

/**
 * @public
 */
export interface CreatePublicDnsNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
 *
 * @public
 */
export interface DnsRecord {
  /**
   * The type of the resource, which indicates the type of value that Route 53 returns in response to DNS queries. You can specify values for `Type` in the following combinations:
   *
   * - **`A`**
   * - **`AAAA`**
   * - **`A`** and **`AAAA`**
   * - **`SRV`**
   * - **`CNAME`**
   *
   * If you want Cloud Map to create a Route 53 alias record when you register an instance, specify `A` or `AAAA` for `Type`.
   *
   * You specify other settings, such as the IP address for `A` and `AAAA` records, when you register an instance. For more information, see [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html).
   *
   * The following values are supported:
   *
   * - **A**
   *
   *   Route 53 returns the IP address of the resource in IPv4 format, such as 192.0.2.44.
   *
   * - **AAAA**
   *
   *   Route 53 returns the IP address of the resource in IPv6 format, such as 2001:0db8:85a3:0000:0000:abcd:0001:2345.
   *
   * - **CNAME**
   *
   *   Route 53 returns the domain name of the resource, such as www.example.com. Note the following:
   *
   *   - You specify the domain name that you want to route traffic to when you register an instance. For more information, see [Attributes](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#cloudmap-RegisterInstance-request-Attributes) in the topic [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html).
   *   - You must specify `WEIGHTED` for the value of `RoutingPolicy`.
   *   - You can't specify both `CNAME` for `Type` and settings for `HealthCheckConfig`. If you do, the request will fail with an `InvalidInput` error.
   *
   * - **SRV**
   *
   *   Route 53 returns the value for an `SRV` record. The value for an `SRV` record uses the following values:
   *
   *   `priority weight port service-hostname`
   *
   *   Note the following about the values:
   *
   *   - The values of `priority` and `weight` are both set to `1` and can't be changed.
   *   - The value of `port` comes from the value that you specify for the `AWS_INSTANCE_PORT` attribute when you submit a [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html) request.
   *   - The value of `service-hostname` is a concatenation of the following values:
   *
   *     - The value that you specify for `InstanceId` when you register an instance.
   *     - The name of the service.
   *     - The name of the namespace.
   *
   *     For example, if the value of `InstanceId` is `test`, the name of the service is `backend`, and the name of the namespace is `example.com`, the value of `service-hostname` is the following:
   *
   *     `test.backend.example.com`
   *
   *   If you specify settings for an `SRV` record, note the following:
   *
   *   - If you specify values for `AWS_INSTANCE_IPV4`, `AWS_INSTANCE_IPV6`, or both in the `RegisterInstance` request, Cloud Map automatically creates `A` and/or `AAAA` records that have the same name as the value of `service-hostname` in the `SRV` record. You can ignore these records.
   *   - If you're using a system that requires a specific `SRV` format, such as HAProxy, see the [Name](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html#cloudmap-CreateService-request-Name) element in the documentation about `CreateService` for information about how to specify the correct name format.
   *
   * @public
   */
  Type: RecordType | undefined;

  /**
   * The amount of time, in seconds, that you want DNS resolvers to cache the settings for this record.
   *
   * > **Note:** Alias records don't include a TTL because Route 53 uses the TTL for the Amazon Web Services resource that an alias record routes traffic to. If you include the `AWS_ALIAS_DNS_NAME` attribute when you submit a [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html) request, the `TTL` value is ignored. Always specify a TTL for the service; you can use a service to register instances that create either alias or non-alias records.
   *
   * @public
   */
  TTL: number | undefined;
}

/**
 * A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
 *
 * @public
 */
export interface DnsConfig {
  /**
   * *Use NamespaceId in [Service](https://docs.aws.amazon.com/cloud-map/latest/api/API_Service.html) instead.*
   *
   * The ID of the namespace to use for DNS configuration.
   *
   * @deprecated Top level attribute in request should be used to reference namespace-id.
   * @public
   */
  NamespaceId?: string | undefined;

  /**
   * The routing policy that you want to apply to all Route 53 DNS records that Cloud Map creates when you register an instance and specify this service.
   *
   * > **Note:** If you want to use this service to register instances that create alias records, specify `WEIGHTED` for the routing policy.
   *
   * You can specify the following values:
   *
   * - **MULTIVALUE**
   *
   *   If you define a health check for the service and the health check is healthy, Route 53 returns the applicable value for up to eight instances.
   *
   *   For example, suppose that the service includes configurations for one `A` record and a health check. You use the service to register 10 instances. Route 53 responds to DNS queries with IP addresses for up to eight healthy instances. If fewer than eight instances are healthy, Route 53 responds to every DNS query with the IP addresses for all of the healthy instances.
   *
   *   If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the values for up to eight instances.
   *
   *   For more information about the multivalue routing policy, see [Multivalue Answer Routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue) in the *Route 53 Developer Guide*.
   *
   * - **WEIGHTED**
   *
   *   Route 53 returns the applicable value from one randomly selected instance from among the instances that you registered using the same service. Currently, all records have the same weight, so you can't route more or less traffic to any instances.
   *
   *   For example, suppose that the service includes configurations for one `A` record and a health check. You use the service to register 10 instances. Route 53 responds to DNS queries with the IP address for one randomly selected instance from among the healthy instances. If no instances are healthy, Route 53 responds to DNS queries as if all of the instances were healthy.
   *
   *   If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the applicable value for one randomly selected instance.
   *
   *   For more information about the weighted routing policy, see [Weighted Routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted) in the *Route 53 Developer Guide*.
   *
   * @public
   */
  RoutingPolicy?: RoutingPolicy | undefined;

  /**
   * An array that contains one `DnsRecord` object for each Route 53 DNS record that you want Cloud Map to create when you register an instance.
   *
   * > **Important:** The record type of a service specified in a `DnsRecord` object can't be updated. To change a record type, you need to delete the service and recreate it with a new `DnsConfig`.
   *
   * @public
   */
  DnsRecords: DnsRecord[] | undefined;
}

/**
 * *Public DNS and HTTP namespaces only.* A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in `DnsConfig`.
 *
 * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
 *
 * Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
 *
 * Note the following about configuring health checks.
 *
 * - **A and AAAA records**
 *
 *   If `DnsConfig` includes configurations for both `A` and `AAAA` records, Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint tthat's specified by the IPv4 address is unhealthy, Route 53 considers both the `A` and `AAAA` records to be unhealthy.
 *
 * - **CNAME records**
 *
 *   You can't specify settings for `HealthCheckConfig` when the `DNSConfig` includes `CNAME` for the value of `Type`. If you do, the `CreateService` request will fail with an `InvalidInput` error.
 *
 * - **Request interval**
 *
 *   A Route 53 health checker in each health-checking Amazon Web Services Region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another. Therefore, you might sometimes see several requests in one second that's followed by a few seconds with no health checks at all.
 *
 * - **Health checking regions**
 *
 *   Health checkers perform checks from all Route 53 health-checking Regions. For a list of the current Regions, see [Regions](https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions).
 *
 * - **Alias records**
 *
 *   When you register an instance, if you include the `AWS_ALIAS_DNS_NAME` attribute, Cloud Map creates a Route 53 alias record. Note the following:
 *
 *   - Route 53 automatically sets `EvaluateTargetHealth` to true for alias records. When `EvaluateTargetHealth` is true, the alias record inherits the health of the referenced Amazon Web Services resource. such as an ELB load balancer. For more information, see [EvaluateTargetHealth](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth).
 *   - If you include `HealthCheckConfig` and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.
 *
 * - **Charges for health checks**
 *
 *   Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
 *
 * @public
 */
export interface HealthCheckConfig {
  /**
   * The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy.
   *
   * > **Important:** You can't change the value of `Type` after you create a health check.
   *
   * You can create the following types of health checks:
   *
   * - **HTTP**: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.
   * - **HTTPS**: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.
   *
   *   > **Important:** If you specify HTTPS for the value of `Type`, the endpoint must support TLS v1.0 or later.
   * - **TCP**: Route 53 tries to establish a TCP connection.
   *
   *   If you specify `TCP` for `Type`, don't specify a value for `ResourcePath`.
   *
   * For more information, see [How Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the *Route 53 Developer Guide*.
   *
   * @public
   */
  Type: HealthCheckType | undefined;

  /**
   * The path that you want Route 53 to request when performing health checks. The path can be any value that your endpoint returns an HTTP status code of a 2xx or 3xx format for when the endpoint is healthy. An example file is `/docs/route53-health-check.html`. Route 53 automatically adds the DNS name for the service. If you don't specify a value for `ResourcePath`, the default value is `/`.
   *
   * If you specify `TCP` for `Type`, you must *not* specify a value for `ResourcePath`.
   *
   * @public
   */
  ResourcePath?: string | undefined;

  /**
   * The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint from unhealthy to healthy or the other way around. For more information, see [How Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the *Route 53 Developer Guide*.
   *
   * @public
   */
  FailureThreshold?: number | undefined;
}

/**
 * A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:
 *
 * - You can't use a health check that's defined by `HealthCheckConfig` because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)
 * - You want to use a third-party health checker regardless of where your resources are located.
 *
 * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
 *
 * To change the status of a custom health check, submit an `UpdateInstanceCustomHealthStatus` request. Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent `UpdateInstanceCustomHealthStatus` request.
 *
 * Here's how custom health checks work:
 *
 * 1. You create a service.
 * 2. You register an instance.
 * 3. You configure a third-party health checker to monitor the resource that's associated with the new instance.
 *
 *    > **Note:** Cloud Map doesn't check the health of the resource directly.
 * 4. The third-party health-checker determines that the resource is unhealthy and notifies your application.
 * 5. Your application submits an `UpdateInstanceCustomHealthStatus` request.
 * 6. Cloud Map waits for 30 seconds.
 * 7. If another `UpdateInstanceCustomHealthStatus` request doesn't arrive during that time to change the status back to healthy, Cloud Map stops routing traffic to the resource.
 *
 * @public
 */
export interface HealthCheckCustomConfig {
  /**
   * > **Important:** This parameter is no longer supported and is always set to 1. Cloud Map waits for approximately 30 seconds after receiving an `UpdateInstanceCustomHealthStatus` request before changing the status of the service instance.
   *
   * The number of 30-second intervals that you want Cloud Map to wait after receiving an `UpdateInstanceCustomHealthStatus` request before it changes the health status of a service instance.
   *
   * Sending a second or subsequent `UpdateInstanceCustomHealthStatus` request with the same value before 30 seconds has passed doesn't accelerate the change. Cloud Map still waits `30` seconds after the first request to make the change.
   *
   * @deprecated Configurable FailureThreshold of HealthCheckCustomConfig is deprecated.  It will always have value 1.
   * @public
   */
  FailureThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * The name that you want to assign to the service.
   *
   * > **Note:** Do not include sensitive information in the name if the namespace is discoverable by public DNS queries.
   *
   * If you want Cloud Map to create an `SRV` record when you register an instance and you're using a system that requires a specific `SRV` format, such as [HAProxy](http://www.haproxy.org/), specify the following for `Name`:
   *
   * - Start the name with an underscore (_), such as `_exampleservice`.
   * - End the name with *._protocol*, such as `._tcp`.
   *
   * When you register an instance, Cloud Map creates an `SRV` record and assigns a name to the record by concatenating the service name and the namespace name (for example,
   *
   * `_exampleservice._tcp.example.com`).
   *
   * > **Note:** For services that are accessible by DNS queries, you can't create multiple services with names that differ only by case (such as EXAMPLE and example). Otherwise, these services have the same DNS name and can't be distinguished. However, if you use a namespace that's only accessible by API calls, then you can create services that with names that differ only by case.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID or Amazon Resource Name (ARN) of the namespace that you want to use to create the service. For namespaces shared with your Amazon Web Services account, specify the namespace ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  NamespaceId?: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `CreateService` requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A description for the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A complex type that contains information about the Amazon Route 53 records that you want Cloud Map to create when you register an instance.
   *
   * @public
   */
  DnsConfig?: DnsConfig | undefined;

  /**
   * *Public DNS and HTTP namespaces only.* A complex type that contains settings for an optional Route 53 health check. If you specify settings for a health check, Cloud Map associates the health check with all the Route 53 DNS records that you specify in `DnsConfig`.
   *
   * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
   *
   * For information about the charges for health checks, see [Cloud Map Pricing](http://aws.amazon.com/cloud-map/pricing/).
   *
   * @public
   */
  HealthCheckConfig?: HealthCheckConfig | undefined;

  /**
   * A complex type that contains information about an optional custom health check.
   *
   * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
   *
   * You can't add, update, or delete a `HealthCheckCustomConfig` configuration from an existing service.
   *
   * @public
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig | undefined;

  /**
   * The tags to add to the service. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If present, specifies that the service instances are only discoverable using the `DiscoverInstances` API operation. No DNS records is registered for the service instances. The only valid value is `HTTP`.
   *
   * @public
   */
  Type?: ServiceTypeOption | undefined;
}

/**
 * A complex type that contains information about the specified service.
 *
 * @public
 */
export interface Service {
  /**
   * The ID that Cloud Map assigned to the service when you created it.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that Cloud Map assigns to the service when you create it.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the namespace with which the service is associated. If this isn't your account ID, it is the ID of the account that shared the namespace with your account. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the namespace that was used to create the service.
   *
   * @public
   */
  NamespaceId?: string | undefined;

  /**
   * The description of the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of instances that are currently associated with the service. Instances that were previously associated with the service but that are deleted aren't included in the count. The count might not reflect pending registrations and deregistrations.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
   *
   * > **Important:** The record types of a service can only be changed by deleting the service and recreating it with a new `Dnsconfig`.
   *
   * @public
   */
  DnsConfig?: DnsConfig | undefined;

  /**
   * Describes the systems that can be used to discover the service instances.
   *
   * - **DNS_HTTP**
   *
   *   The service instances can be discovered using either DNS queries or the `DiscoverInstances` API operation.
   *
   * - **HTTP**
   *
   *   The service instances can only be discovered using the `DiscoverInstances` API operation.
   *
   * - **DNS**
   *
   *   Reserved.
   *
   * @public
   */
  Type?: ServiceType | undefined;

  /**
   * *Public DNS and HTTP namespaces only.* A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in `DnsConfig`.
   *
   * For information about the charges for health checks, see [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
   *
   * @public
   */
  HealthCheckConfig?: HealthCheckConfig | undefined;

  /**
   * A complex type that contains information about an optional custom health check.
   *
   * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
   *
   * @public
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig | undefined;

  /**
   * The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreateDate` is accurate to milliseconds. For example, the value `1516925490.087` represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the service. If this isn't your account ID, it is the ID of account of the namespace owner or of another account with which the namespace has been shared. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  CreatedByAccount?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * A complex type that contains information about the new service.
   *
   * @public
   */
  Service?: Service | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the namespace that you want to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to delete. If the namespace associated with the service is shared with your Amazon Web Services account, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html).
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {}

/**
 * @public
 */
export interface DeleteServiceAttributesRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service from which the attributes will be deleted. For services created in a namespace shared with your Amazon Web Services account, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * A list of keys corresponding to each attribute that you want to delete.
   *
   * @public
   */
  Attributes: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteServiceAttributesResponse {}

/**
 * @public
 */
export interface DeregisterInstanceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that the instance is associated with. If the namespace associated with the service is shared with your account, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The value that you specified for `Id` in the [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html) request.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DiscoverInstancesRequest {
  /**
   * The `HttpName` name of the namespace. The `HttpName` is found in the `HttpProperties` member of the `Properties` member of the namespace. In most cases, `Name` and `HttpName` match. However, if you reuse `Name` for namespace creation, a generated hash is added to `HttpName` to distinguish the two.
   *
   * @public
   */
  NamespaceName: string | undefined;

  /**
   * The name of the service that you specified when you registered the instance.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The maximum number of instances that you want Cloud Map to return in the response to a `DiscoverInstances` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 instances.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to scope the results based on custom attributes for the instance (for example, `\{version=v1, az=1a\}`). Only instances that match all the specified key-value pairs are returned.
   *
   * @public
   */
  QueryParameters?: Record<string, string> | undefined;

  /**
   * Opportunistic filters to scope the results based on custom attributes. If there are instances that match both the filters specified in both the `QueryParameters` parameter and this parameter, all of these instances are returned. Otherwise, the filters are ignored, and only instances that match the filters that are specified in the `QueryParameters` parameter are returned.
   *
   * @public
   */
  OptionalParameters?: Record<string, string> | undefined;

  /**
   * The health status of the instances that you want to discover. This parameter is ignored for services that don't have a health check configured, and all instances are returned.
   *
   * - **HEALTHY**
   *
   *   Returns healthy instances.
   *
   * - **UNHEALTHY**
   *
   *   Returns unhealthy instances.
   *
   * - **ALL**
   *
   *   Returns all instances.
   *
   * - **HEALTHY_OR_ELSE_ALL**
   *
   *   Returns healthy instances, unless none are reporting a healthy state. In that case, return all instances. This is also called failing open.
   *
   * @public
   */
  HealthStatus?: HealthStatusFilter | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the namespace associated with the instance, as specified in the namespace `ResourceOwner` field. For instances associated with namespaces that are shared with your account, you must specify an `OwnerAccount`.
   *
   * @public
   */
  OwnerAccount?: string | undefined;
}

/**
 * In a response to a [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html) request, `HttpInstanceSummary` contains information about one instance that matches the values that you specified in the request.
 *
 * @public
 */
export interface HttpInstanceSummary {
  /**
   * The ID of an instance that matches the values that you specified in the request.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The `HttpName` name of the namespace. It's found in the `HttpProperties` member of the `Properties` member of the namespace.
   *
   * @public
   */
  NamespaceName?: string | undefined;

  /**
   * The name of the service that you specified when you registered the instance.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * If you configured health checking in the service, the current health status of the service instance.
   *
   * @public
   */
  HealthStatus?: HealthStatus | undefined;

  /**
   * If you included any attributes when you registered the instance, the values of those attributes.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DiscoverInstancesResponse {
  /**
   * A complex type that contains one `HttpInstanceSummary` for each registered instance.
   *
   * @public
   */
  Instances?: HttpInstanceSummary[] | undefined;

  /**
   * The increasing revision associated to the response Instances list. If a new instance is registered or deregistered, the `InstancesRevision` updates. The health status updates don't update `InstancesRevision`.
   *
   * @public
   */
  InstancesRevision?: number | undefined;
}

/**
 * @public
 */
export interface DiscoverInstancesRevisionRequest {
  /**
   * The `HttpName` name of the namespace. The `HttpName` is found in the `HttpProperties` member of the `Properties` member of the namespace.
   *
   * @public
   */
  NamespaceName: string | undefined;

  /**
   * The name of the service that you specified when you registered the instance.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the namespace associated with the instance, as specified in the namespace `ResourceOwner` field. For instances associated with namespaces that are shared with your account, you must specify an `OwnerAccount`. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  OwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface DiscoverInstancesRevisionResponse {
  /**
   * The increasing revision associated to the response Instances list. If a new instance is registered or deregistered, the `InstancesRevision` updates. The health status updates don't update `InstancesRevision`.
   *
   * @public
   */
  InstancesRevision?: number | undefined;
}

/**
 * A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
 *
 * @public
 */
export interface DnsConfigChange {
  /**
   * An array that contains one `DnsRecord` object for each Route 53 record that you want Cloud Map to create when you register an instance.
   *
   * @public
   */
  DnsRecords: DnsRecord[] | undefined;
}

/**
 * A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
 *
 * @public
 */
export interface DnsProperties {
  /**
   * The ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * Start of Authority (SOA) record for the hosted zone.
   *
   * @public
   */
  SOA?: SOA | undefined;
}

/**
 * @public
 */
export interface GetInstanceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that the instance is associated with. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The ID of the instance that you want to get information about.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * A complex type that contains information about an instance that Cloud Map creates when you submit a `RegisterInstance` request.
 *
 * @public
 */
export interface Instance {
  /**
   * An identifier that you want to associate with the instance. Note the following:
   *
   * - If the service that's specified by `ServiceId` includes settings for an `SRV` record, the value of `InstanceId` is automatically included as part of the value for the `SRV` record. For more information, see [DnsRecord > Type](https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type).
   * - You can use this value to update an existing instance.
   * - To register a new instance, you must specify a value that's unique among instances that you register by using the same service.
   * - If you specify an existing `InstanceId` and `ServiceId`, Cloud Map updates the existing DNS records. If there's also an existing health check, Cloud Map deletes the old health check and creates a new one.
   *
   *   > **Note:** The health check isn't deleted immediately, so it will still appear for a while if you submit a `ListHealthChecks` request, for example.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `RegisterInstance` requests to be retried without the risk of executing the operation twice. You must use a unique `CreatorRequestId` string every time you submit a `RegisterInstance` request if you're registering additional instances for the same namespace and service. `CreatorRequestId` can be any unique string (for example, a date/time stamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A string map that contains the following information for the service that you specify in `ServiceId`:
   *
   * - The attributes that apply to the records that are defined in the service.
   * - For each attribute, the applicable value.
   *
   * > **Note:** Do not include sensitive information in the attributes if the namespace is discoverable by public DNS queries.
   *
   * Supported attribute keys include the following:
   *
   * - **AWS_ALIAS_DNS_NAME**
   *
   *   If you want Cloud Map to create a Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that's associated with the load balancer. For information about how to get the DNS name, see [AliasTarget->DNSName](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-DNSName) in the *Route 53 API Reference*.
   *
   *   Note the following:
   *
   *   - The configuration for the service that's specified by `ServiceId` must include settings for an `A` record, an `AAAA` record, or both.
   *   - In the service that's specified by `ServiceId`, the value of `RoutingPolicy` must be `WEIGHTED`.
   *   - If the service that's specified by `ServiceId` includes `HealthCheckConfig` settings, Cloud Map creates the health check, but it won't associate the health check with the alias record.
   *   - Auto naming currently doesn't support creating alias records that route traffic to Amazon Web Services resources other than ELB load balancers.
   *   - If you specify a value for `AWS_ALIAS_DNS_NAME`, don't specify values for any of the `AWS_INSTANCE` attributes.
   *
   * - **AWS_EC2_INSTANCE_ID**
   *
   *   *HTTP namespaces only.* The Amazon EC2 instance ID for the instance. The `AWS_INSTANCE_IPV4` attribute contains the primary private IPv4 address.
   *
   * - **AWS_INIT_HEALTH_STATUS**
   *
   *   If the service configuration includes `HealthCheckCustomConfig`, you can optionally use `AWS_INIT_HEALTH_STATUS` to specify the initial status of the custom health check, `HEALTHY` or `UNHEALTHY`. If you don't specify a value for `AWS_INIT_HEALTH_STATUS`, the initial status is `HEALTHY`.
   *
   * - **AWS_INSTANCE_CNAME**
   *
   *   If the service configuration includes a `CNAME` record, the domain name that you want Route 53 to return in response to DNS queries (for example, `example.com`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `CNAME` record.
   *
   * - **AWS_INSTANCE_IPV4**
   *
   *   If the service configuration includes an `A` record, the IPv4 address that you want Route 53 to return in response to DNS queries (for example, `192.0.2.44`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `A` record. If the service includes settings for an `SRV` record, you must specify a value for `AWS_INSTANCE_IPV4`, `AWS_INSTANCE_IPV6`, or both.
   *
   * - **AWS_INSTANCE_IPV6**
   *
   *   If the service configuration includes an `AAAA` record, the IPv6 address that you want Route 53 to return in response to DNS queries (for example, `2001:0db8:85a3:0000:0000:abcd:0001:2345`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `AAAA` record. If the service includes settings for an `SRV` record, you must specify a value for `AWS_INSTANCE_IPV4`, `AWS_INSTANCE_IPV6`, or both.
   *
   * - **AWS_INSTANCE_PORT**
   *
   *   If the service includes an `SRV` record, the value that you want Route 53 to return for the port.
   *
   *   If the service includes `HealthCheckConfig`, the port on the endpoint that you want Route 53 to send requests to.
   *
   *   This value is required if you specified settings for an `SRV` record or a Route 53 health check when you created the service.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The ID of the Amazon Web Services account that registered the instance. If this isn't your account ID, it's the ID of the account that shared the namespace with your account or the ID of another account with which the namespace has been shared. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  CreatedByAccount?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceResponse {
  /**
   * The ID of the Amazon Web Services account that created the namespace that contains the service that the instance is associated with. If this isn't your account ID, it's the ID of the account that shared the namespace with your account.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * A complex type that contains information about a specified instance.
   *
   * @public
   */
  Instance?: Instance | undefined;
}

/**
 * @public
 */
export interface GetInstancesHealthStatusRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that the instance is associated with. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * An array that contains the IDs of all the instances that you want to get the health status for.
   *
   * If you omit `Instances`, Cloud Map returns the health status for all the instances that are associated with the specified service.
   *
   * > **Note:** To get the IDs for the instances that you've registered by using a specified service, submit a [ListInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html) request.
   *
   * @public
   */
  Instances?: string[] | undefined;

  /**
   * The maximum number of instances that you want Cloud Map to return in the response to a `GetInstancesHealthStatus` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 instances.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `GetInstancesHealthStatus` request, omit this value.
   *
   * If more than `MaxResults` instances match the specified criteria, you can submit another `GetInstancesHealthStatus` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstancesHealthStatusResponse {
  /**
   * A complex type that contains the IDs and the health status of the instances that you specified in the `GetInstancesHealthStatus` request.
   *
   * @public
   */
  Status?: Record<string, HealthStatus> | undefined;

  /**
   * If more than `MaxResults` instances match the specified criteria, you can submit another `GetInstancesHealthStatus` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the namespace that you want to get information about. For namespaces shared with your Amazon Web Services account, specify the namespace ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * A complex type that contains the name of an HTTP namespace.
 *
 * @public
 */
export interface HttpProperties {
  /**
   * The name of an HTTP namespace.
   *
   * @public
   */
  HttpName?: string | undefined;
}

/**
 * A complex type that contains information that's specific to the namespace type.
 *
 * @public
 */
export interface NamespaceProperties {
  /**
   * A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
   *
   * @public
   */
  DnsProperties?: DnsProperties | undefined;

  /**
   * A complex type that contains the name of an HTTP namespace.
   *
   * @public
   */
  HttpProperties?: HttpProperties | undefined;
}

/**
 * A complex type that contains information about a specified namespace.
 *
 * @public
 */
export interface Namespace {
  /**
   * The ID of a namespace.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that Cloud Map assigns to the namespace when you create it.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the namespace. If this isn't your account ID, it's the ID of the account that shared the namespace with your account. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The name of the namespace, such as `example.com`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the namespace. The methods for discovering instances depends on the value that you specify:
   *
   * - **HTTP**
   *
   *   Instances can be discovered only programmatically, using the Cloud Map `DiscoverInstances` API.
   *
   * - **DNS_PUBLIC**
   *
   *   Instances can be discovered using public DNS queries and using the `DiscoverInstances` API.
   *
   * - **DNS_PRIVATE**
   *
   *   Instances can be discovered using DNS queries in VPCs and using the `DiscoverInstances` API.
   *
   * @public
   */
  Type?: NamespaceType | undefined;

  /**
   * The description that you specify for the namespace when you create it.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of services that are associated with the namespace.
   *
   * @public
   */
  ServiceCount?: number | undefined;

  /**
   * A complex type that contains information that's specific to the type of the namespace.
   *
   * @public
   */
  Properties?: NamespaceProperties | undefined;

  /**
   * The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of `CreateDate` is accurate to milliseconds. For example, the value `1516925490.087` represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running an operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * A complex type that contains information about the specified namespace.
   *
   * @public
   */
  Namespace?: Namespace | undefined;
}

/**
 * @public
 */
export interface GetOperationRequest {
  /**
   * The ID of the operation that you want to get more information about.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the namespace associated with the operation, as specified in the namespace `ResourceOwner` field. For operations associated with namespaces that are shared with your account, you must specify an `OwnerAccount`.
   *
   * @public
   */
  OwnerAccount?: string | undefined;
}

/**
 * A complex type that contains information about a specified operation.
 *
 * @public
 */
export interface Operation {
  /**
   * The ID of the operation that you want to get information about.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the namespace associated with the operation.
   *
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * The name of the operation that's associated with the specified ID.
   *
   * @public
   */
  Type?: OperationType | undefined;

  /**
   * The status of the operation. Values include the following:
   *
   * - **SUBMITTED**
   *
   *   This is the initial state that occurs immediately after you submit a request.
   *
   * - **PENDING**
   *
   *   Cloud Map is performing the operation.
   *
   * - **SUCCESS**
   *
   *   The operation succeeded.
   *
   * - **FAIL**
   *
   *   The operation failed. For the failure reason, see `ErrorMessage`.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * If the value of `Status` is `FAIL`, the reason that the operation failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The code associated with `ErrorMessage`. Values for `ErrorCode` include the following:
   *
   * - `ACCESS_DENIED`
   * - `CANNOT_CREATE_HOSTED_ZONE`
   * - `EXPIRED_TOKEN`
   * - `HOSTED_ZONE_NOT_FOUND`
   * - `INTERNAL_FAILURE`
   * - `INVALID_CHANGE_BATCH`
   * - `THROTTLED_REQUEST`
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of `CreateDate` is accurate to milliseconds. For example, the value `1516925490.087` represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The date and time that the value of `Status` changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC). The value of `UpdateDate` is accurate to milliseconds. For example, the value `1516925490.087` represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  UpdateDate?: Date | undefined;

  /**
   * The name of the target entity that's associated with the operation:
   *
   * - **NAMESPACE**
   *
   *   The namespace ID is returned in the `ResourceId` property.
   *
   * - **SERVICE**
   *
   *   The service ID is returned in the `ResourceId` property.
   *
   * - **INSTANCE**
   *
   *   The instance ID is returned in the `ResourceId` property.
   *
   * @public
   */
  Targets?: Partial<Record<OperationTargetType, string>> | undefined;
}

/**
 * @public
 */
export interface GetOperationResponse {
  /**
   * A complex type that contains information about the operation.
   *
   * @public
   */
  Operation?: Operation | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to get settings for. For services created by consumers in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * A complex type that contains information about the service.
   *
   * @public
   */
  Service?: Service | undefined;
}

/**
 * @public
 */
export interface GetServiceAttributesRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to get attributes for. For services created in a namespace shared with your Amazon Web Services account, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;
}

/**
 * A complex type that contains information about attributes associated with a specific service.
 *
 * @public
 */
export interface ServiceAttributes {
  /**
   * The ARN of the service that the attributes are associated with.
   *
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the namespace with which the service is associated. If this isn't your account ID, it is the ID of the account that shared the namespace with your account. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * A string map that contains the following information for the service that you specify in `ServiceArn`:
   *
   * - The attributes that apply to the service.
   * - For each attribute, the applicable value.
   *
   * You can specify a total of 30 attributes.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetServiceAttributesResponse {
  /**
   * A complex type that contains the service ARN and a list of attribute key-value pairs associated with the service.
   *
   * @public
   */
  ServiceAttributes?: ServiceAttributes | undefined;
}

/**
 * Updated properties for the HTTP namespace.
 *
 * @public
 */
export interface HttpNamespaceChange {
  /**
   * An updated description for the HTTP namespace.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * A complex type that contains information about the instances that you registered by using a specified service.
 *
 * @public
 */
export interface InstanceSummary {
  /**
   * The ID for an instance that you created by using a specified service.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A string map that contains the following information:
   *
   * - The attributes that are associated with the instance.
   * - For each attribute, the applicable value.
   *
   * Supported attribute keys include the following:
   *
   * - **AWS_ALIAS_DNS_NAME**
   *
   *   For an alias record that routes traffic to an Elastic Load Balancing load balancer, the DNS name that's associated with the load balancer.
   *
   * - **AWS_EC2_INSTANCE_ID (HTTP namespaces only)**
   *
   *   The Amazon EC2 instance ID for the instance. When the `AWS_EC2_INSTANCE_ID` attribute is specified, then the `AWS_INSTANCE_IPV4` attribute contains the primary private IPv4 address.
   *
   * - **AWS_INIT_HEALTH_STATUS**
   *
   *   If the service configuration includes `HealthCheckCustomConfig`, you can optionally use `AWS_INIT_HEALTH_STATUS` to specify the initial status of the custom health check, `HEALTHY` or `UNHEALTHY`. If you don't specify a value for `AWS_INIT_HEALTH_STATUS`, the initial status is `HEALTHY`.
   *
   * - **AWS_INSTANCE_CNAME**
   *
   *   For a `CNAME` record, the domain name that Route 53 returns in response to DNS queries (for example, `example.com`).
   *
   * - **AWS_INSTANCE_IPV4**
   *
   *   For an `A` record, the IPv4 address that Route 53 returns in response to DNS queries (for example, `192.0.2.44`).
   *
   * - **AWS_INSTANCE_IPV6**
   *
   *   For an `AAAA` record, the IPv6 address that Route 53 returns in response to DNS queries (for example, `2001:0db8:85a3:0000:0000:abcd:0001:2345`).
   *
   * - **AWS_INSTANCE_PORT**
   *
   *   For an `SRV` record, the value that Route 53 returns for the port. In addition, if the service includes `HealthCheckConfig`, the port on the endpoint that Route 53 sends requests to.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The ID of the Amazon Web Services account that registered the instance. If this isn't your account ID, it's the ID of the account that shared the namespace with your account or the ID of another account with which the namespace has been shared. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  CreatedByAccount?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to list instances for. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * For the first `ListInstances` request, omit this value.
   *
   * If more than `MaxResults` instances match the specified criteria, you can submit another `ListInstances` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of instances that you want Cloud Map to return in the response to a `ListInstances` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 instances.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * The ID of the Amazon Web Services account that created the namespace that contains the specified service. If this isn't your account ID, it's the ID of the account that shared the namespace with your account.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * Summary information about the instances that are associated with the specified service.
   *
   * @public
   */
  Instances?: InstanceSummary[] | undefined;

  /**
   * If more than `MaxResults` instances match the specified criteria, you can submit another `ListInstances` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
 *
 * @public
 */
export interface NamespaceFilter {
  /**
   * Specify the namespaces that you want to get using one of the following.
   *
   * - `TYPE`: Gets the namespaces of the specified type.
   * - `NAME`: Gets the namespaces with the specified name.
   * - `HTTP_NAME`: Gets the namespaces with the specified HTTP name.
   * - `RESOURCE_OWNER`: Gets the namespaces created by your Amazon Web Services account or by other accounts. This can be used to filter for shared namespaces. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  Name: NamespaceFilterName | undefined;

  /**
   * Specify the values that are applicable to the value that you specify for `Name`.
   *
   * - `TYPE`: Specify `HTTP`, `DNS_PUBLIC`, or `DNS_PRIVATE`.
   * - `NAME`: Specify the name of the namespace, which is found in `Namespace.Name`.
   * - `HTTP_NAME`: Specify the HTTP name of the namespace, which is found in `Namespace.Properties.HttpProperties.HttpName`.
   * - `RESOURCE_OWNER`: Specify one of `SELF` or `OTHER_ACCOUNTS`. `SELF` can be used to filter namespaces created by you and `OTHER_ACCOUNTS` can be used to filter namespaces shared with you that were created by other accounts.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * Specify the operator that you want to use to determine whether a namespace matches the specified value. Valid values for `Condition` are one of the following.
   *
   * - `EQ`: When you specify `EQ` for `Condition`, you can specify only one value. `EQ` is supported for `TYPE`, `NAME`, `RESOURCE_OWNER` and `HTTP_NAME`. `EQ` is the default condition and can be omitted.
   * - `BEGINS_WITH`: When you specify `BEGINS_WITH` for `Condition`, you can specify only one value. `BEGINS_WITH` is supported for `TYPE`, `NAME`, and `HTTP_NAME`.
   *
   * @public
   */
  Condition?: FilterCondition | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * For the first `ListNamespaces` request, omit this value.
   *
   * If the response contains `NextToken`, submit another `ListNamespaces` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` namespaces and then filters them based on the specified criteria. It's possible that no namespaces in the first `MaxResults` namespaces matched the specified criteria but that subsequent groups of `MaxResults` namespaces do contain namespaces that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of namespaces that you want Cloud Map to return in the response to a `ListNamespaces` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 namespaces.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A complex type that contains specifications for the namespaces that you want to list.
   *
   * If you specify more than one filter, a namespace must match all filters to be returned by `ListNamespaces`.
   *
   * @public
   */
  Filters?: NamespaceFilter[] | undefined;
}

/**
 * A complex type that contains information about a namespace.
 *
 * @public
 */
export interface NamespaceSummary {
  /**
   * The ID of the namespace.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that Cloud Map assigns to the namespace when you create it.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the namespace. If this isn't your account ID, it's the ID of the account that shared the namespace with your account. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The name of the namespace. When you create a namespace, Cloud Map automatically creates a Route 53 hosted zone that has the same name as the namespace.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the namespace, either public or private.
   *
   * @public
   */
  Type?: NamespaceType | undefined;

  /**
   * A description for the namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of services that were created using the namespace.
   *
   * @public
   */
  ServiceCount?: number | undefined;

  /**
   * The properties of the namespace.
   *
   * @public
   */
  Properties?: NamespaceProperties | undefined;

  /**
   * The date and time that the namespace was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * An array that contains one `NamespaceSummary` object for each namespace that matches the specified filter criteria.
   *
   * @public
   */
  Namespaces?: NamespaceSummary[] | undefined;

  /**
   * If the response contains `NextToken`, submit another `ListNamespaces` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` namespaces and then filters them based on the specified criteria. It's possible that no namespaces in the first `MaxResults` namespaces matched the specified criteria but that subsequent groups of `MaxResults` namespaces do contain namespaces that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A complex type that lets you select the operations that you want to list.
 *
 * @public
 */
export interface OperationFilter {
  /**
   * Specify the operations that you want to get:
   *
   * - **NAMESPACE_ID**: Gets operations related to specified namespaces.
   * - **SERVICE_ID**: Gets operations related to specified services.
   * - **STATUS**: Gets operations based on the status of the operations: `SUBMITTED`, `PENDING`, `SUCCEED`, or `FAIL`.
   * - **TYPE**: Gets specified types of operation.
   * - **UPDATE_DATE**: Gets operations that changed status during a specified date/time range.
   *
   * @public
   */
  Name: OperationFilterName | undefined;

  /**
   * Specify values that are applicable to the value that you specify for `Name`:
   *
   * - **NAMESPACE_ID**: Specify one namespace ID.
   * - **SERVICE_ID**: Specify one service ID.
   * - **STATUS**: Specify one or more statuses: `SUBMITTED`, `PENDING`, `SUCCEED`, or `FAIL`.
   * - **TYPE**: Specify one or more of the following types: `CREATE_NAMESPACE`, `DELETE_NAMESPACE`, `UPDATE_SERVICE`, `REGISTER_INSTANCE`, or `DEREGISTER_INSTANCE`.
   * - **UPDATE_DATE**: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator that you want to use to determine whether an operation matches the specified value. Valid values for condition include:
   *
   * - `EQ`: When you specify `EQ` for the condition, you can specify only one value. `EQ` is supported for `NAMESPACE_ID`, `SERVICE_ID`, `STATUS`, and `TYPE`. `EQ` is the default condition and can be omitted.
   * - `IN`: When you specify `IN` for the condition, you can specify a list of one or more values. `IN` is supported for `STATUS` and `TYPE`. An operation must match one of the specified values to be returned in the response.
   * - `BETWEEN`: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value. `BETWEEN` is supported for `UPDATE_DATE`.
   *
   * @public
   */
  Condition?: FilterCondition | undefined;
}

/**
 * @public
 */
export interface ListOperationsRequest {
  /**
   * For the first `ListOperations` request, omit this value.
   *
   * If the response contains `NextToken`, submit another `ListOperations` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` operations and then filters them based on the specified criteria. It's possible that no operations in the first `MaxResults` operations matched the specified criteria but that subsequent groups of `MaxResults` operations do contain operations that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items that you want Cloud Map to return in the response to a `ListOperations` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 operations.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A complex type that contains specifications for the operations that you want to list, for example, operations that you started between a specified start date and end date.
   *
   * If you specify more than one filter, an operation must match all filters to be returned by `ListOperations`.
   *
   * @public
   */
  Filters?: OperationFilter[] | undefined;
}

/**
 * A complex type that contains information about an operation that matches the criteria that you specified in a [ListOperations](https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html) request.
 *
 * @public
 */
export interface OperationSummary {
  /**
   * The ID for an operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of the operation. Values include the following:
   *
   * - **SUBMITTED**: This is the initial state immediately after you submit a request.
   * - **PENDING**: Cloud Map is performing the operation.
   * - **SUCCESS**: The operation succeeded.
   * - **FAIL**: The operation failed. For the failure reason, see `ErrorMessage`.
   *
   * @public
   */
  Status?: OperationStatus | undefined;
}

/**
 * @public
 */
export interface ListOperationsResponse {
  /**
   * Summary information about the operations that match the specified criteria.
   *
   * @public
   */
  Operations?: OperationSummary[] | undefined;

  /**
   * If the response contains `NextToken`, submit another `ListOperations` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` operations and then filters them based on the specified criteria. It's possible that no operations in the first `MaxResults` operations matched the specified criteria but that subsequent groups of `MaxResults` operations do contain operations that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A complex type that lets you specify the namespaces that you want to list services for.
 *
 * @public
 */
export interface ServiceFilter {
  /**
   * Specify the services that you want to get using one of the following.
   *
   * - `NAMESPACE_ID`: Gets the services associated with the specified namespace.
   * - `RESOURCE_OWNER`: Gets the services associated with the namespaces created by your Amazon Web Services account or by other accounts. This can be used to filter for services created in a shared namespace. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  Name: ServiceFilterName | undefined;

  /**
   * The values that are applicable to the value that you specify for `Condition` to filter the list of services.
   *
   * - **NAMESPACE_ID**: Specify one namespace ID or ARN. Specify the namespace ARN for namespaces that are shared with your Amazon Web Services account.
   * - **RESOURCE_OWNER**: Specify one of `SELF` or `OTHER_ACCOUNTS`. `SELF` can be used to filter services associated with namespaces created by you and `OTHER_ACCOUNTS` can be used to filter services associated with namespaces that were shared with you.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator that you want to use to determine whether a service is returned by `ListServices`. Valid values for `Condition` include the following:
   *
   * - `EQ`: When you specify `EQ`, specify one value. `EQ` is the default condition and can be omitted.
   *
   * @public
   */
  Condition?: FilterCondition | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * For the first `ListServices` request, omit this value.
   *
   * If the response contains `NextToken`, submit another `ListServices` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` services and then filters them based on the specified criteria. It's possible that no services in the first `MaxResults` services matched the specified criteria but that subsequent groups of `MaxResults` services do contain services that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of services that you want Cloud Map to return in the response to a `ListServices` request. If you don't specify a value for `MaxResults`, Cloud Map returns up to 100 services.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A complex type that contains specifications for the namespaces that you want to list services for.
   *
   * If you specify more than one filter, an operation must match all filters to be returned by `ListServices`.
   *
   * @public
   */
  Filters?: ServiceFilter[] | undefined;
}

/**
 * A complex type that contains information about a specified service.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * The ID that Cloud Map assigned to the service when you created it.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that Cloud Map assigns to the service when you create it.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the namespace with which the service is associated. If this isn't your account ID, it is the ID of the account that shared the namespace with your account. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the systems that can be used to discover the service instances.
   *
   * - **DNS_HTTP**
   *
   *   The service instances can be discovered using either DNS queries or the `DiscoverInstances` API operation.
   *
   * - **HTTP**
   *
   *   The service instances can only be discovered using the `DiscoverInstances` API operation.
   *
   * - **DNS**
   *
   *   Reserved.
   *
   * @public
   */
  Type?: ServiceType | undefined;

  /**
   * The description that you specify when you create the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of instances that are currently associated with the service. Instances that were previously associated with the service but that are deleted aren't included in the count. The count might not reflect pending registrations and deregistrations.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * Information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
   *
   * @public
   */
  DnsConfig?: DnsConfig | undefined;

  /**
   * *Public DNS and HTTP namespaces only.* Settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in `DnsConfig`.
   *
   * @public
   */
  HealthCheckConfig?: HealthCheckConfig | undefined;

  /**
   * Information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:
   *
   * - You can't use a health check that's defined by `HealthCheckConfig` because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)
   * - You want to use a third-party health checker regardless of where your resources are located.
   *
   * > **Important:** If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
   *
   * @public
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig | undefined;

  /**
   * The date and time that the service was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The ID of the Amazon Web Services account that created the service. If this isn't your account ID, it is the account ID of the namespace owner or of another account with which the namespace has been shared. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  CreatedByAccount?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * An array that contains one `ServiceSummary` object for each service that matches the specified filter criteria.
   *
   * @public
   */
  Services?: ServiceSummary[] | undefined;

  /**
   * If the response contains `NextToken`, submit another `ListServices` request to get the next group of results. Specify the value of `NextToken` from the previous response in the next request.
   *
   * > **Note:** Cloud Map gets `MaxResults` services and then filters them based on the specified criteria. It's possible that no services in the first `MaxResults` services matched the specified criteria but that subsequent groups of `MaxResults` services do contain services that match the criteria.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Updated Start of Authority (SOA) properties for a public or private DNS namespace.
 *
 * @public
 */
export interface SOAChange {
  /**
   * The updated time to live (TTL) for purposes of negative caching.
   *
   * @public
   */
  TTL: number | undefined;
}

/**
 * Updated DNS properties for the private DNS namespace.
 *
 * @public
 */
export interface PrivateDnsPropertiesMutableChange {
  /**
   * Updated fields for the Start of Authority (SOA) record for the hosted zone for the private DNS namespace.
   *
   * @public
   */
  SOA: SOAChange | undefined;
}

/**
 * Updated properties for the private DNS namespace.
 *
 * @public
 */
export interface PrivateDnsNamespacePropertiesChange {
  /**
   * Updated DNS properties for the private DNS namespace.
   *
   * @public
   */
  DnsProperties: PrivateDnsPropertiesMutableChange | undefined;
}

/**
 * Updated properties for the private DNS namespace.
 *
 * @public
 */
export interface PrivateDnsNamespaceChange {
  /**
   * An updated description for the private DNS namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Properties to be updated in the private DNS namespace.
   *
   * @public
   */
  Properties?: PrivateDnsNamespacePropertiesChange | undefined;
}

/**
 * Updated DNS properties for the public DNS namespace.
 *
 * @public
 */
export interface PublicDnsPropertiesMutableChange {
  /**
   * Updated fields for the Start of Authority (SOA) record for the hosted zone for the public DNS namespace.
   *
   * @public
   */
  SOA: SOAChange | undefined;
}

/**
 * Updated properties for the public DNS namespace.
 *
 * @public
 */
export interface PublicDnsNamespacePropertiesChange {
  /**
   * Updated DNS properties for the hosted zone for the public DNS namespace.
   *
   * @public
   */
  DnsProperties: PublicDnsPropertiesMutableChange | undefined;
}

/**
 * Updated properties for the public DNS namespace.
 *
 * @public
 */
export interface PublicDnsNamespaceChange {
  /**
   * An updated description for the public DNS namespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Properties to be updated in the public DNS namespace.
   *
   * @public
   */
  Properties?: PublicDnsNamespacePropertiesChange | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to use for settings for the instance. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * An identifier that you want to associate with the instance. Note the following:
   *
   * - If the service that's specified by `ServiceId` includes settings for an `SRV` record, the value of `InstanceId` is automatically included as part of the value for the `SRV` record. For more information, see [DnsRecord > Type](https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type).
   * - You can use this value to update an existing instance.
   * - To register a new instance, you must specify a value that's unique among instances that you register by using the same service.
   * - If you specify an existing `InstanceId` and `ServiceId`, Cloud Map updates the existing DNS records, if any. If there's also an existing health check, Cloud Map deletes the old health check and creates a new one.
   *
   *   > **Note:** The health check isn't deleted immediately, so it will still appear for a while if you submit a `ListHealthChecks` request, for example.
   *
   * > **Note:** Do not include sensitive information in `InstanceId` if the namespace is discoverable by public DNS queries and any `Type` member of `DnsRecord` for the service contains `SRV` because the `InstanceId` is discoverable by public DNS queries.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `RegisterInstance` requests to be retried without the risk of executing the operation twice. You must use a unique `CreatorRequestId` string every time you submit a `RegisterInstance` request if you're registering additional instances for the same namespace and service. `CreatorRequestId` can be any unique string (for example, a date/time stamp).
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A string map that contains the following information for the service that you specify in `ServiceId`:
   *
   * - The attributes that apply to the records that are defined in the service.
   * - For each attribute, the applicable value.
   *
   * > **Important:** Do not include sensitive information in the attributes if the namespace is discoverable by public DNS queries.
   *
   * The following are the supported attribute keys.
   *
   * - **AWS_ALIAS_DNS_NAME**
   *
   *   If you want Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that's associated with the load balancer. For information about how to get the DNS name, see "DNSName" in the topic [AliasTarget](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) in the *Route 53 API Reference*.
   *
   *   Note the following:
   *
   *   - The configuration for the service that's specified by `ServiceId` must include settings for an `A` record, an `AAAA` record, or both.
   *   - In the service that's specified by `ServiceId`, the value of `RoutingPolicy` must be `WEIGHTED`.
   *   - If the service that's specified by `ServiceId` includes `HealthCheckConfig` settings, Cloud Map will create the Route 53 health check, but it doesn't associate the health check with the alias record.
   *   - Cloud Map currently doesn't support creating alias records that route traffic to Amazon Web Services resources other than Elastic Load Balancing load balancers.
   *   - If you specify a value for `AWS_ALIAS_DNS_NAME`, don't specify values for any of the `AWS_INSTANCE` attributes.
   *   - The `AWS_ALIAS_DNS_NAME` is not supported in the GovCloud (US) Regions.
   *
   * - **AWS_EC2_INSTANCE_ID**
   *
   *   *HTTP namespaces only.* The Amazon EC2 instance ID for the instance. If the `AWS_EC2_INSTANCE_ID` attribute is specified, then the only other attribute that can be specified is `AWS_INIT_HEALTH_STATUS`. When the `AWS_EC2_INSTANCE_ID` attribute is specified, then the `AWS_INSTANCE_IPV4` attribute will be filled out with the primary private IPv4 address.
   *
   * - **AWS_INIT_HEALTH_STATUS**
   *
   *   If the service configuration includes `HealthCheckCustomConfig`, you can optionally use `AWS_INIT_HEALTH_STATUS` to specify the initial status of the custom health check, `HEALTHY` or `UNHEALTHY`. If you don't specify a value for `AWS_INIT_HEALTH_STATUS`, the initial status is `HEALTHY`.
   *
   * - **AWS_INSTANCE_CNAME**
   *
   *   If the service configuration includes a `CNAME` record, the domain name that you want Route 53 to return in response to DNS queries (for example, `example.com`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `CNAME` record.
   *
   * - **AWS_INSTANCE_IPV4**
   *
   *   If the service configuration includes an `A` record, the IPv4 address that you want Route 53 to return in response to DNS queries (for example, `192.0.2.44`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `A` record. If the service includes settings for an `SRV` record, you must specify a value for `AWS_INSTANCE_IPV4`, `AWS_INSTANCE_IPV6`, or both.
   *
   * - **AWS_INSTANCE_IPV6**
   *
   *   If the service configuration includes an `AAAA` record, the IPv6 address that you want Route 53 to return in response to DNS queries (for example, `2001:0db8:85a3:0000:0000:abcd:0001:2345`).
   *
   *   This value is required if the service specified by `ServiceId` includes settings for an `AAAA` record. If the service includes settings for an `SRV` record, you must specify a value for `AWS_INSTANCE_IPV4`, `AWS_INSTANCE_IPV6`, or both.
   *
   * - **AWS_INSTANCE_PORT**
   *
   *   If the service includes an `SRV` record, the value that you want Route 53 to return for the port.
   *
   *   If the service includes `HealthCheckConfig`, the port on the endpoint that you want Route 53 to send requests to.
   *
   *   This value is required if you specified settings for an `SRV` record or a Route 53 health check when you created the service.
   *
   * - **Custom attributes**
   *
   *   You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name is 255 characters, and the maximum length of the attribute value is 1,024 characters. The total size of all provided attributes (sum of all keys and values) must not exceed 5,000 characters.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags to add to the specified resource. Specifying the tag key is required. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag keys to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateHttpNamespaceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the namespace that you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `UpdateHttpNamespace` requests to be retried without the risk of running the operation twice. `UpdaterRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  UpdaterRequestId?: string | undefined;

  /**
   * Updated properties for the the HTTP namespace.
   *
   * @public
   */
  Namespace: HttpNamespaceChange | undefined;
}

/**
 * @public
 */
export interface UpdateHttpNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceCustomHealthStatusRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that includes the configuration for the custom health check that you want to change the status for. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The ID of the instance that you want to change the health status for.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The new status of the instance, `HEALTHY` or `UNHEALTHY`.
   *
   * @public
   */
  Status: CustomHealthStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePrivateDnsNamespaceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the namespace that you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `UpdatePrivateDnsNamespace` requests to be retried without the risk of running the operation twice. `UpdaterRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  UpdaterRequestId?: string | undefined;

  /**
   * Updated properties for the private DNS namespace.
   *
   * @public
   */
  Namespace: PrivateDnsNamespaceChange | undefined;
}

/**
 * @public
 */
export interface UpdatePrivateDnsNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicDnsNamespaceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the namespace being updated.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed `UpdatePublicDnsNamespace` requests to be retried without the risk of running the operation twice. `UpdaterRequestId` can be any unique string (for example, a date/timestamp).
   *
   * @public
   */
  UpdaterRequestId?: string | undefined;

  /**
   * Updated properties for the public DNS namespace.
   *
   * @public
   */
  Namespace: PublicDnsNamespaceChange | undefined;
}

/**
 * @public
 */
export interface UpdatePublicDnsNamespaceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * A complex type that contains changes to an existing service.
 *
 * @public
 */
export interface ServiceChange {
  /**
   * A description for the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
   *
   * @public
   */
  DnsConfig?: DnsConfigChange | undefined;

  /**
   * *Public DNS and HTTP namespaces only.* Settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in `DnsConfig`.
   *
   * @public
   */
  HealthCheckConfig?: HealthCheckConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to update. If the namespace associated with the service is shared with your Amazon Web Services account, specify the service ARN. For more information about shared namespaces, see [Cross-account Cloud Map namespace sharing](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html) in the *Cloud Map Developer Guide*
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A complex type that contains the new settings for the service. You can specify a maximum of 30 attributes (key-value pairs).
   *
   * @public
   */
  Service: ServiceChange | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * A value that you can use to determine whether the request completed successfully. To get the status of the operation, see [GetOperation](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceAttributesRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the service that you want to update. For services created in a namespace shared with your Amazon Web Services account, specify the service ARN.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * A string map that contains attribute key-value pairs.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateServiceAttributesResponse {}
