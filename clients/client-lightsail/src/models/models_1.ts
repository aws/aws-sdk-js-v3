// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessDirection,
  AccessRules,
  AddOn,
  AlarmState,
  AvailabilityZone,
  Bucket,
  BucketAccessLogConfig,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  CertificateProvider,
  ComparisonOperator,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  ContainerImage,
  ContainerService,
  ContainerServicePower,
  ContainerServicePowerName,
  CostEstimate,
  Disk,
  DiskSnapshot,
  DistributionBundle,
  DistributionMetricName,
  Domain,
  DomainEntry,
  ExportSnapshotRecord,
  InputOrigin,
  IpAddressType,
  KeyPair,
  LightsailDistribution,
  MetricDatapoint,
  MetricName,
  MetricStatistic,
  MetricUnit,
  NetworkProtocol,
  Operation,
  PortInfo,
  PrivateRegistryAccessRequest,
  RegionName,
  ResourceLocation,
  ResourceType,
  Tag,
  TreatMissingData,
  ViewerMinimumTlsProtocolVersionEnum,
} from "./models_0";

/**
 * @public
 */
export interface GetContainerServicePowersRequest {}

/**
 * @public
 */
export interface GetContainerServicePowersResult {
  /**
   * <p>An array of objects that describe the powers that can be specified for a container
   *       service.</p>
   * @public
   */
  powers?: ContainerServicePower[] | undefined;
}

/**
 * @public
 */
export interface GetContainerServicesRequest {
  /**
   * <p>The name of the container service for which to return information.</p>
   *          <p>When omitted, the response includes all of your container services in the Amazon Web Services Region where the request is made.</p>
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * @public
 */
export interface GetCostEstimateRequest {
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The cost estimate start time.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you want to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The cost estimate end time.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you want to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>Describes the estimated cost or usage that a budget tracks.</p>
 * @public
 */
export interface ResourceBudgetEstimate {
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The type of resource the budget will track.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The cost estimate for the specified budget.</p>
   * @public
   */
  costEstimates?: CostEstimate[] | undefined;

  /**
   * <p>The estimate start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The estimate end time.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCostEstimateResult {
  /**
   * <p>Returns the estimate's forecasted cost or usage.</p>
   * @public
   */
  resourcesBudgetEstimate?: ResourceBudgetEstimate[] | undefined;
}

/**
 * @public
 */
export interface GetDiskRequest {
  /**
   * <p>The name of the disk (<code>my-disk</code>).</p>
   * @public
   */
  diskName: string | undefined;
}

/**
 * @public
 */
export interface GetDiskResult {
  /**
   * <p>An object containing information about the disk.</p>
   * @public
   */
  disk?: Disk | undefined;
}

/**
 * @public
 */
export interface GetDisksRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDisks</code> request. If your results are
   *       paginated, the response will return a next page token that you can specify as the page token
   *       in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDisksResult {
  /**
   * <p>An array of objects containing information about all block storage disks.</p>
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDisks</code> request and specify
   *       the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotRequest {
  /**
   * <p>The name of the disk snapshot (<code>my-disk-snapshot</code>).</p>
   * @public
   */
  diskSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotResult {
  /**
   * <p>An object containing information about the disk snapshot.</p>
   * @public
   */
  diskSnapshot?: DiskSnapshot | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDiskSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotsResult {
  /**
   * <p>An array of objects containing information about all block storage disk snapshots.</p>
   * @public
   */
  diskSnapshots?: DiskSnapshot[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDiskSnapshots</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionBundlesRequest {}

/**
 * @public
 */
export interface GetDistributionBundlesResult {
  /**
   * <p>An object that describes a distribution bundle.</p>
   * @public
   */
  bundles?: DistributionBundle[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionLatestCacheResetRequest {
  /**
   * <p>The name of the distribution for which to return the timestamp of the last cache
   *       reset.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   *          <p>When omitted, the response includes the latest cache reset timestamp of all your
   *       distributions.</p>
   * @public
   */
  distributionName?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionLatestCacheResetResult {
  /**
   * <p>The status of the last cache reset.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The timestamp of the last cache reset (<code>1479734909.17</code>) in Unix time
   *       format.</p>
   * @public
   */
  createTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDistributionMetricDataRequest {
  /**
   * <p>The name of the distribution for which to get metric data.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   * @public
   */
  distributionName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid distribution metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Requests</code>
   *                   </b> - The total number of viewer
   *           requests received by your Lightsail distribution, for all HTTP methods, and for both
   *           HTTP and HTTPS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesDownloaded</code>
   *                   </b> - The number of bytes
   *           downloaded by viewers for GET, HEAD, and OPTIONS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesUploaded </code>
   *                   </b> - The number of bytes
   *           uploaded to your origin by your Lightsail distribution, using POST and PUT
   *           requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TotalErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 4xx or 5xx.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>4xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status cod was 4xx. In these cases, the
   *           client or client viewer may have made an error. For example, a status code of 404 (Not
   *           Found) means that the client requested an object that could not be found.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>5xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 5xx. In these cases, the
   *           origin server did not satisfy the requests. For example, a status code of 503 (Service
   *           Unavailable) means that the origin server is currently unavailable.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  metricName: DistributionMetricName | undefined;

  /**
   * <p>The start of the time interval for which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time interval for which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, for the metric data points that will be returned.</p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   * @public
   */
  unit: MetricUnit | undefined;

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
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   * @public
   */
  metricName?: DistributionMetricName | undefined;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionsRequest {
  /**
   * <p>The name of the distribution for which to return information.</p>
   *          <p>When omitted, the response includes all of your distributions in the Amazon Web Services
   *       Region where the request is made.</p>
   * @public
   */
  distributionName?: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDistributions</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionsResult {
  /**
   * <p>An array of objects that describe your distributions.</p>
   * @public
   */
  distributions?: LightsailDistribution[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDistributions</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * <p>The domain name for which your want to return information about.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainResult {
  /**
   * <p>An array of key-value pairs containing information about your get domain request.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface GetDomainsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDomains</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainsResult {
  /**
   * <p>An array of key-value pairs containing information about each of the domain entries in the
   *       user's account.</p>
   * @public
   */
  domains?: Domain[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDomains</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExportSnapshotRecordsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetExportSnapshotRecords</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExportSnapshotRecordsResult {
  /**
   * <p>A list of objects describing the export snapshot records.</p>
   * @public
   */
  exportSnapshotRecords?: ExportSnapshotRecord[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetExportSnapshotRecords</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceRequest {
  /**
   * <p>The name of the instance.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * <p>Describes the hardware for the instance.</p>
 * @public
 */
export interface InstanceHardware {
  /**
   * <p>The number of vCPUs the instance has.</p>
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * <p>The disks attached to the instance.</p>
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * <p>The amount of RAM in GB on the instance (<code>1.0</code>).</p>
   * @public
   */
  ramSizeInGb?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const HttpEndpoint = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type HttpEndpoint = (typeof HttpEndpoint)[keyof typeof HttpEndpoint];

/**
 * @public
 * @enum
 */
export const HttpProtocolIpv6 = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type HttpProtocolIpv6 = (typeof HttpProtocolIpv6)[keyof typeof HttpProtocolIpv6];

/**
 * @public
 * @enum
 */
export const HttpTokens = {
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type HttpTokens = (typeof HttpTokens)[keyof typeof HttpTokens];

/**
 * @public
 * @enum
 */
export const InstanceMetadataState = {
  applied: "applied",
  pending: "pending",
} as const;

/**
 * @public
 */
export type InstanceMetadataState = (typeof InstanceMetadataState)[keyof typeof InstanceMetadataState];

/**
 * <p>The metadata options for the instance.</p>
 * @public
 */
export interface InstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>The following states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The metadata options are being updated. The instance is not yet
   *           ready to process metadata traffic with the new selection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>applied</code> - The metadata options have been successfully applied to the
   *           instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  state?: InstanceMetadataState | undefined;

  /**
   * <p>The state of token usage for your instance metadata requests.</p>
   *          <p>If the state is <code>optional</code>, you can choose whether to retrieve instance
   *       metadata with a signed token header on your request. If you retrieve the IAM role credentials
   *       without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role
   *       credentials by using a valid signed token, the version 2.0 role credentials are
   *       returned.</p>
   *          <p>If the state is <code>required</code>, you must send a signed token header with all
   *       instance metadata retrieval requests. In this state, retrieving the IAM role credential always
   *       returns the version 2.0 credentials. The version 1.0 credentials are not available.</p>
   *          <important>
   *             <p>Not all instance blueprints in Lightsail support version 2.0 credentials.
   *         Use the <code>MetadataNoToken</code> instance metric to track the number of calls to the
   *         instance metadata service that are using version 1.0 credentials. For more information, see
   *           <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-health-metrics">Viewing instance metrics in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   *          </important>
   * @public
   */
  httpTokens?: HttpTokens | undefined;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *       disabled.</p>
   *          <p>If the value is <code>disabled</code>, you cannot access your instance metadata.</p>
   * @public
   */
  httpEndpoint?: HttpEndpoint | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. A larger number
   *       means that the instance metadata requests can travel farther.</p>
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or
   *       disabled.</p>
   * @public
   */
  httpProtocolIpv6?: HttpProtocolIpv6 | undefined;
}

/**
 * <p>Describes the monthly data transfer in and out of your virtual private server (or
 *         <i>instance</i>).</p>
 * @public
 */
export interface MonthlyTransfer {
  /**
   * <p>The amount allocated per month (in GB).</p>
   * @public
   */
  gbPerMonthAllocated?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PortAccessType = {
  Private: "Private",
  Public: "Public",
} as const;

/**
 * @public
 */
export type PortAccessType = (typeof PortAccessType)[keyof typeof PortAccessType];

/**
 * <p>Describes information about ports for an Amazon Lightsail instance.</p>
 * @public
 */
export interface InstancePortInfo {
  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  fromPort?: number | undefined;

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  toPort?: number | undefined;

  /**
   * <p>The IP protocol name.</p>
   *          <p>The name can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and
   *           error-checked delivery of streamed data between applications running on hosts
   *           communicating by an IP network. If you have an application that doesn't require reliable
   *           data stream service, use UDP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> - All transport layer protocol types. For more general information,
   *           see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on
   *             <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send
   *           messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
   *           communications are not required to set up transmission channels or data paths.
   *           Applications that don't require reliable data stream service can use UDP, which provides a
   *           connectionless datagram service that emphasizes reduced latency over reliability. If you
   *           do require reliable data stream service, use TCP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error
   *           messages and operational information indicating success or failure when communicating with
   *           an instance. For example, an error is indicated when an instance could not be reached.
   *           When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP
   *           type using the <code>fromPort</code> parameter, and ICMP code using the
   *             <code>toPort</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp6</code> - Internet Control Message Protocol (ICMP) for IPv6. When you
   *           specify <code>icmp6</code> as the <code>protocol</code>, you must specify the ICMP type
   *           using the <code>fromPort</code> parameter, and ICMP code using the <code>toPort</code>
   *           parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  protocol?: NetworkProtocol | undefined;

  /**
   * <p>The location from which access is allowed. For example, <code>Anywhere (0.0.0.0/0)</code>,
   *       or <code>Custom</code> if a specific IP address or range of IP addresses is allowed.</p>
   * @public
   */
  accessFrom?: string | undefined;

  /**
   * <p>The type of access (<code>Public</code> or <code>Private</code>).</p>
   * @public
   */
  accessType?: PortAccessType | undefined;

  /**
   * <p>The common name of the port information.</p>
   * @public
   */
  commonName?: string | undefined;

  /**
   * <p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>
   *          <note>
   *             <p>Lightsail currently supports only <code>inbound</code> access direction.</p>
   *          </note>
   * @public
   */
  accessDirection?: AccessDirection | undefined;

  /**
   * <p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol.</p>
   *          <note>
   *             <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to
   *         connect to an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * <p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol. Only devices with an IPv6 address
   *       can connect to an instance through IPv6; otherwise, IPv4 should be used.</p>
   *          <note>
   *             <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to
   *         an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   * @public
   */
  ipv6Cidrs?: string[] | undefined;

  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   * @public
   */
  cidrListAliases?: string[] | undefined;
}

/**
 * <p>Describes monthly data transfer rates and port information for an instance.</p>
 * @public
 */
export interface InstanceNetworking {
  /**
   * <p>The amount of data in GB allocated for monthly data transfers.</p>
   * @public
   */
  monthlyTransfer?: MonthlyTransfer | undefined;

  /**
   * <p>An array of key-value pairs containing information about the ports on the instance.</p>
   * @public
   */
  ports?: InstancePortInfo[] | undefined;
}

/**
 * <p>Describes the virtual private server (or <i>instance</i>) status.</p>
 * @public
 */
export interface InstanceState {
  /**
   * <p>The status code for the instance.</p>
   * @public
   */
  code?: number | undefined;

  /**
   * <p>The state of the instance (<code>running</code> or <code>pending</code>).</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Describes an instance (a virtual private server).</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The name the user gave the instance (<code>Amazon_Linux_2023-1</code>).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance
   *         (<code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The timestamp when the instance was created (<code>1479734909.17</code>) in Unix time
   *       format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The region name and Availability Zone where the instance is located.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The type of resource (usually <code>Instance</code>).</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The blueprint ID (<code>amazon_linux_2023</code>).</p>
   * @public
   */
  blueprintId?: string | undefined;

  /**
   * <p>The friendly name of the blueprint (<code>Amazon Linux 2023</code>).</p>
   * @public
   */
  blueprintName?: string | undefined;

  /**
   * <p>The bundle for the instance (<code>micro_x_x</code>).</p>
   * @public
   */
  bundleId?: string | undefined;

  /**
   * <p>An array of objects representing the add-ons enabled on the instance.</p>
   * @public
   */
  addOns?: AddOn[] | undefined;

  /**
   * <p>A Boolean value indicating whether this instance has a static IP assigned to it.</p>
   * @public
   */
  isStaticIp?: boolean | undefined;

  /**
   * <p>The private IP address of the instance.</p>
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * <p>The public IP address of the instance.</p>
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * <p>The IPv6 addresses of the instance.</p>
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * <p>The IP address type of the instance.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, <code>ipv6</code> for IPv6 only,
   *       and <code>dualstack</code> for IPv4 and IPv6.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>The size of the vCPU and the amount of RAM for the instance.</p>
   * @public
   */
  hardware?: InstanceHardware | undefined;

  /**
   * <p>Information about the public ports and monthly data transfer rates for the
   *       instance.</p>
   * @public
   */
  networking?: InstanceNetworking | undefined;

  /**
   * <p>The status code and the state (<code>running</code>) for the instance.</p>
   * @public
   */
  state?: InstanceState | undefined;

  /**
   * <p>The user name for connecting to the instance (<code>ec2-user</code>).</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The name of the SSH key being used to connect to the instance
   *         (<code>LightsailDefaultKeyPair</code>).</p>
   * @public
   */
  sshKeyName?: string | undefined;

  /**
   * <p>The metadata options for the Amazon Lightsail instance.</p>
   * @public
   */
  metadataOptions?: InstanceMetadataOptions | undefined;
}

/**
 * @public
 */
export interface GetInstanceResult {
  /**
   * <p>An array of key-value pairs containing information about the specified instance.</p>
   * @public
   */
  instance?: Instance | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceAccessProtocol = {
  rdp: "rdp",
  ssh: "ssh",
} as const;

/**
 * @public
 */
export type InstanceAccessProtocol = (typeof InstanceAccessProtocol)[keyof typeof InstanceAccessProtocol];

/**
 * @public
 */
export interface GetInstanceAccessDetailsRequest {
  /**
   * <p>The name of the instance to access.</p>
   * @public
   */
  instanceName: string | undefined;

  /**
   * <p>The protocol to use to connect to your instance. Defaults to <code>ssh</code>.</p>
   * @public
   */
  protocol?: InstanceAccessProtocol | undefined;
}

/**
 * <p>Describes the public SSH host keys or the RDP certificate.</p>
 * @public
 */
export interface HostKeyAttributes {
  /**
   * <p>The SSH host key algorithm or the RDP certificate format.</p>
   *          <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>,
   *         <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the
   *       algorithm is always <code>x509-cert</code>.</p>
   * @public
   */
  algorithm?: string | undefined;

  /**
   * <p>The public SSH host key or the RDP certificate.</p>
   * @public
   */
  publicKey?: string | undefined;

  /**
   * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
   * @public
   */
  witnessedAt?: Date | undefined;

  /**
   * <p>The SHA-1 fingerprint of the returned SSH host key or RDP certificate.</p>
   *          <ul>
   *             <li>
   *                <p>Example of an SHA-1 SSH fingerprint:</p>
   *                <p>
   *                   <code>SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example of an SHA-1 RDP fingerprint:</p>
   *                <p>
   *                   <code>af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  fingerprintSHA1?: string | undefined;

  /**
   * <p>The SHA-256 fingerprint of the returned SSH host key or RDP certificate.</p>
   *          <ul>
   *             <li>
   *                <p>Example of an SHA-256 SSH fingerprint:</p>
   *                <p>
   *                   <code>SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example of an SHA-256 RDP fingerprint:</p>
   *                <p>
   *                   <code>03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  fingerprintSHA256?: string | undefined;

  /**
   * <p>The returned RDP certificate is valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * <p>The returned RDP certificate is not valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   * @public
   */
  notValidAfter?: Date | undefined;
}

/**
 * <p>The password data for the Windows Server-based instance, including the ciphertext and the
 *       key pair name.</p>
 * @public
 */
export interface PasswordData {
  /**
   * <p>The encrypted password. Ciphertext will be an empty string if access to your new instance
   *       is not ready yet. When you create an instance, it can take up to 15 minutes for the instance
   *       to be ready.</p>
   *          <note>
   *             <p>If you use the default key pair (<code>LightsailDefaultKeyPair</code>), the decrypted
   *         password will be available in the password field.</p>
   *             <p>If you are using a custom key pair, you need to use your own means of decryption.</p>
   *             <p>If you change the Administrator password on the instance, Lightsail will continue to
   *         return the original ciphertext value. When accessing the instance using RDP, you need to
   *         manually enter the Administrator password after changing it from the default.</p>
   *          </note>
   * @public
   */
  ciphertext?: string | undefined;

  /**
   * <p>The name of the key pair that you used when creating your instance. If no key pair name
   *       was specified when creating the instance, Lightsail uses the default key pair
   *         (<code>LightsailDefaultKeyPair</code>).</p>
   *          <p>If you are using a custom key pair, you need to use your own means of decrypting your
   *       password using the <code>ciphertext</code>. Lightsail creates the ciphertext by encrypting
   *       your password with the public key part of this key pair.</p>
   * @public
   */
  keyPairName?: string | undefined;
}

/**
 * <p>The parameters for gaining temporary access to one of your Amazon Lightsail
 *       instances.</p>
 * @public
 */
export interface InstanceAccessDetails {
  /**
   * <p>For SSH access, the public key to use when accessing your instance For OpenSSH clients
   *       (command line SSH), you should save this value to <code>tempkey-cert.pub</code>.</p>
   * @public
   */
  certKey?: string | undefined;

  /**
   * <p>For SSH access, the date on which the temporary keys expire.</p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>The public IP address of the Amazon Lightsail instance.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The IPv6 address of the Amazon Lightsail instance.</p>
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * <p>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty
   *       string if the password for your new instance is not ready yet. When you create an instance, it
   *       can take up to 15 minutes for the instance to be ready.</p>
   *          <note>
   *             <p>If you create an instance using any key pair other than the default
   *           (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty
   *         string.</p>
   *             <p>If you change the Administrator password on the instance, Lightsail will continue to
   *         return the original password value. When accessing the instance using RDP, you need to
   *         manually enter the Administrator password after changing it from the default.</p>
   *          </note>
   * @public
   */
  password?: string | undefined;

  /**
   * <p>For a Windows Server-based instance, an object with the data you can use to retrieve your
   *       password. This is only needed if <code>password</code> is empty and the instance is not new
   *       (and therefore the password is not ready yet). When you create an instance, it can take up to
   *       15 minutes for the instance to be ready.</p>
   * @public
   */
  passwordData?: PasswordData | undefined;

  /**
   * <p>For SSH access, the temporary private key. For OpenSSH clients (command line SSH), you
   *       should save this value to <code>tempkey</code>).</p>
   * @public
   */
  privateKey?: string | undefined;

  /**
   * <p>The protocol for these Amazon Lightsail instance access details.</p>
   * @public
   */
  protocol?: InstanceAccessProtocol | undefined;

  /**
   * <p>The name of this Amazon Lightsail instance.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The user name to use when logging in to the Amazon Lightsail instance.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Describes the public SSH host keys or the RDP certificate.</p>
   * @public
   */
  hostKeys?: HostKeyAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetInstanceAccessDetailsResult {
  /**
   * <p>An array of key-value pairs containing information about a get instance access
   *       request.</p>
   * @public
   */
  accessDetails?: InstanceAccessDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceMetricName = {
  BurstCapacityPercentage: "BurstCapacityPercentage",
  BurstCapacityTime: "BurstCapacityTime",
  CPUUtilization: "CPUUtilization",
  MetadataNoToken: "MetadataNoToken",
  NetworkIn: "NetworkIn",
  NetworkOut: "NetworkOut",
  StatusCheckFailed: "StatusCheckFailed",
  StatusCheckFailed_Instance: "StatusCheckFailed_Instance",
  StatusCheckFailed_System: "StatusCheckFailed_System",
} as const;

/**
 * @public
 */
export type InstanceMetricName = (typeof InstanceMetricName)[keyof typeof InstanceMetricName];

/**
 * @public
 */
export interface GetInstanceMetricDataRequest {
  /**
   * <p>The name of the instance for which you want to get metrics data.</p>
   * @public
   */
  instanceName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid instance metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityPercentage</code>
   *                   </b> - The percentage
   *           of CPU performance available for your instance to burst above its baseline. Your instance
   *           continuously accrues and consumes burst capacity. Burst capacity stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> reaches 100%. For more information, see
   *             <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityTime</code>
   *                   </b> - The available amount
   *           of time for your instance to burst at 100% CPU utilization. Your instance continuously
   *           accrues and consumes burst capacity. Burst capacity time stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> metric reaches 100%.</p>
   *                <p>Burst capacity time is consumed at the full rate only when your instance operates at
   *           100% CPU utilization. For example, if your instance operates at 50% CPU utilization in the
   *           burstable zone for a 5-minute period, then it consumes CPU burst capacity minutes at a 50%
   *           rate in that period. Your instance consumed 2 minutes and 30 seconds of CPU burst capacity
   *           minutes in the 5-minute period. For more information, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of
   *           allocated compute units that are currently in use on the instance. This metric identifies
   *           the processing power to run the applications on the instance. Tools in your operating
   *           system can show a lower percentage than Lightsail when the instance is not allocated a
   *           full processor core.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkIn</code>
   *                   </b> - The number of bytes received
   *           on all network interfaces by the instance. This metric identifies the volume of incoming
   *           network traffic to the instance. The number reported is the number of bytes received
   *           during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkOut</code>
   *                   </b> - The number of bytes sent
   *           out on all network interfaces by the instance. This metric identifies the volume of
   *           outgoing network traffic from the instance. The number reported is the number of bytes
   *           sent during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed</code>
   *                   </b> - Reports whether the
   *           instance passed or failed both the instance status check and the system status check. This
   *           metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute
   *           (60 seconds) granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_Instance</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the instance status check. This metric can be either
   *           0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_System</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the system status check. This metric can be either 0
   *           (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MetadataNoToken</code>
   *                   </b> - Reports the number of
   *           times that the instance metadata service was successfully accessed without a token. This
   *           metric determines if there are any processes accessing instance metadata by using Instance
   *           Metadata Service Version 1, which doesn't use a token. If all requests use token-backed
   *           sessions, such as Instance Metadata Service Version 2, then the value is 0.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  metricName: InstanceMetricName | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>The <code>StatusCheckFailed</code>, <code>StatusCheckFailed_Instance</code>, and
   *         <code>StatusCheckFailed_System</code> instance metric data is available in 1-minute (60
   *       seconds) granularity. All other instance metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>The start time of the time period.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time period.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units to specify with each available metric, see the
   *         <code>metricName</code> parameter.</p>
   * @public
   */
  unit: MetricUnit | undefined;

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
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   * @public
   */
  metricName?: InstanceMetricName | undefined;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetInstancePortStatesRequest {
  /**
   * <p>The name of the instance for which to return firewall port states.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PortState = {
  Closed: "closed",
  Open: "open",
} as const;

/**
 * @public
 */
export type PortState = (typeof PortState)[keyof typeof PortState];

/**
 * <p>Describes open ports on an instance, the IP addresses allowed to connect to the instance
 *       through the ports, and the protocol.</p>
 * @public
 */
export interface InstancePortState {
  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  fromPort?: number | undefined;

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  toPort?: number | undefined;

  /**
   * <p>The IP protocol name.</p>
   *          <p>The name can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and
   *           error-checked delivery of streamed data between applications running on hosts
   *           communicating by an IP network. If you have an application that doesn't require reliable
   *           data stream service, use UDP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> - All transport layer protocol types. For more general information,
   *           see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on
   *             <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send
   *           messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
   *           communications are not required to set up transmission channels or data paths.
   *           Applications that don't require reliable data stream service can use UDP, which provides a
   *           connectionless datagram service that emphasizes reduced latency over reliability. If you
   *           do require reliable data stream service, use TCP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error
   *           messages and operational information indicating success or failure when communicating with
   *           an instance. For example, an error is indicated when an instance could not be reached.
   *           When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP
   *           type using the <code>fromPort</code> parameter, and ICMP code using the
   *             <code>toPort</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp6</code> - Internet Control Message Protocol (ICMP) for IPv6. When you
   *           specify <code>icmp6</code> as the <code>protocol</code>, you must specify the ICMP type
   *           using the <code>fromPort</code> parameter, and ICMP code using the <code>toPort</code>
   *           parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  protocol?: NetworkProtocol | undefined;

  /**
   * <p>Specifies whether the instance port is <code>open</code> or <code>closed</code>.</p>
   *          <note>
   *             <p>The port state for Lightsail instances is always <code>open</code>.</p>
   *          </note>
   * @public
   */
  state?: PortState | undefined;

  /**
   * <p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol.</p>
   *          <note>
   *             <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to
   *         connect to an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * <p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol. Only devices with an IPv6 address
   *       can connect to an instance through IPv6; otherwise, IPv4 should be used.</p>
   *          <note>
   *             <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to
   *         an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   * @public
   */
  ipv6Cidrs?: string[] | undefined;

  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   * @public
   */
  cidrListAliases?: string[] | undefined;
}

/**
 * @public
 */
export interface GetInstancePortStatesResult {
  /**
   * <p>An array of objects that describe the firewall port states for the specified
   *       instance.</p>
   * @public
   */
  portStates?: InstancePortState[] | undefined;
}

/**
 * @public
 */
export interface GetInstancesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstances</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstancesResult {
  /**
   * <p>An array of key-value pairs containing information about your instances.</p>
   * @public
   */
  instances?: Instance[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstances</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotRequest {
  /**
   * <p>The name of the snapshot for which you are requesting information.</p>
   * @public
   */
  instanceSnapshotName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceSnapshotState = {
  Available: "available",
  Error: "error",
  Pending: "pending",
} as const;

/**
 * @public
 */
export type InstanceSnapshotState = (typeof InstanceSnapshotState)[keyof typeof InstanceSnapshotState];

/**
 * <p>Describes an instance snapshot.</p>
 * @public
 */
export interface InstanceSnapshot {
  /**
   * <p>The name of the snapshot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot
   *         (<code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The timestamp when the snapshot was created (<code>1479907467.024</code>).</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The region name and Availability Zone where you created the snapshot.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The type of resource (usually <code>InstanceSnapshot</code>).</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The state the snapshot is in.</p>
   * @public
   */
  state?: InstanceSnapshotState | undefined;

  /**
   * <p>The progress of the snapshot.</p>
   *          <note>
   *             <p>This is populated only for disk snapshots, and is <code>null</code> for instance
   *         snapshots.</p>
   *          </note>
   * @public
   */
  progress?: string | undefined;

  /**
   * <p>An array of disk objects containing information about all block storage disks.</p>
   * @public
   */
  fromAttachedDisks?: Disk[] | undefined;

  /**
   * <p>The instance from which the snapshot was created.</p>
   * @public
   */
  fromInstanceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance from which the snapshot was created
   *         (<code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).</p>
   * @public
   */
  fromInstanceArn?: string | undefined;

  /**
   * <p>The blueprint ID from which you created the snapshot (<code>amazon_linux_2023</code>). A
   *       blueprint is a virtual private server (or <i>instance</i>) image used to create
   *       instances quickly.</p>
   * @public
   */
  fromBlueprintId?: string | undefined;

  /**
   * <p>The bundle ID from which you created the snapshot (<code>micro_x_x</code>).</p>
   * @public
   */
  fromBundleId?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   * @public
   */
  isFromAutoSnapshot?: boolean | undefined;

  /**
   * <p>The size in GB of the SSD.</p>
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotResult {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshot request.</p>
   * @public
   */
  instanceSnapshot?: InstanceSnapshot | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstanceSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotsResult {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshots request.</p>
   * @public
   */
  instanceSnapshots?: InstanceSnapshot[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstanceSnapshots</code> request
   *       and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceStateRequest {
  /**
   * <p>The name of the instance to get state information about.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceStateResult {
  /**
   * <p>The state of the instance.</p>
   * @public
   */
  state?: InstanceState | undefined;
}

/**
 * @public
 */
export interface GetKeyPairRequest {
  /**
   * <p>The name of the key pair for which you are requesting information.</p>
   * @public
   */
  keyPairName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyPairResult {
  /**
   * <p>An array of key-value pairs containing information about the key pair.</p>
   * @public
   */
  keyPair?: KeyPair | undefined;
}

/**
 * @public
 */
export interface GetKeyPairsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetKeyPairs</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to include the default key pair in the response of
   *       your request.</p>
   * @public
   */
  includeDefaultKeyPair?: boolean | undefined;
}

/**
 * @public
 */
export interface GetKeyPairsResult {
  /**
   * <p>An array of key-value pairs containing information about the key pairs.</p>
   * @public
   */
  keyPairs?: KeyPair[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetKeyPairs</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerRequest {
  /**
   * <p>The name of the load balancer.</p>
   * @public
   */
  loadBalancerName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerAttributeName = {
  HealthCheckPath: "HealthCheckPath",
  HttpsRedirectionEnabled: "HttpsRedirectionEnabled",
  SessionStickinessEnabled: "SessionStickinessEnabled",
  SessionStickiness_LB_CookieDurationSeconds: "SessionStickiness_LB_CookieDurationSeconds",
  TlsPolicyName: "TlsPolicyName",
} as const;

/**
 * @public
 */
export type LoadBalancerAttributeName = (typeof LoadBalancerAttributeName)[keyof typeof LoadBalancerAttributeName];

/**
 * @public
 * @enum
 */
export const InstanceHealthState = {
  Draining: "draining",
  Healthy: "healthy",
  Initial: "initial",
  Unavailable: "unavailable",
  Unhealthy: "unhealthy",
  Unused: "unused",
} as const;

/**
 * @public
 */
export type InstanceHealthState = (typeof InstanceHealthState)[keyof typeof InstanceHealthState];

/**
 * @public
 * @enum
 */
export const InstanceHealthReason = {
  InstanceDeregistrationInProgress: "Instance.DeregistrationInProgress",
  InstanceFailedHealthChecks: "Instance.FailedHealthChecks",
  InstanceInvalidState: "Instance.InvalidState",
  InstanceIpUnusable: "Instance.IpUnusable",
  InstanceNotInUse: "Instance.NotInUse",
  InstanceNotRegistered: "Instance.NotRegistered",
  InstanceResponseCodeMismatch: "Instance.ResponseCodeMismatch",
  InstanceTimeout: "Instance.Timeout",
  LbInitialHealthChecking: "Lb.InitialHealthChecking",
  LbInternalError: "Lb.InternalError",
  LbRegistrationInProgress: "Lb.RegistrationInProgress",
} as const;

/**
 * @public
 */
export type InstanceHealthReason = (typeof InstanceHealthReason)[keyof typeof InstanceHealthReason];

/**
 * <p>Describes information about the health of the instance.</p>
 * @public
 */
export interface InstanceHealthSummary {
  /**
   * <p>The name of the Lightsail instance for which you are requesting health check
   *       data.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>Describes the overall instance health. Valid values are below.</p>
   * @public
   */
  instanceHealth?: InstanceHealthState | undefined;

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
   * @public
   */
  instanceHealthReason?: InstanceHealthReason | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerProtocol = {
  HTTP: "HTTP",
  HTTP_HTTPS: "HTTP_HTTPS",
} as const;

/**
 * @public
 */
export type LoadBalancerProtocol = (typeof LoadBalancerProtocol)[keyof typeof LoadBalancerProtocol];

/**
 * @public
 * @enum
 */
export const LoadBalancerState = {
  Active: "active",
  ActiveImpaired: "active_impaired",
  Failed: "failed",
  Provisioning: "provisioning",
  Unknown: "unknown",
} as const;

/**
 * @public
 */
export type LoadBalancerState = (typeof LoadBalancerState)[keyof typeof LoadBalancerState];

/**
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 * @public
 */
export interface LoadBalancerTlsCertificateSummary {
  /**
   * <p>The name of the SSL/TLS certificate.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   * @public
   */
  isAttached?: boolean | undefined;
}

/**
 * <p>Describes a load balancer.</p>
 * @public
 */
export interface LoadBalancer {
  /**
   * <p>The name of the load balancer (<code>my-load-balancer</code>).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The date when your load balancer was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The AWS Region where your load balancer was created (<code>us-east-2a</code>). Lightsail
   *       automatically creates your load balancer across Availability Zones.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The resource type (<code>LoadBalancer</code>.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The DNS name of your Lightsail load balancer.</p>
   * @public
   */
  dnsName?: string | undefined;

  /**
   * <p>The status of your load balancer. Valid values are below.</p>
   * @public
   */
  state?: LoadBalancerState | undefined;

  /**
   * <p>The protocol you have enabled for your load balancer. Valid values are below.</p>
   *          <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just
   *       <code>HTTP</code>.</p>
   * @public
   */
  protocol?: LoadBalancerProtocol | undefined;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS,
   *       use port 443.</p>
   * @public
   */
  publicPorts?: number[] | undefined;

  /**
   * <p>The path you specified to perform your health checks. If no path is specified, the load
   *       balancer tries to make a request to the default (root) page.</p>
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * <p>The port where the load balancer will direct traffic to your Lightsail instances. For
   *       HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
   * @public
   */
  instancePort?: number | undefined;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load
   *       balancer.</p>
   * @public
   */
  instanceHealthSummary?: InstanceHealthSummary[] | undefined;

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information
   *       about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached
   *       to the load balancer.</p>
   * @public
   */
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[] | undefined;

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values
   *       are listed below.</p>
   * @public
   */
  configurationOptions?: Partial<Record<LoadBalancerAttributeName, string>> | undefined;

  /**
   * <p>The IP address type of the load balancer.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, <code>ipv6</code> for IPv6 only,
   *       and <code>dualstack</code> for IPv4 and IPv6.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>A Boolean value that indicates whether HTTPS redirection is enabled for the load
   *       balancer.</p>
   * @public
   */
  httpsRedirectionEnabled?: boolean | undefined;

  /**
   * <p>The name of the TLS security policy for the load balancer.</p>
   * @public
   */
  tlsPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerResult {
  /**
   * <p>An object containing information about your load balancer.</p>
   * @public
   */
  loadBalancer?: LoadBalancer | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerMetricName = {
  ClientTLSNegotiationErrorCount: "ClientTLSNegotiationErrorCount",
  HTTPCode_Instance_2XX_Count: "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count: "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count: "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count: "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count: "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count: "HTTPCode_LB_5XX_Count",
  HealthyHostCount: "HealthyHostCount",
  InstanceResponseTime: "InstanceResponseTime",
  RejectedConnectionCount: "RejectedConnectionCount",
  RequestCount: "RequestCount",
  UnhealthyHostCount: "UnhealthyHostCount",
} as const;

/**
 * @public
 */
export type LoadBalancerMetricName = (typeof LoadBalancerMetricName)[keyof typeof LoadBalancerMetricName];

/**
 * @public
 */
export interface GetLoadBalancerMetricDataRequest {
  /**
   * <p>The name of the load balancer.</p>
   * @public
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
   * @public
   */
  metricName: LoadBalancerMetricName | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>The start time of the period.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the period.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   * @public
   */
  unit: MetricUnit | undefined;

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
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   * @public
   */
  metricName?: LoadBalancerMetricName | undefined;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancersRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetLoadBalancers</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancersResult {
  /**
   * <p>An array of LoadBalancer objects describing your load balancers.</p>
   * @public
   */
  loadBalancers?: LoadBalancer[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetLoadBalancers</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsCertificatesRequest {
  /**
   * <p>The name of the load balancer you associated with your SSL/TLS certificate.</p>
   * @public
   */
  loadBalancerName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateDnsRecordCreationStateCode = {
  Failed: "FAILED",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateDnsRecordCreationStateCode =
  (typeof LoadBalancerTlsCertificateDnsRecordCreationStateCode)[keyof typeof LoadBalancerTlsCertificateDnsRecordCreationStateCode];

/**
 * <p>An object that describes the state of the canonical name (CNAME) records that are
 *       automatically added by Lightsail to the DNS of the domain to validate domain
 *       ownership.</p>
 * @public
 */
export interface LoadBalancerTlsCertificateDnsRecordCreationState {
  /**
   * <p>The status code for the automated DNS record creation.</p>
   *          <p>Following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The validation records were successfully added.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTED</code> - The automatic DNS record creation has started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The validation record addition failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  code?: LoadBalancerTlsCertificateDnsRecordCreationStateCode | undefined;

  /**
   * <p>The message that describes the reason for the status code.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateDomainStatus = {
  Failed: "FAILED",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateDomainStatus =
  (typeof LoadBalancerTlsCertificateDomainStatus)[keyof typeof LoadBalancerTlsCertificateDomainStatus];

/**
 * <p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>
 * @public
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * <p>A fully qualified domain name in the certificate. For example,
   *       <code>example.com</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of validation record. For example, <code>CNAME</code> for domain
   *       validation.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value for that type.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The validation status. Valid values are listed below.</p>
   * @public
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | undefined;

  /**
   * <p>The domain name against which your SSL/TLS certificate was validated.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>An object that describes the state of the canonical name (CNAME) records that are
   *       automatically added by Lightsail to the DNS of a domain to validate domain
   *       ownership.</p>
   * @public
   */
  dnsRecordCreationState?: LoadBalancerTlsCertificateDnsRecordCreationState | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateFailureReason = {
  AdditionalVerificationRequired: "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed: "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain: "INVALID_PUBLIC_DOMAIN",
  NoAvailableContacts: "NO_AVAILABLE_CONTACTS",
  Other: "OTHER",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateFailureReason =
  (typeof LoadBalancerTlsCertificateFailureReason)[keyof typeof LoadBalancerTlsCertificateFailureReason];

/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use to
 *       validate domain ownership.</p>
 * @public
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * <p>The fully qualified domain name in the certificate request.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The status of the domain validation. Valid values are listed below.</p>
   * @public
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateRenewalStatus = {
  Failed: "FAILED",
  PendingAutoRenewal: "PENDING_AUTO_RENEWAL",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateRenewalStatus =
  (typeof LoadBalancerTlsCertificateRenewalStatus)[keyof typeof LoadBalancerTlsCertificateRenewalStatus];

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
 * @public
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
   * @public
   */
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatus | undefined;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to Lightsail's managed renewal. This is different from the initial validation that
   *       occurs as a result of the RequestCertificate request.</p>
   * @public
   */
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateRevocationReason = {
  AACompromise: "A_A_COMPROMISE",
  AffiliationChanged: "AFFILIATION_CHANGED",
  CaCompromise: "CA_COMPROMISE",
  CertificateHold: "CERTIFICATE_HOLD",
  CessationOfOperation: "CESSATION_OF_OPERATION",
  KeyCompromise: "KEY_COMPROMISE",
  PrivilegeWithdrawn: "PRIVILEGE_WITHDRAWN",
  RemoveFromCrl: "REMOVE_FROM_CRL",
  Superceded: "SUPERCEDED",
  Unspecified: "UNSPECIFIED",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateRevocationReason =
  (typeof LoadBalancerTlsCertificateRevocationReason)[keyof typeof LoadBalancerTlsCertificateRevocationReason];

/**
 * @public
 * @enum
 */
export const LoadBalancerTlsCertificateStatus = {
  Expired: "EXPIRED",
  Failed: "FAILED",
  Inactive: "INACTIVE",
  Issued: "ISSUED",
  PendingValidation: "PENDING_VALIDATION",
  Revoked: "REVOKED",
  Unknown: "UNKNOWN",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
} as const;

/**
 * @public
 */
export type LoadBalancerTlsCertificateStatus =
  (typeof LoadBalancerTlsCertificateStatus)[keyof typeof LoadBalancerTlsCertificateStatus];

/**
 * <p>Describes a load balancer SSL/TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 * @public
 */
export interface LoadBalancerTlsCertificate {
  /**
   * <p>The name of the SSL/TLS certificate (<code>my-certificate</code>).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to
   *       look up your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region and Availability Zone where you created your
   *       certificate.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The resource type (<code>LoadBalancerTlsCertificate</code>).</p>
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
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
   * @public
   */
  loadBalancerName?: string | undefined;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   * @public
   */
  isAttached?: boolean | undefined;

  /**
   * <p>The validation status of the SSL/TLS certificate. Valid values are below.</p>
   * @public
   */
  status?: LoadBalancerTlsCertificateStatus | undefined;

  /**
   * <p>The domain name for your SSL/TLS certificate.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the
   *       records.</p>
   * @public
   */
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[] | undefined;

  /**
   * <p>The validation failure reason, if any, of the certificate.</p>
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
   *           is reported as suspicious, see <a href="https://developers.google.com/web/fundamentals/security/hacked">Google Help for
   *             Hacked Websites</a> to learn what you can do.</p>
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
   * @public
   */
  failureReason?: LoadBalancerTlsCertificateFailureReason | undefined;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   * @public
   */
  issuedAt?: Date | undefined;

  /**
   * <p>The issuer of the certificate.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>The algorithm used to generate the key pair (the public and private key).</p>
   * @public
   */
  keyAlgorithm?: string | undefined;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   * @public
   */
  notAfter?: Date | undefined;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   * @public
   */
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary | undefined;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   * @public
   */
  revocationReason?: LoadBalancerTlsCertificateRevocationReason | undefined;

  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   * @public
   */
  revokedAt?: Date | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  serial?: string | undefined;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   * @public
   */
  signatureAlgorithm?: string | undefined;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>An array of strings that specify the alternate domains (<code>example2.com</code>) and
   *       subdomains (<code>blog.example.com</code>) for the certificate.</p>
   * @public
   */
  subjectAlternativeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsCertificatesResult {
  /**
   * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS
   *       certificates.</p>
   * @public
   */
  tlsCertificates?: LoadBalancerTlsCertificate[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsPoliciesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetLoadBalancerTlsPolicies</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * <p>Describes the TLS security policies that are available for Lightsail load
 *       balancers.</p>
 *          <p>For more information about load balancer TLS security policies, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
 *         balancers</a> in the <i>Amazon Lightsail Developer
 *       Guide</i>.</p>
 * @public
 */
export interface LoadBalancerTlsPolicy {
  /**
   * <p>The name of the TLS security policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether the TLS security policy is the default.</p>
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * <p>The description of the TLS security policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The protocols used in a given TLS security policy.</p>
   * @public
   */
  protocols?: string[] | undefined;

  /**
   * <p>The ciphers used by the TLS security policy.</p>
   *          <p>The ciphers are listed in order of preference.</p>
   * @public
   */
  ciphers?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLoadBalancerTlsPoliciesResult {
  /**
   * <p>An array of objects that describe the TLS security policies that are available.</p>
   * @public
   */
  tlsPolicies?: LoadBalancerTlsPolicy[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetLoadBalancerTlsPolicies</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationRequest {
  /**
   * <p>A GUID used to identify the operation.</p>
   * @public
   */
  operationId: string | undefined;
}

/**
 * @public
 */
export interface GetOperationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface GetOperationsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperations</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperations</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsForResourceRequest {
  /**
   * <p>The name of the resource for which you are requesting information.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperationsForResource</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetOperationsForResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;

  /**
   * <p>(Discontinued) Returns the number of pages of results that remain.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the
   *         API. It is now discontinued, and the API returns the <code>next page token</code> parameter
   *         instead.</p>
   *          </note>
   *
   * @deprecated deprecated
   * @public
   */
  nextPageCount?: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperationsForResource</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRegionsRequest {
  /**
   * <p>A Boolean value indicating whether to also include Availability Zones in your get regions
   *       request. Availability Zones are indicated with a letter: <code>us-east-2a</code>.</p>
   * @public
   */
  includeAvailabilityZones?: boolean | undefined;

  /**
   * <p>A Boolean value indicating whether to also include Availability Zones for databases in
   *       your get regions request. Availability Zones are indicated with a letter
   *         (<code>us-east-2a</code>).</p>
   * @public
   */
  includeRelationalDatabaseAvailabilityZones?: boolean | undefined;
}

/**
 * <p>Describes the Amazon Web Services Region.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The continent code (<code>NA</code>, meaning North America).</p>
   * @public
   */
  continentCode?: string | undefined;

  /**
   * <p>The description of the Amazon Web Services Region (<code>This region is recommended to
   *         serve users in the eastern United States and eastern Canada</code>).</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The display name (<code>Ohio</code>).</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The region name (<code>us-east-2</code>).</p>
   * @public
   */
  name?: RegionName | undefined;

  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   * @public
   */
  availabilityZones?: AvailabilityZone[] | undefined;

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   * @public
   */
  relationalDatabaseAvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * @public
 */
export interface GetRegionsResult {
  /**
   * <p>An array of key-value pairs containing information about your get regions request.</p>
   * @public
   */
  regions?: Region[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseRequest {
  /**
   * <p>The name of the database that you are looking up.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * <p>Describes the hardware of a database.</p>
 * @public
 */
export interface RelationalDatabaseHardware {
  /**
   * <p>The number of vCPUs for the database.</p>
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * <p>The size of the disk for the database.</p>
   * @public
   */
  diskSizeInGb?: number | undefined;

  /**
   * <p>The amount of RAM in GB for the database.</p>
   * @public
   */
  ramSizeInGb?: number | undefined;
}

/**
 * <p>Describes an endpoint for a database.</p>
 * @public
 */
export interface RelationalDatabaseEndpoint {
  /**
   * <p>Specifies the port that the database is listening on.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies the DNS address of the database.</p>
   * @public
   */
  address?: string | undefined;
}

/**
 * <p>Describes a pending database maintenance action.</p>
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending database maintenance action.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>Additional detail about the pending database maintenance action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The effective date of the pending database maintenance action.</p>
   * @public
   */
  currentApplyDate?: Date | undefined;
}

/**
 * <p>Describes a pending database value modification.</p>
 * @public
 */
export interface PendingModifiedRelationalDatabaseValues {
  /**
   * <p>The password for the master user of the database.</p>
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * <p>The database engine version.</p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
   * @public
   */
  backupRetentionEnabled?: boolean | undefined;
}

/**
 * <p>Describes a database.</p>
 * @public
 */
export interface RelationalDatabase {
  /**
   * <p>The unique name of the database resource in Lightsail.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code for the database. Include this code in your email to support when you
   *       have questions about a database in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The Lightsail resource type for the database (for example,
   *         <code>RelationalDatabase</code>).</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The blueprint ID for the database. A blueprint describes the major engine version of a
   *       database.</p>
   * @public
   */
  relationalDatabaseBlueprintId?: string | undefined;

  /**
   * <p>The bundle ID for the database. A bundle describes the performance specifications for your
   *       database.</p>
   * @public
   */
  relationalDatabaseBundleId?: string | undefined;

  /**
   * <p>The name of the master database created when the Lightsail database resource is
   *       created.</p>
   * @public
   */
  masterDatabaseName?: string | undefined;

  /**
   * <p>Describes the hardware of the database.</p>
   * @public
   */
  hardware?: RelationalDatabaseHardware | undefined;

  /**
   * <p>Describes the current state of the database.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>Describes the secondary Availability Zone of a high availability database.</p>
   *          <p>The secondary database is used for failover support of a high availability
   *       database.</p>
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled for the
   *       database.</p>
   * @public
   */
  backupRetentionEnabled?: boolean | undefined;

  /**
   * <p>Describes pending database value modifications.</p>
   * @public
   */
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues | undefined;

  /**
   * <p>The database software (for example, <code>MySQL</code>).</p>
   * @public
   */
  engine?: string | undefined;

  /**
   * <p>The database engine version (for example, <code>5.7.23</code>).</p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix
   *       time.</p>
   * @public
   */
  latestRestorableTime?: Date | undefined;

  /**
   * <p>The master user name of the database.</p>
   * @public
   */
  masterUsername?: string | undefined;

  /**
   * <p>The status of parameter updates for the database.</p>
   * @public
   */
  parameterApplyStatus?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created for the database (for
   *       example, <code>16:00-16:30</code>).</p>
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur on the database.</p>
   *          <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example,
   *         <code>Tue:17:00-Tue:17:30</code>.</p>
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the database is publicly accessible.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>The master endpoint for the database.</p>
   * @public
   */
  masterEndpoint?: RelationalDatabaseEndpoint | undefined;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   * @public
   */
  pendingMaintenanceActions?: PendingMaintenanceAction[] | undefined;

  /**
   * <p>The certificate associated with the database.</p>
   * @public
   */
  caCertificateIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseResult {
  /**
   * <p>An object describing the specified database.</p>
   * @public
   */
  relationalDatabase?: RelationalDatabase | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBlueprintsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBlueprints</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RelationalDatabaseEngine = {
  MYSQL: "mysql",
} as const;

/**
 * @public
 */
export type RelationalDatabaseEngine = (typeof RelationalDatabaseEngine)[keyof typeof RelationalDatabaseEngine];

/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine version
 *       of a database.</p>
 * @public
 */
export interface RelationalDatabaseBlueprint {
  /**
   * <p>The ID for the database blueprint.</p>
   * @public
   */
  blueprintId?: string | undefined;

  /**
   * <p>The database software of the database blueprint (for example, <code>MySQL</code>).</p>
   * @public
   */
  engine?: RelationalDatabaseEngine | undefined;

  /**
   * <p>The database engine version for the database blueprint (for example,
   *       <code>5.7.23</code>).</p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>The description of the database engine for the database blueprint.</p>
   * @public
   */
  engineDescription?: string | undefined;

  /**
   * <p>The description of the database engine version for the database blueprint.</p>
   * @public
   */
  engineVersionDescription?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the engine version is the default for the database
   *       blueprint.</p>
   * @public
   */
  isEngineDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBlueprintsResult {
  /**
   * <p>An object describing the result of your get relational database blueprints request.</p>
   * @public
   */
  blueprints?: RelationalDatabaseBlueprint[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseBlueprints</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBundlesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBundles</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   * @public
   */
  includeInactive?: boolean | undefined;
}

/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the
 *       database.</p>
 * @public
 */
export interface RelationalDatabaseBundle {
  /**
   * <p>The ID for the database bundle.</p>
   * @public
   */
  bundleId?: string | undefined;

  /**
   * <p>The name for the database bundle.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The cost of the database bundle in US currency.</p>
   * @public
   */
  price?: number | undefined;

  /**
   * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.</p>
   * @public
   */
  ramSizeInGb?: number | undefined;

  /**
   * <p>The size of the disk for the database bundle.</p>
   * @public
   */
  diskSizeInGb?: number | undefined;

  /**
   * <p>The data transfer rate per month in GB for the database bundle.</p>
   * @public
   */
  transferPerMonthInGb?: number | undefined;

  /**
   * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
   * @public
   */
  isEncrypted?: boolean | undefined;

  /**
   * <p>A Boolean value indicating whether the database bundle is active.</p>
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseBundlesResult {
  /**
   * <p>An object describing the result of your get relational database bundles request.</p>
   * @public
   */
  bundles?: RelationalDatabaseBundle[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseBundles</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseEventsRequest {
  /**
   * <p>The name of the database from which to get events.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The number of minutes in the past from which to retrieve events. For example, to get all
   *       events from the past 2 hours, enter 120.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   *          <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>
   * @public
   */
  durationInMinutes?: number | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseEvents</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * <p>Describes an event for a database.</p>
 * @public
 */
export interface RelationalDatabaseEvent {
  /**
   * <p>The database that the database event relates to.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>The timestamp when the database event was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The message of the database event.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The category that the database event belongs to.</p>
   * @public
   */
  eventCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseEventsResult {
  /**
   * <p>An object describing the result of your get relational database events request.</p>
   * @public
   */
  relationalDatabaseEvents?: RelationalDatabaseEvent[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseEvents</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogEventsRequest {
  /**
   * <p>The name of your database for which to get log events.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   *          <p>Use the <code>get relational database log streams</code> operation to get a list of
   *       available log streams.</p>
   * @public
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
   * @public
   */
  startTime?: Date | undefined;

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
   *             </li>
   *          </ul>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is
   *       specified, the log event starts from the head of the log. If <code>false</code> is specified,
   *       the log event starts from the tail of the log.</p>
   *          <note>
   *             <p>For PostgreSQL, the default value of <code>false</code> is the only option
   *         available.</p>
   *          </note>
   * @public
   */
  startFromHead?: boolean | undefined;

  /**
   * <p>The token to advance to the next or previous page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseLogEvents</code>
   *       request. If your results are paginated, the response will return a next forward token and/or
   *       next backward token that you can specify as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * <p>Describes a database log event.</p>
 * @public
 */
export interface LogEvent {
  /**
   * <p>The timestamp when the database log event was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The message of the database log event.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogEventsResult {
  /**
   * <p>An object describing the result of your get relational database log events request.</p>
   * @public
   */
  resourceLogEvents?: LogEvent[] | undefined;

  /**
   * <p>A token used for advancing to the previous page of results from your get relational
   *       database log events request.</p>
   * @public
   */
  nextBackwardToken?: string | undefined;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database
   *       log events request.</p>
   * @public
   */
  nextForwardToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogStreamsRequest {
  /**
   * <p>The name of your database for which to get log streams.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseLogStreamsResult {
  /**
   * <p>An object describing the result of your get relational database log streams
   *       request.</p>
   * @public
   */
  logStreams?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RelationalDatabasePasswordVersion = {
  CURRENT: "CURRENT",
  PENDING: "PENDING",
  PREVIOUS: "PREVIOUS",
} as const;

/**
 * @public
 */
export type RelationalDatabasePasswordVersion =
  (typeof RelationalDatabasePasswordVersion)[keyof typeof RelationalDatabasePasswordVersion];

/**
 * @public
 */
export interface GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * <p>The name of your database for which to get the master user password.</p>
   * @public
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
   * @public
   */
  passwordVersion?: RelationalDatabasePasswordVersion | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * <p>The master user password for the <code>password version</code> specified.</p>
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * <p>The timestamp when the specified version of the master user password was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RelationalDatabaseMetricName = {
  CPUUtilization: "CPUUtilization",
  DatabaseConnections: "DatabaseConnections",
  DiskQueueDepth: "DiskQueueDepth",
  FreeStorageSpace: "FreeStorageSpace",
  NetworkReceiveThroughput: "NetworkReceiveThroughput",
  NetworkTransmitThroughput: "NetworkTransmitThroughput",
} as const;

/**
 * @public
 */
export type RelationalDatabaseMetricName =
  (typeof RelationalDatabaseMetricName)[keyof typeof RelationalDatabaseMetricName];

/**
 * @public
 */
export interface GetRelationalDatabaseMetricDataRequest {
  /**
   * <p>The name of your database from which to get metric data.</p>
   * @public
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
   * @public
   */
  metricName: RelationalDatabaseMetricName | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   * @public
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
   *             </li>
   *          </ul>
   * @public
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
   *             </li>
   *          </ul>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   * @public
   */
  unit: MetricUnit | undefined;

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
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   * @public
   */
  metricName?: RelationalDatabaseMetricName | undefined;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to get parameters.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseParameters</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * <p>Describes the parameters of a database.</p>
 * @public
 */
export interface RelationalDatabaseParameter {
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   * @public
   */
  allowedValues?: string | undefined;

  /**
   * <p>Indicates when parameter updates are applied.</p>
   *          <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
   * @public
   */
  applyMethod?: string | undefined;

  /**
   * <p>Specifies the engine-specific parameter type.</p>
   * @public
   */
  applyType?: string | undefined;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   * @public
   */
  dataType?: string | undefined;

  /**
   * <p>Provides a description of the parameter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the parameter can be modified.</p>
   * @public
   */
  isModifiable?: boolean | undefined;

  /**
   * <p>Specifies the name of the parameter.</p>
   * @public
   */
  parameterName?: string | undefined;

  /**
   * <p>Specifies the value of the parameter.</p>
   * @public
   */
  parameterValue?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseParametersResult {
  /**
   * <p>An object describing the result of your get relational database parameters request.</p>
   * @public
   */
  parameters?: RelationalDatabaseParameter[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseParameters</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabasesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabases</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabasesResult {
  /**
   * <p>An object describing the result of your get relational databases request.</p>
   * @public
   */
  relationalDatabases?: RelationalDatabase[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabases</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database snapshot for which to get information.</p>
   * @public
   */
  relationalDatabaseSnapshotName: string | undefined;
}

/**
 * <p>Describes a database snapshot.</p>
 * @public
 */
export interface RelationalDatabaseSnapshot {
  /**
   * <p>The name of the database snapshot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code for the database snapshot. Include this code in your email to support
   *       when you have questions about a database snapshot in Lightsail. This code enables our
   *       support team to look up your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The timestamp when the database snapshot was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The Lightsail resource type.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
   * @public
   */
  engine?: string | undefined;

  /**
   * <p>The database engine version for the database snapshot (for example,
   *       <code>5.7.23</code>).</p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>The size of the disk in GB (for example, <code>32</code>) for the database
   *       snapshot.</p>
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * <p>The state of the database snapshot.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The name of the source database from which the database snapshot was created.</p>
   * @public
   */
  fromRelationalDatabaseName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was
   *       created.</p>
   * @public
   */
  fromRelationalDatabaseArn?: string | undefined;

  /**
   * <p>The bundle ID of the database from which the database snapshot was created.</p>
   * @public
   */
  fromRelationalDatabaseBundleId?: string | undefined;

  /**
   * <p>The blueprint ID of the database from which the database snapshot was created. A blueprint
   *       describes the major engine version of a database.</p>
   * @public
   */
  fromRelationalDatabaseBlueprintId?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotResult {
  /**
   * <p>An object describing the specified database snapshot.</p>
   * @public
   */
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseSnapshots</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRelationalDatabaseSnapshotsResult {
  /**
   * <p>An object describing the result of your get relational database snapshots request.</p>
   * @public
   */
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseSnapshots</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSetupHistoryRequest {
  /**
   * <p>The name of the resource for which you are requesting information.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetSetupHistory</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SetupStatus = {
  Failed: "failed",
  InProgress: "inProgress",
  Succeeded: "succeeded",
} as const;

/**
 * @public
 */
export type SetupStatus = (typeof SetupStatus)[keyof typeof SetupStatus];

/**
 * <p>Returns details about the commands that were run.</p>
 * @public
 */
export interface SetupExecutionDetails {
  /**
   * <p>The command that was executed.</p>
   * @public
   */
  command?: string | undefined;

  /**
   * <p>The timestamp for when the request was run.</p>
   * @public
   */
  dateTime?: Date | undefined;

  /**
   * <p>The name of the target resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the <code>SetupInstanceHttps</code> request.</p>
   * @public
   */
  status?: SetupStatus | undefined;

  /**
   * <p>The text written by the command to stderr.</p>
   * @public
   */
  standardError?: string | undefined;

  /**
   * <p>The text written by the command to stdout.</p>
   * @public
   */
  standardOutput?: string | undefined;

  /**
   * <p>The current version of the script..</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Returns information that was submitted during the <code>SetupInstanceHttps</code> request.
 *       Email information is redacted for privacy.</p>
 * @public
 */
export interface SetupRequest {
  /**
   * <p>The name of the Lightsail instance.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The name of the domain and subdomains that the SSL/TLS certificate secures.</p>
   * @public
   */
  domainNames?: string[] | undefined;

  /**
   * <p>The Certificate Authority (CA) that issues the SSL/TLS certificate.</p>
   * @public
   */
  certificateProvider?: CertificateProvider | undefined;
}

/**
 * <p>The Lightsail resource that <code>SetupHistory</code> was ran on. </p>
 * @public
 */
export interface SetupHistoryResource {
  /**
   * <p>The name of the Lightsail resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lightsail resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The timestamp for when the resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Describes the resource location.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The Lightsail resource type. For example, <code>Instance</code>.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;
}

/**
 * <p>Returns a list of the commands that were ran on the target resource.</p>
 *          <p>The status of each command is also returned.</p>
 * @public
 */
export interface SetupHistory {
  /**
   * <p>A GUID that's used to identify the operation.</p>
   * @public
   */
  operationId?: string | undefined;

  /**
   * <p>Information about the specified request.</p>
   * @public
   */
  request?: SetupRequest | undefined;

  /**
   * <p>The target resource name for the request.</p>
   * @public
   */
  resource?: SetupHistoryResource | undefined;

  /**
   * <p>Describes the full details of the request.</p>
   * @public
   */
  executionDetails?: SetupExecutionDetails[] | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status?: SetupStatus | undefined;
}

/**
 * @public
 */
export interface GetSetupHistoryResult {
  /**
   * <p>The historical information that's returned.</p>
   * @public
   */
  setupHistory?: SetupHistory[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetSetupHistory</code> request and
   *       specify the next page token using the pageToken parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStaticIpRequest {
  /**
   * <p>The name of the static IP in Lightsail.</p>
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * <p>Describes a static IP.</p>
 * @public
 */
export interface StaticIp {
  /**
   * <p>The name of the static IP (<code>StaticIP-Ohio-EXAMPLE</code>).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the static IP
   *         (<code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   * @public
   */
  supportCode?: string | undefined;

  /**
   * <p>The timestamp when the static IP was created (<code>1479735304.222</code>).</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * <p>The resource type (usually <code>StaticIp</code>).</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The static IP address.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The instance where the static IP is attached
   *       (<code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   * @public
   */
  attachedTo?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the static IP is attached.</p>
   * @public
   */
  isAttached?: boolean | undefined;
}

/**
 * @public
 */
export interface GetStaticIpResult {
  /**
   * <p>An array of key-value pairs containing information about the requested static IP.</p>
   * @public
   */
  staticIp?: StaticIp | undefined;
}

/**
 * @public
 */
export interface GetStaticIpsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetStaticIps</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStaticIpsResult {
  /**
   * <p>An array of key-value pairs containing information about your get static IPs
   *       request.</p>
   * @public
   */
  staticIps?: StaticIp[] | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetStaticIps</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * <p>The name of the key pair for which you want to import the public key.</p>
   * @public
   */
  keyPairName: string | undefined;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   * @public
   */
  publicKeyBase64: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
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
   * <p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise,
   *       <code>false</code>.</p>
   * @public
   */
  isPeered?: boolean | undefined;
}

/**
 * @public
 */
export interface OpenInstancePublicPortsRequest {
  /**
   * <p>An object to describe the ports to open for the specified instance.</p>
   * @public
   */
  portInfo: PortInfo | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface OpenInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
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
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface PutAlarmRequest {
  /**
   * <p>The name for the alarm. Specify the name of an existing alarm to update, and overwrite the
   *       previous configuration of the alarm.</p>
   * @public
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
   *          <p>For more information about these metrics, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-resource-health-metrics#available-metrics">Metrics available in Lightsail</a>.</p>
   * @public
   */
  metricName: MetricName | undefined;

  /**
   * <p>The name of the Lightsail resource that will be monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   * @public
   */
  monitoredResourceName: string | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic to the threshold.
   *       The specified statistic value is used as the first operand.</p>
   * @public
   */
  comparisonOperator: ComparisonOperator | undefined;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   * @public
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
   * @public
   */
  evaluationPeriods: number | undefined;

  /**
   * <p>The number of data points that must be not within the specified threshold to trigger the
   *       alarm. If you are setting an "M out of N" alarm, this value (<code>datapointsToAlarm</code>)
   *       is the M.</p>
   * @public
   */
  datapointsToAlarm?: number | undefined;

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
   * @public
   */
  treatMissingData?: TreatMissingData | undefined;

  /**
   * <p>The contact protocols to use for the alarm, such as <code>Email</code>, <code>SMS</code>
   *       (text messaging), or both.</p>
   *          <p>A notification is sent via the specified contact protocol if notifications are enabled for
   *       the alarm, and when the alarm is triggered.</p>
   *          <p>A notification is not sent if a contact protocol is not specified, if the specified
   *       contact protocol is not configured in the Amazon Web Services Region, or if notifications are
   *       not enabled for the alarm using the <code>notificationEnabled</code> paramater.</p>
   *          <p>Use the <code>CreateContactMethod</code> action to configure a contact protocol in an
   *         Amazon Web Services Region.</p>
   * @public
   */
  contactProtocols?: ContactProtocol[] | undefined;

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
   * @public
   */
  notificationTriggers?: AlarmState[] | undefined;

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   *          <p>Notifications are enabled by default if you don't specify this parameter.</p>
   * @public
   */
  notificationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface PutAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface PutInstancePublicPortsRequest {
  /**
   * <p>An array of objects to describe the ports to open for the specified instance.</p>
   * @public
   */
  portInfos: PortInfo[] | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface PutInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface RebootInstanceRequest {
  /**
   * <p>The name of the instance to reboot.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface RebootInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface RebootRelationalDatabaseRequest {
  /**
   * <p>The name of your database to reboot.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface RebootRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface RegisterContainerImageRequest {
  /**
   * <p>The name of the container service for which to register a container image.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The label for the container image when it's registered to the container service.</p>
   *          <p>Use a descriptive label that you can use to track the different versions of your
   *       registered container images.</p>
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
   *          <p>If the name of your container service is <code>mycontainerservice</code>, and the label
   *       that you specify is <code>mystaticwebsite</code>, then the name of the registered container
   *       image will be <code>:mycontainerservice.mystaticwebsite.1</code>.</p>
   *          <p>The number at the end of these image name examples represents the version of the
   *       registered container image. If you push and register another container image to the same
   *       Lightsail container service, with the same label, then the version number for the new
   *       registered container image will be <code>2</code>. If you push and register another container
   *       image, the version number will be <code>3</code>, and so on.</p>
   * @public
   */
  label: string | undefined;

  /**
   * <p>The digest of the container image to be registered.</p>
   * @public
   */
  digest: string | undefined;
}

/**
 * @public
 */
export interface RegisterContainerImageResult {
  /**
   * <p>An object that describes a container image that is registered to a Lightsail container
   *       service</p>
   * @public
   */
  containerImage?: ContainerImage | undefined;
}

/**
 * @public
 */
export interface ReleaseStaticIpRequest {
  /**
   * <p>The name of the static IP to delete.</p>
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * @public
 */
export interface ReleaseStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface ResetDistributionCacheRequest {
  /**
   * <p>The name of the distribution for which to reset cache.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   * @public
   */
  distributionName?: string | undefined;
}

/**
 * @public
 */
export interface ResetDistributionCacheResult {
  /**
   * <p>The status of the reset cache request.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The timestamp of the reset cache request (<code>1479734909.17</code>) in Unix time
   *       format.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface SendContactMethodVerificationRequest {
  /**
   * <p>The protocol to verify, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   * @public
   */
  protocol: ContactMethodVerificationProtocol | undefined;
}

/**
 * @public
 */
export interface SendContactMethodVerificationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface SetIpAddressTypeRequest {
  /**
   * <p>The resource type.</p>
   *          <p>The resource values are <code>Distribution</code>, <code>Instance</code>, and
   *         <code>LoadBalancer</code>.</p>
   *          <note>
   *             <p>Distribution-related APIs are available only in the N. Virginia (<code>us-east-1</code>)
   *           Amazon Web Services Region. Set your Amazon Web Services Region configuration to
   *           <code>us-east-1</code> to create, view, or edit distributions.</p>
   *          </note>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The name of the resource for which to set the IP address type.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The IP address type to set for the specified resource.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, <code>ipv6</code> for IPv6 only,
   *       and <code>dualstack</code> for IPv4 and IPv6.</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>Required parameter to accept the instance bundle update when changing to, and from,
   *       IPv6-only.</p>
   *          <note>
   *             <p>An instance bundle will change when switching from <code>dual-stack</code> or
   *           <code>ipv4</code>, to <code>ipv6</code>. It also changes when switching from
   *           <code>ipv6</code>, to <code>dual-stack</code> or <code>ipv4</code>.</p>
   *             <p>You must include this parameter in the command to update the bundle. For example, if you
   *         switch from <code>dual-stack</code> to <code>ipv6</code>, the bundle will be updated, and
   *         billing for the IPv6-only instance bundle begins immediately.</p>
   *          </note>
   * @public
   */
  acceptBundleUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface SetIpAddressTypeResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceBucketAccess = {
  Allow: "allow",
  Deny: "deny",
} as const;

/**
 * @public
 */
export type ResourceBucketAccess = (typeof ResourceBucketAccess)[keyof typeof ResourceBucketAccess];

/**
 * @public
 */
export interface SetResourceAccessForBucketRequest {
  /**
   * <p>The name of the Lightsail instance for which to set bucket access. The instance must be
   *       in a running or stopped state.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The name of the bucket for which to set access to another Lightsail resource.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The access setting.</p>
   *          <p>The following access settings are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow</code> - Allows access to the bucket and its objects.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deny</code> - Denies access to the bucket and its objects. Use this setting to
   *           remove access for a resource previously set to <code>allow</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  access: ResourceBucketAccess | undefined;
}

/**
 * @public
 */
export interface SetResourceAccessForBucketResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface SetupInstanceHttpsRequest {
  /**
   * <p>The name of the Lightsail instance.</p>
   * @public
   */
  instanceName: string | undefined;

  /**
   * <p>The contact method for SSL/TLS certificate renewal alerts. You can enter one email
   *       address. </p>
   * @public
   */
  emailAddress: string | undefined;

  /**
   * <p>The name of the domain and subdomains that were specified for the SSL/TLS
   *       certificate.</p>
   * @public
   */
  domainNames: string[] | undefined;

  /**
   * <p>The certificate authority that issues the SSL/TLS certificate.</p>
   * @public
   */
  certificateProvider: CertificateProvider | undefined;
}

/**
 * @public
 */
export interface SetupInstanceHttpsResult {
  /**
   * <p>The available API operations for <code>SetupInstanceHttps</code>.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartGUISessionRequest {
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface StartGUISessionResult {
  /**
   * <p>The available API operations.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to start.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface StartInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StartRelationalDatabaseRequest {
  /**
   * <p>The name of your database to start.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;
}

/**
 * @public
 */
export interface StartRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopGUISessionRequest {
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface StopGUISessionResult {
  /**
   * <p>The available API operations.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to stop.</p>
   * @public
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
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface StopRelationalDatabaseRequest {
  /**
   * <p>The name of your database to stop.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of your new database snapshot to be created before stopping your database.</p>
   * @public
   */
  relationalDatabaseSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface StopRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The name of the resource to which you are adding tags.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add a tag.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The tag key and optional value.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface TestAlarmRequest {
  /**
   * <p>The name of the alarm to test.</p>
   * @public
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
   * @public
   */
  state: AlarmState | undefined;
}

/**
 * @public
 */
export interface TestAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
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
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The name of the resource from which you are removing a tag.</p>
   * @public
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The tag keys to delete from the specified resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateBucketRequest {
  /**
   * <p>The name of the bucket to update.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>An object that sets the public accessibility of objects in the specified bucket.</p>
   * @public
   */
  accessRules?: AccessRules | undefined;

  /**
   * <p>Specifies whether to enable or suspend versioning of objects in the bucket.</p>
   *          <p>The following options can be specified:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Enables versioning of objects in the specified bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Suspended</code> - Suspends versioning of objects in the specified bucket.
   *           Existing object versions are retained.</p>
   *             </li>
   *          </ul>
   * @public
   */
  versioning?: string | undefined;

  /**
   * <p>An array of strings to specify the Amazon Web Services account IDs that can access the
   *       bucket.</p>
   *          <p>You can give a maximum of 10 Amazon Web Services accounts access to a bucket.</p>
   * @public
   */
  readonlyAccessAccounts?: string[] | undefined;

  /**
   * <p>An object that describes the access log configuration for the bucket.</p>
   * @public
   */
  accessLogConfig?: BucketAccessLogConfig | undefined;
}

/**
 * @public
 */
export interface UpdateBucketResult {
  /**
   * <p>An object that describes the bucket that is updated.</p>
   * @public
   */
  bucket?: Bucket | undefined;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateBucketBundleRequest {
  /**
   * <p>The name of the bucket for which to update the bundle.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the new bundle to apply to the bucket.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of
   *       bundle IDs that you can specify.</p>
   * @public
   */
  bundleId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBucketBundleResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateContainerServiceRequest {
  /**
   * <p>The name of the container service to update.</p>
   * @public
   */
  serviceName: string | undefined;

  /**
   * <p>The power for the container service.</p>
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *          <p>Use the <code>GetContainerServicePowers</code> action to view the specifications of each
   *       power option.</p>
   * @public
   */
  power?: ContainerServicePowerName | undefined;

  /**
   * <p>The scale for the container service.</p>
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   * @public
   */
  scale?: number | undefined;

  /**
   * <p>A Boolean value to indicate whether the container service is disabled.</p>
   * @public
   */
  isDisabled?: boolean | undefined;

  /**
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   * @public
   */
  publicDomainNames?: Record<string, string[]> | undefined;

  /**
   * <p>An object to describe the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   * @public
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest | undefined;
}

/**
 * @public
 */
export interface UpdateContainerServiceResult {
  /**
   * <p>An object that describes a container service.</p>
   * @public
   */
  containerService?: ContainerService | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionRequest {
  /**
   * <p>The name of the distribution to update.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   * @public
   */
  distributionName: string | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   * @public
   */
  origin?: InputOrigin | undefined;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   * @public
   */
  defaultCacheBehavior?: CacheBehavior | undefined;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   *          <note>
   *             <p>The <code>cacheBehaviorSettings</code> specified in your
   *           <code>UpdateDistributionRequest</code> will replace your distribution's existing
   *         settings.</p>
   *          </note>
   * @public
   */
  cacheBehaviorSettings?: CacheSettings | undefined;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   * @public
   */
  cacheBehaviors?: CacheBehaviorPerPath[] | undefined;

  /**
   * <p>Indicates whether to enable the distribution.</p>
   * @public
   */
  isEnabled?: boolean | undefined;

  /**
   * <p>Use this parameter to update the minimum TLS protocol version for the SSL/TLS certificate
   *       that's attached to the distribution.</p>
   * @public
   */
  viewerMinimumTlsProtocolVersion?: ViewerMinimumTlsProtocolVersionEnum | undefined;

  /**
   * <p>The name of the SSL/TLS certificate that you want to attach to the distribution.</p>
   *          <p>Only certificates with a status of <code>ISSUED</code> can be attached to a
   *       distribution.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html">GetCertificates</a>
   *       action to get a list of certificate names that you can specify.</p>
   * @public
   */
  certificateName?: string | undefined;

  /**
   * <p>Indicates whether the default SSL/TLS certificate is attached to the distribution. The
   *       default value is <code>true</code>. When <code>true</code>, the distribution uses the default
   *       domain name such as <code>d111111abcdef8.cloudfront.net</code>.</p>
   *          <p> Set this value to <code>false</code> to attach a new certificate to the
   *       distribution.</p>
   * @public
   */
  useDefaultCertificate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionBundleRequest {
  /**
   * <p>The name of the distribution for which to update the bundle.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   * @public
   */
  distributionName?: string | undefined;

  /**
   * <p>The bundle ID of the new bundle to apply to your distribution.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   * @public
   */
  bundleId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionBundleResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateDomainEntryRequest {
  /**
   * <p>The name of the domain recordset to update.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about the domain entry.</p>
   * @public
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface UpdateDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceMetadataOptionsRequest {
  /**
   * <p>The name of the instance for which to update metadata parameters.</p>
   * @public
   */
  instanceName: string | undefined;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *       specified in the request, the default state is <code>optional</code>.</p>
   *          <p>If the state is <code>optional</code>, you can choose whether to retrieve instance
   *       metadata with a signed token header on your request. If you retrieve the IAM role credentials
   *       without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role
   *       credentials by using a valid signed token, the version 2.0 role credentials are
   *       returned.</p>
   *          <p>If the state is <code>required</code>, you must send a signed token header with all
   *       instance metadata retrieval requests. In this state, retrieving the IAM role credential always
   *       returns the version 2.0 credentials. The version 1.0 credentials are not available.</p>
   * @public
   */
  httpTokens?: HttpTokens | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not
   *       specified, the existing state is maintained.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *       metadata.</p>
   * @public
   */
  httpEndpoint?: HttpEndpoint | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. A larger number
   *       means that the instance metadata requests can travel farther. If no parameter is specified,
   *       the existing state is maintained.</p>
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service. This setting
   *       applies only when the HTTP metadata endpoint is enabled.</p>
   *          <note>
   *             <p>This parameter is available only for instances in the Europe (Stockholm) Amazon Web Services Region (<code>eu-north-1</code>).</p>
   *          </note>
   * @public
   */
  httpProtocolIpv6?: HttpProtocolIpv6 | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceMetadataOptionsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface UpdateLoadBalancerAttributeRequest {
  /**
   * <p>The name of the load balancer that you want to modify
   *       (<code>my-load-balancer</code>.</p>
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of the attribute you want to update.</p>
   * @public
   */
  attributeName: LoadBalancerAttributeName | undefined;

  /**
   * <p>The value that you want to specify for the attribute name.</p>
   *          <p>The following values are supported depending on what you specify for the
   *         <code>attributeName</code> request parameter:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>HealthCheckPath</code> for the <code>attributeName</code> request
   *           parameter, then the <code>attributeValue</code> request parameter must be the path to ping
   *           on the target (for example, <code>/weather/us/wa/seattle</code>).</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>SessionStickinessEnabled</code> for the
   *             <code>attributeName</code> request parameter, then the <code>attributeValue</code>
   *           request parameter must be <code>true</code> to activate session stickiness or
   *             <code>false</code> to deactivate session stickiness.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>SessionStickiness_LB_CookieDurationSeconds</code> for the
   *             <code>attributeName</code> request parameter, then the <code>attributeValue</code>
   *           request parameter must be an interger that represents the cookie duration in
   *           seconds.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>HttpsRedirectionEnabled</code> for the <code>attributeName</code>
   *           request parameter, then the <code>attributeValue</code> request parameter must be
   *             <code>true</code> to activate HTTP to HTTPS redirection or <code>false</code> to
   *           deactivate HTTP to HTTPS redirection.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>TlsPolicyName</code> for the <code>attributeName</code> request
   *           parameter, then the <code>attributeValue</code> request parameter must be the name of the
   *           TLS policy.</p>
   *                <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you
   *           can specify.</p>
   *             </li>
   *          </ul>
   * @public
   */
  attributeValue: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoadBalancerAttributeResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseRequest {
  /**
   * <p>The name of your Lightsail database resource to update.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character
   *       except "/", """, or "@".</p>
   *          <p>My<b>SQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * <p>When <code>true</code>, the master user password is changed to a new strong password
   *       generated by Lightsail.</p>
   *          <p>Use the <code>get relational database master user password</code> operation to get the new
   *       password.</p>
   * @public
   */
  rotateMasterUserPassword?: boolean | undefined;

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
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur on your database.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *         Amazon Web Services Region, occurring on a random day of the week.</p>
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
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * <p>When <code>true</code>, enables automated backup retention for your database.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   * @public
   */
  enableBackupRetention?: boolean | undefined;

  /**
   * <p>When <code>true</code>, disables automated backup retention for your database.</p>
   *          <p>Disabling backup retention deletes all automated database backups. Before disabling this,
   *       you may want to create a snapshot of your database using the <code>create relational database
   *         snapshot</code> operation.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   * @public
   */
  disableBackupRetention?: boolean | undefined;

  /**
   * <p>Specifies the accessibility options for your database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies
   *       changes during the preferred maintenance window. Some changes may cause an outage.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  applyImmediately?: boolean | undefined;

  /**
   * <p>Indicates the certificate that needs to be associated with the database.</p>
   * @public
   */
  caCertificateIdentifier?: string | undefined;

  /**
   * <p>This parameter is used to update the major version of the database. Enter the
   *         <code>blueprintId</code> for the major version that you want to update to.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html">GetRelationalDatabaseBlueprints</a> action to get a list of available blueprint
   *       IDs.</p>
   * @public
   */
  relationalDatabaseBlueprintId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to update parameters.</p>
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The database parameters to update.</p>
   * @public
   */
  parameters: RelationalDatabaseParameter[] | undefined;
}

/**
 * @public
 */
export interface UpdateRelationalDatabaseParametersResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @internal
 */
export const GetRelationalDatabaseMasterUserPasswordResultFilterSensitiveLog = (
  obj: GetRelationalDatabaseMasterUserPasswordResult
): any => ({
  ...obj,
  ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetupInstanceHttpsRequestFilterSensitiveLog = (obj: SetupInstanceHttpsRequest): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateRelationalDatabaseRequestFilterSensitiveLog = (obj: UpdateRelationalDatabaseRequest): any => ({
  ...obj,
  ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
});
