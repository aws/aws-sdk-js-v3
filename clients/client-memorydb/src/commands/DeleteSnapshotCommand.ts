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
import { DeleteSnapshotRequest, DeleteSnapshotResponse } from "../models/models_0";
import { de_DeleteSnapshotCommand, se_DeleteSnapshotCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteSnapshotCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteSnapshotCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotResponse
 * //   Snapshot: { // Snapshot
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     ClusterConfiguration: { // ClusterConfiguration
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ParameterGroupName: "STRING_VALUE",
 * //       SubnetGroupName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       NumShards: Number("int"),
 * //       Shards: [ // ShardDetails
 * //         { // ShardDetail
 * //           Name: "STRING_VALUE",
 * //           Configuration: { // ShardConfiguration
 * //             Slots: "STRING_VALUE",
 * //             ReplicaCount: Number("int"),
 * //           },
 * //           Size: "STRING_VALUE",
 * //           SnapshotCreationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //     DataTiering: "true" || "false",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSnapshotCommandInput - {@link DeleteSnapshotCommandInput}
 * @returns {@link DeleteSnapshotCommandOutput}
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidSnapshotStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DeleteSnapshotCommand extends $Command<
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
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
  constructor(readonly input: DeleteSnapshotCommandInput) {
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
  ): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DeleteSnapshotCommand";
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
  private serialize(input: DeleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotCommandOutput> {
    return de_DeleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
