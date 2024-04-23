// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { RUMServiceException as __BaseException } from "./RUMServiceException";

/**
 * @public
 * <p>You don't have sufficient permissions to perform this action.</p>
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
 * @enum
 */
export const Telemetry = {
  /**
   * Includes JS error event plugin
   */
  ERRORS: "errors",
  /**
   * Includes X-Ray Xhr and X-Ray Fetch plugin
   */
  HTTP: "http",
  /**
   * Includes navigation, paint, resource and web vital event plugins
   */
  PERFORMANCE: "performance",
} as const;

/**
 * @public
 */
export type Telemetry = (typeof Telemetry)[keyof typeof Telemetry];

/**
 * @public
 * <p>This structure contains much of the configuration data for the app monitor.</p>
 */
export interface AppMonitorConfiguration {
  /**
   * @public
   * <p>The ID of the Amazon Cognito identity pool
   *          that is used to authorize the sending of data to RUM.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>A list of URLs in your website or application to exclude from RUM data collection.</p>
   *          <p>You can't include both <code>ExcludedPages</code> and <code>IncludedPages</code> in the same operation.</p>
   */
  ExcludedPages?: string[];

  /**
   * @public
   * <p>If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. </p>
   *          <p>You can't include both <code>ExcludedPages</code> and <code>IncludedPages</code> in the same operation.</p>
   */
  IncludedPages?: string[];

  /**
   * @public
   * <p>A list of pages in your application that are to be displayed with a "favorite" icon
   *          in the CloudWatch RUM console.</p>
   */
  FavoritePages?: string[];

  /**
   * @public
   * <p>Specifies the portion of user sessions to use for RUM data collection. Choosing a higher portion gives you
   *       more data but also incurs more costs.</p>
   *          <p>The range for this value is 0 to 1 inclusive. Setting this to 1 means that 100% of user sessions are sampled, and setting
   *          it to 0.1 means that 10% of user sessions are sampled.</p>
   *          <p>If you omit this parameter, the default of 0.1 is used, and 10% of sessions will be sampled.</p>
   */
  SessionSampleRate?: number;

  /**
   * @public
   * <p>The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool
   *       that is used to authorize the sending of data to RUM.</p>
   */
  GuestRoleArn?: string;

  /**
   * @public
   * <p>If you set this to <code>true</code>, the RUM web client sets two cookies, a session
   *          cookie and a user cookie. The cookies allow the RUM web client to collect data relating to
   *          the number of users an application has and the behavior of the application across a
   *          sequence of events. Cookies are stored in the top-level domain of the current page.</p>
   */
  AllowCookies?: boolean;

  /**
   * @public
   * <p>An array that lists the types of telemetry data that this app monitor is to collect.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>errors</code> indicates that RUM collects data about unhandled JavaScript errors raised
   *          by your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance</code> indicates that RUM collects performance data about how your application
   *             and its resources are loaded and rendered. This includes Core Web Vitals.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http</code> indicates that RUM collects data about HTTP errors thrown by your application.</p>
   *             </li>
   *          </ul>
   */
  Telemetries?: Telemetry[];

  /**
   * @public
   * <p>If you set this to <code>true</code>, RUM enables X-Ray tracing for
   *          the user sessions that RUM samples. RUM adds an X-Ray trace header to allowed
   *          HTTP requests. It also records an X-Ray segment for allowed HTTP requests.
   *          You can see traces and segments from these user sessions in the X-Ray console
   *          and the CloudWatch ServiceLens console. For more information, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html">What is X-Ray?</a>
   *          </p>
   */
  EnableXRay?: boolean;
}

/**
 * @public
 * @enum
 */
export const CustomEventsStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CustomEventsStatus = (typeof CustomEventsStatus)[keyof typeof CustomEventsStatus];

/**
 * @public
 * <p>A structure that contains information about custom events for this app monitor.</p>
 */
export interface CustomEvents {
  /**
   * @public
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. The default is for custom events to be <code>DISABLED</code>.</p>
   */
  Status?: CustomEventsStatus;
}

/**
 * @public
 * <p>A structure that contains the information about whether the app monitor stores copies of the data
 *       that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.</p>
 */
export interface CwLog {
  /**
   * @public
   * <p>Indicated whether the app monitor stores copies of the data
   *          that RUM collects in CloudWatch Logs.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * @public
   * <p>The name of the log group where the copies are stored.</p>
   */
  CwLogGroup?: string;
}

/**
 * @public
 * <p>A structure that contains information about whether this app monitor stores a copy of
 *          the telemetry data that RUM collects using CloudWatch Logs.</p>
 */
export interface DataStorage {
  /**
   * @public
   * <p>A structure that contains the information about whether the app monitor stores copies of the data
   *          that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.</p>
   */
  CwLog?: CwLog;
}

/**
 * @public
 * @enum
 */
export const StateEnum = {
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type StateEnum = (typeof StateEnum)[keyof typeof StateEnum];

/**
 * @public
 * <p>A RUM app monitor collects telemetry data from your application and sends that
 *          data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
 *          and user behavior.</p>
 */
export interface AppMonitor {
  /**
   * @public
   * <p>The name of the app monitor.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The unique ID of this app monitor.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time that this app monitor was created.</p>
   */
  Created?: string;

  /**
   * @public
   * <p>The date and time of the most recent changes to this app monitor's configuration.</p>
   */
  LastModified?: string;

  /**
   * @public
   * <p>The list of tag keys and values associated with this app monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The current state of the app monitor.</p>
   */
  State?: StateEnum;

  /**
   * @public
   * <p>A structure that contains much of the configuration data for the app monitor.</p>
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;

  /**
   * @public
   * <p>A structure that contains information about whether this app monitor stores a copy of
   *          the telemetry data that RUM collects using CloudWatch Logs.</p>
   */
  DataStorage?: DataStorage;

  /**
   * @public
   * <p>Specifies whether this app monitor allows the web client to define and send
   *       custom events.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
}

/**
 * @public
 * <p>A structure that contains information about the RUM app monitor.</p>
 */
export interface AppMonitorDetails {
  /**
   * @public
   * <p>The name of the app monitor.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique ID of the app monitor.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The version of the app monitor.</p>
   */
  version?: string;
}

/**
 * @public
 * @enum
 */
export const MetricDestination = {
  CloudWatch: "CloudWatch",
  Evidently: "Evidently",
} as const;

/**
 * @public
 */
export type MetricDestination = (typeof MetricDestination)[keyof typeof MetricDestination];

/**
 * @public
 * <p>Use this structure to define one extended metric or custom metric that RUM will send
 *          to CloudWatch or CloudWatch Evidently. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *             Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
 *          <p>This structure is validated differently for extended metrics and custom metrics. For extended metrics
 *       that are sent to the <code>AWS/RUM</code> namespace, the following validations apply:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>Namespace</code> parameter must be omitted or set to <code>AWS/RUM</code>.</p>
 *             </li>
 *             <li>
 *                <p>Only certain combinations of values for <code>Name</code>, <code>ValueKey</code>, and <code>EventPattern</code>
 *          are valid. In addition to what is displayed in the list below, the <code>EventPattern</code> can also include information
 *       used by the <code>DimensionKeys</code> field.</p>
 *                <ul>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>PerformanceNavigationDuration</code>, then
 *                   <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.performance_navigation_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>PerformanceResourceDuration</code>, then
 *                   <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.performance_resource_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>NavigationSatisfiedTransaction</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{
 *                      "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                      "event_details": \{
 *                      "duration": [\{
 *                      "numeric": ["&gt;",2000]
 *                      \}]
 *                      \}
 *                      \}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>NavigationToleratedTransaction</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{
 *                      "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                      "event_details": \{
 *                      "duration": [\{
 *                      "numeric": ["&gt;=",2000,"&lt;"8000]
 *                      \}]
 *                      \}
 *                      \}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>NavigationFrustratedTransaction</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{
 *                      "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                      "event_details": \{
 *                      "duration": [\{
 *                      "numeric": ["&gt;=",8000]
 *                      \}]
 *                      \}
 *                      \}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>WebVitalsCumulativeLayoutShift</code>, then
 *                   <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>WebVitalsFirstInputDelay</code>, then
 *                   <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.first_input_delay_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>WebVitalsLargestContentfulPaint</code>, then
 *                   <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.largest_contentful_paint_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>JsErrorCount</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.js_error_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>HttpErrorCount</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.http_event"]\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If <code>Name</code> is <code>SessionCount</code>, then
 *                   <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *                   must include <code>\{"event_type":["com.amazon.rum.session_start_event"]\}</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For custom metrics, the following validation rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>The namespace can't be omitted and can't be <code>AWS/RUM</code>. You can use the <code>AWS/RUM</code>
 *          namespace only for extended metrics.</p>
 *             </li>
 *             <li>
 *                <p>All dimensions listed in the <code>DimensionKeys</code> field must be present in the value
 *          of <code>EventPattern</code>.</p>
 *             </li>
 *             <li>
 *                <p>The values that you specify for <code>ValueKey</code>, <code>EventPattern</code>, and
 *             <code>DimensionKeys</code> must be fields in RUM events, so all first-level keys in these fields must
 *             be one of the keys in the list later in this section.</p>
 *             </li>
 *             <li>
 *                <p>If you set a value for <code>EventPattern</code>, it must be a JSON object.</p>
 *             </li>
 *             <li>
 *                <p>For every non-empty <code>event_details</code>, there must be a non-empty <code>event_type</code>.</p>
 *             </li>
 *             <li>
 *                <p>If <code>EventPattern</code> contains an <code>event_details</code> field,
 *             it must also contain an <code>event_type</code>. For every built-in <code>event_type</code> that you use, you must use
 *             a value for <code>event_details</code> that corresponds to that
 *         <code>event_type</code>. For information about event details that correspond to event types, see
 *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-datacollected.html#CloudWatch-RUM-datacollected-eventDetails">
 *                RUM event details</a>.</p>
 *             </li>
 *             <li>
 *                <p>In <code>EventPattern</code>, any JSON array must contain only one value.</p>
 *             </li>
 *          </ul>
 *          <p>Valid key values for first-level keys in the <code>ValueKey</code>, <code>EventPattern</code>, and
 *          <code>DimensionKeys</code> fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>account_id</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application_Id</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application_version</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application_name</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>batch_id</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_details</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_id</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_interaction</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_timestamp</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_type</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>event_version</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>log_stream</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>metadata</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>sessionId</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>user_details</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>userId</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface MetricDefinitionRequest {
  /**
   * @public
   * <p>The name for the metric that is defined in this structure. For custom metrics, you can specify
   *          any name that you like. For extended metrics, valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PerformanceNavigationDuration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PerformanceResourceDuration
   *             </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NavigationSatisfiedTransaction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NavigationToleratedTransaction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NavigationFrustratedTransaction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WebVitalsCumulativeLayoutShift</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WebVitalsFirstInputDelay</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WebVitalsLargestContentfulPaint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JsErrorCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HttpErrorCount</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionCount</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The field within the event object that the metric value is sourced from.</p>
   *          <p>If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you
   *          just want to count the number of events that the filter catches. </p>
   *          <p>If this metric is sent to CloudWatch Evidently, this field will be passed to Evidently raw and Evidently
   *          will handle data extraction from the event.</p>
   */
  ValueKey?: string;

  /**
   * @public
   * <p>The CloudWatch metric unit to use for this metric. If you omit this field, the metric
   *       is recorded with no unit.</p>
   */
  UnitLabel?: string;

  /**
   * @public
   * <p>Use this field only if you are sending the metric to CloudWatch.</p>
   *          <p>This field is a map of field paths to dimension names. It defines the dimensions to associate with this
   *          metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"metadata.pageId": "PageId"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"metadata.browserName": "BrowserName"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"metadata.deviceType": "DeviceType"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"metadata.osName": "OSName"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"metadata.countryCode": "CountryCode"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"event_details.fileType": "FileType"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p> For both extended metrics and custom metrics,
   *          all dimensions listed in this field
   *          must also be included in <code>EventPattern</code>.</p>
   */
  DimensionKeys?: Record<string, string>;

  /**
   * @public
   * <p>The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session
   *          against the pattern, and events that match the pattern are sent to the metric destination.</p>
   *          <p>When you define extended metrics, the metric definition is not valid if <code>EventPattern</code>
   *       is omitted.</p>
   *          <p>Example event patterns:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>'\{
   *             "event_type": ["com.amazon.rum.js_error_event"],
   *             "metadata": \{
   *             "browserName": [ "Chrome", "Safari" ], \} \}'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'\{
   *             "event_type": ["com.amazon.rum.performance_navigation_event"],
   *             "metadata": \{
   *             "browserName": [ "Chrome", "Firefox" ]
   *             \},
   *             "event_details": \{
   *             "duration": [\{
   *             "numeric": [ "&lt;", 2000 ]
   *             \}]
   *             \}
   *             \}'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'\{
   *             "event_type": ["com.amazon.rum.performance_navigation_event"],
   *             "metadata": \{
   *             "browserName": [ "Chrome", "Safari" ],
   *             "countryCode": [ "US" ]
   *             \},
   *             "event_details": \{
   *             "duration": [\{
   *             "numeric": [ "&gt;=", 2000, "&lt;", 8000 ]
   *             \}]
   *             \}
   *             \}'</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If the metrics destination'
   *          is <code>CloudWatch</code> and the event
   *          also matches a value in <code>DimensionKeys</code>, then the metric is published with the specified dimensions. </p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>If this structure is for a custom metric instead of an extended metrics, use this parameter to define the
   *          metric namespace for that custom metric. Do not specify this parameter if this structure is for an extended metric.</p>
   *          <p>You cannot use any string that starts with <code>AWS/</code> for your namespace.</p>
   */
  Namespace?: string;
}

/**
 * @public
 */
export interface BatchCreateRumMetricDefinitionsRequest {
  /**
   * @public
   * <p>The name of the CloudWatch RUM app monitor that is to send the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment
   *          that will receive
   *          the metrics and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this
   *          experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>An array of structures which define the metrics that you want to send.</p>
   */
  MetricDefinitions: MetricDefinitionRequest[] | undefined;
}

/**
 * @public
 * <p>A structure that defines one error caused by a
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>
 *       operation.</p>
 */
export interface BatchCreateRumMetricDefinitionsError {
  /**
   * @public
   * <p>The metric definition that caused this error.</p>
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode: string | undefined;

  /**
   * @public
   * <p>The error message for this metric definition.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 * <p>A structure that displays the definition of one extended metric that RUM sends
 *          to CloudWatch or CloudWatch Evidently. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *             Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
 */
export interface MetricDefinition {
  /**
   * @public
   * <p>The ID of this metric definition.</p>
   */
  MetricDefinitionId: string | undefined;

  /**
   * @public
   * <p>The name of the metric that is defined in this structure.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The field within the event object that the metric value is sourced from.</p>
   */
  ValueKey?: string;

  /**
   * @public
   * <p>Use this field only if you are sending this metric to CloudWatch. It defines
   *          the CloudWatch metric unit that this metric is measured in. </p>
   */
  UnitLabel?: string;

  /**
   * @public
   * <p>This field is a map of field paths to dimension names. It defines the dimensions to associate with this
   *          metric in CloudWatch The value of this field is used only if the metric destination is <code>CloudWatch</code>.
   *          If the metric destination is <code>Evidently</code>, the value of <code>DimensionKeys</code> is ignored.</p>
   */
  DimensionKeys?: Record<string, string>;

  /**
   * @public
   * <p>The pattern that defines the metric. RUM checks events that happen in a user's session
   *       against the pattern, and events that match the pattern are sent to the metric destination.</p>
   *          <p>If the metrics destination
   *       is <code>CloudWatch</code> and the event
   *       also matches a value in <code>DimensionKeys</code>, then the metric is published with the specified dimensions. </p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>If this metric definition is for a custom metric instead of an extended metric, this field displays
   *       the metric namespace that the custom metric is published to.</p>
   */
  Namespace?: string;
}

/**
 * @public
 */
export interface BatchCreateRumMetricDefinitionsResponse {
  /**
   * @public
   * <p>An array of error objects, if the operation caused any errors.</p>
   */
  Errors: BatchCreateRumMetricDefinitionsError[] | undefined;

  /**
   * @public
   * <p>An array of structures that define the extended metrics.</p>
   */
  MetricDefinitions?: MetricDefinition[];
}

/**
 * @public
 * <p>This operation attempted to create a resource that already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource that is associated with the error.</p>
   */
  resourceName: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

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
    this.resourceName = opts.resourceName;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Internal service exception.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The value of a parameter in the request caused an error.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Resource not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource that is associated with the error.</p>
   */
  resourceName: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType?: string;

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
    this.resourceName = opts.resourceName;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>This request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The request was throttled because of quota limits.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The value of a parameter in the request caused an error.</p>
   */
  retryAfterSeconds?: number;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>One of the arguments for the request is not valid.</p>
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
export interface BatchDeleteRumMetricDefinitionsRequest {
  /**
   * @public
   * <p>The name of the CloudWatch RUM app monitor that is sending these metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>Defines the destination where you want to stop sending the specified metrics. Valid values are <code>CloudWatch</code> and
   *          <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to
   *          be the destination and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter. </p>
   *          <p>This parameter specifies
   *          the ARN of the Evidently experiment that was receiving the metrics that are being deleted.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>An array of structures which define the metrics that you want to stop sending.</p>
   */
  MetricDefinitionIds: string[] | undefined;
}

/**
 * @public
 * <p>A structure that defines one error caused by a
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchDeleteRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>
 *          operation.</p>
 */
export interface BatchDeleteRumMetricDefinitionsError {
  /**
   * @public
   * <p>The ID of the metric definition that caused this error.</p>
   */
  MetricDefinitionId: string | undefined;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode: string | undefined;

  /**
   * @public
   * <p>The error message for this metric definition.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRumMetricDefinitionsResponse {
  /**
   * @public
   * <p>An array of error objects, if the operation caused any errors.</p>
   */
  Errors: BatchDeleteRumMetricDefinitionsError[] | undefined;

  /**
   * @public
   * <p>The IDs of the metric definitions that were deleted.</p>
   */
  MetricDefinitionIds?: string[];
}

/**
 * @public
 */
export interface BatchGetRumMetricDefinitionsRequest {
  /**
   * @public
   * <p>The name of the CloudWatch RUM app monitor that is sending the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>The type of destination that you want to view metrics for. Valid values are <code>CloudWatch</code>
   *          and <code>Evidently</code>.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter
   *          specifies the ARN of the Evidently experiment that corresponds to the destination.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *          specify is 100.</p>
   *          <p>To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface BatchGetRumMetricDefinitionsResponse {
  /**
   * @public
   * <p>An array of structures that display information about the metrics that are sent by the specified
   *          app monitor to the specified destination.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * @public
   * <p>A token that you can use in a subsequent operation to
   *          retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface CreateAppMonitorRequest {
  /**
   * @public
   * <p>A name for the app monitor.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the app monitor.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *          permissions by granting a user
   *          permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can associate as many as 50 tags with an app monitor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A structure that contains much of the configuration data for the app monitor. If you are using
   *          Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the
   *          Amazon Cognito identity pool to use for authorization. If you don't include <code>AppMonitorConfiguration</code>, you must set up your own
   *          authorization method. For more information, see
   *          <a href="https://docs.aws.amazon.com/monitoring/CloudWatch-RUM-get-started-authorization.html">Authorize your application
   *             to send data to Amazon Web Services</a>.</p>
   *          <p>If you omit this argument, the sample rate used for RUM is set to 10% of the user sessions.</p>
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;

  /**
   * @public
   * <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM
   *          sends a copy of this telemetry data to Amazon CloudWatch Logs
   *          in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur
   *          Amazon CloudWatch Logs charges.</p>
   *          <p>If you omit this parameter, the default is <code>false</code>.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * @public
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. If you omit this parameter, custom events are <code>DISABLED</code>.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
}

/**
 * @public
 */
export interface CreateAppMonitorResponse {
  /**
   * @public
   * <p>The unique ID of the new app monitor.</p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface DeleteAppMonitorRequest {
  /**
   * @public
   * <p>The name of the app monitor to delete.</p>
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
export interface DeleteRumMetricsDestinationRequest {
  /**
   * @public
   * <p>The name of the app monitor that is sending metrics to the destination that you want to delete.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>The type of destination to delete. Valid values are <code>CloudWatch</code> and <code>Evidently</code>.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter. This parameter
   *          specifies the ARN of the Evidently experiment that corresponds to the destination to delete.</p>
   */
  DestinationArn?: string;
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
   * @public
   * <p>The app monitor to retrieve information for.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAppMonitorResponse {
  /**
   * @public
   * <p>A structure containing all the configuration information for the app monitor.</p>
   */
  AppMonitor?: AppMonitor;
}

/**
 * @public
 * <p>A structure that defines a key and values that you can use to filter the results. The
 *          only performance events that are returned are those that have values matching the ones that
 *          you specify in one of your <code>QueryFilter</code> structures.</p>
 *          <p>For example, you could specify <code>Browser</code> as the <code>Name</code>
 *       and specify <code>Chrome,Firefox</code> as the <code>Values</code> to return
 *       events generated only from those browsers.</p>
 *          <p>Specifying <code>Invert</code> as the <code>Name</code>
 *          works as a "not equal to" filter. For example, specify <code>Invert</code> as the <code>Name</code>
 *          and specify <code>Chrome</code> as the value to return all events except events from
 *          user sessions with the Chrome browser.</p>
 */
export interface QueryFilter {
  /**
   * @public
   * <p>The name of a key to search for.
   *       The filter returns only the events that match the <code>Name</code>
   *          and <code>Values</code> that you specify.
   *       </p>
   *          <p>Valid values for <code>Name</code> are <code>Browser</code> | <code>Device</code> | <code>Country</code> |
   *          <code>Page</code> | <code>OS</code> | <code>EventType</code> | <code>Invert</code>
   *          </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The values of the <code>Name</code> that are to be be included in the returned results.</p>
   */
  Values?: string[];
}

/**
 * @public
 * <p>A structure that defines the time range that you want to retrieve results from.</p>
 */
export interface TimeRange {
  /**
   * @public
   * <p>The beginning of the time range to retrieve performance events from.</p>
   */
  After: number | undefined;

  /**
   * @public
   * <p>The end of the time range to retrieve performance events from. If you omit this, the time
   *       range extends to the time that this operation is performed.</p>
   */
  Before?: number;
}

/**
 * @public
 */
export interface GetAppMonitorDataRequest {
  /**
   * @public
   * <p>The name of the app monitor that collected the data that you want to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A structure that defines the time range that you want to retrieve results from.</p>
   */
  TimeRange: TimeRange | undefined;

  /**
   * @public
   * <p>An array of structures that you can use to filter the results to those that match one or
   *          more sets of key-value pairs that you specify.</p>
   */
  Filters?: QueryFilter[];

  /**
   * @public
   * <p>The maximum number of results to return in one operation. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAppMonitorDataResponse {
  /**
   * @public
   * <p>The events that RUM collected that match your request.</p>
   */
  Events?: string[];

  /**
   * @public
   * <p>A token that you can use in a subsequent operation to retrieve the next set of
   *          results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppMonitorsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *       specify is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that includes some data about app monitors and their settings.</p>
 */
export interface AppMonitorSummary {
  /**
   * @public
   * <p>The name of this app monitor.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The unique ID of this app monitor.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time that the app monitor was created.</p>
   */
  Created?: string;

  /**
   * @public
   * <p>The date and time of the most recent changes to this app monitor's configuration.</p>
   */
  LastModified?: string;

  /**
   * @public
   * <p>The current state of this app monitor.</p>
   */
  State?: StateEnum;
}

/**
 * @public
 */
export interface ListAppMonitorsResponse {
  /**
   * @public
   * <p>A token that you can use in a subsequent operation to retrieve the next set of
   *          results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of structures that contain information about the returned app monitors.</p>
   */
  AppMonitorSummaries?: AppMonitorSummary[];
}

/**
 * @public
 */
export interface ListRumMetricsDestinationsRequest {
  /**
   * @public
   * <p>The name of the app monitor associated with the destinations that you want to retrieve.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *          specify is 100.</p>
   *          <p>To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that displays information about one destination that CloudWatch RUM sends
 *       extended metrics to.</p>
 */
export interface MetricDestinationSummary {
  /**
   * @public
   * <p>Specifies whether the destination is <code>CloudWatch</code> or <code>Evidently</code>.</p>
   */
  Destination?: MetricDestination;

  /**
   * @public
   * <p>If the destination is <code>Evidently</code>, this specifies the ARN of the Evidently experiment that receives
   *        the metrics.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>This field appears only when the destination is <code>Evidently</code>. It specifies
   *          the ARN of the IAM role that is used to write to the Evidently experiment that receives the metrics.</p>
   */
  IamRoleArn?: string;
}

/**
 * @public
 */
export interface ListRumMetricsDestinationsResponse {
  /**
   * @public
   * <p>The list of CloudWatch RUM extended metrics destinations associated with the app monitor that
   *       you specified.</p>
   */
  Destinations?: MetricDestinationSummary[];

  /**
   * @public
   * <p>A token that you can use in a subsequent operation to
   *          retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutRumMetricsDestinationRequest {
  /**
   * @public
   * <p>The name of the CloudWatch RUM app monitor that will send the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>Defines the destination to send the metrics to. Valid values are <code>CloudWatch</code> and
   *          <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to
   *          be the destination and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>Use this parameter only if <code>Destination</code> is <code>Evidently</code>. This parameter specifies
   *       the ARN of the Evidently experiment that will receive the extended metrics.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies
   *          the ARN of an IAM role that RUM will assume to write to the Evidently
   *          experiment that you are sending metrics to. This role must have permission to write to that experiment.</p>
   */
  IamRoleArn?: string;
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
   * @public
   * <p>The name of the app monitor to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>A structure that contains much of the configuration data for the app monitor. If you are using
   *          Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the
   *          Amazon Cognito identity pool to use for authorization. If you don't include <code>AppMonitorConfiguration</code>, you must set up your own
   *          authorization method. For more information, see
   *          <a href="https://docs.aws.amazon.com/monitoring/CloudWatch-RUM-get-started-authorization.html">Authorize your application
   *             to send data to Amazon Web Services</a>.</p>
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;

  /**
   * @public
   * <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM
   *          sends a copy of this telemetry data to Amazon CloudWatch Logs
   *          in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur
   *          Amazon CloudWatch Logs charges.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * @public
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. The default is for custom events to be <code>DISABLED</code>.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
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
   * @public
   * <p>The name of the CloudWatch RUM app monitor that sends these metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * @public
   * <p>The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment
   *          that will receive
   *          the metrics and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | undefined;

  /**
   * @public
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this
   *          experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>A structure that contains the new definition that you want to use for this metric.</p>
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * @public
   * <p>The ID of the metric definition to update.</p>
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
   * @public
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The ARN of the resource that you are viewing.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p>A structure that contains the information for one performance event that RUM collects from a user session with your
 *       application.</p>
 */
export interface RumEvent {
  /**
   * @public
   * <p>A unique ID for this event.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The exact time that this event occurred.</p>
   */
  timestamp: Date | undefined;

  /**
   * @public
   * <p>The JSON schema that denotes the type of event this is, such as a page load or a new session.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Metadata about this event, which contains a JSON serialization of the identity of the user for
   *          this session. The user information comes from information such as the HTTP user-agent request header
   *          and document interface.</p>
   */
  metadata?: __LazyJsonString | string;

  /**
   * @public
   * <p>A string containing details about the event.</p>
   */
  details: __LazyJsonString | string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about the user session that this batch of events was collected from.</p>
 */
export interface UserDetails {
  /**
   * @public
   * <p>The ID of the user for this user session. This ID is generated by RUM and does not include any
   *       personally identifiable information about the user.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The session ID that the performance events are from.</p>
   */
  sessionId?: string;
}

/**
 * @public
 */
export interface PutRumEventsRequest {
  /**
   * @public
   * <p>The ID of the app monitor that is sending this data.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A unique identifier for this batch of RUM event data.</p>
   */
  BatchId: string | undefined;

  /**
   * @public
   * <p>A structure that contains information about the app monitor that collected this telemetry information.</p>
   */
  AppMonitorDetails: AppMonitorDetails | undefined;

  /**
   * @public
   * <p>A structure that contains information about the user session that this batch of events was collected from.</p>
   */
  UserDetails: UserDetails | undefined;

  /**
   * @public
   * <p>An array of structures that contain the telemetry event data.</p>
   */
  RumEvents: RumEvent[] | undefined;
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
   * @public
   * <p>The ARN of the CloudWatch RUM resource that you're adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * @public
   * <p>The ARN of the CloudWatch RUM resource that you're removing tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
