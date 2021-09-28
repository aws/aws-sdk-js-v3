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
import { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListGlobalTablesCommand,
  serializeAws_json1_0ListGlobalTablesCommand,
} from "../protocols/Aws_json1_0";

export interface ListGlobalTablesCommandInput extends ListGlobalTablesInput {}
export interface ListGlobalTablesCommandOutput extends ListGlobalTablesOutput, __MetadataBearer {}

/**
 * <p>Lists all global tables that have a replica in the specified Region.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListGlobalTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGlobalTablesCommandInput} for command's `input` shape.
 * @see {@link ListGlobalTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGlobalTablesCommand extends $Command<
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGlobalTablesCommandInput) {
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
  ): Handler<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListGlobalTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGlobalTablesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGlobalTablesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGlobalTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListGlobalTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGlobalTablesCommandOutput> {
    return deserializeAws_json1_0ListGlobalTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
