// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AppMonitorPlatform,
  CustomEventsStatus,
  DeobfuscationStatus,
  MetricDestination,
  StateEnum,
  Telemetry,
} from "./enums";

/**
 * This structure contains much of the configuration data for the app monitor.
 *
 * @public
 */
export interface AppMonitorConfiguration {
  /**
   * The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * A list of URLs in your website or application to exclude from RUM data collection.
   *
   * You can't include both `ExcludedPages` and `IncludedPages` in the same operation.
   *
   * @public
   */
  ExcludedPages?: string[] | undefined;

  /**
   * If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.
   *
   * You can't include both `ExcludedPages` and `IncludedPages` in the same operation.
   *
   * @public
   */
  IncludedPages?: string[] | undefined;

  /**
   * A list of pages in your application that are to be displayed with a "favorite" icon in the CloudWatch RUM console.
   *
   * @public
   */
  FavoritePages?: string[] | undefined;

  /**
   * Specifies the portion of user sessions to use for RUM data collection. Choosing a higher portion gives you more data but also incurs more costs.
   *
   * The range for this value is 0 to 1 inclusive. Setting this to 1 means that 100% of user sessions are sampled, and setting it to 0.1 means that 10% of user sessions are sampled.
   *
   * If you omit this parameter, the default of 0.1 is used, and 10% of sessions will be sampled.
   *
   * @public
   */
  SessionSampleRate?: number | undefined;

  /**
   * The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
   *
   * > **Note:**
   * >
   * > It is possible that an app monitor does not have a value for `GuestRoleArn`. For example, this can happen when you use the console to create an app monitor and you allow CloudWatch RUM to create a new identity pool for Authorization. In this case, `GuestRoleArn` is not present in the [GetAppMonitor](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_GetAppMonitor.html) response because it is not stored by the service.
   * >
   * > If this issue affects you, you can take one of the following steps:
   * >
   * > - Use the Cloud Development Kit (CDK) to create an identity pool and the associated IAM role, and use that for your app monitor.
   * > - Make a separate [GetIdentityPoolRoles](https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html) call to Amazon Cognito to retrieve the `GuestRoleArn`.
   *
   * @public
   */
  GuestRoleArn?: string | undefined;

  /**
   * If you set this to `true`, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
   *
   * @public
   */
  AllowCookies?: boolean | undefined;

  /**
   * An array that lists the types of telemetry data that this app monitor is to collect.
   *
   * - `errors` indicates that RUM collects data about unhandled JavaScript errors raised by your application.
   * - `performance` indicates that RUM collects performance data about how your application and its resources are loaded and rendered. This includes Core Web Vitals.
   * - `http` indicates that RUM collects data about HTTP errors thrown by your application.
   *
   * @public
   */
  Telemetries?: Telemetry[] | undefined;

  /**
   * If you set this to `true`, RUM enables X-Ray tracing for the user sessions that RUM samples. RUM adds an X-Ray trace header to allowed HTTP requests. It also records an X-Ray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the X-Ray console and the CloudWatch ServiceLens console. For more information, see [What is X-Ray?](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
   *
   * @public
   */
  EnableXRay?: boolean | undefined;
}

/**
 * A structure that contains information about custom events for this app monitor.
 *
 * @public
 */
export interface CustomEvents {
  /**
   * Specifies whether this app monitor allows the web client to define and send custom events. The default is for custom events to be `DISABLED`.
   *
   * @public
   */
  Status?: CustomEventsStatus | undefined;
}

/**
 * A structure that contains the information about whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.
 *
 * @public
 */
export interface CwLog {
  /**
   * Indicated whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs.
   *
   * @public
   */
  CwLogEnabled?: boolean | undefined;

  /**
   * The name of the log group where the copies are stored.
   *
   * @public
   */
  CwLogGroup?: string | undefined;
}

/**
 * A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs.
 *
 * @public
 */
export interface DataStorage {
  /**
   * A structure that contains the information about whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.
   *
   * @public
   */
  CwLog?: CwLog | undefined;
}

/**
 * A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.
 *
 * @public
 */
export interface JavaScriptSourceMaps {
  /**
   * Specifies whether JavaScript error stack traces should be unminified for this app monitor. The default is for JavaScript error stack trace unminification to be `DISABLED`.
   *
   * @public
   */
  Status: DeobfuscationStatus | undefined;

  /**
   * The S3Uri of the bucket or folder that stores the source map files. It is required if status is ENABLED.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
 *
 * @public
 */
export interface DeobfuscationConfiguration {
  /**
   * A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.
   *
   * @public
   */
  JavaScriptSourceMaps?: JavaScriptSourceMaps | undefined;
}

/**
 * A RUM app monitor collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior.
 *
 * @public
 */
export interface AppMonitor {
  /**
   * The name of the app monitor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The top-level internet domain name for which your application has administrative authority.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * List the domain names for which your application has administrative authority.
   *
   * @public
   */
  DomainList?: string[] | undefined;

  /**
   * The unique ID of this app monitor.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The date and time that this app monitor was created.
   *
   * @public
   */
  Created?: string | undefined;

  /**
   * The date and time of the most recent changes to this app monitor's configuration.
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * The list of tag keys and values associated with this app monitor.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The current state of the app monitor.
   *
   * @public
   */
  State?: StateEnum | undefined;

  /**
   * A structure that contains much of the configuration data for the app monitor.
   *
   * @public
   */
  AppMonitorConfiguration?: AppMonitorConfiguration | undefined;

  /**
   * A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs.
   *
   * @public
   */
  DataStorage?: DataStorage | undefined;

  /**
   * Specifies whether this app monitor allows the web client to define and send custom events.
   *
   * For more information about custom events, see [Send custom events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html).
   *
   * @public
   */
  CustomEvents?: CustomEvents | undefined;

  /**
   * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
   *
   * @public
   */
  DeobfuscationConfiguration?: DeobfuscationConfiguration | undefined;

  /**
   * The platform type for this app monitor. Valid values are `Web` for web applications , `Android` for Android applications, and `iOS` for IOS applications.
   *
   * @public
   */
  Platform?: AppMonitorPlatform | undefined;
}

/**
 * A structure that contains information about the RUM app monitor.
 *
 * @public
 */
export interface AppMonitorDetails {
  /**
   * The name of the app monitor.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique ID of the app monitor.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The version of the app monitor.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Use this structure to define one extended metric or custom metric that RUM will send to CloudWatch or CloudWatch Evidently. For more information, see [Custom metrics and extended metrics that you can send to CloudWatch and CloudWatch Evidently](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-and-extended-metrics.html).
 *
 * This structure is validated differently for extended metrics and custom metrics. For extended metrics that are sent to the `AWS/RUM` namespace, the following validations apply:
 *
 * - The `Namespace` parameter must be omitted or set to `AWS/RUM`.
 * - Only certain combinations of values for `Name`, `ValueKey`, and `EventPattern` are valid. In addition to what is displayed in the following list, the `EventPattern` can also include information used by the `DimensionKeys` field.
 *
 *   - If `Name` is `PerformanceNavigationDuration`, then `ValueKey`must be `event_details.duration` and the `EventPattern` must include `\{"event_type":["com.amazon.rum.performance_navigation_event"]\}`
 *   - If `Name` is `PerformanceResourceDuration`, then `ValueKey`must be `event_details.duration` and the `EventPattern` must include `\{"event_type":["com.amazon.rum.performance_resource_event"]\}`
 *   - If `Name` is `NavigationSatisfiedTransaction`, then `ValueKey`must be null and the `EventPattern` must include `\{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": \{ "duration": [\{ "numeric": [">",2000] \}] \} \}`
 *   - If `Name` is `NavigationToleratedTransaction`, then `ValueKey`must be null and the `EventPattern` must include `\{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": \{ "duration": [\{ "numeric": [">=",2000,"<"8000] \}] \} \}`
 *   - If `Name` is `NavigationFrustratedTransaction`, then `ValueKey`must be null and the `EventPattern` must include `\{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": \{ "duration": [\{ "numeric": [">=",8000] \}] \} \}`
 *   - If `Name` is `WebVitalsCumulativeLayoutShift`, then `ValueKey`must be `event_details.value` and the `EventPattern` must include `\{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]\}`
 *   - If `Name` is `WebVitalsFirstInputDelay`, then `ValueKey`must be `event_details.value` and the `EventPattern` must include `\{"event_type":["com.amazon.rum.first_input_delay_event"]\}`
 *   - If `Name` is `WebVitalsLargestContentfulPaint`, then `ValueKey`must be `event_details.value` and the `EventPattern` must include `\{"event_type":["com.amazon.rum.largest_contentful_paint_event"]\}`
 *   - If `Name` is `JsErrorCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type":["com.amazon.rum.js_error_event"]\}`
 *   - If `Name` is `HttpErrorCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type":["com.amazon.rum.http_event"]\}`
 *   - If `Name` is `SessionCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type":["com.amazon.rum.session_start_event"]\}`
 *   - If `Name` is `PageViewCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type":["com.amazon.rum.page_view_event"]\}`
 *   - If `Name` is `Http4xxCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type": ["com.amazon.rum.http_event"],"event_details":\{"response":\{"status":[\{"numeric":[">=",400,"<",500]\}]\}\}\} \}`
 *   - If `Name` is `Http5xxCount`, then `ValueKey`must be null and the `EventPattern` must include `\{"event_type": ["com.amazon.rum.http_event"],"event_details":\{"response":\{"status":[\{"numeric":[">=",500,"<=",599]\}]\}\}\} \}`
 *
 * For custom metrics, the following validation rules apply:
 *
 * - The namespace can't be omitted and can't be `AWS/RUM`. You can use the `AWS/RUM` namespace only for extended metrics.
 * - All dimensions listed in the `DimensionKeys` field must be present in the value of `EventPattern`.
 * - The values that you specify for `ValueKey`, `EventPattern`, and `DimensionKeys` must be fields in RUM events, so all first-level keys in these fields must be one of the keys in the list later in this section.
 * - If you set a value for `EventPattern`, it must be a JSON object.
 * - For every non-empty `event_details`, there must be a non-empty `event_type`.
 * - If `EventPattern` contains an `event_details` field, it must also contain an `event_type`. For every built-in `event_type` that you use, you must use a value for `event_details` that corresponds to that `event_type`. For information about event details that correspond to event types, see [RUM event details](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-datacollected.html#CloudWatch-RUM-datacollected-eventDetails).
 * - In `EventPattern`, any JSON array must contain only one value.
 *
 * Valid key values for first-level keys in the `ValueKey`, `EventPattern`, and `DimensionKeys` fields:
 *
 * - `account_id`
 * - `application_Id`
 * - `application_version`
 * - `application_name`
 * - `batch_id`
 * - `event_details`
 * - `event_id`
 * - `event_interaction`
 * - `event_timestamp`
 * - `event_type`
 * - `event_version`
 * - `log_stream`
 * - `metadata`
 * - `sessionId`
 * - `user_details`
 * - `userId`
 *
 * @public
 */
export interface MetricDefinitionRequest {
  /**
   * The name for the metric that is defined in this structure. For custom metrics, you can specify any name that you like. For extended metrics, valid values are the following:
   *
   * - `PerformanceNavigationDuration`
   * - `PerformanceResourceDuration`
   * - `NavigationSatisfiedTransaction`
   * - `NavigationToleratedTransaction`
   * - `NavigationFrustratedTransaction`
   * - `WebVitalsCumulativeLayoutShift`
   * - `WebVitalsFirstInputDelay`
   * - `WebVitalsLargestContentfulPaint`
   * - `JsErrorCount`
   * - `HttpErrorCount`
   * - `SessionCount`
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The field within the event object that the metric value is sourced from.
   *
   * If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you want to count the number of events that the filter catches.
   *
   * If this metric is sent to CloudWatch Evidently, this field will be passed to Evidently raw. Evidently will handle data extraction from the event.
   *
   * @public
   */
  ValueKey?: string | undefined;

  /**
   * The CloudWatch metric unit to use for this metric. If you omit this field, the metric is recorded with no unit.
   *
   * @public
   */
  UnitLabel?: string | undefined;

  /**
   * Use this field only if you are sending the metric to CloudWatch.
   *
   * This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:
   *
   * - `"metadata.pageId": "PageId"`
   * - `"metadata.browserName": "BrowserName"`
   * - `"metadata.deviceType": "DeviceType"`
   * - `"metadata.osName": "OSName"`
   * - `"metadata.countryCode": "CountryCode"`
   * - `"event_details.fileType": "FileType"`
   *
   * For both extended metrics and custom metrics, all dimensions listed in this field must also be included in `EventPattern`.
   *
   * @public
   */
  DimensionKeys?: Record<string, string> | undefined;

  /**
   * The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
   *
   * When you define extended metrics, the metric definition is not valid if `EventPattern` is omitted.
   *
   * Example event patterns:
   *
   * - `'\{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": \{ "browserName": [ "Chrome", "Safari" ], \} \}'`
   * - `'\{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": \{ "browserName": [ "Chrome", "Firefox" ] \}, "event_details": \{ "duration": [\{ "numeric": [ "<", 2000 ] \}] \} \}'`
   * - `'\{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": \{ "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] \}, "event_details": \{ "duration": [\{ "numeric": [ ">=", 2000, "<", 8000 ] \}] \} \}'`
   *
   * If the metrics destination is `CloudWatch` and the event also matches a value in `DimensionKeys`, then the metric is published with the specified dimensions.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * If this structure is for a custom metric instead of an extended metrics, use this parameter to define the metric namespace for that custom metric. Do not specify this parameter if this structure is for an extended metric.
   *
   * You cannot use any string that starts with `AWS/` for your namespace.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateRumMetricDefinitionsRequest {
  /**
   * The name of the CloudWatch RUM app monitor that is to send the metrics.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * The destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the Amazon Resource Name (ARN) of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
   *
   * This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see [PutRumMetricsDestination](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html).
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * An array of structures which define the metrics that you want to send.
   *
   * @public
   */
  MetricDefinitions: MetricDefinitionRequest[] | undefined;
}

/**
 * A structure that defines one error caused by a [BatchCreateRumMetricsDefinitions](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html) operation.
 *
 * @public
 */
export interface BatchCreateRumMetricDefinitionsError {
  /**
   * The metric definition that caused this error.
   *
   * @public
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message for this metric definition.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * A structure that displays the definition of one extended metric that RUM sends to CloudWatch or CloudWatch Evidently. For more information, see [Additional metrics that you can send to CloudWatch and CloudWatch Evidently](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html).
 *
 * @public
 */
export interface MetricDefinition {
  /**
   * The ID of this metric definition.
   *
   * @public
   */
  MetricDefinitionId: string | undefined;

  /**
   * The name of the metric that is defined in this structure.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The field within the event object that the metric value is sourced from.
   *
   * @public
   */
  ValueKey?: string | undefined;

  /**
   * Use this field only if you are sending this metric to CloudWatch. It defines the CloudWatch metric unit that this metric is measured in.
   *
   * @public
   */
  UnitLabel?: string | undefined;

  /**
   * This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch The value of this field is used only if the metric destination is `CloudWatch`. If the metric destination is `Evidently`, the value of `DimensionKeys` is ignored.
   *
   * @public
   */
  DimensionKeys?: Record<string, string> | undefined;

  /**
   * The pattern that defines the metric. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
   *
   * If the metrics destination is `CloudWatch` and the event also matches a value in `DimensionKeys`, then the metric is published with the specified dimensions.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * If this metric definition is for a custom metric instead of an extended metric, this field displays the metric namespace that the custom metric is published to.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateRumMetricDefinitionsResponse {
  /**
   * An array of error objects, if the operation caused any errors.
   *
   * @public
   */
  Errors: BatchCreateRumMetricDefinitionsError[] | undefined;

  /**
   * An array of structures that define the extended metrics.
   *
   * @public
   */
  MetricDefinitions?: MetricDefinition[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRumMetricDefinitionsRequest {
  /**
   * The name of the CloudWatch RUM app monitor that is sending these metrics.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * Defines the destination where you want to stop sending the specified metrics. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
   *
   * This parameter specifies the ARN of the Evidently experiment that was receiving the metrics that are being deleted.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * An array of structures which define the metrics that you want to stop sending.
   *
   * @public
   */
  MetricDefinitionIds: string[] | undefined;
}

/**
 * A structure that defines one error caused by a [BatchCreateRumMetricsDefinitions](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchDeleteRumMetricsDefinitions.html) operation.
 *
 * @public
 */
export interface BatchDeleteRumMetricDefinitionsError {
  /**
   * The ID of the metric definition that caused this error.
   *
   * @public
   */
  MetricDefinitionId: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message for this metric definition.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRumMetricDefinitionsResponse {
  /**
   * An array of error objects, if the operation caused any errors.
   *
   * @public
   */
  Errors: BatchDeleteRumMetricDefinitionsError[] | undefined;

  /**
   * The IDs of the metric definitions that were deleted.
   *
   * @public
   */
  MetricDefinitionIds?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRumMetricDefinitionsRequest {
  /**
   * The name of the CloudWatch RUM app monitor that is sending the metrics.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * The type of destination that you want to view metrics for. Valid values are `CloudWatch` and `Evidently`.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
   *
   * This parameter specifies the ARN of the Evidently experiment that corresponds to the destination.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.
   *
   * To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by the previous operation to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetRumMetricDefinitionsResponse {
  /**
   * An array of structures that display information about the metrics that are sent by the specified app monitor to the specified destination.
   *
   * @public
   */
  MetricDefinitions?: MetricDefinition[] | undefined;

  /**
   * A token that you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppMonitorRequest {
  /**
   * A name for the app monitor.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The top-level internet domain name for which your application has administrative authority.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * List the domain names for which your application has administrative authority. The `CreateAppMonitor` requires either the domain or the domain list.
   *
   * @public
   */
  DomainList?: string[] | undefined;

  /**
   * Assigns one or more tags (key-value pairs) to the app monitor.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with an app monitor.
   *
   * For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include `AppMonitorConfiguration`, you must set up your own authorization method. For more information, see [Authorize your application to send data to Amazon Web Services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-get-started-authorization.html).
   *
   * If you omit this argument, the sample rate used for RUM is set to 10% of the user sessions.
   *
   * @public
   */
  AppMonitorConfiguration?: AppMonitorConfiguration | undefined;

  /**
   * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.
   *
   * If you omit this parameter, the default is `false`.
   *
   * @public
   */
  CwLogEnabled?: boolean | undefined;

  /**
   * Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`.
   *
   * For more information about custom events, see [Send custom events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html).
   *
   * @public
   */
  CustomEvents?: CustomEvents | undefined;

  /**
   * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
   *
   * @public
   */
  DeobfuscationConfiguration?: DeobfuscationConfiguration | undefined;

  /**
   * The platform type for the app monitor. Valid values are `Web` for web applications, `Android` for Android applications, and `iOS` for IOS applications. If you omit this parameter, the default is `Web`.
   *
   * @public
   */
  Platform?: AppMonitorPlatform | undefined;
}

/**
 * @public
 */
export interface CreateAppMonitorResponse {
  /**
   * The unique ID of the new app monitor.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppMonitorRequest {
  /**
   * The name of the app monitor to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppMonitorResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The app monitor that you want to remove the resource policy from.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies a specific policy revision to delete. Provide a `PolicyRevisionId` to ensure an atomic delete operation. If the revision ID that you provide doesn't match the latest policy revision ID, the request will be rejected with an `InvalidPolicyRevisionIdException` error.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * The revision ID of the policy that was removed, if it had one.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRumMetricsDestinationRequest {
  /**
   * The name of the app monitor that is sending metrics to the destination that you want to delete.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * The type of destination to delete. Valid values are `CloudWatch` and `Evidently`.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that corresponds to the destination to delete.
   *
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRumMetricsDestinationResponse {}

/**
 * @public
 */
export interface GetAppMonitorRequest {
  /**
   * The app monitor to retrieve information for.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAppMonitorResponse {
  /**
   * A structure containing all the configuration information for the app monitor.
   *
   * @public
   */
  AppMonitor?: AppMonitor | undefined;
}

/**
 * A structure that defines a key and values that you can use to filter the results. The only performance events that are returned are those that have values matching the ones that you specify in one of your `QueryFilter` structures.
 *
 * For example, you could specify `Browser` as the `Name` and specify `Chrome,Firefox` as the `Values` to return events generated only from those browsers.
 *
 * Specifying `Invert` as the `Name` works as a "not equal to" filter. For example, specify `Invert` as the `Name` and specify `Chrome` as the value to return all events except events from user sessions with the Chrome browser.
 *
 * @public
 */
export interface QueryFilter {
  /**
   * The name of a key to search for. The filter returns only the events that match the `Name` and `Values` that you specify.
   *
   * Valid values for `Name` are `Browser` | `Device` | `Country` | `Page` | `OS` | `EventType` | `Invert`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The values of the `Name` that are to be be included in the returned results.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * A structure that defines the time range that you want to retrieve results from.
 *
 * @public
 */
export interface TimeRange {
  /**
   * The beginning of the time range to retrieve performance events from.
   *
   * @public
   */
  After: number | undefined;

  /**
   * The end of the time range to retrieve performance events from. If you omit this, the time range extends to the time that this operation is performed.
   *
   * @public
   */
  Before?: number | undefined;
}

/**
 * @public
 */
export interface GetAppMonitorDataRequest {
  /**
   * The name of the app monitor that collected the data that you want to retrieve.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A structure that defines the time range that you want to retrieve results from.
   *
   * @public
   */
  TimeRange: TimeRange | undefined;

  /**
   * An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify.
   *
   * @public
   */
  Filters?: QueryFilter[] | undefined;

  /**
   * The maximum number of results to return in one operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by the previous operation to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAppMonitorDataResponse {
  /**
   * The events that RUM collected that match your request.
   *
   * @public
   */
  Events?: string[] | undefined;

  /**
   * A token that you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The name of the app monitor that is associated with the resource-based policy that you want to view.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The JSON policy document that you requested.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The revision ID information for this version of the policy document that you requested.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListAppMonitorsRequest {
  /**
   * The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by the previous operation to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that includes some data about app monitors and their settings.
 *
 * @public
 */
export interface AppMonitorSummary {
  /**
   * The name of this app monitor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique ID of this app monitor.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The date and time that the app monitor was created.
   *
   * @public
   */
  Created?: string | undefined;

  /**
   * The date and time of the most recent changes to this app monitor's configuration.
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * The current state of this app monitor.
   *
   * @public
   */
  State?: StateEnum | undefined;

  /**
   * The platform type for this app monitor. Valid values are `Web` for web applications, `Android` for Android applications, and `iOS` for IOS applications.
   *
   * @public
   */
  Platform?: AppMonitorPlatform | undefined;
}

/**
 * @public
 */
export interface ListAppMonitorsResponse {
  /**
   * A token that you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of structures that contain information about the returned app monitors.
   *
   * @public
   */
  AppMonitorSummaries?: AppMonitorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRumMetricsDestinationsRequest {
  /**
   * The name of the app monitor associated with the destinations that you want to retrieve.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.
   *
   * To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by the previous operation to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that displays information about one destination that CloudWatch RUM sends extended metrics to.
 *
 * @public
 */
export interface MetricDestinationSummary {
  /**
   * Specifies whether the destination is `CloudWatch` or `Evidently`.
   *
   * @public
   */
  Destination?: MetricDestination | undefined;

  /**
   * If the destination is `Evidently`, this specifies the ARN of the Evidently experiment that receives the metrics.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * This field appears only when the destination is `Evidently`. It specifies the ARN of the IAM role that is used to write to the Evidently experiment that receives the metrics.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRumMetricsDestinationsResponse {
  /**
   * The list of CloudWatch RUM extended metrics destinations associated with the app monitor that you specified.
   *
   * @public
   */
  Destinations?: MetricDestinationSummary[] | undefined;

  /**
   * A token that you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The name of the app monitor that you want to apply this resource-based policy to. To find the names of your app monitors, you can use the [ListAppMonitors](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_ListAppMonitors.html) operation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The JSON to use as the resource policy. The document can be up to 4 KB in size. For more information about the contents and syntax for this policy, see [Using resource-based policies with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-resource-policies.html).
   *
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy.
   *
   * When you assign a policy revision ID, then later requests about that policy will be rejected with an `InvalidPolicyRevisionIdException` error if they don't provide the correct current revision ID.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The JSON policy document that you specified.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The policy revision ID information that you specified.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutRumMetricsDestinationRequest {
  /**
   * The name of the CloudWatch RUM app monitor that will send the metrics.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * Use this parameter only if `Destination` is `Evidently`. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, don't use this parameter.
   *
   * This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
   *
   * If you specify this parameter, you must be signed on to a role that has [PassRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html) permissions attached to it, to allow the role to be passed. The [CloudWatchAmazonCloudWatchRUMFullAccess](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html#managed-policies-cloudwatch-RUM) policy doesn't include `PassRole` permissions.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutRumMetricsDestinationResponse {}

/**
 * @public
 */
export interface UpdateAppMonitorRequest {
  /**
   * The name of the app monitor to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The top-level internet domain name for which your application has administrative authority.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * List the domain names for which your application has administrative authority. The `UpdateAppMonitor` allows either the domain or the domain list.
   *
   * @public
   */
  DomainList?: string[] | undefined;

  /**
   * A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include `AppMonitorConfiguration`, you must set up your own authorization method. For more information, see [Authorize your application to send data to Amazon Web Services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-get-started-authorization.html).
   *
   * @public
   */
  AppMonitorConfiguration?: AppMonitorConfiguration | undefined;

  /**
   * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.
   *
   * @public
   */
  CwLogEnabled?: boolean | undefined;

  /**
   * Specifies whether this app monitor allows the web client to define and send custom events. The default is for custom events to be `DISABLED`.
   *
   * For more information about custom events, see [Send custom events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html).
   *
   * @public
   */
  CustomEvents?: CustomEvents | undefined;

  /**
   * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
   *
   * @public
   */
  DeobfuscationConfiguration?: DeobfuscationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAppMonitorResponse {}

/**
 * @public
 */
export interface UpdateRumMetricDefinitionRequest {
  /**
   * The name of the CloudWatch RUM app monitor that sends these metrics.
   *
   * @public
   */
  AppMonitorName: string | undefined;

  /**
   * The destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
   *
   * @public
   */
  Destination: MetricDestination | undefined;

  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
   *
   * This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see [PutRumMetricsDestination](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html).
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * A structure that contains the new definition that you want to use for this metric.
   *
   * @public
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * The ID of the metric definition to update.
   *
   * @public
   */
  MetricDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRumMetricDefinitionResponse {}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource that you want to see the tags of.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The ARN of the resource that you are viewing.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys and values associated with the resource you specified.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * A structure that contains the information for one performance event that RUM collects from a user session with your application.
 *
 * @public
 */
export interface RumEvent {
  /**
   * A unique ID for this event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The exact time that this event occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The JSON schema that denotes the type of event this is, such as a page load or a new session.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Metadata about this event, which contains a JSON serialization of the identity of the user for this session. The user information comes from information such as the HTTP user-agent request header and document interface.
   *
   * @public
   */
  metadata?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * A string containing details about the event.
   *
   * @public
   */
  details: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * A structure that contains information about the user session that this batch of events was collected from.
 *
 * @public
 */
export interface UserDetails {
  /**
   * The ID of the user for this user session. This ID is generated by RUM and does not include any personally identifiable information about the user.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The session ID that the performance events are from.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface PutRumEventsRequest {
  /**
   * The ID of the app monitor that is sending this data.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A unique identifier for this batch of RUM event data.
   *
   * @public
   */
  BatchId: string | undefined;

  /**
   * A structure that contains information about the app monitor that collected this telemetry information.
   *
   * @public
   */
  AppMonitorDetails: AppMonitorDetails | undefined;

  /**
   * A structure that contains information about the user session that this batch of events was collected from.
   *
   * @public
   */
  UserDetails: UserDetails | undefined;

  /**
   * An array of structures that contain the telemetry event data.
   *
   * @public
   */
  RumEvents: RumEvent[] | undefined;

  /**
   * If the app monitor uses a resource-based policy that requires `PutRumEvents` requests to specify a certain alias, specify that alias here. This alias will be compared to the `rum:alias` context key in the resource-based policy. For more information, see [Using resource-based policies with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-resource-policies.html).
   *
   * @public
   */
  Alias?: string | undefined;
}

/**
 * @public
 */
export interface PutRumEventsResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the CloudWatch RUM resource that you're adding tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * The ARN of the CloudWatch RUM resource that you're removing tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
