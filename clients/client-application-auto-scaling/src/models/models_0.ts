// smithy-typescript generated code
import type {
  AdjustmentType,
  MetricAggregationType,
  MetricStatistic,
  MetricType,
  PolicyType,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMode,
  ScalableDimension,
  ScalingActivityStatusCode,
  ServiceNamespace,
} from "./enums";

/**
 * Represents a CloudWatch alarm associated with a scaling policy.
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  AlarmARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteScalingPolicyRequest {
  /**
   * The name of the scaling policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;
}

/**
 * @public
 */
export interface DeleteScalingPolicyResponse {}

/**
 * @public
 */
export interface DeleteScheduledActionRequest {
  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The name of the scheduled action.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
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
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
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
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceIds?: string[] | undefined;

  /**
   * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.
   *
   * If this parameter is used, the operation returns up to `MaxResults` results at a time, along with a `NextToken` value. To get the next set of results, include the `NextToken` value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a `NextToken` value, if applicable.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies whether the scaling activities for a scalable target are in a suspended state.
 *
 * @public
 */
export interface SuspendedState {
  /**
   * Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.
   *
   * @public
   */
  DynamicScalingInSuspended?: boolean | undefined;

  /**
   * Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.
   *
   * @public
   */
  DynamicScalingOutSuspended?: boolean | undefined;

  /**
   * Whether scheduled scaling is suspended. Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.
   *
   * @public
   */
  ScheduledScalingSuspended?: boolean | undefined;
}

/**
 * Represents a scalable target.
 *
 * @public
 */
export interface ScalableTarget {
  /**
   * The namespace of the Amazon Web Services service that provides the resource, or a `custom-resource`.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The minimum value to scale to in response to a scale-in activity.
   *
   * @public
   */
  MinCapacity: number | undefined;

  /**
   * The maximum value to scale to in response to a scale-out activity.
   *
   * @public
   */
  MaxCapacity: number | undefined;

  /**
   * The predicted capacity of the scalable target.
   *
   * @public
   */
  PredictedCapacity?: number | undefined;

  /**
   * The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The Unix timestamp for when the scalable target was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Specifies whether the scaling activities for a scalable target are in a suspended state.
   *
   * @public
   */
  SuspendedState?: SuspendedState | undefined;

  /**
   * The ARN of the scalable target.
   *
   * @public
   */
  ScalableTargetARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalableTargetsResponse {
  /**
   * The scalable targets that match the request parameters.
   *
   * @public
   */
  ScalableTargets?: ScalableTarget[] | undefined;

  /**
   * The token required to get the next set of results. This value is `null` if there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalingActivitiesRequest {
  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.
   *
   * If this parameter is used, the operation returns up to `MaxResults` results at a time, along with a `NextToken` value. To get the next set of results, include the `NextToken` value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a `NextToken` value, if applicable.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies whether to include activities that aren't scaled (*not scaled activities*) in the response. Not scaled activities are activities that aren't completed or started for various reasons, such as preventing infinite scaling loops. For help interpreting the not scaled reason details in the response, see [Scaling activities for Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html).
   *
   * @public
   */
  IncludeNotScaledActivities?: boolean | undefined;
}

/**
 * Describes the reason for an activity that isn't scaled (*not scaled activity*), in machine-readable format. For help interpreting the not scaled reason details, see [Scaling activities for Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface NotScaledReason {
  /**
   * A code that represents the reason for not scaling.
   *
   * Valid values:
   *
   * - AutoScalingAnticipatedFlapping
   * - TargetServicePutResourceAsUnscalable
   * - AlreadyAtMaxCapacity
   * - AlreadyAtMinCapacity
   * - AlreadyAtDesiredCapacity
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The maximum capacity.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The minimum capacity.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The current capacity.
   *
   * @public
   */
  CurrentCapacity?: number | undefined;
}

/**
 * Represents a scaling activity.
 *
 * @public
 */
export interface ScalingActivity {
  /**
   * The unique identifier of the scaling activity.
   *
   * @public
   */
  ActivityId: string | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource, or a `custom-resource`.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * A simple description of what action the scaling activity intends to accomplish.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A simple description of what caused the scaling activity to happen.
   *
   * @public
   */
  Cause: string | undefined;

  /**
   * The Unix timestamp for when the scaling activity began.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The Unix timestamp for when the scaling activity ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Indicates the status of the scaling activity.
   *
   * @public
   */
  StatusCode: ScalingActivityStatusCode | undefined;

  /**
   * A simple message about the current status of the scaling activity.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The details about the scaling activity.
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * Machine-readable data that describes the reason for a not scaled activity. Only available when [DescribeScalingActivities](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html) includes not scaled activities.
   *
   * @public
   */
  NotScaledReasons?: NotScaledReason[] | undefined;
}

/**
 * @public
 */
export interface DescribeScalingActivitiesResponse {
  /**
   * A list of scaling activity objects.
   *
   * @public
   */
  ScalingActivities?: ScalingActivity[] | undefined;

  /**
   * The token required to get the next set of results. This value is `null` if there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesRequest {
  /**
   * The names of the scaling policies to describe.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * The maximum number of scalable targets. This value can be between 1 and 10. The default value is 10.
   *
   * If this parameter is used, the operation returns up to `MaxResults` results at a time, along with a `NextToken` value. To get the next set of results, include the `NextToken` value in a subsequent call. If this parameter is not used, the operation returns up to 10 results and a `NextToken` value, if applicable.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the dimension of a metric.
 *
 * @public
 */
export interface PredictiveScalingMetricDimension {
  /**
   * The name of the dimension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Describes the scaling metric.
 *
 * @public
 */
export interface PredictiveScalingMetric {
  /**
   * Describes the dimensions of the metric.
   *
   * @public
   */
  Dimensions?: PredictiveScalingMetricDimension[] | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * This structure defines the CloudWatch metric to return, along with the statistic and unit.
 *
 * @public
 */
export interface PredictiveScalingMetricStat {
  /**
   * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * @public
   */
  Metric: PredictiveScalingMetric | undefined;

  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
   *
   * The most commonly used metrics for predictive scaling are `Average` and `Sum`.
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 *
 * @public
 */
export interface PredictiveScalingMetricDataQuery {
  /**
   * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * Information about the metric data to return.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  MetricStat?: PredictiveScalingMetricStat | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   *
   * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
   *
   * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
   *
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * Represents a CloudWatch metric of your choosing for a predictive scaling policy.
 *
 * @public
 */
export interface PredictiveScalingCustomizedMetricSpecification {
  /**
   * One or more metric data queries to provide data points for a metric specification.
   *
   * @public
   */
  MetricDataQueries: PredictiveScalingMetricDataQuery[] | undefined;
}

/**
 * Describes a load metric for a predictive scaling policy.
 *
 * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
 *
 * The following predefined metrics are available for predictive scaling:
 *
 * - `ECSServiceAverageCPUUtilization`
 * - `ECSServiceAverageMemoryUtilization`
 * - `ECSServiceCPUUtilization`
 * - `ECSServiceMemoryUtilization`
 * - `ECSServiceTotalCPUUtilization`
 * - `ECSServiceTotalMemoryUtilization`
 * - `ALBRequestCount`
 * - `ALBRequestCountPerTarget`
 * - `TotalALBRequestCount`
 *
 * @public
 */
export interface PredictiveScalingPredefinedLoadMetricSpecification {
  /**
   * The metric type.
   *
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * A label that uniquely identifies a target group.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Represents a metric pair for a predictive scaling policy.
 *
 * The following predefined metrics are available for predictive scaling:
 *
 * - `ECSServiceAverageCPUUtilization`
 * - `ECSServiceAverageMemoryUtilization`
 * - `ECSServiceCPUUtilization`
 * - `ECSServiceMemoryUtilization`
 * - `ECSServiceTotalCPUUtilization`
 * - `ECSServiceTotalMemoryUtilization`
 * - `ALBRequestCount`
 * - `ALBRequestCountPerTarget`
 * - `TotalALBRequestCount`
 *
 * @public
 */
export interface PredictiveScalingPredefinedMetricPairSpecification {
  /**
   * Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric.
   *
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * A label that uniquely identifies a specific target group from which to determine the total and average request count.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Describes a scaling metric for a predictive scaling policy.
 *
 * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
 *
 * The following predefined metrics are available for predictive scaling:
 *
 * - `ECSServiceAverageCPUUtilization`
 * - `ECSServiceAverageMemoryUtilization`
 * - `ECSServiceCPUUtilization`
 * - `ECSServiceMemoryUtilization`
 * - `ECSServiceTotalCPUUtilization`
 * - `ECSServiceTotalMemoryUtilization`
 * - `ALBRequestCount`
 * - `ALBRequestCountPerTarget`
 * - `TotalALBRequestCount`
 *
 * @public
 */
export interface PredictiveScalingPredefinedScalingMetricSpecification {
  /**
   * The metric type.
   *
   * @public
   */
  PredefinedMetricType: string | undefined;

  /**
   * A label that uniquely identifies a specific target group from which to determine the average request count.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * This structure specifies the metrics and target utilization settings for a predictive scaling policy.
 *
 * You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.
 *
 * @public
 */
export interface PredictiveScalingMetricSpecification {
  /**
   * Specifies the target utilization.
   *
   * @public
   */
  TargetValue: number | undefined;

  /**
   * The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
   *
   * @public
   */
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairSpecification | undefined;

  /**
   * The predefined scaling metric specification.
   *
   * @public
   */
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricSpecification | undefined;

  /**
   * The predefined load metric specification.
   *
   * @public
   */
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricSpecification | undefined;

  /**
   * The customized scaling metric specification.
   *
   * @public
   */
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;

  /**
   * The customized load metric specification.
   *
   * @public
   */
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;

  /**
   * The customized capacity metric specification.
   *
   * @public
   */
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedMetricSpecification | undefined;
}

/**
 * Represents a predictive scaling policy configuration. Predictive scaling is supported on Amazon ECS services.
 *
 * @public
 */
export interface PredictiveScalingPolicyConfiguration {
  /**
   * This structure includes the metrics and target utilization to use for predictive scaling.
   *
   * This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
   *
   * @public
   */
  MetricSpecifications: PredictiveScalingMetricSpecification[] | undefined;

  /**
   * The predictive scaling mode. Defaults to `ForecastOnly` if not specified.
   *
   * @public
   */
  Mode?: PredictiveScalingMode | undefined;

  /**
   * The amount of time, in seconds, that the start time can be advanced.
   *
   * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
   *
   * @public
   */
  SchedulingBufferTime?: number | undefined;

  /**
   * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to `HonorMaxCapacity` if not specified.
   *
   * @public
   */
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior | undefined;

  /**
   * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
   *
   * Required if the `MaxCapacityBreachBehavior` property is set to `IncreaseMaxCapacity`, and cannot be used otherwise.
   *
   * @public
   */
  MaxCapacityBuffer?: number | undefined;
}

/**
 * Represents a step adjustment for a [StepScalingPolicyConfiguration](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html). Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm.
 *
 * For the following examples, suppose that you have an alarm with a breach threshold of 50:
 *
 * - To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of `0` and an upper bound of `10`.
 * - To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of `-10` and an upper bound of `0`.
 *
 * There are a few rules for the step adjustments for your step policy:
 *
 * - The ranges of your step adjustments can't overlap or have a gap.
 * - At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.
 * - At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.
 * - The upper and lower bound can't be null in the same step adjustment.
 *
 * @public
 */
export interface StepAdjustment {
  /**
   * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it's exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
   *
   * @public
   */
  MetricIntervalLowerBound?: number | undefined;

  /**
   * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it's inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
   *
   * The upper bound must be greater than the lower bound.
   *
   * @public
   */
  MetricIntervalUpperBound?: number | undefined;

  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value.
   *
   * @public
   */
  ScalingAdjustment: number | undefined;
}

/**
 * Represents a step scaling policy configuration to use with Application Auto Scaling.
 *
 * For more information, see [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface StepScalingPolicyConfiguration {
  /**
   * Specifies how the `ScalingAdjustment` value in a [StepAdjustment](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepAdjustment.html) is interpreted (for example, an absolute number or a percentage). The valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
   *
   * `AdjustmentType` is required if you are adding a new step scaling policy configuration.
   *
   * @public
   */
  AdjustmentType?: AdjustmentType | undefined;

  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   *
   * At least one step adjustment is required if you are adding a new step scaling policy configuration.
   *
   * @public
   */
  StepAdjustments?: StepAdjustment[] | undefined;

  /**
   * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Application Auto Scaling scales out the service by 2 tasks.
   *
   * @public
   */
  MinAdjustmentMagnitude?: number | undefined;

  /**
   * The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see [Cooldown period](https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  Cooldown?: number | undefined;

  /**
   * The aggregation type for the CloudWatch metrics. Valid values are `Minimum`, `Maximum`, and `Average`. If the aggregation type is null, the value is treated as `Average`.
   *
   * @public
   */
  MetricAggregationType?: MetricAggregationType | undefined;
}

/**
 * Describes the dimension names and values associated with a metric.
 *
 * @public
 */
export interface MetricDimension {
  /**
   * The name of the dimension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Describes the dimension of a metric.
 *
 * @public
 */
export interface TargetTrackingMetricDimension {
  /**
   * The name of the dimension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Represents a specific metric.
 *
 * Metric is a property of the TargetTrackingMetricStat object.
 *
 * @public
 */
export interface TargetTrackingMetric {
  /**
   * The dimensions for the metric. For the list of available dimensions, see the Amazon Web Services documentation available from the table in [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * @public
   */
  Dimensions?: TargetTrackingMetricDimension[] | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric. For more information, see the table in [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * This structure defines the CloudWatch metric to return, along with the statistic and unit.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface TargetTrackingMetricStat {
  /**
   * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * @public
   */
  Metric: TargetTrackingMetric | undefined;

  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
   *
   * The most commonly used metric for scaling is `Average`.
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 *
 * For more information and examples, see [Create a target tracking scaling policy for Application Auto Scaling using metric math](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface TargetTrackingMetricDataQuery {
  /**
   * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
   *
   * Conditional: Within each `TargetTrackingMetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Information about the metric data to return.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  MetricStat?: TargetTrackingMetricStat | undefined;

  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   *
   * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
   *
   * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
   *
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.
 *
 * For information about the available metrics for a service, see [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
 *
 * To create your customized metric specification:
 *
 * - Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see [Publish custom metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the *Amazon CloudWatch User Guide*.
 * - Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that's returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The dimensions of the metric.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * @public
   */
  Dimensions?: MetricDimension[] | undefined;

  /**
   * The statistic of the metric.
   *
   * @public
   */
  Statistic?: MetricStatistic | undefined;

  /**
   * The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
   *
   * @public
   */
  Metrics?: TargetTrackingMetricDataQuery[] | undefined;
}

/**
 * Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.
 *
 * For more information, [Predefined metrics for target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html#predefined-metrics) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface PredefinedMetricSpecification {
  /**
   * The metric type. The following are notes about specific metric types:
   *
   * - `ALBRequestCountPerTarget` - This metric type applies only to Spot Fleets and ECS services.
   * - `ECSServiceAverageCPUUtilizationHighResolution` - The high-resolution version of `ECSServiceAverageCPUUtilization` that uses 20-second CloudWatch metrics. Use this metric for target tracking scaling policies that evaluate metrics every 20 seconds. You must enable high-resolution metrics in Amazon ECS before creating a scaling policy with this metric type.
   * - `ECSServiceAverageMemoryUtilizationHighResolution` - The high-resolution version of `ECSServiceAverageMemoryUtilization` that uses 20-second CloudWatch metrics. Use this metric for target tracking scaling policies that evaluate metrics every 20 seconds. You must enable high-resolution metrics in Amazon ECS before creating a scaling policy with this metric type.
   *
   * @public
   */
  PredefinedMetricType: MetricType | undefined;

  /**
   * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is `ALBRequestCountPerTarget` and there is a target group attached to the Spot Fleet or ECS service.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   *
   * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
   * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
   *
   * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
 *
 * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
   *
   * > **Note:** If the scaling policy specifies the `ALBRequestCountPerTarget` predefined metric, specify the target utilization as the optimal average request count per target during any one-minute interval.
   *
   * @public
   */
  TargetValue: number | undefined;

  /**
   * A predefined metric. You can specify either a predefined metric or a customized metric.
   *
   * @public
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification | undefined;

  /**
   * A customized metric. You can specify either a predefined metric or a customized metric.
   *
   * @public
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification | undefined;

  /**
   * The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is `true`, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is `false`.
   *
   * @public
   */
  DisableScaleIn?: boolean | undefined;
}

/**
 * Represents a scaling policy to use with Application Auto Scaling.
 *
 * For more information about configuring scaling policies for a specific service, see [Amazon Web Services services that you can use with Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html) in the *Application Auto Scaling User Guide*.
 *
 * @public
 */
export interface ScalingPolicy {
  /**
   * The Amazon Resource Name (ARN) of the scaling policy.
   *
   * @public
   */
  PolicyARN: string | undefined;

  /**
   * The name of the scaling policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource, or a `custom-resource`.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The scaling policy type.
   *
   * The following policy types are supported:
   *
   * `TargetTrackingScaling`—Not supported for Amazon EMR
   *
   * `StepScaling`—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
   *
   * `PredictiveScaling`—Only supported for Amazon ECS
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * A step scaling policy.
   *
   * @public
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | undefined;

  /**
   * A target tracking scaling policy.
   *
   * @public
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;

  /**
   * The predictive scaling policy configuration.
   *
   * @public
   */
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration | undefined;

  /**
   * The CloudWatch alarms associated with the scaling policy.
   *
   * @public
   */
  Alarms?: Alarm[] | undefined;

  /**
   * The Unix timestamp for when the scaling policy was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesResponse {
  /**
   * Information about the scaling policies.
   *
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;

  /**
   * The token required to get the next set of results. This value is `null` if there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsRequest {
  /**
   * The names of the scheduled actions to describe.
   *
   * @public
   */
  ScheduledActionNames?: string[] | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * The maximum number of scheduled action results. This value can be between 1 and 50. The default value is 50.
   *
   * If this parameter is used, the operation returns up to `MaxResults` results at a time, along with a `NextToken` value. To get the next set of results, include the `NextToken` value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a `NextToken` value, if applicable.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the minimum and maximum capacity for a scheduled action.
 *
 * @public
 */
export interface ScalableTargetAction {
  /**
   * The minimum capacity.
   *
   * When the scheduled action runs, the resource will have at least this much capacity, but it might have more depending on other settings, such as the target utilization level of a target tracking scaling policy.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum capacity.
   *
   * Although you can specify a large maximum capacity, note that service quotas may impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see [Service endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * Represents a scheduled action.
 *
 * @public
 */
export interface ScheduledAction {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scheduled action.
   *
   * @public
   */
  ScheduledActionARN: string | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource, or a `custom-resource`.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The schedule for this action. The following formats are supported:
   *
   * - At expressions - "`at(yyyy-mm-ddThh:mm:ss)`"
   * - Rate expressions - "`rate(value unit)`"
   * - Cron expressions - "`cron(fields)`"
   *
   * At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
   *
   * At and cron expressions use Universal Coordinated Time (UTC) by default.
   *
   * The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
   *
   * For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days`.
   *
   * For more information, see [Schedule recurring scaling actions using cron expressions](https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-using-cron-expressions.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  Schedule: string | undefined;

  /**
   * The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension?: ScalableDimension | undefined;

  /**
   * The date and time that the action is scheduled to begin, in UTC.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time that the action is scheduled to end, in UTC.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
   *
   * @public
   */
  ScalableTargetAction?: ScalableTargetAction | undefined;

  /**
   * The date and time that the scheduled action was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsResponse {
  /**
   * Information about the scheduled actions.
   *
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;

  /**
   * The token required to get the next set of results. This value is `null` if there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastRequest {
  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * A `GetPredictiveScalingForecast` call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.
 *
 * @public
 */
export interface CapacityForecast {
  /**
   * The timestamps for the data points, in UTC format.
   *
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * The values of the data points.
   *
   * @public
   */
  Values: number[] | undefined;
}

/**
 * A `GetPredictiveScalingForecast` call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.
 *
 * @public
 */
export interface LoadForecast {
  /**
   * The timestamps for the data points, in UTC format.
   *
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * The values of the data points.
   *
   * @public
   */
  Values: number[] | undefined;

  /**
   * The metric specification for the load forecast.
   *
   * @public
   */
  MetricSpecification: PredictiveScalingMetricSpecification | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastResponse {
  /**
   * The load forecast.
   *
   * @public
   */
  LoadForecast?: LoadForecast[] | undefined;

  /**
   * The capacity forecast.
   *
   * @public
   */
  CapacityForecast?: CapacityForecast | undefined;

  /**
   * The time the forecast was made.
   *
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Specify the ARN of the scalable target.
   *
   * For example: `arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123`
   *
   * To get the ARN for a scalable target, use DescribeScalableTargets.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags. Each tag consists of a tag key and a tag value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyRequest {
  /**
   * The name of the scaling policy.
   *
   * You cannot change the name of a scaling policy, but you can delete the original scaling policy and create a new scaling policy with the same settings and a different name.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The scaling policy type. This parameter is required if you are creating a scaling policy.
   *
   * The following policy types are supported:
   *
   * `TargetTrackingScaling`—Not supported for Amazon EMR.
   *
   * `StepScaling`—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
   *
   * `PredictiveScaling`—Only supported for Amazon ECS.
   *
   * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html), [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html), and [Predictive scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/aas-create-predictive-scaling-policy.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * A step scaling policy.
   *
   * This parameter is required if you are creating a policy and the policy type is `StepScaling`.
   *
   * @public
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | undefined;

  /**
   * A target tracking scaling policy. Includes support for predefined or customized metrics.
   *
   * This parameter is required if you are creating a policy and the policy type is `TargetTrackingScaling`.
   *
   * @public
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;

  /**
   * The configuration of the predictive scaling policy.
   *
   * @public
   */
  PredictiveScalingPolicyConfiguration?: PredictiveScalingPolicyConfiguration | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the resulting scaling policy.
   *
   * @public
   */
  PolicyARN: string | undefined;

  /**
   * The CloudWatch alarms created for the target tracking scaling policy.
   *
   * @public
   */
  Alarms?: Alarm[] | undefined;
}

/**
 * @public
 */
export interface PutScheduledActionRequest {
  /**
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The schedule for this action. The following formats are supported:
   *
   * - At expressions - "`at(yyyy-mm-ddThh:mm:ss)`"
   * - Rate expressions - "`rate(value unit)`"
   * - Cron expressions - "`cron(fields)`"
   *
   * At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
   *
   * At and cron expressions use Universal Coordinated Time (UTC) by default.
   *
   * The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
   *
   * For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days`.
   *
   * For more information, see [Schedule recurring scaling actions using cron expressions](https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-using-cron-expressions.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * Specifies the time zone used when setting a scheduled action by using an at or cron expression. If a time zone is not provided, UTC is used by default.
   *
   * Valid values are the canonical names of the IANA time zones supported by Joda-Time (such as `Etc/GMT+9` or `Pacific/Tahiti`). For more information, see [https://www.joda.org/joda-time/timezones.html](https://www.joda.org/joda-time/timezones.html).
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The date and time for this scheduled action to start, in UTC.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time for the recurring schedule to end, in UTC.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
   *
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
   * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use `custom-resource` instead.
   *
   * @public
   */
  ServiceNamespace: ServiceNamespace | undefined;

  /**
   * The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier.
   *
   * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
   * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
   * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
   * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
   * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
   * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
   * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
   * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://github.com/aws/aws-auto-scaling-custom-resource).
   * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
   * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
   * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
   * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
   * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
   * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
   * - Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
   * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
   * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
   * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
   * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
   *
   * - `ecs:service:DesiredCount` - The task count of an ECS service.
   * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
   * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
   * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
   * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
   * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
   * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
   * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
   * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
   * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
   * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
   * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
   * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
   * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
   * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
   * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
   * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
   * - `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
   * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
   * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
   * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
   * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
   * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
   * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  ScalableDimension: ScalableDimension | undefined;

  /**
   * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand. This property is required when registering a new scalable target.
   *
   * For the following resources, the minimum value allowed is 0.
   *
   * - AppStream 2.0 fleets
   * - Aurora DB clusters
   * - ECS services
   * - EMR clusters
   * - Lambda provisioned concurrency
   * - SageMaker endpoint variants
   * - SageMaker inference components
   * - SageMaker serverless endpoint provisioned concurrency
   * - Spot Fleets
   * - custom resources
   *
   * It's strongly recommended that you specify a value greater than 0. A value greater than 0 means that data points are continuously reported to CloudWatch that scaling policies can use to scale on a metric like average CPU utilization.
   *
   * For all other resources, the minimum allowed value depends on the type of resource that you are using. If you provide a value that is lower than what a resource can accept, an error occurs. In which case, the error message will provide the minimum value that the resource can accept.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand. This property is required when registering a new scalable target.
   *
   * Although you can specify a large maximum capacity, note that service quotas might impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see [Service endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.
   *
   * If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
   *
   * **Suspension Outcomes**
   *
   * - For `DynamicScalingInSuspended`, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
   * - For `DynamicScalingOutSuspended`, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
   * - For `ScheduledScalingSuspended`, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.
   *
   * For more information, see [Suspend and resume scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  SuspendedState?: SuspendedState | undefined;

  /**
   * Assigns one or more tags to the scalable target. Use this parameter to tag the scalable target when it is created. To tag an existing scalable target, use the TagResource operation.
   *
   * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required. You cannot have more than one tag on a scalable target with the same tag key.
   *
   * Use tags to control access to a scalable target. For more information, see [Tagging support for Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterScalableTargetResponse {
  /**
   * The ARN of the scalable target.
   *
   * @public
   */
  ScalableTargetARN?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Identifies the Application Auto Scaling scalable target that you want to apply tags to.
   *
   * For example: `arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123`
   *
   * To get the ARN for a scalable target, use DescribeScalableTargets.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   *
   * Each tag consists of a tag key and a tag value.
   *
   * You cannot have more than one tag on an Application Auto Scaling scalable target with the same tag key. If you specify an existing tag key with a different tag value, Application Auto Scaling replaces the current tag value with the specified one.
   *
   * For information about the rules that apply to tag keys and tag values, see [User-defined tag restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html) in the *Amazon Web Services Billing User Guide*.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Identifies the Application Auto Scaling scalable target from which to remove tags.
   *
   * For example: `arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123`
   *
   * To get the ARN for a scalable target, use DescribeScalableTargets.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * One or more tag keys. Specify only the tag keys, not the tag values.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
