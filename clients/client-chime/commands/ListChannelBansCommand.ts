import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListChannelBansRequest, ListChannelBansResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelBansCommand,
  serializeAws_restJson1ListChannelBansCommand,
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

export type ListChannelBansCommandInput = ListChannelBansRequest;
export type ListChannelBansCommandOutput = ListChannelBansResponse & __MetadataBearer;

/**
 * <p>Lists all the users banned from a particular channel.</p>
 */
export class ListChannelBansCommand extends $Command<
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelBansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelBansCommandInput, ListChannelBansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListChannelBansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelBansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelBansResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChannelBansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelBansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelBansCommandOutput> {
    return deserializeAws_restJson1ListChannelBansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
