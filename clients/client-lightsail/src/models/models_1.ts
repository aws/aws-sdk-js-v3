// smithy-typescript generated code
import type {
  AlarmState,
  CertificateProvider,
  ComparisonOperator,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  ContainerServicePowerName,
  HttpEndpoint,
  HttpProtocolIpv6,
  HttpTokens,
  InstanceHealthReason,
  InstanceHealthState,
  IpAddressType,
  LoadBalancerAttributeName,
  LoadBalancerMetricName,
  LoadBalancerProtocol,
  LoadBalancerState,
  LoadBalancerTlsCertificateDnsRecordCreationStateCode,
  LoadBalancerTlsCertificateDomainStatus,
  LoadBalancerTlsCertificateFailureReason,
  LoadBalancerTlsCertificateRenewalStatus,
  LoadBalancerTlsCertificateRevocationReason,
  LoadBalancerTlsCertificateStatus,
  MetricName,
  MetricStatistic,
  MetricUnit,
  PartnerStatus,
  ProfileType,
  RegionName,
  RelationalDatabaseEngine,
  RelationalDatabaseMetricName,
  RelationalDatabasePasswordVersion,
  ResourceBucketAccess,
  ResourceType,
  SetupStatus,
  TierName,
  TreatMissingData,
  ViewerMinimumTlsProtocolVersionEnum,
} from "./enums";
import type {
  AccessRules,
  AvailabilityZone,
  Bucket,
  BucketAccessLogConfig,
  BucketCorsConfig,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  ContainerImage,
  ContainerService,
  DistributionCustomErrorResponse,
  DomainEntry,
  InputOrigin,
  InstanceSnapshot,
  InstanceState,
  KeyPair,
  MetricDatapoint,
  Operation,
  PortInfo,
  PrivateRegistryAccessRequest,
  ResourceLocation,
  Tag,
  WafRule,
} from "./models_0";

/**
 * @public
 */
export interface GetInstanceSnapshotsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetInstanceSnapshots` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotsResult {
  /**
   * An array of key-value pairs containing information about the results of your get instance snapshots request.
   *
   * @public
   */
  instanceSnapshots?: InstanceSnapshot[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetInstanceSnapshots` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceStateRequest {
  /**
   * The name of the instance to get state information about.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceStateResult {
  /**
   * The state of the instance.
   *
   * @public
   */
  state?: InstanceState | undefined;
}

/**
 * @public
 */
export interface GetKeyPairRequest {
  /**
   * The name of the key pair for which you are requesting information.
   *
   * @public
   */
  keyPairName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyPairResult {
  /**
   * An array of key-value pairs containing information about the key pair.
   *
   * @public
   */
  keyPair?: KeyPair | undefined;
}

/**
 * @public
 */
export interface GetKeyPairsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetKeyPairs` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * A Boolean value that indicates whether to include the default key pair in the response of your request.
   *
   * @public
   */
  includeDefaultKeyPair?: boolean | undefined;
}

/**
 * @public
 */
export interface GetKeyPairsResult {
  /**
   * An array of key-value pairs containing information about the key pairs.
   *
   * @public
   */
  keyPairs?: KeyPair[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetKeyPairs` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerRequest {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  loadBalancerName: string | undefined;
}

/**
 * Describes information about the health of the instance.
 *
 * @public
 */
export interface InstanceHealthSummary {
  /**
   * The name of the Lightsail instance for which you are requesting health check data.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * Describes the overall instance health. Valid values are below.
   *
   * @public
   */
  instanceHealth?: InstanceHealthState | undefined;

  /**
   * More information about the instance health. If the `instanceHealth` is `healthy`, then an `instanceHealthReason` value is not provided.
   *
   * If **`instanceHealth`** is `initial`, the **`instanceHealthReason`** value can be one of the following:
   *
   * - **`Lb.RegistrationInProgress`** - The target instance is in the process of being registered with the load balancer.
   * - **`Lb.InitialHealthChecking`** - The Lightsail load balancer is still sending the target instance the minimum number of health checks required to determine its health status.
   *
   * If **`instanceHealth`** is `unhealthy`, the **`instanceHealthReason`** value can be one of the following:
   *
   * - **`Instance.ResponseCodeMismatch`** - The health checks did not return an expected HTTP code.
   * - **`Instance.Timeout`** - The health check requests timed out.
   * - **`Instance.FailedHealthChecks`** - The health checks failed because the connection to the target instance timed out, the target instance response was malformed, or the target instance failed the health check for an unknown reason.
   * - **`Lb.InternalError`** - The health checks failed due to an internal error.
   *
   * If **`instanceHealth`** is `unused`, the **`instanceHealthReason`** value can be one of the following:
   *
   * - **`Instance.NotRegistered`** - The target instance is not registered with the target group.
   * - **`Instance.NotInUse`** - The target group is not used by any load balancer, or the target instance is in an Availability Zone that is not enabled for its load balancer.
   * - **`Instance.IpUnusable`** - The target IP address is reserved for use by a Lightsail load balancer.
   * - **`Instance.InvalidState`** - The target is in the stopped or terminated state.
   *
   * If **`instanceHealth`** is `draining`, the **`instanceHealthReason`** value can be one of the following:
   *
   * - **`Instance.DeregistrationInProgress`** - The target instance is in the process of being deregistered and the deregistration delay period has not expired.
   *
   * @public
   */
  instanceHealthReason?: InstanceHealthReason | undefined;
}

/**
 * Provides a summary of SSL/TLS certificate metadata.
 *
 * @public
 */
export interface LoadBalancerTlsCertificateSummary {
  /**
   * The name of the SSL/TLS certificate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * When `true`, the SSL/TLS certificate is attached to the Lightsail load balancer.
   *
   * @public
   */
  isAttached?: boolean | undefined;
}

/**
 * Describes a load balancer.
 *
 * @public
 */
export interface LoadBalancer {
  /**
   * The name of the load balancer (`my-load-balancer`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The date when your load balancer was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The AWS Region where your load balancer was created (`us-east-2a`). Lightsail automatically creates your load balancer across Availability Zones.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The resource type (`LoadBalancer`.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The DNS name of your Lightsail load balancer.
   *
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The status of your load balancer. Valid values are below.
   *
   * @public
   */
  state?: LoadBalancerState | undefined;

  /**
   * The protocol you have enabled for your load balancer. Valid values are below.
   *
   * You can't just have `HTTP_HTTPS`, but you can have just `HTTP`.
   *
   * @public
   */
  protocol?: LoadBalancerProtocol | undefined;

  /**
   * An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.
   *
   * @public
   */
  publicPorts?: number[] | undefined;

  /**
   * The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.
   *
   * @public
   */
  instancePort?: number | undefined;

  /**
   * An array of InstanceHealthSummary objects describing the health of the load balancer.
   *
   * @public
   */
  instanceHealthSummary?: InstanceHealthSummary[] | undefined;

  /**
   * An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if `true`, the certificate is attached to the load balancer.
   *
   * @public
   */
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[] | undefined;

  /**
   * A string to string map of the configuration options for your load balancer. Valid values are listed below.
   *
   * @public
   */
  configurationOptions?: Partial<Record<LoadBalancerAttributeName, string>> | undefined;

  /**
   * The IP address type of the load balancer.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.
   *
   * @public
   */
  httpsRedirectionEnabled?: boolean | undefined;

  /**
   * The name of the TLS security policy for the load balancer.
   *
   * @public
   */
  tlsPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerResult {
  /**
   * An object containing information about your load balancer.
   *
   * @public
   */
  loadBalancer?: LoadBalancer | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerMetricDataRequest {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid load balancer metric names are listed below, along with the most useful `statistics` to include in your request, and the published `unit` value.
   *
   * - **`ClientTLSNegotiationErrorCount`** - The number of TLS connections initiated by the client that did not establish a session with the load balancer due to a TLS error generated by the load balancer. Possible causes include a mismatch of ciphers or protocols.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HealthyHostCount`** - The number of target instances that are considered healthy.
   *
   *   `Statistics`: The most useful statistic are `Average`, `Minimum`, and `Maximum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_Instance_2XX_Count`** - The number of HTTP 2XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_Instance_3XX_Count`** - The number of HTTP 3XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_Instance_4XX_Count`** - The number of HTTP 4XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_Instance_5XX_Count`** - The number of HTTP 5XX response codes generated by the target instances. This does not include any response codes generated by the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_LB_4XX_Count`** - The number of HTTP 4XX client error codes that originated from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests were not received by the target instance. This count does not include response codes generated by the target instances.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`HTTPCode_LB_5XX_Count`** - The number of HTTP 5XX server error codes that originated from the load balancer. This does not include any response codes generated by the target instance. This metric is reported if there are no healthy instances attached to the load balancer, or if the request rate exceeds the capacity of the instances (spillover) or the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`InstanceResponseTime`** - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Seconds`.
   * - **`RejectedConnectionCount`** - The number of connections that were rejected because the load balancer had reached its maximum number of connections.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`RequestCount`** - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.
   *
   *   `Statistics`: The most useful statistic is `Sum`. Note that `Minimum`, `Maximum`, and `Average` all return `1`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`UnhealthyHostCount`** - The number of target instances that are considered unhealthy.
   *
   *   `Statistics`: The most useful statistic are `Average`, `Minimum`, and `Maximum`.
   *
   *   `Unit`: The published unit is `Count`.
   *
   * @public
   */
  metricName: LoadBalancerMetricName | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The start time of the period.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the period.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units with each available metric, see the `metricName` parameter.
   *
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: LoadBalancerMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancersRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetLoadBalancers` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancersResult {
  /**
   * An array of LoadBalancer objects describing your load balancers.
   *
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetLoadBalancers` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsCertificatesRequest {
  /**
   * The name of the load balancer you associated with your SSL/TLS certificate.
   *
   * @public
   */
  loadBalancerName: string | undefined;
}

/**
 * An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.
 *
 * @public
 */
export interface LoadBalancerTlsCertificateDnsRecordCreationState {
  /**
   * The status code for the automated DNS record creation.
   *
   * Following are the possible values:
   *
   * - `SUCCEEDED` - The validation records were successfully added.
   * - `STARTED` - The automatic DNS record creation has started.
   * - `FAILED` - The validation record addition failed.
   *
   * @public
   */
  code?: LoadBalancerTlsCertificateDnsRecordCreationStateCode | undefined;

  /**
   * The message that describes the reason for the status code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes the validation record of each domain name in the SSL/TLS certificate.
 *
 * @public
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * A fully qualified domain name in the certificate. For example, `example.com`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of validation record. For example, `CNAME` for domain validation.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value for that type.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The validation status. Valid values are listed below.
   *
   * @public
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | undefined;

  /**
   * The domain name against which your SSL/TLS certificate was validated.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of a domain to validate domain ownership.
   *
   * @public
   */
  dnsRecordCreationState?: LoadBalancerTlsCertificateDnsRecordCreationState | undefined;
}

/**
 * Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
 *
 * @public
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * The fully qualified domain name in the certificate request.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The status of the domain validation. Valid values are listed below.
   *
   * @public
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | undefined;
}

/**
 * Contains information about the status of Lightsail's managed renewal for the certificate.
 *
 * The renewal status of the certificate.
 *
 * The following renewal status are possible:
 *
 * - **`PendingAutoRenewal`** - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required.
 * - **`PendingValidation`** - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.
 * - **`Success`** - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required.
 * - **`Failed`** - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the `CreateCertificate` action.
 *
 * @public
 */
export interface LoadBalancerTlsCertificateRenewalSummary {
  /**
   * The renewal status of the certificate.
   *
   * The following renewal status are possible:
   *
   * - **`PendingAutoRenewal`** - Lightsail is attempting to automatically validate the domain names of the certificate. No further action is required.
   * - **`PendingValidation`** - Lightsail couldn't automatically validate one or more domain names of the certificate. You must take action to validate these domain names or the certificate won't be renewed. Check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.
   * - **`Success`** - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required.
   * - **`Failed`** - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the `CreateCertificate` action.
   *
   * @public
   */
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatus | undefined;

  /**
   * Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.
   *
   * @public
   */
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[] | undefined;
}

/**
 * Describes a load balancer SSL/TLS certificate.
 *
 * TLS is just an updated, more secure version of Secure Socket Layer (SSL).
 *
 * @public
 */
export interface LoadBalancerTlsCertificate {
  /**
   * The name of the SSL/TLS certificate (`my-certificate`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SSL/TLS certificate.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The time when you created your SSL/TLS certificate.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Web Services Region and Availability Zone where you created your certificate.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The resource type (`LoadBalancerTlsCertificate`).
   *
   * - **`Instance`** - A Lightsail instance (a virtual private server)
   * - **`StaticIp`** - A static IP address
   * - **`KeyPair`** - The key pair used to connect to a Lightsail instance
   * - **`InstanceSnapshot`** - A Lightsail instance snapshot
   * - **`Domain`** - A DNS zone
   * - **`PeeredVpc`** - A peered VPC
   * - **`LoadBalancer`** - A Lightsail load balancer
   * - **`LoadBalancerTlsCertificate`** - An SSL/TLS certificate associated with a Lightsail load balancer
   * - **`Disk`** - A Lightsail block storage disk
   * - **`DiskSnapshot`** - A block storage disk snapshot
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The load balancer name where your SSL/TLS certificate is attached.
   *
   * @public
   */
  loadBalancerName?: string | undefined;

  /**
   * When `true`, the SSL/TLS certificate is attached to the Lightsail load balancer.
   *
   * @public
   */
  isAttached?: boolean | undefined;

  /**
   * The validation status of the SSL/TLS certificate. Valid values are below.
   *
   * @public
   */
  status?: LoadBalancerTlsCertificateStatus | undefined;

  /**
   * The domain name for your SSL/TLS certificate.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.
   *
   * @public
   */
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[] | undefined;

  /**
   * The validation failure reason, if any, of the certificate.
   *
   * The following failure reasons are possible:
   *
   * - **`NO_AVAILABLE_CONTACTS`** - This failure applies to email validation, which is not available for Lightsail certificates.
   * - **`ADDITIONAL_VERIFICATION_REQUIRED`** - Lightsail requires additional information to process this certificate request. This can happen as a fraud-protection measure, such as when the domain ranks within the Alexa top 1000 websites. To provide the required information, use the [AWS Support Center](https://console.aws.amazon.com/support/home) to contact AWS Support.
   *
   *   > **Note:** You cannot request a certificate for Amazon-owned domain names such as those ending in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.
   * - **`DOMAIN_NOT_ALLOWED`** - One or more of the domain names in the certificate request was reported as an unsafe domain by [VirusTotal](https://www.virustotal.com/gui/home/url). To correct the problem, search for your domain name on the [VirusTotal](https://www.virustotal.com/gui/home/url) website. If your domain is reported as suspicious, see [Google Help for Hacked Websites](https://developers.google.com/web/fundamentals/security/hacked) to learn what you can do.
   *
   *   If you believe that the result is a false positive, notify the organization that is reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and cannot remove your domain from a block list itself. After you correct the problem and the VirusTotal registry has been updated, request a new certificate.
   *
   *   If you see this error and your domain is not included in the VirusTotal list, visit the [AWS Support Center](https://console.aws.amazon.com/support/home) and create a case.
   * - **`INVALID_PUBLIC_DOMAIN`** - One or more of the domain names in the certificate request is not valid. Typically, this is because a domain name in the request is not a valid top-level domain. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request, and ensure that all domain names in the request are for valid top-level domains. For example, you cannot request a certificate for `example.invalidpublicdomain` because `invalidpublicdomain` is not a valid top-level domain.
   * - **`OTHER`** - Typically, this failure occurs when there is a typographical error in one or more of the domain names in the certificate request. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request.
   *
   * @public
   */
  failureReason?: LoadBalancerTlsCertificateFailureReason | undefined;

  /**
   * The time when the SSL/TLS certificate was issued.
   *
   * @public
   */
  issuedAt?: Date | undefined;

  /**
   * The issuer of the certificate.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * The algorithm used to generate the key pair (the public and private key).
   *
   * @public
   */
  keyAlgorithm?: string | undefined;

  /**
   * The timestamp when the SSL/TLS certificate expires.
   *
   * @public
   */
  notAfter?: Date | undefined;

  /**
   * The timestamp when the SSL/TLS certificate is first valid.
   *
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * An object that describes the status of the certificate renewal managed by Lightsail.
   *
   * @public
   */
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary | undefined;

  /**
   * The reason the certificate was revoked. This value is present only when the certificate status is `REVOKED`.
   *
   * @public
   */
  revocationReason?: LoadBalancerTlsCertificateRevocationReason | undefined;

  /**
   * The timestamp when the certificate was revoked. This value is present only when the certificate status is `REVOKED`.
   *
   * @public
   */
  revokedAt?: Date | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  serial?: string | undefined;

  /**
   * The algorithm that was used to sign the certificate.
   *
   * @public
   */
  signatureAlgorithm?: string | undefined;

  /**
   * The name of the entity that is associated with the public key contained in the certificate.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * An array of strings that specify the alternate domains (`example2.com`) and subdomains (`blog.example.com`) for the certificate.
   *
   * @public
   */
  subjectAlternativeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsCertificatesResult {
  /**
   * An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.
   *
   * @public
   */
  tlsCertificates?: LoadBalancerTlsCertificate[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsPoliciesRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetLoadBalancerTlsPolicies` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Describes the TLS security policies that are available for Lightsail load balancers.
 *
 * For more information about load balancer TLS security policies, see [Configuring TLS security policies on your Amazon Lightsail load balancers](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configure-load-balancer-tls-security-policy) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface LoadBalancerTlsPolicy {
  /**
   * The name of the TLS security policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A Boolean value that indicates whether the TLS security policy is the default.
   *
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * The description of the TLS security policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The protocols used in a given TLS security policy.
   *
   * @public
   */
  protocols?: string[] | undefined;

  /**
   * The ciphers used by the TLS security policy.
   *
   * The ciphers are listed in order of preference.
   *
   * @public
   */
  ciphers?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsPoliciesResult {
  /**
   * An array of objects that describe the TLS security policies that are available.
   *
   * @public
   */
  tlsPolicies?: LoadBalancerTlsPolicy[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetLoadBalancerTlsPolicies` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationRequest {
  /**
   * A GUID used to identify the operation.
   *
   * @public
   */
  operationId: string | undefined;
}

/**
 * @public
 */
export interface GetOperationResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface GetOperationsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetOperations` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetOperations` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsForResourceRequest {
  /**
   * The name of the resource for which you are requesting information.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetOperationsForResource` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsForResourceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;

  /**
   * (Discontinued) Returns the number of pages of results that remain.
   *
   * > **Note:** In releases prior to June 12, 2017, this parameter returned `null` by the API. It is now discontinued, and the API returns the `next page token` parameter instead.
   *
   * @deprecated deprecated.
   * @public
   */
  nextPageCount?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetOperationsForResource` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {}

/**
 * An object that contains information about the Lightsail partner program membership of an Amazon Lightsail account.
 *
 * @public
 */
export interface PartnerInfo {
  /**
   * The timestamp when the account was enrolled in the Lightsail partner program.
   *
   * @public
   */
  enrolledAt: Date | undefined;

  /**
   * The tier of the partner membership.
   *
   * @public
   */
  tierName?: TierName | undefined;

  /**
   * The status of the partner membership.
   *
   * The following statuses are possible:
   *
   * - `Active` – The membership is active, and the benefits of the current tier are available to the account.
   * - `Suspended` – The membership is suspended, and the benefits of the tier are not available to the account.
   *
   * @public
   */
  status: PartnerStatus | undefined;
}

/**
 * @public
 */
export interface GetProfileResult {
  /**
   * The type of the profile.
   *
   * The following profile types are possible:
   *
   * - `Lightsailor` – The account is not enrolled in the Lightsail partner program.
   * - `LightsailPartner` – The account is enrolled in the Lightsail partner program.
   *
   * @public
   */
  profileType: ProfileType | undefined;

  /**
   * An object that describes the partner membership of the account, such as the tier of the membership, its status, and when the account was enrolled.
   *
   * This parameter is returned only for accounts that have a `profileType` of `LightsailPartner`.
   *
   * @public
   */
  partner?: PartnerInfo | undefined;
}

/**
 * @public
 */
export interface GetRegionsRequest {
  /**
   * A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: `us-east-2a`.
   *
   * @public
   */
  includeAvailabilityZones?: boolean | undefined;

  /**
   * A Boolean value indicating whether to also include Availability Zones for databases in your get regions request. Availability Zones are indicated with a letter (`us-east-2a`).
   *
   * @public
   */
  includeRelationalDatabaseAvailabilityZones?: boolean | undefined;
}

/**
 * Describes the Amazon Web Services Region.
 *
 * @public
 */
export interface Region {
  /**
   * The continent code (`NA`, meaning North America).
   *
   * @public
   */
  continentCode?: string | undefined;

  /**
   * The description of the Amazon Web Services Region (`This region is recommended to serve users in the eastern United States and eastern Canada`).
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The display name (`Ohio`).
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The region name (`us-east-2`).
   *
   * @public
   */
  name?: RegionName | undefined;

  /**
   * The Availability Zones. Follows the format `us-east-2a` (case-sensitive).
   *
   * @public
   */
  availabilityZones?: AvailabilityZone[] | undefined;

  /**
   * The Availability Zones for databases. Follows the format `us-east-2a` (case-sensitive).
   *
   * @public
   */
  relationalDatabaseAvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * @public
 */
export interface GetRegionsResult {
  /**
   * An array of key-value pairs containing information about your get regions request.
   *
   * @public
   */
  regions?: Region[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseRequest {
  /**
   * The name of the database that you are looking up.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * Describes the hardware of a database.
 *
 * @public
 */
export interface RelationalDatabaseHardware {
  /**
   * The number of vCPUs for the database.
   *
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * The size of the disk for the database.
   *
   * @public
   */
  diskSizeInGb?: number | undefined;

  /**
   * The amount of RAM in GB for the database.
   *
   * @public
   */
  ramSizeInGb?: number | undefined;
}

/**
 * Describes an endpoint for a database.
 *
 * @public
 */
export interface RelationalDatabaseEndpoint {
  /**
   * Specifies the port that the database is listening on.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies the DNS address of the database.
   *
   * @public
   */
  address?: string | undefined;
}

/**
 * Describes a pending database maintenance action.
 *
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * The type of pending database maintenance action.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * Additional detail about the pending database maintenance action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The effective date of the pending database maintenance action.
   *
   * @public
   */
  currentApplyDate?: Date | undefined;
}

/**
 * Describes a pending database value modification.
 *
 * @public
 */
export interface PendingModifiedRelationalDatabaseValues {
  /**
   * The password for the master user of the database.
   *
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * The database engine version.
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * A Boolean value indicating whether automated backup retention is enabled.
   *
   * @public
   */
  backupRetentionEnabled?: boolean | undefined;
}

/**
 * Describes a database.
 *
 * @public
 */
export interface RelationalDatabase {
  /**
   * The unique name of the database resource in Lightsail.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the database was created. Formatted in Unix time.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Region name and Availability Zone where the database is located.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type for the database (for example, `RelationalDatabase`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The blueprint ID for the database. A blueprint describes the major engine version of a database.
   *
   * @public
   */
  relationalDatabaseBlueprintId?: string | undefined;

  /**
   * The bundle ID for the database. A bundle describes the performance specifications for your database.
   *
   * @public
   */
  relationalDatabaseBundleId?: string | undefined;

  /**
   * The name of the master database created when the Lightsail database resource is created.
   *
   * @public
   */
  masterDatabaseName?: string | undefined;

  /**
   * Describes the hardware of the database.
   *
   * @public
   */
  hardware?: RelationalDatabaseHardware | undefined;

  /**
   * Describes the current state of the database.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * Describes the secondary Availability Zone of a high availability database.
   *
   * The secondary database is used for failover support of a high availability database.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * A Boolean value indicating whether automated backup retention is enabled for the database.
   *
   * @public
   */
  backupRetentionEnabled?: boolean | undefined;

  /**
   * Describes pending database value modifications.
   *
   * @public
   */
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues | undefined;

  /**
   * The database software (for example, `MySQL`).
   *
   * @public
   */
  engine?: string | undefined;

  /**
   * The database engine version (for example, `5.7.23`).
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * The latest point in time to which the database can be restored. Formatted in Unix time.
   *
   * @public
   */
  latestRestorableTime?: Date | undefined;

  /**
   * The master user name of the database.
   *
   * @public
   */
  masterUsername?: string | undefined;

  /**
   * The status of parameter updates for the database.
   *
   * @public
   */
  parameterApplyStatus?: string | undefined;

  /**
   * The daily time range during which automated backups are created for the database (for example, `16:00-16:30`).
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur on the database.
   *
   * In the format `ddd:hh24:mi-ddd:hh24:mi`. For example, `Tue:17:00-Tue:17:30`.
   *
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * A Boolean value indicating whether the database is publicly accessible.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The master endpoint for the database.
   *
   * @public
   */
  masterEndpoint?: RelationalDatabaseEndpoint | undefined;

  /**
   * Describes the pending maintenance actions for the database.
   *
   * @public
   */
  pendingMaintenanceActions?: PendingMaintenanceAction[] | undefined;

  /**
   * The certificate associated with the database.
   *
   * @public
   */
  caCertificateIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseResult {
  /**
   * An object describing the specified database.
   *
   * @public
   */
  relationalDatabase?: RelationalDatabase | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBlueprintsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseBlueprints` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Describes a database image, or blueprint. A blueprint describes the major engine version of a database.
 *
 * @public
 */
export interface RelationalDatabaseBlueprint {
  /**
   * The ID for the database blueprint.
   *
   * @public
   */
  blueprintId?: string | undefined;

  /**
   * The database software of the database blueprint (for example, `MySQL`).
   *
   * @public
   */
  engine?: RelationalDatabaseEngine | undefined;

  /**
   * The database engine version for the database blueprint (for example, `5.7.23`).
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * The description of the database engine for the database blueprint.
   *
   * @public
   */
  engineDescription?: string | undefined;

  /**
   * The description of the database engine version for the database blueprint.
   *
   * @public
   */
  engineVersionDescription?: string | undefined;

  /**
   * A Boolean value indicating whether the engine version is the default for the database blueprint.
   *
   * @public
   */
  isEngineDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBlueprintsResult {
  /**
   * An object describing the result of your get relational database blueprints request.
   *
   * @public
   */
  blueprints?: RelationalDatabaseBlueprint[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabaseBlueprints` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBundlesRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseBundles` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.
   *
   * @public
   */
  includeInactive?: boolean | undefined;
}

/**
 * Describes a database bundle. A bundle describes the performance specifications of the database.
 *
 * @public
 */
export interface RelationalDatabaseBundle {
  /**
   * The ID for the database bundle.
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The name for the database bundle.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The cost of the database bundle in US currency.
   *
   * @public
   */
  price?: number | undefined;

  /**
   * The amount of RAM in GB (for example, `2.0`) for the database bundle.
   *
   * @public
   */
  ramSizeInGb?: number | undefined;

  /**
   * The size of the disk for the database bundle.
   *
   * @public
   */
  diskSizeInGb?: number | undefined;

  /**
   * The data transfer rate per month in GB for the database bundle.
   *
   * @public
   */
  transferPerMonthInGb?: number | undefined;

  /**
   * The number of virtual CPUs (vCPUs) for the database bundle.
   *
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * A Boolean value indicating whether the database bundle is encrypted.
   *
   * @public
   */
  isEncrypted?: boolean | undefined;

  /**
   * A Boolean value indicating whether the database bundle is active.
   *
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBundlesResult {
  /**
   * An object describing the result of your get relational database bundles request.
   *
   * @public
   */
  bundles?: RelationalDatabaseBundle[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabaseBundles` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseEventsRequest {
  /**
   * The name of the database from which to get events.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The number of minutes in the past from which to retrieve events. For example, to get all events from the past 2 hours, enter 120.
   *
   * Default: `60`
   *
   * The minimum is 1 and the maximum is 14 days (20160 minutes).
   *
   * @public
   */
  durationInMinutes?: number | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseEvents` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Describes an event for a database.
 *
 * @public
 */
export interface RelationalDatabaseEvent {
  /**
   * The database that the database event relates to.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * The timestamp when the database event was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The message of the database event.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The category that the database event belongs to.
   *
   * @public
   */
  eventCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseEventsResult {
  /**
   * An object describing the result of your get relational database events request.
   *
   * @public
   */
  relationalDatabaseEvents?: RelationalDatabaseEvent[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabaseEvents` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogEventsRequest {
  /**
   * The name of your database for which to get log events.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The name of the log stream.
   *
   * Use the `get relational database log streams` operation to get a list of available log streams.
   *
   * @public
   */
  logStreamName: string | undefined;

  /**
   * The start of the time interval from which to get log events.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input `1538424000` as the start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end of the time interval from which to get log events.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input `1538424000` as the end time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Parameter to specify if the log should start from head or tail. If `true` is specified, the log event starts from the head of the log. If `false` is specified, the log event starts from the tail of the log.
   *
   * > **Note:** For PostgreSQL, the default value of `false` is the only option available.
   *
   * @public
   */
  startFromHead?: boolean | undefined;

  /**
   * The token to advance to the next or previous page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseLogEvents` request. If your results are paginated, the response will return a next forward token and/or next backward token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Describes a database log event.
 *
 * @public
 */
export interface LogEvent {
  /**
   * The timestamp when the database log event was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The message of the database log event.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogEventsResult {
  /**
   * An object describing the result of your get relational database log events request.
   *
   * @public
   */
  resourceLogEvents?: LogEvent[] | undefined;

  /**
   * A token used for advancing to the previous page of results from your get relational database log events request.
   *
   * @public
   */
  nextBackwardToken?: string | undefined;

  /**
   * A token used for advancing to the next page of results from your get relational database log events request.
   *
   * @public
   */
  nextForwardToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogStreamsRequest {
  /**
   * The name of your database for which to get log streams.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogStreamsResult {
  /**
   * An object describing the result of your get relational database log streams request.
   *
   * @public
   */
  logStreams?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * The name of your database for which to get the master user password.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The password version to return.
   *
   * Specifying `CURRENT` or `PREVIOUS` returns the current or previous passwords respectively. Specifying `PENDING` returns the newest version of the password that will rotate to `CURRENT`. After the `PENDING` password rotates to `CURRENT`, the `PENDING` password is no longer available.
   *
   * Default: `CURRENT`
   *
   * @public
   */
  passwordVersion?: RelationalDatabasePasswordVersion | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * The master user password for the `password version` specified.
   *
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * The timestamp when the specified version of the master user password was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMetricDataRequest {
  /**
   * The name of your database from which to get metric data.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid relational database metric names are listed below, along with the most useful `statistics` to include in your request, and the published `unit` value. All relational database metric data is available in 1-minute (60 seconds) granularity.
   *
   * - **`CPUUtilization`** - The percentage of CPU utilization currently in use on the database.
   *
   *   `Statistics`: The most useful statistics are `Maximum` and `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`DatabaseConnections`** - The number of database connections in use.
   *
   *   `Statistics`: The most useful statistics are `Maximum` and `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`DiskQueueDepth`** - The number of outstanding IOs (read/write requests) that are waiting to access the disk.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`FreeStorageSpace`** - The amount of available storage space.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Bytes`.
   * - **`NetworkReceiveThroughput`** - The incoming (Receive) network traffic on the database, including both customer database traffic and AWS traffic used for monitoring and replication.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Bytes/Second`.
   * - **`NetworkTransmitThroughput`** - The outgoing (Transmit) network traffic on the database, including both customer database traffic and AWS traffic used for monitoring and replication.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Bytes/Second`.
   *
   * @public
   */
  metricName: RelationalDatabaseMetricName | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * All relational database metric data is available in 1-minute (60 seconds) granularity.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The start of the time interval from which to get metric data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input `1538424000` as the start time.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time interval from which to get metric data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input `1538424000` as the end time.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units with each available metric, see the `metricName` parameter.
   *
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: RelationalDatabaseMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseParametersRequest {
  /**
   * The name of your database for which to get parameters.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseParameters` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Describes the parameters of a database.
 *
 * @public
 */
export interface RelationalDatabaseParameter {
  /**
   * Specifies the valid range of values for the parameter.
   *
   * @public
   */
  allowedValues?: string | undefined;

  /**
   * Indicates when parameter updates are applied.
   *
   * Can be `immediate` or `pending-reboot`.
   *
   * @public
   */
  applyMethod?: string | undefined;

  /**
   * Specifies the engine-specific parameter type.
   *
   * @public
   */
  applyType?: string | undefined;

  /**
   * Specifies the valid data type for the parameter.
   *
   * @public
   */
  dataType?: string | undefined;

  /**
   * Provides a description of the parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A Boolean value indicating whether the parameter can be modified.
   *
   * @public
   */
  isModifiable?: boolean | undefined;

  /**
   * Specifies the name of the parameter.
   *
   * @public
   */
  parameterName?: string | undefined;

  /**
   * Specifies the value of the parameter.
   *
   * @public
   */
  parameterValue?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseParametersResult {
  /**
   * An object describing the result of your get relational database parameters request.
   *
   * @public
   */
  parameters?: RelationalDatabaseParameter[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabaseParameters` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabasesRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabases` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabasesResult {
  /**
   * An object describing the result of your get relational databases request.
   *
   * @public
   */
  relationalDatabases?: RelationalDatabase[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabases` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotRequest {
  /**
   * The name of the database snapshot for which to get information.
   *
   * @public
   */
  relationalDatabaseSnapshotName: string | undefined;
}

/**
 * Describes a database snapshot.
 *
 * @public
 */
export interface RelationalDatabaseSnapshot {
  /**
   * The name of the database snapshot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database snapshot.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the database snapshot was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Region name and Availability Zone where the database snapshot is located.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The software of the database snapshot (for example, `MySQL`)
   *
   * @public
   */
  engine?: string | undefined;

  /**
   * The database engine version for the database snapshot (for example, `5.7.23`).
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * The size of the disk in GB (for example, `32`) for the database snapshot.
   *
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * The state of the database snapshot.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The name of the source database from which the database snapshot was created.
   *
   * @public
   */
  fromRelationalDatabaseName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database from which the database snapshot was created.
   *
   * @public
   */
  fromRelationalDatabaseArn?: string | undefined;

  /**
   * The bundle ID of the database from which the database snapshot was created.
   *
   * @public
   */
  fromRelationalDatabaseBundleId?: string | undefined;

  /**
   * The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.
   *
   * @public
   */
  fromRelationalDatabaseBlueprintId?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotResult {
  /**
   * An object describing the specified database snapshot.
   *
   * @public
   */
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetRelationalDatabaseSnapshots` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotsResult {
  /**
   * An object describing the result of your get relational database snapshots request.
   *
   * @public
   */
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetRelationalDatabaseSnapshots` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSetupHistoryRequest {
  /**
   * The name of the resource for which you are requesting information.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetSetupHistory` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * Returns details about the commands that were run.
 *
 * @public
 */
export interface SetupExecutionDetails {
  /**
   * The command that was executed.
   *
   * @public
   */
  command?: string | undefined;

  /**
   * The timestamp for when the request was run.
   *
   * @public
   */
  dateTime?: Date | undefined;

  /**
   * The name of the target resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the `SetupInstanceHttps` request.
   *
   * @public
   */
  status?: SetupStatus | undefined;

  /**
   * The text written by the command to stderr.
   *
   * @public
   */
  standardError?: string | undefined;

  /**
   * The text written by the command to stdout.
   *
   * @public
   */
  standardOutput?: string | undefined;

  /**
   * The current version of the script..
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Returns information that was submitted during the `SetupInstanceHttps` request. Email information is redacted for privacy.
 *
 * @public
 */
export interface SetupRequest {
  /**
   * The name of the Lightsail instance.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The name of the domain and subdomains that the SSL/TLS certificate secures.
   *
   * @public
   */
  domainNames?: string[] | undefined;

  /**
   * The Certificate Authority (CA) that issues the SSL/TLS certificate.
   *
   * @public
   */
  certificateProvider?: CertificateProvider | undefined;
}

/**
 * The Lightsail resource that `SetupHistory` was ran on.
 *
 * @public
 */
export interface SetupHistoryResource {
  /**
   * The name of the Lightsail resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lightsail resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The timestamp for when the resource was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Describes the resource location.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type. For example, `Instance`.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;
}

/**
 * Returns a list of the commands that were ran on the target resource.
 *
 * The status of each command is also returned.
 *
 * @public
 */
export interface SetupHistory {
  /**
   * A GUID that's used to identify the operation.
   *
   * @public
   */
  operationId?: string | undefined;

  /**
   * Information about the specified request.
   *
   * @public
   */
  request?: SetupRequest | undefined;

  /**
   * The target resource name for the request.
   *
   * @public
   */
  resource?: SetupHistoryResource | undefined;

  /**
   * Describes the full details of the request.
   *
   * @public
   */
  executionDetails?: SetupExecutionDetails[] | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status?: SetupStatus | undefined;
}

/**
 * @public
 */
export interface GetSetupHistoryResult {
  /**
   * The historical information that's returned.
   *
   * @public
   */
  setupHistory?: SetupHistory[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetSetupHistory` request and specify the next page token using the pageToken parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStaticIpRequest {
  /**
   * The name of the static IP in Lightsail.
   *
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * Describes a static IP.
 *
 * @public
 */
export interface StaticIp {
  /**
   * The name of the static IP (`StaticIP-Ohio-EXAMPLE`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the static IP (`arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE`).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the static IP was created (`1479735304.222`).
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The region and Availability Zone where the static IP was created.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The resource type (usually `StaticIp`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The static IP address.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The instance where the static IP is attached (`Amazon_Linux-1GB-Ohio-1`).
   *
   * @public
   */
  attachedTo?: string | undefined;

  /**
   * A Boolean value indicating whether the static IP is attached.
   *
   * @public
   */
  isAttached?: boolean | undefined;
}

/**
 * @public
 */
export interface GetStaticIpResult {
  /**
   * An array of key-value pairs containing information about the requested static IP.
   *
   * @public
   */
  staticIp?: StaticIp | undefined;
}

/**
 * @public
 */
export interface GetStaticIpsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetStaticIps` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStaticIpsResult {
  /**
   * An array of key-value pairs containing information about your get static IPs request.
   *
   * @public
   */
  staticIps?: StaticIp[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetStaticIps` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * The name of the key pair for which you want to import the public key.
   *
   * @public
   */
  keyPairName: string | undefined;

  /**
   * A base64-encoded public key of the `ssh-rsa` type.
   *
   * @public
   */
  publicKeyBase64: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * Describes the attributes to update on a Lightsail instance when it starts.
 *
 * @public
 */
export interface InstanceAttributeUpdates {
  /**
   * The ID of the bundle to update the instance to.
   *
   * Specify one of the following values for the bundle ID:
   *
   * - **`auto`** – Updates an instance that runs on a previous-generation bundle to the newer-generation equivalent of that bundle. For example, specify `auto` to update an instance that runs on `small_2_0` to `small_3_0`.
   * - **Newer-generation bundle ID** – Updates an instance that runs on a previous-generation bundle to the specified bundle. For example, specify `small_3_0` to update an instance that runs on `small_2_0` to `small_3_0`.
   * - **Original bundle ID** – Updates an instance to the previous-generation bundle that it ran on before an earlier update. For example, specify `small_2_0` to return an instance that runs on `small_3_0` to `small_2_0`.
   *
   * > **Note:**
   * >
   * > The instance must be in the `stopped` state to update its bundle.
   * >
   * > There is no additional cost to update an instance to a newer-generation bundle.
   *
   * @public
   */
  bundleId?: string | undefined;
}

/**
 * @public
 */
export interface IsVpcPeeredRequest {}

/**
 * @public
 */
export interface IsVpcPeeredResult {
  /**
   * Returns `true` if the Lightsail VPC is peered; otherwise, `false`.
   *
   * @public
   */
  isPeered?: boolean | undefined;
}

/**
 * @public
 */
export interface OpenInstancePublicPortsRequest {
  /**
   * An object to describe the ports to open for the specified instance.
   *
   * @public
   */
  portInfo: PortInfo | undefined;

  /**
   * The name of the instance for which to open ports.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface OpenInstancePublicPortsResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface PeerVpcRequest {}

/**
 * @public
 */
export interface PeerVpcResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface PutAlarmRequest {
  /**
   * The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The name of the metric to associate with the alarm.
   *
   * You can configure up to two alarms per metric.
   *
   * The following metrics are available for each resource type:
   *
   * - **Instances**: `BurstCapacityPercentage`, `BurstCapacityTime`, `CPUUtilization`, `NetworkIn`, `NetworkOut`, `StatusCheckFailed`, `StatusCheckFailed_Instance`, `StatusCheckFailed_System`, `DiskReadOps`, `DiskWriteOps`, `DiskReadBytes`, `DiskWriteBytes`, `DiskTotalReadTime`, `DiskTotalWriteTime`, and `DiskQueueLength`.
   * - **Load balancers**: `ClientTLSNegotiationErrorCount`, `HealthyHostCount`, `UnhealthyHostCount`, `HTTPCode_LB_4XX_Count`, `HTTPCode_LB_5XX_Count`, `HTTPCode_Instance_2XX_Count`, `HTTPCode_Instance_3XX_Count`, `HTTPCode_Instance_4XX_Count`, `HTTPCode_Instance_5XX_Count`, `InstanceResponseTime`, `RejectedConnectionCount`, and `RequestCount`.
   * - **Relational databases**: `CPUUtilization`, `DatabaseConnections`, `DiskQueueDepth`, `FreeStorageSpace`, `NetworkReceiveThroughput`, and `NetworkTransmitThroughput`.
   *
   * For more information about these metrics, see [Metrics available in Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-resource-health-metrics#available-metrics).
   *
   * @public
   */
  metricName: MetricName | undefined;

  /**
   * The name of the Lightsail resource that will be monitored.
   *
   * Instances, load balancers, and relational databases are the only Lightsail resources that can currently be monitored by alarms.
   *
   * @public
   */
  monitoredResourceName: string | undefined;

  /**
   * The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.
   *
   * @public
   */
  comparisonOperator: ComparisonOperator | undefined;

  /**
   * The value against which the specified statistic is compared.
   *
   * @public
   */
  threshold: number | undefined;

  /**
   * The number of most recent periods over which data is compared to the specified threshold. If you are setting an "M out of N" alarm, this value (`evaluationPeriods`) is the N.
   *
   * If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies the rolling period of time in which data points are evaluated.
   *
   * Each evaluation period is five minutes long. For example, specify an evaluation period of 24 to evaluate a metric over a rolling period of two hours.
   *
   * You can specify a minimum valuation period of 1 (5 minutes), and a maximum evaluation period of 288 (24 hours).
   *
   * @public
   */
  evaluationPeriods: number | undefined;

  /**
   * The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an "M out of N" alarm, this value (`datapointsToAlarm`) is the M.
   *
   * @public
   */
  datapointsToAlarm?: number | undefined;

  /**
   * Sets how this alarm will handle missing data points.
   *
   * An alarm can treat missing data in the following ways:
   *
   * - `breaching` - Assume the missing data is not within the threshold. Missing data counts towards the number of times the metric is not within the threshold.
   * - `notBreaching` - Assume the missing data is within the threshold. Missing data does not count towards the number of times the metric is not within the threshold.
   * - `ignore` - Ignore the missing data. Maintains the current alarm state.
   * - `missing` - Missing data is treated as missing.
   *
   * If `treatMissingData` is not specified, the default behavior of `missing` is used.
   *
   * @public
   */
  treatMissingData?: TreatMissingData | undefined;

  /**
   * The contact protocols to use for the alarm, such as `Email`, `SMS` (text messaging), or both.
   *
   * A notification is sent via the specified contact protocol if notifications are enabled for the alarm, and when the alarm is triggered.
   *
   * A notification is not sent if a contact protocol is not specified, if the specified contact protocol is not configured in the Amazon Web Services Region, or if notifications are not enabled for the alarm using the `notificationEnabled` paramater.
   *
   * Use the `CreateContactMethod` action to configure a contact protocol in an Amazon Web Services Region.
   *
   * @public
   */
  contactProtocols?: ContactProtocol[] | undefined;

  /**
   * The alarm states that trigger a notification.
   *
   * An alarm has the following possible states:
   *
   * - `ALARM` - The metric is outside of the defined threshold.
   * - `INSUFFICIENT_DATA` - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.
   * - `OK` - The metric is within the defined threshold.
   *
   * When you specify a notification trigger, the `ALARM` state must be specified. The `INSUFFICIENT_DATA` and `OK` states can be specified in addition to the `ALARM` state.
   *
   * - If you specify `OK` as an alarm trigger, a notification is sent when the alarm switches from an `ALARM` or `INSUFFICIENT_DATA` alarm state to an `OK` state. This can be thought of as an *all clear* alarm notification.
   * - If you specify `INSUFFICIENT_DATA` as the alarm trigger, a notification is sent when the alarm switches from an `OK` or `ALARM` alarm state to an `INSUFFICIENT_DATA` state.
   *
   * The notification trigger defaults to `ALARM` if you don't specify this parameter.
   *
   * @public
   */
  notificationTriggers?: AlarmState[] | undefined;

  /**
   * Indicates whether the alarm is enabled.
   *
   * Notifications are enabled by default if you don't specify this parameter.
   *
   * @public
   */
  notificationEnabled?: boolean | undefined;

  /**
   * The tag keys and optional values to add to the alarm during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAlarmResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface PutInstancePublicPortsRequest {
  /**
   * An array of objects to describe the ports to open for the specified instance.
   *
   * @public
   */
  portInfos: PortInfo[] | undefined;

  /**
   * The name of the instance for which to open ports.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface PutInstancePublicPortsResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface RebootInstanceRequest {
  /**
   * The name of the instance to reboot.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface RebootInstanceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface RebootRelationalDatabaseRequest {
  /**
   * The name of your database to reboot.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface RebootRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface RegisterContainerImageRequest {
  /**
   * The name of the container service for which to register a container image.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The label for the container image when it's registered to the container service.
   *
   * Use a descriptive label that you can use to track the different versions of your registered container images.
   *
   * Use the `GetContainerImages` action to return the container images registered to a Lightsail container service. The label is the `<imagelabel>` portion of the following image name example:
   *
   * - `:container-service-1.<imagelabel>.1`
   *
   * If the name of your container service is `mycontainerservice`, and the label that you specify is `mystaticwebsite`, then the name of the registered container image will be `:mycontainerservice.mystaticwebsite.1`.
   *
   * The number at the end of these image name examples represents the version of the registered container image. If you push and register another container image to the same Lightsail container service, with the same label, then the version number for the new registered container image will be `2`. If you push and register another container image, the version number will be `3`, and so on.
   *
   * @public
   */
  label: string | undefined;

  /**
   * The digest of the container image to be registered.
   *
   * @public
   */
  digest: string | undefined;
}

/**
 * @public
 */
export interface RegisterContainerImageResult {
  /**
   * An object that describes a container image that is registered to a Lightsail container service
   *
   * @public
   */
  containerImage?: ContainerImage | undefined;
}

/**
 * @public
 */
export interface ReleaseStaticIpRequest {
  /**
   * The name of the static IP to delete.
   *
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * @public
 */
export interface ReleaseStaticIpResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface ResetDistributionCacheRequest {
  /**
   * The name of the distribution for which to reset cache.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName?: string | undefined;
}

/**
 * @public
 */
export interface ResetDistributionCacheResult {
  /**
   * The status of the reset cache request.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The timestamp of the reset cache request (`1479734909.17`) in Unix time format.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface SendContactMethodVerificationRequest {
  /**
   * The protocol to verify, such as `Email` or `SMS` (text messaging).
   *
   * @public
   */
  protocol: ContactMethodVerificationProtocol | undefined;
}

/**
 * @public
 */
export interface SendContactMethodVerificationResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface SetIpAddressTypeRequest {
  /**
   * The resource type.
   *
   * The resource values are `Distribution`, `Instance`, and `LoadBalancer`.
   *
   * > **Note:** Distribution-related APIs are available only in the N. Virginia (`us-east-1`) Amazon Web Services Region. Set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit distributions.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The name of the resource for which to set the IP address type.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The IP address type to set for the specified resource.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * Required parameter to accept the instance bundle update when changing to, and from, IPv6-only.
   *
   * > **Note:**
   * >
   * > An instance bundle will change when switching from `dual-stack` or `ipv4`, to `ipv6`. It also changes when switching from `ipv6`, to `dual-stack` or `ipv4`.
   * >
   * > You must include this parameter in the command to update the bundle. For example, if you switch from `dual-stack` to `ipv6`, the bundle will be updated, and billing for the IPv6-only instance bundle begins immediately.
   *
   * @public
   */
  acceptBundleUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface SetIpAddressTypeResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface SetResourceAccessForBucketRequest {
  /**
   * The name of the Lightsail instance for which to set bucket access. The instance must be in a running or stopped state.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The name of the bucket for which to set access to another Lightsail resource.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The access setting.
   *
   * The following access settings are available:
   *
   * - `allow` - Allows access to the bucket and its objects.
   * - `deny` - Denies access to the bucket and its objects. Use this setting to remove access for a resource previously set to `allow`.
   *
   * @public
   */
  access: ResourceBucketAccess | undefined;
}

/**
 * @public
 */
export interface SetResourceAccessForBucketResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface SetupInstanceHttpsRequest {
  /**
   * The name of the Lightsail instance.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The contact method for SSL/TLS certificate renewal alerts. You can enter one email address.
   *
   * @public
   */
  emailAddress: string | undefined;

  /**
   * The name of the domain and subdomains that were specified for the SSL/TLS certificate.
   *
   * @public
   */
  domainNames: string[] | undefined;

  /**
   * The certificate authority that issues the SSL/TLS certificate.
   *
   * @public
   */
  certificateProvider: CertificateProvider | undefined;
}

/**
 * @public
 */
export interface SetupInstanceHttpsResult {
  /**
   * The available API operations for `SetupInstanceHttps`.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartGUISessionRequest {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface StartGUISessionResult {
  /**
   * The available API operations.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartInstanceRequest {
  /**
   * The name of the instance (a virtual private server) to start.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * An object that describes the attributes to update on the instance before it starts.
   *
   * @public
   */
  attributeUpdates?: InstanceAttributeUpdates | undefined;
}

/**
 * @public
 */
export interface StartInstanceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartRelationalDatabaseRequest {
  /**
   * The name of your database to start.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface StartRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopGUISessionRequest {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface StopGUISessionResult {
  /**
   * The available API operations.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopInstanceRequest {
  /**
   * The name of the instance (a virtual private server) to stop.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * When set to `True`, forces a Lightsail instance that is stuck in a `stopping` state to stop.
   *
   * > **Important:** Only use the `force` parameter if your instance is stuck in the `stopping` state. In any other state, your instance should stop normally without adding this parameter to your API request.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstanceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopRelationalDatabaseRequest {
  /**
   * The name of your database to stop.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The name of your new database snapshot to be created before stopping your database.
   *
   * @public
   */
  relationalDatabaseSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface StopRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The name of the resource to which you are adding tags.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to add a tag.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The tag key and optional value.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface TestAlarmRequest {
  /**
   * The name of the alarm to test.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The alarm state to test.
   *
   * An alarm has the following possible states that can be tested:
   *
   * - `ALARM` - The metric is outside of the defined threshold.
   * - `INSUFFICIENT_DATA` - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.
   * - `OK` - The metric is within the defined threshold.
   *
   * @public
   */
  state: AlarmState | undefined;
}

/**
 * @public
 */
export interface TestAlarmResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UnpeerVpcRequest {}

/**
 * @public
 */
export interface UnpeerVpcResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The name of the resource from which you are removing a tag.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The tag keys to delete from the specified resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateBucketRequest {
  /**
   * The name of the bucket to update.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * An object that sets the public accessibility of objects in the specified bucket.
   *
   * @public
   */
  accessRules?: AccessRules | undefined;

  /**
   * Specifies whether to enable or suspend versioning of objects in the bucket.
   *
   * The following options can be specified:
   *
   * - `Enabled` - Enables versioning of objects in the specified bucket.
   * - `Suspended` - Suspends versioning of objects in the specified bucket. Existing object versions are retained.
   *
   * @public
   */
  versioning?: string | undefined;

  /**
   * An array of strings to specify the Amazon Web Services account IDs that can access the bucket.
   *
   * You can give a maximum of 10 Amazon Web Services accounts access to a bucket.
   *
   * @public
   */
  readonlyAccessAccounts?: string[] | undefined;

  /**
   * An object that describes the access log configuration for the bucket.
   *
   * @public
   */
  accessLogConfig?: BucketAccessLogConfig | undefined;

  /**
   * Sets the cross-origin resource sharing (CORS) configuration for your bucket. If a CORS configuration exists, it is replaced with the specified configuration. For AWS CLI operations, this parameter can also be passed as a file. For more information, see [Configuring cross-origin resource sharing (CORS)](https://docs.aws.amazon.com/lightsail/latest/userguide/configure-cors.html).
   *
   * > **Note:** CORS information is only returned in a response when you update the CORS policy.
   *
   * @public
   */
  cors?: BucketCorsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateBucketResult {
  /**
   * An object that describes the bucket that is updated.
   *
   * @public
   */
  bucket?: Bucket | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateBucketBundleRequest {
  /**
   * The name of the bucket for which to update the bundle.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The ID of the new bundle to apply to the bucket.
   *
   * Use the [GetBucketBundles](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html) action to get a list of bundle IDs that you can specify.
   *
   * @public
   */
  bundleId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBucketBundleResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateContainerServiceRequest {
  /**
   * The name of the container service to update.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The power for the container service.
   *
   * The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the container service. The `power` and `scale` of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the `power` with the `scale` (the number of nodes) of the service.
   *
   * Use the `GetContainerServicePowers` action to view the specifications of each power option.
   *
   * @public
   */
  power?: ContainerServicePowerName | undefined;

  /**
   * The scale for the container service.
   *
   * The scale specifies the allocated compute nodes of the container service. The `power` and `scale` of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the `power` with the `scale` (the number of nodes) of the service.
   *
   * @public
   */
  scale?: number | undefined;

  /**
   * A Boolean value to indicate whether the container service is disabled.
   *
   * @public
   */
  isDisabled?: boolean | undefined;

  /**
   * The public domain names to use with the container service, such as `example.com` and `www.example.com`.
   *
   * You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.
   *
   * If you don't specify public domain names, then you can use the default domain of the container service.
   *
   * > **Important:** You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the `CreateCertificate` action to create a certificate for the public domain names you want to use with your container service.
   *
   * You can specify public domain names using a string to array map as shown in the example later on this page.
   *
   * @public
   */
  publicDomainNames?: Record<string, string[]> | undefined;

  /**
   * An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
   *
   * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest | undefined;
}

/**
 * @public
 */
export interface UpdateContainerServiceResult {
  /**
   * An object that describes a container service.
   *
   * @public
   */
  containerService?: ContainerService | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionRequest {
  /**
   * The name of the distribution to update.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName: string | undefined;

  /**
   * An object that describes the origin resource for the distribution, such as a Lightsail instance, bucket, or load balancer.
   *
   * The distribution pulls, caches, and serves content from the origin.
   *
   * @public
   */
  origin?: InputOrigin | undefined;

  /**
   * An object that describes the default cache behavior for the distribution.
   *
   * @public
   */
  defaultCacheBehavior?: CacheBehavior | undefined;

  /**
   * An object that describes the cache behavior settings for the distribution.
   *
   * > **Note:** The `cacheBehaviorSettings` specified in your `UpdateDistributionRequest` will replace your distribution's existing settings.
   *
   * @public
   */
  cacheBehaviorSettings?: CacheSettings | undefined;

  /**
   * An array of objects that describe the per-path cache behavior for the distribution.
   *
   * @public
   */
  cacheBehaviors?: CacheBehaviorPerPath[] | undefined;

  /**
   * Indicates whether to enable the distribution.
   *
   * @public
   */
  isEnabled?: boolean | undefined;

  /**
   * Use this parameter to update the minimum TLS protocol version for the SSL/TLS certificate that's attached to the distribution.
   *
   * @public
   */
  viewerMinimumTlsProtocolVersion?: ViewerMinimumTlsProtocolVersionEnum | undefined;

  /**
   * The name of the SSL/TLS certificate that you want to attach to the distribution.
   *
   * Only certificates with a status of `ISSUED` can be attached to a distribution.
   *
   * Use the [GetCertificates](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html) action to get a list of certificate names that you can specify.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * Indicates whether the default SSL/TLS certificate is attached to the distribution. The default value is `true`. When `true`, the distribution uses the default domain name such as `d111111abcdef8.cloudfront.net`.
   *
   * Set this value to `false` to attach a new certificate to the distribution.
   *
   * @public
   */
  useDefaultCertificate?: boolean | undefined;

  /**
   * Specifies whether to enable private origin access for the distribution. With private origin access, the distribution can serve objects that aren't publicly accessible from a Lightsail bucket.
   *
   * Lightsail grants the distribution permission to read the bucket's objects. Enabling private origin access doesn't change the bucket's access settings, and you can still retrieve publicly accessible objects directly from the bucket's endpoint.
   *
   * > **Note:**
   * >
   * > When you include this parameter, you must also include the `origin` parameter with the resource name, even if the origin is not changing.
   * >
   * > You can enable private origin access only when the distribution's origin is a Lightsail bucket. If the origin is another resource type, the request fails.
   *
   * @public
   */
  enablePrivateOriginAccess?: boolean | undefined;

  /**
   * The object (for example, `index.html`) that the distribution returns when a viewer requests the root URL of the distribution (`/`) instead of a specific object. The object that you specify must be available from the origin.
   *
   * @public
   */
  defaultRootObject?: string | undefined;

  /**
   * An array of objects that describe the custom error responses for the distribution. With a custom error response, you can specify the page to return when the origin responds with a given HTTP error code. You can also specify the HTTP status code to send to the viewer.
   *
   * @public
   */
  customErrorResponses?: DistributionCustomErrorResponse[] | undefined;

  /**
   * Specifies whether to enable Web Application Firewall (WAF) for the distribution. WAF inspects viewer requests and blocks requests that match the WAF rule groups that you enable.
   *
   * When you enable WAF without specifying the `wafRules` parameter, the distribution has no WAF rule groups enabled and doesn't block any requests.
   *
   * > **Note:**
   * >
   * > WAF is available only for distributions that use the `medium_1_0` or `large_1_0` bundle.
   * >
   * > Setting this parameter to `false` disables WAF for the distribution and removes its WAF rule groups. You must enable the WAF rule groups again if you enable WAF again.
   *
   * @public
   */
  enableWaf?: boolean | undefined;

  /**
   * An array of objects that describe the WAF rule groups to enable for the distribution.
   *
   * The array that you specify replaces the existing WAF rule groups of the distribution. To keep a WAF rule group enabled, include it in the array. To disable all WAF rule groups, specify an empty array.
   *
   * You can specify this parameter only when WAF is enabled for the distribution.
   *
   * The WAF rule groups that you can specify depend on the bundle of the distribution:
   *
   * - `medium_1_0` – Supports the `AWSManagedRulesCommonRuleSet`, `AWSManagedRulesKnownBadInputsRuleSet`, and `AWSManagedRulesAnonymousIpList` rule groups.
   * - `large_1_0` – Supports the rule groups for `medium_1_0`, plus `AWSManagedRulesAdminProtectionRuleSet`, `AWSManagedRulesSQLiRuleSet`, `AWSManagedRulesLinuxRuleSet`, `AWSManagedRulesUnixRuleSet`, `AWSManagedRulesWindowsRuleSet`, `AWSManagedRulesPHPRuleSet`, `AWSManagedRulesWordPressRuleSet`, `AWSManagedRulesAmazonIpReputationList`, `AWSManagedRulesATPRuleSet`, `AWSManagedRulesACFPRuleSet`, and `AWSManagedRulesBotControlRuleSet` rule groups.
   *
   * @public
   */
  wafRules?: WafRule[] | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionBundleRequest {
  /**
   * The name of the distribution for which to update the bundle.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName?: string | undefined;

  /**
   * The bundle ID of the new bundle to apply to your distribution.
   *
   * Use the `GetDistributionBundles` action to get a list of distribution bundle IDs that you can specify.
   *
   * @public
   */
  bundleId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionBundleResult {
  /**
   * An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateDomainEntryRequest {
  /**
   * The name of the domain recordset to update.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * An array of key-value pairs containing information about the domain entry.
   *
   * @public
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface UpdateDomainEntryResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceMetadataOptionsRequest {
  /**
   * The name of the instance for which to update metadata parameters.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is `optional`.
   *
   * If the state is `optional`, you can choose whether to retrieve instance metadata with a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials by using a valid signed token, the version 2.0 role credentials are returned.
   *
   * If the state is `required`, you must send a signed token header with all instance metadata retrieval requests. In this state, retrieving the IAM role credential always returns the version 2.0 credentials. The version 1.0 credentials are not available.
   *
   * @public
   */
  httpTokens?: HttpTokens | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained.
   *
   * If you specify a value of `disabled`, you cannot access your instance metadata.
   *
   * @public
   */
  httpEndpoint?: HttpEndpoint | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. A larger number means that the instance metadata requests can travel farther. If no parameter is specified, the existing state is maintained.
   *
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service. This setting applies only when the HTTP metadata endpoint is enabled.
   *
   * > **Note:** This parameter is available only for instances in the Europe (Stockholm) Amazon Web Services Region (`eu-north-1`).
   *
   * @public
   */
  httpProtocolIpv6?: HttpProtocolIpv6 | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceMetadataOptionsResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateLoadBalancerAttributeRequest {
  /**
   * The name of the load balancer that you want to modify (`my-load-balancer`.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The name of the attribute you want to update.
   *
   * @public
   */
  attributeName: LoadBalancerAttributeName | undefined;

  /**
   * The value that you want to specify for the attribute name.
   *
   * The following values are supported depending on what you specify for the `attributeName` request parameter:
   *
   * - If you specify `HealthCheckPath` for the `attributeName` request parameter, then the `attributeValue` request parameter must be the path to ping on the target (for example, `/weather/us/wa/seattle`).
   * - If you specify `SessionStickinessEnabled` for the `attributeName` request parameter, then the `attributeValue` request parameter must be `true` to activate session stickiness or `false` to deactivate session stickiness.
   * - If you specify `SessionStickiness_LB_CookieDurationSeconds` for the `attributeName` request parameter, then the `attributeValue` request parameter must be an interger that represents the cookie duration in seconds.
   * - If you specify `HttpsRedirectionEnabled` for the `attributeName` request parameter, then the `attributeValue` request parameter must be `true` to activate HTTP to HTTPS redirection or `false` to deactivate HTTP to HTTPS redirection.
   * - If you specify `TlsPolicyName` for the `attributeName` request parameter, then the `attributeValue` request parameter must be the name of the TLS policy.
   *
   *   Use the [GetLoadBalancerTlsPolicies](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html) action to get a list of TLS policy names that you can specify.
   *
   * @public
   */
  attributeValue: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoadBalancerAttributeResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseRequest {
  /**
   * The name of your Lightsail database resource to update.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
   *
   * My**SQL**
   *
   * Constraints: Must contain from 8 to 41 characters.
   *
   * **PostgreSQL**
   *
   * Constraints: Must contain from 8 to 128 characters.
   *
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * When `true`, the master user password is changed to a new strong password generated by Lightsail.
   *
   * Use the `get relational database master user password` operation to get the new password.
   *
   * @public
   */
  rotateMasterUserPassword?: boolean | undefined;

  /**
   * The daily time range during which automated backups are created for your database if automated backups are enabled.
   *
   * Constraints:
   *
   * - Must be in the `hh24:mi-hh24:mi` format.
   *
   *   Example: `16:00-16:30`
   * - Specified in Coordinated Universal Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur on your database.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * Constraints:
   *
   * - Must be in the `ddd:hh24:mi-ddd:hh24:mi` format.
   * - Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   * - Must be at least 30 minutes.
   * - Specified in Coordinated Universal Time (UTC).
   * - Example: `Tue:17:00-Tue:17:30`
   *
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * When `true`, enables automated backup retention for your database.
   *
   * Updates are applied during the next maintenance window because this can result in an outage.
   *
   * @public
   */
  enableBackupRetention?: boolean | undefined;

  /**
   * When `true`, disables automated backup retention for your database.
   *
   * Disabling backup retention deletes all automated database backups. Before disabling this, you may want to create a snapshot of your database using the `create relational database snapshot` operation.
   *
   * Updates are applied during the next maintenance window because this can result in an outage.
   *
   * @public
   */
  disableBackupRetention?: boolean | undefined;

  /**
   * Specifies the accessibility options for your database. A value of `true` specifies a database that is available to resources outside of your Lightsail account. A value of `false` specifies a database that is available only to your Lightsail resources in the same region as your database.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * When `true`, applies changes immediately. When `false`, applies changes during the preferred maintenance window. Some changes may cause an outage.
   *
   * Default: `false`
   *
   * @public
   */
  applyImmediately?: boolean | undefined;

  /**
   * Indicates the certificate that needs to be associated with the database.
   *
   * @public
   */
  caCertificateIdentifier?: string | undefined;

  /**
   * This parameter is used to update the major version of the database. Enter the `blueprintId` for the major version that you want to update to.
   *
   * Use the [GetRelationalDatabaseBlueprints](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html) action to get a list of available blueprint IDs.
   *
   * @public
   */
  relationalDatabaseBlueprintId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseParametersRequest {
  /**
   * The name of your database for which to update parameters.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The database parameters to update.
   *
   * @public
   */
  parameters: RelationalDatabaseParameter[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseParametersResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}
