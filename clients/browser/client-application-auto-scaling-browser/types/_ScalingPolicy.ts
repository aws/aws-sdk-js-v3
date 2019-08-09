import {
  _StepScalingPolicyConfiguration,
  _UnmarshalledStepScalingPolicyConfiguration
} from "./_StepScalingPolicyConfiguration";
import {
  _TargetTrackingScalingPolicyConfiguration,
  _UnmarshalledTargetTrackingScalingPolicyConfiguration
} from "./_TargetTrackingScalingPolicyConfiguration";
import { _Alarm, _UnmarshalledAlarm } from "./_Alarm";

/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p>
 */
export interface _ScalingPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the scaling policy.</p>
   */
  PolicyARN: string;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string;

  /**
   * <p>The namespace of the AWS service that provides the resource or <code>custom-resource</code> for a resource provided by your own application or service. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace:
    | "ecs"
    | "elasticmapreduce"
    | "ec2"
    | "appstream"
    | "dynamodb"
    | "rds"
    | "sagemaker"
    | "custom-resource"
    | string;

  /**
   * <p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>Amazon SageMaker endpoint variants - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> </ul>
   */
  ResourceId: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot fleet request.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> </ul>
   */
  ScalableDimension:
    | "ecs:service:DesiredCount"
    | "ec2:spot-fleet-request:TargetCapacity"
    | "elasticmapreduce:instancegroup:InstanceCount"
    | "appstream:fleet:DesiredCapacity"
    | "dynamodb:table:ReadCapacityUnits"
    | "dynamodb:table:WriteCapacityUnits"
    | "dynamodb:index:ReadCapacityUnits"
    | "dynamodb:index:WriteCapacityUnits"
    | "rds:cluster:ReadReplicaCount"
    | "sagemaker:variant:DesiredInstanceCount"
    | "custom-resource:ResourceType:Property"
    | string;

  /**
   * <p>The scaling policy type.</p>
   */
  PolicyType: "StepScaling" | "TargetTrackingScaling" | string;

  /**
   * <p>A step scaling policy.</p>
   */
  StepScalingPolicyConfiguration?: _StepScalingPolicyConfiguration;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: _TargetTrackingScalingPolicyConfiguration;

  /**
   * <p>The CloudWatch alarms associated with the scaling policy.</p>
   */
  Alarms?: Array<_Alarm> | Iterable<_Alarm>;

  /**
   * <p>The Unix timestamp for when the scaling policy was created.</p>
   */
  CreationTime: Date | string | number;
}

export interface _UnmarshalledScalingPolicy extends _ScalingPolicy {
  /**
   * <p>A step scaling policy.</p>
   */
  StepScalingPolicyConfiguration?: _UnmarshalledStepScalingPolicyConfiguration;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: _UnmarshalledTargetTrackingScalingPolicyConfiguration;

  /**
   * <p>The CloudWatch alarms associated with the scaling policy.</p>
   */
  Alarms?: Array<_UnmarshalledAlarm>;

  /**
   * <p>The Unix timestamp for when the scaling policy was created.</p>
   */
  CreationTime: Date;
}
