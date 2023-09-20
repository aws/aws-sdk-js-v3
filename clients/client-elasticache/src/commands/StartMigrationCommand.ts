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
import { StartMigrationMessage, StartMigrationResponse } from "../models/models_0";
import { de_StartMigrationCommand, se_StartMigrationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandInput extends StartMigrationMessage {}
/**
 * @public
 *
 * The output of {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandOutput extends StartMigrationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, StartMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, StartMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // StartMigrationMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   CustomerNodeEndpointList: [ // CustomerNodeEndpointList // required
 *     { // CustomerNodeEndpoint
 *       Address: "STRING_VALUE",
 *       Port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new StartMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StartMigrationResponse
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
 * @param StartMigrationCommandInput - {@link StartMigrationCommandInput}
 * @returns {@link StartMigrationCommandOutput}
 * @see {@link StartMigrationCommandInput} for command's `input` shape.
 * @see {@link StartMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link ReplicationGroupAlreadyUnderMigrationFault} (client fault)
 *  <p>The targeted replication group is not available. </p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class StartMigrationCommand extends $Command<
  StartMigrationCommandInput,
  StartMigrationCommandOutput,
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
  constructor(readonly input: StartMigrationCommandInput) {
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
  ): Handler<StartMigrationCommandInput, StartMigrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMigrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "StartMigrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "StartMigration",
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
  private serialize(input: StartMigrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMigrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMigrationCommandOutput> {
    return de_StartMigrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
