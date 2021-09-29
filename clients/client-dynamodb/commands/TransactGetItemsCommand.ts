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
import { TransactGetItemsInput, TransactGetItemsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0TransactGetItemsCommand,
  serializeAws_json1_0TransactGetItemsCommand,
} from "../protocols/Aws_json1_0";

export interface TransactGetItemsCommandInput extends TransactGetItemsInput {}
export interface TransactGetItemsCommandOutput extends TransactGetItemsOutput, __MetadataBearer {}

/**
 * <p>
 *             <code>TransactGetItems</code> is a synchronous operation that atomically retrieves
 *             multiple items from one or more tables (but not from indexes) in a single account and
 *             Region. A <code>TransactGetItems</code> call can contain up to 25
 *                 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code>
 *             structure that specifies an item to retrieve from a table in the account and Region. A
 *             call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one
 *             AWS account or Region. The aggregate size of the items in the transaction cannot exceed
 *             4 MB.</p>
 *          <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p>
 *          <ul>
 *             <li>
 *                <p>A conflicting operation is in the process of updating an
 *           item to be read.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction
 *           to be completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *             <li>
 *                <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TransactGetItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TransactGetItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new TransactGetItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransactGetItemsCommandInput} for command's `input` shape.
 * @see {@link TransactGetItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TransactGetItemsCommand extends $Command<
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransactGetItemsCommandInput) {
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
  ): Handler<TransactGetItemsCommandInput, TransactGetItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "TransactGetItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransactGetItemsInput.filterSensitiveLog,
      outputFilterSensitiveLog: TransactGetItemsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransactGetItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0TransactGetItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransactGetItemsCommandOutput> {
    return deserializeAws_json1_0TransactGetItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
