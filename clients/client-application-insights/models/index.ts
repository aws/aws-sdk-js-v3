import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Describes a standalone resource or similarly grouped resources that the application is made
 *          up of.</p>
 */
export interface ApplicationComponent {
  __type?: "ApplicationComponent";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName?: string;

  /**
   * <p>Indicates whether the application component is monitored. </p>
   */
  Monitor?: boolean;

  /**
   * <p>The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.</p>
   */
  ResourceType?: string;

  /**
   * <p>The stack tier of the application component.</p>
   */
  Tier?: Tier | string;
}

export namespace ApplicationComponent {
  export function isa(o: any): o is ApplicationComponent {
    return __isa(o, "ApplicationComponent");
  }
}

/**
 * <p>Describes the status of the application.</p>
 */
export interface ApplicationInfo {
  __type?: "ApplicationInfo";
  /**
   * <p>The lifecycle of the application. </p>
   */
  LifeCycle?: string;

  /**
   * <p>
   *          Indicates whether Application Insights will create opsItems for any problem detected by Application
   *          Insights for an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications
   *          for opsItem updates.
   *       </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>The issues on the user side that block Application Insights from successfully monitoring
   *          an application. Example remarks include:</p>
   *          <ul>
   *             <li>
   *                <p>“Configuring application, detected 1 Errors, 3 Warnings”</p>
   *             </li>
   *             <li>
   *                <p>“Configuring application, detected 1 Unconfigured Components”</p>
   *             </li>
   *          </ul>
   */
  Remarks?: string;

  /**
   * <p>The name of the resource group used for the application.</p>
   */
  ResourceGroupName?: string;
}

export namespace ApplicationInfo {
  export function isa(o: any): o is ApplicationInfo {
    return __isa(o, "ApplicationInfo");
  }
}

/**
 * <p>The request is not understood by the server.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>
 *          The event information.
 *       </p>
 */
export interface ConfigurationEvent {
  __type?: "ConfigurationEvent";
  /**
   * <p>
   *          The details of the event in plain text.
   *       </p>
   */
  EventDetail?: string;

  /**
   * <p>
   *          The name of the resource Application Insights attempted to configure.
   *       </p>
   */
  EventResourceName?: string;

  /**
   * <p>
   *          The resource type that Application Insights attempted to configure, for example, CLOUDWATCH_ALARM.
   *       </p>
   */
  EventResourceType?: ConfigurationEventResourceType | string;

  /**
   * <p>
   *          The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
   *       </p>
   */
  EventStatus?: ConfigurationEventStatus | string;

  /**
   * <p>
   *          The timestamp of the event.
   *       </p>
   */
  EventTime?: Date;

  /**
   * <p>
   *          The resource monitored by Application Insights.
   *       </p>
   */
  MonitoredResourceARN?: string;
}

export namespace ConfigurationEvent {
  export function isa(o: any): o is ConfigurationEvent {
    return __isa(o, "ConfigurationEvent");
  }
}

export type ConfigurationEventResourceType =
  | "CLOUDFORMATION"
  | "CLOUDWATCH_ALARM"
  | "SSM_ASSOCIATION";

export type ConfigurationEventStatus = "ERROR" | "INFO" | "WARN";

export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
  /**
   * <p>
   *          When set to <code>true</code>, creates opsItems for any problems detected on an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to
   *          receive notifications for updates to the opsItem.
   *       </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>List of tags to add to the application.
   *          tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *          length of a tag key is 128 characters. The maximum length of a tag value is 256
   *          characters.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateApplicationRequest {
  export function isa(o: any): o is CreateApplicationRequest {
    return __isa(o, "CreateApplicationRequest");
  }
}

export interface CreateApplicationResponse {
  __type?: "CreateApplicationResponse";
  /**
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace CreateApplicationResponse {
  export function isa(o: any): o is CreateApplicationResponse {
    return __isa(o, "CreateApplicationResponse");
  }
}

export interface CreateComponentRequest {
  __type?: "CreateComponentRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList: Array<string> | undefined;
}

export namespace CreateComponentRequest {
  export function isa(o: any): o is CreateComponentRequest {
    return __isa(o, "CreateComponentRequest");
  }
}

export interface CreateComponentResponse {
  __type?: "CreateComponentResponse";
}

export namespace CreateComponentResponse {
  export function isa(o: any): o is CreateComponentResponse {
    return __isa(o, "CreateComponentResponse");
  }
}

export interface CreateLogPatternRequest {
  __type?: "CreateLogPatternRequest";
  /**
   * <p>The log pattern.</p>
   */
  Pattern: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>Rank of the log pattern.</p>
   */
  Rank: number | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace CreateLogPatternRequest {
  export function isa(o: any): o is CreateLogPatternRequest {
    return __isa(o, "CreateLogPatternRequest");
  }
}

export interface CreateLogPatternResponse {
  __type?: "CreateLogPatternResponse";
  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace CreateLogPatternResponse {
  export function isa(o: any): o is CreateLogPatternResponse {
    return __isa(o, "CreateLogPatternResponse");
  }
}

export interface DeleteApplicationRequest {
  __type?: "DeleteApplicationRequest";
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DeleteApplicationRequest {
  export function isa(o: any): o is DeleteApplicationRequest {
    return __isa(o, "DeleteApplicationRequest");
  }
}

export interface DeleteApplicationResponse {
  __type?: "DeleteApplicationResponse";
}

export namespace DeleteApplicationResponse {
  export function isa(o: any): o is DeleteApplicationResponse {
    return __isa(o, "DeleteApplicationResponse");
  }
}

export interface DeleteComponentRequest {
  __type?: "DeleteComponentRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DeleteComponentRequest {
  export function isa(o: any): o is DeleteComponentRequest {
    return __isa(o, "DeleteComponentRequest");
  }
}

export interface DeleteComponentResponse {
  __type?: "DeleteComponentResponse";
}

export namespace DeleteComponentResponse {
  export function isa(o: any): o is DeleteComponentResponse {
    return __isa(o, "DeleteComponentResponse");
  }
}

export interface DeleteLogPatternRequest {
  __type?: "DeleteLogPatternRequest";
  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DeleteLogPatternRequest {
  export function isa(o: any): o is DeleteLogPatternRequest {
    return __isa(o, "DeleteLogPatternRequest");
  }
}

export interface DeleteLogPatternResponse {
  __type?: "DeleteLogPatternResponse";
}

export namespace DeleteLogPatternResponse {
  export function isa(o: any): o is DeleteLogPatternResponse {
    return __isa(o, "DeleteLogPatternResponse");
  }
}

export interface DescribeApplicationRequest {
  __type?: "DescribeApplicationRequest";
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DescribeApplicationRequest {
  export function isa(o: any): o is DescribeApplicationRequest {
    return __isa(o, "DescribeApplicationRequest");
  }
}

export interface DescribeApplicationResponse {
  __type?: "DescribeApplicationResponse";
  /**
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace DescribeApplicationResponse {
  export function isa(o: any): o is DescribeApplicationResponse {
    return __isa(o, "DescribeApplicationResponse");
  }
}

export interface DescribeComponentConfigurationRecommendationRequest {
  __type?: "DescribeComponentConfigurationRecommendationRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>,
   *          and <code>DEFAULT</code>.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace DescribeComponentConfigurationRecommendationRequest {
  export function isa(
    o: any
  ): o is DescribeComponentConfigurationRecommendationRequest {
    return __isa(o, "DescribeComponentConfigurationRecommendationRequest");
  }
}

export interface DescribeComponentConfigurationRecommendationResponse {
  __type?: "DescribeComponentConfigurationRecommendationResponse";
  /**
   * <p>The recommended configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;
}

export namespace DescribeComponentConfigurationRecommendationResponse {
  export function isa(
    o: any
  ): o is DescribeComponentConfigurationRecommendationResponse {
    return __isa(o, "DescribeComponentConfigurationRecommendationResponse");
  }
}

export interface DescribeComponentConfigurationRequest {
  __type?: "DescribeComponentConfigurationRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DescribeComponentConfigurationRequest {
  export function isa(o: any): o is DescribeComponentConfigurationRequest {
    return __isa(o, "DescribeComponentConfigurationRequest");
  }
}

export interface DescribeComponentConfigurationResponse {
  __type?: "DescribeComponentConfigurationResponse";
  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;

  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>,
   *          <code>SQL_SERVER</code>, and <code>DEFAULT</code>
   *          </p>
   */
  Tier?: Tier | string;
}

export namespace DescribeComponentConfigurationResponse {
  export function isa(o: any): o is DescribeComponentConfigurationResponse {
    return __isa(o, "DescribeComponentConfigurationResponse");
  }
}

export interface DescribeComponentRequest {
  __type?: "DescribeComponentRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DescribeComponentRequest {
  export function isa(o: any): o is DescribeComponentRequest {
    return __isa(o, "DescribeComponentRequest");
  }
}

export interface DescribeComponentResponse {
  __type?: "DescribeComponentResponse";
  /**
   * <p>Describes a standalone resource or similarly grouped resources that the application is made
   *          up of.</p>
   */
  ApplicationComponent?: ApplicationComponent;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: Array<string>;
}

export namespace DescribeComponentResponse {
  export function isa(o: any): o is DescribeComponentResponse {
    return __isa(o, "DescribeComponentResponse");
  }
}

export interface DescribeLogPatternRequest {
  __type?: "DescribeLogPatternRequest";
  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DescribeLogPatternRequest {
  export function isa(o: any): o is DescribeLogPatternRequest {
    return __isa(o, "DescribeLogPatternRequest");
  }
}

export interface DescribeLogPatternResponse {
  __type?: "DescribeLogPatternResponse";
  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace DescribeLogPatternResponse {
  export function isa(o: any): o is DescribeLogPatternResponse {
    return __isa(o, "DescribeLogPatternResponse");
  }
}

export interface DescribeObservationRequest {
  __type?: "DescribeObservationRequest";
  /**
   * <p>The ID of the observation.</p>
   */
  ObservationId: string | undefined;
}

export namespace DescribeObservationRequest {
  export function isa(o: any): o is DescribeObservationRequest {
    return __isa(o, "DescribeObservationRequest");
  }
}

export interface DescribeObservationResponse {
  __type?: "DescribeObservationResponse";
  /**
   * <p>Information about the observation.</p>
   */
  Observation?: Observation;
}

export namespace DescribeObservationResponse {
  export function isa(o: any): o is DescribeObservationResponse {
    return __isa(o, "DescribeObservationResponse");
  }
}

export interface DescribeProblemObservationsRequest {
  __type?: "DescribeProblemObservationsRequest";
  /**
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;
}

export namespace DescribeProblemObservationsRequest {
  export function isa(o: any): o is DescribeProblemObservationsRequest {
    return __isa(o, "DescribeProblemObservationsRequest");
  }
}

export interface DescribeProblemObservationsResponse {
  __type?: "DescribeProblemObservationsResponse";
  /**
   * <p>Observations related to the problem.</p>
   */
  RelatedObservations?: RelatedObservations;
}

export namespace DescribeProblemObservationsResponse {
  export function isa(o: any): o is DescribeProblemObservationsResponse {
    return __isa(o, "DescribeProblemObservationsResponse");
  }
}

export interface DescribeProblemRequest {
  __type?: "DescribeProblemRequest";
  /**
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;
}

export namespace DescribeProblemRequest {
  export function isa(o: any): o is DescribeProblemRequest {
    return __isa(o, "DescribeProblemRequest");
  }
}

export interface DescribeProblemResponse {
  __type?: "DescribeProblemResponse";
  /**
   * <p>Information about the problem. </p>
   */
  Problem?: Problem;
}

export namespace DescribeProblemResponse {
  export function isa(o: any): o is DescribeProblemResponse {
    return __isa(o, "DescribeProblemResponse");
  }
}

export type FeedbackKey = "INSIGHTS_FEEDBACK";

export type FeedbackValue = "NOT_SPECIFIED" | "NOT_USEFUL" | "USEFUL";

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListApplicationsRequest {
  __type?: "ListApplicationsRequest";
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsRequest {
  export function isa(o: any): o is ListApplicationsRequest {
    return __isa(o, "ListApplicationsRequest");
  }
}

export interface ListApplicationsResponse {
  __type?: "ListApplicationsResponse";
  /**
   * <p>The list of applications.</p>
   */
  ApplicationInfoList?: Array<ApplicationInfo>;

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListApplicationsResponse {
  export function isa(o: any): o is ListApplicationsResponse {
    return __isa(o, "ListApplicationsResponse");
  }
}

export interface ListComponentsRequest {
  __type?: "ListComponentsRequest";
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace ListComponentsRequest {
  export function isa(o: any): o is ListComponentsRequest {
    return __isa(o, "ListComponentsRequest");
  }
}

export interface ListComponentsResponse {
  __type?: "ListComponentsResponse";
  /**
   * <p>The list of application components.</p>
   */
  ApplicationComponentList?: Array<ApplicationComponent>;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListComponentsResponse {
  export function isa(o: any): o is ListComponentsResponse {
    return __isa(o, "ListComponentsResponse");
  }
}

export interface ListConfigurationHistoryRequest {
  __type?: "ListConfigurationHistoryRequest";
  /**
   * <p>The end time of the event.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the configuration update event. Possible values include INFO, WARN, and ERROR.</p>
   */
  EventStatus?: ConfigurationEventStatus | string;

  /**
   * <p> The maximum number of results returned by <code>ListConfigurationHistory</code> in
   *          paginated output. When this parameter is used, <code>ListConfigurationHistory</code>
   *          returns only <code>MaxResults</code> in a single page along with a <code>NextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListConfigurationHistory</code> request with the returned
   *             <code>NextToken</code> value. If this parameter is not used, then
   *             <code>ListConfigurationHistory</code> returns all results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated <code>ListConfigurationHistory</code> request where
   *          <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination
   *          continues from the end of the previous results that returned the <code>NextToken</code> value. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Resource group to which the application belongs. </p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The start time of the event. </p>
   */
  StartTime?: Date;
}

export namespace ListConfigurationHistoryRequest {
  export function isa(o: any): o is ListConfigurationHistoryRequest {
    return __isa(o, "ListConfigurationHistoryRequest");
  }
}

export interface ListConfigurationHistoryResponse {
  __type?: "ListConfigurationHistoryResponse";
  /**
   * <p> The list of configuration events and their corresponding details. </p>
   */
  EventList?: Array<ConfigurationEvent>;

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *             <code>ListConfigurationHistory</code> request. When the results of a
   *             <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value
   *          can be used to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationHistoryResponse {
  export function isa(o: any): o is ListConfigurationHistoryResponse {
    return __isa(o, "ListConfigurationHistoryResponse");
  }
}

export interface ListLogPatternSetsRequest {
  __type?: "ListLogPatternSetsRequest";
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace ListLogPatternSetsRequest {
  export function isa(o: any): o is ListLogPatternSetsRequest {
    return __isa(o, "ListLogPatternSetsRequest");
  }
}

export interface ListLogPatternSetsResponse {
  __type?: "ListLogPatternSetsResponse";
  /**
   * <p>The list of log pattern sets.</p>
   */
  LogPatternSets?: Array<string>;

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace ListLogPatternSetsResponse {
  export function isa(o: any): o is ListLogPatternSetsResponse {
    return __isa(o, "ListLogPatternSetsResponse");
  }
}

export interface ListLogPatternsRequest {
  __type?: "ListLogPatternsRequest";
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace ListLogPatternsRequest {
  export function isa(o: any): o is ListLogPatternsRequest {
    return __isa(o, "ListLogPatternsRequest");
  }
}

export interface ListLogPatternsResponse {
  __type?: "ListLogPatternsResponse";
  /**
   * <p>The list of log patterns.</p>
   */
  LogPatterns?: Array<LogPattern>;

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace ListLogPatternsResponse {
  export function isa(o: any): o is ListLogPatternsResponse {
    return __isa(o, "ListLogPatternsResponse");
  }
}

export interface ListProblemsRequest {
  __type?: "ListProblemsRequest";
  /**
   * <p>The time when the problem ended, in epoch seconds. If not specified, problems within the
   *          past seven days are returned.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The time when the problem was detected, in epoch
   *          seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.</p>
   */
  StartTime?: Date;
}

export namespace ListProblemsRequest {
  export function isa(o: any): o is ListProblemsRequest {
    return __isa(o, "ListProblemsRequest");
  }
}

export interface ListProblemsResponse {
  __type?: "ListProblemsResponse";
  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * <p>The list of problems. </p>
   */
  ProblemList?: Array<Problem>;
}

export namespace ListProblemsResponse {
  export function isa(o: any): o is ListProblemsResponse {
    return __isa(o, "ListProblemsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to retrieve tag
   *          information for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>An array that lists all the tags that are associated with the application. Each tag
   *          consists of a required tag key (<code>Key</code>) and an associated tag value
   *          (<code>Value</code>).</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export type LogFilter = "ERROR" | "INFO" | "WARN";

/**
 * <p>An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.</p>
 */
export interface LogPattern {
  __type?: "LogPattern";
  /**
   * <p>A regular expression that defines the log pattern. A log pattern can contains at many as 50 characters, and it cannot
   *          be empty.</p>
   */
  Pattern?: string;

  /**
   * <p>The name of the log pattern. A log pattern name can contains at many as 50 characters, and it cannot
   *          be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.</p>
   */
  PatternName?: string;

  /**
   * <p>The name of the log pattern. A log pattern name can contains at many as 30 characters, and it cannot
   *          be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.</p>
   */
  PatternSetName?: string;

  /**
   * <p>Rank of the log pattern.</p>
   */
  Rank?: number;
}

export namespace LogPattern {
  export function isa(o: any): o is LogPattern {
    return __isa(o, "LogPattern");
  }
}

/**
 * <p>Describes an anomaly or error with the application.</p>
 */
export interface Observation {
  __type?: "Observation";
  /**
   * <p>The time when the observation ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ID of the observation type.</p>
   */
  Id?: string;

  /**
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</p>
   */
  LineTime?: Date;

  /**
   * <p>The log filter of the observation.</p>
   */
  LogFilter?: LogFilter | string;

  /**
   * <p>The log group name.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log text of the observation.</p>
   */
  LogText?: string;

  /**
   * <p>The name of the observation metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the observation metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>The source resource ARN of the observation.</p>
   */
  SourceARN?: string;

  /**
   * <p>The source type of the observation.</p>
   */
  SourceType?: string;

  /**
   * <p>The time when the observation was  first detected, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The unit of the source observation metric.</p>
   */
  Unit?: string;

  /**
   * <p>The value of the source observation metric.</p>
   */
  Value?: number;
}

export namespace Observation {
  export function isa(o: any): o is Observation {
    return __isa(o, "Observation");
  }
}

/**
 * <p>Describes a problem that is detected by correlating observations.</p>
 */
export interface Problem {
  __type?: "Problem";
  /**
   * <p>The resource affected by the problem.</p>
   */
  AffectedResource?: string;

  /**
   * <p>The time when the problem ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>Feedback provided by the user about the problem.</p>
   */
  Feedback?: { [key: string]: FeedbackValue | string };

  /**
   * <p>The ID of the problem.</p>
   */
  Id?: string;

  /**
   * <p>A detailed analysis of the problem using machine learning.</p>
   */
  Insights?: string;

  /**
   * <p>The name of the resource group affected by the problem.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>A measure of the level of impact of the problem.</p>
   */
  SeverityLevel?: SeverityLevel | string;

  /**
   * <p>The time when the problem started, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the problem.</p>
   */
  Status?: Status | string;

  /**
   * <p>The name of the problem.</p>
   */
  Title?: string;
}

export namespace Problem {
  export function isa(o: any): o is Problem {
    return __isa(o, "Problem");
  }
}

/**
 * <p>Describes observations related to the problem.</p>
 */
export interface RelatedObservations {
  __type?: "RelatedObservations";
  /**
   * <p>The list of observations related to the problem.</p>
   */
  ObservationList?: Array<Observation>;
}

export namespace RelatedObservations {
  export function isa(o: any): o is RelatedObservations {
    return __isa(o, "RelatedObservations");
  }
}

/**
 * <p>The resource is already created or in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>The resource does not exist in the customer account.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export type SeverityLevel = "High" | "Low" | "Medium";

export type Status = "IGNORE" | "PENDING" | "RESOLVED";

/**
 * <p>An object that defines the tags associated with an application.
 *          A <i>tag</i> is a label that you optionally define and associate with
 *          an application. Tags can help you categorize and manage resources in different ways, such as
 *          by purpose, owner, environment, or other criteria.</p>
 *          <p>Each tag consists of a required <i>tag key</i> and an
 *          associated <i>tag value</i>, both of which you define. A tag key is a
 *          general label that acts as a category for a more specific tag value. A tag value acts as
 *          a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag
 *          value can contain as many as 256 characters. The characters can be Unicode letters,
 *          digits, white space, or one of the following symbols: _ . : / = + -. The following
 *          additional restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>For each associated resource, each tag key must be unique and it can have only
 *                one value.</p>
 *             </li>
 *             <li>
 *                <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in
 *                any tag keys or values that you define. In addition, you can't edit or remove
 *                tag keys or values that use this prefix. </p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *          128 characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *          value is 256 characters. The minimum length is 0 characters. If you don't want an
   *          application to have a specific tag value, don't specify a value for this parameter.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to add one or more tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags that to add to the application. A tag consists of a required
   *          tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *          length of a tag key is 128 characters. The maximum length of a tag value is 256
   *          characters.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>Tags are already registered for the specified application ARN.</p>
 */
export interface TagsAlreadyExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagsAlreadyExistException";
  $fault: "client";
  Message?: string;
}

export namespace TagsAlreadyExistException {
  export function isa(o: any): o is TagsAlreadyExistException {
    return __isa(o, "TagsAlreadyExistException");
  }
}

export type Tier =
  | "DEFAULT"
  | "DOT_NET_CORE"
  | "DOT_NET_WEB"
  | "DOT_NET_WORKER"
  | "SQL_SERVER";

/**
 * <p>The number of the provided tags is beyond the limit, or
 *          the number of total tags you are trying to attach to the specified resource exceeds the limit.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource with too many tags.</p>
   */
  ResourceName?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *          key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the application, append the <code>TagKeys</code>
   *          parameter and argument for each additional tag to remove, separated by an ampersand.
   *       </p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateApplicationRequest {
  __type?: "UpdateApplicationRequest";
  /**
   * <p>
   *          When set to <code>true</code>, creates opsItems for any problems detected on an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to
   *          receive notifications for updates to the opsItem.</p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>
   *          Disassociates the SNS topic from the opsItem created for detected problems.</p>
   */
  RemoveSNSTopic?: boolean;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace UpdateApplicationRequest {
  export function isa(o: any): o is UpdateApplicationRequest {
    return __isa(o, "UpdateApplicationRequest");
  }
}

export interface UpdateApplicationResponse {
  __type?: "UpdateApplicationResponse";
  /**
   * <p>Information about the application. </p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace UpdateApplicationResponse {
  export function isa(o: any): o is UpdateApplicationResponse {
    return __isa(o, "UpdateApplicationResponse");
  }
}

export interface UpdateComponentConfigurationRequest {
  __type?: "UpdateComponentConfigurationRequest";
  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration. For
   *          more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>.
   *          You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component. For the complete
   *          format of the component configuration file, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.</p>
   */
  ComponentConfiguration?: string;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>,
   *          <code>DOT_NET_WEB</code>, <code>DOT_NET_CORE</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.</p>
   */
  Tier?: Tier | string;
}

export namespace UpdateComponentConfigurationRequest {
  export function isa(o: any): o is UpdateComponentConfigurationRequest {
    return __isa(o, "UpdateComponentConfigurationRequest");
  }
}

export interface UpdateComponentConfigurationResponse {
  __type?: "UpdateComponentConfigurationResponse";
}

export namespace UpdateComponentConfigurationResponse {
  export function isa(o: any): o is UpdateComponentConfigurationResponse {
    return __isa(o, "UpdateComponentConfigurationResponse");
  }
}

export interface UpdateComponentRequest {
  __type?: "UpdateComponentRequest";
  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The new name of the component.</p>
   */
  NewComponentName?: string;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: Array<string>;
}

export namespace UpdateComponentRequest {
  export function isa(o: any): o is UpdateComponentRequest {
    return __isa(o, "UpdateComponentRequest");
  }
}

export interface UpdateComponentResponse {
  __type?: "UpdateComponentResponse";
}

export namespace UpdateComponentResponse {
  export function isa(o: any): o is UpdateComponentResponse {
    return __isa(o, "UpdateComponentResponse");
  }
}

export interface UpdateLogPatternRequest {
  __type?: "UpdateLogPatternRequest";
  /**
   * <p>The log pattern.</p>
   */
  Pattern?: string;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>Rank of the log pattern.</p>
   */
  Rank?: number;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace UpdateLogPatternRequest {
  export function isa(o: any): o is UpdateLogPatternRequest {
    return __isa(o, "UpdateLogPatternRequest");
  }
}

export interface UpdateLogPatternResponse {
  __type?: "UpdateLogPatternResponse";
  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace UpdateLogPatternResponse {
  export function isa(o: any): o is UpdateLogPatternResponse {
    return __isa(o, "UpdateLogPatternResponse");
  }
}

/**
 * <p>The parameter is not valid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
