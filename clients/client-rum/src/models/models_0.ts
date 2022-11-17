// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { RUMServiceException as __BaseException } from "./RUMServiceException";

/**
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

export enum Telemetry {
  /**
   * Includes JS error event plugin
   */
  ERRORS = "errors",
  /**
   * Includes X-Ray Xhr and X-Ray Fetch plugin
   */
  HTTP = "http",
  /**
   * Includes navigation, paint, resource and web vital event plugins
   */
  PERFORMANCE = "performance",
}

/**
 * <p>This structure contains much of the configuration data for the app monitor.</p>
 */
export interface AppMonitorConfiguration {
  /**
   * <p>The ID of the Amazon Cognito identity pool
   *          that is used to authorize the sending of data to RUM.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>A list of URLs in your website or application to exclude from RUM data collection.</p>
   *          <p>You can't include both <code>ExcludedPages</code> and <code>IncludedPages</code> in the same operation.</p>
   */
  ExcludedPages?: string[];

  /**
   * <p>If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. </p>
   *          <p>You can't include both <code>ExcludedPages</code> and <code>IncludedPages</code> in the same operation.</p>
   */
  IncludedPages?: string[];

  /**
   * <p>A list of pages in your application that are to be displayed with a "favorite" icon
   *          in the CloudWatch RUM console.</p>
   */
  FavoritePages?: string[];

  /**
   * <p>Specifies the portion of user sessions to use for RUM data collection. Choosing a higher portion gives you
   *       more data but also incurs more costs.</p>
   *          <p>The range for this value is 0 to 1 inclusive. Setting this to 1 means that 100% of user sessions are sampled, and setting
   *          it to 0.1 means that 10% of user sessions are sampled.</p>
   *          <p>If you omit this parameter, the default of 0.1 is used, and 10% of sessions will be sampled.</p>
   */
  SessionSampleRate?: number;

  /**
   * <p>The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool
   *       that is used to authorize the sending of data to RUM.</p>
   */
  GuestRoleArn?: string;

  /**
   * <p>If you set this to <code>true</code>, the RUM web client sets two cookies, a session
   *          cookie and a user cookie. The cookies allow the RUM web client to collect data relating to
   *          the number of users an application has and the behavior of the application across a
   *          sequence of events. Cookies are stored in the top-level domain of the current page.</p>
   */
  AllowCookies?: boolean;

  /**
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
  Telemetries?: (Telemetry | string)[];

  /**
   * <p>If you set this to <code>true</code>, RUM enables X-Ray tracing for
   *          the user sessions that RUM samples. RUM adds an X-Ray trace header to allowed
   *          HTTP requests. It also records an X-Ray segment for allowed HTTP requests.
   *          You can see traces and segments from these user sessions in the X-Ray console
   *          and the CloudWatch ServiceLens console. For more information, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html">What is X-Ray?</a>
   *          </p>
   */
  EnableXRay?: boolean;
}

export enum CustomEventsStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>A structure that contains information about custom events for this app monitor.</p>
 */
export interface CustomEvents {
  /**
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. The default is for custom events to be <code>DISABLED</code>.</p>
   */
  Status?: CustomEventsStatus | string;
}

/**
 * <p>A structure that contains the information about whether the app monitor stores copies of the data
 *       that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.</p>
 */
export interface CwLog {
  /**
   * <p>Indicated whether the app monitor stores copies of the data
   *          that RUM collects in CloudWatch Logs.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * <p>The name of the log group where the copies are stored.</p>
   */
  CwLogGroup?: string;
}

/**
 * <p>A structure that contains information about whether this app monitor stores a copy of
 *          the telemetry data that RUM collects using CloudWatch Logs.</p>
 */
export interface DataStorage {
  /**
   * <p>A structure that contains the information about whether the app monitor stores copies of the data
   *          that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group.</p>
   */
  CwLog?: CwLog;
}

export enum StateEnum {
  ACTIVE = "ACTIVE",
  CREATED = "CREATED",
  DELETING = "DELETING",
}

/**
 * <p>A RUM app monitor collects telemetry data from your application and sends that
 *          data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
 *          and user behavior.</p>
 */
export interface AppMonitor {
  /**
   * <p>The name of the app monitor.</p>
   */
  Name?: string;

  /**
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain?: string;

  /**
   * <p>The unique ID of this app monitor.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that this app monitor was created.</p>
   */
  Created?: string;

  /**
   * <p>The date and time of the most recent changes to this app monitor's configuration.</p>
   */
  LastModified?: string;

  /**
   * <p>The list of tag keys and values associated with this app monitor.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The current state of the app monitor.</p>
   */
  State?: StateEnum | string;

  /**
   * <p>A structure that contains much of the configuration data for the app monitor.</p>
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;

  /**
   * <p>A structure that contains information about whether this app monitor stores a copy of
   *          the telemetry data that RUM collects using CloudWatch Logs.</p>
   */
  DataStorage?: DataStorage;

  /**
   * <p>Specifies whether this app monitor allows the web client to define and send
   *       custom events.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
}

/**
 * <p>A structure that contains information about the RUM app monitor.</p>
 */
export interface AppMonitorDetails {
  /**
   * <p>The name of the app monitor.</p>
   */
  name?: string;

  /**
   * <p>The unique ID of the app monitor.</p>
   */
  id?: string;

  /**
   * <p>The version of the app monitor.</p>
   */
  version?: string;
}

export enum MetricDestination {
  CloudWatch = "CloudWatch",
  Evidently = "Evidently",
}

/**
 * <p>Use this structure to define one extended metric that RUM will send
 *          to CloudWatch or CloudWatch Evidently. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *             Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
 *          <p>Only certain combinations of values for <code>Name</code>, <code>ValueKey</code>, and <code>EventPattern</code>
 *          are valid. In addition to what is displayed in the list below, the <code>EventPattern</code> can also include information
 *       used by the <code>DimensionKeys</code> field.</p>
 *          <ul>
 *             <li>
 *                <p>If <code>Name</code> is <code>PerformanceNavigationDuration</code>, then
 *       <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code>
 *          must include <code>{"event_type":["com.amazon.rum.performance_navigation_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>PerformanceResourceDuration</code>, then
 *             <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.performance_resource_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>NavigationSatisfiedTransaction</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{
 *                "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                "event_details": {
 *                "duration": [{
 *                "numeric": ["&gt;",2000]
 *                }]
 *                }
 *                }</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>NavigationToleratedTransaction</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{
 *                "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                "event_details": {
 *                "duration": [{
 *                "numeric": ["&gt;=",2000,"&lt;"8000]
 *                }]
 *                }
 *                }</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>NavigationFrustratedTransaction</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{
 *                "event_type": ["com.amazon.rum.performance_navigation_event"],
 *                "event_details": {
 *                "duration": [{
 *                "numeric": ["&gt;=",8000]
 *                }]
 *                }
 *                }</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>WebVitalsCumulativeLayoutShift</code>, then
 *             <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>WebVitalsFirstInputDelay</code>, then
 *             <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.first_input_delay_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>WebVitalsLargestContentfulPaint</code>, then
 *             <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.largest_contentful_paint_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>JsErrorCount</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.js_error_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>HttpErrorCount</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.http_event"]}</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If <code>Name</code> is <code>SessionCount</code>, then
 *             <code>ValueKey</code>must be null and the <code>EventPattern</code>
 *             must include <code>{"event_type":["com.amazon.rum.session_start_event"]}</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface MetricDefinitionRequest {
  /**
   * <p>The name for the metric that is defined in this structure. Valid values are the following:</p>
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
   * <p>The field within the event object that the metric value is sourced from.</p>
   *          <p>If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you
   *          just want to count the number of events that the filter catches. </p>
   *          <p>If this metric is sent to CloudWatch Evidently, this field will be passed to Evidently raw and Evidently
   *          will handle data extraction from the event.</p>
   */
  ValueKey?: string;

  /**
   * <p>The CloudWatch metric unit to use for this metric. If you omit this field, the metric
   *       is recorded with no unit.</p>
   */
  UnitLabel?: string;

  /**
   * <p>Use this field only if you are sending the metric to CloudWatch.</p>
   *          <p>This field is a map of field paths to dimension names. It defines the dimensions to associate with this
   *          metric in CloudWatch. Valid values for the entries in this field are the following:</p>
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
   *          <p> All dimensions listed in this field
   *          must also be included in <code>EventPattern</code>.</p>
   */
  DimensionKeys?: Record<string, string>;

  /**
   * <p>The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session
   *          against the pattern, and events that match the pattern are sent to the metric destination.</p>
   *          <p>When you define extended metrics, the metric definition is not valid if <code>EventPattern</code>
   *       is omitted.</p>
   *          <p>Example event patterns:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>'{
   *             "event_type": ["com.amazon.rum.js_error_event"],
   *             "metadata": {
   *             "browserName": [ "Chrome", "Safari" ], } }'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'{
   *             "event_type": ["com.amazon.rum.performance_navigation_event"],
   *             "metadata": {
   *             "browserName": [ "Chrome", "Firefox" ]
   *             },
   *             "event_details": {
   *             "duration": [{
   *             "numeric": [ "&lt;", 2000 ]
   *             }]
   *             }
   *             }'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'{
   *             "event_type": ["com.amazon.rum.performance_navigation_event"],
   *             "metadata": {
   *             "browserName": [ "Chrome", "Safari" ],
   *             "countryCode": [ "US" ]
   *             },
   *             "event_details": {
   *             "duration": [{
   *             "numeric": [ "&gt;=", 2000, "&lt;", 8000 ]
   *             }]
   *             }
   *             }'</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If the metrics destination'
   *          is <code>CloudWatch</code> and the event
   *          also matches a value in <code>DimensionKeys</code>, then the metric is published with the specified dimensions. </p>
   */
  EventPattern?: string;
}

export interface BatchCreateRumMetricDefinitionsRequest {
  /**
   * <p>The name of the CloudWatch RUM app monitor that is to send the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment
   *          that will receive
   *          the metrics and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this
   *          experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
   */
  DestinationArn?: string;

  /**
   * <p>An array of structures which define the metrics that you want to send.</p>
   */
  MetricDefinitions: MetricDefinitionRequest[] | undefined;
}

/**
 * <p>A structure that defines one error caused by a
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>
 *       operation.</p>
 */
export interface BatchCreateRumMetricDefinitionsError {
  /**
   * <p>The metric definition that caused this error.</p>
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * <p>The error code.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message for this metric definition.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * <p>A structure that displays the definition of one extended metric that RUM sends
 *          to CloudWatch or CloudWatch Evidently. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *             Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
 */
export interface MetricDefinition {
  /**
   * <p>The ID of this metric definition.</p>
   */
  MetricDefinitionId: string | undefined;

  /**
   * <p>The name of the metric that is defined in this structure.</p>
   */
  Name: string | undefined;

  /**
   * <p>The field within the event object that the metric value is sourced from.</p>
   */
  ValueKey?: string;

  /**
   * <p>Use this field only if you are sending this metric to CloudWatch. It defines
   *          the CloudWatch metric unit that this metric is measured in. </p>
   */
  UnitLabel?: string;

  /**
   * <p>This field is a map of field paths to dimension names. It defines the dimensions to associate with this
   *          metric in CloudWatch The value of this field is used only if the metric destination is <code>CloudWatch</code>.
   *          If the metric destination is <code>Evidently</code>, the value of <code>DimensionKeys</code> is ignored.</p>
   */
  DimensionKeys?: Record<string, string>;

  /**
   * <p>The pattern that defines the metric. RUM checks events that happen in a user's session
   *       against the pattern, and events that match the pattern are sent to the metric destination.</p>
   *          <p>If the metrics destination
   *       is <code>CloudWatch</code> and the event
   *       also matches a value in <code>DimensionKeys</code>, then the metric is published with the specified dimensions. </p>
   */
  EventPattern?: string;
}

export interface BatchCreateRumMetricDefinitionsResponse {
  /**
   * <p>An array of error objects, if the operation caused any errors.</p>
   */
  Errors: BatchCreateRumMetricDefinitionsError[] | undefined;

  /**
   * <p>An array of structures that define the extended metrics.</p>
   */
  MetricDefinitions?: MetricDefinition[];
}

/**
 * <p>This operation attempted to create a resource that already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource that is associated with the error.</p>
   */
  resourceName: string | undefined;

  /**
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
 * <p>Internal service exception.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
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
 * <p>Resource not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource that is associated with the error.</p>
   */
  resourceName: string | undefined;

  /**
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
 * <p>The request was throttled because of quota limits.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
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

export interface BatchDeleteRumMetricDefinitionsRequest {
  /**
   * <p>The name of the CloudWatch RUM app monitor that is sending these metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>Defines the destination where you want to stop sending the specified metrics. Valid values are <code>CloudWatch</code> and
   *          <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to
   *          be the destination and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter. </p>
   *          <p>This parameter specifies
   *          the ARN of the Evidently experiment that was receiving the metrics that are being deleted.</p>
   */
  DestinationArn?: string;

  /**
   * <p>An array of structures which define the metrics that you want to stop sending.</p>
   */
  MetricDefinitionIds: string[] | undefined;
}

/**
 * <p>A structure that defines one error caused by a
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchDeleteRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>
 *          operation.</p>
 */
export interface BatchDeleteRumMetricDefinitionsError {
  /**
   * <p>The ID of the metric definition that caused this error.</p>
   */
  MetricDefinitionId: string | undefined;

  /**
   * <p>The error code.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message for this metric definition.</p>
   */
  ErrorMessage: string | undefined;
}

export interface BatchDeleteRumMetricDefinitionsResponse {
  /**
   * <p>An array of error objects, if the operation caused any errors.</p>
   */
  Errors: BatchDeleteRumMetricDefinitionsError[] | undefined;

  /**
   * <p>The IDs of the metric definitions that were deleted.</p>
   */
  MetricDefinitionIds?: string[];
}

export interface BatchGetRumMetricDefinitionsRequest {
  /**
   * <p>The name of the CloudWatch RUM app monitor that is sending the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>The type of destination that you want to view metrics for. Valid values are <code>CloudWatch</code>
   *          and <code>Evidently</code>.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter
   *          specifies the ARN of the Evidently experiment that corresponds to the destination.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *          specify is 100.</p>
   *          <p>To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface BatchGetRumMetricDefinitionsResponse {
  /**
   * <p>An array of structures that display information about the metrics that are sent by the specified
   *          app monitor to the specified destination.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>A token that you can use in a subsequent operation to
   *          retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface CreateAppMonitorRequest {
  /**
   * <p>A name for the app monitor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain: string | undefined;

  /**
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
   * <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM
   *          sends a copy of this telemetry data to Amazon CloudWatch Logs
   *          in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur
   *          Amazon CloudWatch Logs charges.</p>
   *          <p>If you omit this parameter, the default is <code>false</code>.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. If you omit this parameter, custom events are <code>DISABLED</code>.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
}

export interface CreateAppMonitorResponse {
  /**
   * <p>The unique ID of the new app monitor.</p>
   */
  Id?: string;
}

export interface DeleteAppMonitorRequest {
  /**
   * <p>The name of the app monitor to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteAppMonitorResponse {}

export interface DeleteRumMetricsDestinationRequest {
  /**
   * <p>The name of the app monitor that is sending metrics to the destination that you want to delete.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>The type of destination to delete. Valid values are <code>CloudWatch</code> and <code>Evidently</code>.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter. This parameter
   *          specifies the ARN of the Evidently experiment that corresponds to the destination to delete.</p>
   */
  DestinationArn?: string;
}

export interface DeleteRumMetricsDestinationResponse {}

export interface GetAppMonitorRequest {
  /**
   * <p>The app monitor to retrieve information for.</p>
   */
  Name: string | undefined;
}

export interface GetAppMonitorResponse {
  /**
   * <p>A structure containing all the configuration information for the app monitor.</p>
   */
  AppMonitor?: AppMonitor;
}

/**
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
   * <p>The values of the <code>Name</code> that are to be be included in the returned results.</p>
   */
  Values?: string[];
}

/**
 * <p>A structure that defines the time range that you want to retrieve results from.</p>
 */
export interface TimeRange {
  /**
   * <p>The beginning of the time range to retrieve performance events from.</p>
   */
  After: number | undefined;

  /**
   * <p>The end of the time range to retrieve performance events from. If you omit this, the time
   *       range extends to the time that this operation is performed.</p>
   */
  Before?: number;
}

export interface GetAppMonitorDataRequest {
  /**
   * <p>The name of the app monitor that collected the data that you want to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>A structure that defines the time range that you want to retrieve results from.</p>
   */
  TimeRange: TimeRange | undefined;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *          more sets of key-value pairs that you specify.</p>
   */
  Filters?: QueryFilter[];

  /**
   * <p>The maximum number of results to return in one operation. </p>
   */
  MaxResults?: number;

  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetAppMonitorDataResponse {
  /**
   * <p>The events that RUM collected that match your request.</p>
   */
  Events?: string[];

  /**
   * <p>A token that you can use in a subsequent operation to retrieve the next set of
   *          results.</p>
   */
  NextToken?: string;
}

export interface ListAppMonitorsRequest {
  /**
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *       specify is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>A structure that includes some data about app monitors and their settings.</p>
 */
export interface AppMonitorSummary {
  /**
   * <p>The name of this app monitor.</p>
   */
  Name?: string;

  /**
   * <p>The unique ID of this app monitor.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the app monitor was created.</p>
   */
  Created?: string;

  /**
   * <p>The date and time of the most recent changes to this app monitor's configuration.</p>
   */
  LastModified?: string;

  /**
   * <p>The current state of this app monitor.</p>
   */
  State?: StateEnum | string;
}

export interface ListAppMonitorsResponse {
  /**
   * <p>A token that you can use in a subsequent operation to retrieve the next set of
   *          results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of structures that contain information about the returned app monitors.</p>
   */
  AppMonitorSummaries?: AppMonitorSummary[];
}

export interface ListRumMetricsDestinationsRequest {
  /**
   * <p>The name of the app monitor associated with the destinations that you want to retrieve.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can
   *          specify is 100.</p>
   *          <p>To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>A structure that displays information about one destination that CloudWatch RUM sends
 *       extended metrics to.</p>
 */
export interface MetricDestinationSummary {
  /**
   * <p>Specifies whether the destination is <code>CloudWatch</code> or <code>Evidently</code>.</p>
   */
  Destination?: MetricDestination | string;

  /**
   * <p>If the destination is <code>Evidently</code>, this specifies the ARN of the Evidently experiment that receives
   *        the metrics.</p>
   */
  DestinationArn?: string;

  /**
   * <p>This field appears only when the destination is <code>Evidently</code>. It specifies
   *          the ARN of the IAM role that is used to write to the Evidently experiment that receives the metrics.</p>
   */
  IamRoleArn?: string;
}

export interface ListRumMetricsDestinationsResponse {
  /**
   * <p>The list of CloudWatch RUM extended metrics destinations associated with the app monitor that
   *       you specified.</p>
   */
  Destinations?: MetricDestinationSummary[];

  /**
   * <p>A token that you can use in a subsequent operation to
   *          retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface PutRumMetricsDestinationRequest {
  /**
   * <p>The name of the CloudWatch RUM app monitor that will send the metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>Defines the destination to send the metrics to. Valid values are <code>CloudWatch</code> and
   *          <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to
   *          be the destination and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>Use this parameter only if <code>Destination</code> is <code>Evidently</code>. This parameter specifies
   *       the ARN of the Evidently experiment that will receive the extended metrics.</p>
   */
  DestinationArn?: string;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies
   *          the ARN of an IAM role that RUM will assume to write to the Evidently
   *          experiment that you are sending metrics to. This role must have permission to write to that experiment.</p>
   */
  IamRoleArn?: string;
}

export interface PutRumMetricsDestinationResponse {}

export interface UpdateAppMonitorRequest {
  /**
   * <p>The name of the app monitor to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The top-level internet domain name for which your application has administrative authority.</p>
   */
  Domain?: string;

  /**
   * <p>A structure that contains much of the configuration data for the app monitor. If you are using
   *          Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the
   *          Amazon Cognito identity pool to use for authorization. If you don't include <code>AppMonitorConfiguration</code>, you must set up your own
   *          authorization method. For more information, see
   *          <a href="https://docs.aws.amazon.com/monitoring/CloudWatch-RUM-get-started-authorization.html">Authorize your application
   *             to send data to Amazon Web Services</a>.</p>
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;

  /**
   * <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM
   *          sends a copy of this telemetry data to Amazon CloudWatch Logs
   *          in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur
   *          Amazon CloudWatch Logs charges.</p>
   */
  CwLogEnabled?: boolean;

  /**
   * <p>Specifies whether this app monitor allows the web client to define and send
   *          custom events. The default is for custom events to be <code>DISABLED</code>.</p>
   *          <p>For more information about custom events, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html">Send custom events</a>.</p>
   */
  CustomEvents?: CustomEvents;
}

export interface UpdateAppMonitorResponse {}

export interface UpdateRumMetricDefinitionRequest {
  /**
   * <p>The name of the CloudWatch RUM app monitor that sends these metrics.</p>
   */
  AppMonitorName: string | undefined;

  /**
   * <p>The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If
   *          you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment
   *          that will receive
   *          the metrics and an IAM role that has permission to write to the experiment.</p>
   */
  Destination: MetricDestination | string | undefined;

  /**
   * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is
   *          <code>CloudWatch</code>, do not use this parameter.</p>
   *          <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this
   *          experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
   */
  DestinationArn?: string;

  /**
   * <p>A structure that contains the new definition that you want to use for this metric.</p>
   */
  MetricDefinition: MetricDefinitionRequest | undefined;

  /**
   * <p>The ID of the metric definition to update.</p>
   */
  MetricDefinitionId: string | undefined;
}

export interface UpdateRumMetricDefinitionResponse {}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The ARN of the resource that you are viewing.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * <p>A structure that contains the information for one performance event that RUM collects from a user session with your
 *       application.</p>
 */
export interface RumEvent {
  /**
   * <p>A unique ID for this event.</p>
   */
  id: string | undefined;

  /**
   * <p>The exact time that this event occurred.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>The JSON schema that denotes the type of event this is, such as a page load or a new session.</p>
   */
  type: string | undefined;

  /**
   * <p>Metadata about this event, which contains a JSON serialization of the identity of the user for
   *          this session. The user information comes from information such as the HTTP user-agent request header
   *          and document interface.</p>
   */
  metadata?: __LazyJsonString | string;

  /**
   * <p>A string containing details about the event.</p>
   */
  details: __LazyJsonString | string | undefined;
}

/**
 * <p>A structure that contains information about the user session that this batch of events was collected from.</p>
 */
export interface UserDetails {
  /**
   * <p>The ID of the user for this user session. This ID is generated by RUM and does not include any
   *       personally identifiable information about the user.</p>
   */
  userId?: string;

  /**
   * <p>The session ID that the performance events are from.</p>
   */
  sessionId?: string;
}

export interface PutRumEventsRequest {
  /**
   * <p>The ID of the app monitor that is sending this data.</p>
   */
  Id: string | undefined;

  /**
   * <p>A unique identifier for this batch of RUM event data.</p>
   */
  BatchId: string | undefined;

  /**
   * <p>A structure that contains information about the app monitor that collected this telemetry information.</p>
   */
  AppMonitorDetails: AppMonitorDetails | undefined;

  /**
   * <p>A structure that contains information about the user session that this batch of events was collected from.</p>
   */
  UserDetails: UserDetails | undefined;

  /**
   * <p>An array of structures that contain the telemetry event data.</p>
   */
  RumEvents: RumEvent[] | undefined;
}

export interface PutRumEventsResponse {}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch RUM resource that you're adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch RUM resource that you're removing tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AppMonitorConfigurationFilterSensitiveLog = (obj: AppMonitorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomEventsFilterSensitiveLog = (obj: CustomEvents): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CwLogFilterSensitiveLog = (obj: CwLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataStorageFilterSensitiveLog = (obj: DataStorage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppMonitorFilterSensitiveLog = (obj: AppMonitor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppMonitorDetailsFilterSensitiveLog = (obj: AppMonitorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDefinitionRequestFilterSensitiveLog = (obj: MetricDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateRumMetricDefinitionsRequestFilterSensitiveLog = (
  obj: BatchCreateRumMetricDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateRumMetricDefinitionsErrorFilterSensitiveLog = (
  obj: BatchCreateRumMetricDefinitionsError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDefinitionFilterSensitiveLog = (obj: MetricDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateRumMetricDefinitionsResponseFilterSensitiveLog = (
  obj: BatchCreateRumMetricDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteRumMetricDefinitionsRequestFilterSensitiveLog = (
  obj: BatchDeleteRumMetricDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteRumMetricDefinitionsErrorFilterSensitiveLog = (
  obj: BatchDeleteRumMetricDefinitionsError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteRumMetricDefinitionsResponseFilterSensitiveLog = (
  obj: BatchDeleteRumMetricDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRumMetricDefinitionsRequestFilterSensitiveLog = (
  obj: BatchGetRumMetricDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRumMetricDefinitionsResponseFilterSensitiveLog = (
  obj: BatchGetRumMetricDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppMonitorRequestFilterSensitiveLog = (obj: CreateAppMonitorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppMonitorResponseFilterSensitiveLog = (obj: CreateAppMonitorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppMonitorRequestFilterSensitiveLog = (obj: DeleteAppMonitorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppMonitorResponseFilterSensitiveLog = (obj: DeleteAppMonitorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRumMetricsDestinationRequestFilterSensitiveLog = (obj: DeleteRumMetricsDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRumMetricsDestinationResponseFilterSensitiveLog = (
  obj: DeleteRumMetricsDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppMonitorRequestFilterSensitiveLog = (obj: GetAppMonitorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppMonitorResponseFilterSensitiveLog = (obj: GetAppMonitorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryFilterFilterSensitiveLog = (obj: QueryFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeRangeFilterSensitiveLog = (obj: TimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppMonitorDataRequestFilterSensitiveLog = (obj: GetAppMonitorDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppMonitorDataResponseFilterSensitiveLog = (obj: GetAppMonitorDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppMonitorsRequestFilterSensitiveLog = (obj: ListAppMonitorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppMonitorSummaryFilterSensitiveLog = (obj: AppMonitorSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppMonitorsResponseFilterSensitiveLog = (obj: ListAppMonitorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRumMetricsDestinationsRequestFilterSensitiveLog = (obj: ListRumMetricsDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDestinationSummaryFilterSensitiveLog = (obj: MetricDestinationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRumMetricsDestinationsResponseFilterSensitiveLog = (obj: ListRumMetricsDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRumMetricsDestinationRequestFilterSensitiveLog = (obj: PutRumMetricsDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRumMetricsDestinationResponseFilterSensitiveLog = (obj: PutRumMetricsDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppMonitorRequestFilterSensitiveLog = (obj: UpdateAppMonitorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppMonitorResponseFilterSensitiveLog = (obj: UpdateAppMonitorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRumMetricDefinitionRequestFilterSensitiveLog = (obj: UpdateRumMetricDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRumMetricDefinitionResponseFilterSensitiveLog = (obj: UpdateRumMetricDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RumEventFilterSensitiveLog = (obj: RumEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDetailsFilterSensitiveLog = (obj: UserDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRumEventsRequestFilterSensitiveLog = (obj: PutRumEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRumEventsResponseFilterSensitiveLog = (obj: PutRumEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
