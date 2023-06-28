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
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { de_CreateClusterCommand, se_CreateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // CreateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeType: "STRING_VALUE", // required
 *   ParameterGroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NumShards: Number("int"),
 *   NumReplicasPerShard: Number("int"),
 *   SubnetGroupName: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   SnsTopicArn: "STRING_VALUE",
 *   TLSEnabled: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   SnapshotRetentionLimit: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotWindow: "STRING_VALUE",
 *   ACLName: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   DataTiering: true || false,
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
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
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ShardsPerClusterQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
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
  constructor(readonly input: CreateClusterCommandInput) {
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
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "CreateClusterCommand";
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
  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return de_CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
