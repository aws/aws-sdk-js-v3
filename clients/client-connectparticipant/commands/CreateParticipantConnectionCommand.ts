import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateParticipantConnectionCommand,
  serializeAws_restJson1CreateParticipantConnectionCommand,
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

export type CreateParticipantConnectionCommandInput = CreateParticipantConnectionRequest;
export type CreateParticipantConnectionCommandOutput = CreateParticipantConnectionResponse & __MetadataBearer;

/**
 * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking
 *             this API instead of ConnectionToken.</p>
 *         <p>The participant token is valid for the lifetime of the participant – until the they
 *             are part of a contact.</p>
 *         <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must
 *             manually connect to the returned websocket URL and subscribe to the desired topic.  </p>
 *         <p>For
 *             chat, you need to publish the following on the established websocket connection:</p>
 *
 *
 *         <p>
 *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
 *          </p>
 *
 *         <p>Upon websocket URL expiry, as
 *             specified in the response ConnectionExpiry parameter, clients need to call this API
 *             again to obtain a new websocket URL and perform the same steps as before.</p>
 */
export class CreateParticipantConnectionCommand extends $Command<
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateParticipantConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "CreateParticipantConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateParticipantConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateParticipantConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateParticipantConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateParticipantConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateParticipantConnectionCommandOutput> {
    return deserializeAws_restJson1CreateParticipantConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
