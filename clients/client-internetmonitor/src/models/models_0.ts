// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { InternetMonitorServiceException as __BaseException } from "./InternetMonitorServiceException";

/**
 * <p>You don't have sufficient permission to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>Amazon CloudWatch Internet Monitor calculates measurements about the availability for your application's internet traffic between client locations and Amazon Web Services.
 * 			Amazon Web Services has substantial historical data about internet
 * 			performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor
 * 			can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it
 * 			easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p>
 *          <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99%
 * 			for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
 * 				scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>Amazon CloudWatch User Guide</i>.</p>
 * @public
 */
export interface AvailabilityMeasurement {
  /**
   * <p>Experience scores, or health scores are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also summed into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the <i>CloudWatch User Guide</i> includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  ExperienceScore?: number | undefined;

  /**
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   *          <p>For information about how Internet Monitor calculates impact, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html">How Internet Monitor works</a> in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User
   * 			Guide.</p>
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * <p>The percentage of impact caused by a health event for client location traffic globally.</p>
   *          <p>For information about how Internet Monitor calculates impact, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html">Inside Internet Monitor</a> in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User
   * 			Guide.</p>
   * @public
   */
  PercentOfClientLocationImpacted?: number | undefined;
}

/**
 * <p>A bad request was received.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>The impacted location, such as a city, that Amazon Web Services clients access application resources from.</p>
 * @public
 */
export interface ClientLocation {
  /**
   * <p>The name of the internet service provider (ISP) or network (ASN).</p>
   * @public
   */
  ASName: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) of the network at an impacted location.</p>
   * @public
   */
  ASNumber: number | undefined;

  /**
   * <p>The name of the country where the internet event is located.</p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The subdivision location where the health event is located. The subdivision usually maps to states in most countries
   * 			(including the United States). For United Kingdom, it maps to a country (England, Scotland, Wales) or province (Northern Ireland).</p>
   * @public
   */
  Subdivision?: string | undefined;

  /**
   * <p>The metro area where the health event is located.</p>
   *          <p>Metro indicates a metropolitan region in the United States, such as the region around New York City. In non-US countries,
   * 			this is a second-level subdivision. For example, in the United Kingdom, it could be a county, a London borough, a unitary
   * 			authority, council area, and so on.</p>
   * @public
   */
  Metro?: string | undefined;

  /**
   * <p>The name of the city where the internet event is located.</p>
   * @public
   */
  City: string | undefined;

  /**
   * <p>The latitude where the internet event is located.</p>
   * @public
   */
  Latitude: number | undefined;

  /**
   * <p>The longitude where the internet event is located.</p>
   * @public
   */
  Longitude: number | undefined;
}

/**
 * <p>The requested resource is in use.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const LocalHealthEventsConfigStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type LocalHealthEventsConfigStatus =
  (typeof LocalHealthEventsConfigStatus)[keyof typeof LocalHealthEventsConfigStatus];

/**
 * <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event
 * 			for a local performance or availability issue, when scores cross a threshold for one or more city-networks.</p>
 *          <p>Defines the percentages, for performance scores or availability scores, that are the local thresholds
 * 			for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage
 * 			of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a	threshold is crossed for a local health score.</p>
 *          <p>If you don't set a local health event threshold, the default value is 60%.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
 * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
 * @public
 */
export interface LocalHealthEventsConfig {
  /**
   * <p>The status of whether Internet Monitor creates a health event based on a threshold percentage set for a local health score. The status can be <code>ENABLED</code>
   * 		or <code>DISABLED</code>.</p>
   * @public
   */
  Status?: LocalHealthEventsConfigStatus | undefined;

  /**
   * <p>The health event threshold percentage set for a local health score.</p>
   * @public
   */
  HealthScoreThreshold?: number | undefined;

  /**
   * <p>The minimum percentage of overall traffic for an application that must be impacted by an issue before Internet Monitor creates an event when a
   * 			threshold is crossed for a local health score.</p>
   *          <p>If you don't set a minimum traffic impact threshold, the default value is 0.1%.</p>
   * @public
   */
  MinTrafficImpact?: number | undefined;
}

/**
 * <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event
 * 			for an overall performance or availability issue, across an application's geographies.</p>
 *          <p>Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds
 * 			for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores,
 * 			or both.</p>
 *          <p>You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks,
 * 			in addition to creating an event when an overall score crosses a threshold.</p>
 *          <p>If you don't set a health event threshold, the default value is 95%.</p>
 *          <p>For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event.
 * 			In addition, you can disable local thresholds, for performance scores, availability scores, or both.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
 * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
 * @public
 */
export interface HealthEventsConfig {
  /**
   * <p>The health event threshold percentage set for availability scores.</p>
   * @public
   */
  AvailabilityScoreThreshold?: number | undefined;

  /**
   * <p>The health event threshold percentage set for performance scores.</p>
   * @public
   */
  PerformanceScoreThreshold?: number | undefined;

  /**
   * <p>The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local availability issue.</p>
   * @public
   */
  AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig | undefined;

  /**
   * <p>The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance issue.</p>
   * @public
   */
  PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const LogDeliveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type LogDeliveryStatus = (typeof LogDeliveryStatus)[keyof typeof LogDeliveryStatus];

/**
 * <p>The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix
 * 			for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on
 * 			whether you choose to deliver internet measurements to S3 logs.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix.</p>
   * @public
   */
  BucketPrefix?: string | undefined;

  /**
   * <p>The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.</p>
   * @public
   */
  LogDeliveryStatus?: LogDeliveryStatus | undefined;
}

/**
 * <p>Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
 * @public
 */
export interface InternetMeasurementsLogDelivery {
  /**
   * <p>The configuration information for publishing Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix
   * 			for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on
   * 			whether you choose to deliver internet measurements to S3 logs.</p>
   * @public
   */
  S3Config?: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs,
   * 			Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p>
   *          <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add
   * 			NLBs or WorkSpaces directories together with any other resources.</p>
   *          <note>
   *             <p>If you add only Amazon VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has
   * 			internet connectivity.</p>
   *          </note>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for
   * 			other API requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. Setting this limit can help control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * <p>Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * <p>Defines the threshold percentages and other configuration information for when Amazon CloudWatch Internet Monitor creates a health event. Internet Monitor creates a
   * 			health event when an internet issue that affects your application end users has a health score percentage that is at or below a
   * 			specific threshold, and, sometimes, when other criteria are met.</p>
   *          <p>If you don't set a health event threshold, the default value is 95%.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitorConfigState = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type MonitorConfigState = (typeof MonitorConfigState)[keyof typeof MonitorConfigState];

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   * @public
   */
  Status: MonitorConfigState | undefined;
}

/**
 * <p>An internal error occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request exceeded a service quota.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Invalid request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * <p>The name of the monitor to delete.</p>
   * @public
   */
  MonitorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorOutput {}

/**
 * @public
 * @enum
 */
export const Operator = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>A filter that you use with the results of a Amazon CloudWatch Internet Monitor query that you created and ran. The query sets up a
 * 			repository of data that is a subset of your application's Internet Monitor data. <code>FilterParameter</code> is a string
 * 			that defines how you want to filter the repository of data to return a set of results, based on your criteria.</p>
 *          <p>The filter parameters that you can specify depend on the query type that you used to create the repository, since
 * 			each query type returns a different set of Internet Monitor data.</p>
 *          <p>For each filter, you specify a field (such as <code>city</code>), an operator (such as <code>not_equals</code>,
 * 			and a value or array of values (such as <code>["Seattle", "Redmond"]</code>). Separate values in the array with
 * 			commas.</p>
 *          <p>For more information about specifying filter parameters, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">Using the Amazon CloudWatch Internet Monitor query interface</a>
 * 			in the Amazon CloudWatch Internet Monitor User Guide.</p>
 * @public
 */
export interface FilterParameter {
  /**
   * <p>A data field that you want to filter, to further scope your application's Internet Monitor data in a repository that you
   * 			created by running a query. A field might be <code>city</code>, for example. The field must be one of the fields
   * 			that was returned by the specific query that you used to create the repository.</p>
   * @public
   */
  Field?: string | undefined;

  /**
   * <p>The operator to use with the filter field and a value, such as <code>not_equals</code>.</p>
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * <p>One or more values to be used, together with the specified operator, to filter data for a query.
   * 			For example, you could specify an array of values such as <code>["Seattle", "Redmond"]</code>. Values in the array are separated by
   * 			commas.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetHealthEventInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The internally-generated identifier of a health event. Because <code>EventID</code> contains the forward slash (“/”) character, you must
   * 			URL-encode the <code>EventID</code> field in the request URL.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account
   * 			sharing by using Amazon CloudWatch Observability Access Manager. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html">Internet Monitor cross-account
   * 			observability</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * <p>An internet service provider (ISP) or network (ASN) in Amazon CloudWatch Internet Monitor.</p>
 * @public
 */
export interface Network {
  /**
   * <p>The name of the internet service provider (ISP) or network (ASN).</p>
   * @public
   */
  ASName: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) of the internet provider or network.</p>
   * @public
   */
  ASNumber: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TriangulationEventType = {
  AWS: "AWS",
  INTERNET: "Internet",
} as const;

/**
 * @public
 */
export type TriangulationEventType = (typeof TriangulationEventType)[keyof typeof TriangulationEventType];

/**
 * <p>Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor.</p>
 * @public
 */
export interface NetworkImpairment {
  /**
   * <p>The networks that could be impacted by a network impairment event.</p>
   * @public
   */
  Networks: Network[] | undefined;

  /**
   * <p>The combination of the Autonomous System Number (ASN) of the network and the name of the network.</p>
   * @public
   */
  AsPath: Network[] | undefined;

  /**
   * <p>The type of network impairment.</p>
   * @public
   */
  NetworkEventType: TriangulationEventType | undefined;
}

/**
 * <p>Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different
 * 			percentiles: p50, p90, and p95.</p>
 * @public
 */
export interface RoundTripTime {
  /**
   * <p>RTT at the 50th percentile (p50).</p>
   * @public
   */
  P50?: number | undefined;

  /**
   * <p>RTT at the 90th percentile (p90). </p>
   * @public
   */
  P90?: number | undefined;

  /**
   * <p>RTT at the 95th percentile (p95). </p>
   * @public
   */
  P95?: number | undefined;
}

/**
 * <p>Amazon CloudWatch Internet Monitor calculates measurements about the performance for your application's internet traffic between client locations and Amazon Web Services.
 * 			Amazon Web Services has substantial historical data about internet
 * 			performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor
 * 			can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it
 * 			easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p>
 *          <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for
 * 			an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
 * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
 * @public
 */
export interface PerformanceMeasurement {
  /**
   * <p>Experience scores, or health scores, are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also totaled into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  ExperienceScore?: number | undefined;

  /**
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * <p>How much performance impact was caused by a health event at a client location. For performance, this is the percentage of how much latency increased
   * 			during the event compared to typical performance for traffic, from this client location to an Amazon Web Services location, using a specific client network. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  PercentOfClientLocationImpacted?: number | undefined;

  /**
   * <p>This is the percentage of how much round-trip time increased during the event compared to typical round-trip time for your application for traffic. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  RoundTripTime?: RoundTripTime | undefined;
}

/**
 * <p>Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has
 * 			substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By
 * 			applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an
 * 			estimated baseline that's already calculated. To make it easier to see those drops, Internet Monitor reports the information to you in the form of health scores: a
 * 			performance score and an availability score.</p>
 * @public
 */
export interface InternetHealth {
  /**
   * <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99%
   * 			for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
   * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  Availability?: AvailabilityMeasurement | undefined;

  /**
   * <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for
   * 			an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
   * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  Performance?: PerformanceMeasurement | undefined;
}

/**
 * @public
 * @enum
 */
export const HealthEventStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type HealthEventStatus = (typeof HealthEventStatus)[keyof typeof HealthEventStatus];

/**
 * <p>Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.</p>
 *          <p>Geographic regions are hierarchically categorized into country, subdivision,
 *    		metro and city geographic granularities. The geographic region is identified based
 *    		on the IP address used at the client locations.</p>
 * @public
 */
export interface ImpactedLocation {
  /**
   * <p>The name of the internet service provider (ISP) or network (ASN).</p>
   * @public
   */
  ASName: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) of the network at an impacted location.</p>
   * @public
   */
  ASNumber: number | undefined;

  /**
   * <p>The name of the country where the health event is located.</p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The subdivision location where the health event is located. The subdivision usually maps to
   * 				states in most countries (including the United States). For United Kingdom, it maps to a country (England,
   * 				Scotland, Wales) or province (Northern Ireland).</p>
   * @public
   */
  Subdivision?: string | undefined;

  /**
   * <p>The metro area where the health event is located.</p>
   *          <p>Metro indicates a metropolitan region in the United States, such as the region around New York City.
   *    		In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be
   *    		a county, a London borough, a unitary authority, council area, and so on.</p>
   * @public
   */
  Metro?: string | undefined;

  /**
   * <p>The name of the city where the health event is located.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The latitude where the health event is located.</p>
   * @public
   */
  Latitude?: number | undefined;

  /**
   * <p>The longitude where the health event is located.</p>
   * @public
   */
  Longitude?: number | undefined;

  /**
   * <p>The country code where the health event is located. The ISO 3166-2 codes for the
   *    		country is provided, when available. </p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The subdivision code where the health event is located. The ISO 3166-2 codes for
   * 			country subdivisions is provided, when available. </p>
   * @public
   */
  SubdivisionCode?: string | undefined;

  /**
   * <p>The service location where the health event is located.</p>
   * @public
   */
  ServiceLocation?: string | undefined;

  /**
   * <p>The status of the health event at an impacted location.</p>
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * <p>The cause of the impairment. There are two types of network impairments: Amazon Web Services network issues
   *       	or internet issues. Internet issues are typically a problem with a network provider, like an internet service provider (ISP).</p>
   * @public
   */
  CausedBy?: NetworkImpairment | undefined;

  /**
   * <p>The calculated health at a specific location.</p>
   * @public
   */
  InternetHealth?: InternetHealth | undefined;

  /**
   * <p>The IPv4 prefixes at the client location that was impacted by the health event.</p>
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const HealthEventImpactType = {
  AVAILABILITY: "AVAILABILITY",
  LOCAL_AVAILABILITY: "LOCAL_AVAILABILITY",
  LOCAL_PERFORMANCE: "LOCAL_PERFORMANCE",
  PERFORMANCE: "PERFORMANCE",
} as const;

/**
 * @public
 */
export type HealthEventImpactType = (typeof HealthEventImpactType)[keyof typeof HealthEventImpactType];

/**
 * @public
 */
export interface GetHealthEventOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the event.</p>
   * @public
   */
  EventArn: string | undefined;

  /**
   * <p>The internally-generated identifier of a health event.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The time when a health event started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when a health event was resolved. If the health event is still active, the end time is not set.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The time when a health event was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time when a health event was last updated or recalculated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The locations affected by a health event.</p>
   * @public
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * <p>The status of a health event.</p>
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * <p>The type of impairment of a specific health event.</p>
   * @public
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * <p>The threshold percentage for a health score that determines, along with other configuration information,
   * 			when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   * @public
   */
  HealthScoreThreshold?: number | undefined;
}

/**
 * @public
 */
export interface GetInternetEventInput {
  /**
   * <p>The <code>EventId</code> of the internet event to return information for. </p>
   * @public
   */
  EventId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InternetEventStatus = {
  ACTIVE: "ACTIVE",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type InternetEventStatus = (typeof InternetEventStatus)[keyof typeof InternetEventStatus];

/**
 * @public
 * @enum
 */
export const InternetEventType = {
  AVAILABILITY: "AVAILABILITY",
  PERFORMANCE: "PERFORMANCE",
} as const;

/**
 * @public
 */
export type InternetEventType = (typeof InternetEventType)[keyof typeof InternetEventType];

/**
 * @public
 */
export interface GetInternetEventOutput {
  /**
   * <p>The internally-generated identifier of an internet event.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the internet event.</p>
   * @public
   */
  EventArn: string | undefined;

  /**
   * <p>The time when the internet event started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when the internet event ended. If the event hasn't ended yet, this value is empty.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The impacted location, such as a city, where clients access Amazon Web Services application resources.</p>
   * @public
   */
  ClientLocation: ClientLocation | undefined;

  /**
   * <p>The type of network impairment.</p>
   * @public
   */
  EventType: InternetEventType | undefined;

  /**
   * <p>The status of the internet event.</p>
   * @public
   */
  EventStatus: InternetEventStatus | undefined;
}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account
   * 			sharing by using Amazon CloudWatch Observability Access Manager. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html">Internet Monitor cross-account
   * 				observability</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitorProcessingStatusCode = {
  COLLECTING_DATA: "COLLECTING_DATA",
  FAULT_ACCESS_CLOUDWATCH: "FAULT_ACCESS_CLOUDWATCH",
  FAULT_SERVICE: "FAULT_SERVICE",
  INACTIVE: "INACTIVE",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;

/**
 * @public
 */
export type MonitorProcessingStatusCode =
  (typeof MonitorProcessingStatusCode)[keyof typeof MonitorProcessingStatusCode];

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>The resources monitored by the monitor. Resources are listed by their Amazon Resource Names (ARNs).</p>
   * @public
   */
  Resources: string[] | undefined;

  /**
   * <p>The status of the monitor.</p>
   * @public
   */
  Status: MonitorConfigState | undefined;

  /**
   * <p>The time when the monitor was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The last time that the monitor was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The health of the data processing for the monitor.</p>
   * @public
   */
  ProcessingStatus?: MonitorProcessingStatusCode | undefined;

  /**
   * <p>Additional information about the health of the data processing for the monitor.</p>
   * @public
   */
  ProcessingStatusInfo?: string | undefined;

  /**
   * <p>The tags that have been added to monitor.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. This limit can help control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * <p>The percentage of the internet-facing traffic for your application to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * <p>The list of health event threshold configurations. The threshold percentage for a health score determines, along with other configuration
   * 			information, when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * <p>The name of the monitor to return data for.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The ID of the query that you want to return data results for. A <code>QueryId</code> is an
   * 			internally-generated identifier for a specific query.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Defines a field to query for your application's Amazon CloudWatch Internet Monitor data. You create a data repository by running a query of a specific
 * 			type. Each <code>QueryType</code> includes a specific set of fields and datatypes to retrieve data for. </p>
 * @public
 */
export interface QueryField {
  /**
   * <p>The name of a field to query your application's Amazon CloudWatch Internet Monitor data for, such as <code>availability_score</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The data type for a query field, which must correspond to the field you're defining for <code>QueryField</code>. For example, if the query
   * 			field name is <code>availability_score</code>, the data type is <code>float</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * <p>The fields that the query returns data for. Fields are name-data type pairs, such as
   * 			<code>availability_score</code>-<code>float</code>.</p>
   * @public
   */
  Fields: QueryField[] | undefined;

  /**
   * <p>The data results that the query returns. Data is returned in arrays, aligned with the <code>Fields</code>
   * 		for the query, which creates a repository of Amazon CloudWatch Internet Monitor information for your application. Then, you can filter
   * 		the information in the repository by using <code>FilterParameters</code> that you define.</p>
   * @public
   */
  Data: string[][] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The ID of the query that you want to return the status for. A <code>QueryId</code> is an internally-generated
   * 			dentifier for a specific query.</p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 */
export interface GetQueryStatusOutput {
  /**
   * <p>The current status for a query.</p>
   * @public
   */
  Status: QueryStatus | undefined;
}

/**
 * <p>Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor.</p>
 * @public
 */
export interface HealthEvent {
  /**
   * <p>The Amazon Resource Name (ARN) of the event.</p>
   * @public
   */
  EventArn: string | undefined;

  /**
   * <p>The internally-generated identifier of a specific network traffic impairment health event.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>When a health event started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when a health event ended. If the health event is still active, then the end time is not set.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>When the health event was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>When the health event was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The locations impacted by the health event.</p>
   * @public
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * <p>The status of a health event.</p>
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * <p>The type of impairment for a health event.</p>
   * @public
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * <p>The value of the threshold percentage for performance or availability that was configured when Amazon CloudWatch Internet Monitor created the health event.</p>
   * @public
   */
  HealthScoreThreshold?: number | undefined;
}

/**
 * @public
 */
export interface ListHealthEventsInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The time when a health event started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when a health event ended. If the health event is still ongoing, then the end time is not set.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of health event objects that you want to return with this call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of a health event.</p>
   * @public
   */
  EventStatus?: HealthEventStatus | undefined;

  /**
   * <p>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account
   * 			sharing by using Amazon CloudWatch Observability Access Manager. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html">Internet Monitor cross-account
   * 				observability</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListHealthEventsOutput {
  /**
   * <p>A list of health events.</p>
   * @public
   */
  HealthEvents: HealthEvent[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>There was an internal server error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * @public
 */
export interface ListInternetEventsInput {
  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The start time of the time window that you want to get a list of internet events for.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the time window that you want to get a list of internet events for.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The status of an internet event.</p>
   * @public
   */
  EventStatus?: string | undefined;

  /**
   * <p>The type of network impairment.</p>
   * @public
   */
  EventType?: string | undefined;
}

/**
 * <p>A summary of information about an internet event in Amazon CloudWatch Internet Monitor. Internet events are issues that cause performance degradation
 * 			or availability problems for impacted Amazon Web Services client locations. Internet Monitor displays information about
 * 			recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services
 * 			customers. </p>
 * @public
 */
export interface InternetEventSummary {
  /**
   * <p>The internally-generated identifier of an internet event.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the internet event.</p>
   * @public
   */
  EventArn: string | undefined;

  /**
   * <p>The time when an internet event started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when an internet event ended. If the event hasn't ended yet, this value
   * 		is empty.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The impacted location, such as a city, that Amazon Web Services clients access application resources from.</p>
   * @public
   */
  ClientLocation: ClientLocation | undefined;

  /**
   * <p>The type of network impairment.</p>
   * @public
   */
  EventType: InternetEventType | undefined;

  /**
   * <p>The status of an internet event.</p>
   * @public
   */
  EventStatus: InternetEventStatus | undefined;
}

/**
 * @public
 */
export interface ListInternetEventsOutput {
  /**
   * <p>A set of internet events returned for the list operation.</p>
   * @public
   */
  InternetEvents: InternetEventSummary[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>Tags for a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The request specifies something that doesn't exist.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>There were too many requests.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of monitor objects that you want to return with this call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself.</p>
   *          <p>For information about the statuses for a monitor, see <a href="https://docs.aws.amazon.com/internet-monitor/latest/api/API_Monitor.html">
   * 				Monitor</a>.</p>
   * @public
   */
  MonitorStatus?: string | undefined;

  /**
   * <p>A boolean option that you can set to <code>TRUE</code> to include monitors for linked accounts in a list of
   * 			monitors, when you've set up cross-account sharing in Amazon CloudWatch Internet Monitor. You configure cross-account
   * 			sharing by using Amazon CloudWatch Observability Access Manager. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html">Internet Monitor cross-account
   * 				observability</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;
}

/**
 * <p>The description of and information about a monitor in Amazon CloudWatch Internet Monitor. </p>
 * @public
 */
export interface Monitor {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   * @public
   */
  Status: MonitorConfigState | undefined;

  /**
   * <p>The health of data processing for the monitor.</p>
   * @public
   */
  ProcessingStatus?: MonitorProcessingStatusCode | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * <p>A list of monitors.</p>
   * @public
   */
  Monitors: Monitor[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryType = {
  MEASUREMENTS: "MEASUREMENTS",
  OVERALL_TRAFFIC_SUGGESTIONS: "OVERALL_TRAFFIC_SUGGESTIONS",
  OVERALL_TRAFFIC_SUGGESTIONS_DETAILS: "OVERALL_TRAFFIC_SUGGESTIONS_DETAILS",
  TOP_LOCATIONS: "TOP_LOCATIONS",
  TOP_LOCATION_DETAILS: "TOP_LOCATION_DETAILS",
} as const;

/**
 * @public
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];

/**
 * @public
 */
export interface StartQueryInput {
  /**
   * <p>The name of the monitor to query.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The timestamp that is the beginning of the period that you want to retrieve data for with your query.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp that is the end of the period that you want to retrieve data for with your query.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The type of query to run. The following are the three types of queries that you can run using the Internet Monitor query interface:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MEASUREMENTS</code>: Provides availability score, performance score, total traffic,
   * 				and round-trip times, at 5 minute intervals.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LOCATIONS</code>: Provides availability score, performance score, total traffic,
   * 				and time to first byte (TTFB) information, for the top location and ASN combinations that you're monitoring, by traffic volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LOCATION_DETAILS</code>: Provides TTFB for Amazon CloudFront, your
   * 				current configuration, and the best performing EC2 configuration, at 1 hour intervals.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERALL_TRAFFIC_SUGGESTIONS</code>: Provides TTFB, using a 30-day weighted average, for all traffic in
   * 				each Amazon Web Services location that is monitored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERALL_TRAFFIC_SUGGESTIONS_DETAILS</code>: Provides TTFB, using a 30-day weighted average, for each top
   * 				location, for a proposed Amazon Web Services location. Must provide a Amazon Web Services location to search.</p>
   *             </li>
   *          </ul>
   *          <p>For lists of the fields returned with each query type and more information about how each type of query is
   * 			performed, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">
   * 				Using the Amazon CloudWatch Internet Monitor query interface</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  QueryType: QueryType | undefined;

  /**
   * <p>The <code>FilterParameters</code> field that you use with Amazon CloudWatch Internet Monitor queries is a string the defines
   * 			how you want a query to be filtered. The filter parameters that you can specify depend on the query type, since
   * 			each query type returns a different set of Internet Monitor data.</p>
   *          <p>For more information about specifying filter parameters, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">Using the Amazon CloudWatch Internet Monitor query interface</a>
   * 			in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  FilterParameters?: FilterParameter[] | undefined;

  /**
   * <p>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account
   * 			sharing by using Amazon CloudWatch Observability Access Manager. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html">Internet Monitor cross-account
   * 				observability</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryOutput {
  /**
   * <p>The internally-generated identifier of a specific query.</p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The ID of the query that you want to stop. A <code>QueryId</code> is an internally-generated identifier for a specific query.</p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryOutput {}

/**
 * <p>The request specifies a resource that doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs,
   * 			Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p>
   *          <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add
   * 			NLBs or WorkSpaces directories together with any other resources.</p>
   *          <note>
   *             <p>If you add only Amazon Virtual Private Clouds resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet
   * 			connectivity.</p>
   *          </note>
   * @public
   */
  ResourcesToAdd?: string[] | undefined;

  /**
   * <p>The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p>
   * @public
   */
  ResourcesToRemove?: string[] | undefined;

  /**
   * <p>The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and
   * 			<code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>.</p>
   * @public
   */
  Status?: MonitorConfigState | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client
   * 			token for other API requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. Setting this limit can help control billing costs.</p>
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * <p>The list of health score thresholds. A threshold percentage for health scores, along with other configuration information,
   * 			determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   * @public
   */
  Status: MonitorConfigState | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for a tag you remove a resource from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys that you remove from a resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
