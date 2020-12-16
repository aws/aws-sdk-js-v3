import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartChatContactRequest, StartChatContactResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartChatContactCommand,
  serializeAws_restJson1StartChatContactCommand,
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

export type StartChatContactCommandInput = StartChatContactRequest;
export type StartChatContactCommandOutput = StartChatContactResponse & __MetadataBearer;

/**
 * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides
 *    a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
 *
 *          <p>When a new chat contact is successfully created, clients need to subscribe to the
 *    participant’s connection for the created chat within 5 minutes. This is achieved by invoking
 *     <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
 *
 *          <p>A 429 error occurs in two situations:</p>
 *          <ul>
 *             <li>
 *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
 *      exception from the API Gateway.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
 *       chats</a> is exceeded. Active chat throttling returns a
 *       <code>LimitExceededException</code>.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information about how chat works, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export class StartChatContactCommand extends $Command<
  StartChatContactCommandInput,
  StartChatContactCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartChatContactCommandInput) {
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
  ): Handler<StartChatContactCommandInput, StartChatContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartChatContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartChatContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartChatContactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartChatContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartChatContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChatContactCommandOutput> {
    return deserializeAws_restJson1StartChatContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
