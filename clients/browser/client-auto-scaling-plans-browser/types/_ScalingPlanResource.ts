import { _ScalingPolicy, _UnmarshalledScalingPolicy } from "./_ScalingPolicy";

/**
 * <p>Represents a scalable resource.</p>
 */
export interface _ScalingPlanResource {
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
   * <p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>
   */
  ResourceId: string;

  /**
   * <p>The scalable dimension for the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> </ul>
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
   * <p>The scaling policies.</p>
   */
  ScalingPolicies?: Array<_ScalingPolicy> | Iterable<_ScalingPolicy>;

  /**
   * <p>The scaling status of the resource.</p> <ul> <li> <p> <code>Active</code> - The scaling configuration is active.</p> </li> <li> <p> <code>Inactive</code> - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information.</p> </li> <li> <p> <code>PartiallyActive</code> - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information.</p> </li> </ul>
   */
  ScalingStatusCode: "Inactive" | "PartiallyActive" | "Active" | string;

  /**
   * <p>A simple message about the current scaling status of the resource.</p>
   */
  ScalingStatusMessage?: string;
}

export interface _UnmarshalledScalingPlanResource extends _ScalingPlanResource {
  /**
   * <p>The scaling policies.</p>
   */
  ScalingPolicies?: Array<_UnmarshalledScalingPolicy>;
}
