// smithy-typescript generated code
import type {
  HealthEventImpactType,
  HealthEventStatus,
  InternetEventStatus,
  InternetEventType,
  LocalHealthEventsConfigStatus,
  LogDeliveryStatus,
  MonitorConfigState,
  MonitorProcessingStatusCode,
  Operator,
  QueryStatus,
  QueryType,
  TriangulationEventType,
} from "./enums";

/**
 * Amazon CloudWatch Internet Monitor calculates measurements about the availability for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.
 *
 * Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.
 *
 * For more information, see [How Internet Monitor calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface AvailabilityMeasurement {
  /**
   * Experience scores, or health scores are calculated for different geographic and network provider combinations (that is, different granularities) and also summed into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor provides global health scores.
   *
   * The Amazon CloudWatch Internet Monitor chapter in the *CloudWatch User Guide* includes detailed information about how Internet Monitor calculates health scores, including performance and availability scores, and when it creates and resolves health events. For more information, see [How Amazon Web Services calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  ExperienceScore?: number | undefined;

  /**
   * The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.
   *
   * For information about how Internet Monitor calculates impact, see [How Internet Monitor works](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html) in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User Guide.
   *
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * The percentage of impact caused by a health event for client location traffic globally.
   *
   * For information about how Internet Monitor calculates impact, see [Inside Internet Monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html) in the Amazon CloudWatch Internet Monitor section of the Amazon CloudWatch User Guide.
   *
   * @public
   */
  PercentOfClientLocationImpacted?: number | undefined;
}

/**
 * The impacted location, such as a city, that Amazon Web Services clients access application resources from.
 *
 * @public
 */
export interface ClientLocation {
  /**
   * The name of the internet service provider (ISP) or network (ASN).
   *
   * @public
   */
  ASName: string | undefined;

  /**
   * The Autonomous System Number (ASN) of the network at an impacted location.
   *
   * @public
   */
  ASNumber: number | undefined;

  /**
   * The name of the country where the internet event is located.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The subdivision location where the health event is located. The subdivision usually maps to states in most countries (including the United States). For United Kingdom, it maps to a country (England, Scotland, Wales) or province (Northern Ireland).
   *
   * @public
   */
  Subdivision?: string | undefined;

  /**
   * The metro area where the health event is located.
   *
   * Metro indicates a metropolitan region in the United States, such as the region around New York City. In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be a county, a London borough, a unitary authority, council area, and so on.
   *
   * @public
   */
  Metro?: string | undefined;

  /**
   * The name of the city where the internet event is located.
   *
   * @public
   */
  City: string | undefined;

  /**
   * The latitude where the internet event is located.
   *
   * @public
   */
  Latitude: number | undefined;

  /**
   * The longitude where the internet event is located.
   *
   * @public
   */
  Longitude: number | undefined;
}

/**
 * A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance or availability issue, when scores cross a threshold for one or more city-networks.
 *
 * Defines the percentages, for performance scores or availability scores, that are the local thresholds for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a threshold is crossed for a local health score.
 *
 * If you don't set a local health event threshold, the default value is 60%.
 *
 * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide*.
 *
 * @public
 */
export interface LocalHealthEventsConfig {
  /**
   * The status of whether Internet Monitor creates a health event based on a threshold percentage set for a local health score. The status can be `ENABLED` or `DISABLED`.
   *
   * @public
   */
  Status?: LocalHealthEventsConfigStatus | undefined;

  /**
   * The health event threshold percentage set for a local health score.
   *
   * @public
   */
  HealthScoreThreshold?: number | undefined;

  /**
   * The minimum percentage of overall traffic for an application that must be impacted by an issue before Internet Monitor creates an event when a threshold is crossed for a local health score.
   *
   * If you don't set a minimum traffic impact threshold, the default value is 0.1%.
   *
   * @public
   */
  MinTrafficImpact?: number | undefined;
}

/**
 * A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.
 *
 * Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.
 *
 * You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.
 *
 * If you don't set a health event threshold, the default value is 95%.
 *
 * For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.
 *
 * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide*.
 *
 * @public
 */
export interface HealthEventsConfig {
  /**
   * The health event threshold percentage set for availability scores.
   *
   * @public
   */
  AvailabilityScoreThreshold?: number | undefined;

  /**
   * The health event threshold percentage set for performance scores.
   *
   * @public
   */
  PerformanceScoreThreshold?: number | undefined;

  /**
   * The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local availability issue.
   *
   * @public
   */
  AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig | undefined;

  /**
   * The configuration that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance issue.
   *
   * @public
   */
  PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig | undefined;
}

/**
 * The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is `ENABLED` or `DISABLED`, depending on whether you choose to deliver internet measurements to S3 logs.
 *
 * @public
 */
export interface S3Config {
  /**
   * The Amazon S3 bucket name.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The Amazon S3 bucket prefix.
   *
   * @public
   */
  BucketPrefix?: string | undefined;

  /**
   * The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket.
   *
   * @public
   */
  LogDeliveryStatus?: LogDeliveryStatus | undefined;
}

/**
 * Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.
 *
 * @public
 */
export interface InternetMeasurementsLogDelivery {
  /**
   * The configuration information for publishing Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is `ENABLED` or `DISABLED`, depending on whether you choose to deliver internet measurements to S3 logs.
   *
   * @public
   */
  S3Config?: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories.
   *
   * You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.
   *
   * > **Note:** If you add only Amazon VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.
   *
   * To learn more, see [Choosing a city-network maximum value](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.
   *
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.
   *
   * To learn more, see [Choosing an application traffic percentage to monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * Defines the threshold percentages and other configuration information for when Amazon CloudWatch Internet Monitor creates a health event. Internet Monitor creates a health event when an internet issue that affects your application end users has a health score percentage that is at or below a specific threshold, and, sometimes, when other criteria are met.
   *
   * If you don't set a health event threshold, the default value is 95%.
   *
   * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The status of a monitor.
   *
   * @public
   */
  Status: MonitorConfigState | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * The name of the monitor to delete.
   *
   * @public
   */
  MonitorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorOutput {}

/**
 * A filter that you use with the results of a Amazon CloudWatch Internet Monitor query that you created and ran. The query sets up a repository of data that is a subset of your application's Internet Monitor data. `FilterParameter` is a string that defines how you want to filter the repository of data to return a set of results, based on your criteria.
 *
 * The filter parameters that you can specify depend on the query type that you used to create the repository, since each query type returns a different set of Internet Monitor data.
 *
 * For each filter, you specify a field (such as `city`), an operator (such as `not_equals`, and a value or array of values (such as `["Seattle", "Redmond"]`). Separate values in the array with commas.
 *
 * For more information about specifying filter parameters, see [Using the Amazon CloudWatch Internet Monitor query interface](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html) in the Amazon CloudWatch Internet Monitor User Guide.
 *
 * @public
 */
export interface FilterParameter {
  /**
   * A data field that you want to filter, to further scope your application's Internet Monitor data in a repository that you created by running a query. A field might be `city`, for example. The field must be one of the fields that was returned by the specific query that you used to create the repository.
   *
   * @public
   */
  Field?: string | undefined;

  /**
   * The operator to use with the filter field and a value, such as `not_equals`.
   *
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * One or more values to be used, together with the specified operator, to filter data for a query. For example, you could specify an array of values such as `["Seattle", "Redmond"]`. Values in the array are separated by commas.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetHealthEventInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The internally-generated identifier of a health event. Because `EventID` contains the forward slash (“/”) character, you must URL-encode the `EventID` field in the request URL.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * An internet service provider (ISP) or network (ASN) in Amazon CloudWatch Internet Monitor.
 *
 * @public
 */
export interface Network {
  /**
   * The name of the internet service provider (ISP) or network (ASN).
   *
   * @public
   */
  ASName: string | undefined;

  /**
   * The Autonomous System Number (ASN) of the internet provider or network.
   *
   * @public
   */
  ASNumber: number | undefined;
}

/**
 * Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor.
 *
 * @public
 */
export interface NetworkImpairment {
  /**
   * The networks that could be impacted by a network impairment event.
   *
   * @public
   */
  Networks: Network[] | undefined;

  /**
   * The combination of the Autonomous System Number (ASN) of the network and the name of the network.
   *
   * @public
   */
  AsPath: Network[] | undefined;

  /**
   * The type of network impairment.
   *
   * @public
   */
  NetworkEventType: TriangulationEventType | undefined;
}

/**
 * Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different percentiles: p50, p90, and p95.
 *
 * @public
 */
export interface RoundTripTime {
  /**
   * RTT at the 50th percentile (p50).
   *
   * @public
   */
  P50?: number | undefined;

  /**
   * RTT at the 90th percentile (p90).
   *
   * @public
   */
  P90?: number | undefined;

  /**
   * RTT at the 95th percentile (p95).
   *
   * @public
   */
  P95?: number | undefined;
}

/**
 * Amazon CloudWatch Internet Monitor calculates measurements about the performance for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.
 *
 * Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.
 *
 * For more information, see [How Internet Monitor calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
 *
 * @public
 */
export interface PerformanceMeasurement {
  /**
   * Experience scores, or health scores, are calculated for different geographic and network provider combinations (that is, different granularities) and also totaled into global scores. If you view performance or availability scores without filtering for any specific geography or service provider, Amazon CloudWatch Internet Monitor provides global health scores.
   *
   * The Amazon CloudWatch Internet Monitor chapter in the CloudWatch User Guide includes detailed information about how Internet Monitor calculates health scores, including performance and availability scores, and when it creates and resolves health events. For more information, see [How Amazon Web Services calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  ExperienceScore?: number | undefined;

  /**
   * The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.
   *
   * For more information, see [When Amazon Web Services creates and resolves health events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * How much performance impact was caused by a health event at a client location. For performance, this is the percentage of how much latency increased during the event compared to typical performance for traffic, from this client location to an Amazon Web Services location, using a specific client network.
   *
   * For more information, see [When Amazon Web Services creates and resolves health events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  PercentOfClientLocationImpacted?: number | undefined;

  /**
   * This is the percentage of how much round-trip time increased during the event compared to typical round-trip time for your application for traffic.
   *
   * For more information, see [When Amazon Web Services creates and resolves health events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMHealthEventStartStop) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  RoundTripTime?: RoundTripTime | undefined;
}

/**
 * Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, Internet Monitor reports the information to you in the form of health scores: a performance score and an availability score.
 *
 * @public
 */
export interface InternetHealth {
  /**
   * Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.
   *
   * For more information, see [How Internet Monitor calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  Availability?: AvailabilityMeasurement | undefined;

  /**
   * Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.
   *
   * For more information, see [How Internet Monitor calculates performance and availability scores](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  Performance?: PerformanceMeasurement | undefined;
}

/**
 * Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.
 *
 * Geographic regions are hierarchically categorized into country, subdivision, metro and city geographic granularities. The geographic region is identified based on the IP address used at the client locations.
 *
 * @public
 */
export interface ImpactedLocation {
  /**
   * The name of the internet service provider (ISP) or network (ASN).
   *
   * @public
   */
  ASName: string | undefined;

  /**
   * The Autonomous System Number (ASN) of the network at an impacted location.
   *
   * @public
   */
  ASNumber: number | undefined;

  /**
   * The name of the country where the health event is located.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The subdivision location where the health event is located. The subdivision usually maps to states in most countries (including the United States). For United Kingdom, it maps to a country (England, Scotland, Wales) or province (Northern Ireland).
   *
   * @public
   */
  Subdivision?: string | undefined;

  /**
   * The metro area where the health event is located.
   *
   * Metro indicates a metropolitan region in the United States, such as the region around New York City. In non-US countries, this is a second-level subdivision. For example, in the United Kingdom, it could be a county, a London borough, a unitary authority, council area, and so on.
   *
   * @public
   */
  Metro?: string | undefined;

  /**
   * The name of the city where the health event is located.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The latitude where the health event is located.
   *
   * @public
   */
  Latitude?: number | undefined;

  /**
   * The longitude where the health event is located.
   *
   * @public
   */
  Longitude?: number | undefined;

  /**
   * The country code where the health event is located. The ISO 3166-2 codes for the country is provided, when available.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The subdivision code where the health event is located. The ISO 3166-2 codes for country subdivisions is provided, when available.
   *
   * @public
   */
  SubdivisionCode?: string | undefined;

  /**
   * The service location where the health event is located.
   *
   * @public
   */
  ServiceLocation?: string | undefined;

  /**
   * The status of the health event at an impacted location.
   *
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * The cause of the impairment. There are two types of network impairments: Amazon Web Services network issues or internet issues. Internet issues are typically a problem with a network provider, like an internet service provider (ISP).
   *
   * @public
   */
  CausedBy?: NetworkImpairment | undefined;

  /**
   * The calculated health at a specific location.
   *
   * @public
   */
  InternetHealth?: InternetHealth | undefined;

  /**
   * The IPv4 prefixes at the client location that was impacted by the health event.
   *
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetHealthEventOutput {
  /**
   * The Amazon Resource Name (ARN) of the event.
   *
   * @public
   */
  EventArn: string | undefined;

  /**
   * The internally-generated identifier of a health event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The time when a health event started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when a health event was resolved. If the health event is still active, the end time is not set.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The time when a health event was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when a health event was last updated or recalculated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The locations affected by a health event.
   *
   * @public
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * The status of a health event.
   *
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.
   *
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * The type of impairment of a specific health event.
   *
   * @public
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * The threshold percentage for a health score that determines, along with other configuration information, when Internet Monitor creates a health event when there's an internet issue that affects your application end users.
   *
   * @public
   */
  HealthScoreThreshold?: number | undefined;
}

/**
 * @public
 */
export interface GetInternetEventInput {
  /**
   * The `EventId` of the internet event to return information for.
   *
   * @public
   */
  EventId: string | undefined;
}

/**
 * @public
 */
export interface GetInternetEventOutput {
  /**
   * The internally-generated identifier of an internet event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the internet event.
   *
   * @public
   */
  EventArn: string | undefined;

  /**
   * The time when the internet event started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when the internet event ended. If the event hasn't ended yet, this value is empty.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The impacted location, such as a city, where clients access Amazon Web Services application resources.
   *
   * @public
   */
  ClientLocation: ClientLocation | undefined;

  /**
   * The type of network impairment.
   *
   * @public
   */
  EventType: InternetEventType | undefined;

  /**
   * The status of the internet event.
   *
   * @public
   */
  EventStatus: InternetEventStatus | undefined;
}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * The resources monitored by the monitor. Resources are listed by their Amazon Resource Names (ARNs).
   *
   * @public
   */
  Resources: string[] | undefined;

  /**
   * The status of the monitor.
   *
   * @public
   */
  Status: MonitorConfigState | undefined;

  /**
   * The time when the monitor was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The last time that the monitor was modified.
   *
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * The health of the data processing for the monitor.
   *
   * @public
   */
  ProcessingStatus?: MonitorProcessingStatusCode | undefined;

  /**
   * Additional information about the health of the data processing for the monitor.
   *
   * @public
   */
  ProcessingStatusInfo?: string | undefined;

  /**
   * The tags that have been added to monitor.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. This limit can help control billing costs.
   *
   * To learn more, see [Choosing a city-network maximum value](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.
   *
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * The percentage of the internet-facing traffic for your application to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.
   *
   * To learn more, see [Choosing an application traffic percentage to monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * The list of health event threshold configurations. The threshold percentage for a health score determines, along with other configuration information, when Internet Monitor creates a health event when there's an internet issue that affects your application end users.
   *
   * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * The name of the monitor to return data for.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The ID of the query that you want to return data results for. A `QueryId` is an internally-generated identifier for a specific query.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Defines a field to query for your application's Amazon CloudWatch Internet Monitor data. You create a data repository by running a query of a specific type. Each `QueryType` includes a specific set of fields and datatypes to retrieve data for.
 *
 * @public
 */
export interface QueryField {
  /**
   * The name of a field to query your application's Amazon CloudWatch Internet Monitor data for, such as `availability_score`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The data type for a query field, which must correspond to the field you're defining for `QueryField`. For example, if the query field name is `availability_score`, the data type is `float`.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * The fields that the query returns data for. Fields are name-data type pairs, such as `availability_score`-`float`.
   *
   * @public
   */
  Fields: QueryField[] | undefined;

  /**
   * The data results that the query returns. Data is returned in arrays, aligned with the `Fields` for the query, which creates a repository of Amazon CloudWatch Internet Monitor information for your application. Then, you can filter the information in the repository by using `FilterParameters` that you define.
   *
   * @public
   */
  Data: string[][] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The ID of the query that you want to return the status for. A `QueryId` is an internally-generated dentifier for a specific query.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusOutput {
  /**
   * The current status for a query.
   *
   * @public
   */
  Status: QueryStatus | undefined;
}

/**
 * Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor.
 *
 * @public
 */
export interface HealthEvent {
  /**
   * The Amazon Resource Name (ARN) of the event.
   *
   * @public
   */
  EventArn: string | undefined;

  /**
   * The internally-generated identifier of a specific network traffic impairment health event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * When a health event started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when a health event ended. If the health event is still active, then the end time is not set.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * When the health event was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * When the health event was last updated.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The locations impacted by the health event.
   *
   * @public
   */
  ImpactedLocations: ImpactedLocation[] | undefined;

  /**
   * The status of a health event.
   *
   * @public
   */
  Status: HealthEventStatus | undefined;

  /**
   * The impact on total traffic that a health event has, in increased latency or reduced availability. This is the percentage of how much latency has increased or availability has decreased during the event, compared to what is typical for traffic from this client location to the Amazon Web Services location using this client network.
   *
   * @public
   */
  PercentOfTotalTrafficImpacted?: number | undefined;

  /**
   * The type of impairment for a health event.
   *
   * @public
   */
  ImpactType: HealthEventImpactType | undefined;

  /**
   * The value of the threshold percentage for performance or availability that was configured when Amazon CloudWatch Internet Monitor created the health event.
   *
   * @public
   */
  HealthScoreThreshold?: number | undefined;
}

/**
 * @public
 */
export interface ListHealthEventsInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The time when a health event started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when a health event ended. If the health event is still ongoing, then the end time is not set.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of health event objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of a health event.
   *
   * @public
   */
  EventStatus?: HealthEventStatus | undefined;

  /**
   * The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListHealthEventsOutput {
  /**
   * A list of health events.
   *
   * @public
   */
  HealthEvents: HealthEvent[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInternetEventsInput {
  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The start time of the time window that you want to get a list of internet events for.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the time window that you want to get a list of internet events for.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of an internet event.
   *
   * @public
   */
  EventStatus?: string | undefined;

  /**
   * The type of network impairment.
   *
   * @public
   */
  EventType?: string | undefined;
}

/**
 * A summary of information about an internet event in Amazon CloudWatch Internet Monitor. Internet events are issues that cause performance degradation or availability problems for impacted Amazon Web Services client locations. Internet Monitor displays information about recent global health events, called internet events, on a global outages map that is available to all Amazon Web Services customers.
 *
 * @public
 */
export interface InternetEventSummary {
  /**
   * The internally-generated identifier of an internet event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the internet event.
   *
   * @public
   */
  EventArn: string | undefined;

  /**
   * The time when an internet event started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The time when an internet event ended. If the event hasn't ended yet, this value is empty.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The impacted location, such as a city, that Amazon Web Services clients access application resources from.
   *
   * @public
   */
  ClientLocation: ClientLocation | undefined;

  /**
   * The type of network impairment.
   *
   * @public
   */
  EventType: InternetEventType | undefined;

  /**
   * The status of an internet event.
   *
   * @public
   */
  EventStatus: InternetEventStatus | undefined;
}

/**
 * @public
 */
export interface ListInternetEventsOutput {
  /**
   * A set of internet events returned for the list operation.
   *
   * @public
   */
  InternetEvents: InternetEventSummary[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) for a resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * Tags for a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of monitor objects that you want to return with this call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself.
   *
   * For information about the statuses for a monitor, see [Monitor](https://docs.aws.amazon.com/internet-monitor/latest/api/API_Monitor.html).
   *
   * @public
   */
  MonitorStatus?: string | undefined;

  /**
   * A boolean option that you can set to `TRUE` to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;
}

/**
 * The description of and information about a monitor in Amazon CloudWatch Internet Monitor.
 *
 * @public
 */
export interface Monitor {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * The status of a monitor.
   *
   * @public
   */
  Status: MonitorConfigState | undefined;

  /**
   * The health of data processing for the monitor.
   *
   * @public
   */
  ProcessingStatus?: MonitorProcessingStatusCode | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * A list of monitors.
   *
   * @public
   */
  Monitors: Monitor[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryInput {
  /**
   * The name of the monitor to query.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The timestamp that is the beginning of the period that you want to retrieve data for with your query.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp that is the end of the period that you want to retrieve data for with your query.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The type of query to run. The following are the three types of queries that you can run using the Internet Monitor query interface:
   *
   * - `MEASUREMENTS`: Provides availability score, performance score, total traffic, and round-trip times, at 5 minute intervals.
   * - `TOP_LOCATIONS`: Provides availability score, performance score, total traffic, and time to first byte (TTFB) information, for the top location and ASN combinations that you're monitoring, by traffic volume.
   * - `TOP_LOCATION_DETAILS`: Provides TTFB for Amazon CloudFront, your current configuration, and the best performing EC2 configuration, at 1 hour intervals.
   * - `OVERALL_TRAFFIC_SUGGESTIONS`: Provides TTFB, using a 30-day weighted average, for all traffic in each Amazon Web Services location that is monitored.
   * - `OVERALL_TRAFFIC_SUGGESTIONS_DETAILS`: Provides TTFB, using a 30-day weighted average, for each top location, for a proposed Amazon Web Services location. Must provide an Amazon Web Services location to search.
   * - `ROUTING_SUGGESTIONS`: Provides the predicted average round-trip time (RTT) from an IP prefix toward an Amazon Web Services location for a DNS resolver. The RTT is calculated at one hour intervals, over a one hour period.
   *
   * For lists of the fields returned with each query type and more information about how each type of query is performed, see [Using the Amazon CloudWatch Internet Monitor query interface](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  QueryType: QueryType | undefined;

  /**
   * The `FilterParameters` field that you use with Amazon CloudWatch Internet Monitor queries is a string the defines how you want a query to be filtered. The filter parameters that you can specify depend on the query type, since each query type returns a different set of Internet Monitor data.
   *
   * For more information about specifying filter parameters, see [Using the Amazon CloudWatch Internet Monitor query interface](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  FilterParameters?: FilterParameter[] | undefined;

  /**
   * The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see [Internet Monitor cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cwim-cross-account.html) in the Amazon CloudWatch Internet Monitor User Guide.
   *
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryOutput {
  /**
   * The internally-generated identifier of a specific query.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The ID of the query that you want to stop. A `QueryId` is an internally-generated identifier for a specific query.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryOutput {}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories.
   *
   * You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.
   *
   * > **Note:** If you add only Amazon Virtual Private Clouds resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.
   *
   * @public
   */
  ResourcesToAdd?: string[] | undefined;

  /**
   * The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).
   *
   * @public
   */
  ResourcesToRemove?: string[] | undefined;

  /**
   * The status for a monitor. The accepted values for `Status` with the `UpdateMonitor` API call are the following: `ACTIVE` and `INACTIVE`. The following values are *not* accepted: `PENDING`, and `ERROR`.
   *
   * @public
   */
  Status?: MonitorConfigState | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.
   *
   * @public
   */
  MaxCityNetworksToMonitor?: number | undefined;

  /**
   * Publish internet measurements for Internet Monitor to another location, such as an Amazon S3 bucket. The measurements are also published to Amazon CloudWatch Logs.
   *
   * @public
   */
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery | undefined;

  /**
   * The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.
   *
   * To learn more, see [Choosing an application traffic percentage to monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html) in the Amazon CloudWatch Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  TrafficPercentageToMonitor?: number | undefined;

  /**
   * The list of health score thresholds. A threshold percentage for health scores, along with other configuration information, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users.
   *
   * For more information, see [Change health event thresholds](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview) in the Internet Monitor section of the *CloudWatch User Guide*.
   *
   * @public
   */
  HealthEventsConfig?: HealthEventsConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * The status of a monitor.
   *
   * @public
   */
  Status: MonitorConfigState | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.
   *
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
   * The Amazon Resource Name (ARN) for a tag you remove a resource from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tag keys that you remove from a resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
