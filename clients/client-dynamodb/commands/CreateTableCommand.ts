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
import { CreateTableInput, CreateTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateTableCommand,
  serializeAws_json1_0CreateTableCommand,
} from "../protocols/Aws_json1_0";

export interface CreateTableCommandInput extends CreateTableInput {}
export interface CreateTableCommandOutput extends CreateTableOutput, __MetadataBearer {}

/**
 * <p>The <code>CreateTable</code> operation adds a new table to your account. In an AWS
 *             account, table names must be unique within each Region. That is, you can have two tables
 *             with same name if you create the tables in different Regions.</p>
 *          <p>
 *             <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request,
 *       DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After
 *       the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can
 *       perform read and write operations only on an <code>ACTIVE</code> table. </p>
 *          <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code>
 *       operation. If you want to create multiple tables with secondary indexes on them, you must create the
 *       tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at
 *       any given time.</p>
 *          <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTableCommand extends $Command<
  CreateTableCommandInput,
  CreateTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTableCommandInput) {
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
  ): Handler<CreateTableCommandInput, CreateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "CreateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableCommandOutput> {
    return deserializeAws_json1_0CreateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
