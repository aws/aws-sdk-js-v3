import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdjustmentType {
  ChangeInCapacity = "ChangeInCapacity",
  ExactCapacity = "ExactCapacity",
  PercentChangeInCapacity = "PercentChangeInCapacity"
}

/**
 * <p>Represents a CloudWatch alarm associated with a scaling policy.</p>
 */
export interface Alarm {
  __type?: "Alarm";
  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmARN: string | undefined;

  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName: string | undefined;
}

export namespace Alarm {
  export function isa(o: any): o is Alarm {
    return __isa(o, "Alarm");
  }
}

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
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

/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use
 *          with Application Auto Scaling.</p>
 *          <p>To create your customized metric specification:</p>
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
export interface CustomizedMetricSpecification {
  __type?: "CustomizedMetricSpecification";
  /**
   * <p>The dimensions of the metric. </p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your scaling policy.</p>
   */
  Dimensions?: Array<MetricDimension>;

  /**
   * <p>The name of the metric. </p>
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
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

export namespace CustomizedMetricSpecification {
  export function isa(o: any): o is CustomizedMetricSpecification {
    return __isa(o, "CustomizedMetricSpecification");
  }
}

export interface DeleteScalingPolicyRequest {
  __type?: "DeleteScalingPolicyRequest";
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DeleteScalingPolicyRequest {
  export function isa(o: any): o is DeleteScalingPolicyRequest {
    return __isa(o, "DeleteScalingPolicyRequest");
  }
}

export interface DeleteScalingPolicyResponse {
  __type?: "DeleteScalingPolicyResponse";
}

export namespace DeleteScalingPolicyResponse {
  export function isa(o: any): o is DeleteScalingPolicyResponse {
    return __isa(o, "DeleteScalingPolicyResponse");
  }
}

export interface DeleteScheduledActionRequest {
  __type?: "DeleteScheduledActionRequest";
  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DeleteScheduledActionRequest {
  export function isa(o: any): o is DeleteScheduledActionRequest {
    return __isa(o, "DeleteScheduledActionRequest");
  }
}

export interface DeleteScheduledActionResponse {
  __type?: "DeleteScheduledActionResponse";
}

export namespace DeleteScheduledActionResponse {
  export function isa(o: any): o is DeleteScheduledActionResponse {
    return __isa(o, "DeleteScheduledActionResponse");
  }
}

export interface DeregisterScalableTargetRequest {
  __type?: "DeregisterScalableTargetRequest";
  /**
   * <p>The identifier of the resource associated with the scalable target.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *          This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DeregisterScalableTargetRequest {
  export function isa(o: any): o is DeregisterScalableTargetRequest {
    return __isa(o, "DeregisterScalableTargetRequest");
  }
}

export interface DeregisterScalableTargetResponse {
  __type?: "DeregisterScalableTargetResponse";
}

export namespace DeregisterScalableTargetResponse {
  export function isa(o: any): o is DeregisterScalableTargetResponse {
    return __isa(o, "DeregisterScalableTargetResponse");
  }
}

export interface DescribeScalableTargetsRequest {
  __type?: "DescribeScalableTargetsRequest";
  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and
   *          50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *          This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceIds?: Array<string>;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *          This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DescribeScalableTargetsRequest {
  export function isa(o: any): o is DescribeScalableTargetsRequest {
    return __isa(o, "DescribeScalableTargetsRequest");
  }
}

export interface DescribeScalableTargetsResponse {
  __type?: "DescribeScalableTargetsResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The scalable targets that match the request parameters.</p>
   */
  ScalableTargets?: Array<ScalableTarget>;
}

export namespace DescribeScalableTargetsResponse {
  export function isa(o: any): o is DescribeScalableTargetsResponse {
    return __isa(o, "DescribeScalableTargetsResponse");
  }
}

export interface DescribeScalingActivitiesRequest {
  __type?: "DescribeScalingActivitiesRequest";
  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and
   *          50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *          This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *          If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DescribeScalingActivitiesRequest {
  export function isa(o: any): o is DescribeScalingActivitiesRequest {
    return __isa(o, "DescribeScalingActivitiesRequest");
  }
}

export interface DescribeScalingActivitiesResponse {
  __type?: "DescribeScalingActivitiesResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of scaling activity objects.</p>
   */
  ScalingActivities?: Array<ScalingActivity>;
}

export namespace DescribeScalingActivitiesResponse {
  export function isa(o: any): o is DescribeScalingActivitiesResponse {
    return __isa(o, "DescribeScalingActivitiesResponse");
  }
}

export interface DescribeScalingPoliciesRequest {
  __type?: "DescribeScalingPoliciesRequest";
  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and
   *          50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The names of the scaling policies to describe.</p>
   */
  PolicyNames?: Array<string>;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *          This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *          If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DescribeScalingPoliciesRequest {
  export function isa(o: any): o is DescribeScalingPoliciesRequest {
    return __isa(o, "DescribeScalingPoliciesRequest");
  }
}

export interface DescribeScalingPoliciesResponse {
  __type?: "DescribeScalingPoliciesResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: Array<ScalingPolicy>;
}

export namespace DescribeScalingPoliciesResponse {
  export function isa(o: any): o is DescribeScalingPoliciesResponse {
    return __isa(o, "DescribeScalingPoliciesResponse");
  }
}

export interface DescribeScheduledActionsRequest {
  __type?: "DescribeScheduledActionsRequest";
  /**
   * <p>The maximum number of scheduled action results. This value can be between
   *          1 and 50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *          This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *          If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The names of the scheduled actions to describe.</p>
   */
  ScheduledActionNames?: Array<string>;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;
}

export namespace DescribeScheduledActionsRequest {
  export function isa(o: any): o is DescribeScheduledActionsRequest {
    return __isa(o, "DescribeScheduledActionsRequest");
  }
}

export interface DescribeScheduledActionsResponse {
  __type?: "DescribeScheduledActionsResponse";
  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the scheduled actions.</p>
   */
  ScheduledActions?: Array<ScheduledAction>;
}

export namespace DescribeScheduledActionsResponse {
  export function isa(o: any): o is DescribeScheduledActionsResponse {
    return __isa(o, "DescribeScheduledActionsResponse");
  }
}

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 */
export interface FailedResourceAccessException
  extends __SmithyException,
    $MetadataBearer {
  name: "FailedResourceAccessException";
  $fault: "client";
  Message?: string;
}

export namespace FailedResourceAccessException {
  export function isa(o: any): o is FailedResourceAccessException {
    return __isa(o, "FailedResourceAccessException");
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
 * <p>The next token supplied was invalid.</p>
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
 * <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html">Application Auto Scaling Limits</a>.</p>
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

export enum MetricAggregationType {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum"
}

/**
 * <p>Describes the dimension names and values associated with a metric.</p>
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

export enum MetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  AppStreamAverageCapacityUtilization = "AppStreamAverageCapacityUtilization",
  ComprehendInferenceUtilization = "ComprehendInferenceUtilization",
  DynamoDBReadCapacityUtilization = "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization = "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization = "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn = "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut = "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization = "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization = "ECSServiceAverageMemoryUtilization",
  LambdaProvisionedConcurrencyUtilization = "LambdaProvisionedConcurrencyUtilization",
  RDSReaderAverageCPUUtilization = "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections = "RDSReaderAverageDatabaseConnections",
  SageMakerVariantInvocationsPerInstance = "SageMakerVariantInvocationsPerInstance"
}

/**
 * <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
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
  StepScaling = "StepScaling",
  TargetTrackingScaling = "TargetTrackingScaling"
}

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *          Application Auto Scaling.</p>
 */
export interface PredefinedMetricSpecification {
  __type?: "PredefinedMetricSpecification";
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to
   *          Spot Fleet requests and ECS services.</p>
   */
  PredefinedMetricType: MetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *          label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target
   *          group attached to the Spot Fleet request or ECS service.</p>
   *
   *          <p>The format is
   *          app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>,
   *          where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                of the target group ARN.</p>
   *             </li>
   *          </ul>
   */
  ResourceLabel?: string;
}

export namespace PredefinedMetricSpecification {
  export function isa(o: any): o is PredefinedMetricSpecification {
    return __isa(o, "PredefinedMetricSpecification");
  }
}

export interface PutScalingPolicyRequest {
  __type?: "PutScalingPolicyRequest";
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. This parameter is required if you are creating a scaling policy.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, or AWS Lambda</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  PolicyType?: PolicyType | string;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>A step scaling policy.</p>
   *          <p>This parameter is required if you are creating a policy and the policy type is
   *             <code>StepScaling</code>.</p>
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  /**
   * <p>A target tracking scaling policy. Includes support for predefined or customized
   *          metrics.</p>
   *          <p>This parameter is required if you are creating a policy and the policy type is
   *             <code>TargetTrackingScaling</code>.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}

export namespace PutScalingPolicyRequest {
  export function isa(o: any): o is PutScalingPolicyRequest {
    return __isa(o, "PutScalingPolicyRequest");
  }
}

export interface PutScalingPolicyResponse {
  __type?: "PutScalingPolicyResponse";
  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   */
  Alarms?: Array<Alarm>;

  /**
   * <p>The Amazon Resource Name (ARN) of the resulting scaling policy.</p>
   */
  PolicyARN: string | undefined;
}

export namespace PutScalingPolicyResponse {
  export function isa(o: any): o is PutScalingPolicyResponse {
    return __isa(o, "PutScalingPolicyResponse");
  }
}

export interface PutScheduledActionRequest {
  __type?: "PutScheduledActionRequest";
  /**
   * <p>The date and time for the scheduled action to end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. During the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   */
  ScalableTargetAction?: ScalableTargetAction;

  /**
   * <p>The schedule for this action. The following formats are supported:</p>
   *          <ul>
   *             <li>
   *                <p>At expressions - "<code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code>"</p>
   *             </li>
   *             <li>
   *                <p>Rate expressions - "<code>rate(<i>value</i>
   *                      <i>unit</i>)</code>"</p>
   *             </li>
   *             <li>
   *                <p>Cron expressions - "<code>cron(<i>fields</i>)</code>"</p>
   *             </li>
   *          </ul>
   *          <p>At expressions are useful for one-time schedules. Specify the time, in UTC.</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information about cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   */
  Schedule?: string;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The date and time for the scheduled action to start.</p>
   */
  StartTime?: Date;
}

export namespace PutScheduledActionRequest {
  export function isa(o: any): o is PutScheduledActionRequest {
    return __isa(o, "PutScheduledActionRequest");
  }
}

export interface PutScheduledActionResponse {
  __type?: "PutScheduledActionResponse";
}

export namespace PutScheduledActionResponse {
  export function isa(o: any): o is PutScheduledActionResponse {
    return __isa(o, "PutScheduledActionResponse");
  }
}

export interface RegisterScalableTargetRequest {
  __type?: "RegisterScalableTargetRequest";
  /**
   * <p>The maximum value to scale to in response to a scale-out event. <code>MaxCapacity</code>
   *          is required to register a scalable target.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The minimum value to scale to in response to a scale-in event. <code>MinCapacity</code>
   *          is required to register a scalable target.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The identifier of the resource that is associated with the scalable target.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>Application Auto Scaling creates a service-linked role that grants it permissions to modify the scalable
   *          target on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html">Service-Linked Roles for Application Auto Scaling</a>.</p>
   *          <p>For Amazon EMR, this parameter is required, and it must specify the ARN of an IAM role that
   *          allows Application Auto Scaling to modify the scalable target on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *          This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.
   *
   *       </p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>An embedded object that contains attributes and attribute values that are used to
   *          suspend and resume automatic scaling. Setting the value of an attribute to
   *             <code>true</code> suspends the specified scaling activities. Setting it to
   *             <code>false</code> (default) resumes the specified scaling activities. </p>
   *          <p>
   *             <b>Suspension Outcomes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For <code>DynamicScalingInSuspended</code>, while a suspension is in effect, all
   *                scale-in activities that are triggered by a scaling policy are suspended.</p>
   *             </li>
   *             <li>
   *                <p>For <code>DynamicScalingOutSuspended</code>, while a suspension is in effect, all
   *                scale-out activities that are triggered by a scaling policy are suspended.</p>
   *             </li>
   *             <li>
   *                <p>For <code>ScheduledScalingSuspended</code>, while a suspension is in effect, all
   *                scaling activities that involve scheduled actions are suspended. </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html">Suspending and Resuming Scaling</a> in the <i>Application Auto Scaling User
   *          Guide</i>.</p>
   */
  SuspendedState?: SuspendedState;
}

export namespace RegisterScalableTargetRequest {
  export function isa(o: any): o is RegisterScalableTargetRequest {
    return __isa(o, "RegisterScalableTargetRequest");
  }
}

export interface RegisterScalableTargetResponse {
  __type?: "RegisterScalableTargetResponse";
}

export namespace RegisterScalableTargetResponse {
  export function isa(o: any): o is RegisterScalableTargetResponse {
    return __isa(o, "RegisterScalableTargetResponse");
  }
}

export enum ScalableDimension {
  AppstreamFleetDesiredCapacity = "appstream:fleet:DesiredCapacity",
  ComprehendDocClassifierEndpointInferenceUnits = "comprehend:document-classifier-endpoint:DesiredInferenceUnits",
  CustomResourceScalableDimension = "custom-resource:ResourceType:Property",
  DynamoDBIndexReadCapacityUnits = "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits = "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits = "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits = "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity = "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount = "ecs:service:DesiredCount",
  EMRInstanceGroupInstanceCount = "elasticmapreduce:instancegroup:InstanceCount",
  LambdaFunctionProvisionedConcurrency = "lambda:function:ProvisionedConcurrency",
  RDSClusterReadReplicaCount = "rds:cluster:ReadReplicaCount",
  SageMakerVariantDesiredInstanceCount = "sagemaker:variant:DesiredInstanceCount"
}

/**
 * <p>Represents a scalable target.</p>
 */
export interface ScalableTarget {
  __type?: "ScalableTarget";
  /**
   * <p>The Unix timestamp for when the scalable target was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The maximum value to scale to in response to a scale-out event.</p>
   */
  MaxCapacity: number | undefined;

  /**
   * <p>The minimum value to scale to in response to a scale-in event.</p>
   */
  MinCapacity: number | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your
   *          behalf.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *          This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>Specifies whether the scaling activities for a scalable target are in a suspended state.
   *       </p>
   */
  SuspendedState?: SuspendedState;
}

export namespace ScalableTarget {
  export function isa(o: any): o is ScalableTarget {
    return __isa(o, "ScalableTarget");
  }
}

/**
 * <p>Represents the minimum and maximum capacity for a scheduled action.</p>
 */
export interface ScalableTargetAction {
  __type?: "ScalableTargetAction";
  /**
   * <p>The maximum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The minimum capacity.</p>
   */
  MinCapacity?: number;
}

export namespace ScalableTargetAction {
  export function isa(o: any): o is ScalableTargetAction {
    return __isa(o, "ScalableTargetAction");
  }
}

/**
 * <p>Represents a scaling activity.</p>
 */
export interface ScalingActivity {
  __type?: "ScalingActivity";
  /**
   * <p>The unique identifier of the scaling activity.</p>
   */
  ActivityId: string | undefined;

  /**
   * <p>A simple description of what caused the scaling activity to happen.</p>
   */
  Cause: string | undefined;

  /**
   * <p>A simple description of what action the scaling activity intends to accomplish.</p>
   */
  Description: string | undefined;

  /**
   * <p>The details about the scaling activity.</p>
   */
  Details?: string;

  /**
   * <p>The Unix timestamp for when the scaling activity ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The Unix timestamp for when the scaling activity began.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>Indicates the status of the scaling activity.</p>
   */
  StatusCode: ScalingActivityStatusCode | string | undefined;

  /**
   * <p>A simple message about the current status of the scaling activity.</p>
   */
  StatusMessage?: string;
}

export namespace ScalingActivity {
  export function isa(o: any): o is ScalingActivity {
    return __isa(o, "ScalingActivity");
  }
}

export enum ScalingActivityStatusCode {
  Failed = "Failed",
  InProgress = "InProgress",
  Overridden = "Overridden",
  Pending = "Pending",
  Successful = "Successful",
  Unfulfilled = "Unfulfilled"
}

/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p>
 */
export interface ScalingPolicy {
  __type?: "ScalingPolicy";
  /**
   * <p>The CloudWatch alarms associated with the scaling policy.</p>
   */
  Alarms?: Array<Alarm>;

  /**
   * <p>The Unix timestamp for when the scaling policy was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scaling policy.</p>
   */
  PolicyARN: string | undefined;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The scaling policy type.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>A step scaling policy.</p>
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}

export namespace ScalingPolicy {
  export function isa(o: any): o is ScalingPolicy {
    return __isa(o, "ScalingPolicy");
  }
}

/**
 * <p>Represents a scheduled action.</p>
 */
export interface ScheduledAction {
  __type?: "ScheduledAction";
  /**
   * <p>The date and time that the scheduled action was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the action is scheduled to end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *          This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *            </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
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
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for an Amazon SageMaker model endpoint variant.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. During the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   */
  ScalableTargetAction?: ScalableTargetAction;

  /**
   * <p>The schedule for this action. The following formats are supported:</p>
   *          <ul>
   *             <li>
   *                <p>At expressions - "<code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code>"</p>
   *             </li>
   *             <li>
   *                <p>Rate expressions - "<code>rate(<i>value</i>
   *                      <i>unit</i>)</code>"</p>
   *             </li>
   *             <li>
   *                <p>Cron expressions - "<code>cron(<i>fields</i>)</code>"</p>
   *             </li>
   *          </ul>
   *          <p>At expressions are useful for one-time schedules. Specify the time, in UTC.</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information about cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   */
  ScheduledActionARN: string | undefined;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource or
   *             <code>custom-resource</code> for a resource provided by your own application or service.
   *          For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The date and time that the action is scheduled to begin.</p>
   */
  StartTime?: Date;
}

export namespace ScheduledAction {
  export function isa(o: any): o is ScheduledAction {
    return __isa(o, "ScheduledAction");
  }
}

export enum ServiceNamespace {
  APPSTREAM = "appstream",
  COMPREHEND = "comprehend",
  CUSTOM_RESOURCE = "custom-resource",
  DYNAMODB = "dynamodb",
  EC2 = "ec2",
  ECS = "ecs",
  EMR = "elasticmapreduce",
  LAMBDA = "lambda",
  RDS = "rds",
  SAGEMAKER = "sagemaker"
}

/**
 * <p>Represents a step adjustment for a <a>StepScalingPolicyConfiguration</a>.
 *          Describes an adjustment based on the difference between the value of the aggregated CloudWatch
 *          metric and the breach threshold that you've defined for the alarm. </p>
 *          <p>For the following examples, suppose that you have an alarm with a breach threshold of
 *          50:</p>
 *          <ul>
 *             <li>
 *                <p>To trigger the adjustment when the metric is greater than or equal to 50 and less
 *                than 60, specify a lower bound of 0 and an upper bound of 10.</p>
 *             </li>
 *             <li>
 *                <p>To trigger the adjustment when the metric is greater than 40 and less than or
 *                equal to 50, specify a lower bound of -10 and an upper bound of 0.</p>
 *             </li>
 *          </ul>
 *          <p>There are a few rules for the step adjustments for your step policy:</p>
 *          <ul>
 *             <li>
 *                <p>The ranges of your step adjustments can't overlap or have a gap.</p>
 *             </li>
 *             <li>
 *                <p>At most one step adjustment can have a null lower bound. If one step adjustment
 *                has a negative lower bound, then there must be a step adjustment with a null lower
 *                bound.</p>
 *             </li>
 *             <li>
 *                <p>At most one step adjustment can have a null upper bound. If one step adjustment
 *                has a positive upper bound, then there must be a step adjustment with a null upper
 *                bound.</p>
 *             </li>
 *             <li>
 *                <p>The upper and lower bound can't be null in the same step adjustment.</p>
 *             </li>
 *          </ul>
 */
export interface StepAdjustment {
  __type?: "StepAdjustment";
  /**
   * <p>The lower bound for the difference between the alarm threshold and the CloudWatch metric. If
   *          the metric value is above the breach threshold, the lower bound is inclusive (the metric
   *          must be greater than or equal to the threshold plus the lower bound). Otherwise, it is
   *          exclusive (the metric must be greater than the threshold plus the lower bound). A null
   *          value indicates negative infinity.</p>
   */
  MetricIntervalLowerBound?: number;

  /**
   * <p>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If
   *          the metric value is above the breach threshold, the upper bound is exclusive (the metric
   *          must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the
   *          metric must be less than or equal to the threshold plus the upper bound). A null value
   *          indicates positive infinity.</p>
   *          <p>The upper bound must be greater than the lower bound.</p>
   */
  MetricIntervalUpperBound?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *          adds to the current scalable dimension while a negative number removes from the current
   *          scalable dimension.</p>
   */
  ScalingAdjustment: number | undefined;
}

export namespace StepAdjustment {
  export function isa(o: any): o is StepAdjustment {
    return __isa(o, "StepAdjustment");
  }
}

/**
 * <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface StepScalingPolicyConfiguration {
  __type?: "StepScalingPolicyConfiguration";
  /**
   * <p>Specifies whether the <code>ScalingAdjustment</code> value in a <a>StepAdjustment</a> is an absolute number or a percentage of the current
   *          capacity. </p>
   */
  AdjustmentType?: AdjustmentType | string;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes where previous
   *          trigger-related scaling activities can influence future scaling events.</p>
   *          <p>For scale-out policies, while the cooldown period is in effect, the capacity that has
   *          been added by the previous scale-out event that initiated the cooldown is calculated as
   *          part of the desired capacity for the next scale out. The intention is to continuously (but
   *          not excessively) scale out. For example, an alarm triggers a step scaling policy to scale
   *          out an Amazon ECS service by 2 tasks, the scaling activity completes successfully, and a
   *          cooldown period of 5 minutes starts. During the cooldown period, if the alarm triggers the
   *          same policy again but at a more aggressive step adjustment to scale out the service by 3
   *          tasks, the 2 tasks that were added in the previous scale-out event are considered part of
   *          that capacity and only 1 additional task is added to the desired count.</p>
   *          <p>For scale-in policies, the cooldown period is used to block subsequent scale-in requests
   *          until it has expired. The intention is to scale in conservatively to protect your
   *          application's availability. However, if another alarm triggers a scale-out policy during
   *          the cooldown period after a scale-in, Application Auto Scaling scales out your scalable target
   *          immediately.</p>
   */
  Cooldown?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>,
   *             <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the
   *          value is treated as <code>Average</code>.</p>
   */
  MetricAggregationType?: MetricAggregationType | string;

  /**
   * <p>The minimum number to adjust your scalable dimension as a result of a scaling activity.
   *          If the adjustment type is <code>PercentChangeInCapacity</code>, the scaling policy changes
   *          the scalable dimension of the scalable target by this amount.</p>
   *          <p>For example, suppose that you create a step scaling policy to scale out an Amazon ECS service
   *          by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the service
   *          has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you
   *          specified a <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2
   *          tasks.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *          breach.</p>
   */
  StepAdjustments?: Array<StepAdjustment>;
}

export namespace StepScalingPolicyConfiguration {
  export function isa(o: any): o is StepScalingPolicyConfiguration {
    return __isa(o, "StepScalingPolicyConfiguration");
  }
}

/**
 * <p>Specifies whether the scaling activities for a scalable target are in a suspended state.
 *       </p>
 */
export interface SuspendedState {
  __type?: "SuspendedState";
  /**
   * <p>Whether scale in by a target tracking scaling policy or a step scaling policy is
   *          suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to remove capacity
   *          when a scaling policy is triggered. The default is <code>false</code>. </p>
   */
  DynamicScalingInSuspended?: boolean;

  /**
   * <p>Whether scale out by a target tracking scaling policy or a step scaling policy is
   *          suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add capacity
   *          when a scaling policy is triggered. The default is <code>false</code>. </p>
   */
  DynamicScalingOutSuspended?: boolean;

  /**
   * <p>Whether scheduled scaling is suspended. Set the value to <code>true</code> if you don't
   *          want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is
   *             <code>false</code>. </p>
   */
  ScheduledScalingSuspended?: boolean;
}

export namespace SuspendedState {
  export function isa(o: any): o is SuspendedState {
    return __isa(o, "SuspendedState");
  }
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface TargetTrackingScalingPolicyConfiguration {
  __type?: "TargetTrackingScalingPolicyConfiguration";
  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the
   *          value is <code>true</code>, scale in is disabled and the target tracking scaling policy
   *          won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the
   *          target tracking scaling policy can remove capacity from the scalable resource. The default
   *          value is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * <p>The amount of time, in seconds, after a scale-in activity completes before another scale
   *          in activity can start.</p>
   *          <p>The cooldown period is used to block subsequent scale-in requests until it has expired.
   *          The intention is to scale in conservatively to protect your application's availability.
   *          However, if another alarm triggers a scale-out policy during the cooldown period after a
   *          scale-in, Application Auto Scaling scales out your scalable target immediately.</p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale-out activity completes before another
   *          scale-out activity can start.</p>
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

export namespace TargetTrackingScalingPolicyConfiguration {
  export function isa(o: any): o is TargetTrackingScalingPolicyConfiguration {
    return __isa(o, "TargetTrackingScalingPolicyConfiguration");
  }
}

/**
 * <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
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
