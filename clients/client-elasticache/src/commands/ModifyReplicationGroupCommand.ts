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
import { ModifyReplicationGroupMessage, ModifyReplicationGroupResult } from "../models/models_0";
import { de_ModifyReplicationGroupCommand, se_ModifyReplicationGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationGroupCommand}.
 */
export interface ModifyReplicationGroupCommandInput extends ModifyReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationGroupCommand}.
 */
export interface ModifyReplicationGroupCommandOutput extends ModifyReplicationGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a replication group.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in
 *                     the ElastiCache User Guide</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API
 *                     Reference</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyReplicationGroupMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   ReplicationGroupDescription: "STRING_VALUE",
 *   PrimaryClusterId: "STRING_VALUE",
 *   SnapshottingClusterId: "STRING_VALUE",
 *   AutomaticFailoverEnabled: true || false,
 *   MultiAZEnabled: true || false,
 *   NodeGroupId: "STRING_VALUE",
 *   CacheSecurityGroupNames: [ // CacheSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   NotificationTopicArn: "STRING_VALUE",
 *   CacheParameterGroupName: "STRING_VALUE",
 *   NotificationTopicStatus: "STRING_VALUE",
 *   ApplyImmediately: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   SnapshotRetentionLimit: Number("int"),
 *   SnapshotWindow: "STRING_VALUE",
 *   CacheNodeType: "STRING_VALUE",
 *   AuthToken: "STRING_VALUE",
 *   AuthTokenUpdateStrategy: "SET" || "ROTATE" || "DELETE",
 *   UserGroupIdsToAdd: [ // UserGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   UserGroupIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveUserGroups: true || false,
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
 *   IpDiscovery: "ipv4" || "ipv6",
 *   TransitEncryptionEnabled: true || false,
 *   TransitEncryptionMode: "preferred" || "required",
 *   ClusterMode: "enabled" || "disabled" || "compatible",
 * };
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationGroupResult
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
 * @param ModifyReplicationGroupCommandInput - {@link ModifyReplicationGroupCommandInput}
 * @returns {@link ModifyReplicationGroupCommandOutput}
 * @see {@link ModifyReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone. For
 *             more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p>The KMS key supplied is not valid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes in a single cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes per customer.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example ModifyReplicationGroup
 * ```javascript
 * //
 * const input = {
 *   "ApplyImmediately": true,
 *   "ReplicationGroupDescription": "Modified replication group",
 *   "ReplicationGroupId": "my-redis-rg",
 *   "SnapshotRetentionLimit": 30,
 *   "SnapshottingClusterId": "my-redis-rg-001"
 * };
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationGroup": {
 *     "AutomaticFailover": "enabled",
 *     "Description": "Modified replication group",
 *     "MemberClusters": [
 *       "my-redis-rg-001",
 *       "my-redis-rg-002",
 *       "my-redis-rg-003"
 *     ],
 *     "NodeGroups": [
 *       {
 *         "NodeGroupId": "0001",
 *         "NodeGroupMembers": [
 *           {
 *             "CacheClusterId": "my-redis-rg-001",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "primary",
 *             "PreferredAvailabilityZone": "us-east-1b",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-001.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           },
 *           {
 *             "CacheClusterId": "my-redis-rg-002",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "replica",
 *             "PreferredAvailabilityZone": "us-east-1a",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-002.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           },
 *           {
 *             "CacheClusterId": "my-redis-rg-003",
 *             "CacheNodeId": "0001",
 *             "CurrentRole": "replica",
 *             "PreferredAvailabilityZone": "us-east-1c",
 *             "ReadEndpoint": {
 *               "Address": "my-redis-rg-003.abcdef.0001.use1.cache.amazonaws.com",
 *               "Port": 6379
 *             }
 *           }
 *         ],
 *         "PrimaryEndpoint": {
 *           "Address": "my-redis-rg.abcdef.ng.0001.use1.cache.amazonaws.com",
 *           "Port": 6379
 *         },
 *         "Status": "available"
 *       }
 *     ],
 *     "PendingModifiedValues": {},
 *     "ReplicationGroupId": "my-redis-rg",
 *     "SnapshottingClusterId": "my-redis-rg-002",
 *     "Status": "available"
 *   }
 * }
 * *\/
 * // example id: modifyreplicationgroup-1483039689581
 * ```
 *
 */
export class ModifyReplicationGroupCommand extends $Command<
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
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
  constructor(readonly input: ModifyReplicationGroupCommandInput) {
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
  ): Handler<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "ModifyReplicationGroup",
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
  private serialize(input: ModifyReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReplicationGroupCommandOutput> {
    return de_ModifyReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
