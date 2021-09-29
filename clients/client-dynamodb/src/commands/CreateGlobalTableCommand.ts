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
import { CreateGlobalTableInput, CreateGlobalTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateGlobalTableCommand,
  serializeAws_json1_0CreateGlobalTableCommand,
} from "../protocols/Aws_json1_0";

export interface CreateGlobalTableCommandInput extends CreateGlobalTableInput {}
export interface CreateGlobalTableCommandOutput extends CreateGlobalTableOutput, __MetadataBearer {}

/**
 * <p>Creates a global table from an existing table. A global table creates a replication
 *             relationship between two or more DynamoDB tables with the same table name in the
 *             provided Regions. </p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
 *          </note>
 *
 *          <p>If you want to add a new replica table to a global table, each of the following conditions
 *    must be true:</p>
 *          <ul>
 *             <li>
 *                <p>The table must have the same primary key as all of the other replicas.</p>
 *             </li>
 *             <li>
 *                <p>The table must have the same name as all of the other replicas.</p>
 *             </li>
 *             <li>
 *                <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old
 *      images of the item.</p>
 *             </li>
 *             <li>
 *                <p>None of the replica tables in the global table can contain any data.</p>
 *             </li>
 *          </ul>
 *          <p>
 *      If global secondary indexes are specified, then the following conditions must also be met:
 *    </p>
 *         <ul>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same name.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same hash key and sort key (if present).
 *             </p>
 *             </li>
 *          </ul>
 *          <p>
 *      If local secondary indexes are specified, then the following conditions must also be met:
 *    </p>
 *         <ul>
 *             <li>
 *                <p>
 *                The local secondary indexes must have the same name.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The local secondary indexes must have the same hash key and sort key (if present).
 *             </p>
 *             </li>
 *          </ul>
 *
 *          <important>
 *             <p>
 *        Write capacity settings should be set consistently across your replica tables and
 *        secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write
 *        capacity settings for all of your global tables replicas and indexes.
 *     </p>
 *             <p>
 *        If you prefer to manage write capacity settings manually, you should provision equal
 *        replicated write capacity units to your replica tables. You should also provision
 *        equal replicated write capacity units to matching secondary indexes across
 *        your global table.
 *     </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new CreateGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateGlobalTableCommand extends $Command<
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGlobalTableCommandInput) {
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
  ): Handler<CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "CreateGlobalTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlobalTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGlobalTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGlobalTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateGlobalTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGlobalTableCommandOutput> {
    return deserializeAws_json1_0CreateGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
