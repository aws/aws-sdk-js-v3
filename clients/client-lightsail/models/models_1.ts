import {
  AlarmState,
  AvailabilityZone,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  ComparisonOperator,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  ContainerImage,
  ContainerService,
  ContainerServicePowerName,
  DomainEntry,
  InputOrigin,
  KeyPair,
  MetricDatapoint,
  MetricName,
  MetricStatistic,
  MetricUnit,
  Operation,
  PortInfo,
  RegionName,
  ResourceLocation,
  ResourceType,
  Tag,
  TreatMissingData,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface GetKeyPairsResult {
  /**
   * <p>An array of key-value pairs containing information about the key pairs.</p>
   */
  keyPairs?: KeyPair[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetKeyPairs</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetKeyPairsResult {
  export const filterSensitiveLog = (obj: GetKeyPairsResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerRequest): any => ({
    ...obj,
  });
}

export enum LoadBalancerAttributeName {
  HealthCheckPath = "HealthCheckPath",
  SessionStickinessEnabled = "SessionStickinessEnabled",
  SessionStickiness_LB_CookieDurationSeconds = "SessionStickiness_LB_CookieDurationSeconds",
}

export enum InstanceHealthState {
  Draining = "draining",
  Healthy = "healthy",
  Initial = "initial",
  Unavailable = "unavailable",
  Unhealthy = "unhealthy",
  Unused = "unused",
}

export enum InstanceHealthReason {
  InstanceDeregistrationInProgress = "Instance.DeregistrationInProgress",
  InstanceFailedHealthChecks = "Instance.FailedHealthChecks",
  InstanceInvalidState = "Instance.InvalidState",
  InstanceIpUnusable = "Instance.IpUnusable",
  InstanceNotInUse = "Instance.NotInUse",
  InstanceNotRegistered = "Instance.NotRegistered",
  InstanceResponseCodeMismatch = "Instance.ResponseCodeMismatch",
  InstanceTimeout = "Instance.Timeout",
  LbInitialHealthChecking = "Lb.InitialHealthChecking",
  LbInternalError = "Lb.InternalError",
  LbRegistrationInProgress = "Lb.RegistrationInProgress",
}

/**
 * <p>Describes information about the health of the instance.</p>
 */
export interface InstanceHealthSummary {
  /**
   * <p>The name of the Lightsail instance for which you are requesting health check
   *       data.</p>
   */
  instanceName?: string;

  /**
   * <p>Describes the overall instance health. Valid values are below.</p>
   */
  instanceHealth?: InstanceHealthState | string;

  /**
   * <p>More information about the instance health. If the <code>instanceHealth</code> is
   *         <code>healthy</code>, then an <code>instanceHealthReason</code> value is not
   *       provided.</p>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>initial</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.RegistrationInProgress</code>
   *                   </b> - The target
   *           instance is in the process of being registered with the load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.InitialHealthChecking</code>
   *                   </b> - The
   *           Lightsail load balancer is still sending the target instance the minimum number of
   *           health checks required to determine its health status.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>unhealthy</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.ResponseCodeMismatch</code>
   *                   </b> - The
   *           health checks did not return an expected HTTP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.Timeout</code>
   *                   </b> - The health check
   *           requests timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.FailedHealthChecks</code>
   *                   </b> - The health
   *           checks failed because the connection to the target instance timed out, the target instance
   *           response was malformed, or the target instance failed the health check for an unknown
   *           reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.InternalError</code>
   *                   </b> - The health checks
   *           failed due to an internal error.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>unused</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.NotRegistered</code>
   *                   </b> - The target
   *           instance is not registered with the target group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.NotInUse</code>
   *                   </b> - The target group is
   *           not used by any load balancer, or the target instance is in an Availability Zone that is
   *           not enabled for its load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.IpUnusable</code>
   *                   </b> - The target IP
   *           address is reserved for use by a Lightsail load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.InvalidState</code>
   *                   </b> - The target is in
   *           the stopped or terminated state.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>draining</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.DeregistrationInProgress</code>
   *                   </b> - The
   *           target instance is in the process of being deregistered and the deregistration delay
   *           period has not expired.</p>
   *             </li>
   *          </ul>
   */
  instanceHealthReason?: InstanceHealthReason | string;
}

export namespace InstanceHealthSummary {
  export const filterSensitiveLog = (obj: InstanceHealthSummary): any => ({
    ...obj,
  });
}

export enum LoadBalancerProtocol {
  HTTP = "HTTP",
  HTTP_HTTPS = "HTTP_HTTPS",
}

export enum LoadBalancerState {
  Active = "active",
  ActiveImpaired = "active_impaired",
  Failed = "failed",
  Provisioning = "provisioning",
  Unknown = "unknown",
}

/**
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 */
export interface LoadBalancerTlsCertificateSummary {
  /**
   * <p>The name of the SSL/TLS certificate.</p>
   */
  name?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   */
  isAttached?: boolean;
}

export namespace LoadBalancerTlsCertificateSummary {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Lightsail load balancer.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when your load balancer was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>).
   *       Lightsail automatically creates your load balancer across Availability Zones.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancer</code>.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The DNS name of your Lightsail load balancer.</p>
   */
  dnsName?: string;

  /**
   * <p>The status of your load balancer. Valid values are below.</p>
   */
  state?: LoadBalancerState | string;

  /**
   * <p>The protocol you have enabled for your load balancer. Valid values are below.</p>
   *          <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just
   *       <code>HTTP</code>.</p>
   */
  protocol?: LoadBalancerProtocol | string;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS,
   *       use port 443.</p>
   */
  publicPorts?: number[];

  /**
   * <p>The path you specified to perform your health checks. If no path is specified, the load
   *       balancer tries to make a request to the default (root) page.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The port where the load balancer will direct traffic to your Lightsail instances. For
   *       HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
   */
  instancePort?: number;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load
   *       balancer.</p>
   */
  instanceHealthSummary?: InstanceHealthSummary[];

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information
   *       about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached
   *       to the load balancer.</p>
   */
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values
   *       are listed below.</p>
   */
  configurationOptions?: { [key: string]: string };
}

export namespace LoadBalancer {
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerResult {
  /**
   * <p>An object containing information about your load balancer.</p>
   */
  loadBalancer?: LoadBalancer;
}

export namespace GetLoadBalancerResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerResult): any => ({
    ...obj,
  });
}

export enum LoadBalancerMetricName {
  ClientTLSNegotiationErrorCount = "ClientTLSNegotiationErrorCount",
  HTTPCode_Instance_2XX_Count = "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count = "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count = "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count = "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count = "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count = "HTTPCode_LB_5XX_Count",
  HealthyHostCount = "HealthyHostCount",
  InstanceResponseTime = "InstanceResponseTime",
  RejectedConnectionCount = "RejectedConnectionCount",
  RequestCount = "RequestCount",
  UnhealthyHostCount = "UnhealthyHostCount",
}

export interface GetLoadBalancerMetricDataRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid load balancer metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ClientTLSNegotiationErrorCount</code>
   *                   </b> - The
   *           number of TLS connections initiated by the client that did not establish a session with
   *           the load balancer due to a TLS error generated by the load balancer. Possible causes
   *           include a mismatch of ciphers or protocols.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HealthyHostCount</code>
   *                   </b> - The number of target
   *           instances that are considered healthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_2XX_Count</code>
   *                   </b> - The number
   *           of HTTP 2XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_3XX_Count</code>
   *                   </b> - The number
   *           of HTTP 3XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_4XX_Count</code>
   *                   </b> - The number
   *           of HTTP 4XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_5XX_Count</code>
   *                   </b> - The number
   *           of HTTP 5XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_4XX_Count</code>
   *                   </b> - The number of
   *           HTTP 4XX client error codes that originated from the load balancer. Client errors are
   *           generated when requests are malformed or incomplete. These requests were not received by
   *           the target instance. This count does not include response codes generated by the target
   *           instances.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_5XX_Count</code>
   *                   </b> - The number of
   *           HTTP 5XX server error codes that originated from the load balancer. This does not include
   *           any response codes generated by the target instance. This metric is reported if there are
   *           no healthy instances attached to the load balancer, or if the request rate exceeds the
   *           capacity of the instances (spillover) or the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>InstanceResponseTime</code>
   *                   </b> - The time elapsed,
   *           in seconds, after the request leaves the load balancer until a response from the target
   *           instance is received.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RejectedConnectionCount</code>
   *                   </b> - The number of
   *           connections that were rejected because the load balancer had reached its maximum number of
   *           connections.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RequestCount</code>
   *                   </b> - The number of requests
   *           processed over IPv4. This count includes only the requests with a response generated by a
   *           target instance of the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>UnhealthyHostCount</code>
   *                   </b> - The number of
   *           target instances that are considered unhealthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: LoadBalancerMetricName | string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The start time of the period.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetLoadBalancerMetricDataRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: LoadBalancerMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetLoadBalancerMetricDataResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancersRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetLoadBalancers</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetLoadBalancersRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancersRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancersResult {
  /**
   * <p>An array of LoadBalancer objects describing your load balancers.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetLoadBalancers</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetLoadBalancersResult {
  export const filterSensitiveLog = (obj: GetLoadBalancersResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsCertificatesRequest {
  /**
   * <p>The name of the load balancer you associated with your SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerTlsCertificatesRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesRequest): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateDomainStatus {
  Failed = "FAILED",
  PendingValidation = "PENDING_VALIDATION",
  Success = "SUCCESS",
}

/**
 * <p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * <p>A fully qualified domain name in the certificate. For example,
   *       <code>example.com</code>.</p>
   */
  name?: string;

  /**
   * <p>The type of validation record. For example, <code>CNAME</code> for domain
   *       validation.</p>
   */
  type?: string;

  /**
   * <p>The value for that type.</p>
   */
  value?: string;

  /**
   * <p>The validation status. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;

  /**
   * <p>The domain name against which your SSL/TLS certificate was validated.</p>
   */
  domainName?: string;
}

export namespace LoadBalancerTlsCertificateDomainValidationRecord {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationRecord): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateFailureReason {
  AdditionalVerificationRequired = "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed = "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN",
  NoAvailableContacts = "NO_AVAILABLE_CONTACTS",
  Other = "OTHER",
}

/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use to
 *       validate domain ownership.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * <p>The fully qualified domain name in the certificate request.</p>
   */
  domainName?: string;

  /**
   * <p>The status of the domain validation. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;
}

export namespace LoadBalancerTlsCertificateDomainValidationOption {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationOption): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateRenewalStatus {
  Failed = "FAILED",
  PendingAutoRenewal = "PENDING_AUTO_RENEWAL",
  PendingValidation = "PENDING_VALIDATION",
  Success = "SUCCESS",
}

/**
 * <p>Contains information about the status of Lightsail's managed renewal for the
 *       certificate.</p>
 *          <p>The renewal status of the certificate.</p>
 *          <p>The following renewal status are possible:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>PendingAutoRenewal</code>
 *                   </b> - Lightsail is
 *           attempting to automatically validate the domain names in the certificate. No further
 *           action is required. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>PendingValidation</code>
 *                   </b> - Lightsail couldn't
 *           automatically validate one or more domain names in the certificate. You must take action
 *           to validate these domain names or the certificate won't be renewed. If you used DNS
 *           validation, check to make sure your certificate's domain validation records exist in your
 *           domain's DNS, and that your certificate remains in use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>Success</code>
 *                   </b> - All domain names in the
 *           certificate are validated, and Lightsail renewed the certificate. No further action is
 *           required. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>Failed</code>
 *                   </b> - One or more domain names were
 *           not validated before the certificate expired, and Lightsail did not renew the
 *           certificate. You can request a new certificate using the <code>CreateCertificate</code>
 *           action.</p>
 *             </li>
 *          </ul>
 */
export interface LoadBalancerTlsCertificateRenewalSummary {
  /**
   * <p>The renewal status of the certificate.</p>
   *          <p>The following renewal status are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingAutoRenewal</code>
   *                   </b> - Lightsail is
   *           attempting to automatically validate the domain names of the certificate. No further
   *           action is required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingValidation</code>
   *                   </b> - Lightsail couldn't
   *           automatically validate one or more domain names of the certificate. You must take action
   *           to validate these domain names or the certificate won't be renewed. Check to make sure
   *           your certificate's domain validation records exist in your domain's DNS, and that your
   *           certificate remains in use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Success</code>
   *                   </b> - All domain names in the
   *           certificate are validated, and Lightsail renewed the certificate. No further action is
   *           required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Failed</code>
   *                   </b> - One or more domain names were
   *           not validated before the certificate expired, and Lightsail did not renew the
   *           certificate. You can request a new certificate using the <code>CreateCertificate</code>
   *           action.</p>
   *             </li>
   *          </ul>
   */
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatus | string;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to Lightsail's managed renewal. This is different from the initial validation that
   *       occurs as a result of the RequestCertificate request.</p>
   */
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[];
}

export namespace LoadBalancerTlsCertificateRenewalSummary {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateRenewalSummary): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateRevocationReason {
  AACompromise = "A_A_COMPROMISE",
  AffiliationChanged = "AFFILIATION_CHANGED",
  CaCompromise = "CA_COMPROMISE",
  CertificateHold = "CERTIFICATE_HOLD",
  CessationOfOperation = "CESSATION_OF_OPERATION",
  KeyCompromise = "KEY_COMPROMISE",
  PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
  RemoveFromCrl = "REMOVE_FROM_CRL",
  Superceded = "SUPERCEDED",
  Unspecified = "UNSPECIFIED",
}

export enum LoadBalancerTlsCertificateStatus {
  Expired = "EXPIRED",
  Failed = "FAILED",
  Inactive = "INACTIVE",
  Issued = "ISSUED",
  PendingValidation = "PENDING_VALIDATION",
  Revoked = "REVOKED",
  Unknown = "UNKNOWN",
  ValidationTimedOut = "VALIDATION_TIMED_OUT",
}

/**
 * <p>Describes a load balancer SSL/TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 */
export interface LoadBalancerTlsCertificate {
  /**
   * <p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to
   *       look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where you created your certificate.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance</code>
   *                   </b> - A Lightsail instance (a
   *           virtual private server)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StaticIp</code>
   *                   </b> - A static IP address</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>KeyPair</code>
   *                   </b> - The key pair used to connect
   *           to a Lightsail instance</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>InstanceSnapshot</code>
   *                   </b> - A Lightsail
   *           instance snapshot</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Domain</code>
   *                   </b> - A DNS zone</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PeeredVpc</code>
   *                   </b> - A peered VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>LoadBalancer</code>
   *                   </b> - A Lightsail load
   *           balancer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>LoadBalancerTlsCertificate</code>
   *                   </b> - An SSL/TLS
   *           certificate associated with a Lightsail load balancer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Disk</code>
   *                   </b> - A Lightsail block storage
   *           disk</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DiskSnapshot</code>
   *                   </b> - A block storage disk
   *           snapshot</p>
   *             </li>
   *          </ul>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   */
  isAttached?: boolean;

  /**
   * <p>The validation status of the SSL/TLS certificate. Valid values are below.</p>
   */
  status?: LoadBalancerTlsCertificateStatus | string;

  /**
   * <p>The domain name for your SSL/TLS certificate.</p>
   */
  domainName?: string;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the
   *       records.</p>
   */
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * <p>The validation failure reason, if any, of the certificate.</p>
   *
   *          <p>The following failure reasons are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NO_AVAILABLE_CONTACTS</code>
   *                   </b> - This failure
   *           applies to email validation, which is not available for Lightsail certificates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ADDITIONAL_VERIFICATION_REQUIRED</code>
   *                   </b> -
   *           Lightsail requires additional information to process this certificate request. This can
   *           happen as a fraud-protection measure, such as when the domain ranks within the Alexa top
   *           1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a> to contact
   *           AWS Support.</p>
   *                <note>
   *                   <p>You cannot request a certificate for Amazon-owned domain names such as those ending
   *             in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DOMAIN_NOT_ALLOWED</code>
   *                   </b> - One or more of the
   *           domain names in the certificate request was reported as an unsafe domain by <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a>. To correct the
   *           problem, search for your domain name on the <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a> website. If your domain
   *           is reported as suspicious, see <a href="https://www.google.com/webmasters/hacked/?hl=en">Google Help for Hacked
   *             Websites</a> to learn what you can do.</p>
   *                <p>If you believe that the result is a false positive, notify the organization that is
   *           reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and
   *           cannot remove your domain from a block list itself. After you correct the problem and the
   *           VirusTotal registry has been updated, request a new certificate.</p>
   *                <p>If you see this error and your domain is not included in the VirusTotal list, visit
   *           the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>
   *           and create a case.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>INVALID_PUBLIC_DOMAIN</code>
   *                   </b> - One or more of
   *           the domain names in the certificate request is not valid. Typically, this is because a
   *           domain name in the request is not a valid top-level domain. Try to request a certificate
   *           again, correcting any spelling errors or typos that were in the failed request, and ensure
   *           that all domain names in the request are for valid top-level domains. For example, you
   *           cannot request a certificate for <code>example.invalidpublicdomain</code> because
   *             <code>invalidpublicdomain</code> is not a valid top-level domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER</code>
   *                   </b> - Typically, this failure occurs
   *           when there is a typographical error in one or more of the domain names in the certificate
   *           request. Try to request a certificate again, correcting any spelling errors or typos that
   *           were in the failed request. </p>
   *             </li>
   *          </ul>
   */
  failureReason?: LoadBalancerTlsCertificateFailureReason | string;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * <p>The issuer of the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The algorithm used to generate the key pair (the public and private key).</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   */
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: LoadBalancerTlsCertificateRevocationReason | string;

  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serial?: string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  signatureAlgorithm?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   */
  subject?: string;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   */
  subjectAlternativeNames?: string[];
}

export namespace LoadBalancerTlsCertificate {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificate): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsCertificatesResult {
  /**
   * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS
   *       certificates.</p>
   */
  tlsCertificates?: LoadBalancerTlsCertificate[];
}

export namespace GetLoadBalancerTlsCertificatesResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesResult): any => ({
    ...obj,
  });
}

export interface GetOperationRequest {
  /**
   * <p>A GUID used to identify the operation.</p>
   */
  operationId: string | undefined;
}

export namespace GetOperationRequest {
  export const filterSensitiveLog = (obj: GetOperationRequest): any => ({
    ...obj,
  });
}

export interface GetOperationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace GetOperationResult {
  export const filterSensitiveLog = (obj: GetOperationResult): any => ({
    ...obj,
  });
}

export interface GetOperationsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperations</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetOperationsRequest {
  export const filterSensitiveLog = (obj: GetOperationsRequest): any => ({
    ...obj,
  });
}

export interface GetOperationsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperations</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetOperationsResult {
  export const filterSensitiveLog = (obj: GetOperationsResult): any => ({
    ...obj,
  });
}

export interface GetOperationsForResourceRequest {
  /**
   * <p>The name of the resource for which you are requesting information.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperationsForResource</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetOperationsForResourceRequest {
  export const filterSensitiveLog = (obj: GetOperationsForResourceRequest): any => ({
    ...obj,
  });
}

export interface GetOperationsForResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];

  /**
   * @deprecated
   *
   * <p>(Deprecated) Returns the number of pages of results that remain.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the
   *         API. It is now deprecated, and the API returns the <code>next page token</code> parameter
   *         instead.</p>
   *          </note>
   */
  nextPageCount?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperationsForResource</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetOperationsForResourceResult {
  export const filterSensitiveLog = (obj: GetOperationsForResourceResult): any => ({
    ...obj,
  });
}

export interface GetRegionsRequest {
  /**
   * <p>A Boolean value indicating whether to also include Availability Zones in your get regions
   *       request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.</p>
   */
  includeAvailabilityZones?: boolean;

  /**
   * <p>A Boolean value indicating whether to also include Availability Zones for databases in
   *       your get regions request. Availability Zones are indicated with a letter (e.g.,
   *         <code>us-east-2a</code>).</p>
   */
  includeRelationalDatabaseAvailabilityZones?: boolean;
}

export namespace GetRegionsRequest {
  export const filterSensitiveLog = (obj: GetRegionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the AWS Region.</p>
 */
export interface Region {
  /**
   * <p>The continent code (e.g., <code>NA</code>, meaning North America).</p>
   */
  continentCode?: string;

  /**
   * <p>The description of the AWS Region (e.g., <code>This region is recommended to serve users
   *         in the eastern United States and eastern Canada</code>).</p>
   */
  description?: string;

  /**
   * <p>The display name (e.g., <code>Ohio</code>).</p>
   */
  displayName?: string;

  /**
   * <p>The region name (e.g., <code>us-east-2</code>).</p>
   */
  name?: RegionName | string;

  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  availabilityZones?: AvailabilityZone[];

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  relationalDatabaseAvailabilityZones?: AvailabilityZone[];
}

export namespace Region {
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
}

export interface GetRegionsResult {
  /**
   * <p>An array of key-value pairs containing information about your get regions request.</p>
   */
  regions?: Region[];
}

export namespace GetRegionsResult {
  export const filterSensitiveLog = (obj: GetRegionsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseRequest {
  /**
   * <p>The name of the database that you are looking up.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the hardware of a database.</p>
 */
export interface RelationalDatabaseHardware {
  /**
   * <p>The number of vCPUs for the database.</p>
   */
  cpuCount?: number;

  /**
   * <p>The size of the disk for the database.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The amount of RAM in GB for the database.</p>
   */
  ramSizeInGb?: number;
}

export namespace RelationalDatabaseHardware {
  export const filterSensitiveLog = (obj: RelationalDatabaseHardware): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an endpoint for a database.</p>
 */
export interface RelationalDatabaseEndpoint {
  /**
   * <p>Specifies the port that the database is listening on.</p>
   */
  port?: number;

  /**
   * <p>Specifies the DNS address of the database.</p>
   */
  address?: string;
}

export namespace RelationalDatabaseEndpoint {
  export const filterSensitiveLog = (obj: RelationalDatabaseEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a pending database maintenance action.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending database maintenance action.</p>
   */
  action?: string;

  /**
   * <p>Additional detail about the pending database maintenance action.</p>
   */
  description?: string;

  /**
   * <p>The effective date of the pending database maintenance action.</p>
   */
  currentApplyDate?: Date;
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a pending database value modification.</p>
 */
export interface PendingModifiedRelationalDatabaseValues {
  /**
   * <p>The password for the master user of the database.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The database engine version.</p>
   */
  engineVersion?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
   */
  backupRetentionEnabled?: boolean;
}

export namespace PendingModifiedRelationalDatabaseValues {
  export const filterSensitiveLog = (obj: PendingModifiedRelationalDatabaseValues): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database.</p>
 */
export interface RelationalDatabase {
  /**
   * <p>The unique name of the database resource in Lightsail.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database. Include this code in your email to support when you
   *       have questions about a database in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type for the database (for example,
   *         <code>RelationalDatabase</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The blueprint ID for the database. A blueprint describes the major engine version of a
   *       database.</p>
   */
  relationalDatabaseBlueprintId?: string;

  /**
   * <p>The bundle ID for the database. A bundle describes the performance specifications for your
   *       database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The name of the master database created when the Lightsail database resource is
   *       created.</p>
   */
  masterDatabaseName?: string;

  /**
   * <p>Describes the hardware of the database.</p>
   */
  hardware?: RelationalDatabaseHardware;

  /**
   * <p>Describes the current state of the database.</p>
   */
  state?: string;

  /**
   * <p>Describes the secondary Availability Zone of a high availability database.</p>
   *          <p>The secondary database is used for failover support of a high availability
   *       database.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled for the
   *       database.</p>
   */
  backupRetentionEnabled?: boolean;

  /**
   * <p>Describes pending database value modifications.</p>
   */
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  /**
   * <p>The database software (for example, <code>MySQL</code>).</p>
   */
  engine?: string;

  /**
   * <p>The database engine version (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix
   *       time.</p>
   */
  latestRestorableTime?: Date;

  /**
   * <p>The master user name of the database.</p>
   */
  masterUsername?: string;

  /**
   * <p>The status of parameter updates for the database.</p>
   */
  parameterApplyStatus?: string;

  /**
   * <p>The daily time range during which automated backups are created for the database (for
   *       example, <code>16:00-16:30</code>).</p>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on the database.</p>
   *          <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example,
   *         <code>Tue:17:00-Tue:17:30</code>.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>A Boolean value indicating whether the database is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The master endpoint for the database.</p>
   */
  masterEndpoint?: RelationalDatabaseEndpoint;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   */
  pendingMaintenanceActions?: PendingMaintenanceAction[];

  /**
   * <p>The certificate associated with the database.</p>
   */
  caCertificateIdentifier?: string;
}

export namespace RelationalDatabase {
  export const filterSensitiveLog = (obj: RelationalDatabase): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseResult {
  /**
   * <p>An object describing the specified database.</p>
   */
  relationalDatabase?: RelationalDatabase;
}

export namespace GetRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBlueprintsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBlueprints</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsRequest): any => ({
    ...obj,
  });
}

export enum RelationalDatabaseEngine {
  MYSQL = "mysql",
}

/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine version
 *       of a database.</p>
 */
export interface RelationalDatabaseBlueprint {
  /**
   * <p>The ID for the database blueprint.</p>
   */
  blueprintId?: string;

  /**
   * <p>The database software of the database blueprint (for example, <code>MySQL</code>).</p>
   */
  engine?: RelationalDatabaseEngine | string;

  /**
   * <p>The database engine version for the database blueprint (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The description of the database engine for the database blueprint.</p>
   */
  engineDescription?: string;

  /**
   * <p>The description of the database engine version for the database blueprint.</p>
   */
  engineVersionDescription?: string;

  /**
   * <p>A Boolean value indicating whether the engine version is the default for the database
   *       blueprint.</p>
   */
  isEngineDefault?: boolean;
}

export namespace RelationalDatabaseBlueprint {
  export const filterSensitiveLog = (obj: RelationalDatabaseBlueprint): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBlueprintsResult {
  /**
   * <p>An object describing the result of your get relational database blueprints request.</p>
   */
  blueprints?: RelationalDatabaseBlueprint[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseBlueprints</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBundlesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBundles</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseBundlesRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the
 *       database.</p>
 */
export interface RelationalDatabaseBundle {
  /**
   * <p>The ID for the database bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name for the database bundle.</p>
   */
  name?: string;

  /**
   * <p>The cost of the database bundle in US currency.</p>
   */
  price?: number;

  /**
   * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The size of the disk for the database bundle.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The data transfer rate per month in GB for the database bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
   */
  cpuCount?: number;

  /**
   * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
   */
  isEncrypted?: boolean;

  /**
   * <p>A Boolean value indicating whether the database bundle is active.</p>
   */
  isActive?: boolean;
}

export namespace RelationalDatabaseBundle {
  export const filterSensitiveLog = (obj: RelationalDatabaseBundle): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBundlesResult {
  /**
   * <p>An object describing the result of your get relational database bundles request.</p>
   */
  bundles?: RelationalDatabaseBundle[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseBundles</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseBundlesResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseEventsRequest {
  /**
   * <p>The name of the database from which to get events.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The number of minutes in the past from which to retrieve events. For example, to get all
   *       events from the past 2 hours, enter 120.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   *          <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>
   */
  durationInMinutes?: number;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseEvents</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseEventsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event for a database.</p>
 */
export interface RelationalDatabaseEvent {
  /**
   * <p>The database that the database event relates to.</p>
   */
  resource?: string;

  /**
   * <p>The timestamp when the database event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The message of the database event.</p>
   */
  message?: string;

  /**
   * <p>The category that the database event belongs to.</p>
   */
  eventCategories?: string[];
}

export namespace RelationalDatabaseEvent {
  export const filterSensitiveLog = (obj: RelationalDatabaseEvent): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseEventsResult {
  /**
   * <p>An object describing the result of your get relational database events request.</p>
   */
  relationalDatabaseEvents?: RelationalDatabaseEvent[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseEvents</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseEventsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogEventsRequest {
  /**
   * <p>The name of your database for which to get log events.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   *          <p>Use the <code>get relational database log streams</code> operation to get a list of
   *       available log streams.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The start of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   */
  startTime?: Date;

  /**
   * <p>The end of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime?: Date;

  /**
   * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is
   *       specified, the log event starts from the head of the log. If <code>false</code> is specified,
   *       the log event starts from the tail of the log.</p>
   *          <note>
   *             <p>For PostgreSQL, the default value of <code>false</code> is the only option
   *         available.</p>
   *          </note>
   */
  startFromHead?: boolean;

  /**
   * <p>The token to advance to the next or previous page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseLogEvents</code>
   *       request. If your results are paginated, the response will return a next forward token and/or
   *       next backward token that you can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseLogEventsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database log event.</p>
 */
export interface LogEvent {
  /**
   * <p>The timestamp when the database log event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The message of the database log event.</p>
   */
  message?: string;
}

export namespace LogEvent {
  export const filterSensitiveLog = (obj: LogEvent): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogEventsResult {
  /**
   * <p>An object describing the result of your get relational database log events request.</p>
   */
  resourceLogEvents?: LogEvent[];

  /**
   * <p>A token used for advancing to the previous page of results from your get relational
   *       database log events request.</p>
   */
  nextBackwardToken?: string;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database
   *       log events request.</p>
   */
  nextForwardToken?: string;
}

export namespace GetRelationalDatabaseLogEventsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogStreamsRequest {
  /**
   * <p>The name of your database for which to get log streams.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseLogStreamsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogStreamsResult {
  /**
   * <p>An object describing the result of your get relational database log streams
   *       request.</p>
   */
  logStreams?: string[];
}

export namespace GetRelationalDatabaseLogStreamsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsResult): any => ({
    ...obj,
  });
}

export enum RelationalDatabasePasswordVersion {
  CURRENT = "CURRENT",
  PENDING = "PENDING",
  PREVIOUS = "PREVIOUS",
}

export interface GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * <p>The name of your database for which to get the master user password.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The password version to return.</p>
   *          <p>Specifying <code>CURRENT</code> or <code>PREVIOUS</code> returns the current or previous
   *       passwords respectively. Specifying <code>PENDING</code> returns the newest version of the
   *       password that will rotate to <code>CURRENT</code>. After the <code>PENDING</code> password
   *       rotates to <code>CURRENT</code>, the <code>PENDING</code> password is no longer
   *       available.</p>
   *          <p>Default: <code>CURRENT</code>
   *          </p>
   */
  passwordVersion?: RelationalDatabasePasswordVersion | string;
}

export namespace GetRelationalDatabaseMasterUserPasswordRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * <p>The master user password for the <code>password version</code> specified.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The timestamp when the specified version of the master user password was created.</p>
   */
  createdAt?: Date;
}

export namespace GetRelationalDatabaseMasterUserPasswordResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordResult): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export enum RelationalDatabaseMetricName {
  CPUUtilization = "CPUUtilization",
  DatabaseConnections = "DatabaseConnections",
  DiskQueueDepth = "DiskQueueDepth",
  FreeStorageSpace = "FreeStorageSpace",
  NetworkReceiveThroughput = "NetworkReceiveThroughput",
  NetworkTransmitThroughput = "NetworkTransmitThroughput",
}

export interface GetRelationalDatabaseMetricDataRequest {
  /**
   * <p>The name of your database from which to get metric data.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid relational database metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value. All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of CPU
   *           utilization currently in use on the database.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DatabaseConnections</code>
   *                   </b> - The number of
   *           database connections in use.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DiskQueueDepth</code>
   *                   </b> - The number of
   *           outstanding IOs (read/write requests) that are waiting to access the disk.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>FreeStorageSpace</code>
   *                   </b> - The amount of
   *           available storage space.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkReceiveThroughput</code>
   *                   </b> - The incoming
   *           (Receive) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkTransmitThroughput</code>
   *                   </b> - The outgoing
   *           (Transmit) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: RelationalDatabaseMetricName | string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The start of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *
   *             </li>
   *          </ul>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetRelationalDatabaseMetricDataRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: RelationalDatabaseMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetRelationalDatabaseMetricDataResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to get parameters.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseParameters</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseParametersRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters of a database.</p>
 */
export interface RelationalDatabaseParameter {
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  allowedValues?: string;

  /**
   * <p>Indicates when parameter updates are applied.</p>
   *          <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
   */
  applyMethod?: string;

  /**
   * <p>Specifies the engine-specific parameter type.</p>
   */
  applyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  dataType?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value indicating whether the parameter can be modified.</p>
   */
  isModifiable?: boolean;

  /**
   * <p>Specifies the name of the parameter.</p>
   */
  parameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  parameterValue?: string;
}

export namespace RelationalDatabaseParameter {
  export const filterSensitiveLog = (obj: RelationalDatabaseParameter): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseParametersResult {
  /**
   * <p>An object describing the result of your get relational database parameters request.</p>
   */
  parameters?: RelationalDatabaseParameter[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseParameters</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseParametersResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabasesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabases</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabasesRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabasesRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabasesResult {
  /**
   * <p>An object describing the result of your get relational databases request.</p>
   */
  relationalDatabases?: RelationalDatabase[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabases</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabasesResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabasesResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database snapshot for which to get information.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace GetRelationalDatabaseSnapshotRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database snapshot.</p>
 */
export interface RelationalDatabaseSnapshot {
  /**
   * <p>The name of the database snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database snapshot. Include this code in your email to support
   *       when you have questions about a database snapshot in Lightsail. This code enables our
   *       support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
   */
  engine?: string;

  /**
   * <p>The database engine version for the database snapshot (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The size of the disk in GB (for example, <code>32</code>) for the database
   *       snapshot.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The state of the database snapshot.</p>
   */
  state?: string;

  /**
   * <p>The name of the source database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was
   *       created.</p>
   */
  fromRelationalDatabaseArn?: string;

  /**
   * <p>The bundle ID of the database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseBundleId?: string;

  /**
   * <p>The blueprint ID of the database from which the database snapshot was created. A blueprint
   *       describes the major engine version of a database.</p>
   */
  fromRelationalDatabaseBlueprintId?: string;
}

export namespace RelationalDatabaseSnapshot {
  export const filterSensitiveLog = (obj: RelationalDatabaseSnapshot): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotResult {
  /**
   * <p>An object describing the specified database snapshot.</p>
   */
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}

export namespace GetRelationalDatabaseSnapshotResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseSnapshots</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseSnapshotsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotsResult {
  /**
   * <p>An object describing the result of your get relational database snapshots request.</p>
   */
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseSnapshots</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseSnapshotsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetStaticIpRequest {
  /**
   * <p>The name of the static IP in Lightsail.</p>
   */
  staticIpName: string | undefined;
}

export namespace GetStaticIpRequest {
  export const filterSensitiveLog = (obj: GetStaticIpRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the static IP.</p>
 */
export interface StaticIp {
  /**
   * <p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the static IP (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (usually <code>StaticIp</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The static IP address.</p>
   */
  ipAddress?: string;

  /**
   * <p>The instance where the static IP is attached (e.g.,
   *       <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  attachedTo?: string;

  /**
   * <p>A Boolean value indicating whether the static IP is attached.</p>
   */
  isAttached?: boolean;
}

export namespace StaticIp {
  export const filterSensitiveLog = (obj: StaticIp): any => ({
    ...obj,
  });
}

export interface GetStaticIpResult {
  /**
   * <p>An array of key-value pairs containing information about the requested static IP.</p>
   */
  staticIp?: StaticIp;
}

export namespace GetStaticIpResult {
  export const filterSensitiveLog = (obj: GetStaticIpResult): any => ({
    ...obj,
  });
}

export interface GetStaticIpsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetStaticIps</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetStaticIpsRequest {
  export const filterSensitiveLog = (obj: GetStaticIpsRequest): any => ({
    ...obj,
  });
}

export interface GetStaticIpsResult {
  /**
   * <p>An array of key-value pairs containing information about your get static IPs
   *       request.</p>
   */
  staticIps?: StaticIp[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetStaticIps</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetStaticIpsResult {
  export const filterSensitiveLog = (obj: GetStaticIpsResult): any => ({
    ...obj,
  });
}

export interface ImportKeyPairRequest {
  /**
   * <p>The name of the key pair for which you want to import the public key.</p>
   */
  keyPairName: string | undefined;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64: string | undefined;
}

export namespace ImportKeyPairRequest {
  export const filterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportKeyPairResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace ImportKeyPairResult {
  export const filterSensitiveLog = (obj: ImportKeyPairResult): any => ({
    ...obj,
  });
}

export interface IsVpcPeeredRequest {}

export namespace IsVpcPeeredRequest {
  export const filterSensitiveLog = (obj: IsVpcPeeredRequest): any => ({
    ...obj,
  });
}

export interface IsVpcPeeredResult {
  /**
   * <p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise,
   *       <code>false</code>.</p>
   */
  isPeered?: boolean;
}

export namespace IsVpcPeeredResult {
  export const filterSensitiveLog = (obj: IsVpcPeeredResult): any => ({
    ...obj,
  });
}

export interface OpenInstancePublicPortsRequest {
  /**
   * <p>An object to describe the ports to open for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;
}

export namespace OpenInstancePublicPortsRequest {
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface OpenInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace OpenInstancePublicPortsResult {
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsResult): any => ({
    ...obj,
  });
}

export interface PeerVpcRequest {}

export namespace PeerVpcRequest {
  export const filterSensitiveLog = (obj: PeerVpcRequest): any => ({
    ...obj,
  });
}

export interface PeerVpcResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PeerVpcResult {
  export const filterSensitiveLog = (obj: PeerVpcResult): any => ({
    ...obj,
  });
}

export interface PutAlarmRequest {
  /**
   * <p>The name for the alarm. Specify the name of an existing alarm to update, and overwrite the
   *       previous configuration of the alarm.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The name of the metric to associate with the alarm.</p>
   *          <p>You can configure up to two alarms per metric.</p>
   *          <p>The following metrics are available for each resource type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Instances</b>: <code>BurstCapacityPercentage</code>,
   *             <code>BurstCapacityTime</code>, <code>CPUUtilization</code>, <code>NetworkIn</code>,
   *             <code>NetworkOut</code>, <code>StatusCheckFailed</code>,
   *             <code>StatusCheckFailed_Instance</code>, and
   *           <code>StatusCheckFailed_System</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Load balancers</b>:
   *             <code>ClientTLSNegotiationErrorCount</code>, <code>HealthyHostCount</code>,
   *             <code>UnhealthyHostCount</code>, <code>HTTPCode_LB_4XX_Count</code>,
   *             <code>HTTPCode_LB_5XX_Count</code>, <code>HTTPCode_Instance_2XX_Count</code>,
   *             <code>HTTPCode_Instance_3XX_Count</code>, <code>HTTPCode_Instance_4XX_Count</code>,
   *             <code>HTTPCode_Instance_5XX_Count</code>, <code>InstanceResponseTime</code>,
   *             <code>RejectedConnectionCount</code>, and <code>RequestCount</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Relational databases</b>: <code>CPUUtilization</code>,
   *             <code>DatabaseConnections</code>, <code>DiskQueueDepth</code>,
   *             <code>FreeStorageSpace</code>, <code>NetworkReceiveThroughput</code>, and
   *             <code>NetworkTransmitThroughput</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about these metrics, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-resource-health-metrics#available-metrics">Metrics available in Lightsail</a>.</p>
   */
  metricName: MetricName | string | undefined;

  /**
   * <p>The name of the Lightsail resource that will be monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  monitoredResourceName: string | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic to the threshold.
   *       The specified statistic value is used as the first operand.</p>
   */
  comparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold: number | undefined;

  /**
   * <p>The number of most recent periods over which data is compared to the specified threshold.
   *       If you are setting an "M out of N" alarm, this value (<code>evaluationPeriods</code>) is the
   *       N.</p>
   *          <p>If you are setting an alarm that requires that a number of consecutive data points be
   *       breaching to trigger the alarm, this value specifies the rolling period of time in which data
   *       points are evaluated.</p>
   *          <p>Each evaluation period is five minutes long. For example, specify an evaluation period of
   *       24 to evaluate a metric over a rolling period of two hours.</p>
   *          <p>You can specify a minimum valuation period of 1 (5 minutes), and a maximum evaluation
   *       period of 288 (24 hours).</p>
   */
  evaluationPeriods: number | undefined;

  /**
   * <p>The number of data points that must be not within the specified threshold to trigger the
   *       alarm. If you are setting an "M out of N" alarm, this value (<code>datapointsToAlarm</code>)
   *       is the M.</p>
   */
  datapointsToAlarm?: number;

  /**
   * <p>Sets how this alarm will handle missing data points.</p>
   *          <p>An alarm can treat missing data in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>breaching</code> - Assume the missing data is not within the threshold. Missing
   *           data counts towards the number of times the metric is not within the threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notBreaching</code> - Assume the missing data is within the threshold. Missing
   *           data does not count towards the number of times the metric is not within the
   *           threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ignore</code> - Ignore the missing data. Maintains the current alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>missing</code> - Missing data is treated as missing.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>treatMissingData</code> is not specified, the default behavior of
   *         <code>missing</code> is used.</p>
   */
  treatMissingData?: TreatMissingData | string;

  /**
   * <p>The contact protocols to use for the alarm, such as <code>Email</code>, <code>SMS</code>
   *       (text messaging), or both.</p>
   *          <p>A notification is sent via the specified contact protocol if notifications are enabled for
   *       the alarm, and when the alarm is triggered.</p>
   *          <p>A notification is not sent if a contact protocol is not specified, if the specified
   *       contact protocol is not configured in the AWS Region, or if notifications are not enabled
   *       for the alarm using the <code>notificationEnabled</code> paramater.</p>
   *          <p>Use the <code>CreateContactMethod</code> action to configure a contact protocol in an
   *       AWS Region.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * <p>The alarm states that trigger a notification.</p>
   *          <p>An alarm has the following possible states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM</code> - The metric is outside of the defined threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not
   *           available, or not enough data is available for the metric to determine the alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The metric is within the defined threshold.</p>
   *             </li>
   *          </ul>
   *          <p>When you specify a notification trigger, the <code>ALARM</code> state must be specified.
   *       The <code>INSUFFICIENT_DATA</code> and <code>OK</code> states can be specified in addition to
   *       the <code>ALARM</code> state.</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>OK</code> as an alarm trigger, a notification is sent when the
   *           alarm switches from an <code>ALARM</code> or <code>INSUFFICIENT_DATA</code> alarm state to
   *           an <code>OK</code> state. This can be thought of as an <i>all clear</i>
   *           alarm notification.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>INSUFFICIENT_DATA</code> as the alarm trigger, a notification is
   *           sent when the alarm switches from an <code>OK</code> or <code>ALARM</code> alarm state to
   *           an <code>INSUFFICIENT_DATA</code> state.</p>
   *             </li>
   *          </ul>
   *          <p>The notification trigger defaults to <code>ALARM</code> if you don't specify this
   *       parameter.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   *          <p>Notifications are enabled by default if you don't specify this parameter.</p>
   */
  notificationEnabled?: boolean;
}

export namespace PutAlarmRequest {
  export const filterSensitiveLog = (obj: PutAlarmRequest): any => ({
    ...obj,
  });
}

export interface PutAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace PutAlarmResult {
  export const filterSensitiveLog = (obj: PutAlarmResult): any => ({
    ...obj,
  });
}

export interface PutInstancePublicPortsRequest {
  /**
   * <p>An array of objects to describe the ports to open for the specified instance.</p>
   */
  portInfos: PortInfo[] | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;
}

export namespace PutInstancePublicPortsRequest {
  export const filterSensitiveLog = (obj: PutInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface PutInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PutInstancePublicPortsResult {
  export const filterSensitiveLog = (obj: PutInstancePublicPortsResult): any => ({
    ...obj,
  });
}

export interface RebootInstanceRequest {
  /**
   * <p>The name of the instance to reboot.</p>
   */
  instanceName: string | undefined;
}

export namespace RebootInstanceRequest {
  export const filterSensitiveLog = (obj: RebootInstanceRequest): any => ({
    ...obj,
  });
}

export interface RebootInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootInstanceResult {
  export const filterSensitiveLog = (obj: RebootInstanceResult): any => ({
    ...obj,
  });
}

export interface RebootRelationalDatabaseRequest {
  /**
   * <p>The name of your database to reboot.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace RebootRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface RebootRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface RegisterContainerImageRequest {
  /**
   * <p>The name of the container service for which to register a container image.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The label for the container image when it's registered to the container service.</p>
   *
   *          <p>Use a descriptive label that you can use to track the different versions of your
   *       registered container images.</p>
   *
   *          <p>Use the <code>GetContainerImages</code> action to return the container images registered
   *       to a Lightsail container service. The label is the <code><imagelabel></code> portion
   *       of the following image name example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>:container-service-1.<imagelabel>.1</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>If the name of your container service is <code>mycontainerservice</code>, and the label
   *       that you specify is <code>mystaticwebsite</code>, then the name of the registered container
   *       image will be <code>:mycontainerservice.mystaticwebsite.1</code>.</p>
   *
   *          <p>The number at the end of these image name examples represents the version of the
   *       registered container image. If you push and register another container image to the same
   *       Lightsail container service, with the same label, then the version number for the new
   *       registered container image will be <code>2</code>. If you push and register another container
   *       image, the version number will be <code>3</code>, and so on.</p>
   */
  label: string | undefined;

  /**
   * <p>The digest of the container image to be registered.</p>
   */
  digest: string | undefined;
}

export namespace RegisterContainerImageRequest {
  export const filterSensitiveLog = (obj: RegisterContainerImageRequest): any => ({
    ...obj,
  });
}

export interface RegisterContainerImageResult {
  /**
   * <p>Describes a container image that is registered to an Amazon Lightsail container
   *       service.</p>
   */
  containerImage?: ContainerImage;
}

export namespace RegisterContainerImageResult {
  export const filterSensitiveLog = (obj: RegisterContainerImageResult): any => ({
    ...obj,
  });
}

export interface ReleaseStaticIpRequest {
  /**
   * <p>The name of the static IP to delete.</p>
   */
  staticIpName: string | undefined;
}

export namespace ReleaseStaticIpRequest {
  export const filterSensitiveLog = (obj: ReleaseStaticIpRequest): any => ({
    ...obj,
  });
}

export interface ReleaseStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ReleaseStaticIpResult {
  export const filterSensitiveLog = (obj: ReleaseStaticIpResult): any => ({
    ...obj,
  });
}

export interface ResetDistributionCacheRequest {
  /**
   * <p>The name of the distribution for which to reset cache.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace ResetDistributionCacheRequest {
  export const filterSensitiveLog = (obj: ResetDistributionCacheRequest): any => ({
    ...obj,
  });
}

export interface ResetDistributionCacheResult {
  /**
   * <p>The status of the reset cache request.</p>
   */
  status?: string;

  /**
   * <p>The timestamp of the reset cache request (e.g., <code>1479734909.17</code>) in Unix time
   *       format.</p>
   */
  createTime?: Date;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace ResetDistributionCacheResult {
  export const filterSensitiveLog = (obj: ResetDistributionCacheResult): any => ({
    ...obj,
  });
}

export interface SendContactMethodVerificationRequest {
  /**
   * <p>The protocol to verify, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   */
  protocol: ContactMethodVerificationProtocol | string | undefined;
}

export namespace SendContactMethodVerificationRequest {
  export const filterSensitiveLog = (obj: SendContactMethodVerificationRequest): any => ({
    ...obj,
  });
}

export interface SendContactMethodVerificationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace SendContactMethodVerificationResult {
  export const filterSensitiveLog = (obj: SendContactMethodVerificationResult): any => ({
    ...obj,
  });
}

export interface StartInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to start.</p>
   */
  instanceName: string | undefined;
}

export namespace StartInstanceRequest {
  export const filterSensitiveLog = (obj: StartInstanceRequest): any => ({
    ...obj,
  });
}

export interface StartInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartInstanceResult {
  export const filterSensitiveLog = (obj: StartInstanceResult): any => ({
    ...obj,
  });
}

export interface StartRelationalDatabaseRequest {
  /**
   * <p>The name of your database to start.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace StartRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: StartRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface StartRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: StartRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface StopInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to stop.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a
   *         <code>stopping</code> state to stop.</p>
   *          <important>
   *             <p>Only use the <code>force</code> parameter if your instance is stuck in the
   *           <code>stopping</code> state. In any other state, your instance should stop normally
   *         without adding this parameter to your API request.</p>
   *          </important>
   */
  force?: boolean;
}

export namespace StopInstanceRequest {
  export const filterSensitiveLog = (obj: StopInstanceRequest): any => ({
    ...obj,
  });
}

export interface StopInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopInstanceResult {
  export const filterSensitiveLog = (obj: StopInstanceResult): any => ({
    ...obj,
  });
}

export interface StopRelationalDatabaseRequest {
  /**
   * <p>The name of your database to stop.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of your new database snapshot to be created before stopping your database.</p>
   */
  relationalDatabaseSnapshotName?: string;
}

export namespace StopRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: StopRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface StopRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: StopRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The name of the resource to which you are adding tags.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add a tag.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tag key and optional value.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

export interface TestAlarmRequest {
  /**
   * <p>The name of the alarm to test.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The alarm state to test.</p>
   *          <p>An alarm has the following possible states that can be tested:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM</code> - The metric is outside of the defined threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not
   *           available, or not enough data is available for the metric to determine the alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The metric is within the defined threshold.</p>
   *             </li>
   *          </ul>
   */
  state: AlarmState | string | undefined;
}

export namespace TestAlarmRequest {
  export const filterSensitiveLog = (obj: TestAlarmRequest): any => ({
    ...obj,
  });
}

export interface TestAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TestAlarmResult {
  export const filterSensitiveLog = (obj: TestAlarmResult): any => ({
    ...obj,
  });
}

export interface UnpeerVpcRequest {}

export namespace UnpeerVpcRequest {
  export const filterSensitiveLog = (obj: UnpeerVpcRequest): any => ({
    ...obj,
  });
}

export interface UnpeerVpcResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UnpeerVpcResult {
  export const filterSensitiveLog = (obj: UnpeerVpcResult): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The name of the resource from which you are removing a tag.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tag keys to delete from the specified resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}

export interface UpdateContainerServiceRequest {
  /**
   * <p>The name of the container service to update.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The power for the container service.</p>
   *
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *
   *          <p>Use the <code>GetContainerServicePowers</code> action to view the specifications of each
   *       power option.</p>
   */
  power?: ContainerServicePowerName | string;

  /**
   * <p>The scale for the container service.</p>
   *
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   */
  scale?: number;

  /**
   * <p>A Boolean value to indicate whether the container service is disabled.</p>
   */
  isDisabled?: boolean;

  /**
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
   *
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   */
  publicDomainNames?: { [key: string]: string[] };
}

export namespace UpdateContainerServiceRequest {
  export const filterSensitiveLog = (obj: UpdateContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface UpdateContainerServiceResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace UpdateContainerServiceResult {
  export const filterSensitiveLog = (obj: UpdateContainerServiceResult): any => ({
    ...obj,
  });
}

export interface UpdateDistributionRequest {
  /**
   * <p>The name of the distribution to update.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: InputOrigin;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   *          <note>
   *             <p>The <code>cacheBehaviorSettings</code> specified in your
   *           <code>UpdateDistributionRequest</code> will replace your distribution's existing
   *         settings.</p>
   *          </note>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>Indicates whether to enable the distribution.</p>
   */
  isEnabled?: boolean;
}

export namespace UpdateDistributionRequest {
  export const filterSensitiveLog = (obj: UpdateDistributionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDistributionResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionResult {
  export const filterSensitiveLog = (obj: UpdateDistributionResult): any => ({
    ...obj,
  });
}

export interface UpdateDistributionBundleRequest {
  /**
   * <p>The name of the distribution for which to update the bundle.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;

  /**
   * <p>The bundle ID of the new bundle to apply to your distribution.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId?: string;
}

export namespace UpdateDistributionBundleRequest {
  export const filterSensitiveLog = (obj: UpdateDistributionBundleRequest): any => ({
    ...obj,
  });
}

export interface UpdateDistributionBundleResult {
  /**
   * <p>Describes the API operation.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionBundleResult {
  export const filterSensitiveLog = (obj: UpdateDistributionBundleResult): any => ({
    ...obj,
  });
}

export interface UpdateDomainEntryRequest {
  /**
   * <p>The name of the domain recordset to update.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about the domain entry.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace UpdateDomainEntryRequest {
  export const filterSensitiveLog = (obj: UpdateDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateDomainEntryResult {
  export const filterSensitiveLog = (obj: UpdateDomainEntryResult): any => ({
    ...obj,
  });
}

export interface UpdateLoadBalancerAttributeRequest {
  /**
   * <p>The name of the load balancer that you want to modify (e.g.,
   *       <code>my-load-balancer</code>.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of the attribute you want to update. Valid values are below.</p>
   */
  attributeName: LoadBalancerAttributeName | string | undefined;

  /**
   * <p>The value that you want to specify for the attribute name.</p>
   */
  attributeValue: string | undefined;
}

export namespace UpdateLoadBalancerAttributeRequest {
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoadBalancerAttributeResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateLoadBalancerAttributeResult {
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeResult): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseRequest {
  /**
   * <p>The name of your database to update.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The password for the master user of your database. The password can include any printable
   *       ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain 8 to 41 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>When <code>true</code>, the master user password is changed to a new strong password
   *       generated by Lightsail.</p>
   *          <p>Use the <code>get relational database master user password</code> operation to get the new
   *       password.</p>
   */
  rotateMasterUserPassword?: boolean;

  /**
   * <p>The daily time range during which automated backups are created for your database if
   *       automated backups are enabled.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p>
   *                <p>Example: <code>16:00-16:30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on your database.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the week.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p>
   *             </li>
   *             <li>
   *                <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>Tue:17:00-Tue:17:30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>When <code>true</code>, enables automated backup retention for your database.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   */
  enableBackupRetention?: boolean;

  /**
   * <p>When <code>true</code>, disables automated backup retention for your database.</p>
   *          <p>Disabling backup retention deletes all automated database backups. Before disabling this,
   *       you may want to create a snapshot of your database using the <code>create relational database
   *         snapshot</code> operation.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   */
  disableBackupRetention?: boolean;

  /**
   * <p>Specifies the accessibility options for your database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies
   *       changes during the preferred maintenance window. Some changes may cause an outage.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  applyImmediately?: boolean;

  /**
   * <p>Indicates the certificate that needs to be associated with the database.</p>
   */
  caCertificateIdentifier?: string;
}

export namespace UpdateRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to update parameters.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The database parameters to update.</p>
   */
  parameters: RelationalDatabaseParameter[] | undefined;
}

export namespace UpdateRelationalDatabaseParametersRequest {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseParametersResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseParametersResult {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
}
