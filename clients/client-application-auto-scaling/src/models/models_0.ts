// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApplicationAutoScalingServiceException as __BaseException } from "./ApplicationAutoScalingServiceException";

/**
 * @public
 * @enum
 */
export const AdjustmentType = {
  ChangeInCapacity: "ChangeInCapacity",
  ExactCapacity: "ExactCapacity",
  PercentChangeInCapacity: "PercentChangeInCapacity",
} as const;

/**
 * @public
 */
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType];

/**
 * <p>Represents a CloudWatch alarm associated with a scaling policy.</p>
 * @public
 */
export interface Alarm {
  /**
   * <p>The name of the alarm.</p>
   * @public
   */
  AlarmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   * @public
   */
  AlarmARN: string | undefined;
}

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 * @public
 */
export class ConcurrentUpdateException extends __BaseException {
  readonly name: "ConcurrentUpdateException" = "ConcurrentUpdateException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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

/**
 * @public
 * @enum
 */
export const ScalableDimension = {
  AppstreamFleetDesiredCapacity: "appstream:fleet:DesiredCapacity",
  CassandraTableReadCapacityUnits: "cassandra:table:ReadCapacityUnits",
  CassandraTableWriteCapacityUnits: "cassandra:table:WriteCapacityUnits",
  ComprehendDocClassifierEndpointInferenceUnits: "comprehend:document-classifier-endpoint:DesiredInferenceUnits",
  ComprehendEntityRecognizerEndpointInferenceUnits: "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits",
  CustomResourceScalableDimension: "custom-resource:ResourceType:Property",
  DynamoDBIndexReadCapacityUnits: "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits: "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits: "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits: "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity: "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount: "ecs:service:DesiredCount",
  EMRInstanceGroupInstanceCount: "elasticmapreduce:instancegroup:InstanceCount",
  ElastiCacheReplicationGroupNodeGroups: "elasticache:replication-group:NodeGroups",
  ElastiCacheReplicationGroupReplicas: "elasticache:replication-group:Replicas",
  KafkaBrokerStorageVolumeSize: "kafka:broker-storage:VolumeSize",
  LambdaFunctionProvisionedConcurrency: "lambda:function:ProvisionedConcurrency",
  NeptuneClusterReadReplicaCount: "neptune:cluster:ReadReplicaCount",
  RDSClusterReadReplicaCount: "rds:cluster:ReadReplicaCount",
  SageMakerInferenceComponentDesiredCopyCount: "sagemaker:inference-component:DesiredCopyCount",
  SageMakerVariantDesiredInstanceCount: "sagemaker:variant:DesiredInstanceCount",
  SageMakerVariantDesiredProvisionedConcurrency: "sagemaker:variant:DesiredProvisionedConcurrency",
  WorkSpacesWorkSpacesPoolDesiredUserSessions: "workspaces:workspacespool:DesiredUserSessions",
} as const;

/**
 * @public
 */
export type ScalableDimension = (typeof ScalableDimension)[keyof typeof ScalableDimension];

/**
 * @public
 * @enum
 */
export const ServiceNamespace = {
  APPSTREAM: "appstream",
  CASSANDRA: "cassandra",
  COMPREHEND: "comprehend",
  CUSTOM_RESOURCE: "custom-resource",
  DYNAMODB: "dynamodb",
  EC2: "ec2",
  ECS: "ecs",
  ELASTICACHE: "elasticache",
  EMR: "elasticmapreduce",
  KAFKA: "kafka",
  LAMBDA: "lambda",
  NEPTUNE: "neptune",
  RDS: "rds",
  SAGEMAKER: "sagemaker",
  WORKSPACES: "workspaces",
} as const;

/**
 * @public
 */
export type ServiceNamespace = (typeof ServiceNamespace)[keyof typeof ServiceNamespace];

/**
 * @public
 */
export interface DeleteScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;
}

/**
 * @public
 */
export interface DeleteScalingPolicyResponse {}

/**
 * <p>The service encountered an internal error.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class ObjectNotFoundException extends __BaseException {
  readonly name: "ObjectNotFoundException" = "ObjectNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DeleteScheduledActionRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The name of the scheduled action.</p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionResponse {}

/**
 * @public
 */
export interface DeregisterScalableTargetRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;
}

/**
 * @public
 */
export interface DeregisterScalableTargetResponse {}

/**
 * @public
 */
export interface DescribeScalableTargetsRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and
   *          50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies whether the scaling activities for a scalable target are in a suspended state.
 *       </p>
 * @public
 */
export interface SuspendedState {
  /**
   * <p>Whether scale in by a target tracking scaling policy or a step scaling policy is
   *          suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to remove capacity
   *          when a scaling policy is triggered. The default is <code>false</code>. </p>
   * @public
   */
  DynamicScalingInSuspended?: boolean | undefined;

  /**
   * <p>Whether scale out by a target tracking scaling policy or a step scaling policy is
   *          suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add capacity
   *          when a scaling policy is triggered. The default is <code>false</code>. </p>
   * @public
   */
  DynamicScalingOutSuspended?: boolean | undefined;

  /**
   * <p>Whether scheduled scaling is suspended. Set the value to <code>true</code> if you don't
   *          want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is
   *             <code>false</code>. </p>
   * @public
   */
  ScheduledScalingSuspended?: boolean | undefined;
}

/**
 * <p>Represents a scalable target.</p>
 * @public
 */
export interface ScalableTarget {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>The minimum value to scale to in response to a scale-in activity.</p>
   * @public
   */
  MinCapacity: number | undefined;

  /**
   * <p>The maximum value to scale to in response to a scale-out activity.</p>
   * @public
   */
  MaxCapacity: number | undefined;

  /**
   * <p>
   *          The predicted capacity of the scalable target.
   *       </p>
   * @public
   */
  PredictedCapacity?: number | undefined;

  /**
   * <p>The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your
   *          behalf.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The Unix timestamp for when the scalable target was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Specifies whether the scaling activities for a scalable target are in a suspended
   *          state.</p>
   * @public
   */
  SuspendedState?: SuspendedState | undefined;

  /**
   * <p>The ARN of the scalable target.</p>
   * @public
   */
  ScalableTargetARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalableTargetsResponse {
  /**
   * <p>The scalable targets that match the request parameters.</p>
   * @public
   */
  ScalableTargets?: ScalableTarget[] | undefined;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The next token supplied was invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DescribeScalingActivitiesRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and
   *          50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies whether to include activities that aren't scaled (<i>not scaled
   *             activities</i>) in the response. Not scaled activities are activities that aren't
   *          completed or started for various reasons, such as preventing infinite scaling loops. For
   *          help interpreting the not scaled reason details in the response, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
   * @public
   */
  IncludeNotScaledActivities?: boolean | undefined;
}

/**
 * <p>Describes the reason for an activity that isn't scaled (<i>not scaled
 *             activity</i>), in machine-readable format. For help interpreting the not scaled
 *          reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
 * @public
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
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The maximum capacity.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The minimum capacity.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The current capacity.</p>
   * @public
   */
  CurrentCapacity?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ScalingActivityStatusCode = {
  Failed: "Failed",
  InProgress: "InProgress",
  Overridden: "Overridden",
  Pending: "Pending",
  Successful: "Successful",
  Unfulfilled: "Unfulfilled",
} as const;

/**
 * @public
 */
export type ScalingActivityStatusCode = (typeof ScalingActivityStatusCode)[keyof typeof ScalingActivityStatusCode];

/**
 * <p>Represents a scaling activity.</p>
 * @public
 */
export interface ScalingActivity {
  /**
   * <p>The unique identifier of the scaling activity.</p>
   * @public
   */
  ActivityId: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling activity.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>A simple description of what action the scaling activity intends to accomplish.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A simple description of what caused the scaling activity to happen.</p>
   * @public
   */
  Cause: string | undefined;

  /**
   * <p>The Unix timestamp for when the scaling activity began.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The Unix timestamp for when the scaling activity ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Indicates the status of the scaling activity.</p>
   * @public
   */
  StatusCode: ScalingActivityStatusCode | undefined;

  /**
   * <p>A simple message about the current status of the scaling activity.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The details about the scaling activity.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>Machine-readable data that describes the reason for a not scaled activity. Only
   *          available when <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> includes not scaled activities.</p>
   * @public
   */
  NotScaledReasons?: NotScaledReason[] | undefined;
}

/**
 * @public
 */
export interface DescribeScalingActivitiesResponse {
  /**
   * <p>A list of scaling activity objects.</p>
   * @public
   */
  ScalingActivities?: ScalingActivity[] | undefined;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesRequest {
  /**
   * <p>The names of the scaling policies to describe.</p>
   * @public
   */
  PolicyNames?: string[] | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * <p>The maximum number of scalable targets. This value can be between 1 and 10. The default
   *          value is 10.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 10 results and a <code>NextToken</code> value, if
   *          applicable.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyType = {
  PredictiveScaling: "PredictiveScaling",
  StepScaling: "StepScaling",
  TargetTrackingScaling: "TargetTrackingScaling",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const PredictiveScalingMaxCapacityBreachBehavior = {
  HonorMaxCapacity: "HonorMaxCapacity",
  IncreaseMaxCapacity: "IncreaseMaxCapacity",
} as const;

/**
 * @public
 */
export type PredictiveScalingMaxCapacityBreachBehavior =
  (typeof PredictiveScalingMaxCapacityBreachBehavior)[keyof typeof PredictiveScalingMaxCapacityBreachBehavior];

/**
 * <p>
 *          Describes the dimension of a metric.
 *       </p>
 * @public
 */
export interface PredictiveScalingMetricDimension {
  /**
   * <p>
   *          The name of the dimension.
   *       </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *          The value of the dimension.
   *       </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>
 *          Describes the scaling metric.
 *       </p>
 * @public
 */
export interface PredictiveScalingMetric {
  /**
   * <p>
   *          Describes the dimensions of the metric.
   *       </p>
   * @public
   */
  Dimensions?: PredictiveScalingMetricDimension[] | undefined;

  /**
   * <p>
   *          The name of the metric.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>
   *          The namespace of the metric.
   *       </p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * <p>
 *          This structure defines the CloudWatch metric to return, along with the statistic and unit.
 *       </p>
 * @public
 */
export interface PredictiveScalingMetricStat {
  /**
   * <p>
   *          The CloudWatch metric to return, including the metric name, namespace, and dimensions. To
   *          get the exact metric name, namespace, and dimensions, inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that is returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.
   *       </p>
   * @public
   */
  Metric: PredictiveScalingMetric | undefined;

  /**
   * <p>
   *          The statistic to return. It can include any CloudWatch statistic or extended statistic. For
   *          a list of valid values, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>.
   *       </p>
   *          <p>The most commonly used metrics for predictive scaling are <code>Average</code> and
   *          <code>Sum</code>.</p>
   * @public
   */
  Stat: string | undefined;

  /**
   * <p>
   *          The unit to use for the returned data points. For a complete list of the units that
   *          CloudWatch supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a>
   *          data type in the <i>Amazon CloudWatch API Reference</i>.
   *       </p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>
 *          The metric data to return. Also defines whether this call is returning data for one
 *          metric only, or whether it is performing a math expression on the values of returned
 *          metric statistics to create a new time series. A time series is a series of data points,
 *          each of which is associated with a timestamp.
 *       </p>
 * @public
 */
export interface PredictiveScalingMetricDataQuery {
  /**
   * <p>
   *          A short name that identifies the object's results in the response. This name must be
   *          unique among all <code>MetricDataQuery</code> objects specified for a single scaling
   *          policy. If you are performing math expressions on this set of data, this name represents
   *          that data and can serve as a variable in the mathematical expression. The valid
   *          characters are letters, numbers, and underscores. The first character must be a
   *          lowercase letter.
   *       </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>
   *          The math expression to perform on the returned data, if this object is performing a
   *          math expression. This expression can use the <code>Id</code> of the other metrics to
   *          refer to those metrics, and can also use the <code>Id</code> of other expressions to use
   *          the result of those expressions.
   *       </p>
   *          <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either
   *          <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>
   *          Information about the metric data to return.
   *       </p>
   *          <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either
   *          <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   * @public
   */
  MetricStat?: PredictiveScalingMetricStat | undefined;

  /**
   * <p>
   *          A human-readable label for this metric or expression. This is especially useful if
   *          this is a math expression, so that you know what the value represents.
   *       </p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>
   *          Indicates whether to return the timestamps and raw data values of this metric.
   *       </p>
   *          <p>If you use any math expressions, specify <code>true</code> for this value for only the
   *          final math expression that the metric specification is based on. You must specify
   *          <code>false</code> for <code>ReturnData</code> for all the other metrics and
   *          expressions used in the metric specification.</p>
   *          <p>If you are only retrieving metrics and not performing any math expressions, do not
   *          specify anything for <code>ReturnData</code>. This sets it to its default
   *          (<code>true</code>).</p>
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * <p>
 *          Represents a CloudWatch metric of your choosing for a predictive scaling policy.
 *       </p>
 * @public
 */
export interface PredictiveScalingCustomizedMetricSpecification {
  /**
   * <p>
   *          One or more metric data queries to provide data points for a metric specification.
   *       </p>
   * @public
   */
  MetricDataQueries: PredictiveScalingMetricDataQuery[] | undefined;
}

/**
 * <p>
 *          Describes a load metric for a predictive scaling policy.
 *       </p>
 *          <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a
 *          predictive scaling policy uses individually specified load and scaling metrics instead
 *          of a metric pair.</p>
 * @public
 */
export interface PredictiveScalingPredefinedLoadMetricSpecification {
  /**
   * <p>
   *          The metric type.
   *       </p>
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * <p>
   *          A label that uniquely identifies a target group.
   *       </p>
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * <p>
 *          Represents a metric pair for a predictive scaling policy.
 *       </p>
 * @public
 */
export interface PredictiveScalingPredefinedMetricPairSpecification {
  /**
   * <p>
   *          Indicates which metrics to use. There are two different types of metrics for each
   *          metric type: one is a load metric and one is a scaling metric.
   *       </p>
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * <p>
   *          A label that uniquely identifies a specific target group from which to determine
   *          the total and average request count.
   *       </p>
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * <p>
 *          Describes a scaling metric for a predictive scaling policy.
 *       </p>
 *          <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a
 *          predictive scaling policy uses individually specified load and scaling metrics instead
 *          of a metric pair.</p>
 * @public
 */
export interface PredictiveScalingPredefinedScalingMetricSpecification {
  /**
   * <p>
   *          The metric type.
   *       </p>
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * <p>
   *          A label that uniquely identifies a specific target group from which to determine
   *          the average request count.
   *       </p>
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * <p>
 *          This structure specifies the metrics and target utilization settings for a predictive
 *          scaling policy.
 *       </p>
 *          <p>You must specify either a metric pair, or a load metric and a scaling metric
 *          individually. Specifying a metric pair instead of individual metrics provides a simpler
 *          way to configure metrics for a scaling policy. You choose the metric pair, and the
 *          policy automatically knows the correct sum and average statistics to use for the load
 *          metric and the scaling metric.</p>
 * @public
 */
export interface PredictiveScalingMetricSpecification {
  /**
   * <p>
   *          Specifies the target utilization.
   *       </p>
   * @public
   */
  TargetValue: number | undefined;

  /**
   * <p>
   *          The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
   *       </p>
   * @public
   */
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairSpecification | undefined;

  /**
   * <p>
   *          The predefined scaling metric specification.
   *       </p>
   * @public
   */
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricSpecification | undefined;

  /**
   * <p>
   *          The predefined load metric specification.
   *       </p>
   * @public
   */
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricSpecification | undefined;

  /**
   * <p>
   *          The customized scaling metric specification.
   *       </p>
   * @public
   */
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;

  /**
   * <p>
   *          The customized load metric specification.
   *       </p>
   * @public
   */
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;

  /**
   * <p>
   *          The customized capacity metric specification.
   *       </p>
   * @public
   */
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;
}

/**
 * @public
 * @enum
 */
export const PredictiveScalingMode = {
  ForecastAndScale: "ForecastAndScale",
  ForecastOnly: "ForecastOnly",
} as const;

/**
 * @public
 */
export type PredictiveScalingMode = (typeof PredictiveScalingMode)[keyof typeof PredictiveScalingMode];

/**
 * <p>
 *          Represents a predictive scaling policy configuration.
 *       </p>
 * @public
 */
export interface PredictiveScalingPolicyConfiguration {
  /**
   * <p>
   *          This structure includes the metrics and target utilization to use for predictive scaling.
   *       </p>
   *          <p>This is an array, but we currently only support a single metric specification. That
   *          is, you can specify a target value and a single metric pair, or a target value and one
   *          scaling metric and one load metric.</p>
   * @public
   */
  MetricSpecifications: PredictiveScalingMetricSpecification[] | undefined;

  /**
   * <p>
   *          The predictive scaling mode. Defaults to <code>ForecastOnly</code> if not specified.
   *       </p>
   * @public
   */
  Mode?: PredictiveScalingMode | undefined;

  /**
   * <p>
   *          The amount of time, in seconds, that the start time can be advanced.
   *       </p>
   *          <p>The value must be less than the forecast interval duration of 3600 seconds (60
   *          minutes). Defaults to 300 seconds if not specified. </p>
   * @public
   */
  SchedulingBufferTime?: number | undefined;

  /**
   * <p>
   *          Defines the behavior that should be applied if the forecast capacity approaches or
   *          exceeds the maximum capacity. Defaults to
   *          <code>HonorMaxCapacity</code> if not specified.
   *       </p>
   * @public
   */
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior | undefined;

  /**
   * <p>
   *          The size of the capacity buffer to use when the forecast capacity is close to or
   *          exceeds the maximum capacity. The value is specified as a percentage relative to the
   *          forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer,
   *          such that if the forecast capacity is 50, and the maximum capacity is 40, then the
   *          effective maximum capacity is 55.
   *       </p>
   *          <p>Required if the <code>MaxCapacityBreachBehavior</code> property is set to
   *          <code>IncreaseMaxCapacity</code>, and cannot be used otherwise.</p>
   * @public
   */
  MaxCapacityBuffer?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricAggregationType = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
} as const;

/**
 * @public
 */
export type MetricAggregationType = (typeof MetricAggregationType)[keyof typeof MetricAggregationType];

/**
 * <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference
 *          between the value of the aggregated CloudWatch metric and the breach threshold that you've
 *          defined for the alarm. </p>
 *          <p>For the following examples, suppose that you have an alarm with a breach threshold of
 *          50:</p>
 *          <ul>
 *             <li>
 *                <p>To initiate the adjustment when the metric is greater than or equal to 50 and less
 *                than 60, specify a lower bound of <code>0</code> and an upper bound of
 *                   <code>10</code>.</p>
 *             </li>
 *             <li>
 *                <p>To initiate the adjustment when the metric is greater than 40 and less than or
 *                equal to 50, specify a lower bound of <code>-10</code> and an upper bound of
 *                   <code>0</code>.</p>
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
 * @public
 */
export interface StepAdjustment {
  /**
   * <p>The lower bound for the difference between the alarm threshold and the CloudWatch metric. If
   *          the metric value is above the breach threshold, the lower bound is inclusive (the metric
   *          must be greater than or equal to the threshold plus the lower bound). Otherwise, it's
   *          exclusive (the metric must be greater than the threshold plus the lower bound). A null
   *          value indicates negative infinity.</p>
   * @public
   */
  MetricIntervalLowerBound?: number | undefined;

  /**
   * <p>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If
   *          the metric value is above the breach threshold, the upper bound is exclusive (the metric
   *          must be less than the threshold plus the upper bound). Otherwise, it's inclusive (the
   *          metric must be less than or equal to the threshold plus the upper bound). A null value
   *          indicates positive infinity.</p>
   *          <p>The upper bound must be greater than the lower bound.</p>
   * @public
   */
  MetricIntervalUpperBound?: number | undefined;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *          adds to the current capacity while a negative number removes from the current capacity. For
   *          exact capacity, you must specify a non-negative value.</p>
   * @public
   */
  ScalingAdjustment: number | undefined;
}

/**
 * <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 * @public
 */
export interface StepScalingPolicyConfiguration {
  /**
   * <p>Specifies how the <code>ScalingAdjustment</code> value in a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepAdjustment.html">StepAdjustment</a> is interpreted (for example, an absolute number or a
   *          percentage). The valid values are <code>ChangeInCapacity</code>,
   *          <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>. </p>
   *          <p>
   *             <code>AdjustmentType</code> is required if you are adding a new step scaling policy
   *          configuration.</p>
   * @public
   */
  AdjustmentType?: AdjustmentType | undefined;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *          breach.</p>
   *          <p>At least one step adjustment is required if you are adding a new step scaling policy
   *          configuration.</p>
   * @public
   */
  StepAdjustments?: StepAdjustment[] | undefined;

  /**
   * <p>The minimum value to scale by when the adjustment type is
   *             <code>PercentChangeInCapacity</code>. For example, suppose that you create a step
   *          scaling policy to scale out an Amazon ECS service by 25 percent and you specify a
   *             <code>MinAdjustmentMagnitude</code> of 2. If the service has 4 tasks and the scaling
   *          policy is performed, 25 percent of 4 is 1. However, because you specified a
   *             <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2
   *          tasks.</p>
   * @public
   */
  MinAdjustmentMagnitude?: number | undefined;

  /**
   * <p>The amount of time, in seconds, to wait for a previous scaling activity to take effect. If
   *       not specified, the default value is 300. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown">Cooldown period</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  Cooldown?: number | undefined;

  /**
   * <p>The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>,
   *             <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the
   *          value is treated as <code>Average</code>.</p>
   * @public
   */
  MetricAggregationType?: MetricAggregationType | undefined;
}

/**
 * <p>Describes the dimension names and values associated with a metric.</p>
 * @public
 */
export interface MetricDimension {
  /**
   * <p>The name of the dimension.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Describes the dimension of a metric.</p>
 * @public
 */
export interface TargetTrackingMetricDimension {
  /**
   * <p>The name of the dimension.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Represents a specific metric.</p>
 *          <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p>
 * @public
 */
export interface TargetTrackingMetric {
  /**
   * <p>The dimensions for the metric. For the list of available dimensions, see the Amazon Web Services
   *          documentation available from the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services
   *             services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User
   *             Guide</i>. </p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your scaling policy.</p>
   * @public
   */
  Dimensions?: TargetTrackingMetricDimension[] | undefined;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The namespace of the metric. For more information, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services
   *             services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User
   *             Guide</i>.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * <p>This structure defines the CloudWatch metric to return, along with the statistic and
 *          unit.</p>
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 * @public
 */
export interface TargetTrackingMetricStat {
  /**
   * <p>The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get
   *          the exact metric name, namespace, and dimensions, inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that is
   *          returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
   * @public
   */
  Metric: TargetTrackingMetric | undefined;

  /**
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic. For a
   *          list of valid values, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>The most commonly used metric for scaling is <code>Average</code>.</p>
   * @public
   */
  Stat: string | undefined;

  /**
   * <p>The unit to use for the returned data points. For a complete list of the units that CloudWatch
   *          supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a> data
   *          type in the <i>Amazon CloudWatch API Reference</i>.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>The metric data to return. Also defines whether this call is returning data for one
 *          metric only, or whether it is performing a math expression on the values of returned metric
 *          statistics to create a new time series. A time series is a series of data points, each of
 *          which is associated with a timestamp.</p>
 *          <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the
 *             <i>Application Auto Scaling User Guide</i>.</p>
 * @public
 */
export interface TargetTrackingMetricDataQuery {
  /**
   * <p>The math expression to perform on the returned data, if this object is performing a math
   *          expression. This expression can use the <code>Id</code> of the other metrics to refer to
   *          those metrics, and can also use the <code>Id</code> of other expressions to use the result
   *          of those expressions. </p>
   *          <p>Conditional: Within each <code>TargetTrackingMetricDataQuery</code> object, you must
   *          specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A short name that identifies the object's results in the response. This name must be
   *          unique among all <code>MetricDataQuery</code> objects specified for a single scaling
   *          policy. If you are performing math expressions on this set of data, this name represents
   *          that data and can serve as a variable in the mathematical expression. The valid characters
   *          are letters, numbers, and underscores. The first character must be a lowercase letter.
   *       </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A human-readable label for this metric or expression. This is especially useful if this
   *          is a math expression, so that you know what the value represents.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>Information about the metric data to return.</p>
   *          <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either
   *             <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   * @public
   */
  MetricStat?: TargetTrackingMetricStat | undefined;

  /**
   * <p>Indicates whether to return the timestamps and raw data values of this metric. </p>
   *          <p>If you use any math expressions, specify <code>true</code> for this value for only the
   *          final math expression that the metric specification is based on. You must specify
   *             <code>false</code> for <code>ReturnData</code> for all the other metrics and expressions
   *          used in the metric specification.</p>
   *          <p>If you are only retrieving metrics and not performing any math expressions, do not
   *          specify anything for <code>ReturnData</code>. This sets it to its default
   *             (<code>true</code>).</p>
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;

/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

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
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the metric. To get the exact metric name, namespace, and dimensions, inspect
   *          the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that's returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The dimensions of the metric. </p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *          dimensions in your scaling policy.</p>
   * @public
   */
  Dimensions?: MetricDimension[] | undefined;

  /**
   * <p>The statistic of the metric.</p>
   * @public
   */
  Statistic?: MetricStatistic | undefined;

  /**
   * <p>The unit of the metric. For a complete list of the units that CloudWatch supports, see the
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a> data
   *          type in the <i>Amazon CloudWatch API Reference</i>.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>The metrics to include in the target tracking scaling policy, as a metric data query.
   *          This can include both raw metric and metric math expressions.</p>
   * @public
   */
  Metrics?: TargetTrackingMetricDataQuery[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricType = {
  ALBRequestCountPerTarget: "ALBRequestCountPerTarget",
  AppStreamAverageCapacityUtilization: "AppStreamAverageCapacityUtilization",
  CassandraReadCapacityUtilization: "CassandraReadCapacityUtilization",
  CassandraWriteCapacityUtilization: "CassandraWriteCapacityUtilization",
  ComprehendInferenceUtilization: "ComprehendInferenceUtilization",
  DynamoDBReadCapacityUtilization: "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization: "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization: "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn: "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut: "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization: "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization: "ECSServiceAverageMemoryUtilization",
  ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage:
    "ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage",
  ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage: "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage",
  ElastiCachePrimaryEngineCPUUtilization: "ElastiCachePrimaryEngineCPUUtilization",
  ElastiCacheReplicaEngineCPUUtilization: "ElastiCacheReplicaEngineCPUUtilization",
  KafkaBrokerStorageUtilization: "KafkaBrokerStorageUtilization",
  LambdaProvisionedConcurrencyUtilization: "LambdaProvisionedConcurrencyUtilization",
  NeptuneReaderAverageCPUUtilization: "NeptuneReaderAverageCPUUtilization",
  RDSReaderAverageCPUUtilization: "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections: "RDSReaderAverageDatabaseConnections",
  SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution:
    "SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution",
  SageMakerInferenceComponentInvocationsPerCopy: "SageMakerInferenceComponentInvocationsPerCopy",
  SageMakerVariantConcurrentRequestsPerModelHighResolution: "SageMakerVariantConcurrentRequestsPerModelHighResolution",
  SageMakerVariantInvocationsPerInstance: "SageMakerVariantInvocationsPerInstance",
  SageMakerVariantProvisionedConcurrencyUtilization: "SageMakerVariantProvisionedConcurrencyUtilization",
  WorkSpacesAverageUserSessionsCapacityUtilization: "WorkSpacesAverageUserSessionsCapacityUtilization",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *          Application Auto Scaling.</p>
 *          <p>For more information, <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html#predefined-metrics">Predefined metrics for target tracking scaling policies</a> in the
 *             <i>Application Auto Scaling User Guide</i>.</p>
 * @public
 */
export interface PredefinedMetricSpecification {
  /**
   * <p>The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to
   *          Spot Fleets and ECS services.</p>
   * @public
   */
  PredefinedMetricType: MetricType | undefined;

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
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
 * @public
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
   * @public
   */
  TargetValue: number | undefined;

  /**
   * <p>A predefined metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   * @public
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification | undefined;

  /**
   * <p>A customized metric. You can specify either a predefined metric or a customized
   *          metric.</p>
   * @public
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification | undefined;

  /**
   * <p>The amount of time, in seconds, to wait for a previous scale-out activity to take effect.
   *       For more information and for default values, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown">Define cooldown periods</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * <p>The amount of time, in seconds, after a scale-in activity completes before another
   *       scale-in activity can start. For more information and for default values, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown">Define cooldown periods</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * <p>Indicates whether scale in by the target tracking scaling policy is disabled. If the
   *          value is <code>true</code>, scale in is disabled and the target tracking scaling policy
   *          won't remove capacity from the scalable target. Otherwise, scale in is enabled and the
   *          target tracking scaling policy can remove capacity from the scalable target. The default
   *          value is <code>false</code>.</p>
   * @public
   */
  DisableScaleIn?: boolean | undefined;
}

/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p>
 *          <p>For more information about configuring scaling policies for a specific service, see
 *             <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services
 *             that you can use with Application Auto Scaling</a> in the
 *          <i>Application Auto Scaling User Guide</i>.</p>
 * @public
 */
export interface ScalingPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the scaling policy.</p>
   * @public
   */
  PolicyARN: string | undefined;

  /**
   * <p>The name of the scaling policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>The scaling policy type.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or
   *       Neptune.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>A step scaling policy.</p>
   * @public
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | undefined;

  /**
   * <p>A target tracking scaling policy.</p>
   * @public
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;

  /**
   * <p>
   *          The predictive scaling policy configuration.
   *       </p>
   * @public
   */
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration | undefined;

  /**
   * <p>The CloudWatch alarms associated with the scaling policy.</p>
   * @public
   */
  Alarms?: Alarm[] | undefined;

  /**
   * <p>The Unix timestamp for when the scaling policy was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesResponse {
  /**
   * <p>Information about the scaling policies.</p>
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 * @public
 */
export class FailedResourceAccessException extends __BaseException {
  readonly name: "FailedResourceAccessException" = "FailedResourceAccessException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DescribeScheduledActionsRequest {
  /**
   * <p>The names of the scheduled actions to describe.</p>
   * @public
   */
  ScheduledActionNames?: string[] | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *       If you specify a scalable dimension, you must also specify a resource ID.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * <p>The maximum number of scheduled action results. This value can be between
   *          1 and 50. The default value is 50.</p>
   *          <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results
   *          at a time, along with a <code>NextToken</code> value. To get the next set of results,
   *          include the <code>NextToken</code> value in a subsequent call. If this parameter is not
   *          used, the operation returns up to 50 results and a
   *             <code>NextToken</code> value, if applicable.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the minimum and maximum capacity for a scheduled action.</p>
 * @public
 */
export interface ScalableTargetAction {
  /**
   * <p>The minimum capacity.</p>
   *          <p>When the scheduled action runs, the resource will have at least this much capacity, but it
   *       might have more depending on other settings, such as the target utilization level of a target
   *       tracking scaling policy.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum capacity.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas may impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and
   *             quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * <p>Represents a scheduled action.</p>
 * @public
 */
export interface ScheduledAction {
  /**
   * <p>The name of the scheduled action.</p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   * @public
   */
  ScheduledActionARN: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource, or a
   *             <code>custom-resource</code>.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-using-cron-expressions.html">Schedule recurring scaling actions using cron expressions</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  Schedule: string | undefined;

  /**
   * <p>The time zone used when referring to the date and time of a scheduled action, when the
   *          scheduled action uses an at or cron expression.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * <p>The date and time that the action is scheduled to begin, in UTC.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time that the action is scheduled to end, in UTC.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. At the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   * @public
   */
  ScalableTargetAction?: ScalableTargetAction | undefined;

  /**
   * <p>The date and time that the scheduled action was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsResponse {
  /**
   * <p>Information about the scheduled actions.</p>
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastRequest {
  /**
   * <p>
   *          The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.
   *       </p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>
   *          The identifier of the resource.
   *       </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>
   *          The scalable dimension.
   *       </p>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>
   *          The inclusive start time of the time range for the forecast data to get. At most, the
   *          date and time can be one year before the current date and time
   *       </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   *          The exclusive end time of the time range for the forecast data to get. The maximum
   *          time duration between the start and end time is 30 days.
   *       </p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * <p>
 *          A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a
 *          predictive scaling policy. This structure includes the data points for that capacity
 *          forecast, along with the timestamps of those data points.
 *       </p>
 * @public
 */
export interface CapacityForecast {
  /**
   * <p>
   *          The timestamps for the data points, in UTC format.
   *       </p>
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * <p>
   *          The values of the data points.
   *       </p>
   * @public
   */
  Values: number[] | undefined;
}

/**
 * <p>
 *          A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a
 *          predictive scaling policy. This structure includes the data points for that load
 *          forecast, along with the timestamps of those data points and the metric specification.
 *       </p>
 * @public
 */
export interface LoadForecast {
  /**
   * <p>
   *          The timestamps for the data points, in UTC format.
   *       </p>
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * <p>
   *          The values of the data points.
   *       </p>
   * @public
   */
  Values: number[] | undefined;

  /**
   * <p>
   *          The metric specification for the load forecast.
   *       </p>
   * @public
   */
  MetricSpecification: PredictiveScalingMetricSpecification | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastResponse {
  /**
   * <p>
   *          The load forecast.
   *       </p>
   * @public
   */
  LoadForecast?: LoadForecast[] | undefined;

  /**
   * <p>
   *          The capacity forecast.
   *       </p>
   * @public
   */
  CapacityForecast?: CapacityForecast | undefined;

  /**
   * <p>
   *         The time the forecast was made.
   *       </p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specify the ARN of the scalable target.</p>
   *          <p>For example:
   *             <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code>
   *          </p>
   *          <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags. Each tag consists of a tag key and a tag value.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The name of the Application Auto Scaling resource. This value is an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html">Application Auto Scaling service quotas</a>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface PutScalingPolicyRequest {
  /**
   * <p>The name of the scaling policy.</p>
   *          <p>You cannot change the name of a scaling policy, but you can delete the original scaling
   *          policy and create a new scaling policy with the same settings and a different name.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource associated with the scaling policy.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>The scaling policy type. This parameter is required if you are creating a scaling
   *       policy.</p>
   *          <p>The following policy types are supported: </p>
   *          <p>
   *             <code>TargetTrackingScaling</code>—Not supported for Amazon EMR.</p>
   *          <p>
   *             <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or
   *       Neptune.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target
   *         tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * <p>A step scaling policy.</p>
   *          <p>This parameter is required if you are creating a policy and the policy type is
   *             <code>StepScaling</code>.</p>
   * @public
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | undefined;

  /**
   * <p>A target tracking scaling policy. Includes support for predefined or customized
   *          metrics.</p>
   *          <p>This parameter is required if you are creating a policy and the policy type is
   *             <code>TargetTrackingScaling</code>.</p>
   * @public
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;

  /**
   * <p>
   *          The configuration of the predictive scaling policy.
   *       </p>
   * @public
   */
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resulting scaling policy.</p>
   * @public
   */
  PolicyARN: string | undefined;

  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   * @public
   */
  Alarms?: Alarm[] | undefined;
}

/**
 * @public
 */
export interface PutScheduledActionRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-using-cron-expressions.html">Schedule recurring scaling actions using cron expressions</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>Specifies the time zone used when setting a scheduled action by using an at or cron
   *          expression. If a time zone is not provided, UTC is used by default.</p>
   *          <p>Valid values are the canonical names of the IANA time zones supported by Joda-Time (such
   *          as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href="https://www.joda.org/joda-time/timezones.html">https://www.joda.org/joda-time/timezones.html</a>.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The name of the scheduled action. This name must be unique among all other scheduled
   *          actions on the specified scalable target. </p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The identifier of the resource associated with the scheduled action.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * <p>The date and time for this scheduled action to start, in UTC.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time for the recurring schedule to end, in UTC.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The new minimum and maximum capacity. You can set both values or just one. At the
   *          scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out
   *          to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling
   *          scales in to the maximum capacity.</p>
   * @public
   */
  ScalableTargetAction?: ScalableTargetAction | undefined;
}

/**
 * @public
 */
export interface PutScheduledActionResponse {}

/**
 * @public
 */
export interface RegisterScalableTargetRequest {
  /**
   * <p>The namespace of the Amazon Web Services service that provides the resource. For a resource provided
   *          by your own application or service, use <code>custom-resource</code> instead.</p>
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * <p>The identifier of the resource that is associated with the scalable target.
   *       This string consists of the resource type and unique identifier.</p>
   *          <ul>
   *             <li>
   *                <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name
   *                and service name. Example: <code>service/my-cluster/my-service</code>.</p>
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
   *             <li>
   *                <p>SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID.
   *                Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p>
   *             </li>
   *             <li>
   *                <p>SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID.
   *                Example: <code>inference-component/my-inference-component</code>.</p>
   *             </li>
   *             <li>
   *                <p>Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID.
   *                Example: <code>workspacespool/wspool-123456</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The scalable dimension associated with the scalable target.
   *       This string consists of the service namespace, resource type, and scaling property.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ecs:service:DesiredCount</code> - The task count of an ECS service.</p>
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
   *                   <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.</p>
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
   *             <li>
   *                <p>
   *                   <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

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
   *                <p>SageMaker inference components</p>
   *             </li>
   *             <li>
   *                <p>SageMaker serverless endpoint provisioned concurrency</p>
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
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum value that you plan to scale out to. When a scaling policy is in effect,
   *          Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to
   *          changing demand. This property is required when registering a new scalable target.</p>
   *          <p>Although you can specify a large maximum capacity, note that service quotas might impose
   *          lower limits. Each service has its own default quotas for the maximum capacity of the
   *          resource. If you want to specify a higher limit, you can request an increase. For more
   *          information, consult the documentation for that service. For information about the default
   *          quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and
   *             quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>This parameter is required for services that do not support service-linked roles (such as
   *       Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable
   *       target on your behalf. </p>
   *          <p>If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which
   *       it creates if it does not yet exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html">How Application Auto Scaling works with IAM</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html">Suspend and resume scaling</a> in the <i>Application Auto Scaling User
   *          Guide</i>.</p>
   * @public
   */
  SuspendedState?: SuspendedState | undefined;

  /**
   * <p>Assigns one or more tags to the scalable target. Use this parameter to tag the scalable
   *          target when it is created. To tag an existing scalable target, use the <a>TagResource</a> operation.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are
   *          required. You cannot have more than one tag on a scalable target with the same tag
   *          key.</p>
   *          <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support
   *             for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterScalableTargetResponse {
  /**
   * <p>The ARN of the scalable target.</p>
   * @public
   */
  ScalableTargetARN?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Identifies the Application Auto Scaling scalable target that you want to apply tags to.</p>
   *          <p>For example:
   *             <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code>
   *          </p>
   *          <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services
   *          resource.</p>
   *          <p>Each tag consists of a tag key and a tag value.</p>
   *          <p>You cannot have more than one tag on an Application Auto Scaling scalable target with the same tag key.
   *          If you specify an existing tag key with a different tag value, Application Auto Scaling replaces the
   *          current tag value with the specified one.</p>
   *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-defined tag
   *             restrictions</a> in the <i>Amazon Web Services Billing User Guide</i>.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request contains too many tags. Try the request again with fewer tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The name of the Application Auto Scaling resource. This value is an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Identifies the Application Auto Scaling scalable target from which to remove tags.</p>
   *          <p>For example:
   *             <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code>
   *          </p>
   *          <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
