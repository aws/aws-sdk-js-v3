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
import { ListTagsOfResourceInput, ListTagsOfResourceOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListTagsOfResourceCommand,
  serializeAws_json1_0ListTagsOfResourceCommand,
} from "../protocols/Aws_json1_0";

export interface ListTagsOfResourceCommandInput extends ListTagsOfResourceInput {}
export interface ListTagsOfResourceCommandOutput extends ListTagsOfResourceOutput, __MetadataBearer {}

/**
 * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p>
 *          <p>For an overview on tagging DynamoDB resources, see
 *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
 *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTagsOfResourceCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTagsOfResourceCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListTagsOfResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsOfResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsOfResourceCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTagsOfResourceCommand extends $Command<
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsOfResourceCommandInput) {
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
  ): Handler<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListTagsOfResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsOfResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsOfResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsOfResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListTagsOfResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsOfResourceCommandOutput> {
    return deserializeAws_json1_0ListTagsOfResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
