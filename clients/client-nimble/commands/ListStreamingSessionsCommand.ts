import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStreamingSessionsRequest, ListStreamingSessionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListStreamingSessionsCommand,
  serializeAws_restJson1ListStreamingSessionsCommand,
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

export interface ListStreamingSessionsCommandInput extends ListStreamingSessionsRequest {}
export interface ListStreamingSessionsCommandOutput extends ListStreamingSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists the streaming image resources in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingSessionsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingSessionsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingSessionsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStreamingSessionsCommand extends $Command<
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamingSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamingSessionsCommandInput, ListStreamingSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListStreamingSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamingSessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamingSessionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamingSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStreamingSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamingSessionsCommandOutput> {
    return deserializeAws_restJson1ListStreamingSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
