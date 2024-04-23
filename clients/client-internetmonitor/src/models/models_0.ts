// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { InternetMonitorServiceException as __BaseException } from "./InternetMonitorServiceException";

/**
 * @public
 * <p>You don't have sufficient permission to perform this action.</p>
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
 * @public
 * <p>Amazon CloudWatch Internet Monitor calculates measurements about the availability for your application's internet traffic between client locations and Amazon Web Services.
 * 			Amazon Web Services has substantial historical data about internet
 * 			performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor
 * 			can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it
 * 			easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p>
 *          <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99%
 * 			for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
 * 				scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export interface AvailabilityMeasurement {
  /**
   * @public
   * <p>Experience scores, or health scores are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also summed into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the <i>CloudWatch User Guide</i> includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  ExperienceScore?: number;

  /**
   * @public
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   *          <p>For information about how Internet Monitor calculates impact, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html">How Internet Monitor works</a> in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User
   * 			Guide.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * @public
   * <p>The percentage of impact caused by a health event for client location traffic globally.</p>
   *          <p>For information about how Internet Monitor calculates impact, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html">Inside Internet Monitor</a> in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User
   * 			Guide.</p>
   */
  PercentOfClientLocationImpacted?: number;
}

/**
 * @public
 * <p>A bad request was received.</p>
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
 * @public
 * <p>The requested resource is in use.</p>
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
 * @public
 * <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event
 * 			for a local performance or availability issue, when scores cross a threshold for one or more city-networks.</p>
 *          <p>Defines the percentages, for performance scores or availability scores, that are the local thresholds
 * 			for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage
 * 			of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a	threshold is crossed for a local health score.</p>
 *          <p>If you don't set a local health event threshold, the default value is 60%.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
 * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
 */
export interface LocalHealthEventsConfig {
  /**
   * @public
   * <p>The status of whether Internet Monitor creates a health event based on a threshold percentage set for a local health score. The status can be <code>ENABLED</code>
   * 		or <code>DISABLED</code>.</p>
   */
  Status?: LocalHealthEventsConfigStatus;

  /**
   * @public
   * <p>The health event threshold percentage set for a local health score.</p>
   */
  HealthScoreThreshold?: number;

  /**
   * @public
   * <p>The minimum percentage of overall traffic for an application that must be impacted by an issue before Internet Monitor creates an event when a
   * 			threshold is crossed for a local health score.</p>
   *          <p>If you don't set a minimum traffic impact threshold, the default value is 0.01%.</p>
   */
  MinTrafficImpact?: number;
}

/**
 * @public
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
 */
export interface HealthEventsConfig {
  /**
   * @public
   * <p>The health event threshold percentage set for availability scores.</p>
   */
  AvailabilityScoreThreshold?: number;

  /**
   * @public
   * <p>The health event threshold percentage set for performance scores.</p>
   */
  PerformanceScoreThreshold?: number;

  /**
   * @public
   * <p>The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local availability issue.</p>
   */
  AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;

  /**
   * @public
   * <p>The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance issue.</p>
   */
  PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
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
 * @public
 * <p>The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix
 * 			for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on
 * 			whether you choose to deliver internet measurements to S3 logs.</p>
 */
export interface S3Config {
  /**
   * @public
   * <p>The Amazon S3 bucket name.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket prefix.</p>
   */
  BucketPrefix?: string;

  /**
   * @public
   * <p>The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.</p>
   */
  LogDeliveryStatus?: LogDeliveryStatus;
}

/**
 * @public
 * <p>Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
 */
export interface InternetMeasurementsLogDelivery {
  /**
   * @public
   * <p>The configuration information for publishing Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix
   * 			for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on
   * 			whether you choose to deliver internet measurements to S3 logs.</p>
   */
  S3Config?: S3Config;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * @public
   * <p>The name of the monitor. </p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs,
   * 			Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p>
   *          <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add
   * 			NLBs or WorkSpaces directories together with any other resources.</p>
   *          <note>
   *             <p>If you add only Amazon VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has
   * 			internet connectivity.</p>
   *          </note>
   */
  Resources?: string[];

  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for
   * 			other API requests.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. Setting this limit can help control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * @public
   * <p>Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * @public
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * @public
   * <p>Defines the threshold percentages and other configuration information for when Amazon CloudWatch Internet Monitor creates a health event. Internet Monitor creates a
   * 			health event when an internet issue that affects your application end users has a health score percentage that is at or below a
   * 			specific threshold, and, sometimes, when other criteria are met.</p>
   *          <p>If you don't set a health event threshold, the default value is 95%.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  HealthEventsConfig?: HealthEventsConfig;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | undefined;
}

/**
 * @public
 * <p>An internal error occurred.</p>
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
 * @public
 * <p>The request exceeded a service quota.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>Invalid request.</p>
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
   * @public
   * <p>The name of the monitor to delete.</p>
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
 * @public
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
 */
export interface FilterParameter {
  /**
   * @public
   * <p>A data field that you want to filter, to further scope your application's Internet Monitor data in a repository that you
   * 			created by running a query. A field might be <code>city</code>, for example. The field must be one of the fields
   * 			that was returned by the specific query that you used to create the repository.</p>
   */
  Field?: string;

  /**
   * @public
   * <p>The operator to use with the filter field and a value, such as <code>not_equals</code>.</p>
   */
  Operator?: Operator;

  /**
   * @public
   * <p>One or more values to be used, together with the specified operator, to filter data for a query.
   * 			For example, you could specify an array of values such as <code>["Seattle", "Redmond"]</code>. Values in the array are separated by
   * 			commas.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface GetHealthEventInput {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The internally-generated identifier of a health event. Because <code>EventID</code> contains the forward slash (“/”) character, you must
   * 			URL-encode the <code>EventID</code> field in the request URL.</p>
   */
  EventId: string | undefined;
}

/**
 * @public
 * <p>An internet service provider (ISP) or network in Amazon CloudWatch Internet Monitor.</p>
 */
export interface Network {
  /**
   * @public
   * <p>The internet provider name or network name.</p>
   */
  ASName: string | undefined;

  /**
   * @public
   * <p>The Autonomous System Number (ASN) of the internet provider or network.</p>
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
 * @public
 * <p>Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor.</p>
 */
export interface NetworkImpairment {
  /**
   * @public
   * <p>The networks that could be impacted by a network impairment event.</p>
   */
  Networks: Network[] | undefined;

  /**
   * @public
   * <p>The combination of the Autonomous System Number (ASN) of the network and the name of the network.</p>
   */
  AsPath: Network[] | undefined;

  /**
   * @public
   * <p>Type of network impairment.</p>
   */
  NetworkEventType: TriangulationEventType | undefined;
}

/**
 * @public
 * <p>Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different
 * 			percentiles: p50, p90, and p95.</p>
 */
export interface RoundTripTime {
  /**
   * @public
   * <p>RTT at the 50th percentile (p50).</p>
   */
  P50?: number;

  /**
   * @public
   * <p>RTT at the 90th percentile (p90). </p>
   */
  P90?: number;

  /**
   * @public
   * <p>RTT at the 95th percentile (p95). </p>
   */
  P95?: number;
}

/**
 * @public
 * <p>Amazon CloudWatch Internet Monitor calculates measurements about the performance for your application's internet traffic between client locations and Amazon Web Services.
 * 			Amazon Web Services has substantial historical data about internet
 * 			performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor
 * 			can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it
 * 			easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p>
 *          <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for
 * 			an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
 * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
 */
export interface PerformanceMeasurement {
  /**
   * @public
   * <p>Experience scores, or health scores, are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also totaled into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  ExperienceScore?: number;

  /**
   * @public
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * @public
   * <p>How much performance impact was caused by a health event at a client location. For performance, this is the percentage of how much latency increased
   * 			during the event compared to typical performance for traffic, from this client location to an Amazon Web Services location, using a specific client network. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  PercentOfClientLocationImpacted?: number;

  /**
   * @public
   * <p>This is the percentage of how much round-trip time increased during the event compared to typical round-trip time for your application for traffic. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  RoundTripTime?: RoundTripTime;
}

/**
 * @public
 * <p>Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has
 * 			substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By
 * 			applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an
 * 			estimated baseline that's already calculated. To make it easier to see those drops, Internet Monitor reports the information to you in the form of health scores: a
 * 			performance score and an availability score.</p>
 */
export interface InternetHealth {
  /**
   * @public
   * <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99%
   * 			for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
   * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  Availability?: AvailabilityMeasurement;

  /**
   * @public
   * <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for
   * 			an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
   * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  Performance?: PerformanceMeasurement;
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
 * @public
 * <p>Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.</p>
 *          <p>Geographic regions are hierarchically categorized into country, subdivision,
 *    		metro and city geographic granularities. The geographic region is identified based
 *    		on the IP address used at the client locations.</p>
 */
export interface ImpactedLocation {
  /**
   * @public
   * <p>The name of the network at an impacted location.</p>
   */
  ASName: string | undefined;

  /**
   * @public
   * <p>The Autonomous System Number (ASN) of the network at an impacted location.</p>
   */
  ASNumber: number | undefined;

  /**
   * @public
   * <p>The name of the country where the health event is located.</p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The subdivision location where the health event is located. The subdivision usually maps to
   * 				states in most countries (including the United States). For United Kingdom, it maps to a country (England,
   * 				Scotland, Wales) or province (Northern Ireland).</p>
   */
  Subdivision?: string;

  /**
   * @public
   * <p>The metro area where the health event is located.</p>
   *          <p>Metro indicates a metropolitan region in the United States, such as the region around New York City.
   *    		In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be
   *    		a county, a London borough, a unitary authority, council area, and so on.</p>
   */
  Metro?: string;

  /**
   * @public
   * <p>The name of the city where the health event is located.</p>
   */
  City?: string;

  /**
   * @public
   * <p>The latitude where the health event is located.</p>
   */
  Latitude?: number;

  /**
   * @public
   * <p>The longitude where the health event is located.</p>
   */
  Longitude?: number;

  /**
   * @public
   * <p>The country code where the health event is located. The ISO 3166-2 codes for the
   *    		country is provided, when available. </p>
   */
  CountryCode?: string;

  /**
   * @public
   * <p>The subdivision code where the health event is located. The ISO 3166-2 codes for
   * 			country subdivisions is provided, when available. </p>
   */
  SubdivisionCode?: string;

  /**
   * @public
   * <p>The service location where the health event is located.</p>
   */
  ServiceLocation?: string;

  /**
   * @public
   * <p>The status of the health event at an impacted location.</p>
   */
  Status: HealthEventStatus | undefined;

  /**
   * @public
   * <p>The cause of the impairment. There are two types of network impairments: Amazon Web Services network issues
   *       	or internet issues. Internet issues are typically a problem with a network provider, like an internet service provider (ISP).</p>
   */
  CausedBy?: NetworkImpairment;

  /**
   * @public
   * <p>The calculated health at a specific location.</p>
   */
  InternetHealth?: InternetHealth;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the event.</p>
   */
  EventArn: string | undefined;

  /**
   * @public
   * <p>The internally-generated identifier of a health event.</p>
   */
  EventId: string | undefined;

  /**
   * @public
   * <p>The time when a health event started.</p>
   */
  StartedAt: Date | undefined;

  /**
   * @public
   * <p>The time when a health event was resolved. If the health event is still active, the end time is not set.</p>
   */
  EndedAt?: Date;

  /**
   * @public
   * <p>The time when a health event was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when a health event was last updated or recalculated.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The locations affected by a health event.</p>
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * @public
   * <p>The status of a health event.</p>
   */
  Status: HealthEventStatus | undefined;

  /**
   * @public
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * @public
   * <p>The type of impairment of a specific health event.</p>
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * @public
   * <p>The threshold percentage for a health score that determines, along with other configuration information,
   * 			when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   */
  HealthScoreThreshold?: number;
}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;
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
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
   * <p>The resources monitored by the monitor. Resources are listed by their Amazon Resource Names (ARNs).</p>
   */
  Resources: string[] | undefined;

  /**
   * @public
   * <p>The status of the monitor.</p>
   */
  Status: MonitorConfigState | undefined;

  /**
   * @public
   * <p>The time when the monitor was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The last time that the monitor was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * @public
   * <p>The health of the data processing for the monitor.</p>
   */
  ProcessingStatus?: MonitorProcessingStatusCode;

  /**
   * @public
   * <p>Additional information about the health of the data processing for the monitor.</p>
   */
  ProcessingStatusInfo?: string;

  /**
   * @public
   * <p>The tags that have been added to monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. This limit can help control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * @public
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * @public
   * <p>The percentage of the internet-facing traffic for your application to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * @public
   * <p>The list of health event threshold configurations. The threshold percentage for a health score determines, along with other configuration
   * 			information, when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  HealthEventsConfig?: HealthEventsConfig;
}

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * @public
   * <p>The name of the monitor to return data for.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The ID of the query that you want to return data results for. A <code>QueryId</code> is an
   * 			internally-generated identifier for a specific query.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of query results that you want to return with this call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Defines a field to query for your application's Amazon CloudWatch Internet Monitor data. You create a data repository by running a query of a specific
 * 			type. Each <code>QueryType</code> includes a specific set of fields and datatypes to retrieve data for. </p>
 */
export interface QueryField {
  /**
   * @public
   * <p>The name of a field to query your application's Amazon CloudWatch Internet Monitor data for, such as <code>availability_score</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The data type for a query field, which must correspond to the field you're defining for <code>QueryField</code>. For example, if the query
   * 			field name is <code>availability_score</code>, the data type is <code>float</code>.</p>
   */
  Type?: string;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * @public
   * <p>The fields that the query returns data for. Fields are name-data type pairs, such as
   * 			<code>availability_score</code>-<code>float</code>.</p>
   */
  Fields: QueryField[] | undefined;

  /**
   * @public
   * <p>The data results that the query returns. Data is returned in arrays, aligned with the <code>Fields</code>
   * 		for the query, which creates a repository of Amazon CloudWatch Internet Monitor information for your application. Then, you can filter
   * 		the information in the repository by using <code>FilterParameters</code> that you define.</p>
   */
  Data: string[][] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetQueryStatusInput {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The ID of the query that you want to return the status for. A <code>QueryId</code> is an internally-generated
   * 			dentifier for a specific query.</p>
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
   * @public
   * <p>The current status for a query.</p>
   */
  Status: QueryStatus | undefined;
}

/**
 * @public
 * <p>Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor.</p>
 */
export interface HealthEvent {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the event.</p>
   */
  EventArn: string | undefined;

  /**
   * @public
   * <p>The internally-generated identifier of a specific network traffic impairment health event.</p>
   */
  EventId: string | undefined;

  /**
   * @public
   * <p>When a health event started.</p>
   */
  StartedAt: Date | undefined;

  /**
   * @public
   * <p>The time when a health event ended. If the health event is still active, then the end time is not set.</p>
   */
  EndedAt?: Date;

  /**
   * @public
   * <p>When the health event was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>When the health event was last updated.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The locations impacted by the health event.</p>
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * @public
   * <p>Health event list member.</p>
   */
  Status: HealthEventStatus | undefined;

  /**
   * @public
   * <p>The impact on total traffic that a health event has, in increased latency or reduced availability. This is the
   * 			percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this
   * 			client location to the Amazon Web Services location using this client network.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * @public
   * <p>The type of impairment for a health event.</p>
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * @public
   * <p>The value of the threshold percentage for performance or availability that was configured when Amazon CloudWatch Internet Monitor created the health event.</p>
   */
  HealthScoreThreshold?: number;
}

/**
 * @public
 */
export interface ListHealthEventsInput {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The time when a health event started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time when a health event ended. If the health event is still ongoing, then the end time is not set.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of health event objects that you want to return with this call. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The status of a health event.</p>
   */
  EventStatus?: HealthEventStatus;
}

/**
 * @public
 */
export interface ListHealthEventsOutput {
  /**
   * @public
   * <p>A list of health events.</p>
   */
  HealthEvents: HealthEvent[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>There was an internal server error.</p>
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
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>Tags for a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The request specifies something that doesn't exist.</p>
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
 * @public
 * <p>There were too many requests.</p>
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
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of monitor objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself.</p>
   *          <p>For information about the statuses for a monitor, see <a href="https://docs.aws.amazon.com/internet-monitor/latest/api/API_Monitor.html">
   * 				Monitor</a>.</p>
   */
  MonitorStatus?: string;
}

/**
 * @public
 * <p>The description of and information about a monitor in Amazon CloudWatch Internet Monitor. </p>
 */
export interface Monitor {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | undefined;

  /**
   * @public
   * <p>The health of data processing for the monitor.</p>
   */
  ProcessingStatus?: MonitorProcessingStatusCode;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * @public
   * <p>A list of monitors.</p>
   */
  Monitors: Monitor[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const QueryType = {
  MEASUREMENTS: "MEASUREMENTS",
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
   * @public
   * <p>The name of the monitor to query.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The timestamp that is the beginning of the period that you want to retrieve data for with your query.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp that is the end of the period that you want to retrieve data for with your query.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The type of query to run. The following are the three types of queries that you can run using the Internet Monitor query interface:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MEASUREMENTS</code>: TBD definition</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LOCATIONS</code>: TBD definition</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LOCATION_DETAILS</code>: TBD definition</p>
   *             </li>
   *          </ul>
   *          <p>For lists of the fields returned with each query type and more information about how each type of query is
   * 			performed, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">
   * 				Using the Amazon CloudWatch Internet Monitor query interface</a> in the Amazon CloudWatch Internet Monitor User Guide.</p>
   */
  QueryType: QueryType | undefined;

  /**
   * @public
   * <p>The <code>FilterParameters</code> field that you use with Amazon CloudWatch Internet Monitor queries is a string the defines
   * 			how you want a query to be filtered. The filter parameters that you can specify depend on the query type, since
   * 			each query type returns a different set of Internet Monitor data.</p>
   *          <p>For more information about specifying filter parameters, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">Using the Amazon CloudWatch Internet Monitor query interface</a>
   * 			in the Amazon CloudWatch Internet Monitor User Guide.</p>
   */
  FilterParameters?: FilterParameter[];
}

/**
 * @public
 */
export interface StartQueryOutput {
  /**
   * @public
   * <p>The internally-generated identifier of a specific query.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryInput {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The ID of the query that you want to stop. A <code>QueryId</code> is an internally-generated identifier for a specific query.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryOutput {}

/**
 * @public
 * <p>The request specifies a resource that doesn't exist.</p>
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
   * @public
   * <p>The name of the monitor. </p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs,
   * 			Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p>
   *          <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add
   * 			NLBs or WorkSpaces directories together with any other resources.</p>
   *          <note>
   *             <p>If you add only Amazon Virtual Private Clouds resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet
   * 			connectivity.</p>
   *          </note>
   */
  ResourcesToAdd?: string[];

  /**
   * @public
   * <p>The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p>
   */
  ResourcesToRemove?: string[];

  /**
   * @public
   * <p>The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and
   * 			<code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>.</p>
   */
  Status?: MonitorConfigState;

  /**
   * @public
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client
   * 			token for other API requests.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your
   * 			application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources
   * 			through. Setting this limit can help control billing costs.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * @public
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * @public
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks
   * 			maximum, that limit overrides the traffic percentage that you set.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * @public
   * <p>The list of health score thresholds. A threshold percentage for health scores, along with other configuration information,
   * 			determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview">
   * 			Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  HealthEventsConfig?: HealthEventsConfig;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for a tag you remove a resource from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tag keys that you remove from a resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
