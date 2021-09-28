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
import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ExecuteStatementCommand,
  serializeAws_json1_0ExecuteStatementCommand,
} from "../protocols/Aws_json1_0";

export interface ExecuteStatementCommandInput extends ExecuteStatementInput {}
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, __MetadataBearer {}

/**
 * <p>
 * This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteStatementCommandInput) {
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
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteStatementInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteStatementOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return deserializeAws_json1_0ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
