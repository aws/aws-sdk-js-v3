import {
  _TargetTrackingConfiguration,
  _UnmarshalledTargetTrackingConfiguration
} from "./_TargetTrackingConfiguration";
import {
  _PredefinedLoadMetricSpecification,
  _UnmarshalledPredefinedLoadMetricSpecification
} from "./_PredefinedLoadMetricSpecification";
import {
  _CustomizedLoadMetricSpecification,
  _UnmarshalledCustomizedLoadMetricSpecification
} from "./_CustomizedLoadMetricSpecification";

/**
 * <p>Describes a scaling instruction for a scalable resource.</p> <p>The scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/auto-scaling-getting-started.html">Getting Started with AWS Auto Scaling</a>.</p>
 */
export interface _ScalingInstruction {
  /**
   * <p>The namespace of the AWS service.</p>
   */
  ServiceNamespace: "autoscaling" | "ecs" | "ec2" | "rds" | "dynamodb" | string;

  /**
   * <p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>
   */
  ResourceId: string;

  /**
   * <p>The scalable dimension associated with the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> </ul>
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
   * <p>The minimum capacity of the resource. </p>
   */
  MinCapacity: number;

  /**
   * <p>The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for <b>PredictiveScalingMaxCapacityBehavior</b>. </p>
   */
  MaxCapacity: number;

  /**
   * <p>The structure that defines new target tracking configurations (up to 10). Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling. </p> <p>With predictive scaling and dynamic scaling, the resource scales based on the target tracking configuration that provides the largest capacity for both scale in and scale out. </p> <p>Condition: The scaling metric must be unique across target tracking configurations.</p>
   */
  TargetTrackingConfigurations:
    | Array<_TargetTrackingConfiguration>
    | Iterable<_TargetTrackingConfiguration>;

  /**
   * <p>The predefined load metric to use for predictive scaling. This parameter or a <b>CustomizedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. </p>
   */
  PredefinedLoadMetricSpecification?: _PredefinedLoadMetricSpecification;

  /**
   * <p>The customized load metric to use for predictive scaling. This parameter or a <b>PredefinedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. </p>
   */
  CustomizedLoadMetricSpecification?: _CustomizedLoadMetricSpecification;

  /**
   * <p>The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete. </p> <p>The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. </p> <p>Only valid when configuring predictive scaling. </p>
   */
  ScheduledActionBufferTime?: number;

  /**
   * <p>Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is <code>SetForecastCapacityToMaxCapacity</code>.</p> <p>The following are possible values:</p> <ul> <li> <p> <code>SetForecastCapacityToMaxCapacity</code> - AWS Auto Scaling cannot scale resource capacity higher than the maximum capacity. The maximum capacity is enforced as a hard limit. </p> </li> <li> <p> <code>SetMaxCapacityToForecastCapacity</code> - AWS Auto Scaling may scale resource capacity higher than the maximum capacity to equal but not exceed forecast capacity.</p> </li> <li> <p> <code>SetMaxCapacityAboveForecastCapacity</code> - AWS Auto Scaling may scale resource capacity higher than the maximum capacity by a specified buffer value. The intention is to give the target tracking scaling policy extra capacity if unexpected traffic occurs. </p> </li> </ul> <p>Only valid when configuring predictive scaling.</p>
   */
  PredictiveScalingMaxCapacityBehavior?:
    | "SetForecastCapacityToMaxCapacity"
    | "SetMaxCapacityToForecastCapacity"
    | "SetMaxCapacityAboveForecastCapacity"
    | string;

  /**
   * <p>The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.</p> <p>Only valid when configuring predictive scaling. Required if the <b>PredictiveScalingMaxCapacityBehavior</b> is set to <code>SetMaxCapacityAboveForecastCapacity</code>, and cannot be used otherwise.</p> <p>The range is 1-100.</p>
   */
  PredictiveScalingMaxCapacityBuffer?: number;

  /**
   * <p>The predictive scaling mode. The default value is <code>ForecastAndScale</code>. Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions based on the capacity forecast. </p>
   */
  PredictiveScalingMode?: "ForecastAndScale" | "ForecastOnly" | string;

  /**
   * <p>Controls whether a resource's externally created scaling policies are kept or replaced. </p> <p>The default value is <code>KeepExternalPolicies</code>. If the parameter is set to <code>ReplaceExternalPolicies</code>, any scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created. </p> <p>Only valid when configuring dynamic scaling. </p> <p>Condition: The number of existing policies to be replaced must be less than or equal to 50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies and does not create new ones.</p>
   */
  ScalingPolicyUpdateBehavior?:
    | "KeepExternalPolicies"
    | "ReplaceExternalPolicies"
    | string;

  /**
   * <p>Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. </p> <p>The default is enabled (<code>false</code>). </p>
   */
  DisableDynamicScaling?: boolean;
}

export interface _UnmarshalledScalingInstruction extends _ScalingInstruction {
  /**
   * <p>The structure that defines new target tracking configurations (up to 10). Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling. </p> <p>With predictive scaling and dynamic scaling, the resource scales based on the target tracking configuration that provides the largest capacity for both scale in and scale out. </p> <p>Condition: The scaling metric must be unique across target tracking configurations.</p>
   */
  TargetTrackingConfigurations: Array<_UnmarshalledTargetTrackingConfiguration>;

  /**
   * <p>The predefined load metric to use for predictive scaling. This parameter or a <b>CustomizedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. </p>
   */
  PredefinedLoadMetricSpecification?: _UnmarshalledPredefinedLoadMetricSpecification;

  /**
   * <p>The customized load metric to use for predictive scaling. This parameter or a <b>PredefinedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. </p>
   */
  CustomizedLoadMetricSpecification?: _UnmarshalledCustomizedLoadMetricSpecification;
}
