import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTagsCommand,
  serializeAws_restJson1ListTagsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListTagsCommandInput extends ListTagsRequest {}
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {}

/**
 * <p>Lists tags for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListTagsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListTagsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTagsCommand extends $Command<ListTagsCommandInput, ListTagsCommandOutput, MqClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsCommandInput, ListTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "ListTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsCommandOutput> {
    return deserializeAws_restJson1ListTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
