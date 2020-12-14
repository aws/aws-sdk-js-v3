import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdjustmentType {
  ChangeInCapacity = "ChangeInCapacity",
  ExactCapacity = "ExactCapacity",
  PercentChangeInCapacity = "PercentChangeInCapacity",
}

/**
 * <p>Represents a CloudWatch alarm associated with a scaling policy.</p>
 */
export interface Alarm {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmARN: string | undefined;
}

export namespace Alarm {
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
}

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 */
export interface ConcurrentUpdateException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentUpdateException";
  $fault: "server";
  Message?: string;
}

export namespace ConcurrentUpdateException {
  export const filterSensitiveLog = (obj: ConcurrentUpdateException): any => ({
    ...obj,
  });
}

export enum ScalableDimension {
  AppstreamFleetDesiredCapacity = "appstream:fleet:DesiredCapacity",
  CassandraTableReadCapacityUnits = "cassandra:table:ReadCapacityUnits",
  CassandraTableWriteCapacityUnits = "cassandra:table:WriteCapacityUnits",
  ComprehendDocClassifierEndpointInferenceUnits = "comprehend:document-classifier-endpoint:DesiredInferenceUnits",
  ComprehendEntityRecognizerEndpointInferenceUnits = "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits",
  CustomResourceScalableDimension = "custom-resource:ResourceType:Property",
  DynamoDBIndexReadCapacityUnits = "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits = "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits = "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits = "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity = "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount = "ecs:service:DesiredCount",
  EMRInstanceGroupInstanceCount = "elasticmapreduce:instancegroup:InstanceCount",
  KafkaBrokerStorageVolumeSize = "kafka:broker-storage:VolumeSize",
  LambdaFunctionProvisionedConcurrency = "lambda:function:ProvisionedConcurrency",
  RDSClusterReadReplicaCount = "rds:cluster:ReadReplicaCount",
  SageMakerVariantDesiredInstanceCount = "sagemaker:variant:DesiredInstanceCount",
}

export enum ServiceNamespace {
  APPSTREAM = "appstream",
  CASSANDRA = "cassandra",
  COMPREHEND = "comprehend",
  CUSTOM_RESOURCE = "custom-resource",
  DYNAMODB = "dynamodb",
  EC2 = "ec2",
  ECS = "ecs",
  EMR = "elasticmapreduce",
  KAFKA = "kafka",
  LAMBDA = "lambda",
  RDS = "rds",
  SAGEMAKER = "sagemaker",
}

export interface DeleteScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export namespace DeleteScalingPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteScalingPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteScalingPolicyResponse {}

export namespace DeleteScalingPolicyResponse {
  export const filterSensitiveLog = (obj: DeleteScalingPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The service encountered an internal error.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
 */
export interface ObjectNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ObjectNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ObjectNotFoundException {
  export const filterSensitiveLog = (obj: ObjectNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteScheduledActionRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export namespace DeleteScheduledActionRequest {
  export const filterSensitiveLog = (obj: DeleteScheduledActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteScheduledActionResponse {}

export namespace DeleteScheduledActionResponse {
  export const filterSensitiveLog = (obj: DeleteScheduledActionResponse): any => ({
    ...obj,
  });
}

export interface DeregisterScalableTargetRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export namespace DeregisterScalableTargetRequest {
  export const filterSensitiveLog = (obj: DeregisterScalableTargetRequest): any => ({
    ...obj,
  });
}

export interface DeregisterScalableTargetResponse {}

export namespace DeregisterScalableTargetResponse {
  export const filterSensitiveLog = (obj: DeregisterScalableTargetResponse): any => ({
    ...obj,
  });
}

export interface DescribeScalableTargetsRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceIds?: string[];

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

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
}

export namespace DescribeScalableTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeScalableTargetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies whether the scaling activities for a scalable target are in a suspended state.
 *       </p>
 */
export interface SuspendedState {
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
  export const filterSensitiveLog = (obj: SuspendedState): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a scalable target.</p>
 */
export interface ScalableTarget {
  /**
   * <p>The namespace of the AWS service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The minimum value to scale to in response to a scale-in activity.</p>
   */
  MinCapacity: number | undefined;

  /**
   * <p>The maximum value to scale to in response to a scale-out activity.</p>
   */
  MaxCapacity: number | undefined;

  /**
   * <p>The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your
   *          behalf.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The Unix timestamp for when the scalable target was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Specifies whether the scaling activities for a scalable target are in a suspended state.
   *       </p>
   */
  SuspendedState?: SuspendedState;
}

export namespace ScalableTarget {
  export const filterSensitiveLog = (obj: ScalableTarget): any => ({
    ...obj,
  });
}

export interface DescribeScalableTargetsResponse {
  /**
   * <p>The scalable targets that match the request parameters.</p>
   */
  ScalableTargets?: ScalableTarget[];

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeScalableTargetsResponse {
  export const filterSensitiveLog = (obj: DescribeScalableTargetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The next token supplied was invalid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface DescribeScalingActivitiesRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *       This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

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
}

export namespace DescribeScalingActivitiesRequest {
  export const filterSensitiveLog = (obj: DescribeScalingActivitiesRequest): any => ({
    ...obj,
  });
}

export enum ScalingActivityStatusCode {
  Failed = "Failed",
  InProgress = "InProgress",
  Overridden = "Overridden",
  Pending = "Pending",
  Successful = "Successful",
  Unfulfilled = "Unfulfilled",
}

/**
 * <p>Represents a scaling activity.</p>
 */
export interface ScalingActivity {
  /**
   * <p>The unique identifier of the scaling activity.</p>
   */
  ActivityId: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>A simple description of what action the scaling activity intends to accomplish.</p>
   */
  Description: string | undefined;

  /**
   * <p>A simple description of what caused the scaling activity to happen.</p>
   */
  Cause: string | undefined;

  /**
   * <p>The Unix timestamp for when the scaling activity began.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The Unix timestamp for when the scaling activity ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Indicates the status of the scaling activity.</p>
   */
  StatusCode: ScalingActivityStatusCode | string | undefined;

  /**
   * <p>A simple message about the current status of the scaling activity.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The details about the scaling activity.</p>
   */
  Details?: string;
}

export namespace ScalingActivity {
  export const filterSensitiveLog = (obj: ScalingActivity): any => ({
    ...obj,
  });
}

export interface DescribeScalingActivitiesResponse {
  /**
   * <p>A list of scaling activity objects.</p>
   */
  ScalingActivities?: ScalingActivity[];

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeScalingActivitiesResponse {
  export const filterSensitiveLog = (obj: DescribeScalingActivitiesResponse): any => ({
    ...obj,
  });
}

export interface DescribeScalingPoliciesRequest {
  /**
   * <p>The names of the scaling policies to describe.</p>
   */
  PolicyNames?: string[];

  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

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
}

export namespace DescribeScalingPoliciesRequest {
  export const filterSensitiveLog = (obj: DescribeScalingPoliciesRequest): any => ({
    ...obj,
  });
}

export enum PolicyType {
  StepScaling = "StepScaling",
  TargetTrackingScaling = "TargetTrackingScaling",
}

export enum MetricAggregationType {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
}

/**
 * <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference
 *          between the value of the aggregated CloudWatch metric and the breach threshold that you've
 *          defined for the alarm. </p>
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
   *          adds to the current capacity while a negative number removes from the current capacity. For
   *          exact capacity, you must specify a positive value.</p>
   */
  ScalingAdjustment: number | undefined;
}

export namespace StepAdjustment {
  export const filterSensitiveLog = (obj: StepAdjustment): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface StepScalingPolicyConfiguration {
  /**
   * <p>Specifies how the <code>ScalingAdjustment</code> value in a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepAdjustment.html">StepAdjustment</a> is interpreted (for example, an absolute number or a
   *          percentage). The valid values are <code>ChangeInCapacity</code>,
   *          <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>. </p>
   *          <p>
   *             <code>AdjustmentType</code> is required if you are adding a new step scaling policy
   *          configuration.</p>
   */
  AdjustmentType?: AdjustmentType | string;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *          breach.</p>
   *          <p>At least one step adjustment is required if you are adding a new step scaling policy
   *          configuration.</p>
   */
  StepAdjustments?: StepAdjustment[];

  /**
   * <p>The minimum value to scale by when the adjustment type is
   *             <code>PercentChangeInCapacity</code>. For example, suppose that you create a step
   *          scaling policy to scale out an Amazon ECS service by 25 percent and you specify a
   *             <code>MinAdjustmentMagnitude</code> of 2. If the service has 4 tasks and the scaling
   *          policy is performed, 25 percent of 4 is 1. However, because you specified a
   *             <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2
   *          tasks.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount of time, in seconds, to wait for a previous scaling activity to take effect. </p>
   *          <p>With scale-out policies, the intention is to continuously (but not excessively) scale out.
   *       After Application Auto Scaling successfully scales out using a step scaling policy, it starts to calculate the
   *       cooldown time. The scaling policy won't increase the desired capacity again unless either a
   *       larger scale out is triggered or the cooldown period ends. While the cooldown period is in
   *       effect, capacity added by the initiating scale-out activity is calculated as part of the
   *       desired capacity for the next scale-out activity. For example, when an alarm triggers a step
   *       scaling policy to increase the capacity by 2, the scaling activity completes successfully, and
   *       a cooldown period starts. If the alarm triggers again during the cooldown period but at a more
   *       aggressive step adjustment of 3, the previous increase of 2 is considered part of the current
   *       capacity. Therefore, only 1 is added to the capacity.</p>
   *          <p>With scale-in policies, the intention is to scale in conservatively to protect your
   *       application’s availability, so scale-in activities are blocked until the cooldown period has
   *       expired. However, if another alarm triggers a scale-out activity during the cooldown period
   *       after a scale-in activity, Application Auto Scaling scales out the target immediately. In this case, the
   *       cooldown period for the scale-in activity stops and doesn't complete.</p>
   *          <p>Application Auto Scaling provides a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>ECS services</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet requests</p>
   *            </li>
   *             <li>
   *                <p>EMR clusters</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variants</p>
   *            </li>
   *             <li>
   *                <p>Custom resources</p>
   *            </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>DynamoDB tables</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary indexes</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster storage</p>
   *            </li>
   *          </ul>
   */
  Cooldown?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>,
   *             <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the
   *          value is treated as <code>Average</code>.</p>
   */
  MetricAggregationType?: MetricAggregationType | string;
}

export namespace StepScalingPolicyConfiguration {
  export const filterSensitiveLog = (obj: StepScalingPolicyConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the dimension names and values associated with a metric.</p>
 */
export interface MetricDimension {
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
  export const filterSensitiveLog = (obj: MetricDimension): any => ({
    ...obj,
  });
}

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum",
}

/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use
 *          with Application Auto Scaling.</p>
 *          <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS
 *             Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
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
 *                That is, the value of the metric should decrease when capacity increases, and
 *                increase when capacity decreases. </p>
 *             </li>
 *          </ul>
 *          <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             Concepts</a>. </p>
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the metric. </p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The dimensions of the metric. </p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your scaling policy.</p>
   */
  Dimensions?: MetricDimension[];

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
  export const filterSensitiveLog = (obj: CustomizedMetricSpecification): any => ({
    ...obj,
  });
}

export enum MetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  AppStreamAverageCapacityUtilization = "AppStreamAverageCapacityUtilization",
  CassandraReadCapacityUtilization = "CassandraReadCapacityUtilization",
  CassandraWriteCapacityUtilization = "CassandraWriteCapacityUtilization",
  ComprehendInferenceUtilization = "ComprehendInferenceUtilization",
  DynamoDBReadCapacityUtilization = "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization = "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization = "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn = "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut = "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization = "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization = "ECSServiceAverageMemoryUtilization",
  KafkaBrokerStorageUtilization = "KafkaBrokerStorageUtilization",
  LambdaProvisionedConcurrencyUtilization = "LambdaProvisionedConcurrencyUtilization",
  RDSReaderAverageCPUUtilization = "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections = "RDSReaderAverageDatabaseConnections",
  SageMakerVariantInvocationsPerInstance = "SageMakerVariantInvocationsPerInstance",
}

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *          Application Auto Scaling.</p>
 *          <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a
 *          desired metric already exists by looking up its namespace and dimension using the CloudWatch
 *          metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards
 *             with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 */
export interface PredefinedMetricSpecification {
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to
   *          Spot Fleet requests and ECS services.</p>
   */
  PredefinedMetricType: MetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *          label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target
   *          group attached to the Spot Fleet request or ECS service.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *          and the final portion of the target group ARN into a single value, separated by a forward
   *          slash (/). The format is
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
   *          <p>This is an example:
   *          app/EC2Co-EcsEl-1TKLTMITMM0EO/f37c06a68c1748aa/targetgroup/EC2Co-Defau-LDNM7Q3ZH1ZN/6d4ea56ca2d6a18d.</p>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *          the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

export namespace PredefinedMetricSpecification {
  export const filterSensitiveLog = (obj: PredefinedMetricSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10)
   *          or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number | undefined;

  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * <p>The amount of time, in seconds, to wait for a previous scale-out activity to take
   *       effect.</p>
   *          <p>With the <i>scale-out cooldown period</i>, the intention is to continuously
   *       (but not excessively) scale out. After Application Auto Scaling successfully scales out using a target
   *       tracking scaling policy, it starts to calculate the cooldown time. The scaling policy won't
   *       increase the desired capacity again unless either a larger scale out is triggered or the
   *       cooldown period ends. While the cooldown period is in effect, the capacity added by the
   *       initiating scale-out activity is calculated as part of the desired capacity for the next
   *       scale-out activity.</p>
   *          <p>Application Auto Scaling provides a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>ECS services</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet requests</p>
   *            </li>
   *             <li>
   *                <p>EMR clusters</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variants</p>
   *            </li>
   *             <li>
   *                <p>Custom resources</p>
   *            </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>DynamoDB tables</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary indexes</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster storage</p>
   *            </li>
   *          </ul>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale-in activity completes before another
   *       scale-in activity can start.</p>
   *          <p>With the <i>scale-in cooldown period</i>, the intention is to scale in
   *       conservatively to protect your application’s availability, so scale-in activities are blocked
   *       until the cooldown period has expired. However, if another alarm triggers a scale-out activity
   *       during the scale-in cooldown period, Application Auto Scaling scales out the target immediately. In this case,
   *       the scale-in cooldown period stops and doesn't complete.</p>
   *          <p>Application Auto Scaling provides a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>ECS services</p>
   *            </li>
   *             <li>
   *                <p>Spot Fleet requests</p>
   *            </li>
   *             <li>
   *                <p>EMR clusters</p>
   *            </li>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *            </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *            </li>
   *             <li>
   *                <p>Amazon SageMaker endpoint variants</p>
   *            </li>
   *             <li>
   *                <p>Custom resources</p>
   *            </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>DynamoDB tables</p>
   *            </li>
   *             <li>
   *                <p>DynamoDB global secondary indexes</p>
   *            </li>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster storage</p>
   *            </li>
   *          </ul>
   */
  ScaleInCooldown?: number;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the
   *          value is <code>true</code>, scale in is disabled and the target tracking scaling policy
   *          won't remove capacity from the scalable target. Otherwise, scale in is enabled and the
   *          target tracking scaling policy can remove capacity from the scalable target. The default
   *          value is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;
}

export namespace TargetTrackingScalingPolicyConfiguration {
  export const filterSensitiveLog = (obj: TargetTrackingScalingPolicyConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p>
 *          <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 */
export interface ScalingPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the scaling policy.</p>
   */
  PolicyARN: string | undefined;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The scaling policy type.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>A step scaling policy.</p>
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;

  /**
   * <p>The CloudWatch alarms associated with the scaling policy.</p>
   */
  Alarms?: Alarm[];

  /**
   * <p>The Unix timestamp for when the scaling policy was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace ScalingPolicy {
  export const filterSensitiveLog = (obj: ScalingPolicy): any => ({
    ...obj,
  });
}

export interface DescribeScalingPoliciesResponse {
  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: ScalingPolicy[];

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeScalingPoliciesResponse {
  export const filterSensitiveLog = (obj: DescribeScalingPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 */
export interface FailedResourceAccessException extends __SmithyException, $MetadataBearer {
  name: "FailedResourceAccessException";
  $fault: "client";
  Message?: string;
}

export namespace FailedResourceAccessException {
  export const filterSensitiveLog = (obj: FailedResourceAccessException): any => ({
    ...obj,
  });
}

export interface DescribeScheduledActionsRequest {
  /**
   * <p>The names of the scheduled actions to describe.</p>
   */
  ScheduledActionNames?: string[];

  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier. If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId?: string;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

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
}

export namespace DescribeScheduledActionsRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledActionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the minimum and maximum capacity for a scheduled action.</p>
 */
export interface ScalableTargetAction {
  /**
   * <p>The minimum capacity.</p>
   *          <p>For certain resources, the minimum value allowed is 0. This includes Lambda provisioned
   *       concurrency, Spot Fleet, ECS services, Aurora DB clusters, EMR clusters, and custom resources.
   *       For all other resources, the minimum value allowed is 1.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas may impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service Endpoints and
   *             Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  MaxCapacity?: number;
}

export namespace ScalableTargetAction {
  export const filterSensitiveLog = (obj: ScalableTargetAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a scheduled action.</p>
 */
export interface ScheduledAction {
  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   */
  ScheduledActionARN: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

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
   *          <p>At expressions are useful for one-time schedules. Specify the time in UTC.</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information about cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   *            <p>For examples of using these expressions, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The date and time that the action is scheduled to begin.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time that the action is scheduled to end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. At the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   */
  ScalableTargetAction?: ScalableTargetAction;

  /**
   * <p>The date and time that the scheduled action was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace ScheduledAction {
  export const filterSensitiveLog = (obj: ScheduledAction): any => ({
    ...obj,
  });
}

export interface DescribeScheduledActionsResponse {
  /**
   * <p>Information about the scheduled actions.</p>
   */
  ScheduledActions?: ScheduledAction[];

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeScheduledActionsResponse {
  export const filterSensitiveLog = (obj: DescribeScheduledActionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/ApplicationAutoScaling/latest/userguide/application-auto-scaling-limits.html">Application Auto Scaling Limits</a>.</p>
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

export interface PutScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The policy type. This parameter is required if you are creating a scaling policy.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces (for
   *       Apache Cassandra), or Amazon MSK.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target
   *         Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  PolicyType?: PolicyType | string;

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
  export const filterSensitiveLog = (obj: PutScalingPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutScalingPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resulting scaling policy.</p>
   */
  PolicyARN: string | undefined;

  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   */
  Alarms?: Alarm[];
}

export namespace PutScalingPolicyResponse {
  export const filterSensitiveLog = (obj: PutScalingPolicyResponse): any => ({
    ...obj,
  });
}

export interface PutScheduledActionRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

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
   *          <p>At expressions are useful for one-time schedules. Specify the time in UTC.</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information about cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   *            <p>For examples of using these expressions, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  Schedule?: string;

  /**
   * <p>The name of the scheduled action. This name must be unique among all other scheduled
   *          actions on the specified scalable target. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The date and time for this scheduled action to start.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time for the recurring schedule to end.</p>
   */
  EndTime?: Date;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. At the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   */
  ScalableTargetAction?: ScalableTargetAction;
}

export namespace PutScheduledActionRequest {
  export const filterSensitiveLog = (obj: PutScheduledActionRequest): any => ({
    ...obj,
  });
}

export interface PutScheduledActionResponse {}

export namespace PutScheduledActionResponse {
  export const filterSensitiveLog = (obj: PutScheduledActionResponse): any => ({
    ...obj,
  });
}

export interface RegisterScalableTargetRequest {
  /**
   * <p>The namespace of the AWS service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource that is associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
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
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *            </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *            </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *            </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
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
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> -  The provisioned write capacity for an Amazon Keyspaces table.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *            </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The minimum value that you plan to scale in to. When a scaling policy is in effect,
   *       Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to
   *       changing demand. </p>
   *          <p>This parameter is required if you are registering a scalable target. For certain
   *       resources, the minimum value allowed is 0. This includes Lambda provisioned concurrency, Spot
   *       Fleet, ECS services, Aurora DB clusters, EMR clusters, and custom resources. For all other
   *       resources, the minimum value allowed is 1.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum value that you plan to scale out to. When a scaling policy is in effect,
   *          Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to
   *          changing demand. </p>
   *          <p>This parameter is required if you are registering a scalable target.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas may impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service Endpoints and
   *             Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>This parameter is required for services that do not support service-linked roles (such as
   *       Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable
   *       target on your behalf. </p>
   *          <p>If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which
   *       it creates if it does not yet exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles">Application Auto Scaling IAM Roles</a>.</p>
   */
  RoleARN?: string;

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
  export const filterSensitiveLog = (obj: RegisterScalableTargetRequest): any => ({
    ...obj,
  });
}

export interface RegisterScalableTargetResponse {}

export namespace RegisterScalableTargetResponse {
  export const filterSensitiveLog = (obj: RegisterScalableTargetResponse): any => ({
    ...obj,
  });
}
