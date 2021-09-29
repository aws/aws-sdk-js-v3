import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { ListCustomPluginsRequest, ListCustomPluginsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCustomPluginsCommand,
  serializeAws_restJson1ListCustomPluginsCommand,
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

export interface ListCustomPluginsCommandInput extends ListCustomPluginsRequest {}
export interface ListCustomPluginsCommandOutput extends ListCustomPluginsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the custom plugins in this account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListCustomPluginsCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListCustomPluginsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new ListCustomPluginsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomPluginsCommandInput} for command's `input` shape.
 * @see {@link ListCustomPluginsCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCustomPluginsCommand extends $Command<
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomPluginsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomPluginsCommandInput, ListCustomPluginsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "ListCustomPluginsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomPluginsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomPluginsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomPluginsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCustomPluginsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCustomPluginsCommandOutput> {
    return deserializeAws_restJson1ListCustomPluginsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
