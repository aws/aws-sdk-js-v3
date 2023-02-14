// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ApplicationAutoScalingServiceException as __BaseException } from "./ApplicationAutoScalingServiceException";

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

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 */
export class ConcurrentUpdateException extends __BaseException {
  readonly name: "ConcurrentUpdateException" = "ConcurrentUpdateException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdateException, __BaseException>) {
    super({
      name: "ConcurrentUpdateException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdateException.prototype);
    this.Message = opts.Message;
  }
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
  ElastiCacheReplicationGroupNodeGroups = "elasticache:replication-group:NodeGroups",
  ElastiCacheReplicationGroupReplicas = "elasticache:replication-group:Replicas",
  KafkaBrokerStorageVolumeSize = "kafka:broker-storage:VolumeSize",
  LambdaFunctionProvisionedConcurrency = "lambda:function:ProvisionedConcurrency",
  NeptuneClusterReadReplicaCount = "neptune:cluster:ReadReplicaCount",
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
  ELASTICACHE = "elasticache",
  EMR = "elasticmapreduce",
  KAFKA = "kafka",
  LAMBDA = "lambda",
  NEPTUNE = "neptune",
  RDS = "rds",
  SAGEMAKER = "sagemaker",
}

export interface DeleteScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export interface DeleteScalingPolicyResponse {}

/**
 * <p>The service encountered an internal error.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
 */
export class ObjectNotFoundException extends __BaseException {
  readonly name: "ObjectNotFoundException" = "ObjectNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotFoundException, __BaseException>) {
    super({
      name: "ObjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface DeleteScheduledActionRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export interface DeleteScheduledActionResponse {}

export interface DeregisterScalableTargetRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;
}

export interface DeregisterScalableTargetResponse {}

export interface DescribeScalableTargetsRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
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

/**
 * <p>Represents a scalable target.</p>
 */
export interface ScalableTarget {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
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

/**
 * <p>The next token supplied was invalid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeScalingActivitiesRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
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

  /**
   * <p>Specifies whether to include activities that aren't scaled (<i>not scaled
   *             activities</i>) in the response. Not scaled activities are activities that aren't
   *          completed or started for various reasons, such as preventing infinite scaling loops. For
   *          help interpreting the not scaled reason details in the response, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
   */
  IncludeNotScaledActivities?: boolean;
}

/**
 * <p>Describes the reason for an activity that isn't scaled (<i>not scaled
 *             activity</i>), in machine-readable format. For help interpreting the not scaled
 *          reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
 */
export interface NotScaledReason {
  /**
   * <p>A code that represents the reason for not scaling.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>AutoScalingAnticipatedFlapping</p>
   *             </li>
   *             <li>
   *                <p>TargetServicePutResourceAsUnscalable</p>
   *             </li>
   *             <li>
   *                <p>AlreadyAtMaxCapacity</p>
   *             </li>
   *             <li>
   *                <p>AlreadyAtMinCapacity</p>
   *             </li>
   *             <li>
   *                <p>AlreadyAtDesiredCapacity</p>
   *             </li>
   *          </ul>
   */
  Code: string | undefined;

  /**
   * <p>The maximum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The minimum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The current capacity.</p>
   */
  CurrentCapacity?: number;
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
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
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

  /**
   * <p>Machine-readable data that describes the reason for a not scaled activity. Only
   *          available when <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> includes not scaled activities.</p>
   */
  NotScaledReasons?: NotScaledReason[];
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

export interface DescribeScalingPoliciesRequest {
  /**
   * <p>The names of the scaling policies to describe.</p>
   */
  PolicyNames?: string[];

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and 10. The default
   *          value is 10.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 10 results and a <code>NextToken</code> value, if
   *          applicable.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
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
   *          <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups
   *           and a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *             </li>
   *             <li>
   *                <p>ECS services</p>
   *             </li>
   *             <li>
   *                <p>EMR clusters</p>
   *             </li>
   *             <li>
   *                <p> Neptune clusters</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variants</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleets</p>
   *             </li>
   *             <li>
   *                <p>Custom resources</p>
   *             </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB tables and global secondary indexes</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK broker storage</p>
   *             </li>
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
 *          <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services
 *             services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *          <p>To create your customized metric specification:</p>
 *          <ul>
 *             <li>
 *                <p>Add values for each required parameter from CloudWatch. You can use an existing metric,
 *                or a new metric that you create. To use your own metric, you must first publish the
 *                metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom
 *                   metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Choose a metric that changes proportionally with capacity. The value of the metric
 *                should increase or decrease in inverse proportion to the number of capacity units.
 *                That is, the value of the metric should decrease when capacity increases, and
 *                increase when capacity decreases. </p>
 *             </li>
 *          </ul>
 *          <p>For an example of how creating new metrics can be useful, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html">Scaling
 *             based on Amazon SQS</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. This topic
 *          mentions Auto Scaling groups, but the same scenario for Amazon SQS can apply to the target tracking
 *          scaling policies that you create for a Spot Fleet by using the Application Auto Scaling API.</p>
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the metric. To get the exact metric name, namespace, and dimensions, inspect
   *          the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that is returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
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
   * <p>The unit of the metric. For a complete list of the units that CloudWatch supports, see the
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a> data
   *          type in the <i>Amazon CloudWatch API Reference</i>.</p>
   */
  Unit?: string;
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
  ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage = "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage",
  ElastiCachePrimaryEngineCPUUtilization = "ElastiCachePrimaryEngineCPUUtilization",
  ElastiCacheReplicaEngineCPUUtilization = "ElastiCacheReplicaEngineCPUUtilization",
  KafkaBrokerStorageUtilization = "KafkaBrokerStorageUtilization",
  LambdaProvisionedConcurrencyUtilization = "LambdaProvisionedConcurrencyUtilization",
  NeptuneReaderAverageCPUUtilization = "NeptuneReaderAverageCPUUtilization",
  RDSReaderAverageCPUUtilization = "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections = "RDSReaderAverageDatabaseConnections",
  SageMakerVariantInvocationsPerInstance = "SageMakerVariantInvocationsPerInstance",
}

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *          Application Auto Scaling.</p>
 *          <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a
 *          desired metric already exists by looking up its namespace and dimension using the CloudWatch
 *          metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards
 *             with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 */
export interface PredefinedMetricSpecification {
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to
   *          Spot Fleets and ECS services.</p>
   */
  PredefinedMetricType: MetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *          label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target
   *          group attached to the Spot Fleet or ECS service.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *             and the final portion of the target group ARN into a single value, separated by a forward
   *             slash (/). The format of the resource label is:</p>
   *          <p>
   *             <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p>
   *          <p>Where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                     the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                     of the target group ARN.</p>
   *             </li>
   *          </ul>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *             the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p>
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>The target value for the metric. Although this property accepts numbers of type Double,
   *          it won't accept values that are either too small or too large. Values must be in the range
   *          of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For
   *          example, if the metric is CPU utilization, then the target value is a percent value that
   *          represents how much of the CPU can be used before scaling out. </p>
   *          <note>
   *             <p>If the scaling policy specifies the <code>ALBRequestCountPerTarget</code> predefined
   *             metric, specify the target utilization as the optimal average request count per target
   *             during any one-minute interval.</p>
   *          </note>
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
   *          <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups
   *           and a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *             </li>
   *             <li>
   *                <p>ECS services</p>
   *             </li>
   *             <li>
   *                <p>EMR clusters</p>
   *             </li>
   *             <li>
   *                <p> Neptune clusters</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variants</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleets</p>
   *             </li>
   *             <li>
   *                <p>Custom resources</p>
   *             </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB tables and global secondary indexes</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK broker storage</p>
   *             </li>
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
   *          <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups
   *           and a default value of 300 for the following scalable targets:</p>
   *          <ul>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB clusters</p>
   *             </li>
   *             <li>
   *                <p>ECS services</p>
   *             </li>
   *             <li>
   *                <p>EMR clusters</p>
   *             </li>
   *             <li>
   *                <p> Neptune clusters</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variants</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleets</p>
   *             </li>
   *             <li>
   *                <p>Custom resources</p>
   *             </li>
   *          </ul>
   *          <p>For all other scalable targets, the default value is 0:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB tables and global secondary indexes</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces tables</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK broker storage</p>
   *             </li>
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

/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p>
 *          <p>For more information about configuring scaling policies for a specific service, see
 *             <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services
 *             that you can use with Application Auto Scaling</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
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
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The scaling policy type.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or
   *       Neptune.</p>
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

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 */
export class FailedResourceAccessException extends __BaseException {
  readonly name: "FailedResourceAccessException" = "FailedResourceAccessException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedResourceAccessException, __BaseException>) {
    super({
      name: "FailedResourceAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedResourceAccessException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeScheduledActionsRequest {
  /**
   * <p>The names of the scheduled actions to describe.</p>
   */
  ScheduledActionNames?: string[];

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   */
  ServiceNamespace: ServiceNamespace | string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
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

/**
 * <p>Represents the minimum and maximum capacity for a scheduled action.</p>
 */
export interface ScalableTargetAction {
  /**
   * <p>The minimum capacity.</p>
   *          <p>When the scheduled action runs, the resource will have at least this much capacity, but it
   *       might have more depending on other settings, such as the target utilization level of a target
   *       tracking scaling policy.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas may impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and
   *             quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  MaxCapacity?: number;
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
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
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
   *          <p>At expressions are useful for one-time schedules. Cron expressions are useful for
   *          scheduled actions that run periodically at a specified date and time, and rate expressions
   *          are useful for scheduled actions that run at a regular interval.</p>
   *          <p>At and cron expressions use Universal Coordinated Time (UTC) by
   *          default.</p>
   *          <p>The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/examples-scheduled-actions.html">Example scheduled actions for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone used when referring to the date and time of a scheduled action, when the
   *          scheduled action uses an at or cron expression.</p>
   */
  Timezone?: string;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/default/sample-webapp</code>.</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension?: ScalableDimension | string;

  /**
   * <p>The date and time that the action is scheduled to begin, in UTC.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time that the action is scheduled to end, in UTC.</p>
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

/**
 * <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html">Application Auto Scaling service quotas</a>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface PutScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   *          <p>You cannot change the name of a scaling policy, but you can delete the original scaling
   *          policy and create a new scaling policy with the same settings and a different name.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The scaling policy type. This parameter is required if you are creating a scaling
   *       policy.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or
   *       Neptune.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target
   *         tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
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

export interface PutScheduledActionRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *          <p>At expressions are useful for one-time schedules. Cron expressions are useful for
   *          scheduled actions that run periodically at a specified date and time, and rate expressions
   *          are useful for scheduled actions that run at a regular interval.</p>
   *          <p>At and cron expressions use Universal Coordinated Time (UTC) by
   *          default.</p>
   *          <p>The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].</p>
   *          <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is
   *          <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p>
   *          <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/examples-scheduled-actions.html">Example scheduled actions for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   */
  Schedule?: string;

  /**
   * <p>Specifies the time zone used when setting a scheduled action by using an at or cron
   *          expression. If a time zone is not provided, UTC is used by default.</p>
   *          <p>Valid values are the canonical names of the IANA time zones supported by Joda-Time (such
   *          as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href="https://www.joda.org/joda-time/timezones.html">https://www.joda.org/joda-time/timezones.html</a>.</p>
   */
  Timezone?: string;

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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The date and time for this scheduled action to start, in UTC.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time for the recurring schedule to end, in UTC.</p>
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

export interface PutScheduledActionResponse {}

export interface RegisterScalableTargetRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
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
   *             </li>
   *             <li>
   *                <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the
   *                Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID.
   *                Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p>
   *             </li>
   *             <li>
   *                <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name.
   *                Example: <code>fleet/sample-fleet</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>table/my-table</code>.</p>
   *             </li>
   *             <li>
   *                <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name.
   *                Example: <code>table/my-table/index/my-table-index</code>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name.
   *                Example: <code>cluster:my-db-cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information
   *                is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub
   *                   repository</a>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>.
   *                Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name.
   *                Example: <code>keyspace/mykeyspace/table/mytable</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN.
   *                Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name.
   *                Example: <code>replication-group/mycluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p>
   *             </li>
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
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p>
   *             </li>
   *          </ul>
   */
  ScalableDimension: ScalableDimension | string | undefined;

  /**
   * <p>The minimum value that you plan to scale in to. When a scaling policy is in effect,
   *       Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to
   *       changing demand. This property is required when registering a new scalable target.</p>
   *          <p>For the following resources, the minimum value allowed is 0.</p>
   *          <ul>
   *             <li>
   *                <p>AppStream 2.0 fleets</p>
   *             </li>
   *             <li>
   *                <p> Aurora DB clusters</p>
   *             </li>
   *             <li>
   *                <p>ECS services</p>
   *             </li>
   *             <li>
   *                <p>EMR clusters</p>
   *             </li>
   *             <li>
   *                <p>Lambda provisioned concurrency</p>
   *             </li>
   *             <li>
   *                <p>SageMaker endpoint variants</p>
   *             </li>
   *             <li>
   *                <p>Spot Fleets</p>
   *             </li>
   *             <li>
   *                <p>custom resources</p>
   *             </li>
   *          </ul>
   *          <p>It's strongly recommended that you specify a value greater than 0. A value greater than 0
   *       means that data points are continuously reported to CloudWatch that scaling policies can use to
   *       scale on a metric like average CPU utilization.</p>
   *          <p>For all other resources, the minimum allowed value depends on the type of resource that
   *       you are using. If you provide a value that is lower than what a resource can accept, an error
   *       occurs. In which case, the error message will provide the minimum value that the resource can
   *       accept.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum value that you plan to scale out to. When a scaling policy is in effect,
   *          Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to
   *          changing demand. This property is required when registering a new scalable target.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas may impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and
   *             quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>This parameter is required for services that do not support service-linked roles (such as
   *       Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable
   *       target on your behalf. </p>
   *          <p>If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which
   *       it creates if it does not yet exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles">Application Auto Scaling IAM roles</a>.</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html">Suspending and resuming scaling</a> in the <i>Application Auto Scaling User
   *          Guide</i>.</p>
   */
  SuspendedState?: SuspendedState;
}

export interface RegisterScalableTargetResponse {}

/**
 * @internal
 */
export const AlarmFilterSensitiveLog = (obj: Alarm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScalingPolicyRequestFilterSensitiveLog = (obj: DeleteScalingPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScalingPolicyResponseFilterSensitiveLog = (obj: DeleteScalingPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduledActionRequestFilterSensitiveLog = (obj: DeleteScheduledActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduledActionResponseFilterSensitiveLog = (obj: DeleteScheduledActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterScalableTargetRequestFilterSensitiveLog = (obj: DeregisterScalableTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterScalableTargetResponseFilterSensitiveLog = (obj: DeregisterScalableTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalableTargetsRequestFilterSensitiveLog = (obj: DescribeScalableTargetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuspendedStateFilterSensitiveLog = (obj: SuspendedState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalableTargetFilterSensitiveLog = (obj: ScalableTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalableTargetsResponseFilterSensitiveLog = (obj: DescribeScalableTargetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingActivitiesRequestFilterSensitiveLog = (obj: DescribeScalingActivitiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotScaledReasonFilterSensitiveLog = (obj: NotScaledReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingActivityFilterSensitiveLog = (obj: ScalingActivity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingActivitiesResponseFilterSensitiveLog = (obj: DescribeScalingActivitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingPoliciesRequestFilterSensitiveLog = (obj: DescribeScalingPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepAdjustmentFilterSensitiveLog = (obj: StepAdjustment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepScalingPolicyConfigurationFilterSensitiveLog = (obj: StepScalingPolicyConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDimensionFilterSensitiveLog = (obj: MetricDimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomizedMetricSpecificationFilterSensitiveLog = (obj: CustomizedMetricSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredefinedMetricSpecificationFilterSensitiveLog = (obj: PredefinedMetricSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetTrackingScalingPolicyConfigurationFilterSensitiveLog = (
  obj: TargetTrackingScalingPolicyConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingPolicyFilterSensitiveLog = (obj: ScalingPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingPoliciesResponseFilterSensitiveLog = (obj: DescribeScalingPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledActionsRequestFilterSensitiveLog = (obj: DescribeScheduledActionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalableTargetActionFilterSensitiveLog = (obj: ScalableTargetAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledActionFilterSensitiveLog = (obj: ScheduledAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledActionsResponseFilterSensitiveLog = (obj: DescribeScheduledActionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScalingPolicyRequestFilterSensitiveLog = (obj: PutScalingPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScalingPolicyResponseFilterSensitiveLog = (obj: PutScalingPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScheduledActionRequestFilterSensitiveLog = (obj: PutScheduledActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScheduledActionResponseFilterSensitiveLog = (obj: PutScheduledActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterScalableTargetRequestFilterSensitiveLog = (obj: RegisterScalableTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterScalableTargetResponseFilterSensitiveLog = (obj: RegisterScalableTargetResponse): any => ({
  ...obj,
});
