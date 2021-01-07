import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A custom key-value pair associated with a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The string value associated with the key of the tag. You can set the value of a tag to an empty string, but you
   *    can't set the value of a tag to null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateHttpNamespaceRequest {
  /**
   * <p>The name that you want to assign to this namespace.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateHttpNamespace</code> requests to
   *    be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string,
   *    for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The tags to add to the namespace. Each tag consists of a key and an optional value, both of which you define.
   *    Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum
   *                      length of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHttpNamespaceRequest {
  export const filterSensitiveLog = (obj: CreateHttpNamespaceRequest): any => ({
    ...obj,
  });
}

export interface CreateHttpNamespaceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreateHttpNamespaceResponse {
  export const filterSensitiveLog = (obj: CreateHttpNamespaceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation is already in progress.</p>
 */
export interface DuplicateRequest extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequest";
  $fault: "client";
  Message?: string;
  /**
   * <p>The ID of the operation that is already in progress.</p>
   */
  DuplicateOperationId?: string;
}

export namespace DuplicateRequest {
  export const filterSensitiveLog = (obj: DuplicateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might
 *    be outside the allowed range, or a string value might exceed length constraints.</p>
 */
export interface InvalidInput extends __SmithyException, $MetadataBearer {
  name: "InvalidInput";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInput {
  export const filterSensitiveLog = (obj: InvalidInput): any => ({
    ...obj,
  });
}

/**
 * <p>The namespace that you're trying to create already exists.</p>
 */
export interface NamespaceAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "NamespaceAlreadyExists";
  $fault: "client";
  Message?: string;
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the namespace.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ID of the existing namespace.</p>
   */
  NamespaceId?: string;
}

export namespace NamespaceAlreadyExists {
  export const filterSensitiveLog = (obj: NamespaceAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The resource can't be created because you've reached the quota on the number of resources.</p>
 */
export interface ResourceLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceeded {
  export const filterSensitiveLog = (obj: ResourceLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The list of tags on the resource is over the quota. The maximum number of tags that can be applied to a resource
 *    is 50.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface CreatePrivateDnsNamespaceRequest {
  /**
   * <p>The name that you want to assign to this namespace. When you create a private DNS namespace, AWS Cloud Map
   *    automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreatePrivateDnsNamespace</code>
   *    requests to be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any
   *    unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Amazon VPC that you want to associate the namespace with.</p>
   */
  Vpc: string | undefined;

  /**
   * <p>The tags to add to the namespace. Each tag consists of a key and an optional value, both of which you define.
   *    Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum
   *                      length of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreatePrivateDnsNamespaceRequest {
  export const filterSensitiveLog = (obj: CreatePrivateDnsNamespaceRequest): any => ({
    ...obj,
  });
}

export interface CreatePrivateDnsNamespaceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreatePrivateDnsNamespaceResponse {
  export const filterSensitiveLog = (obj: CreatePrivateDnsNamespaceResponse): any => ({
    ...obj,
  });
}

export interface CreatePublicDnsNamespaceRequest {
  /**
   * <p>The name that you want to assign to this namespace.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreatePublicDnsNamespace</code>
   *    requests to be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any
   *    unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The tags to add to the namespace. Each tag consists of a key and an optional value, both of which you define.
   *    Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum
   *                      length of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreatePublicDnsNamespaceRequest {
  export const filterSensitiveLog = (obj: CreatePublicDnsNamespaceRequest): any => ({
    ...obj,
  });
}

export interface CreatePublicDnsNamespaceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace CreatePublicDnsNamespaceResponse {
  export const filterSensitiveLog = (obj: CreatePublicDnsNamespaceResponse): any => ({
    ...obj,
  });
}

export enum RecordType {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  SRV = "SRV",
}

/**
 * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you
 *    register an instance.</p>
 */
export interface DnsRecord {
  /**
   * <p>The type of the resource, which indicates the type of value that Route 53 returns in response to DNS queries. You
   *    can specify values for <code>Type</code> in the following combinations:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>A</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AAAA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>A</code> and <code>AAAA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SRV</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CNAME</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you want AWS Cloud Map to create a Route 53 alias record when you register an instance, specify <code>A</code> or
   *     <code>AAAA</code> for <code>Type</code>.</p>
   *          <p>You specify other settings, such as the IP address for <code>A</code> and <code>AAAA</code> records, when you
   *    register an instance. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a>.</p>
   *          <p>The following values are supported:</p>
   *          <p>
   *             <code>A</code>
   *             <b>
   *                <code></code>
   *             </b>
   *          </p>
   *          <p>Route 53 returns the IP address of the resource in IPv4 format, such as 192.0.2.44.</p>
   *          <p>
   *             <code>AAAA</code>
   *             <b>
   *                <code></code>
   *             </b>
   *          </p>
   *          <p>Route 53 returns the IP address of the resource in IPv6 format, such as
   *    2001:0db8:85a3:0000:0000:abcd:0001:2345.</p>
   *          <p>
   *             <code>CNAME</code>
   *             <b>
   *                <code></code>
   *             </b>
   *          </p>
   *          <p>Route 53 returns the domain name of the resource, such as www.example.com. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You specify the domain name that you want to route traffic to when you register an instance. For more
   *      information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#cloudmap-RegisterInstance-request-Attributes">Attributes</a> in the topic <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a>.</p>
   *             </li>
   *             <li>
   *                <p>You must specify <code>WEIGHTED</code> for the value of <code>RoutingPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>You can't specify both <code>CNAME</code> for <code>Type</code> and settings for
   *       <code>HealthCheckConfig</code>. If you do, the request will fail with an <code>InvalidInput</code> error.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SRV</b>
   *          </p>
   *          <p>Route 53 returns the value for an <code>SRV</code> record. The value for an <code>SRV</code> record uses the
   *    following values:</p>
   *          <p>
   *             <code>priority weight port service-hostname</code>
   *          </p>
   *          <p>Note the following about the values:</p>
   *          <ul>
   *             <li>
   *                <p>The values of <code>priority</code> and <code>weight</code> are both set to <code>1</code> and can't be
   *      changed. </p>
   *             </li>
   *             <li>
   *                <p>The value of <code>port</code> comes from the value that you specify for the <code>AWS_INSTANCE_PORT</code>
   *      attribute when you submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request. </p>
   *             </li>
   *             <li>
   *                <p>The value of <code>service-hostname</code> is a concatenation of the following values:</p>
   *                <ul>
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
   *                <p>For example, if the value of <code>InstanceId</code> is <code>test</code>, the name of the service is
   *       <code>backend</code>, and the name of the namespace is <code>example.com</code>, the value of
   *       <code>service-hostname</code> is:</p>
   *                <p>
   *                   <code>test.backend.example.com</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you specify settings for an <code>SRV</code> record, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify values for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both in the
   *       <code>RegisterInstance</code> request, AWS Cloud Map automatically creates <code>A</code> and/or <code>AAAA</code>
   *      records that have the same name as the value of <code>service-hostname</code> in the <code>SRV</code> record. You
   *      can ignore these records.</p>
   *             </li>
   *             <li>
   *                <p>If you're using a system that requires a specific <code>SRV</code> format, such as HAProxy, see the <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html#cloudmap-CreateService-request-Name">Name</a> element in the documentation about <code>CreateService</code> for information about how to specify
   *      the correct name format.</p>
   *             </li>
   *          </ul>
   */
  Type: RecordType | string | undefined;

  /**
   * <p>The amount of time, in seconds, that you want DNS resolvers to cache the settings for this record.</p>
   *          <note>
   *             <p>Alias records don't include a TTL because Route 53 uses the TTL for the AWS resource that an alias record routes
   *     traffic to. If you include the <code>AWS_ALIAS_DNS_NAME</code> attribute when you submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, the
   *      <code>TTL</code> value is ignored. Always specify a TTL for the service; you can use a service to register
   *     instances that create either alias or non-alias records.</p>
   *          </note>
   */
  TTL: number | undefined;
}

export namespace DnsRecord {
  export const filterSensitiveLog = (obj: DnsRecord): any => ({
    ...obj,
  });
}

export enum RoutingPolicy {
  MULTIVALUE = "MULTIVALUE",
  WEIGHTED = "WEIGHTED",
}

/**
 * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when
 *    you register an instance.</p>
 */
export interface DnsConfig {
  /**
   * @deprecated
   *
   * <p>The ID of the namespace to use for DNS configuration.</p>
   */
  NamespaceId?: string;

  /**
   * <p>The routing policy that you want to apply to all Route 53 DNS records that AWS Cloud Map creates when you register an
   *    instance and specify this service.</p>
   *          <note>
   *             <p>If you want to use this service to register instances that create alias records, specify <code>WEIGHTED</code>
   *     for the routing policy.</p>
   *          </note>
   *          <p>You can specify the following values:</p>
   *          <p>
   *             <b>MULTIVALUE</b>
   *          </p>
   *          <p>If you define a health check for the service and the health check is healthy, Route 53 returns the applicable value
   *    for up to eight instances.</p>
   *          <p>For example, suppose the service includes configurations for one <code>A</code> record and a health check, and
   *    you use the service to register 10 instances. Route 53 responds to DNS queries with IP addresses for up to eight healthy
   *    instances. If fewer than eight instances are healthy, Route 53 responds to every DNS query with the IP addresses for all
   *    of the healthy instances.</p>
   *          <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the
   *    values for up to eight instances.</p>
   *          <p>For more information about the multivalue routing policy, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue">Multivalue Answer Routing</a>
   *    in the <i>Route 53 Developer Guide</i>.</p>
   *          <p>
   *             <b>WEIGHTED</b>
   *          </p>
   *          <p>Route 53 returns the applicable value from one randomly selected instance from among the instances that you
   *    registered using the same service. Currently, all records have the same weight, so you can't route more or less
   *    traffic to any instances.</p>
   *          <p>For example, suppose the service includes configurations for one <code>A</code> record and a health check, and
   *    you use the service to register 10 instances. Route 53 responds to DNS queries with the IP address for one randomly
   *    selected instance from among the healthy instances. If no instances are healthy, Route 53 responds to DNS queries as if
   *    all of the instances were healthy.</p>
   *          <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the
   *    applicable value for one randomly selected instance.</p>
   *          <p>For more information about the weighted routing policy, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted">Weighted Routing</a> in the
   *     <i>Route 53 Developer Guide</i>.</p>
   */
  RoutingPolicy?: RoutingPolicy | string;

  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 DNS record that you want AWS Cloud Map to
   *    create when you register an instance.</p>
   */
  DnsRecords: DnsRecord[] | undefined;
}

export namespace DnsConfig {
  export const filterSensitiveLog = (obj: DnsConfig): any => ({
    ...obj,
  });
}

export enum HealthCheckType {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}

/**
 * <p>
 *             <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional
 *    health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records
 *    that you specify in <code>DnsConfig</code>.</p>
 *          <important>
 *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
 *      <code>HealthCheckConfig</code> but not both.</p>
 *          </important>
 *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
 *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *          <p>Note the following about configuring health checks.</p>
 *          <p>
 *             <b>
 *                <code>A</code> and <code>AAAA</code> records</b>
 *          </p>
 *          <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records,
 *    AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint
 *    that is specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code>
 *    records to be unhealthy. </p>
 *          <p>
 *             <b>
 *                <code>CNAME</code> records</b>
 *          </p>
 *          <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes
 *     <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail
 *    with an <code>InvalidInput</code> error.</p>
 *          <p>
 *             <b>Request interval</b>
 *          </p>
 *          <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30
 *    seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers
 *    don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with
 *    no health checks at all.</p>
 *          <p>
 *             <b>Health checking regions</b>
 *          </p>
 *          <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
 *     <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
 *          <p>
 *             <b>Alias records</b>
 *          </p>
 *          <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates
 *    a Route 53 alias record. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When
 *       <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
 *      such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an
 *      alias record, Route 53 doesn't create the health check.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Charges for health checks</b>
 *          </p>
 *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
 *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 */
export interface HealthCheckConfig {
  /**
   * <p>The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is
   *    healthy.</p>
   *          <important>
   *             <p>You can't change the value of <code>Type</code> after you create a health check.</p>
   *          </important>
   *          <p>You can create the following types of health checks:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits
   *      an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53
   *      submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.</p>
   *                <important>
   *                   <p>If you specify HTTPS for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TCP</b>: Route 53 tries to establish a TCP connection.</p>
   *                <p>If you specify <code>TCP</code> for <code>Type</code>, don't specify a value for
   *      <code>ResourcePath</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether
   *     an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.</p>
   */
  Type: HealthCheckType | string | undefined;

  /**
   * <p>The path that you want Route 53 to request when performing health checks. The path can be any value for which your
   *    endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, such as the file
   *     <code>/docs/route53-health-check.html</code>. Route 53 automatically adds the DNS name for the service. If you don't
   *    specify a value for <code>ResourcePath</code>, the default value is <code>/</code>.</p>
   *          <p>If you specify <code>TCP</code> for <code>Type</code>, you must <i>not</i> specify a value for
   *     <code>ResourcePath</code>.</p>
   */
  ResourcePath?: string;

  /**
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current
   *    status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53 Determines Whether
   *     an Endpoint Is Healthy</a> in the <i>Route 53 Developer Guide</i>.</p>
   */
  FailureThreshold?: number;
}

export namespace HealthCheckConfig {
  export const filterSensitiveLog = (obj: HealthCheckConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about an optional custom health check. A custom health check, which
 *    requires that you use a third-party health checker to evaluate the health of your resources, is useful in the
 *    following circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't
 *      available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC.
 *      (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p>
 *             </li>
 *             <li>
 *                <p>You want to use a third-party health checker regardless of where your resources are.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
 *      <code>HealthCheckConfig</code> but not both.</p>
 *          </important>
 *          <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request.
 *    AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent
 *     <code>UpdateInstanceCustomHealthStatus</code> request.</p>
 *          <p>Here's how custom health checks work:</p>
 *          <ol>
 *             <li>
 *                <p>You create a service and specify a value for <code>FailureThreshold</code>. </p>
 *                <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time
 *      that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a>
 *      request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p>
 *             </li>
 *             <li>
 *                <p>You register an instance.</p>
 *             </li>
 *             <li>
 *                <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p>
 *                <note>
 *                   <p>AWS Cloud Map doesn't check the health of the resource directly. </p>
 *                </note>
 *             </li>
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
 *                <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the
 *      status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p>
 *             </li>
 *          </ol>
 */
export interface HealthCheckCustomConfig {
  /**
   * <important>
   *             <p>This parameter has been deprecated and is always set to 1. AWS Cloud Map waits for approximately 30 seconds
   *                 after receiving an <code>UpdateInstanceCustomHealthStatus</code> request before changing the status of
   *                 the service instance.</p>
   *         </important>
   *
   *         <p>The number of 30-second intervals that you want AWS Cloud Map to wait after receiving an
   *                 <code>UpdateInstanceCustomHealthStatus</code> request before it changes the health status of a service
   *             instance.</p>
   *         <p>Sending a second or subsequent <code>UpdateInstanceCustomHealthStatus</code> request with the same value
   *             before 30 seconds has passed doesn't accelerate the change. AWS Cloud Map still waits
   *     <code>30</code> seconds after the first request to make the change.</p>
   */
  FailureThreshold?: number;
}

export namespace HealthCheckCustomConfig {
  export const filterSensitiveLog = (obj: HealthCheckCustomConfig): any => ({
    ...obj,
  });
}

export interface CreateServiceRequest {
  /**
   * <p>The name that you want to assign to the service.</p>
   *          <p>If you want AWS Cloud Map to create an <code>SRV</code> record when you register an instance, and if you're using a
   *    system that requires a specific <code>SRV</code> format, such as <a href="http://www.haproxy.org/">HAProxy</a>, specify the following for <code>Name</code>:</p>
   *          <ul>
   *             <li>
   *                <p>Start the name with an underscore (_), such as <code>_exampleservice</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>End the name with <i>._protocol</i>, such as <code>._tcp</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>When you register an instance, AWS Cloud Map creates an <code>SRV</code> record and assigns a name to the record by
   *    concatenating the service name and the namespace name, for example:</p>
   *          <p>
   *             <code>_exampleservice._tcp.example.com</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the namespace that you want to use to create the service.</p>
   */
  NamespaceId?: string;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateService</code> requests to be
   *    retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string,
   *    for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 records that you want AWS Cloud Map to create when you
   *    register an instance. </p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional
   *    Route 53 health check. If you specify settings for a health check, AWS Cloud Map associates the health check with all the
   *    Route 53 DNS records that you specify in <code>DnsConfig</code>.</p>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *          <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/cloud-map/pricing/">AWS Cloud Map Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *          <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration from an existing
   *    service.</p>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The tags to add to the service. Each tag consists of a key and an optional value, both of which you define.
   *    Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum
   *                      length of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreateServiceRequest {
  export const filterSensitiveLog = (obj: CreateServiceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the specified service.</p>
 */
export interface Service {
  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the namespace that was used to create the service.</p>
   */
  NamespaceId?: string;

  /**
   * <p>The description of the service.</p>
   */
  Description?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously
   *    associated with the service but that have been deleted are not included in the count. The count might not reflect
   *    pending registrations and deregistrations.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you
   *    register an instance.</p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional
   *    health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records
   *    that you specify in <code>DnsConfig</code>.</p>
   *          <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value
   *    of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents
   *    Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of
   *    executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time
   *    stamp.</p>
   */
  CreatorRequestId?: string;
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
}

export interface CreateServiceResponse {
  /**
   * <p>A complex type that contains information about the new service.</p>
   */
  Service?: Service;
}

export namespace CreateServiceResponse {
  export const filterSensitiveLog = (obj: CreateServiceResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: NamespaceNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>The service can't be created because a service with the same name already exists.</p>
 */
export interface ServiceAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "ServiceAlreadyExists";
  $fault: "client";
  Message?: string;
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the service.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ID of the existing service.</p>
   */
  ServiceId?: string;
}

export namespace ServiceAlreadyExists {
  export const filterSensitiveLog = (obj: ServiceAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The health check for the instance that is specified by <code>ServiceId</code> and <code>InstanceId</code> is not
 *    a custom health check. </p>
 */
export interface CustomHealthNotFound extends __SmithyException, $MetadataBearer {
  name: "CustomHealthNotFound";
  $fault: "client";
  Message?: string;
}

export namespace CustomHealthNotFound {
  export const filterSensitiveLog = (obj: CustomHealthNotFound): any => ({
    ...obj,
  });
}

export enum CustomHealthStatus {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
}

export interface DeleteNamespaceRequest {
  /**
   * <p>The ID of the namespace that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteNamespaceRequest {
  export const filterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace DeleteNamespaceResponse {
  export const filterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a
 *    service that contains any instances.</p>
 */
export interface ResourceInUse extends __SmithyException, $MetadataBearer {
  name: "ResourceInUse";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUse {
  export const filterSensitiveLog = (obj: ResourceInUse): any => ({
    ...obj,
  });
}

export interface DeleteServiceRequest {
  /**
   * <p>The ID of the service that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteServiceRequest {
  export const filterSensitiveLog = (obj: DeleteServiceRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceResponse {}

export namespace DeleteServiceResponse {
  export const filterSensitiveLog = (obj: DeleteServiceResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: ServiceNotFound): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceRequest {
  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The value that you specified for <code>Id</code> in the <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request.</p>
   */
  InstanceId: string | undefined;
}

export namespace DeregisterInstanceRequest {
  export const filterSensitiveLog = (obj: DeregisterInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. For more information, see
   *     <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace DeregisterInstanceResponse {
  export const filterSensitiveLog = (obj: DeregisterInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>No instance exists with the specified ID, or the instance was recently registered, and information about the
 *    instance hasn't propagated yet.</p>
 */
export interface InstanceNotFound extends __SmithyException, $MetadataBearer {
  name: "InstanceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace InstanceNotFound {
  export const filterSensitiveLog = (obj: InstanceNotFound): any => ({
    ...obj,
  });
}

export enum HealthStatusFilter {
  ALL = "ALL",
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
}

export interface DiscoverInstancesRequest {
  /**
   * <p>The name of the namespace that you specified when you registered the instance.</p>
   */
  NamespaceName: string | undefined;

  /**
   * <p>The name of the service that you specified when you registered the instance.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a
   *     <code>DiscoverInstances</code> request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up
   *    to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to scope the results based on custom attributes for the instance. For example, <code>{version=v1,
   *          az=1a}</code>. Only instances that match all the specified key-value pairs will be returned.</p>
   */
  QueryParameters?: { [key: string]: string };

  /**
   * <p>Opportunistic filters to scope the results based on custom attributes. If there are instances that match
   *          both the filters specified in both the <code>QueryParameters</code> parameter and this parameter, they are
   *          returned. Otherwise, these filters are ignored and only instances that match the filters specified in the
   *          <code>QueryParameters</code> parameter are returned.</p>
   */
  OptionalParameters?: { [key: string]: string };

  /**
   * <p>The health status of the instances that you want to discover.</p>
   */
  HealthStatus?: HealthStatusFilter | string;
}

export namespace DiscoverInstancesRequest {
  export const filterSensitiveLog = (obj: DiscoverInstancesRequest): any => ({
    ...obj,
  });
}

export enum HealthStatus {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that
 *    matches the values that you specified in the request.</p>
 */
export interface HttpInstanceSummary {
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

  /**
   * <p>If you configured health checking in the service, the current health status of the service instance.</p>
   */
  HealthStatus?: HealthStatus | string;

  /**
   * <p>If you included any attributes when you registered the instance, the values of those attributes.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace HttpInstanceSummary {
  export const filterSensitiveLog = (obj: HttpInstanceSummary): any => ({
    ...obj,
  });
}

export interface DiscoverInstancesResponse {
  /**
   * <p>A complex type that contains one <code>HttpInstanceSummary</code> for each registered instance.</p>
   */
  Instances?: HttpInstanceSummary[];
}

export namespace DiscoverInstancesResponse {
  export const filterSensitiveLog = (obj: DiscoverInstancesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation can't be completed because you've reached the quota for the number of requests. For more
 *    information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">AWS Cloud Map API request throttling
 *     quota</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 */
export interface RequestLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "RequestLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace RequestLimitExceeded {
  export const filterSensitiveLog = (obj: RequestLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you
 *    register an instance.</p>
 */
export interface DnsConfigChange {
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 record that you want AWS Cloud Map to
   *    create when you register an instance.</p>
   */
  DnsRecords: DnsRecord[] | undefined;
}

export namespace DnsConfigChange {
  export const filterSensitiveLog = (obj: DnsConfigChange): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a
 *    namespace.</p>
 */
export interface DnsProperties {
  /**
   * <p>The ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
   */
  HostedZoneId?: string;
}

export namespace DnsProperties {
  export const filterSensitiveLog = (obj: DnsProperties): any => ({
    ...obj,
  });
}

export enum FilterCondition {
  BETWEEN = "BETWEEN",
  EQ = "EQ",
  IN = "IN",
}

export interface GetInstanceRequest {
  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The ID of the instance that you want to get information about.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetInstanceRequest {
  export const filterSensitiveLog = (obj: GetInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about an instance that AWS Cloud Map creates when you submit a
 *     <code>RegisterInstance</code> request.</p>
 */
export interface Instance {
  /**
   * <p>An identifier that you want to associate with the instance. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes settings for an <code>SRV</code> record,
   *      the value of <code>InstanceId</code> is automatically included as part of the value for the <code>SRV</code>
   *      record. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type">DnsRecord > Type</a>.</p>
   *             </li>
   *             <li>
   *                <p>You can use this value to update an existing instance.</p>
   *             </li>
   *             <li>
   *                <p>To register a new instance, you must specify a value that is unique among instances that you register by using
   *      the same service. </p>
   *             </li>
   *             <li>
   *                <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, AWS Cloud Map updates the existing
   *      DNS records. If there's also an existing health check, AWS Cloud Map deletes the old health check and creates a new
   *      one. </p>
   *                <note>
   *                   <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a
   *        <code>ListHealthChecks</code> request, for example.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  Id: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be
   *    retried without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string
   *    every time you submit a <code>RegisterInstance</code> request if you're registering additional instances for the same
   *    namespace and service. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A string map that contains the following information for the service that you specify in
   *                 <code>ServiceId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>The attributes that apply to the records that are defined in the service. </p>
   *             </li>
   *             <li>
   *                 <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *         <p>Supported attribute keys include the following:</p>
   *         <p>
   *             <b>AWS_ALIAS_DNS_NAME</b>
   *          </p>
   *         <p>
   *             <b></b>
   *          </p>
   *         <p>If you want AWS Cloud Map to create a Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer,
   *             specify the DNS name that is associated with the load balancer. For information about how to get the DNS
   *             name, see "DNSName" in the topic <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html">AliasTarget</a>.</p>
   *         <p>Note the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The configuration for the service that is specified by <code>ServiceId</code> must include
   *                     settings for an <code>A</code> record, an <code>AAAA</code> record, or both.</p>
   *             </li>
   *             <li>
   *                 <p>In the service that is specified by <code>ServiceId</code>, the value of
   *                         <code>RoutingPolicy</code> must be <code>WEIGHTED</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If the service that is specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code>
   *                     settings, AWS Cloud Map will create the health check, but it won't associate the health check with the
   *                     alias record.</p>
   *             </li>
   *             <li>
   *                 <p>Auto naming currently doesn't support creating alias records that route traffic to AWS resources
   *                     other than ELB load balancers.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the
   *                         <code>AWS_INSTANCE</code> attributes.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>AWS_EC2_INSTANCE_ID</b>
   *          </p>
   *         <p>
   *             <i>HTTP namespaces only.</i> The Amazon EC2 instance ID for the instance. The
   *                 <code>AWS_INSTANCE_IPV4</code> attribute contains the primary private IPv4 address.</p>
   *
   *         <p>
   *             <b>AWS_INSTANCE_CNAME</b>
   *          </p>
   *         <p>If the service configuration includes a <code>CNAME</code> record, the domain name that you want Route 53 to
   *             return in response to DNS queries, for example, <code>example.com</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>CNAME</code> record.</p>
   *         <p>
   *             <b>AWS_INSTANCE_IPV4</b>
   *          </p>
   *         <p>If the service configuration includes an <code>A</code> record, the IPv4 address that you want Route 53 to
   *             return in response to DNS queries, for example, <code>192.0.2.44</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>A</code> record. If the service includes settings for an <code>SRV</code> record, you must specify
   *             a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p>
   *         <p>
   *             <b>AWS_INSTANCE_IPV6</b>
   *          </p>
   *         <p>If the service configuration includes an <code>AAAA</code> record, the IPv6 address that you want Route 53 to
   *             return in response to DNS queries, for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>AAAA</code> record. If the service includes settings for an <code>SRV</code> record, you must
   *             specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p>
   *         <p>
   *             <b>AWS_INSTANCE_PORT</b>
   *          </p>
   *         <p>If the service includes an <code>SRV</code> record, the value that you want Route 53 to return for the
   *             port.</p>
   *         <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to
   *             send requests to. </p>
   *         <p>This value is required if you specified settings for an <code>SRV</code> record or a Route 53 health check
   *             when you created the service.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

export interface GetInstanceResponse {
  /**
   * <p>A complex type that contains information about a specified instance.</p>
   */
  Instance?: Instance;
}

export namespace GetInstanceResponse {
  export const filterSensitiveLog = (obj: GetInstanceResponse): any => ({
    ...obj,
  });
}

export interface GetInstancesHealthStatusRequest {
  /**
   * <p>The ID of the service that the instance is associated with.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>An array that contains the IDs of all the instances that you want to get the health status for.</p>
   *          <p>If you omit <code>Instances</code>, AWS Cloud Map returns the health status for all the instances that are
   *    associated with the specified service.</p>
   *          <note>
   *             <p>To get the IDs for the instances that you've registered by using a specified service, submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html">ListInstances</a> request.</p>
   *          </note>
   */
  Instances?: string[];

  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a
   *     <code>GetInstancesHealthStatus</code> request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map
   *    returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>GetInstancesHealthStatus</code> request, omit this value.</p>
   *          <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another
   *     <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of
   *     <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;
}

export namespace GetInstancesHealthStatusRequest {
  export const filterSensitiveLog = (obj: GetInstancesHealthStatusRequest): any => ({
    ...obj,
  });
}

export interface GetInstancesHealthStatusResponse {
  /**
   * <p>A complex type that contains the IDs and the health status of the instances that you specified in the
   *     <code>GetInstancesHealthStatus</code> request.</p>
   */
  Status?: { [key: string]: HealthStatus | string };

  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another
   *     <code>GetInstancesHealthStatus</code> request to get the next group of results. Specify the value of
   *     <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;
}

export namespace GetInstancesHealthStatusResponse {
  export const filterSensitiveLog = (obj: GetInstancesHealthStatusResponse): any => ({
    ...obj,
  });
}

export interface GetNamespaceRequest {
  /**
   * <p>The ID of the namespace that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetNamespaceRequest {
  export const filterSensitiveLog = (obj: GetNamespaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the name of an HTTP namespace.</p>
 */
export interface HttpProperties {
  /**
   * <p>The name of an HTTP namespace.</p>
   */
  HttpName?: string;
}

export namespace HttpProperties {
  export const filterSensitiveLog = (obj: HttpProperties): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information that is specific to the namespace type.</p>
 */
export interface NamespaceProperties {
  /**
   * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a
   *    namespace.</p>
   */
  DnsProperties?: DnsProperties;

  /**
   * <p>A complex type that contains the name of an HTTP namespace.</p>
   */
  HttpProperties?: HttpProperties;
}

export namespace NamespaceProperties {
  export const filterSensitiveLog = (obj: NamespaceProperties): any => ({
    ...obj,
  });
}

export enum NamespaceType {
  DNS_PRIVATE = "DNS_PRIVATE",
  DNS_PUBLIC = "DNS_PUBLIC",
  HTTP = "HTTP",
}

/**
 * <p>A complex type that contains information about a specified namespace.</p>
 */
export interface Namespace {
  /**
   * <p>The ID of a namespace.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the namespace, such as <code>example.com</code>.</p>
   */
  Name?: string;

  /**
   * <p>The type of the namespace. The methods for discovering instances depends on the value that you specify:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HTTP</code>: Instances can be discovered only programmatically, using the AWS Cloud Map
   *       <code>DiscoverInstances</code> API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_PUBLIC</code>: Instances can be discovered using public DNS queries and using the
   *       <code>DiscoverInstances</code> API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_PRIVATE</code>: Instances can be discovered using DNS queries in VPCs and using the
   *       <code>DiscoverInstances</code> API.</p>
   *             </li>
   *          </ul>
   */
  Type?: NamespaceType | string;

  /**
   * <p>The description that you specify for the namespace when you create it.</p>
   */
  Description?: string;

  /**
   * <p>The number of services that are associated with the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>A complex type that contains information that's specific to the type of the namespace.</p>
   */
  Properties?: NamespaceProperties;

  /**
   * <p>The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The
   *    value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code>
   *    represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of
   *    executing an operation twice. </p>
   */
  CreatorRequestId?: string;
}

export namespace Namespace {
  export const filterSensitiveLog = (obj: Namespace): any => ({
    ...obj,
  });
}

export interface GetNamespaceResponse {
  /**
   * <p>A complex type that contains information about the specified namespace.</p>
   */
  Namespace?: Namespace;
}

export namespace GetNamespaceResponse {
  export const filterSensitiveLog = (obj: GetNamespaceResponse): any => ({
    ...obj,
  });
}

export interface GetOperationRequest {
  /**
   * <p>The ID of the operation that you want to get more information about.</p>
   */
  OperationId: string | undefined;
}

export namespace GetOperationRequest {
  export const filterSensitiveLog = (obj: GetOperationRequest): any => ({
    ...obj,
  });
}

export enum OperationStatus {
  FAIL = "FAIL",
  PENDING = "PENDING",
  SUBMITTED = "SUBMITTED",
  SUCCESS = "SUCCESS",
}

export enum OperationTargetType {
  INSTANCE = "INSTANCE",
  NAMESPACE = "NAMESPACE",
  SERVICE = "SERVICE",
}

export enum OperationType {
  CREATE_NAMESPACE = "CREATE_NAMESPACE",
  DELETE_NAMESPACE = "DELETE_NAMESPACE",
  DEREGISTER_INSTANCE = "DEREGISTER_INSTANCE",
  REGISTER_INSTANCE = "REGISTER_INSTANCE",
  UPDATE_SERVICE = "UPDATE_SERVICE",
}

/**
 * <p>A complex type that contains information about a specified operation.</p>
 */
export interface Operation {
  /**
   * <p>The ID of the operation that you want to get information about.</p>
   */
  Id?: string;

  /**
   * <p>The name of the operation that is associated with the specified ID.</p>
   */
  Type?: OperationType | string;

  /**
   * <p>The status of the operation. Values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SUBMITTED</b>: This is the initial state immediately after you submit a
   *      request.</p>
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
   *                   <b>FAIL</b>: The operation failed. For the failure reason, see
   *       <code>ErrorMessage</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: OperationStatus | string;

  /**
   * <p>If the value of <code>Status</code> is <code>FAIL</code>, the reason that the operation failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The code associated with <code>ErrorMessage</code>. Values for <code>ErrorCode</code> include the
   *    following:</p>
   *          <ul>
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
   * <p>The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC).
   *    The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code>
   *    represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the value of <code>Status</code> changed to the current value, in Unix date/time format
   *    and Coordinated Universal Time (UTC). The value of <code>UpdateDate</code> is accurate to milliseconds. For example,
   *    the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  UpdateDate?: Date;

  /**
   * <p>The name of the target entity that is associated with the operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NAMESPACE</b>: The namespace ID is returned in the <code>ResourceId</code>
   *      property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SERVICE</b>: The service ID is returned in the <code>ResourceId</code>
   *      property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INSTANCE</b>: The instance ID is returned in the <code>ResourceId</code>
   *      property.</p>
   *             </li>
   *          </ul>
   */
  Targets?: { [key: string]: string };
}

export namespace Operation {
  export const filterSensitiveLog = (obj: Operation): any => ({
    ...obj,
  });
}

export interface GetOperationResponse {
  /**
   * <p>A complex type that contains information about the operation.</p>
   */
  Operation?: Operation;
}

export namespace GetOperationResponse {
  export const filterSensitiveLog = (obj: GetOperationResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: OperationNotFound): any => ({
    ...obj,
  });
}

export interface GetServiceRequest {
  /**
   * <p>The ID of the service that you want to get settings for.</p>
   */
  Id: string | undefined;
}

export namespace GetServiceRequest {
  export const filterSensitiveLog = (obj: GetServiceRequest): any => ({
    ...obj,
  });
}

export interface GetServiceResponse {
  /**
   * <p>A complex type that contains information about the service.</p>
   */
  Service?: Service;
}

export namespace GetServiceResponse {
  export const filterSensitiveLog = (obj: GetServiceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the instances that you registered by using a specified
 *    service.</p>
 */
export interface InstanceSummary {
  /**
   * <p>The ID for an instance that you created by using a specified service.</p>
   */
  Id?: string;

  /**
   * <p>A string map that contains the following information:</p>
   *          <ul>
   *             <li>
   *                <p>The attributes that are associate with the instance. </p>
   *             </li>
   *             <li>
   *                <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *          <p>Supported attribute keys include the following:</p>
   *          <ul>
   *             <li>
   *                 <p>
   *                   <code>AWS_ALIAS_DNS_NAME</code>: For an alias record that routes traffic to an Elastic Load Balancing load
   *                     balancer, the DNS name that is associated with the load balancer. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_EC2_INSTANCE_ID</code>: (HTTP namespaces only) The
   *                     Amazon EC2 instance ID for the
   *                     instance. When the <code>AWS_EC2_INSTANCE_ID</code> attribute is specified, then the
   *                         <code>AWS_INSTANCE_IPV4</code> attribute contains the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_INSTANCE_CNAME</code>: For a <code>CNAME</code> record, the domain name that Route 53
   *                     returns in response to DNS queries, for example, <code>example.com</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_INSTANCE_IPV4</code>: For an <code>A</code> record, the IPv4 address that Route 53 returns
   *                     in response to DNS queries, for example, <code>192.0.2.44</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_INSTANCE_IPV6</code>: For an <code>AAAA</code> record, the IPv6 address that Route 53
   *                     returns in response to DNS queries, for example,
   *                         <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_INSTANCE_PORT</code>: For an <code>SRV</code> record, the value that Route 53 returns for
   *                     the port. In addition, if the service includes <code>HealthCheckConfig</code>, the port on the
   *                     endpoint that Route 53 sends requests to.</p>
   *             </li>
   *          </ul>
   */
  Attributes?: { [key: string]: string };
}

export namespace InstanceSummary {
  export const filterSensitiveLog = (obj: InstanceSummary): any => ({
    ...obj,
  });
}

export interface ListInstancesRequest {
  /**
   * <p>The ID of the service that you want to list instances for.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>For the first <code>ListInstances</code> request, omit this value.</p>
   *          <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another
   *     <code>ListInstances</code> request to get the next group of results. Specify the value of <code>NextToken</code>
   *    from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of instances that you want AWS Cloud Map to return in the response to a
   *     <code>ListInstances</code> request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up
   *    to 100 instances.</p>
   */
  MaxResults?: number;
}

export namespace ListInstancesRequest {
  export const filterSensitiveLog = (obj: ListInstancesRequest): any => ({
    ...obj,
  });
}

export interface ListInstancesResponse {
  /**
   * <p>Summary information about the instances that are associated with the specified service.</p>
   */
  Instances?: InstanceSummary[];

  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another
   *     <code>ListInstances</code> request to get the next group of results. Specify the value of <code>NextToken</code>
   *    from the previous response in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListInstancesResponse {
  export const filterSensitiveLog = (obj: ListInstancesResponse): any => ({
    ...obj,
  });
}

export enum NamespaceFilterName {
  TYPE = "TYPE",
}

/**
 * <p>A complex type that identifies the namespaces that you want to list. You can choose to list public or private
 *    namespaces.</p>
 */
export interface NamespaceFilter {
  /**
   * <p>Specify <code>TYPE</code>.</p>
   */
  Name: NamespaceFilterName | string | undefined;

  /**
   * <p>If you specify <code>EQ</code> for <code>Condition</code>, specify either <code>DNS_PUBLIC</code> or
   *     <code>DNS_PRIVATE</code>.</p>
   *          <p>If you specify <code>IN</code> for <code>Condition</code>, you can specify <code>DNS_PUBLIC</code>,
   *     <code>DNS_PRIVATE</code>, or both.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that you want to use to determine whether <code>ListNamespaces</code> returns a namespace. Valid
   *    values for <code>condition</code> include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can choose to list only public
   *      namespaces or private namespaces, but not both. <code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code> for the condition, you can choose to list public namespaces,
   *      private namespaces, or both. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Not applicable</p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;
}

export namespace NamespaceFilter {
  export const filterSensitiveLog = (obj: NamespaceFilter): any => ({
    ...obj,
  });
}

export interface ListNamespacesRequest {
  /**
   * <p>For the first <code>ListNamespaces</code> request, omit this value.</p>
   *          <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's
   *     possible that no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of namespaces that you want AWS Cloud Map to return in the response to a
   *     <code>ListNamespaces</code> request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up
   *    to 100 namespaces.</p>
   */
  MaxResults?: number;

  /**
   * <p>A complex type that contains specifications for the namespaces that you want to list.</p>
   *          <p>If you specify more than one filter, a namespace must match all filters to be returned by
   *     <code>ListNamespaces</code>.</p>
   */
  Filters?: NamespaceFilter[];
}

export namespace ListNamespacesRequest {
  export const filterSensitiveLog = (obj: ListNamespacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about a namespace.</p>
 */
export interface NamespaceSummary {
  /**
   * <p>The ID of the namespace.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the namespace. When you create a namespace, AWS Cloud Map automatically creates a Route 53 hosted zone
   *    that has the same name as the namespace.</p>
   */
  Name?: string;

  /**
   * <p>The type of the namespace, either public or private.</p>
   */
  Type?: NamespaceType | string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The number of services that were created using the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>A complex type that contains information that is specific to the namespace type.</p>
   */
  Properties?: NamespaceProperties;

  /**
   * <p>The date and time that the namespace was created.</p>
   */
  CreateDate?: Date;
}

export namespace NamespaceSummary {
  export const filterSensitiveLog = (obj: NamespaceSummary): any => ({
    ...obj,
  });
}

export interface ListNamespacesResponse {
  /**
   * <p>An array that contains one <code>NamespaceSummary</code> object for each namespace that matches the specified
   *    filter criteria.</p>
   */
  Namespaces?: NamespaceSummary[];

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListNamespaces</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> namespaces and then filters them based on the specified criteria. It's
   *     possible that no namespaces in the first <code>MaxResults</code> namespaces matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> namespaces do contain namespaces that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListNamespacesResponse {
  export const filterSensitiveLog = (obj: ListNamespacesResponse): any => ({
    ...obj,
  });
}

export enum OperationFilterName {
  NAMESPACE_ID = "NAMESPACE_ID",
  SERVICE_ID = "SERVICE_ID",
  STATUS = "STATUS",
  TYPE = "TYPE",
  UPDATE_DATE = "UPDATE_DATE",
}

/**
 * <p>A complex type that lets you select the operations that you want to list.</p>
 */
export interface OperationFilter {
  /**
   * <p>Specify the operations that you want to get:</p>
   *          <ul>
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
   *       <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TYPE</b>: Gets specified types of operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_DATE</b>: Gets operations that changed status during a specified date/time
   *      range. </p>
   *             </li>
   *          </ul>
   */
  Name: OperationFilterName | string | undefined;

  /**
   * <p>Specify values that are applicable to the value that you specify for <code>Name</code>: </p>
   *          <ul>
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
   *                   <b>STATUS</b>: Specify one or more statuses: <code>SUBMITTED</code>,
   *       <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TYPE</b>: Specify one or more of the following types:
   *       <code>CREATE_NAMESPACE</code>, <code>DELETE_NAMESPACE</code>, <code>UPDATE_SERVICE</code>,
   *       <code>REGISTER_INSTANCE</code>, or <code>DEREGISTER_INSTANCE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_DATE</b>: Specify a start date and an end date in Unix date/time format
   *      and Coordinated Universal Time (UTC). The start date must be the first value.</p>
   *             </li>
   *          </ul>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that you want to use to determine whether an operation matches the specified value. Valid values
   *    for condition include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can specify only one value.
   *       <code>EQ</code> is supported for <code>NAMESPACE_ID</code>, <code>SERVICE_ID</code>, <code>STATUS</code>, and
   *       <code>TYPE</code>. <code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code> for the condition, you can specify a list of one or more
   *      values. <code>IN</code> is supported for <code>STATUS</code> and <code>TYPE</code>. An operation must match one of
   *      the specified values to be returned in the response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Specify a start date and an end date in Unix date/time format and Coordinated Universal
   *      Time (UTC). The start date must be the first value. <code>BETWEEN</code> is supported for <code>UPDATE_DATE</code>.
   *     </p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;
}

export namespace OperationFilter {
  export const filterSensitiveLog = (obj: OperationFilter): any => ({
    ...obj,
  });
}

export interface ListOperationsRequest {
  /**
   * <p>For the first <code>ListOperations</code> request, omit this value.</p>
   *          <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's
   *     possible that no operations in the first <code>MaxResults</code> operations matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> operations do contain operations that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items that you want AWS Cloud Map to return in the response to a <code>ListOperations</code>
   *    request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 operations.</p>
   */
  MaxResults?: number;

  /**
   * <p>A complex type that contains specifications for the operations that you want to list, for example, operations
   *    that you started between a specified start date and end date.</p>
   *          <p>If you specify more than one filter, an operation must match all filters to be returned by
   *     <code>ListOperations</code>.</p>
   */
  Filters?: OperationFilter[];
}

export namespace ListOperationsRequest {
  export const filterSensitiveLog = (obj: ListOperationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about an operation that matches the criteria that you specified in a
 *     <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>
 *    request.</p>
 */
export interface OperationSummary {
  /**
   * <p>The ID for an operation.</p>
   */
  Id?: string;

  /**
   * <p>The status of the operation. Values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SUBMITTED</b>: This is the initial state immediately after you submit a
   *      request.</p>
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
   *                   <b>FAIL</b>: The operation failed. For the failure reason, see
   *       <code>ErrorMessage</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: OperationStatus | string;
}

export namespace OperationSummary {
  export const filterSensitiveLog = (obj: OperationSummary): any => ({
    ...obj,
  });
}

export interface ListOperationsResponse {
  /**
   * <p>Summary information about the operations that match the specified criteria.</p>
   */
  Operations?: OperationSummary[];

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's
   *     possible that no operations in the first <code>MaxResults</code> operations matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> operations do contain operations that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListOperationsResponse {
  export const filterSensitiveLog = (obj: ListOperationsResponse): any => ({
    ...obj,
  });
}

export enum ServiceFilterName {
  NAMESPACE_ID = "NAMESPACE_ID",
}

/**
 * <p>A complex type that lets you specify the namespaces that you want to list services for.</p>
 */
export interface ServiceFilter {
  /**
   * <p>Specify <code>NAMESPACE_ID</code>.</p>
   */
  Name: ServiceFilterName | string | undefined;

  /**
   * <p>The values that are applicable to the value that you specify for <code>Condition</code> to filter the list of
   *    services.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator that you want to use to determine whether a service is returned by <code>ListServices</code>. Valid
   *    values for <code>Condition</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: When you specify <code>EQ</code>, specify one namespace ID for <code>Values</code>.
   *       <code>EQ</code> is the default condition and can be omitted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code>: When you specify <code>IN</code>, specify a list of the IDs for the namespaces that you want
   *       <code>ListServices</code> to return a list of services for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code>: Not applicable.</p>
   *             </li>
   *          </ul>
   */
  Condition?: FilterCondition | string;
}

export namespace ServiceFilter {
  export const filterSensitiveLog = (obj: ServiceFilter): any => ({
    ...obj,
  });
}

export interface ListServicesRequest {
  /**
   * <p>For the first <code>ListServices</code> request, omit this value.</p>
   *          <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's
   *     possible that no services in the first <code>MaxResults</code> services matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> services do contain services that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of services that you want AWS Cloud Map to return in the response to a <code>ListServices</code>
   *    request. If you don't specify a value for <code>MaxResults</code>, AWS Cloud Map returns up to 100 services.</p>
   */
  MaxResults?: number;

  /**
   * <p>A complex type that contains specifications for the namespaces that you want to list services for. </p>
   *          <p>If you specify more than one filter, an operation must match all filters to be returned by
   *     <code>ListServices</code>.</p>
   */
  Filters?: ServiceFilter[];
}

export namespace ListServicesRequest {
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about a specified service.</p>
 */
export interface ServiceSummary {
  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The description that you specify when you create the service.</p>
   */
  Description?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously
   *    associated with the service but that have been deleted are not included in the count. The count might not reflect
   *    pending registrations and deregistrations.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when
   *    you register an instance.</p>
   */
  DnsConfig?: DnsConfig;

  /**
   * <p>
   *             <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional
   *    health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records
   *    that you specify in <code>DnsConfig</code>.</p>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   *          <p>Note the following about configuring health checks.</p>
   *          <p>
   *             <b>
   *                <code>A</code> and <code>AAAA</code> records</b>
   *          </p>
   *          <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records,
   *    AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint
   *    that is specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code>
   *    records to be unhealthy. </p>
   *          <p>
   *             <b>
   *                <code>CNAME</code> records</b>
   *          </p>
   *          <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes
   *     <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail
   *    with an <code>InvalidInput</code> error.</p>
   *          <p>
   *             <b>Request interval</b>
   *          </p>
   *          <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30
   *    seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers
   *    don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with
   *    no health checks at all.</p>
   *          <p>
   *             <b>Health checking regions</b>
   *          </p>
   *          <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
   *     <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
   *          <p>
   *             <b>Alias records</b>
   *          </p>
   *          <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates
   *    a Route 53 alias record. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When
   *       <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
   *      such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
   *             </li>
   *             <li>
   *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an
   *      alias record, Route 53 doesn't create the health check.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Charges for health checks</b>
   *          </p>
   *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check. A custom health check, which
   *    requires that you use a third-party health checker to evaluate the health of your resources, is useful in the
   *    following circumstances:</p>
   *          <ul>
   *             <li>
   *                <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't
   *      available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC.
   *      (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p>
   *             </li>
   *             <li>
   *                <p>You want to use a third-party health checker regardless of where your resources are.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *          <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request.
   *    AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent
   *     <code>UpdateInstanceCustomHealthStatus</code> request.</p>
   *          <p>Here's how custom health checks work:</p>
   *          <ol>
   *             <li>
   *                <p>You create a service and specify a value for <code>FailureThreshold</code>. </p>
   *                <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time
   *      that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a>
   *      request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p>
   *             </li>
   *             <li>
   *                <p>You register an instance.</p>
   *             </li>
   *             <li>
   *                <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p>
   *                <note>
   *                   <p>AWS Cloud Map doesn't check the health of the resource directly. </p>
   *                </note>
   *             </li>
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
   *                <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the
   *      status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p>
   *             </li>
   *          </ol>
   */
  HealthCheckCustomConfig?: HealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created.</p>
   */
  CreateDate?: Date;
}

export namespace ServiceSummary {
  export const filterSensitiveLog = (obj: ServiceSummary): any => ({
    ...obj,
  });
}

export interface ListServicesResponse {
  /**
   * <p>An array that contains one <code>ServiceSummary</code> object for each service that matches the specified filter
   *    criteria.</p>
   */
  Services?: ServiceSummary[];

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the
   *    next group of results. Specify the value of <code>NextToken</code> from the previous response in the next
   *    request.</p>
   *          <note>
   *             <p>AWS Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's
   *     possible that no services in the first <code>MaxResults</code> services matched the specified criteria but that
   *     subsequent groups of <code>MaxResults</code> services do contain services that match the criteria.</p>
   *          </note>
   */
  NextToken?: string;
}

export namespace ListServicesResponse {
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation can't be completed because the resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface RegisterInstanceRequest {
  /**
   * <p>The ID of the service that you want to use for settings for the instance.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>An identifier that you want to associate with the instance. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If the service that is specified by <code>ServiceId</code> includes settings for an <code>SRV</code> record,
   *      the value of <code>InstanceId</code> is automatically included as part of the value for the <code>SRV</code>
   *      record. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DnsRecord.html#cloudmap-Type-DnsRecord-Type">DnsRecord > Type</a>.</p>
   *             </li>
   *             <li>
   *                <p>You can use this value to update an existing instance.</p>
   *             </li>
   *             <li>
   *                <p>To register a new instance, you must specify a value that is unique among instances that you register by using
   *      the same service. </p>
   *             </li>
   *             <li>
   *                <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, AWS Cloud Map updates the existing
   *      DNS records, if any. If there's also an existing health check, AWS Cloud Map deletes the old health check and creates
   *      a new one. </p>
   *                <note>
   *                   <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a
   *        <code>ListHealthChecks</code> request, for example.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be
   *    retried without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string
   *    every time you submit a <code>RegisterInstance</code> request if you're registering additional instances for the same
   *    namespace and service. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A string map that contains the following information for the service that you specify in
   *                 <code>ServiceId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>The attributes that apply to the records that are defined in the service. </p>
   *             </li>
   *             <li>
   *                 <p>For each attribute, the applicable value.</p>
   *             </li>
   *          </ul>
   *         <p>Supported attribute keys include the following:</p>
   *         <p>
   *             <b>AWS_ALIAS_DNS_NAME</b>
   *          </p>
   *         <p>If you want AWS Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer,
   *             specify the DNS name that is associated with the load balancer. For information about how to get the DNS
   *             name, see "DNSName" in the topic <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html">AliasTarget</a> in the
   *                 <i>Route 53 API Reference</i>.</p>
   *         <p>Note the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The configuration for the service that is specified by <code>ServiceId</code> must include
   *                     settings for an <code>A</code> record, an <code>AAAA</code> record, or both.</p>
   *             </li>
   *             <li>
   *                 <p>In the service that is specified by <code>ServiceId</code>, the value of
   *                         <code>RoutingPolicy</code> must be <code>WEIGHTED</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If the service that is specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code>
   *                     settings, AWS Cloud Map will create the Route 53 health check, but it won't associate the health check
   *                     with the alias record.</p>
   *             </li>
   *             <li>
   *                 <p>Auto naming currently doesn't support creating alias records that route traffic to AWS resources
   *                     other than Elastic Load Balancing load balancers.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the
   *                         <code>AWS_INSTANCE</code> attributes.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>AWS_EC2_INSTANCE_ID</b>
   *          </p>
   *         <p>
   *             <i>HTTP namespaces only.</i> The Amazon EC2 instance ID for the instance. If the
   *                 <code>AWS_EC2_INSTANCE_ID</code> attribute is specified, then the only other attribute that can be
   *             specified is <code>AWS_INIT_HEALTH_STATUS</code>. When the <code>AWS_EC2_INSTANCE_ID</code> attribute is
   *             specified, then the <code>AWS_INSTANCE_IPV4</code> attribute will be filled out with the primary private
   *             IPv4 address.</p>
   *
   *         <p>
   *             <b>AWS_INIT_HEALTH_STATUS</b>
   *          </p>
   *         <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use
   *                 <code>AWS_INIT_HEALTH_STATUS</code> to specify the initial status of the custom health check,
   *                 <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value for
   *                 <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p>
   *         <p>
   *             <b>AWS_INSTANCE_CNAME</b>
   *          </p>
   *         <p>If the service configuration includes a <code>CNAME</code> record, the domain name that you want Route 53 to
   *             return in response to DNS queries, for example, <code>example.com</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>CNAME</code> record.</p>
   *         <p>
   *             <b>AWS_INSTANCE_IPV4</b>
   *          </p>
   *         <p>If the service configuration includes an <code>A</code> record, the IPv4 address that you want Route 53 to
   *             return in response to DNS queries, for example, <code>192.0.2.44</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>A</code> record. If the service includes settings for an <code>SRV</code> record, you must specify
   *             a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p>
   *         <p>
   *             <b>AWS_INSTANCE_IPV6</b>
   *          </p>
   *         <p>If the service configuration includes an <code>AAAA</code> record, the IPv6 address that you want Route 53 to
   *             return in response to DNS queries, for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p>
   *         <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an
   *                 <code>AAAA</code> record. If the service includes settings for an <code>SRV</code> record, you must
   *             specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p>
   *         <p>
   *             <b>AWS_INSTANCE_PORT</b>
   *          </p>
   *         <p>If the service includes an <code>SRV</code> record, the value that you want Route 53 to return for the
   *             port.</p>
   *         <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to
   *             send requests to. </p>
   *         <p>This value is required if you specified settings for an <code>SRV</code> record or a Route 53 health check
   *             when you created the service.</p>
   *         <p>
   *             <b>Custom attributes</b>
   *          </p>
   *         <p>You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name
   *             is 255 characters, and the maximum length of the attribute value is 1,024 characters. The total size of all
   *             provided attributes (sum of all keys and values) must not exceed 5,000 characters.</p>
   */
  Attributes: { [key: string]: string } | undefined;
}

export namespace RegisterInstanceRequest {
  export const filterSensitiveLog = (obj: RegisterInstanceRequest): any => ({
    ...obj,
  });
}

export interface RegisterInstanceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace RegisterInstanceResponse {
  export const filterSensitiveLog = (obj: RegisterInstanceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags to add to the specified resource. Specifying the tag key is required. You can set the value of a tag to
   *    an empty string, but you can't set the value of a tag to null.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tags for.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateInstanceCustomHealthStatusRequest {
  /**
   * <p>The ID of the service that includes the configuration for the custom health check that you want to change the
   *    status for.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The ID of the instance that you want to change the health status for.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The new status of the instance, <code>HEALTHY</code> or <code>UNHEALTHY</code>.</p>
   */
  Status: CustomHealthStatus | string | undefined;
}

export namespace UpdateInstanceCustomHealthStatusRequest {
  export const filterSensitiveLog = (obj: UpdateInstanceCustomHealthStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains changes to an existing service.</p>
 */
export interface ServiceChange {
  /**
   * <p>A description for the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you
   *    register an instance.</p>
   */
  DnsConfig?: DnsConfigChange;

  /**
   * <p>
   *             <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional
   *    health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records
   *    that you specify in <code>DnsConfig</code>.</p>
   *          <important>
   *             <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or
   *      <code>HealthCheckConfig</code> but not both.</p>
   *          </important>
   *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   *          <p>Note the following about configuring health checks.</p>
   *          <p>
   *             <b>
   *                <code>A</code> and <code>AAAA</code> records</b>
   *          </p>
   *          <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records,
   *    AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint
   *    that is specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code>
   *    records to be unhealthy. </p>
   *          <p>
   *             <b>
   *                <code>CNAME</code> records</b>
   *          </p>
   *          <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes
   *     <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail
   *    with an <code>InvalidInput</code> error.</p>
   *          <p>
   *             <b>Request interval</b>
   *          </p>
   *          <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30
   *    seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers
   *    don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with
   *    no health checks at all.</p>
   *          <p>
   *             <b>Health checking regions</b>
   *          </p>
   *          <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see
   *     <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p>
   *          <p>
   *             <b>Alias records</b>
   *          </p>
   *          <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates
   *    a Route 53 alias record. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When
   *       <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource.
   *      such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p>
   *             </li>
   *             <li>
   *                <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an
   *      alias record, Route 53 doesn't create the health check.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Charges for health checks</b>
   *          </p>
   *          <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for
   *    health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: HealthCheckConfig;
}

export namespace ServiceChange {
  export const filterSensitiveLog = (obj: ServiceChange): any => ({
    ...obj,
  });
}

export interface UpdateServiceRequest {
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
  export const filterSensitiveLog = (obj: UpdateServiceRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceResponse {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the
   *    operation, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html">GetOperation</a>.</p>
   */
  OperationId?: string;
}

export namespace UpdateServiceResponse {
  export const filterSensitiveLog = (obj: UpdateServiceResponse): any => ({
    ...obj,
  });
}
