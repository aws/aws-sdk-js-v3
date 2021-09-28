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
import { ExecuteTransactionInput, ExecuteTransactionOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ExecuteTransactionCommand,
  serializeAws_json1_0ExecuteTransactionCommand,
} from "../protocols/Aws_json1_0";

export interface ExecuteTransactionCommandInput extends ExecuteTransactionInput {}
export interface ExecuteTransactionCommandOutput extends ExecuteTransactionOutput, __MetadataBearer {}

/**
 * <p>
 * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteTransactionCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteTransactionCommandInput} for command's `input` shape.
 * @see {@link ExecuteTransactionCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExecuteTransactionCommand extends $Command<
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteTransactionCommandInput) {
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
  ): Handler<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ExecuteTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteTransactionInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteTransactionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ExecuteTransactionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteTransactionCommandOutput> {
    return deserializeAws_json1_0ExecuteTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
