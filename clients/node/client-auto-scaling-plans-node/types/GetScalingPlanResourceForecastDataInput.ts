import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetScalingPlanResourceForecastDataInput shape
 */
export interface GetScalingPlanResourceForecastDataInput {
  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number;

  /**
   * <p>The namespace of the AWS service.</p>
   */
  ServiceNamespace: "autoscaling" | "ecs" | "ec2" | "rds" | "dynamodb" | string;

  /**
   * <p>The ID of the resource. This string consists of the resource type and unique identifier. </p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>
   */
  ResourceId: string;

  /**
   * <p>The scalable dimension for the resource.</p>
   */
  ScalableDimension:
    | "autoscaling:autoScalingGroup:DesiredCapacity"
    | "ecs:service:DesiredCount"
    | "ec2:spot-fleet-request:TargetCapacity"
    | "rds:cluster:ReadReplicaCount"
    | "dynamodb:table:ReadCapacityUnits"
    | "dynamodb:table:WriteCapacityUnits"
    | "dynamodb:index:ReadCapacityUnits"
    | "dynamodb:index:WriteCapacityUnits"
    | string;

  /**
   * <p>The type of forecast data to get.</p> <ul> <li> <p> <code>LoadForecast</code>: The load metric forecast. </p> </li> <li> <p> <code>CapacityForecast</code>: The capacity forecast. </p> </li> <li> <p> <code>ScheduledActionMinCapacity</code>: The minimum capacity for each scheduled scaling action. This data is calculated as the larger of two values: the capacity forecast or the minimum capacity in the scaling instruction.</p> </li> <li> <p> <code>ScheduledActionMaxCapacity</code>: The maximum capacity for each scheduled scaling action. The calculation used is determined by the predictive scaling maximum capacity behavior setting in the scaling instruction.</p> </li> </ul>
   */
  ForecastDataType:
    | "CapacityForecast"
    | "LoadForecast"
    | "ScheduledActionMinCapacity"
    | "ScheduledActionMaxCapacity"
    | string;

  /**
   * <p>The inclusive start time of the time range for the forecast data to get. The date and time can be at most 56 days before the current date and time. </p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is seven days. </p> <p>Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. AWS Auto Scaling only issues forecasts for periods of two days in advance.</p>
   */
  EndTime: Date | string | number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
