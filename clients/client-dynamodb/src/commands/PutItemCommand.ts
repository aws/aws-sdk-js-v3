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
  PutItemInput,
  PutItemInputFilterSensitiveLog,
  PutItemOutput,
  PutItemOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_0PutItemCommand, serializeAws_json1_0PutItemCommand } from "../protocols/Aws_json1_0";

export interface PutItemCommandInput extends PutItemInput {}
export interface PutItemCommandOutput extends PutItemOutput, __MetadataBearer {}

/**
 * <p>Creates a new item, or replaces an old item with a new item. If an item that has the
 *             same primary key as the new item already exists in the specified table, the new item
 *             completely replaces the existing item. You can perform a conditional put operation (add
 *             a new item if one with the specified primary key doesn't exist), or replace an existing
 *             item if it has certain attribute values. You can return the item's attribute values in
 *             the same operation, using the <code>ReturnValues</code> parameter.</p>
 *
 *         <p>When you add an item, the primary key attributes are the only required attributes.
 *             </p>
 *         <p>Empty String and Binary attribute values are allowed. Attribute values of type String
 *             and Binary must have a length greater than zero if the attribute is used as a key
 *             attribute for a table or index. Set type attributes cannot be empty. </p>
 *         <p>Invalid Requests with empty values will be rejected with a
 *                 <code>ValidationException</code> exception.</p>
 *         <note>
 *             <p>To prevent a new item from replacing an existing item, use a conditional
 *                 expression that contains the <code>attribute_not_exists</code> function with the
 *                 name of the attribute being used as the partition key for the table. Since every
 *                 record must contain that attribute, the <code>attribute_not_exists</code> function
 *                 will only succeed if no matching item exists.</p>
 *         </note>
 *         <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with
 *                 Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new PutItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutItemCommandInput} for command's `input` shape.
 * @see {@link PutItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 */
export class PutItemCommand extends $Command<PutItemCommandInput, PutItemCommandOutput, DynamoDBClientResolvedConfig> {
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

  constructor(readonly input: PutItemCommandInput) {
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
  ): Handler<PutItemCommandInput, PutItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutItemCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "PutItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutItemCommandOutput> {
    return deserializeAws_json1_0PutItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
