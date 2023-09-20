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
import { CreateSnapshotRequest, CreateSnapshotResponse } from "../models/models_0";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a copy of an entire cluster at a specific moment in time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateSnapshotCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateSnapshotCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // CreateSnapshotRequest
 *   ClusterName: "STRING_VALUE", // required
 *   SnapshotName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotResponse
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
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
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
  constructor(readonly input: CreateSnapshotCommandInput) {
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
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "CreateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "CreateSnapshot",
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
  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return de_CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
