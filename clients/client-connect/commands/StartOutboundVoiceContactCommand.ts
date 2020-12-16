import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartOutboundVoiceContactRequest, StartOutboundVoiceContactResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartOutboundVoiceContactCommand,
  serializeAws_restJson1StartOutboundVoiceContactCommand,
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

export type StartOutboundVoiceContactCommandInput = StartOutboundVoiceContactRequest;
export type StartOutboundVoiceContactCommandOutput = StartOutboundVoiceContactResponse & __MetadataBearer;

/**
 * <p>This API places an outbound call to a contact, and then initiates the contact flow. It
 *    performs the actions in the contact flow that's specified (in <code>ContactFlowId</code>).</p>
 *
 *          <p>Agents are not involved in initiating the outbound API (that is, dialing the contact). If
 *    the contact flow places an outbound call to a contact, and then puts the contact in queue, that's
 *    when the call is routed to the agent, like any other inbound case.</p>
 *
 *          <p>There is a 60 second dialing timeout for this operation. If the call is not connected after
 *    60 seconds, it fails.</p>
 *          <note>
 *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
 *     mobile numbers, you must submit a service quota increase request. For more information, see
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *          </note>
 */
export class StartOutboundVoiceContactCommand extends $Command<
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOutboundVoiceContactCommandInput) {
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
  ): Handler<StartOutboundVoiceContactCommandInput, StartOutboundVoiceContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartOutboundVoiceContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOutboundVoiceContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOutboundVoiceContactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOutboundVoiceContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartOutboundVoiceContactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOutboundVoiceContactCommandOutput> {
    return deserializeAws_restJson1StartOutboundVoiceContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
