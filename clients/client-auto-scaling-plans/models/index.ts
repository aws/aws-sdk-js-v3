import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents an application source.</p>
 */
export interface ApplicationSource {
  __type?: "ApplicationSource";
  /**
   * <p>The Amazon Resource Name (ARN) of a AWS CloudFormation stack.</p>
   */
  CloudFormationStackARN?: string;

  /**
   * <p>A set of tags (up to 50).</p>
   */
  TagFilters?: Array<TagFilter>;
}

export namespace ApplicationSource {
  export function isa(o: any): o is ApplicationSource {
    return __isa(o, "ApplicationSource");
  }
}

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 */
export interface ConcurrentUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentUpdateException";
  $fault: "server";
  Message?: string;
}

export namespace ConcurrentUpdateException {
  export function isa(o: any): o is ConcurrentUpdateException {
    return __isa(o, "ConcurrentUpdateException");
  }
}

export interface CreateScalingPlanRequest {
  __type?: "CreateScalingPlanRequest";
  /**
   * <p>A CloudFormation stack or set of tags. You can create one scaling plan per application
   *          source.</p>
   */
  ApplicationSource: ApplicationSource | undefined;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions: Array<ScalingInstruction> | undefined;

  /**
   * <p>The name of the scaling plan. Names cannot contain vertical bars, colons, or forward
   *          slashes.</p>
   */
  ScalingPlanName: string | undefined;
}

export namespace CreateScalingPlanRequest {
  export function isa(o: any): o is CreateScalingPlanRequest {
    return __isa(o, "CreateScalingPlanRequest");
  }
}

export interface CreateScalingPlanResponse {
  __type?: "CreateScalingPlanResponse";
  /**
   * <p>The version number of the scaling plan. This value is always 1.</p>
   *          <p>Currently, you cannot specify multiple scaling plan versions.</p>
   */
  ScalingPlanVersion: number | undefined;
}

export namespace CreateScalingPlanResponse {
  export function isa(o: any): o is CreateScalingPlanResponse {
    return __isa(o, "CreateScalingPlanResponse");
  }
}

/**
 * <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p>
 *          <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling
 *          needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes
 *          from metric data. Statistics are calculations used to aggregate data over specified time
 *          periods.</p>
 *          <p>When you choose a load metric, make sure that the required <code>Sum</code> and
 *             <code>Average</code> statistics for your metric are available in CloudWatch and that they
 *          provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent
 *          the total load on the resource, and the <code>Average</code> statistic must represent the
 *          average load per capacity unit of the resource. For example, there is a metric that counts
 *          the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic
 *          represents the total request count processed by the group, then the <code>Average</code>
 *          statistic for the specified metric must represent the average request count processed by
 *          each instance of the group.</p>
 *          <p>For information about terminology, available metrics, or how to publish new metrics, see
 *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface CustomizedLoadMetricSpecification {
  __type?: "CustomizedLoadMetricSpecification";
  /**
   * <p>The dimensions of the metric.</p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your customized load metric specification.</p>
   */
  Dimensions?: Array<MetricDimension>;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The statistic of the metric. Currently, the value must always be <code>Sum</code>.
   *       </p>
   */
  Statistic: MetricStatistic | string | undefined;

  /**
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

export namespace CustomizedLoadMetricSpecification {
  export function isa(o: any): o is CustomizedLoadMetricSpecification {
    return __isa(o, "CustomizedLoadMetricSpecification");
  }
}

/**
 * <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part
 *          of a target tracking scaling policy. </p>
 *          <p>To create your customized scaling metric specification:</p>
 *          <ul>
 *             <li>
 *                <p>Add values for each required parameter from CloudWatch. You can use an existing metric,
 *                or a new metric that you create. To use your own metric, you must first publish the
 *                metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom
 *                   Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Choose a metric that changes proportionally with capacity. The value of the metric
 *                should increase or decrease in inverse proportion to the number of capacity units.
 *                That is, the value of the metric should decrease when capacity increases. </p>
 *             </li>
 *          </ul>
 *          <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             Concepts</a>. </p>
 */
export interface CustomizedScalingMetricSpecification {
  __type?: "CustomizedScalingMetricSpecification";
  /**
   * <p>The dimensions of the metric.</p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your customized scaling metric specification.</p>
   */
  Dimensions?: Array<MetricDimension>;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The statistic of the metric.</p>
   */
  Statistic: MetricStatistic | string | undefined;

  /**
   * <p>The unit of the metric. </p>
   */
  Unit?: string;
}

export namespace CustomizedScalingMetricSpecification {
  export function isa(o: any): o is CustomizedScalingMetricSpecification {
    return __isa(o, "CustomizedScalingMetricSpecification");
  }
}

/**
 * <p>Represents a single value in the forecast data used for predictive scaling.</p>
 */
export interface Datapoint {
  __type?: "Datapoint";
  /**
   * <p>The time stamp for the data point in UTC format.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The value of the data point.</p>
   */
  Value?: number;
}

export namespace Datapoint {
  export function isa(o: any): o is Datapoint {
    return __isa(o, "Datapoint");
  }
}

export interface DeleteScalingPlanRequest {
  __type?: "DeleteScalingPlanRequest";
  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;
}

export namespace DeleteScalingPlanRequest {
  export function isa(o: any): o is DeleteScalingPlanRequest {
    return __isa(o, "DeleteScalingPlanRequest");
  }
}

export interface DeleteScalingPlanResponse {
  __type?: "DeleteScalingPlanResponse";
}

export namespace DeleteScalingPlanResponse {
  export function isa(o: any): o is DeleteScalingPlanResponse {
    return __isa(o, "DeleteScalingPlanResponse");
  }
}

export interface DescribeScalingPlanResourcesRequest {
  __type?: "DescribeScalingPlanResourcesRequest";
  /**
   * <p>The maximum number of scalable resources to return. The value must be between
   *          1 and 50. The default value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;
}

export namespace DescribeScalingPlanResourcesRequest {
  export function isa(o: any): o is DescribeScalingPlanResourcesRequest {
    return __isa(o, "DescribeScalingPlanResourcesRequest");
  }
}

export interface DescribeScalingPlanResourcesResponse {
  __type?: "DescribeScalingPlanResourcesResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the scalable resources.</p>
   */
  ScalingPlanResources?: Array<ScalingPlanResource>;
}

export namespace DescribeScalingPlanResourcesResponse {
  export function isa(o: any): o is DescribeScalingPlanResourcesResponse {
    return __isa(o, "DescribeScalingPlanResourcesResponse");
  }
}

export interface DescribeScalingPlansRequest {
  __type?: "DescribeScalingPlansRequest";
  /**
   * <p>The sources for the applications (up to 10). If you specify scaling plan names, you
   *          cannot specify application sources.</p>
   */
  ApplicationSources?: Array<ApplicationSource>;

  /**
   * <p>The maximum number of scalable resources to return. This value can be between
   *          1 and 50. The default value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The names of the scaling plans (up to 10). If you specify application sources, you
   *          cannot specify scaling plan names.</p>
   */
  ScalingPlanNames?: Array<string>;

  /**
   * <p>The version number of the scaling plan. If you specify a scaling plan version, you must
   *          also specify a scaling plan name.</p>
   */
  ScalingPlanVersion?: number;
}

export namespace DescribeScalingPlansRequest {
  export function isa(o: any): o is DescribeScalingPlansRequest {
    return __isa(o, "DescribeScalingPlansRequest");
  }
}

export interface DescribeScalingPlansResponse {
  __type?: "DescribeScalingPlansResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the scaling plans.</p>
   */
  ScalingPlans?: Array<ScalingPlan>;
}

export namespace DescribeScalingPlansResponse {
  export function isa(o: any): o is DescribeScalingPlansResponse {
    return __isa(o, "DescribeScalingPlansResponse");
  }
}

export enum ForecastDataType {
  CapacityForecast = "CapacityForecast",
  LoadForecast = "LoadForecast",
  ScheduledActionMaxCapacity = "ScheduledActionMaxCapacity",
  ScheduledActionMinCapacity = "ScheduledActionMinCapacity"
}

export interface GetScalingPlanResourceForecastDataRequest {
  __type?: "GetScalingPlanResourceForecastDataRequest";
  /**
   * <p>The exclusive end time of the time range for the forecast data to get. The maximum time
   *          duration between the start and end time is seven days. </p>
   *          <p>Although this parameter can accept a date and time that is more than two days in the
   *          future, the availability of forecast data has limits. AWS Auto Scaling only issues forecasts for
   *          periods of two days in advance.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The type of forecast data to get.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LoadForecast</code>: The load metric forecast. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CapacityForecast</code>: The capacity forecast. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledActionMinCapacity</code>: The minimum capacity for each scheduled
   *                scaling action. This data is calculated as the larger of two values: the capacity
   *                forecast or the minimum capacity in the scaling instruction.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledActionMaxCapacity</code>: The maximum capacity for each scheduled
   *                scaling action. The calculation used is determined by the predictive scaling maximum
   *                capacity behavior setting in the scaling instruction.</p>
   *             </li>
   *          </ul>
   */
  ForecastDataType: ForecastDataType | string | undefined;

  /**
   * <p>The ID of the resource. This string consists of the resource type and unique identifier.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the
   *                name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p>
   *            </li>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension for the resource.</p>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;

  /**
   * <p>The namespace of the AWS service.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The inclusive start time of the time range for the forecast data to get. The date and
   *          time can be at most 56 days before the current date and time. </p>
   */
  StartTime: Date | undefined;
}

export namespace GetScalingPlanResourceForecastDataRequest {
  export function isa(o: any): o is GetScalingPlanResourceForecastDataRequest {
    return __isa(o, "GetScalingPlanResourceForecastDataRequest");
  }
}

export interface GetScalingPlanResourceForecastDataResponse {
  __type?: "GetScalingPlanResourceForecastDataResponse";
  /**
   * <p>The data points to return.</p>
   */
  Datapoints: Array<Datapoint> | undefined;
}

export namespace GetScalingPlanResourceForecastDataResponse {
  export function isa(o: any): o is GetScalingPlanResourceForecastDataResponse {
    return __isa(o, "GetScalingPlanResourceForecastDataResponse");
  }
}

/**
 * <p>The service encountered an internal error.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return __isa(o, "InternalServiceException");
  }
}

/**
 * <p>The token provided is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>Your account exceeded a limit. This exception is thrown when a per-account resource
 *          limit is exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export enum LoadMetricType {
  ALBTargetGroupRequestCount = "ALBTargetGroupRequestCount",
  ASGTotalCPUUtilization = "ASGTotalCPUUtilization",
  ASGTotalNetworkIn = "ASGTotalNetworkIn",
  ASGTotalNetworkOut = "ASGTotalNetworkOut"
}

/**
 * <p>Represents a dimension for a customized metric.</p>
 */
export interface MetricDimension {
  __type?: "MetricDimension";
  /**
   * <p>The name of the dimension.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;
}

export namespace MetricDimension {
  export function isa(o: any): o is MetricDimension {
    return __isa(o, "MetricDimension");
  }
}

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum"
}

/**
 * <p>The specified object could not be found.</p>
 */
export interface ObjectNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ObjectNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ObjectNotFoundException {
  export function isa(o: any): o is ObjectNotFoundException {
    return __isa(o, "ObjectNotFoundException");
  }
}

export enum PolicyType {
  TargetTrackingScaling = "TargetTrackingScaling"
}

/**
 * <p>Represents a predefined metric that can be used for predictive scaling. </p>
 */
export interface PredefinedLoadMetricSpecification {
  __type?: "PredefinedLoadMetricSpecification";
  /**
   * <p>The metric type.</p>
   */
  PredefinedLoadMetricType: LoadMetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *          label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target
   *          group for an Application Load Balancer attached to the Auto Scaling group.</p>
   *          <p>The format is
   *          app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>,
   *          where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                the load balancer ARN.</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                of the target group ARN.</p>
   *             </li>
   *          </ul>
   */
  ResourceLabel?: string;
}

export namespace PredefinedLoadMetricSpecification {
  export function isa(o: any): o is PredefinedLoadMetricSpecification {
    return __isa(o, "PredefinedLoadMetricSpecification");
  }
}

/**
 * <p>Represents a predefined metric that can be used for dynamic scaling as part of a target
 *          tracking scaling policy.</p>
 */
export interface PredefinedScalingMetricSpecification {
  __type?: "PredefinedScalingMetricSpecification";
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to
   *          Auto Scaling groups, Spot Fleet requests, and ECS services.</p>
   */
  PredefinedScalingMetricType: ScalingMetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *          label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target
   *          group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or
   *          ECS service.</p>
   *          <p>The format is
   *          app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>,
   *          where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                the load balancer ARN.</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                of the target group ARN.</p>
   *             </li>
   *          </ul>
   */
  ResourceLabel?: string;
}

export namespace PredefinedScalingMetricSpecification {
  export function isa(o: any): o is PredefinedScalingMetricSpecification {
    return __isa(o, "PredefinedScalingMetricSpecification");
  }
}

export enum PredictiveScalingMaxCapacityBehavior {
  SetForecastCapacityToMaxCapacity = "SetForecastCapacityToMaxCapacity",
  SetMaxCapacityAboveForecastCapacity = "SetMaxCapacityAboveForecastCapacity",
  SetMaxCapacityToForecastCapacity = "SetMaxCapacityToForecastCapacity"
}

export enum PredictiveScalingMode {
  ForecastAndScale = "ForecastAndScale",
  ForecastOnly = "ForecastOnly"
}

export enum ScalableDimension {
  AutoScalingGroupDesiredCapacity = "autoscaling:autoScalingGroup:DesiredCapacity",
  DynamoDBIndexReadCapacityUnits = "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits = "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits = "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits = "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity = "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount = "ecs:service:DesiredCount",
  RDSClusterReadReplicaCount = "rds:cluster:ReadReplicaCount"
}

/**
 * <p>Describes a scaling instruction for a scalable resource.</p>
 *          <p>The scaling instruction is used in combination with a scaling plan, which is a set of
 *          instructions for configuring dynamic scaling and predictive scaling for the scalable
 *          resources in your application. Each scaling instruction applies to one resource.</p>
 *          <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions.
 *          Target tracking scaling policies adjust the capacity of your scalable resource as required
 *          to maintain resource utilization at the target value that you specified. </p>
 *          <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of
 *          parameters, including the load metric, the scaling metric, the target value for the scaling
 *          metric, the predictive scaling mode (forecast and scale or forecast only), and the desired
 *          behavior when the forecast capacity exceeds the maximum capacity of the resource. With
 *          predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days
 *          ahead and schedules scaling actions that proactively add and remove resource capacity to
 *          match the forecast. </p>
 *          <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure
 *          predictive scaling. At minimum, there must be 24 hours of historical data to generate a
 *          forecast.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/auto-scaling-getting-started.html">Getting Started with
 *             AWS Auto Scaling</a>.</p>
 */
export interface ScalingInstruction {
  __type?: "ScalingInstruction";
  /**
   * <p>The customized load metric to use for predictive scaling. This parameter or a <b>PredefinedLoadMetricSpecification</b> is required when configuring
   *          predictive scaling, and cannot be used otherwise. </p>
   */
  CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;

  /**
   * <p>Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is
   *          enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target
   *          tracking configurations. </p>
   *          <p>The default is enabled (<code>false</code>). </p>
   */
  DisableDynamicScaling?: boolean;

  /**
   * <p>The maximum capacity of the resource. The exception to this upper limit is if you
   *          specify a non-default setting for <b>PredictiveScalingMaxCapacityBehavior</b>. </p>
   */
  MaxCapacity: number | undefined;

  /**
   * <p>The minimum capacity of the resource. </p>
   */
  MinCapacity: number | undefined;

  /**
   * <p>The predefined load metric to use for predictive scaling. This parameter or a <b>CustomizedLoadMetricSpecification</b> is required when configuring
   *          predictive scaling, and cannot be used otherwise. </p>
   */
  PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;

  /**
   * <p>Defines the behavior that should be applied if the forecast capacity approaches or
   *          exceeds the maximum capacity specified for the resource. The default value is
   *             <code>SetForecastCapacityToMaxCapacity</code>.</p>
   *          <p>The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SetForecastCapacityToMaxCapacity</code> - AWS Auto Scaling cannot scale resource
   *                capacity higher than the maximum capacity. The maximum capacity is enforced as a hard
   *                limit. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SetMaxCapacityToForecastCapacity</code> - AWS Auto Scaling may scale resource
   *                capacity higher than the maximum capacity to equal but not exceed forecast
   *                capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SetMaxCapacityAboveForecastCapacity</code> - AWS Auto Scaling may scale resource
   *                capacity higher than the maximum capacity by a specified buffer value. The intention
   *                is to give the target tracking scaling policy extra capacity if unexpected traffic
   *                occurs. </p>
   *             </li>
   *          </ul>
   *          <p>Only valid when configuring predictive scaling.</p>
   */
  PredictiveScalingMaxCapacityBehavior?:
    | PredictiveScalingMaxCapacityBehavior
    | string;

  /**
   * <p>The size of the capacity buffer to use when the forecast capacity is close to or exceeds
   *          the maximum capacity. The value is specified as a percentage relative to the forecast
   *          capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if
   *          the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum
   *          capacity is 55.</p>
   *          <p>Only valid when configuring predictive scaling. Required if the <b>PredictiveScalingMaxCapacityBehavior</b> is set to
   *             <code>SetMaxCapacityAboveForecastCapacity</code>, and cannot be used otherwise.</p>
   *          <p>The range is 1-100.</p>
   */
  PredictiveScalingMaxCapacityBuffer?: number;

  /**
   * <p>The predictive scaling mode. The default value is <code>ForecastAndScale</code>.
   *          Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions
   *          based on the capacity forecast. </p>
   */
  PredictiveScalingMode?: PredictiveScalingMode | string;

  /**
   * <p>The ID of the resource. This string consists of the resource type and unique
   *          identifier.</p>
   *          <ul>
   *             <li>
   *                <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the
   *                name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p>
   *            </li>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>Controls whether a resource's externally created scaling policies are kept or replaced. </p>
   *          <p>The default value is <code>KeepExternalPolicies</code>. If the parameter is set to
   *             <code>ReplaceExternalPolicies</code>, any scaling policies that are external to AWS Auto Scaling
   *          are deleted and new target tracking scaling policies created. </p>
   *          <p>Only valid when configuring dynamic scaling. </p>
   *          <p>Condition: The number of existing policies to be replaced must be less than or equal to
   *          50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies
   *          and does not create new ones.</p>
   */
  ScalingPolicyUpdateBehavior?: ScalingPolicyUpdateBehavior | string;

  /**
   * <p>The amount of time, in seconds, to buffer the run time of scheduled scaling actions when
   *          scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer
   *          time is 5 minutes, then the run time of the corresponding scheduled scaling action will be
   *          9:55 AM. The intention is to give resources time to be provisioned. For example, it can
   *          take a few minutes to launch an EC2 instance. The actual amount of time required depends on
   *          several factors, such as the size of the instance and whether there are startup scripts to
   *          complete. </p>
   *          <p>The value must be less than the forecast interval duration of 3600 seconds (60 minutes).
   *          The default is 300 seconds. </p>
   *          <p>Only valid when configuring predictive scaling. </p>
   */
  ScheduledActionBufferTime?: number;

  /**
   * <p>The namespace of the AWS service.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The structure that defines new target tracking configurations (up to 10). Each of these
   *          structures includes a specific scaling metric and a target value for the metric, along with
   *          various parameters to use with dynamic scaling. </p>
   *          <p>With predictive scaling and dynamic scaling, the resource scales based on the target
   *          tracking configuration that provides the largest capacity for both scale in and scale out. </p>
   *          <p>Condition: The scaling metric must be unique across target tracking
   *          configurations.</p>
   */
  TargetTrackingConfigurations: Array<TargetTrackingConfiguration> | undefined;
}

export namespace ScalingInstruction {
  export function isa(o: any): o is ScalingInstruction {
    return __isa(o, "ScalingInstruction");
  }
}

export enum ScalingMetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization = "ASGAverageCPUUtilization",
  ASGAverageNetworkIn = "ASGAverageNetworkIn",
  ASGAverageNetworkOut = "ASGAverageNetworkOut",
  DynamoDBReadCapacityUtilization = "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization = "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization = "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn = "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut = "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization = "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization = "ECSServiceAverageMemoryUtilization",
  RDSReaderAverageCPUUtilization = "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections = "RDSReaderAverageDatabaseConnections"
}

/**
 * <p>Represents a scaling plan.</p>
 */
export interface ScalingPlan {
  __type?: "ScalingPlan";
  /**
   * <p>The application source.</p>
   */
  ApplicationSource: ApplicationSource | undefined;

  /**
   * <p>The Unix time stamp when the scaling plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions: Array<ScalingInstruction> | undefined;

  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;

  /**
   * <p>The status of the scaling plan.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code> - The scaling plan is active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ActiveWithProblems</code> - The scaling plan is active, but the scaling
   *                configuration for one or more resources could not be applied.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationInProgress</code> - The scaling plan is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationFailed</code> - The scaling plan could not be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeletionInProgress</code> - The scaling plan is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeletionFailed</code> - The scaling plan could not be deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateInProgress</code> - The scaling plan is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateFailed</code> - The scaling plan could not be updated.</p>
   *             </li>
   *          </ul>
   */
  StatusCode: ScalingPlanStatusCode | string | undefined;

  /**
   * <p>A simple message about the current status of the scaling plan.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Unix time stamp when the scaling plan entered the current status.</p>
   */
  StatusStartTime?: Date;
}

export namespace ScalingPlan {
  export function isa(o: any): o is ScalingPlan {
    return __isa(o, "ScalingPlan");
  }
}

/**
 * <p>Represents a scalable resource.</p>
 */
export interface ScalingPlanResource {
  __type?: "ScalingPlanResource";
  /**
   * <p>The ID of the resource. This string consists of the resource type and unique
   *          identifier.</p>
   *          <ul>
   *             <li>
   *                <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the
   *                name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p>
   *            </li>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension for the resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;

  /**
   * <p>The scaling policies.</p>
   */
  ScalingPolicies?: Array<ScalingPolicy>;

  /**
   * <p>The scaling status of the resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code> - The scaling configuration is active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Inactive</code> - The scaling configuration is not active because the
   *                scaling plan is being created or the scaling configuration could not be applied.
   *                Check the status message for more information.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PartiallyActive</code> - The scaling configuration is partially active
   *                because the scaling plan is being created or deleted or the scaling configuration
   *                could not be fully applied. Check the status message for more information.</p>
   *             </li>
   *          </ul>
   */
  ScalingStatusCode: ScalingStatusCode | string | undefined;

  /**
   * <p>A simple message about the current scaling status of the resource.</p>
   */
  ScalingStatusMessage?: string;

  /**
   * <p>The namespace of the AWS service.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace ScalingPlanResource {
  export function isa(o: any): o is ScalingPlanResource {
    return __isa(o, "ScalingPlanResource");
  }
}

export enum ScalingPlanStatusCode {
  Active = "Active",
  ActiveWithProblems = "ActiveWithProblems",
  CreationFailed = "CreationFailed",
  CreationInProgress = "CreationInProgress",
  DeletionFailed = "DeletionFailed",
  DeletionInProgress = "DeletionInProgress",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress"
}

/**
 * <p>Represents a scaling policy.</p>
 */
export interface ScalingPolicy {
  __type?: "ScalingPolicy";
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The type of scaling policy.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The target tracking scaling policy. Includes support for predefined or customized
   *          metrics.</p>
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
}

export namespace ScalingPolicy {
  export function isa(o: any): o is ScalingPolicy {
    return __isa(o, "ScalingPolicy");
  }
}

export enum ScalingPolicyUpdateBehavior {
  KeepExternalPolicies = "KeepExternalPolicies",
  ReplaceExternalPolicies = "ReplaceExternalPolicies"
}

export enum ScalingStatusCode {
  Active = "Active",
  Inactive = "Inactive",
  PartiallyActive = "PartiallyActive"
}

export enum ServiceNamespace {
  AUTOSCALING = "autoscaling",
  DYNAMODB = "dynamodb",
  EC2 = "ec2",
  ECS = "ecs",
  RDS = "rds"
}

/**
 * <p>Represents a tag.</p>
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag values (0 to 20).</p>
   */
  Values?: Array<string>;
}

export namespace TagFilter {
  export function isa(o: any): o is TagFilter {
    return __isa(o, "TagFilter");
  }
}

/**
 * <p>Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.</p>
 */
export interface TargetTrackingConfiguration {
  __type?: "TargetTrackingConfiguration";
  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized metric.
   *       </p>
   */
  CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the
   *          value is <code>true</code>, scale in is disabled and the target tracking scaling policy
   *          doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the
   *          target tracking scaling policy can remove capacity from the scalable resource. </p>
   *          <p>The default value is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the
   *          CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   */
  PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;

  /**
   * <p>The amount of time, in seconds, after a scale in activity completes before another scale
   *          in activity can start. This value is not used if the scalable resource is an Auto Scaling
   *          group.</p>
   *          <p>The cooldown period is used to block subsequent scale in requests until it has expired.
   *          The intention is to scale in conservatively to protect your application's availability.
   *          However, if another alarm triggers a scale-out policy during the cooldown period after a
   *          scale-in, AWS Auto Scaling scales out your scalable target immediately.</p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale-out activity completes before another
   *          scale-out activity can start. This value is not used if the scalable resource is an Auto
   *          Scaling group.</p>
   *          <p>While the cooldown period is in effect, the capacity that has been added by the previous
   *          scale-out event that initiated the cooldown is calculated as part of the desired capacity
   *          for the next scale out. The intention is to continuously (but not excessively) scale
   *          out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10)
   *          or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number | undefined;
}

export namespace TargetTrackingConfiguration {
  export function isa(o: any): o is TargetTrackingConfiguration {
    return __isa(o, "TargetTrackingConfiguration");
  }
}

export interface UpdateScalingPlanRequest {
  __type?: "UpdateScalingPlanRequest";
  /**
   * <p>A CloudFormation stack or set of tags.</p>
   */
  ApplicationSource?: ApplicationSource;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions?: Array<ScalingInstruction>;

  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string | undefined;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number | undefined;
}

export namespace UpdateScalingPlanRequest {
  export function isa(o: any): o is UpdateScalingPlanRequest {
    return __isa(o, "UpdateScalingPlanRequest");
  }
}

export interface UpdateScalingPlanResponse {
  __type?: "UpdateScalingPlanResponse";
}

export namespace UpdateScalingPlanResponse {
  export function isa(o: any): o is UpdateScalingPlanResponse {
    return __isa(o, "UpdateScalingPlanResponse");
  }
}

/**
 * <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
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
