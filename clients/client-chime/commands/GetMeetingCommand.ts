import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetMeetingRequest, GetMeetingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMeetingCommand,
  serializeAws_restJson1GetMeetingCommand,
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

export type GetMeetingCommandInput = GetMeetingRequest;
export type GetMeetingCommandOutput = GetMeetingResponse & __MetadataBearer;

/**
 * <p>Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p>
 */
export class GetMeetingCommand extends $Command<
  GetMeetingCommandInput,
  GetMeetingCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMeetingCommandInput) {
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
  ): Handler<GetMeetingCommandInput, GetMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMeetingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMeetingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMeetingCommandOutput> {
    return deserializeAws_restJson1GetMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
