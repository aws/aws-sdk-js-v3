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
import { BatchUpdateClusterRequest, BatchUpdateClusterResponse } from "../models/models_0";
import { de_BatchUpdateClusterCommand, se_BatchUpdateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateClusterCommand}.
 */
export interface BatchUpdateClusterCommandInput extends BatchUpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateClusterCommand}.
 */
export interface BatchUpdateClusterCommandOutput extends BatchUpdateClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, BatchUpdateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, BatchUpdateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // BatchUpdateClusterRequest
 *   ClusterNames: [ // ClusterNameList // required
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdate: { // ServiceUpdateRequest
 *     ServiceUpdateNameToApply: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchUpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateClusterResponse
 * //   ProcessedClusters: [ // ClusterList
 * //     { // Cluster
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PendingUpdates: { // ClusterPendingUpdates
 * //         Resharding: { // ReshardingStatus
 * //           SlotMigration: { // SlotMigration
 * //             ProgressPercentage: Number("double"),
 * //           },
 * //         },
 * //         ACLs: { // ACLsUpdateStatus
 * //           ACLToApply: "STRING_VALUE",
 * //         },
 * //         ServiceUpdates: [ // PendingModifiedServiceUpdateList
 * //           { // PendingModifiedServiceUpdate
 * //             ServiceUpdateName: "STRING_VALUE",
 * //             Status: "available" || "in-progress" || "complete" || "scheduled",
 * //           },
 * //         ],
 * //       },
 * //       NumberOfShards: Number("int"),
 * //       Shards: [ // ShardList
 * //         { // Shard
 * //           Name: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //           Nodes: [ // NodeList
 * //             { // Node
 * //               Name: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               CreateTime: new Date("TIMESTAMP"),
 * //               Endpoint: { // Endpoint
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //           NumberOfNodes: Number("int"),
 * //         },
 * //       ],
 * //       AvailabilityMode: "singleaz" || "multiaz",
 * //       ClusterEndpoint: {
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       NodeType: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       EnginePatchVersion: "STRING_VALUE",
 * //       ParameterGroupName: "STRING_VALUE",
 * //       ParameterGroupStatus: "STRING_VALUE",
 * //       SecurityGroups: [ // SecurityGroupMembershipList
 * //         { // SecurityGroupMembership
 * //           SecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SubnetGroupName: "STRING_VALUE",
 * //       TLSEnabled: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       SnsTopicStatus: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       SnapshotWindow: "STRING_VALUE",
 * //       ACLName: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       DataTiering: "true" || "false",
 * //     },
 * //   ],
 * //   UnprocessedClusters: [ // UnprocessedClusterList
 * //     { // UnprocessedCluster
 * //       ClusterName: "STRING_VALUE",
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateClusterCommandInput - {@link BatchUpdateClusterCommandInput}
 * @returns {@link BatchUpdateClusterCommandOutput}
 * @see {@link BatchUpdateClusterCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class BatchUpdateClusterCommand extends $Command<
  BatchUpdateClusterCommandInput,
  BatchUpdateClusterCommandOutput,
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
  constructor(readonly input: BatchUpdateClusterCommandInput) {
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
  ): Handler<BatchUpdateClusterCommandInput, BatchUpdateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "BatchUpdateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "BatchUpdateCluster",
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
  private serialize(input: BatchUpdateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateClusterCommandOutput> {
    return de_BatchUpdateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
