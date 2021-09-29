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
import { GetItemInput, GetItemOutput } from "../models/models_0";
import { deserializeAws_json1_0GetItemCommand, serializeAws_json1_0GetItemCommand } from "../protocols/Aws_json1_0";

export interface GetItemCommandInput extends GetItemInput {}
export interface GetItemCommandOutput extends GetItemOutput, __MetadataBearer {}

/**
 * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary
 *           key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p>
 *          <p>
 *             <code>GetItem</code> provides an eventually consistent read by default. If your application
 *       requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although
 *       a strongly consistent read might take more time than an eventually consistent read, it always
 *       returns the last updated value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new GetItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetItemCommandInput} for command's `input` shape.
 * @see {@link GetItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetItemCommand extends $Command<GetItemCommandInput, GetItemCommandOutput, DynamoDBClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetItemCommandInput) {
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
  ): Handler<GetItemCommandInput, GetItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "GetItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetItemInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetItemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetItemCommandOutput> {
    return deserializeAws_json1_0GetItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
