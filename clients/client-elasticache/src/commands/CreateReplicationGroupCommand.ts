// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateReplicationGroupMessage, CreateReplicationGroupResult } from "../models/models_0";
import { de_CreateReplicationGroupCommand, se_CreateReplicationGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationGroupCommand}.
 */
export interface CreateReplicationGroupCommandInput extends CreateReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationGroupCommand}.
 */
export interface CreateReplicationGroupCommandOutput extends CreateReplicationGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication
 *             group.</p>
 *          <p>This API can be used to create a standalone regional replication group or a secondary
 *             replication group associated with a Global datastore.</p>
 *          <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where
 *             one of the clusters is a read/write primary and the others are read-only replicas.
 *             Writes to the primary are asynchronously propagated to the replicas.</p>
 *          <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI:
 *             node groups). Each shard has a primary node and up to 5 read-only replica nodes. The
 *             configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which
 *             is the maximum number or replicas allowed. </p>
 *          <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis
 *             engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node
 *             cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500
 *             shards (single primary and no replicas). Make sure there are enough available IP
 *             addresses to accommodate the increase. Common pitfalls include the subnets in the subnet
 *             group have too small a CIDR range or the subnets are shared and heavily used by other
 *             clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet
 *                 Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p>
 *          <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and
 *             choose the limit type <b>Nodes per cluster per instance
 *                 type</b>. </p>
 *          <p>When a Redis (cluster mode disabled) replication group has been successfully created,
 *             you can add one or more read replicas to it, up to a total of 5 read replicas. If you
 *             need to increase or decrease the number of node groups (console: shards), you can avail
 *             yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling
 *                 ElastiCache for Redis Clusters</a> in the <i>ElastiCache User
 *                 Guide</i>.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateReplicationGroupMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   ReplicationGroupDescription: "STRING_VALUE", // required
 *   GlobalReplicationGroupId: "STRING_VALUE",
 *   PrimaryClusterId: "STRING_VALUE",
 *   AutomaticFailoverEnabled: true || false,
 *   MultiAZEnabled: true || false,
 *   NumCacheClusters: Number("int"),
 *   PreferredCacheClusterAZs: [ // AvailabilityZonesList
 *     "STRING_VALUE",
 *   ],
 *   NumNodeGroups: Number("int"),
 *   ReplicasPerNodeGroup: Number("int"),
 *   NodeGroupConfiguration: [ // NodeGroupConfigurationList
 *     { // NodeGroupConfiguration
 *       NodeGroupId: "STRING_VALUE",
 *       Slots: "STRING_VALUE",
 *       ReplicaCount: Number("int"),
 *       PrimaryAvailabilityZone: "STRING_VALUE",
 *       ReplicaAvailabilityZones: [
 *         "STRING_VALUE",
 *       ],
 *       PrimaryOutpostArn: "STRING_VALUE",
 *       ReplicaOutpostArns: [ // OutpostArnsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   CacheNodeType: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   CacheParameterGroupName: "STRING_VALUE",
 *   CacheSubnetGroupName: "STRING_VALUE",
 *   CacheSecurityGroupNames: [ // CacheSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   NotificationTopicArn: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   SnapshotRetentionLimit: Number("int"),
 *   SnapshotWindow: "STRING_VALUE",
 *   AuthToken: "STRING_VALUE",
 *   TransitEncryptionEnabled: true || false,
 *   AtRestEncryptionEnabled: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   UserGroupIds: [ // UserGroupIdListInput
 *     "STRING_VALUE",
 *   ],
 *   LogDeliveryConfigurations: [ // LogDeliveryConfigurationRequestList
 *     { // LogDeliveryConfigurationRequest
 *       LogType: "slow-log" || "engine-log",
 *       DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 *       DestinationDetails: { // DestinationDetails
 *         CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 *           LogGroup: "STRING_VALUE",
 *         },
 *         KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 *           DeliveryStream: "STRING_VALUE",
 *         },
 *       },
 *       LogFormat: "text" || "json",
 *       Enabled: true || false,
 *     },
 *   ],
 *   DataTieringEnabled: true || false,
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 *   IpDiscovery: "ipv4" || "ipv6",
 *   TransitEncryptionMode: "preferred" || "required",
 *   ClusterMode: "enabled" || "disabled" || "compatible",
 * };
 * const command = new CreateReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationGroupResult
 * //   ReplicationGroup: { // ReplicationGroup
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     GlobalReplicationGroupInfo: { // GlobalReplicationGroupInfo
 * //       GlobalReplicationGroupId: "STRING_VALUE",
 * //       GlobalReplicationGroupMemberRole: "STRING_VALUE",
 * //     },
 * //     Status: "STRING_VALUE",
 * //     PendingModifiedValues: { // ReplicationGroupPendingModifiedValues
 * //       PrimaryClusterId: "STRING_VALUE",
 * //       AutomaticFailoverStatus: "enabled" || "disabled",
 * //       Resharding: { // ReshardingStatus
 * //         SlotMigration: { // SlotMigration
 * //           ProgressPercentage: Number("double"),
 * //         },
 * //       },
 * //       AuthTokenStatus: "SETTING" || "ROTATING",
 * //       UserGroups: { // UserGroupsUpdateStatus
 * //         UserGroupIdsToAdd: [ // UserGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         UserGroupIdsToRemove: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //         { // PendingLogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: { // DestinationDetails
 * //             CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //         },
 * //       ],
 * //       TransitEncryptionEnabled: true || false,
 * //       TransitEncryptionMode: "preferred" || "required",
 * //       ClusterMode: "enabled" || "disabled" || "compatible",
 * //     },
 * //     MemberClusters: [ // ClusterIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     NodeGroups: [ // NodeGroupList
 * //       { // NodeGroup
 * //         NodeGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         PrimaryEndpoint: { // Endpoint
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         ReaderEndpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         Slots: "STRING_VALUE",
 * //         NodeGroupMembers: [ // NodeGroupMemberList
 * //           { // NodeGroupMember
 * //             CacheClusterId: "STRING_VALUE",
 * //             CacheNodeId: "STRING_VALUE",
 * //             ReadEndpoint: {
 * //               Address: "STRING_VALUE",
 * //               Port: Number("int"),
 * //             },
 * //             PreferredAvailabilityZone: "STRING_VALUE",
 * //             PreferredOutpostArn: "STRING_VALUE",
 * //             CurrentRole: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     SnapshottingClusterId: "STRING_VALUE",
 * //     AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //     MultiAZ: "enabled" || "disabled",
 * //     ConfigurationEndpoint: "<Endpoint>",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     ClusterEnabled: true || false,
 * //     CacheNodeType: "STRING_VALUE",
 * //     AuthTokenEnabled: true || false,
 * //     AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     MemberClustersOutpostArns: [ // ReplicationGroupOutpostArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     UserGroupIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //       { // LogDeliveryConfiguration
 * //         LogType: "slow-log" || "engine-log",
 * //         DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //         DestinationDetails: {
 * //           CloudWatchLogsDetails: {
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           KinesisFirehoseDetails: {
 * //             DeliveryStream: "STRING_VALUE",
 * //           },
 * //         },
 * //         LogFormat: "text" || "json",
 * //         Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReplicationGroupCreateTime: new Date("TIMESTAMP"),
 * //     DataTiering: "enabled" || "disabled",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     IpDiscovery: "ipv4" || "ipv6",
 * //     TransitEncryptionMode: "preferred" || "required",
 * //     ClusterMode: "enabled" || "disabled" || "compatible",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReplicationGroupCommandInput - {@link CreateReplicationGroupCommandInput}
 * @returns {@link CreateReplicationGroupCommandOutput}
 * @see {@link CreateReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of clusters
 *             per customer.</p>
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone. For
 *             more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeGroupsPerReplicationGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum allowed number of
 *             node groups (shards) in a single replication group. The default maximum is 90</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes in a single cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes per customer.</p>
 *
 * @throws {@link ReplicationGroupAlreadyExistsFault} (client fault)
 *  <p>The specified replication group already exists.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CreateCacheReplicationGroup
 * ```javascript
 * // Creates a Redis replication group with 3 nodes.
 * const input = {
 *   "AutomaticFailoverEnabled": true,
 *   "CacheNodeType": "cache.m3.medium",
 *   "Engine": "redis",
 *   "EngineVersion": "2.8.24",
 *   "NumCacheClusters": 3,
 *   "ReplicationGroupDescription": "A Redis replication group.",
 *   "ReplicationGroupId": "my-redis-rg",
 *   "SnapshotRetentionLimit": 30
 * };
 * const command = new CreateReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationGroup": {
 *     "AutomaticFailover": "enabling",
 *     "Description": "A Redis replication group.",
 *     "MemberClusters": [
 *       "my-redis-rg-001",
 *       "my-redis-rg-002",
 *       "my-redis-rg-003"
 *     ],
 *     "PendingModifiedValues": {},
 *     "ReplicationGroupId": "my-redis-rg",
 *     "SnapshottingClusterId": "my-redis-rg-002",
 *     "Status": "creating"
 *   }
 * }
 * *\/
 * // example id: createcachereplicationgroup-1474998730655
 * ```
 *
 * @example CreateReplicationGroup
 * ```javascript
 * // Creates a Redis (cluster mode enabled) replication group with two shards. One shard has one read replica node and the other shard has two read replicas.
 * const input = {
 *   "AutoMinorVersionUpgrade": true,
 *   "CacheNodeType": "cache.m3.medium",
 *   "CacheParameterGroupName": "default.redis3.2.cluster.on",
 *   "Engine": "redis",
 *   "EngineVersion": "3.2.4",
 *   "NodeGroupConfiguration": [
 *     {
 *       "PrimaryAvailabilityZone": "us-east-1c",
 *       "ReplicaAvailabilityZones": [
 *         "us-east-1b"
 *       ],
 *       "ReplicaCount": 1,
 *       "Slots": "0-8999"
 *     },
 *     {
 *       "PrimaryAvailabilityZone": "us-east-1a",
 *       "ReplicaAvailabilityZones": [
 *         "us-east-1a",
 *         "us-east-1c"
 *       ],
 *       "ReplicaCount": 2,
 *       "Slots": "9000-16383"
 *     }
 *   ],
 *   "NumNodeGroups": 2,
 *   "ReplicationGroupDescription": "A multi-sharded replication group",
 *   "ReplicationGroupId": "clustered-redis-rg",
 *   "SnapshotRetentionLimit": 8
 * };
 * const command = new CreateReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationGroup": {
 *     "AutomaticFailover": "enabled",
 *     "Description": "Sharded replication group",
 *     "MemberClusters": [
 *       "rc-rg3-0001-001",
 *       "rc-rg3-0001-002",
 *       "rc-rg3-0002-001",
 *       "rc-rg3-0002-002",
 *       "rc-rg3-0002-003"
 *     ],
 *     "PendingModifiedValues": {},
 *     "ReplicationGroupId": "clustered-redis-rg",
 *     "SnapshotRetentionLimit": 8,
 *     "SnapshotWindow": "05:30-06:30",
 *     "Status": "creating"
 *   }
 * }
 * *\/
 * // example id: createreplicationgroup-1483657035585
 * ```
 *
 */
export class CreateReplicationGroupCommand extends $Command<
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateReplicationGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationGroupCommandInput, CreateReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CreateReplicationGroup",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationGroupCommandOutput> {
    return de_CreateReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
