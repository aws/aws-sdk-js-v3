import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListQueueQuickConnectsRequest, ListQueueQuickConnectsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListQueueQuickConnectsCommand,
  serializeAws_restJson1ListQueueQuickConnectsCommand,
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

export interface ListQueueQuickConnectsCommandInput extends ListQueueQuickConnectsRequest {}
export interface ListQueueQuickConnectsCommandOutput extends ListQueueQuickConnectsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the quick connects associated with a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListQueueQuickConnectsCommand extends $Command<
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListQueueQuickConnectsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQueueQuickConnectsCommandInput, ListQueueQuickConnectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListQueueQuickConnectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueueQuickConnectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListQueueQuickConnectsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueueQuickConnectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListQueueQuickConnectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueueQuickConnectsCommandOutput> {
    return deserializeAws_restJson1ListQueueQuickConnectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
