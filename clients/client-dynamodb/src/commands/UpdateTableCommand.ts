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
import { UpdateTableInput, UpdateTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateTableCommand,
  serializeAws_json1_0UpdateTableCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateTableCommandInput extends UpdateTableInput {}
export interface UpdateTableCommandOutput extends UpdateTableOutput, __MetadataBearer {}

/**
 * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p>
 *          <p>You can only perform one of the following operations at once:</p>
 *          <ul>
 *             <li>
 *                <p>Modify the provisioned throughput settings of the table.</p>
 *             </li>
 *             <li>
 *                <p>Enable or disable DynamoDB Streams on the table.</p>
 *             </li>
 *             <li>
 *                <p>Remove a global secondary index from the table.</p>
 *             </li>
 *             <li>
 *                <p>Create a new global secondary index on the table. After the index begins
 *                     backfilling, you can use <code>UpdateTable</code> to perform other
 *                     operations.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status
 *       changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>,
 *       you cannot issue another <code>UpdateTable</code> request. When the table returns to the
 *         <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTableCommand extends $Command<
  UpdateTableCommandInput,
  UpdateTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTableCommandInput) {
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
  ): Handler<UpdateTableCommandInput, UpdateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTableCommandOutput> {
    return deserializeAws_json1_0UpdateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
