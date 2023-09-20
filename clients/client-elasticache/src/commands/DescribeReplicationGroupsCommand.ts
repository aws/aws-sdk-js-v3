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
import { DescribeReplicationGroupsMessage, ReplicationGroupMessage } from "../models/models_0";
import { de_DescribeReplicationGroupsCommand, se_DescribeReplicationGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationGroupsCommand}.
 */
export interface DescribeReplicationGroupsCommandInput extends DescribeReplicationGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationGroupsCommand}.
 */
export interface DescribeReplicationGroupsCommandOutput extends ReplicationGroupMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a particular replication group. If no identifier is
 *             specified, <code>DescribeReplicationGroups</code> returns information about all
 *             replication groups.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeReplicationGroupsMessage
 *   ReplicationGroupId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   ReplicationGroups: [ // ReplicationGroupList
 * //     { // ReplicationGroup
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GlobalReplicationGroupInfo: { // GlobalReplicationGroupInfo
 * //         GlobalReplicationGroupId: "STRING_VALUE",
 * //         GlobalReplicationGroupMemberRole: "STRING_VALUE",
 * //       },
 * //       Status: "STRING_VALUE",
 * //       PendingModifiedValues: { // ReplicationGroupPendingModifiedValues
 * //         PrimaryClusterId: "STRING_VALUE",
 * //         AutomaticFailoverStatus: "enabled" || "disabled",
 * //         Resharding: { // ReshardingStatus
 * //           SlotMigration: { // SlotMigration
 * //             ProgressPercentage: Number("double"),
 * //           },
 * //         },
 * //         AuthTokenStatus: "SETTING" || "ROTATING",
 * //         UserGroups: { // UserGroupsUpdateStatus
 * //           UserGroupIdsToAdd: [ // UserGroupIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           UserGroupIdsToRemove: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //           { // PendingLogDeliveryConfiguration
 * //             LogType: "slow-log" || "engine-log",
 * //             DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //             DestinationDetails: { // DestinationDetails
 * //               CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //                 LogGroup: "STRING_VALUE",
 * //               },
 * //               KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //                 DeliveryStream: "STRING_VALUE",
 * //               },
 * //             },
 * //             LogFormat: "text" || "json",
 * //           },
 * //         ],
 * //         TransitEncryptionEnabled: true || false,
 * //         TransitEncryptionMode: "preferred" || "required",
 * //         ClusterMode: "enabled" || "disabled" || "compatible",
 * //       },
 * //       MemberClusters: [ // ClusterIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       NodeGroups: [ // NodeGroupList
 * //         { // NodeGroup
 * //           NodeGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           PrimaryEndpoint: { // Endpoint
 * //             Address: "STRING_VALUE",
 * //             Port: Number("int"),
 * //           },
 * //           ReaderEndpoint: {
 * //             Address: "STRING_VALUE",
 * //             Port: Number("int"),
 * //           },
 * //           Slots: "STRING_VALUE",
 * //           NodeGroupMembers: [ // NodeGroupMemberList
 * //             { // NodeGroupMember
 * //               CacheClusterId: "STRING_VALUE",
 * //               CacheNodeId: "STRING_VALUE",
 * //               ReadEndpoint: {
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //               },
 * //               PreferredAvailabilityZone: "STRING_VALUE",
 * //               PreferredOutpostArn: "STRING_VALUE",
 * //               CurrentRole: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SnapshottingClusterId: "STRING_VALUE",
 * //       AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //       MultiAZ: "enabled" || "disabled",
 * //       ConfigurationEndpoint: "<Endpoint>",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       ClusterEnabled: true || false,
 * //       CacheNodeType: "STRING_VALUE",
 * //       AuthTokenEnabled: true || false,
 * //       AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //       TransitEncryptionEnabled: true || false,
 * //       AtRestEncryptionEnabled: true || false,
 * //       MemberClustersOutpostArns: [ // ReplicationGroupOutpostArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       UserGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //         { // LogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: {
 * //             CloudWatchLogsDetails: {
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: {
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //           Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicationGroupCreateTime: new Date("TIMESTAMP"),
 * //       DataTiering: "enabled" || "disabled",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //       IpDiscovery: "ipv4" || "ipv6",
 * //       TransitEncryptionMode: "preferred" || "required",
 * //       ClusterMode: "enabled" || "disabled" || "compatible",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationGroupsCommandInput - {@link DescribeReplicationGroupsCommandInput}
 * @returns {@link DescribeReplicationGroupsCommandOutput}
 * @see {@link DescribeReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeReplicationGroups
 * ```javascript
 * // Returns information about the replication group myreplgroup.
 * const input = {};
 * const command = new DescribeReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationGroups": [
 *     {
 *       "AutomaticFailover": "enabled",
 *       "Description": "Test cluster",
 *       "MemberClusters": [
 *         "clustered-redis-0001-001",
 *         "clustered-redis-0001-002",
 *         "clustered-redis-0002-001",
 *         "clustered-redis-0002-002"
 *       ],
 *       "NodeGroups": [
 *         {
 *           "NodeGroupId": "0001",
 *           "NodeGroupMembers": [
 *             {
 *               "CacheClusterId": "clustered-redis-0001-001",
 *               "CacheNodeId": "0001",
 *               "PreferredAvailabilityZone": "us-east-1e"
 *             },
 *             {
 *               "CacheClusterId": "clustered-redis-0001-002",
 *               "CacheNodeId": "0001",
 *               "PreferredAvailabilityZone": "us-east-1c"
 *             }
 *           ],
 *           "Status": "available"
 *         },
 *         {
 *           "NodeGroupId": "0002",
 *           "NodeGroupMembers": [
 *             {
 *               "CacheClusterId": "clustered-redis-0002-001",
 *               "CacheNodeId": "0001",
 *               "PreferredAvailabilityZone": "us-east-1c"
 *             },
 *             {
 *               "CacheClusterId": "clustered-redis-0002-002",
 *               "CacheNodeId": "0001",
 *               "PreferredAvailabilityZone": "us-east-1b"
 *             }
 *           ],
 *           "Status": "available"
 *         }
 *       ],
 *       "PendingModifiedValues": {},
 *       "ReplicationGroupId": "clustered-redis",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describereplicationgroups-1481742639427
 * ```
 *
 */
export class DescribeReplicationGroupsCommand extends $Command<
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
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
  constructor(readonly input: DescribeReplicationGroupsCommandInput) {
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
  ): Handler<DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReplicationGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeReplicationGroups",
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
  private serialize(input: DescribeReplicationGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReplicationGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationGroupsCommandOutput> {
    return de_DescribeReplicationGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
