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
 * <p>Measurements about the availability for your application on the internet, calculated by Amazon CloudWatch Internet Monitor. Amazon Web Services has substantial historical data about internet
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
   * <p>Experience scores, or health scores are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also summed into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the <i>CloudWatch User Guide</i> includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  ExperienceScore?: number;

  /**
   * <p>The percentage of impact caused by a health event for total traffic globally.</p>
   *          <p>For information about how Internet Monitor calculates impact, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html">Inside Internet Monitor</a> in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User
   * 			Guide.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
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
 * <p>A complex type for the configuration. Defines the health event threshold percentages, for performance score and availability score. Amazon CloudWatch Internet Monitor creates a health event when
 * 			there's an internet issue that affects your application end users where a health score percentage is at or below a set threshold. If you
 * 			don't set a health event threshold, the default value is 95%.</p>
 */
export interface HealthEventsConfig {
  /**
   * <p>The health event threshold percentage set for availability scores.</p>
   */
  AvailabilityScoreThreshold?: number;

  /**
   * <p>The health event threshold percentage set for performance scores.</p>
   */
  PerformanceScoreThreshold?: number;
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
   * <p>The Amazon S3 bucket name.</p>
   */
  BucketName?: string;

  /**
   * <p>The Amazon S3 bucket prefix.</p>
   */
  BucketPrefix?: string;

  /**
   * <p>The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.</p>
   */
  LogDeliveryStatus?: LogDeliveryStatus | string;
}

/**
 * @public
 * <p>Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
 */
export interface InternetMeasurementsLogDelivery {
  /**
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
   * <p>The name of the monitor. </p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p>
   *          <p>You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of
   * 			resources.</p>
   *          <note>
   *             <p>If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.</p>
   *          </note>
   */
  Resources?: string[];

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for
   * 			other API requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and
   * 			the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * <p>Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * <p>Defines the health event threshold percentages, for performance score and availability score. Internet Monitor creates a health event when
   * 			there's an internet issue that affects your application end users where a health score percentage is at or below a set threshold. If you
   * 			don't set a health event threshold, the default calue is 95%.</p>
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
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | string | undefined;
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
 */
export interface GetHealthEventInput {
  /**
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The internally generated identifier of a health event. Because <code>EventID</code> contains the forward slash (“/”) character, you must
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
   * <p>The internet provider name or network name.</p>
   */
  ASName: string | undefined;

  /**
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
   * <p>The networks that could be impacted by a network impairment event.</p>
   */
  Networks: Network[] | undefined;

  /**
   * <p>The combination of the Autonomous System Number (ASN) of the network and the name of the network.</p>
   */
  AsPath: Network[] | undefined;

  /**
   * <p>Type of network impairment.</p>
   */
  NetworkEventType: TriangulationEventType | string | undefined;
}

/**
 * @public
 * <p>Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different
 * 			percentiles: p50, p90, and p95.</p>
 */
export interface RoundTripTime {
  /**
   * <p>RTT at the 50th percentile (p50).</p>
   */
  P50?: number;

  /**
   * <p>RTT at the 90th percentile (p90). </p>
   */
  P90?: number;

  /**
   * <p>RTT at the 95th percentile (p95). </p>
   */
  P95?: number;
}

/**
 * @public
 * <p>Measurements about the performance for your application on the internet calculated by Amazon CloudWatch Internet Monitor. Amazon Web Services has substantial historical data about internet
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
   * <p>Experience scores, or health scores, are calculated for different geographic and network provider combinations (that is, different granularities) and
   * 			also totaled into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor
   * 			provides global health scores.</p>
   *          <p>The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and
   * 			availability scores, and when it creates and resolves health events. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Amazon Web Services calculates performance and
   * 				availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  ExperienceScore?: number;

  /**
   * <p>How much performance impact was caused by a health event for total traffic globally. For performance, this is the percentage of how much latency
   * 			increased during the event compared to typical performance for your application traffic globally. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * <p>How much performance impact was caused by a health event at a client location. For performance, this is the percentage of how much latency increased
   * 			during the event compared to typical performance for traffic, from this client location to an Amazon Web Services location, using a specific client network. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop">When Amazon Web Services creates and resolves health
   * 			events</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  PercentOfClientLocationImpacted?: number;

  /**
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
 * 			estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a
 * 			performance score and an availability score.</p>
 */
export interface InternetHealth {
  /**
   * <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99%
   * 			for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability
   * 			scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  Availability?: AvailabilityMeasurement;

  /**
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
   * <p>The name of the network at an impacted location.</p>
   */
  ASName: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) of the network at an impacted location.</p>
   */
  ASNumber: number | undefined;

  /**
   * <p>The name of the country where the health event is located.</p>
   */
  Country: string | undefined;

  /**
   * <p>The subdivision location where the health event is located. The subdivision usually maps to
   * 				states in most countries (including the United States). For United Kingdom, it maps to a country (England,
   * 				Scotland, Wales) or province (Northern Ireland).</p>
   */
  Subdivision?: string;

  /**
   * <p>The metro area where the health event is located.</p>
   *          <p>Metro indicates a metropolitan region in the United States, such as the region around New York City.
   *    		In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be
   *    		a county, a London borough, a unitary authority, council area, and so on.</p>
   */
  Metro?: string;

  /**
   * <p>The name of the city where the health event is located.</p>
   */
  City?: string;

  /**
   * <p>The latitude where the health event is located.</p>
   */
  Latitude?: number;

  /**
   * <p>The longitude where the health event is located.</p>
   */
  Longitude?: number;

  /**
   * <p>The country code where the health event is located. The ISO 3166-2 codes for the
   *    		country is provided, when available. </p>
   */
  CountryCode?: string;

  /**
   * <p>The subdivision code where the health event is located. The ISO 3166-2 codes for
   * 			country subdivisions is provided, when available. </p>
   */
  SubdivisionCode?: string;

  /**
   * <p>The service location where the health event is located.</p>
   */
  ServiceLocation?: string;

  /**
   * <p>The status of the health event at an impacted location.</p>
   */
  Status: HealthEventStatus | string | undefined;

  /**
   * <p>The cause of the impairment. There are two types of network impairments: Amazon Web Services network issues
   *       	or internet issues. Internet issues are typically a problem with a network provider, like an internet service provider (ISP).</p>
   */
  CausedBy?: NetworkImpairment;

  /**
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
   */
  EventArn: string | undefined;

  /**
   * <p>The internally generated identifier of a health event.</p>
   */
  EventId: string | undefined;

  /**
   * <p>The time when a health event started.</p>
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when a health event was resolved. If the health event is still active, the end time is not set.</p>
   */
  EndedAt?: Date;

  /**
   * <p>The time when a health event was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time when a health event was last updated or recalculated.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The locations affected by a health event.</p>
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * <p>The status of a health event.</p>
   */
  Status: HealthEventStatus | string | undefined;

  /**
   * <p>The impact on total traffic that a health event has.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * <p>The type of impairment of a specific health event.</p>
   */
  ImpactType: HealthEventImpactType | string | undefined;

  /**
   * <p>The threshold percentage for health events when Amazon CloudWatch Internet Monitor creates a health event.</p>
   */
  HealthScoreThreshold?: number;
}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
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
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * <p>The resources that have been added for the monitor. Resources are listed by their Amazon Resource Names (ARNs).</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The status of the monitor.</p>
   */
  Status: MonitorConfigState | string | undefined;

  /**
   * <p>The time when the monitor was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The last time that the monitor was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The health of the data processing for the monitor.</p>
   */
  ProcessingStatus?: MonitorProcessingStatusCode | string;

  /**
   * <p>Additional information about the health of the data processing for the monitor.</p>
   */
  ProcessingStatusInfo?: string;

  /**
   * <p>The tags that have been added to monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and
   * 			the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs.</p>
   *          <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value
   * 		</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * <p>The list of health event thresholds. A health event threshold percentage, for performance and availability, determines the level
   * 			of impact at which Amazon CloudWatch Internet Monitor creates a health event when there's an internet issue that affects your application end users.</p>
   */
  HealthEventsConfig?: HealthEventsConfig;
}

/**
 * @public
 * <p>Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor.</p>
 */
export interface HealthEvent {
  /**
   * <p>The Amazon Resource Name (ARN) of the event.</p>
   */
  EventArn: string | undefined;

  /**
   * <p>The internally generated identifier of a specific network traffic impairment health event.</p>
   */
  EventId: string | undefined;

  /**
   * <p>When a health event started.</p>
   */
  StartedAt: Date | undefined;

  /**
   * <p>The time when a health event ended. If the health event is still active, then the end time is not set.</p>
   */
  EndedAt?: Date;

  /**
   * <p>When the health event was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>When the health event was last updated.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The locations impacted by the health event.</p>
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * <p>Health event list member.</p>
   */
  Status: HealthEventStatus | string | undefined;

  /**
   * <p>The impact on global traffic monitored by this monitor for this health event.</p>
   */
  PercentOfTotalTrafficImpacted?: number;

  /**
   * <p>The type of impairment for a health event.</p>
   */
  ImpactType: HealthEventImpactType | string | undefined;

  /**
   * <p>The value of the threshold percentage for performance or availability that was configured when Amazon CloudWatch Internet Monitor created the health event.</p>
   */
  HealthScoreThreshold?: number;
}

/**
 * @public
 */
export interface ListHealthEventsInput {
  /**
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The time when a health event started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when a health event ended. If the health event is still ongoing, then the end time is not set.</p>
   */
  EndTime?: Date;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of health event objects that you want to return with this call. </p>
   */
  MaxResults?: number;

  /**
   * <p>The status of a health event.</p>
   */
  EventStatus?: HealthEventStatus | string;
}

/**
 * @public
 */
export interface ListHealthEventsOutput {
  /**
   * <p>A list of health events.</p>
   */
  HealthEvents: HealthEvent[] | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
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
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of monitor objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
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
   * <p>The name of the monitor.</p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | string | undefined;

  /**
   * <p>The health of data processing for the monitor.</p>
   */
  ProcessingStatus?: MonitorProcessingStatusCode | string;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * <p>A list of monitors.</p>
   */
  Monitors: Monitor[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;
}

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
   * <p>The name of the monitor. </p>
   */
  MonitorName: string | undefined;

  /**
   * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p>
   *          <p>You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of
   * 			resources.</p>
   *          <note>
   *             <p>If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet
   * 			connectivity.</p>
   *          </note>
   */
  ResourcesToAdd?: string[];

  /**
   * <p>The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p>
   */
  ResourcesToRemove?: string[];

  /**
   * <p>The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and
   * 			<code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>.</p>
   */
  Status?: MonitorConfigState | string;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client
   * 			token for other API requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from
   * 			and the network or ASN,
   * 			such as an internet service provider, that clients access the resources through.</p>
   */
  MaxCityNetworksToMonitor?: number;

  /**
   * <p>Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.</p>
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;

  /**
   * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.</p>
   */
  TrafficPercentageToMonitor?: number;

  /**
   * <p>The list of health event thresholds. A health event threshold percentage, for performance and availability, determines when Internet Monitor creates
   * 			a health event when there's an internet issue that affects your application end users.</p>
   */
  HealthEventsConfig?: HealthEventsConfig;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   */
  MonitorArn: string | undefined;

  /**
   * <p>The status of a monitor.</p>
   */
  Status: MonitorConfigState | string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.</p>
   */
  ResourceArn: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) for a tag you remove a resource from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys that you remove from a resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
