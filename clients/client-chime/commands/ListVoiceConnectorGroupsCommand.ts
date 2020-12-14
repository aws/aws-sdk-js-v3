import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListVoiceConnectorGroupsCommand,
  serializeAws_restJson1ListVoiceConnectorGroupsCommand,
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

export type ListVoiceConnectorGroupsCommandInput = ListVoiceConnectorGroupsRequest;
export type ListVoiceConnectorGroupsCommandOutput = ListVoiceConnectorGroupsResponse & __MetadataBearer;

/**
 * <p>Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.</p>
 */
export class ListVoiceConnectorGroupsCommand extends $Command<
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVoiceConnectorGroupsCommandInput) {
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
  ): Handler<ListVoiceConnectorGroupsCommandInput, ListVoiceConnectorGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListVoiceConnectorGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVoiceConnectorGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVoiceConnectorGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVoiceConnectorGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVoiceConnectorGroupsCommandOutput> {
    return deserializeAws_restJson1ListVoiceConnectorGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
