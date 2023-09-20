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
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { de_DescribeClustersCommand, se_DescribeClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandInput extends DescribeClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeClustersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeClustersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeClustersRequest
 *   ClusterName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ShowShardDetails: true || false,
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClustersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Clusters: [ // ClusterList
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
 * // };
 *
 * ```
 *
 * @param DescribeClustersCommandInput - {@link DescribeClustersCommandInput}
 * @returns {@link DescribeClustersCommandOutput}
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
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
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DescribeClustersCommand extends $Command<
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
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
  constructor(readonly input: DescribeClustersCommandInput) {
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
  ): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "DescribeClusters",
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
  private serialize(input: DescribeClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClustersCommandOutput> {
    return de_DescribeClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
