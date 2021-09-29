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
import { UpdateItemInput, UpdateItemOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateItemCommand,
  serializeAws_json1_0UpdateItemCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateItemCommandInput extends UpdateItemInput {}
export interface UpdateItemCommandOutput extends UpdateItemOutput, __MetadataBearer {}

/**
 * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
 *          <p>You can also return the item's attribute values in the same <code>UpdateItem</code>
 *       operation using the <code>ReturnValues</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateItemCommandInput} for command's `input` shape.
 * @see {@link UpdateItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateItemCommand extends $Command<
  UpdateItemCommandInput,
  UpdateItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateItemCommandInput) {
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
  ): Handler<UpdateItemCommandInput, UpdateItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateItemInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateItemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateItemCommandOutput> {
    return deserializeAws_json1_0UpdateItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
