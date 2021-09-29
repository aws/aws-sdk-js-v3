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
import { DeleteItemInput, DeleteItemOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteItemCommand,
  serializeAws_json1_0DeleteItemCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteItemCommandInput extends DeleteItemInput {}
export interface DeleteItemCommandOutput extends DeleteItemOutput, __MetadataBearer {}

/**
 * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
 *          <p>In addition to deleting an item, you can also return the item's attribute values in the same
 *       operation, using the <code>ReturnValues</code> parameter.</p>
 *          <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it
 *       multiple times on the same item or attribute does <i>not</i> result in an error response.</p>
 *          <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteItemCommandInput} for command's `input` shape.
 * @see {@link DeleteItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteItemCommand extends $Command<
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteItemCommandInput) {
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
  ): Handler<DeleteItemCommandInput, DeleteItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DeleteItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteItemInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteItemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteItemCommandOutput> {
    return deserializeAws_json1_0DeleteItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
