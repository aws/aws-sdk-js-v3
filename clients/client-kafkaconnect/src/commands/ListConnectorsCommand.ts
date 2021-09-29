import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorsCommand,
  serializeAws_restJson1ListConnectorsCommand,
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

export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListConnectorsCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListConnectorsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListConnectorsCommand extends $Command<
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConnectorsCommandInput) {
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
  ): Handler<ListConnectorsCommandInput, ListConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "ListConnectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConnectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectorsCommandOutput> {
    return deserializeAws_restJson1ListConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
