import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateChannelMembershipRequest, CreateChannelMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelMembershipCommand,
  serializeAws_restJson1CreateChannelMembershipCommand,
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

export type CreateChannelMembershipCommandInput = CreateChannelMembershipRequest;
export type CreateChannelMembershipCommandOutput = CreateChannelMembershipResponse & __MetadataBearer;

/**
 * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the request header.
 *            A channel member can:</p>
 *          <ul>
 *             <li>
 *                <p>List messages</p>
 *             </li>
 *             <li>
 *                <p>Send messages</p>
 *             </li>
 *             <li>
 *                <p>Receive messages</p>
 *             </li>
 *             <li>
 *                <p>Edit their own messages</p>
 *             </li>
 *             <li>
 *                <p>Leave the channel</p>
 *             </li>
 *          </ul>
 *          <p>Privacy settings impact this action as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p>
 *             </li>
 *             <li>
 *                <p>Private Channels: You must be a member to list or send messages.</p>
 *             </li>
 *          </ul>
 */
export class CreateChannelMembershipCommand extends $Command<
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChannelMembershipCommandInput) {
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
  ): Handler<CreateChannelMembershipCommandInput, CreateChannelMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateChannelMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChannelMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelMembershipCommandOutput> {
    return deserializeAws_restJson1CreateChannelMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
