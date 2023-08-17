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
} from "@smithy/types";

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { de_DeleteClusterCommand, se_DeleteClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandInput extends DeleteClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandOutput extends DeleteClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a cluster. It also deletes all associated nodes and node endpoints</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   FinalSnapshotName: "STRING_VALUE",
 * };
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterResponse
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
 * @param DeleteClusterCommandInput - {@link DeleteClusterCommandInput}
 * @returns {@link DeleteClusterCommandOutput}
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: DeleteClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DeleteClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterCommandOutput> {
    return de_DeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
