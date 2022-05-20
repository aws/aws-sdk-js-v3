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
   *
   *          <p>You can't include both <code>ExcludedPages</code> and <code>IncludedPages</code> in the same operation.</p>
   */
  IncludedPages?: string[];

  /**
   * <p>A list of pages in the CloudWatch RUM console that are to be displayed with a "favorite" icon.</p>
   */
  FavoritePages?: string[];

  /**
   * <p>Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you
   *       more data but also incurs more costs.</p>
   *          <p>The number you specify is the percentage of user sessions that will be used.</p>
   *          <p>If you omit this parameter, the default of 10 is used.</p>
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

export namespace AppMonitorConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppMonitorConfiguration): any => ({
    ...obj,
  });
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

export namespace CwLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CwLog): any => ({
    ...obj,
  });
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

export namespace DataStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataStorage): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

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
}

export namespace AppMonitor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppMonitor): any => ({
    ...obj,
  });
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

export namespace AppMonitorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppMonitorDetails): any => ({
    ...obj,
  });
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
   *
   *          <p>You can associate as many as 50 tags with an app monitor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: { [key: string]: string };

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
}

export namespace CreateAppMonitorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppMonitorRequest): any => ({
    ...obj,
  });
}

export interface CreateAppMonitorResponse {
  /**
   * <p>The unique ID of the new app monitor.</p>
   */
  Id?: string;
}

export namespace CreateAppMonitorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppMonitorResponse): any => ({
    ...obj,
  });
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

export interface DeleteAppMonitorRequest {
  /**
   * <p>The name of the app monitor to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteAppMonitorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppMonitorRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppMonitorResponse {}

export namespace DeleteAppMonitorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppMonitorResponse): any => ({
    ...obj,
  });
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

export interface GetAppMonitorRequest {
  /**
   * <p>The app monitor to retrieve information for.</p>
   */
  Name: string | undefined;
}

export namespace GetAppMonitorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppMonitorRequest): any => ({
    ...obj,
  });
}

export interface GetAppMonitorResponse {
  /**
   * <p>A structure containing all the configuration information for the app monitor.</p>
   */
  AppMonitor?: AppMonitor;
}

export namespace GetAppMonitorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppMonitorResponse): any => ({
    ...obj,
  });
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

export namespace QueryFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryFilter): any => ({
    ...obj,
  });
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

export namespace TimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeRange): any => ({
    ...obj,
  });
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

export namespace GetAppMonitorDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppMonitorDataRequest): any => ({
    ...obj,
  });
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

export namespace GetAppMonitorDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppMonitorDataResponse): any => ({
    ...obj,
  });
}

export interface ListAppMonitorsRequest {
  /**
   * <p>The maximum number of results to return in one operation. </p>
   */
  MaxResults?: number;

  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAppMonitorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppMonitorsRequest): any => ({
    ...obj,
  });
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

export namespace AppMonitorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppMonitorSummary): any => ({
    ...obj,
  });
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

export namespace ListAppMonitorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppMonitorsResponse): any => ({
    ...obj,
  });
}

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
}

export namespace UpdateAppMonitorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppMonitorRequest): any => ({
    ...obj,
  });
}

export interface UpdateAppMonitorResponse {}

export namespace UpdateAppMonitorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppMonitorResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to see the tags of.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The ARN of the resource that you are viewing.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace RumEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RumEvent): any => ({
    ...obj,
  });
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

export namespace UserDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserDetails): any => ({
    ...obj,
  });
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

export namespace PutRumEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRumEventsRequest): any => ({
    ...obj,
  });
}

export interface PutRumEventsResponse {}

export namespace PutRumEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRumEventsResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch RUM resource that you're adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
