import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListVoiceConnectorsRequest, ListVoiceConnectorsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListVoiceConnectorsCommand,
  serializeAws_restJson1ListVoiceConnectorsCommand,
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

export type ListVoiceConnectorsCommandInput = ListVoiceConnectorsRequest;
export type ListVoiceConnectorsCommandOutput = ListVoiceConnectorsResponse & __MetadataBearer;

/**
 * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
 */
export class ListVoiceConnectorsCommand extends $Command<
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVoiceConnectorsCommandInput) {
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
  ): Handler<ListVoiceConnectorsCommandInput, ListVoiceConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListVoiceConnectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVoiceConnectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVoiceConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVoiceConnectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVoiceConnectorsCommandOutput> {
    return deserializeAws_restJson1ListVoiceConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
