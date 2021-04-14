import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export type AlarmType = "CompositeAlarm" | "MetricAlarm";

export type HistoryItemType = "Action" | "ConfigurationUpdate" | "StateUpdate";

/**
 * <p>Represents the history of a specific alarm.</p>
 */
export interface AlarmHistoryItem {
  /**
   * <p>The descriptive name for the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The type of alarm, either metric alarm or composite alarm.</p>
   */
  AlarmType?: AlarmType | string;

  /**
   * <p>The time stamp for the alarm history item.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The type of alarm history item.</p>
   */
  HistoryItemType?: HistoryItemType | string;

  /**
   * <p>A summary of the alarm history, in text format.</p>
   */
  HistorySummary?: string;

  /**
   * <p>Data about the alarm, in JSON format.</p>
   */
  HistoryData?: string;
}

export namespace AlarmHistoryItem {
  export const filterSensitiveLog = (obj: AlarmHistoryItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one range of days or times to exclude from use for training an
 * 		anomaly detection model.</p>
 */
export interface Range {
  /**
   * <p>The start time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date | undefined;
}

export namespace Range {
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration specifies details about how the anomaly detection model is to be trained,
 * 			including time ranges to exclude from use for training the model and the time zone to
 * 			use for the metric.</p>
 */
export interface AnomalyDetectorConfiguration {
  /**
   * <p>An array of time ranges to exclude from use when the anomaly detection model is trained. Use
   * 			this to make sure that events that could cause unusual values for the metric, such as
   * 			deployments, aren't used when CloudWatch creates the model.</p>
   */
  ExcludedTimeRanges?: Range[];

  /**
   * <p>The time zone to use for the metric. This is useful to enable the model to automatically
   * 			account for daylight savings time changes if the metric is sensitive to such time
   * 			changes.</p>
   * 		       <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information,
   * 			see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>
   */
  MetricTimezone?: string;
}

export namespace AnomalyDetectorConfiguration {
  export const filterSensitiveLog = (obj: AnomalyDetectorConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A dimension is a name/value pair that is part of the identity of a metric. You
 * 			can assign up to 10 dimensions to a metric. Because dimensions are part of the unique
 * 			identifier for a metric, whenever you add a unique name/value pair to one of
 * 			your metrics, you are creating a new variation of that metric. </p>
 */
export interface Dimension {
  /**
   * <p>The name of the dimension. Dimension names cannot contain blank spaces or non-ASCII
   * 		characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension. Dimension values cannot contain blank spaces
   * 			or non-ASCII characters.</p>
   */
  Value: string | undefined;
}

export namespace Dimension {
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

export type AnomalyDetectorStateValue = "PENDING_TRAINING" | "TRAINED" | "TRAINED_INSUFFICIENT_DATA";

/**
 * <p>An anomaly detection model associated with a particular CloudWatch metric and statistic. You
 * 			can use the model to display a band of expected normal values when the metric is
 * 			graphed.</p>
 */
export interface AnomalyDetector {
  /**
   * <p>The namespace of the metric associated with the anomaly detection model.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric associated with the anomaly detection model.</p>
   */
  MetricName?: string;

  /**
   * <p>The metric dimensions associated with the anomaly detection model.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The statistic associated with the anomaly detection model.</p>
   */
  Stat?: string;

  /**
   * <p>The configuration specifies details about how the
   * 		anomaly detection model is to be trained, including time ranges to
   * 		exclude from use for training the model, and the time zone to use for
   * 		the metric.</p>
   */
  Configuration?: AnomalyDetectorConfiguration;

  /**
   * <p>The current status of the anomaly detector's training. The possible values are <code>TRAINED | PENDING_TRAINING | TRAINED_INSUFFICIENT_DATA</code>
   *          </p>
   */
  StateValue?: AnomalyDetectorStateValue | string;
}

export namespace AnomalyDetector {
  export const filterSensitiveLog = (obj: AnomalyDetector): any => ({
    ...obj,
  });
}

/**
 * <p>This array is empty if the API operation was successful for all the rules specified in the request. If the operation could
 * 		not process one of the rules, the following data is returned for each of those rules.</p>
 */
export interface PartialFailure {
  /**
   * <p>The specified rule that could not be deleted.</p>
   */
  FailureResource?: string;

  /**
   * <p>The type of error.</p>
   */
  ExceptionType?: string;

  /**
   * <p>The code of the error.</p>
   */
  FailureCode?: string;

  /**
   * <p>A description of the error.</p>
   */
  FailureDescription?: string;
}

export namespace PartialFailure {
  export const filterSensitiveLog = (obj: PartialFailure): any => ({
    ...obj,
  });
}

export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "GreaterThanUpperThreshold"
  | "LessThanLowerOrGreaterThanUpperThreshold"
  | "LessThanLowerThreshold"
  | "LessThanOrEqualToThreshold"
  | "LessThanThreshold";

export type StateValue = "ALARM" | "INSUFFICIENT_DATA" | "OK";

/**
 * <p>The details about a composite alarm.</p>
 */
export interface CompositeAlarm {
  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmArn?: string;

  /**
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date;

  /**
   * <p>The description of the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The rule that this alarm uses to evaluate its alarm state.</p>
   */
  AlarmRule?: string;

  /**
   * <p>The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: string[];

  /**
   * <p>An explanation for the alarm state, in text format.</p>
   */
  StateReason?: string;

  /**
   * <p>An explanation for the alarm state, in JSON format.</p>
   */
  StateReasonData?: string;

  /**
   * <p>The time stamp of the last update to the alarm state.</p>
   */
  StateUpdatedTimestamp?: Date;

  /**
   * <p>The state value for the alarm.</p>
   */
  StateValue?: StateValue | string;
}

export namespace CompositeAlarm {
  export const filterSensitiveLog = (obj: CompositeAlarm): any => ({
    ...obj,
  });
}

/**
 * <p>More than one process tried to modify a resource at the same time.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a specific dashboard.</p>
 */
export interface DashboardEntry {
  /**
   * <p>The name of the dashboard.</p>
   */
  DashboardName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The time stamp of when the dashboard was last modified, either by an API call or
   * 			through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  LastModified?: Date;

  /**
   * <p>The size of the dashboard, in bytes.</p>
   */
  Size?: number;
}

export namespace DashboardEntry {
  export const filterSensitiveLog = (obj: DashboardEntry): any => ({
    ...obj,
  });
}

/**
 * <p>An error or warning for the operation.</p>
 */
export interface DashboardValidationMessage {
  /**
   * <p>The data path related to the message.</p>
   */
  DataPath?: string;

  /**
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;
}

export namespace DashboardValidationMessage {
  export const filterSensitiveLog = (obj: DashboardValidationMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Some part of the dashboard data is invalid.</p>
 */
export interface DashboardInvalidInputError extends __SmithyException, $MetadataBearer {
  name: "DashboardInvalidInputError";
  $fault: "client";
  message?: string;
  dashboardValidationMessages?: DashboardValidationMessage[];
}

export namespace DashboardInvalidInputError {
  export const filterSensitiveLog = (obj: DashboardInvalidInputError): any => ({
    ...obj,
  });
}

/**
 * <p>The specified dashboard does not exist.</p>
 */
export interface DashboardNotFoundError extends __SmithyException, $MetadataBearer {
  name: "DashboardNotFoundError";
  $fault: "client";
  message?: string;
}

export namespace DashboardNotFoundError {
  export const filterSensitiveLog = (obj: DashboardNotFoundError): any => ({
    ...obj,
  });
}

export type StandardUnit =
  | "Bits"
  | "Bits/Second"
  | "Bytes"
  | "Bytes/Second"
  | "Count"
  | "Count/Second"
  | "Gigabits"
  | "Gigabits/Second"
  | "Gigabytes"
  | "Gigabytes/Second"
  | "Kilobits"
  | "Kilobits/Second"
  | "Kilobytes"
  | "Kilobytes/Second"
  | "Megabits"
  | "Megabits/Second"
  | "Megabytes"
  | "Megabytes/Second"
  | "Microseconds"
  | "Milliseconds"
  | "None"
  | "Percent"
  | "Seconds"
  | "Terabits"
  | "Terabits/Second"
  | "Terabytes"
  | "Terabytes/Second";

/**
 * <p>Encapsulates the statistical data that CloudWatch computes from metric data.</p>
 */
export interface Datapoint {
  /**
   * <p>The time stamp used for the data point.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The number of metric values that contributed to the aggregate value of this
   * 			data point.</p>
   */
  SampleCount?: number;

  /**
   * <p>The average of the metric values that correspond to the data point.</p>
   */
  Average?: number;

  /**
   * <p>The sum of the metric values for the data point.</p>
   */
  Sum?: number;

  /**
   * <p>The minimum metric value for the data point.</p>
   */
  Minimum?: number;

  /**
   * <p>The maximum metric value for the data point.</p>
   */
  Maximum?: number;

  /**
   * <p>The standard unit for the data point.</p>
   */
  Unit?: StandardUnit | string;

  /**
   * <p>The percentile statistic for the data point.</p>
   */
  ExtendedStatistics?: { [key: string]: number };
}

export namespace Datapoint {
  export const filterSensitiveLog = (obj: Datapoint): any => ({
    ...obj,
  });
}

export interface DeleteAlarmsInput {
  /**
   * <p>The alarms to be deleted.</p>
   */
  AlarmNames: string[] | undefined;
}

export namespace DeleteAlarmsInput {
  export const filterSensitiveLog = (obj: DeleteAlarmsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The named resource does not exist.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceNotFound {
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyDetectorInput {
  /**
   * <p>The namespace associated with the anomaly detection model to delete.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The metric name associated with the anomaly detection model to delete.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The metric dimensions associated with the anomaly detection model to delete.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The statistic associated with the anomaly detection model to delete.</p>
   */
  Stat: string | undefined;
}

export namespace DeleteAnomalyDetectorInput {
  export const filterSensitiveLog = (obj: DeleteAnomalyDetectorInput): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyDetectorOutput {}

export namespace DeleteAnomalyDetectorOutput {
  export const filterSensitiveLog = (obj: DeleteAnomalyDetectorOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 */
export interface InternalServiceFault extends __SmithyException, $MetadataBearer {
  name: "InternalServiceFault";
  $fault: "server";
  /**
   * <p></p>
   */
  Message?: string;
}

export namespace InternalServiceFault {
  export const filterSensitiveLog = (obj: InternalServiceFault): any => ({
    ...obj,
  });
}

/**
 * <p>The value of an input parameter is bad or out-of-range.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>An input parameter that is required is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
  name: "MissingRequiredParameterException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace MissingRequiredParameterException {
  export const filterSensitiveLog = (obj: MissingRequiredParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The named resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  ResourceType?: string;
  ResourceId?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteDashboardsInput {
  /**
   * <p>The dashboards to be deleted. This parameter is required.</p>
   */
  DashboardNames: string[] | undefined;
}

export namespace DeleteDashboardsInput {
  export const filterSensitiveLog = (obj: DeleteDashboardsInput): any => ({
    ...obj,
  });
}

export interface DeleteDashboardsOutput {}

export namespace DeleteDashboardsOutput {
  export const filterSensitiveLog = (obj: DeleteDashboardsOutput): any => ({
    ...obj,
  });
}

export interface DeleteInsightRulesInput {
  /**
   * <p>An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

export namespace DeleteInsightRulesInput {
  export const filterSensitiveLog = (obj: DeleteInsightRulesInput): any => ({
    ...obj,
  });
}

export interface DeleteInsightRulesOutput {
  /**
   * <p>An array listing the rules that could not be deleted. You cannot delete built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

export namespace DeleteInsightRulesOutput {
  export const filterSensitiveLog = (obj: DeleteInsightRulesOutput): any => ({
    ...obj,
  });
}

export interface DeleteMetricStreamInput {
  /**
   * <p>The name of the metric stream to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteMetricStreamInput {
  export const filterSensitiveLog = (obj: DeleteMetricStreamInput): any => ({
    ...obj,
  });
}

export interface DeleteMetricStreamOutput {}

export namespace DeleteMetricStreamOutput {
  export const filterSensitiveLog = (obj: DeleteMetricStreamOutput): any => ({
    ...obj,
  });
}

export enum ScanBy {
  TIMESTAMP_ASCENDING = "TimestampAscending",
  TIMESTAMP_DESCENDING = "TimestampDescending",
}

export interface DescribeAlarmHistoryInput {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter,
   * 			only metric alarms are returned.</p>
   */
  AlarmTypes?: (AlarmType | string)[];

  /**
   * <p>The type of alarm histories to retrieve.</p>
   */
  HistoryItemType?: HistoryItemType | string;

  /**
   * <p>The starting date to retrieve alarm history.</p>
   */
  StartDate?: Date;

  /**
   * <p>The ending date to retrieve alarm history.</p>
   */
  EndDate?: Date;

  /**
   * <p>The maximum number of alarm history records to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;

  /**
   * <p>Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest
   * 		event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.</p>
   */
  ScanBy?: ScanBy | string;
}

export namespace DescribeAlarmHistoryInput {
  export const filterSensitiveLog = (obj: DescribeAlarmHistoryInput): any => ({
    ...obj,
  });
}

export interface DescribeAlarmHistoryOutput {
  /**
   * <p>The alarm histories, in JSON format.</p>
   */
  AlarmHistoryItems?: AlarmHistoryItem[];

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAlarmHistoryOutput {
  export const filterSensitiveLog = (obj: DescribeAlarmHistoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The next token specified is invalid.</p>
 */
export interface InvalidNextToken extends __SmithyException, $MetadataBearer {
  name: "InvalidNextToken";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidNextToken {
  export const filterSensitiveLog = (obj: InvalidNextToken): any => ({
    ...obj,
  });
}

export interface DescribeAlarmsInput {
  /**
   * <p>The names of the alarms to retrieve information about.</p>
   */
  AlarmNames?: string[];

  /**
   * <p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names
   * 			that start with this prefix.</p>
   * 		       <p>If this parameter
   * 			is specified, you cannot specify <code>AlarmNames</code>.</p>
   */
  AlarmNamePrefix?: string;

  /**
   * <p>Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter,
   * 		only metric alarms are returned.</p>
   */
  AlarmTypes?: (AlarmType | string)[];

  /**
   * <p>If you use this parameter and specify the name of a composite alarm, the operation returns
   * 			information about the "children" alarms
   * 			of the alarm you specify. These are the metric alarms and composite alarms referenced in the
   * 			<code>AlarmRule</code> field of the composite alarm that you specify in
   * 			<code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in
   * 			<code>ChildrenOfAlarmName</code> is not returned.</p>
   * 		       <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except
   * 			for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you
   * 			receive a validation
   * 			error.</p>
   * 		       <note>
   *             <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code>
   * 			information are returned by this operation
   * 			when you use this parameter. To get complete information about
   * 			these alarms, perform another <code>DescribeAlarms</code> operation and specify
   * 			the parent alarm names in the <code>AlarmNames</code> parameter.</p>
   *          </note>
   */
  ChildrenOfAlarmName?: string;

  /**
   * <p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns
   * 			information about the "parent" alarms
   * 			of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code>
   * 			parameters that reference
   * 			the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in
   * 			<code>ParentsOfAlarmName</code> is not returned.</p>
   * 		       <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except
   * 			for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation
   * 			error.</p>
   * 		       <note>
   *             <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about
   * 			these alarms, perform another <code>DescribeAlarms</code> operation and specify
   * 			the parent alarm names in the <code>AlarmNames</code> parameter.</p>
   *          </note>
   */
  ParentsOfAlarmName?: string;

  /**
   * <p>Specify this parameter to receive information only about alarms that are currently in the state that you specify.</p>
   */
  StateValue?: StateValue | string;

  /**
   * <p>Use this parameter to filter the results of the operation to only those alarms that
   * 		use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all
   * 		alarms that send notifications to that topic.</p>
   */
  ActionPrefix?: string;

  /**
   * <p>The maximum number of alarm descriptions to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;
}

export namespace DescribeAlarmsInput {
  export const filterSensitiveLog = (obj: DescribeAlarmsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a specific metric.</p>
 */
export interface Metric {
  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric. This is a required field.</p>
   */
  MetricName?: string;

  /**
   * <p>The dimensions for the metric.</p>
   */
  Dimensions?: Dimension[];
}

export namespace Metric {
  export const filterSensitiveLog = (obj: Metric): any => ({
    ...obj,
  });
}

/**
 * <p>This structure defines the metric to be returned, along with the statistics, period, and units.</p>
 */
export interface MetricStat {
  /**
   * <p>The metric to return, including the metric name, namespace, and dimensions.</p>
   */
  Metric: Metric | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can
   * 			be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   * 			at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   * 			are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   * 			      <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than
   * 				3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p>
   * 			      <ul>
   *             <li>
   *                <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p>
   *             </li>
   *          </ul>
   */
  Period: number | undefined;

  /**
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic.</p>
   */
  Stat: string | undefined;

  /**
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p>
   * 		       <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified
   * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   */
  Unit?: StandardUnit | string;
}

export namespace MetricStat {
  export const filterSensitiveLog = (obj: MetricStat): any => ({
    ...obj,
  });
}

/**
 * <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported
 * 			use of this structure is different for those two operations.</p>
 * 		       <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving
 * 			a batch set of data for one metric, or is performing a math expression on metric data. A
 * 			single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code>
 * 			structures.</p>
 * 		       <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a
 * 			metric math expression. Each <code>MetricDataQuery</code> in the array specifies either
 * 			a metric to retrieve, or a math expression to be performed on retrieved metrics. A
 * 			single <code>PutMetricAlarm</code> call can include up to 20
 * 				<code>MetricDataQuery</code> structures in the array. The 20 structures can include
 * 			as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a
 * 			metric, and as many as 10 structures that contain the <code>Expression</code> parameter
 * 			to perform a math expression. Of those <code>Expression</code> structures, one must have <code>True</code>
 * 		as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p>
 *
 * 		       <p>Any expression used in a <code>PutMetricAlarm</code>
 * 			operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
 * 				Guide</i>.</p>
 *
 * 		       <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code>
 * 			operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>
 */
export interface MetricDataQuery {
  /**
   * <p>A short name used to tie this object to the results in the response. This name must be
   * 			unique within a single call to <code>GetMetricData</code>. If you are performing math
   * 			expressions on this set of data, this name represents that data and can serve as a
   * 			variable in the mathematical expression. The valid characters are letters, numbers, and
   * 			underscore. The first character must be a lowercase letter.</p>
   */
  Id: string | undefined;

  /**
   * <p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric
   * 			and not performing a math expression on returned data.</p>
   * 		       <p>Within one MetricDataQuery object, you must specify either
   * 			<code>Expression</code> or <code>MetricStat</code> but not both.</p>
   */
  MetricStat?: MetricStat;

  /**
   * <p>The math expression to be performed on the returned data, if this object is performing a math expression. This expression
   * 			can use the <code>Id</code> of the other metrics to refer to those metrics, and can also use the <code>Id</code> of other
   * 			expressions to use the result of those expressions. For more information about metric math expressions, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   * 		       <p>Within each MetricDataQuery object, you must specify either
   * 			<code>Expression</code> or <code>MetricStat</code> but not both.</p>
   */
  Expression?: string;

  /**
   * <p>A human-readable label for this metric or expression. This is especially useful
   * 			if this is an expression, so that you know
   * 			what the value represents. If the metric or expression is shown in a
   * 			CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch
   * 			generates a default.</p>
   * 		       <p>You can put dynamic expressions into a label, so that it is more descriptive.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
   */
  Label?: string;

  /**
   * <p>When used in <code>GetMetricData</code>, this option indicates whether to return the
   * 			timestamps and raw data values of this metric. If you are performing this call just to
   * 			do math expressions and do not also need the raw data returned, you can specify
   * 				<code>False</code>. If you omit this, the default of <code>True</code> is
   * 			used.</p>
   * 		       <p>When used in <code>PutMetricAlarm</code>, specify <code>True</code> for the one expression result to use as the alarm. For all
   * 		other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>
   */
  ReturnData?: boolean;

  /**
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a
   * 			period can be as short as one minute (60 seconds) and must be a multiple of 60.
   * 			For high-resolution metrics that are collected at intervals of less than one minute,
   * 			the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics
   * 			stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.</p>
   */
  Period?: number;
}

export namespace MetricDataQuery {
  export const filterSensitiveLog = (obj: MetricDataQuery): any => ({
    ...obj,
  });
}

export type Statistic = "Average" | "Maximum" | "Minimum" | "SampleCount" | "Sum";

/**
 * <p>The details about a metric alarm.</p>
 */
export interface MetricAlarm {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmArn?: string;

  /**
   * <p>The description of the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date;

  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: string[];

  /**
   * <p>The state value for the alarm.</p>
   */
  StateValue?: StateValue | string;

  /**
   * <p>An explanation for the alarm state, in text format.</p>
   */
  StateReason?: string;

  /**
   * <p>An explanation for the alarm state, in JSON format.</p>
   */
  StateReasonData?: string;

  /**
   * <p>The time stamp of the last update to the alarm state.</p>
   */
  StateUpdatedTimestamp?: Date;

  /**
   * <p>The name of the metric associated with the alarm, if this is an alarm
   * 		based on a single metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the metric associated with the alarm.</p>
   */
  Namespace?: string;

  /**
   * <p>The statistic for the metric associated with the alarm, other than percentile.
   * 		    For percentile statistics, use <code>ExtendedStatistic</code>.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The percentile statistic for the metric associated with the alarm. Specify a value between
   * 			p0.0 and p100.</p>
   */
  ExtendedStatistic?: string;

  /**
   * <p>The dimensions for the metric associated with the alarm.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  Period?: number;

  /**
   * <p>The unit of the metric associated with the alarm.</p>
   */
  Unit?: StandardUnit | string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The number of data points that must be breaching to trigger the alarm.</p>
   */
  DatapointsToAlarm?: number;

  /**
   * <p>The value to compare with the specified statistic.</p>
   */
  Threshold?: number;

  /**
   * <p>The arithmetic operation to use when comparing the specified
   * 			statistic and threshold. The specified statistic value is used as the first operand.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>Sets how this alarm is to handle missing data points. If this parameter is omitted, the default behavior of <code>missing</code> is used.</p>
   */
  TreatMissingData?: string;

  /**
   * <p>Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change
   * 			during periods with too few data points to be statistically significant. If <code>evaluate</code> or this
   * 			parameter is not used, the alarm is always evaluated and possibly changes state no matter
   * 			how many data points are available.</p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * <p>An array of MetricDataQuery structures, used in an alarm based on a
   * 			metric math expression. Each structure either retrieves a
   * 			metric or performs a math expression.
   *
   * 			One item in the Metrics array is the math expression that the alarm watches.
   * 			This expression by designated by having <code>ReturnData</code> set to
   * 			true.</p>
   */
  Metrics?: MetricDataQuery[];

  /**
   * <p>In an alarm based on an anomaly detection model, this is the ID of the
   * 			<code>ANOMALY_DETECTION_BAND</code> function
   * 			used as the threshold for the alarm.</p>
   */
  ThresholdMetricId?: string;
}

export namespace MetricAlarm {
  export const filterSensitiveLog = (obj: MetricAlarm): any => ({
    ...obj,
  });
}

export interface DescribeAlarmsOutput {
  /**
   * <p>The information about any composite alarms returned by the operation.</p>
   */
  CompositeAlarms?: CompositeAlarm[];

  /**
   * <p>The information about any metric alarms returned by the operation.</p>
   */
  MetricAlarms?: MetricAlarm[];

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAlarmsOutput {
  export const filterSensitiveLog = (obj: DescribeAlarmsOutput): any => ({
    ...obj,
  });
}

export interface DescribeAlarmsForMetricInput {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The statistic for the metric, other than percentiles.
   * 		    For percentile statistics, use <code>ExtendedStatistics</code>.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The percentile statistic for the metric. Specify a value between
   * 		    p0.0 and p100.</p>
   */
  ExtendedStatistic?: string;

  /**
   * <p>The dimensions associated with the metric. If the metric has any associated
   * 			dimensions, you must specify them in order for the call to succeed.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  Period?: number;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: StandardUnit | string;
}

export namespace DescribeAlarmsForMetricInput {
  export const filterSensitiveLog = (obj: DescribeAlarmsForMetricInput): any => ({
    ...obj,
  });
}

export interface DescribeAlarmsForMetricOutput {
  /**
   * <p>The information for each alarm with the specified metric.</p>
   */
  MetricAlarms?: MetricAlarm[];
}

export namespace DescribeAlarmsForMetricOutput {
  export const filterSensitiveLog = (obj: DescribeAlarmsForMetricOutput): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyDetectorsInput {
  /**
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in one operation. The maximum
   * 			value that you can specify is 100.</p>
   * 			      <p>To retrieve the remaining results, make another call with the returned
   * 			<code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * <p>Limits the results to only the anomaly detection models that
   * 			are associated with the specified namespace.</p>
   */
  Namespace?: string;

  /**
   * <p>Limits the results to only the anomaly detection models that are associated with the
   * 			specified metric name. If there are multiple metrics with this name in different
   * 			namespaces that have anomaly detection models, they're all returned.</p>
   */
  MetricName?: string;

  /**
   * <p>Limits the results to only the anomaly detection models that are associated with the
   * 			specified metric dimensions. If there are multiple metrics that have these dimensions
   * 			and have anomaly detection models associated, they're all returned.</p>
   */
  Dimensions?: Dimension[];
}

export namespace DescribeAnomalyDetectorsInput {
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectorsInput): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyDetectorsOutput {
  /**
   * <p>The list of anomaly detection models returned by the operation.</p>
   */
  AnomalyDetectors?: AnomalyDetector[];

  /**
   * <p>A token that you can use in a subsequent operation to
   * 		retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAnomalyDetectorsOutput {
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectorsOutput): any => ({
    ...obj,
  });
}

export interface DescribeInsightRulesInput {
  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of rules.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this
   * 		parameter, the default of 500 is used.</p>
   */
  MaxResults?: number;
}

export namespace DescribeInsightRulesInput {
  export const filterSensitiveLog = (obj: DescribeInsightRulesInput): any => ({
    ...obj,
  });
}

/**
 * <p>This structure contains the definition for a Contributor Insights rule.</p>
 */
export interface InsightRule {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State: string | undefined;

  /**
   * <p>For rules that you create, this is always <code>{"Name": "CloudWatchLogRule", "Version": 1}</code>. For built-in rules,
   * 			this is <code>{"Name": "ServiceLogRule", "Version": 1}</code>
   *          </p>
   */
  Schema: string | undefined;

  /**
   * <p>The definition of the rule, as a JSON object. The definition contains the keywords used to define contributors,
   * 			the value to aggregate on if this rule returns a sum instead of a count, and the filters. For details on the valid syntax, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights
   * 				Rule Syntax</a>.</p>
   */
  Definition: string | undefined;
}

export namespace InsightRule {
  export const filterSensitiveLog = (obj: InsightRule): any => ({
    ...obj,
  });
}

export interface DescribeInsightRulesOutput {
  /**
   * <p>If this parameter is present, it is a token that marks the start of the next batch of returned results.      </p>
   */
  NextToken?: string;

  /**
   * <p>The rules returned by the operation.</p>
   */
  InsightRules?: InsightRule[];
}

export namespace DescribeInsightRulesOutput {
  export const filterSensitiveLog = (obj: DescribeInsightRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents filters for a dimension.</p>
 */
export interface DimensionFilter {
  /**
   * <p>The dimension name to be matched.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension to be matched.</p>
   */
  Value?: string;
}

export namespace DimensionFilter {
  export const filterSensitiveLog = (obj: DimensionFilter): any => ({
    ...obj,
  });
}

export interface DisableAlarmActionsInput {
  /**
   * <p>The names of the alarms.</p>
   */
  AlarmNames: string[] | undefined;
}

export namespace DisableAlarmActionsInput {
  export const filterSensitiveLog = (obj: DisableAlarmActionsInput): any => ({
    ...obj,
  });
}

export interface DisableInsightRulesInput {
  /**
   * <p>An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

export namespace DisableInsightRulesInput {
  export const filterSensitiveLog = (obj: DisableInsightRulesInput): any => ({
    ...obj,
  });
}

export interface DisableInsightRulesOutput {
  /**
   * <p>An array listing the rules that could not be disabled. You cannot disable built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

export namespace DisableInsightRulesOutput {
  export const filterSensitiveLog = (obj: DisableInsightRulesOutput): any => ({
    ...obj,
  });
}

export interface EnableAlarmActionsInput {
  /**
   * <p>The names of the alarms.</p>
   */
  AlarmNames: string[] | undefined;
}

export namespace EnableAlarmActionsInput {
  export const filterSensitiveLog = (obj: EnableAlarmActionsInput): any => ({
    ...obj,
  });
}

export interface EnableInsightRulesInput {
  /**
   * <p>An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

export namespace EnableInsightRulesInput {
  export const filterSensitiveLog = (obj: EnableInsightRulesInput): any => ({
    ...obj,
  });
}

export interface EnableInsightRulesOutput {
  /**
   * <p>An array listing the rules that could not be enabled. You cannot disable or enable built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

export namespace EnableInsightRulesOutput {
  export const filterSensitiveLog = (obj: EnableInsightRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The operation exceeded one or more limits.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface GetDashboardInput {
  /**
   * <p>The name of the dashboard to be described.</p>
   */
  DashboardName: string | undefined;
}

export namespace GetDashboardInput {
  export const filterSensitiveLog = (obj: GetDashboardInput): any => ({
    ...obj,
  });
}

export interface GetDashboardOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The detailed information about the dashboard, including what widgets are included and their location
   * 			on the dashboard. For more information about the <code>DashboardBody</code> syntax,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>. </p>
   */
  DashboardBody?: string;

  /**
   * <p>The name of the dashboard.</p>
   */
  DashboardName?: string;
}

export namespace GetDashboardOutput {
  export const filterSensitiveLog = (obj: GetDashboardOutput): any => ({
    ...obj,
  });
}

export interface GetInsightRuleReportInput {
  /**
   * <p>The name of the rule that you want to see data from.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as
   * 			<code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as
   * 			<code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.</p>
   */
  Period: number | undefined;

  /**
   * <p>The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.</p>
   */
  MaxContributorCount?: number;

  /**
   * <p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more
   * 		of the following metrics:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
   * 					contributor might change for each data point in the graph.</p>
   * 				           <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
   * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
   * 					by the rule's <code>Value</code>, during that period.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
   * 			         </li>
   *          </ul>
   */
  Metrics?: string[];

  /**
   * <p>Determines what statistic to use to rank the contributors. Valid values are SUM and MAXIMUM.</p>
   */
  OrderBy?: string;
}

export namespace GetInsightRuleReportInput {
  export const filterSensitiveLog = (obj: GetInsightRuleReportInput): any => ({
    ...obj,
  });
}

/**
 * <p>One data point related to one contributor.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
 */
export interface InsightRuleContributorDatapoint {
  /**
   * <p>The timestamp of the data point.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The approximate value that this contributor added during this timestamp.</p>
   */
  ApproximateValue: number | undefined;
}

export namespace InsightRuleContributorDatapoint {
  export const filterSensitiveLog = (obj: InsightRuleContributorDatapoint): any => ({
    ...obj,
  });
}

/**
 * <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then
 * 			a unique contributor is a unique combination of values from all the keys in the rule.</p>
 * 		       <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
 */
export interface InsightRuleContributor {
  /**
   * <p>One of the log entry field keywords that is used to define contributors for this rule.</p>
   */
  Keys: string[] | undefined;

  /**
   * <p>An approximation of the aggregate value that comes from this contributor.</p>
   */
  ApproximateAggregateValue: number | undefined;

  /**
   * <p>An array of the data points where this contributor is present. Only the data points when this contributor appeared are included in the array.</p>
   */
  Datapoints: InsightRuleContributorDatapoint[] | undefined;
}

export namespace InsightRuleContributor {
  export const filterSensitiveLog = (obj: InsightRuleContributor): any => ({
    ...obj,
  });
}

/**
 * <p>One data point from the metric time series returned in a Contributor Insights rule report.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
 */
export interface InsightRuleMetricDatapoint {
  /**
   * <p>The timestamp of the data point.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The number of unique contributors who published data during this timestamp.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  UniqueContributors?: number;

  /**
   * <p>The maximum value provided by one contributor during this timestamp. Each timestamp is evaluated separately,
   * 			so the identity of the max contributor
   * 		could be different for each timestamp.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  MaxContributorValue?: number;

  /**
   * <p>The number of occurrences that matched the rule during this data point.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  SampleCount?: number;

  /**
   * <p>The average value from all contributors during the time period represented by that data point.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Average?: number;

  /**
   * <p>The sum of the values from all contributors during the time period represented by that data point.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Sum?: number;

  /**
   * <p>The minimum value from a single contributor during the time period represented by that data point.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Minimum?: number;

  /**
   * <p>The maximum value from a single occurence from a single contributor during the time period represented by that data point.</p>
   * 		       <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Maximum?: number;
}

export namespace InsightRuleMetricDatapoint {
  export const filterSensitiveLog = (obj: InsightRuleMetricDatapoint): any => ({
    ...obj,
  });
}

export interface GetInsightRuleReportOutput {
  /**
   * <p>An array of the strings used as the keys for this rule. The keys are the dimensions used to classify contributors.
   * 			If the rule contains more than one key, then each unique combination of values for the keys is counted as a unique contributor.</p>
   */
  KeyLabels?: string[];

  /**
   * <p>Specifies whether this rule aggregates contributor data by COUNT or SUM.</p>
   */
  AggregationStatistic?: string;

  /**
   * <p>The sum of the values from all individual contributors that match the rule.</p>
   */
  AggregateValue?: number;

  /**
   * <p>An approximate count of the unique contributors found by this rule in this time period.</p>
   */
  ApproximateUniqueCount?: number;

  /**
   * <p>An array of the unique contributors found by this rule in this time period. If the rule contains multiple keys, each combination of values
   * 		for the keys counts as a unique contributor.</p>
   */
  Contributors?: InsightRuleContributor[];

  /**
   * <p>A time series of metric data points that matches the time period in the rule request.</p>
   */
  MetricDatapoints?: InsightRuleMetricDatapoint[];
}

export namespace GetInsightRuleReportOutput {
  export const filterSensitiveLog = (obj: GetInsightRuleReportOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This structure includes the <code>Timezone</code> parameter, which you can use
 * 			to specify your time zone so that the labels that are associated with returned metrics display the
 * 			correct time
 * 			for your time zone. </p>
 * 		       <p>The <code>Timezone</code> value affects a label only if you have a time-based
 * 		dynamic expression in the label. For more information about dynamic expressions in labels,
 * 		see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
 */
export interface LabelOptions {
  /**
   * <p>The time zone to use for metric data return in this operation.
   * 			The format is <code>+</code> or <code>-</code> followed by four digits.
   * 			The first two digits indicate the number of hours ahead or behind of UTC, and
   * 			the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour
   * 			and 30 minutes ahead of UTC. The default is +0000. </p>
   */
  Timezone?: string;
}

export namespace LabelOptions {
  export const filterSensitiveLog = (obj: LabelOptions): any => ({
    ...obj,
  });
}

export interface GetMetricDataInput {
  /**
   * <p>The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 500 <code>MetricDataQuery</code>
   * 		structures. Each of these structures can specify either a metric to retrieve, or a math expression to perform on retrieved data. </p>
   */
  MetricDataQueries: MetricDataQuery[] | undefined;

  /**
   * <p>The time stamp indicating the earliest data to be returned.</p>
   * 		       <p>The value specified is inclusive; results include data points with the specified time stamp. </p>
   * 		       <p>CloudWatch rounds the specified time stamp as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>Start time less than 15 days ago - Round down to the nearest whole minute.
   * 				For example, 12:32:34 is rounded down to 12:32:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval.
   * 				For example, 12:32:34 is rounded down to 12:30:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval.
   * 				For example, 12:32:34 is rounded down to 12:00:00.</p>
   *             </li>
   *          </ul>
   * 		       <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is
   * 			rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions
   * 			of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous
   * 			10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to
   * 			01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a
   * 			period of 5 seconds, you receive data
   * 			timestamped between 15:02:15 and 15:07:15.
   * 		</p>
   * 		       <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code>
   * 		values that align with the value of the metric's <code>Period</code> and sync up with
   * 		the beginning and end of an hour. For example, if the <code>Period</code> of a metric
   * 		is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response
   * 			from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The time stamp indicating the latest data to be returned.</p>
   * 		       <p>The value specified is exclusive; results include data points up to the specified time stamp.</p>
   * 		       <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code>
   * 			values that align with the value of the metric's <code>Period</code> and sync up with
   * 			the beginning and end of an hour. For example, if the <code>Period</code> of a metric
   * 			is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response
   * 			from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>Include this value, if it was returned by the previous <code>GetMetricData</code> operation,
   * 			to get the next set of data points.</p>
   */
  NextToken?: string;

  /**
   * <p>The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates
   * 			when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates
   * 			when the <code>MaxDatapoints</code> limit is reached.</p>
   */
  ScanBy?: ScanBy | string;

  /**
   * <p>The maximum number of data points the request should return before paginating. If you omit
   * 			this, the default of 100,800 is used.</p>
   */
  MaxDatapoints?: number;

  /**
   * <p>This structure includes the <code>Timezone</code> parameter, which you can use
   * 			to specify your time zone so that the labels of returned data display the
   * 			correct time
   * 			for your time zone. </p>
   */
  LabelOptions?: LabelOptions;
}

export namespace GetMetricDataInput {
  export const filterSensitiveLog = (obj: GetMetricDataInput): any => ({
    ...obj,
  });
}

/**
 * <p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p>
 */
export interface MessageData {
  /**
   * <p>The error code or status code associated with the message.</p>
   */
  Code?: string;

  /**
   * <p>The message text.</p>
   */
  Value?: string;
}

export namespace MessageData {
  export const filterSensitiveLog = (obj: MessageData): any => ({
    ...obj,
  });
}

export enum StatusCode {
  COMPLETE = "Complete",
  INTERNAL_ERROR = "InternalError",
  PARTIAL_DATA = "PartialData",
}

/**
 * <p>A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code>
 * 			structures. Each of these structures includes the data points for that metric, along
 * 			with the timestamps of those data points and other identifying information.</p>
 */
export interface MetricDataResult {
  /**
   * <p>The short name you specified to represent this metric.</p>
   */
  Id?: string;

  /**
   * <p>The human-readable label associated with the data.</p>
   */
  Label?: string;

  /**
   * <p>The timestamps for the data points, formatted in Unix timestamp format. The number of
   * 			timestamps always matches the number of values and the value for Timestamps[x] is
   * 			Values[x].</p>
   */
  Timestamps?: Date[];

  /**
   * <p>The data points for the metric corresponding to <code>Timestamps</code>. The number of
   * 			values always matches the number of timestamps and the timestamp for Values[x] is
   * 			Timestamps[x].</p>
   */
  Values?: number[];

  /**
   * <p>The status of the returned data. <code>Complete</code> indicates that all data points in the requested time range were returned.
   * 			<code>PartialData</code> means that an incomplete set of data points were returned.
   * 					You can use the <code>NextToken</code> value that was returned and repeat your request to get more data points.
   * 			<code>NextToken</code> is not returned if you are performing a math expression. <code>InternalError</code>
   * 			indicates that an error occurred. Retry your request using <code>NextToken</code>, if present.</p>
   */
  StatusCode?: StatusCode | string;

  /**
   * <p>A list of messages with additional information about the data returned.</p>
   */
  Messages?: MessageData[];
}

export namespace MetricDataResult {
  export const filterSensitiveLog = (obj: MetricDataResult): any => ({
    ...obj,
  });
}

export interface GetMetricDataOutput {
  /**
   * <p>The metrics that are returned, including the metric name, namespace, and dimensions.</p>
   */
  MetricDataResults?: MetricDataResult[];

  /**
   * <p>A token that marks the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * <p>Contains a message about this <code>GetMetricData</code> operation, if the operation results in such a message.
   * 			An example of a message that
   * 			might be returned is <code>Maximum number of allowed metrics exceeded</code>. If there is a message, as much of the
   * 			operation as possible is still executed.</p>
   * 		       <p>A message appears here only if it is related to the global <code>GetMetricData</code> operation. Any message
   * 			about a specific metric returned by the operation appears in the <code>MetricDataResult</code> object returned for that metric.</p>
   */
  Messages?: MessageData[];
}

export namespace GetMetricDataOutput {
  export const filterSensitiveLog = (obj: GetMetricDataOutput): any => ({
    ...obj,
  });
}

export interface GetMetricStatisticsInput {
  /**
   * <p>The namespace of the metric, with or without spaces.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the metric, with or without spaces.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric.
   * 		    If a specific combination of dimensions was not published, you can't retrieve statistics for it.
   * 		    You must specify the same dimensions that were used when the metrics were created. For an example,
   * 		    see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The time stamp that determines the first data point to return. Start times are
   * 			evaluated relative to the time that CloudWatch receives the request.</p>
   * 	        <p>The value specified is inclusive; results include data points with the specified time stamp.
   * 	    	In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p>
   * 		       <p>CloudWatch rounds the specified time stamp as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>Start time less than 15 days ago - Round down to the nearest whole minute.
   * 			    For example, 12:32:34 is rounded down to 12:32:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval.
   * 			    For example, 12:32:34 is rounded down to 12:30:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval.
   * 			    For example, 12:32:34 is rounded down to 12:00:00.</p>
   *             </li>
   *          </ul>
   * 		       <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is
   * 			rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions
   * 			of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous
   * 			10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to
   * 			01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a
   * 			period of 5 seconds, you receive data
   * 			timestamped between 15:02:15 and 15:07:15.
   * 		</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The time stamp that determines the last data point to return.</p>
   * 		       <p>The value specified is exclusive; results include data points up to the specified time stamp.
   * 			In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can
   * 			be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   * 			at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   * 		are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   * 		       <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than
   * 		    3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p>
   * 		       <ul>
   *             <li>
   *                <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p>
   *             </li>
   *          </ul>
   */
  Period: number | undefined;

  /**
   * <p>The metric statistics, other than percentile. For percentile statistics,
   * 		    use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must
   * 		specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.</p>
   */
  Statistics?: (Statistic | string)[];

  /**
   * <p>The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must
   * 			specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not
   * 			available for metrics when any of the metric values are negative numbers.</p>
   */
  ExtendedStatistics?: string[];

  /**
   * <p>The unit for a given metric.
   * 			If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified
   * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   */
  Unit?: StandardUnit | string;
}

export namespace GetMetricStatisticsInput {
  export const filterSensitiveLog = (obj: GetMetricStatisticsInput): any => ({
    ...obj,
  });
}

export interface GetMetricStatisticsOutput {
  /**
   * <p>A label for the specified metric.</p>
   */
  Label?: string;

  /**
   * <p>The data points for the specified metric.</p>
   */
  Datapoints?: Datapoint[];
}

export namespace GetMetricStatisticsOutput {
  export const filterSensitiveLog = (obj: GetMetricStatisticsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Parameters were used together that cannot be used together.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidParameterCombinationException {
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

export interface GetMetricStreamInput {
  /**
   * <p>The name of the metric stream to retrieve information about.</p>
   */
  Name: string | undefined;
}

export namespace GetMetricStreamInput {
  export const filterSensitiveLog = (obj: GetMetricStreamInput): any => ({
    ...obj,
  });
}

/**
 * <p>This structure contains the name of one of the metric namespaces that is listed in
 * 		a filter of a metric stream.</p>
 */
export interface MetricStreamFilter {
  /**
   * <p>The name of the metric namespace in the filter.</p>
   */
  Namespace?: string;
}

export namespace MetricStreamFilter {
  export const filterSensitiveLog = (obj: MetricStreamFilter): any => ({
    ...obj,
  });
}

export enum MetricStreamOutputFormat {
  JSON = "json",
  OPEN_TELEMETRY_0_7 = "opentelemetry0.7",
}

export interface GetMetricStreamOutput {
  /**
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the metric stream.</p>
   */
  Name?: string;

  /**
   * <p>If this array of metric namespaces is present, then these
   * 			namespaces are the only
   * 		metric namespaces that are streamed by this metric stream.</p>
   */
  IncludeFilters?: MetricStreamFilter[];

  /**
   * <p>If this array of metric namespaces is present, then these namespaces are the only
   * 			metric namespaces that are not streamed by this metric stream. In this case, all other metric namespaces in
   * 		the account are streamed by this metric stream.</p>
   */
  ExcludeFilters?: MetricStreamFilter[];

  /**
   * <p>The ARN of the Amazon Kinesis Firehose delivery stream that is used by
   * 		this metric stream.</p>
   */
  FirehoseArn?: string;

  /**
   * <p>The ARN of the IAM role that is used by this metric stream.</p>
   */
  RoleArn?: string;

  /**
   * <p>The state of the metric stream. The possible values are <code>running</code>
   * 		and <code>stopped</code>.</p>
   */
  State?: string;

  /**
   * <p>The date that the metric stream was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date of the most recent update to the metric stream's configuration.</p>
   */
  LastUpdateDate?: Date;

  /**
   * <p></p>
   */
  OutputFormat?: MetricStreamOutputFormat | string;
}

export namespace GetMetricStreamOutput {
  export const filterSensitiveLog = (obj: GetMetricStreamOutput): any => ({
    ...obj,
  });
}

export interface GetMetricWidgetImageInput {
  /**
   * <p>A JSON string that defines the bitmap graph to be retrieved. The string includes the
   * 			metrics to include in the graph, statistics, annotations, title, axis limits, and so on.
   * 			You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p>
   * 		       <p>For more information about the syntax of <code>MetricWidget</code> see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p>
   *
   * 		       <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation
   * 			point appears next to the graph legend.</p>
   */
  MetricWidget: string | undefined;

  /**
   * <p>The format of the resulting image. Only PNG images are supported.</p>
   *
   * 		       <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the
   * 			content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code>
   * 			field. For example:</p>
   *
   * 		       <p>
   *             <code>
   * 			<GetMetricWidgetImageResponse xmlns=<URLstring>></code>
   *          </p>
   * 		       <p>
   *             <code>  <GetMetricWidgetImageResult></code>
   *          </p>
   * 		       <p>
   *             <code>    <MetricWidgetImage></code>
   *          </p>
   * 		       <p>
   *             <code>       iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code>
   *          </p>
   * 		       <p>
   *             <code>    </MetricWidgetImage></code>
   *          </p>
   * 		       <p>
   *             <code>  </GetMetricWidgetImageResult></code>
   *          </p>
   * 		       <p>
   *             <code>  <ResponseMetadata></code>
   *          </p>
   * 		       <p>
   *             <code>    <RequestId>6f0d4192-4d42-11e8-82c1-f539a07e0e3b</RequestId></code>
   *          </p>
   * 		       <p>
   *             <code>  </ResponseMetadata></code>
   *          </p>
   * 		       <p>
   *             <code></GetMetricWidgetImageResponse></code>
   *          </p>
   *
   * 		       <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most
   * 			use cases, and all actions using an AWS SDK, you should use <code>png</code>. If you specify
   * 			<code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>,
   * 			and the body of the response is a PNG image. </p>
   */
  OutputFormat?: string;
}

export namespace GetMetricWidgetImageInput {
  export const filterSensitiveLog = (obj: GetMetricWidgetImageInput): any => ({
    ...obj,
  });
}

export interface GetMetricWidgetImageOutput {
  /**
   * <p>The image of the graph, in the output format specified. The output is base64-encoded.</p>
   */
  MetricWidgetImage?: Uint8Array;
}

export namespace GetMetricWidgetImageOutput {
  export const filterSensitiveLog = (obj: GetMetricWidgetImageOutput): any => ({
    ...obj,
  });
}

export interface ListDashboardsInput {
  /**
   * <p>If you specify this parameter, only
   * 			the dashboards with names starting with the specified string are listed. The maximum length is 255, and
   * 			valid characters are A-Z, a-z, 0-9, ".", "-", and "_".
   *
   * 		</p>
   */
  DashboardNamePrefix?: string;

  /**
   * <p>The token returned by a previous call to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

export namespace ListDashboardsInput {
  export const filterSensitiveLog = (obj: ListDashboardsInput): any => ({
    ...obj,
  });
}

export interface ListDashboardsOutput {
  /**
   * <p>The list of matching dashboards.</p>
   */
  DashboardEntries?: DashboardEntry[];

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

export namespace ListDashboardsOutput {
  export const filterSensitiveLog = (obj: ListDashboardsOutput): any => ({
    ...obj,
  });
}

export enum RecentlyActive {
  PT3H = "PT3H",
}

export interface ListMetricsInput {
  /**
   * <p>The metric namespace to filter against. Only the namespace that matches exactly
   * 		will be returned.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric to filter against.  Only the metrics with names that match exactly
   * 			will be returned.</p>
   */
  MetricName?: string;

  /**
   * <p>The dimensions to filter against.  Only the dimensions that match exactly
   * 			will be returned.</p>
   */
  Dimensions?: DimensionFilter[];

  /**
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;

  /**
   * <p>To filter the results to show only metrics that have had data points published
   * 			in the past three hours, specify this parameter
   * 			with a value of <code>PT3H</code>. This is the only valid value
   * 			for this parameter.</p>
   * 		       <p>The results that are returned are an approximation of the value you specify. There
   * 		is a low probability that the returned results include metrics with last published
   * 		data as much as 40 minutes more than the specified time interval.</p>
   */
  RecentlyActive?: RecentlyActive | string;
}

export namespace ListMetricsInput {
  export const filterSensitiveLog = (obj: ListMetricsInput): any => ({
    ...obj,
  });
}

export interface ListMetricsOutput {
  /**
   * <p>The metrics that match your request. </p>
   */
  Metrics?: Metric[];

  /**
   * <p>The token that marks the start of the next batch of returned results. </p>
   */
  NextToken?: string;
}

export namespace ListMetricsOutput {
  export const filterSensitiveLog = (obj: ListMetricsOutput): any => ({
    ...obj,
  });
}

export interface ListMetricStreamsInput {
  /**
   * <p>Include this value, if it was returned by the previous call, to get the next set of metric streams.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in one operation.</p>
   */
  MaxResults?: number;
}

export namespace ListMetricStreamsInput {
  export const filterSensitiveLog = (obj: ListMetricStreamsInput): any => ({
    ...obj,
  });
}

/**
 * <p>This structure contains the configuration information about one metric stream.</p>
 */
export interface MetricStreamEntry {
  /**
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;

  /**
   * <p>The date that the metric stream was originally created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date that the configuration of this metric stream was most recently updated.</p>
   */
  LastUpdateDate?: Date;

  /**
   * <p>The name of the metric stream.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the Kinesis Firehose devlivery stream that is used for this metric stream.</p>
   */
  FirehoseArn?: string;

  /**
   * <p>The current state of this stream. Valid values are <code>running</code> and <code>stopped</code>.</p>
   */
  State?: string;

  /**
   * <p>The output format of this metric stream. Valid values are
   * 			<code>json</code>
   * 			and <code>opentelemetry0.7</code>.</p>
   */
  OutputFormat?: MetricStreamOutputFormat | string;
}

export namespace MetricStreamEntry {
  export const filterSensitiveLog = (obj: MetricStreamEntry): any => ({
    ...obj,
  });
}

export interface ListMetricStreamsOutput {
  /**
   * <p>The token that marks the start of the next batch of returned results. You can use this
   * 		token in a subsequent operation to get the next batch of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The array of metric stream information.</p>
   */
  Entries?: MetricStreamEntry[];
}

export namespace ListMetricStreamsOutput {
  export const filterSensitiveLog = (obj: ListMetricStreamsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the CloudWatch resource that you want to view tags for.</p>
   * 		       <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   * 		       <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i>
   *             </code>
   *          </p>
   * 	        <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair associated with a CloudWatch resource.</p>
 */
export interface Tag {
  /**
   * <p>A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your
   * 		resources.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

export interface PutAnomalyDetectorInput {
  /**
   * <p>The namespace of the metric to create the anomaly detection model for.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the metric to create the anomaly detection model for.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The metric dimensions to create the anomaly detection model for.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The statistic to use for the metric and the anomaly detection model.</p>
   */
  Stat: string | undefined;

  /**
   * <p>The configuration specifies details about how the
   * 			anomaly detection model is to be trained, including
   * 			time ranges to exclude when training and updating the model.
   * 			You can specify as many as 10 time ranges.</p>
   * 		       <p>The configuration can also include the time zone to use for
   * 			the metric.</p>
   */
  Configuration?: AnomalyDetectorConfiguration;
}

export namespace PutAnomalyDetectorInput {
  export const filterSensitiveLog = (obj: PutAnomalyDetectorInput): any => ({
    ...obj,
  });
}

export interface PutAnomalyDetectorOutput {}

export namespace PutAnomalyDetectorOutput {
  export const filterSensitiveLog = (obj: PutAnomalyDetectorOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for alarms for this customer has already been reached.</p>
 */
export interface LimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "LimitExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LimitExceededFault {
  export const filterSensitiveLog = (obj: LimitExceededFault): any => ({
    ...obj,
  });
}

export interface PutCompositeAlarmInput {
  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is
   * 			<code>TRUE</code>.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   * 		       <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   * 			| <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>
   *             </code>
   *          </p>
   */
  AlarmActions?: string[];

  /**
   * <p>The description for the composite alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * <p>The name for the composite alarm. This name must be unique within the Region.</p>
   */
  AlarmName: string | undefined;

  /**
   * <p>An expression that specifies which other alarms are to be evaluated to determine this
   * 			composite alarm's state. For each alarm that you reference, you
   * 			designate a function that
   * 			specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You
   * 			can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the
   * 			functions in your expression.</p>
   * 		       <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p>
   * 		       <p>Functions can include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 			alarm is in ALARM state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 				alarm is in OK state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 				alarm is in INSUFFICIENT_DATA state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE</code> always evaluates to TRUE.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE</code> always evaluates to FALSE.</p>
   *             </li>
   *          </ul>
   * 		       <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and
   * 		for testing your alarm actions.</p>
   * 		       <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p>
   * 		       <p>The following
   * 			are some examples of <code>AlarmRule</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only
   * 				if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code>
   * 					specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state
   * 					and DeploymentInProgress is not in ALARM state. This example reduces
   * 					alarm noise during a known deployment window.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM
   * 				state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state.
   * 				This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an
   * 				alarm action on high CPU or disk usage if a known network problem is also occurring.</p>
   *             </li>
   *          </ul>
   * 		       <p>The <code>AlarmRule</code> can specify as many as 100
   * 			"children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements
   * 			are child alarms, TRUE or FALSE statements, and
   * 			parentheses.</p>
   */
  AlarmRule: string | undefined;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   * 		       <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   *          </p>
   */
  InsufficientDataActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to an <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   *
   * 		       <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   *          </p>
   */
  OKActions?: string[];

  /**
   * <p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p>
   * 		       <p>Tags can help you organize and categorize your
   * 			resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with
   * 			certain tag values.</p>
   */
  Tags?: Tag[];
}

export namespace PutCompositeAlarmInput {
  export const filterSensitiveLog = (obj: PutCompositeAlarmInput): any => ({
    ...obj,
  });
}

export interface PutDashboardInput {
  /**
   * <p>The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing
   * 			its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are
   * 			A-Z, a-z, 0-9, "-", and "_".  This parameter is required.</p>
   */
  DashboardName: string | undefined;

  /**
   * <p>The detailed information about the dashboard in JSON format, including the widgets to include and their location
   * 			on the dashboard.  This parameter is required.</p>
   * 		       <p>For more information about the syntax,
   * 			see  <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>
   */
  DashboardBody: string | undefined;
}

export namespace PutDashboardInput {
  export const filterSensitiveLog = (obj: PutDashboardInput): any => ({
    ...obj,
  });
}

export interface PutDashboardOutput {
  /**
   * <p>If the input for <code>PutDashboard</code> was correct and the dashboard was successfully created or modified, this result is empty.</p>
   * 			      <p>If this result includes only warning messages, then the input was valid enough for the dashboard to be
   * 			created or modified, but some elements of the dashboard
   * 			might not render.</p>
   * 				     <p>If this result includes error messages, the input was not valid and the operation failed.</p>
   */
  DashboardValidationMessages?: DashboardValidationMessage[];
}

export namespace PutDashboardOutput {
  export const filterSensitiveLog = (obj: PutDashboardOutput): any => ({
    ...obj,
  });
}

export interface PutInsightRuleInput {
  /**
   * <p>A unique name for the rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The state of the rule. Valid values are ENABLED and DISABLED.</p>
   */
  RuleState?: string;

  /**
   * <p>The definition of the rule, as a JSON object. For details on the valid syntax, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights
   * 			Rule Syntax</a>.</p>
   */
  RuleDefinition: string | undefined;

  /**
   * <p>A list of key-value pairs to associate with the Contributor Insights rule.
   * 			You can associate as many as 50 tags with a rule.</p>
   * 		       <p>Tags can help you organize and categorize your
   * 			resources. You can also use them to scope user permissions, by
   * 			granting a user permission to access or change only the resources that have
   * 			certain tag values.</p>
   * 		       <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code>
   * 		permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p>
   * 		       <p>If you are using this operation to update an existing Contributor Insights rule, any tags
   * 		you specify in this parameter are ignored. To change the tags of an existing rule, use
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
   */
  Tags?: Tag[];
}

export namespace PutInsightRuleInput {
  export const filterSensitiveLog = (obj: PutInsightRuleInput): any => ({
    ...obj,
  });
}

export interface PutInsightRuleOutput {}

export namespace PutInsightRuleOutput {
  export const filterSensitiveLog = (obj: PutInsightRuleOutput): any => ({
    ...obj,
  });
}

export interface PutMetricAlarmInput {
  /**
   * <p>The name for the alarm. This name must be unique within the Region.</p>
   */
  AlarmName: string | undefined;

  /**
   * <p>The description for the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state. The default is
   * 			<code>TRUE</code>.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The actions to execute when this alarm transitions to an <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   * 		       <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:terminate</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:recover</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:reboot</code> |
   * 			<code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code> |
   * 			<code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *             </code>
   *          </p>
   *
   * 		       <p>Valid Values (for use with IAM roles):
   * 			<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> |
   * 			    <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code>
   *          </p>
   */
  OKActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   * 		       <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:terminate</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:recover</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:reboot</code> |
   * 			<code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code> |
   * 			<code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *             </code>
   * 			| <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>
   *             </code>
   *          </p>
   *
   * 		       <p>Valid Values (for use with IAM roles):
   * 			<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code>
   *          </p>
   */
  AlarmActions?: string[];

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *
   * 		       <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:terminate</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:recover</code> |
   * 			<code>arn:aws:automate:<i>region</i>:ec2:reboot</code> |
   * 			<code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code> |
   * 			<code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *             </code>
   *          </p>
   *
   * 		       <p>Valid Values (for use with IAM roles):
   * 			<code>>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> |
   * 				<code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code>
   *          </p>
   */
  InsufficientDataActions?: string[];

  /**
   * <p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code>
   * 		operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p>
   * 		       <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the
   * 			<code>Dimensions</code>, <code>Period</code>,
   * 			<code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify
   * 		all this information in the <code>Metrics</code> array.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace for the metric associated specified in <code>MetricName</code>.</p>
   */
  Namespace?: string;

  /**
   * <p>The statistic for the metric specified in <code>MetricName</code>, other than percentile.
   * 		    For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify
   * 			a <code>MetricName</code>, you must
   * 		specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The percentile statistic for the metric specified in <code>MetricName</code>. Specify a value
   * 			between p0.0 and p100. When you call <code>PutMetricAlarm</code> and specify
   * 			a <code>MetricName</code>, you must
   * 			specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.</p>
   */
  ExtendedStatistic?: string;

  /**
   * <p>The dimensions for the metric specified in <code>MetricName</code>.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is
   * 			evaluated. Valid values are 10, 30, and any multiple of 60.</p>
   * 		       <p>
   *             <code>Period</code> is required for alarms based on static thresholds. If
   * 		you are creating an alarm based on a metric math expression, you specify the
   * 		period for each metric within the objects in the <code>Metrics</code> array.</p>
   * 		       <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a
   * 				<code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have
   * 			sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case,
   * 			it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm
   * 			might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm,
   * 			which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   * 		       <p>An alarm's total current evaluation period can
   * 		be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>
   */
  Period?: number;

  /**
   * <p>The unit of measure for the statistic. For example, the units for the Amazon EC2
   * 			NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance
   * 			receives on all network interfaces. You can also specify a unit when you create a custom
   * 			metric. Units help provide conceptual meaning to your data. Metric data points that
   * 			specify a unit of measure, such as Percent, are aggregated separately.</p>
   * 		       <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the
   * 			metric and attempts to evaluate the alarm.
   * 			Usually, metrics are
   * 			published with only one unit, so the alarm
   * 			works as intended.</p>
   * 			      <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's
   * 			behavior is not defined and
   * 			it behaves predictably.</p>
   * 		       <p>We recommend omitting <code>Unit</code> so that you don't inadvertently
   * 			specify an incorrect unit that is not published for this metric. Doing so
   * 			causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>
   */
  Unit?: StandardUnit | string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold. If you are
   * 			setting an alarm that requires that a number of consecutive data points be breaching to
   * 			trigger the alarm, this value specifies that number. If you are setting an "M out of N"
   * 			alarm, this value is the N.</p>
   * 		       <p>An alarm's total current evaluation period can
   * 			be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>
   */
  EvaluationPeriods: number | undefined;

  /**
   * <p>The number of data points that must be breaching to trigger the alarm. This is used only if you are setting
   * 			an "M out of N" alarm. In that case, this value is the M. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   */
  DatapointsToAlarm?: number;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   * 		       <p>This parameter is required for alarms based on static thresholds, but should
   * 		not be used for alarms based on anomaly detection models.</p>
   */
  Threshold?: number;

  /**
   * <p> The arithmetic operation to use when comparing the specified statistic and
   * 			threshold. The specified statistic value is used as the first operand.</p>
   * 		       <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>,
   * 			<code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code>
   * 		are used only for alarms based on anomaly detection models.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch
   * 				Alarms Treats Missing Data</a>.</p>
   * 		       <p>Valid Values: <code>breaching | notBreaching | ignore | missing</code>
   *          </p>
   */
  TreatMissingData?: string;

  /**
   * <p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be
   * 			statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state
   * 			no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p>
   * 		       <p>Valid Values: <code>evaluate | ignore</code>
   *          </p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * <p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a
   * 			metric math expression. For each <code>PutMetricAlarm</code>
   * 			operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p>
   * 		       <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p>
   * 		       <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression
   * 			by setting <code>ReturnData</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p>
   * 		       <p>If you use the <code>Metrics</code> parameter, you cannot include the <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>,
   * 			<code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation.
   * 			Instead, you retrieve
   * 		the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>
   */
  Metrics?: MetricDataQuery[];

  /**
   * <p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.</p>
   * 		       <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   * 			permissions by granting a user
   * 			permission to access or change only resources with certain tag values.</p>
   * 		       <p>If you are using this operation to update an existing alarm, any tags
   * 			you specify in this parameter are ignored. To change the tags of an existing alarm, use
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>
   * 			or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If this is an alarm based on an anomaly detection model, make this value match
   * 			the ID of
   * 			the <code>ANOMALY_DETECTION_BAND</code> function.</p>
   * 		       <p>For an example of how to use this parameter, see the
   * 			<b>Anomaly Detection
   * 		Model Alarm</b> example on this page.</p>
   * 		       <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>
   */
  ThresholdMetricId?: string;
}

export namespace PutMetricAlarmInput {
  export const filterSensitiveLog = (obj: PutMetricAlarmInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a set of statistics that describes a specific metric. </p>
 */
export interface StatisticSet {
  /**
   * <p>The number of samples used for the statistic set.</p>
   */
  SampleCount: number | undefined;

  /**
   * <p>The sum of values for the sample set.</p>
   */
  Sum: number | undefined;

  /**
   * <p>The minimum value of the sample set.</p>
   */
  Minimum: number | undefined;

  /**
   * <p>The maximum value of the sample set.</p>
   */
  Maximum: number | undefined;
}

export namespace StatisticSet {
  export const filterSensitiveLog = (obj: StatisticSet): any => ({
    ...obj,
  });
}

/**
 * <p>Encapsulates the information sent to either create a metric or add new values
 * 			to be aggregated into an existing metric.</p>
 */
export interface MetricDatum {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The dimensions associated with the metric.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The value for the metric.</p>
   * 		       <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or
   * 			too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity)
   * 			are not supported.</p>
   */
  Value?: number;

  /**
   * <p>The statistical values for the metric.</p>
   */
  StatisticValues?: StatisticSet;

  /**
   * <p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once
   * 		in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period.
   * 		You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p>
   * 		       <p>Although the <code>Values</code> array accepts numbers of type
   * 			<code>Double</code>, CloudWatch rejects values that are either too small
   * 			or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
   * 			-Infinity) are not supported.</p>
   */
  Values?: number[];

  /**
   * <p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array
   * 			is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p>
   * 		       <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you
   * 		include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>
   */
  Counts?: number[];

  /**
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p>
   * 		       <p>In
   * 		a <code>Get</code> operation, this displays the unit that is used for the metric.</p>
   */
  Unit?: StandardUnit | string;

  /**
   * <p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with
   * 			sub-minute resolution down to one second.
   * 		Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available
   * 		only for custom metrics. For more information about high-resolution metrics,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.
   * 		</p>
   * 	        <p>This field is optional, if you do not specify it the default of 60 is used.</p>
   */
  StorageResolution?: number;
}

export namespace MetricDatum {
  export const filterSensitiveLog = (obj: MetricDatum): any => ({
    ...obj,
  });
}

export interface PutMetricDataInput {
  /**
   * <p>The namespace for the metric data.</p>
   * 		       <p>To avoid conflicts
   * 			with AWS service namespaces, you should not specify a namespace that begins with <code>AWS/</code>
   *          </p>
   */
  Namespace: string | undefined;

  /**
   * <p>The data for the metric. The array can include no more than 20 metrics per call.</p>
   */
  MetricData: MetricDatum[] | undefined;
}

export namespace PutMetricDataInput {
  export const filterSensitiveLog = (obj: PutMetricDataInput): any => ({
    ...obj,
  });
}

export interface PutMetricStreamInput {
  /**
   * <p>If you are creating a new metric stream, this is the name for the new stream. The name
   * 		must be different than the names of other metric streams in this account and Region.</p>
   * 		       <p>If you are updating a metric stream, specify the name of that stream here.</p>
   * 		       <p>Valid characters are A-Z, a-z, 0-9, "-" and "_".</p>
   */
  Name: string | undefined;

  /**
   * <p>If you specify this parameter, the stream sends only the
   * 		metrics from the metric namespaces that you specify here.</p>
   * 		       <p>You cannot include <code>IncludeFilters</code> and <code>ExcludeFilters</code>
   * 		in the same operation.</p>
   */
  IncludeFilters?: MetricStreamFilter[];

  /**
   * <p>If you specify this parameter, the stream sends metrics from all
   * 			metric namespaces except for the namespaces that you specify here.</p>
   * 		       <p>You cannot include <code>ExcludeFilters</code> and <code>IncludeFilters</code> in
   * 			the same operation.</p>
   */
  ExcludeFilters?: MetricStreamFilter[];

  /**
   * <p>The ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream.
   * 		This Amazon Kinesis Firehose delivery stream must already exist and must be in the same
   * 		account as the metric stream.</p>
   */
  FirehoseArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that this metric stream will use to access
   * 			Amazon Kinesis Firehose resources. This IAM role must already
   * 		exist and must be in the same account as the metric stream. This IAM role must include the following permissions:</p>
   * 		       <ul>
   *             <li>
   *                <p>firehose:PutRecord</p>
   *             </li>
   *             <li>
   *                <p>firehose:PutRecordBatch</p>
   *             </li>
   *          </ul>
   */
  RoleArn: string | undefined;

  /**
   * <p>The output format for the stream. Valid values are <code>json</code>
   * 		and <code>opentelemetry0.7</code>. For more information about metric stream
   * 		output formats, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html">
   * 				Metric streams output formats</a>.</p>
   */
  OutputFormat: MetricStreamOutputFormat | string | undefined;

  /**
   * <p>A list of key-value pairs to associate with the metric stream. You can associate as
   * 			many as 50 tags with a metric stream.</p>
   * 		       <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   * 			permissions by granting a user
   * 			permission to access or change only resources with certain tag values.</p>
   */
  Tags?: Tag[];
}

export namespace PutMetricStreamInput {
  export const filterSensitiveLog = (obj: PutMetricStreamInput): any => ({
    ...obj,
  });
}

export interface PutMetricStreamOutput {
  /**
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;
}

export namespace PutMetricStreamOutput {
  export const filterSensitiveLog = (obj: PutMetricStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Data was not syntactically valid JSON.</p>
 */
export interface InvalidFormatFault extends __SmithyException, $MetadataBearer {
  name: "InvalidFormatFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidFormatFault {
  export const filterSensitiveLog = (obj: InvalidFormatFault): any => ({
    ...obj,
  });
}

export interface SetAlarmStateInput {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName: string | undefined;

  /**
   * <p>The value of the state.</p>
   */
  StateValue: StateValue | string | undefined;

  /**
   * <p>The reason that this alarm is set to this specific state, in text format.</p>
   */
  StateReason: string | undefined;

  /**
   * <p>The reason that this alarm is set to this specific state, in JSON format.</p>
   * 		       <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling
   * 		alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>
   */
  StateReasonData?: string;
}

export namespace SetAlarmStateInput {
  export const filterSensitiveLog = (obj: SetAlarmStateInput): any => ({
    ...obj,
  });
}

export interface StartMetricStreamsInput {
  /**
   * <p>The array of the names of metric streams to start streaming.</p>
   * 		       <p>This is an "all or nothing" operation. If you do not have
   * 		permission to access all of the metric streams that you list here, then none of the streams that you list
   * 		in the operation will start streaming.</p>
   */
  Names: string[] | undefined;
}

export namespace StartMetricStreamsInput {
  export const filterSensitiveLog = (obj: StartMetricStreamsInput): any => ({
    ...obj,
  });
}

export interface StartMetricStreamsOutput {}

export namespace StartMetricStreamsOutput {
  export const filterSensitiveLog = (obj: StartMetricStreamsOutput): any => ({
    ...obj,
  });
}

export interface StopMetricStreamsInput {
  /**
   * <p>The array of the names of metric streams to stop streaming.</p>
   * 		       <p>This is an "all or nothing" operation. If you do not have
   * 			permission to access all of the metric streams that you list here, then none of the streams that you list
   * 			in the operation will stop streaming.</p>
   */
  Names: string[] | undefined;
}

export namespace StopMetricStreamsInput {
  export const filterSensitiveLog = (obj: StopMetricStreamsInput): any => ({
    ...obj,
  });
}

export interface StopMetricStreamsOutput {}

export namespace StopMetricStreamsOutput {
  export const filterSensitiveLog = (obj: StopMetricStreamsOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The ARN of the CloudWatch resource that you're adding tags to.</p>
   * 		       <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   * 		       <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i>
   *             </code>
   *          </p>
   * 		       <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the alarm.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The ARN of the CloudWatch resource that you're removing tags from.</p>
   * 		       <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   * 		       <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i>
   *             </code>
   *          </p>
   * 	        <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}
