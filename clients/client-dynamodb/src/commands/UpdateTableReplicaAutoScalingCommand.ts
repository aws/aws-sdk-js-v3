// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import {
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingInputFilterSensitiveLog,
  UpdateTableReplicaAutoScalingOutput,
  UpdateTableReplicaAutoScalingOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand,
  serializeAws_json1_0UpdateTableReplicaAutoScalingCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link UpdateTableReplicaAutoScalingCommand}.
 */
export interface UpdateTableReplicaAutoScalingCommandInput extends UpdateTableReplicaAutoScalingInput {}
/**
 * The output of {@link UpdateTableReplicaAutoScalingCommand}.
 */
export interface UpdateTableReplicaAutoScalingCommandOutput
  extends UpdateTableReplicaAutoScalingOutput,
    __MetadataBearer {}

/**
 * <p>Updates auto scaling settings on your global tables at once.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 of global tables.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link UpdateTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 *
 */
export class UpdateTableReplicaAutoScalingCommand extends $Command<
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
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

  constructor(readonly input: UpdateTableReplicaAutoScalingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTableReplicaAutoScalingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateTableReplicaAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTableReplicaAutoScalingInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTableReplicaAutoScalingOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTableReplicaAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTableReplicaAutoScalingCommandOutput> {
    return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
