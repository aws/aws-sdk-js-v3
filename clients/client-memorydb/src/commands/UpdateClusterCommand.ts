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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { de_UpdateClusterCommand, se_UpdateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceWindow: "STRING_VALUE",
 *   SnsTopicArn: "STRING_VALUE",
 *   SnsTopicStatus: "STRING_VALUE",
 *   ParameterGroupName: "STRING_VALUE",
 *   SnapshotWindow: "STRING_VALUE",
 *   SnapshotRetentionLimit: Number("int"),
 *   NodeType: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   ReplicaConfiguration: { // ReplicaConfigurationRequest
 *     ReplicaCount: Number("int"),
 *   },
 *   ShardConfiguration: { // ShardConfigurationRequest
 *     ShardCount: Number("int"),
 *   },
 *   ACLName: "STRING_VALUE",
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterResponse
 * //   Cluster: { // Cluster
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PendingUpdates: { // ClusterPendingUpdates
 * //       Resharding: { // ReshardingStatus
 * //         SlotMigration: { // SlotMigration
 * //           ProgressPercentage: Number("double"),
 * //         },
 * //       },
 * //       ACLs: { // ACLsUpdateStatus
 * //         ACLToApply: "STRING_VALUE",
 * //       },
 * //       ServiceUpdates: [ // PendingModifiedServiceUpdateList
 * //         { // PendingModifiedServiceUpdate
 * //           ServiceUpdateName: "STRING_VALUE",
 * //           Status: "available" || "in-progress" || "complete" || "scheduled",
 * //         },
 * //       ],
 * //     },
 * //     NumberOfShards: Number("int"),
 * //     Shards: [ // ShardList
 * //       { // Shard
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //         Nodes: [ // NodeList
 * //           { // Node
 * //             Name: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //             AvailabilityZone: "STRING_VALUE",
 * //             CreateTime: new Date("TIMESTAMP"),
 * //             Endpoint: { // Endpoint
 * //               Address: "STRING_VALUE",
 * //               Port: Number("int"),
 * //             },
 * //           },
 * //         ],
 * //         NumberOfNodes: Number("int"),
 * //       },
 * //     ],
 * //     AvailabilityMode: "singleaz" || "multiaz",
 * //     ClusterEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     NodeType: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     EnginePatchVersion: "STRING_VALUE",
 * //     ParameterGroupName: "STRING_VALUE",
 * //     ParameterGroupStatus: "STRING_VALUE",
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetGroupName: "STRING_VALUE",
 * //     TLSEnabled: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     SnsTopicStatus: "STRING_VALUE",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     MaintenanceWindow: "STRING_VALUE",
 * //     SnapshotWindow: "STRING_VALUE",
 * //     ACLName: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     DataTiering: "true" || "false",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidNodeStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link NoOperationFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ShardsPerClusterQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class UpdateClusterCommand extends $Command<
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
  MemoryDBClientResolvedConfig
> {
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
  constructor(readonly input: UpdateClusterCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "UpdateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "UpdateCluster",
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
  private serialize(input: UpdateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterCommandOutput> {
    return de_UpdateClusterCommand(output, context);
  }
}
